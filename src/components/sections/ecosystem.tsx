import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ecosystemItems = [
  {
    title: 'AI Engineering Circle',
    description:
      'A weekly practitioners co-working group for engineers applying AI to real workflows. 8 weeks in. 4.9 stars on Luma. Real problems, real engineers, no slides.',
    linkLabel: 'Join next session →',
    href: 'https://ai-engineering.in',
  },
  {
    title: 'Field Notes — gsaravanan.com',
    description:
      'Practitioner-grade writing on Sovereign AI, AI-SDLC, and secure cloud architecture. Updated regularly from real project and session observations.',
    linkLabel: 'Read the notes →',
    href: 'https://gsaravanan.com',
  },
  {
    title: 'Workshop Portfolio',
    description:
      '7 workshops for every engineering persona — developers, DevOps, QA, security, cloud engineers, and founders. Built from 59 real deployments, not slide decks.',
    linkLabel: 'View workshops →',
    href: '/workshops',
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Beyond the Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The practitioner ecosystem built alongside the consulting work.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemItems.map((item) => {
            const isInternal = item.href.startsWith('/');

            return (
              <div key={item.title} className="group block">
                <Link
                  href={item.href}
                  className="block h-full"
                  target={isInternal ? undefined : '_blank'}
                  rel={isInternal ? undefined : 'noopener noreferrer'}
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-xl">
                    <CardHeader className="flex h-full flex-col justify-between p-6">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl transition-colors group-hover:text-accent">
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                      <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent group-hover:underline">
                        {item.linkLabel}
                        {isInternal ? (
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        ) : (
                          <ExternalLink className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        )}
                      </span>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
