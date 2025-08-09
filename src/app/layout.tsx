import type {Metadata} from 'next';
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
  title: 'Saravanan Gnanaguru | Founder, DevOps & Cloud Expert',
  description: 'The personal portfolio of Saravanan Gnanaguru, showcasing expertise in DevOps, Cloud, SRE, and AI. Founder of CloudEngine Labs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
