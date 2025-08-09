import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessage } from '@/models/contactMessage';
import nodemailer from 'nodemailer';

// Simple sanitization to prevent XSS/SQLi
function sanitize(input: string) {
  return input.replace(/[<>"'`;(){}]/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile, message } = await req.json();
    if (!name || !email || !mobile || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }
    const doc: ContactMessage = {
      name: sanitize(name),
      gmail: sanitize(email),
      mobile: sanitize(mobile),
      message: sanitize(message),
    };
    let db;
    try {
      const conn = await connectToDatabase();
      db = conn.db;
    } catch (dbErr) {
      console.error('MongoDB connection error:', dbErr);
      return NextResponse.json({ error: 'Database connection failed.' }, { status: 500 });
    }
    try {
      await db.collection('contactMessages').insertOne(doc);
    } catch (insertErr) {
      console.error('MongoDB insert error:', insertErr);
      return NextResponse.json({ error: 'Failed to save message.' }, { status: 500 });
    }

    // Email sending (Gmail SMTP). Fails gracefully without blocking core success.
    const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER;
    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
          logger: true,
          debug: true,
        });
        // Verify SMTP connection before sending
        try {
          await transporter.verify();
          console.log('SMTP connection verified.');
        } catch (verifyErr) {
          console.error('SMTP verify failed:', verifyErr);
          return NextResponse.json({ success: true, warning: 'SMTP verify failed', smtpError: verifyErr }, { status: 200 });
        }
        const safe = (s: string) => s.replace(/[\r\n]/g, ' ').slice(0, 5000);
        const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL || 'work@cloudenginelabs.io';
        const info = await transporter.sendMail({
          from: `Portfolio Contact <${smtpUser}>`,
          to: contactReceiver,
          replyTo: doc.gmail,
          subject: `New Contact Message from ${safe(doc.name)}`,
          text: `Name: ${doc.name}\nEmail: ${doc.gmail}\nMobile: ${doc.mobile}\nMessage:\n${doc.message}`,
          html: `<p><strong>Name:</strong> ${safe(doc.name)}</p>
                 <p><strong>Email:</strong> ${safe(doc.gmail)}</p>
                 <p><strong>Mobile:</strong> ${safe(doc.mobile)}</p>
                 <p><strong>Message:</strong><br/>${safe(doc.message)}</p>`
        });
        console.log('Mail sent id:', info.messageId);
      } catch (mailErr: any) {
        console.error('Email send error detail:', {
          code: mailErr.code,
          response: mailErr.response,
          command: mailErr.command,
          stack: mailErr.stack
        });
        return NextResponse.json({ success: true, warning: 'Saved but email not sent.', mailError: mailErr.code, mailResponse: mailErr.response }, { status: 200 });
      }
    } else {
      return NextResponse.json({ success: true, warning: 'Email credentials not configured.' });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
