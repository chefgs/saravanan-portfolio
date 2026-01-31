import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Saravanan Gnanaguru | Sovereign AI & Compliance Architect for Fintech",
  description: "I build secure, SOC2-compliant Private GPT infrastructure for regulated industries. Architecting Sovereign AI on AWS Bedrock and On-Prem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saravanan Gnanaguru",
    "url": "https://gsaravanan.dev",
    "image": "https://gsaravanan.dev/path-to-your-headshot.jpg",
    "jobTitle": "Sovereign AI Architect & Founder",
    "description": "Cloud Architect specializing in Sovereign AI infrastructure, Private GPT deployments, and SOC2-compliant automation for Fintech and regulated industries.",
    "worksFor": {
      "@type": "Organization",
      "name": "CloudEngine Labs®",
      "url": "https://cloudenginelabs.io"
    },
    "sameAs": [
      "https://linkedin.com/in/saravanan-gnananguru",
      "https://twitter.com/saransid",
      "https://github.com/chefgs",
      "https://dev.to/chefgs"
    ],
    "knowsAbout": [
      "Sovereign AI Architecture",
      "Private GPT Implementation",
      "AWS Bedrock Security",
      "SOC2 Compliance Automation",
      "Fintech Cloud Infrastructure",
      "Platform Engineering",
      "Terraform & Infrastructure as Code",
      "Cost Optimization"
    ],
    "award": [
      "HashiCorp Ambassador",
      "AWS Community Builder"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Microsoft Fabric (Consultant)"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "The Secure Innovation Sandbox"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} font-sans antialiased`}>
        {/* Glowy blurred background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[60vw] h-[60vw] rounded-full bg-pink-400 opacity-20 blur-2xl"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
