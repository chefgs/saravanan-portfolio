import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Workshops | Saravanan Gnanaguru',
  description: 'AI workshops for developers, DevOps, QA, security, founders, and engineering teams.',
};

const workshopTracks = [
  'AI for Developers',
  'AI for DevOps Engineers',
  'AI for Test Engineers',
  'AI App Builder Workshop — Build & Deploy in 5 Hours',
  'From Idea to MVP with AI — Founder Sprint',
  'AI Security / Infra Security Automation',
  'AI Productivity Foundations',
];

const pricing = [
  { workshop: 'AI for Test Engineers', price: '₹3,999 + GST' },
  { workshop: 'AI for Developers', price: '₹4,999 + GST' },
  { workshop: 'AI for DevOps Engineers', price: '₹6,000 + GST' },
  { workshop: 'AI Automation for Founders', price: '₹5,999 + GST' },
  { workshop: 'AI Security / Infra Security Automation', price: '₹6,999 + GST' },
  { workshop: 'AI App Builder Workshop', price: '₹7,999 + GST' },
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <Button variant="ghost" asChild className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
          <Link href="/#ecosystem">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ecosystem
          </Link>
        </Button>

        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Workshop Portfolio</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Hands-on AI workshops for engineering teams, practitioners, and founders built from real deployments rather than generic training decks.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle>Workshop Tracks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {workshopTracks.map((track) => (
                  <li key={track} className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground">
                    {track}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Workshop</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricing.map((item) => (
                    <TableRow key={item.workshop}>
                      <TableCell className="font-medium">{item.workshop}</TableCell>
                      <TableCell className="text-right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
