import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "Saravanan Gnanaguru | Sovereign AI & Compliance Architect for Fintech",
  description: "I build secure, SOC2-compliant Private GPT infrastructure for regulated industries. Architecting Sovereign AI on Cloud and On-Prem.",
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
    "image": "https://www.gsaravanan.dev/_next/image?url=%2Fsaravanan-gnanaguru.jpg&w=828&q=75",
    "jobTitle": "Sovereign AI Architect & Founder",
    "description": "Cloud Architect specializing in Sovereign AI infrastructure, Private GPT deployments, and SOC2-compliant automation for Fintech and regulated industries.",
    "worksFor": {
      "@type": "Organization",
      "name": "CloudEngine Labs®",
      "url": "https://cloudenginelabs.io"
    },
    "sameAs": [
      "https://linkedin.com/in/saravanan-gnanaguru",
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
      "Cost Optimization",
      "AI & Machine Learning",
      "AI Consulting",
      "AI SDLC Best Practices"
    ],
    "award": [
      "HashiCorp Ambassador - 2023-2025",
      "AWS Community Builder - Since 2021"
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
      <body className="font-sans antialiased">
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
