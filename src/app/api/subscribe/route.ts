import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Subscriber } from '@/models/subscriber';

// Simple email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const { db } = await connectToDatabase();
        const collection = db.collection<Subscriber>('subscribers');

        // Check for duplicate
        const existing = await collection.findOne({ email });
        if (existing) {
            return NextResponse.json(
                { message: 'You are already subscribed!' },
                { status: 200 } // Treat as success for UX
            );
        }

        const newSubscriber: Subscriber = {
            email,
            createdAt: new Date(),
        };

        await collection.insertOne(newSubscriber);

        return NextResponse.json(
            { message: 'Successfully subscribed!' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
