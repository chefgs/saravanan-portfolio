import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4 md:px-6">
                <div className="mb-8">
                    <Button variant="ghost" asChild className="mb-4 pl-0 hover:bg-transparent hover:text-primary">
                        <Link href="/#projects">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Case Studies
                        </Link>
                    </Button>
                    <div className="space-y-4">
                        <Badge variant="secondary" className="text-sm">
                            {study.company}
                        </Badge>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            {study.title}
                        </h1>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.overview}
                                </p>
                                <div className="mt-4 p-4 bg-destructive/10 border-l-4 border-destructive rounded-r-md">
                                    <p className="font-medium text-destructive-foreground">{study.challenge}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">The Intervention</h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed">
                                    {study.intervention}
                                </p>
                            </div>
                        </section>

                        {/* Forensic Analysis Section */}
                        {study.results.forensicAnalysis && (
                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-primary">The Forensic Accounting</h2>
                                <div className="space-y-6">
                                    {study.results.forensicAnalysis.map((analysis, index) => (
                                        <Card key={index} className="overflow-hidden">
                                            <CardHeader className="bg-muted/50 p-4">
                                                <CardTitle className="text-lg">{analysis.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm">
                                                        <thead>
                                                            <tr className="border-b bg-muted/20">
                                                                {analysis.headers.map((header, i) => (
                                                                    <th key={i} className="px-4 py-3 text-left font-medium text-muted-foreground">{header}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {analysis.rows.map((row, rIndex) => (
                                                                <tr key={rIndex} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                                                                    {row.map((cell, cIndex) => (
                                                                        <td key={cIndex} className="px-4 py-3 align-top whitespace-pre-wrap">{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                        {analysis.footer && (
                                                            <tfoot>
                                                                <tr>
                                                                    <td colSpan={analysis.headers.length} className="px-4 py-3 font-bold bg-muted/30 border-t">
                                                                        {analysis.footer}
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        )}
                                                    </table>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        )}


                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-primary">The Architecture</h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Technical Implementation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{study.architecture.text}</p>
                                    <ul className="space-y-2">
                                        {study.architecture.points.map((point, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <Card className="bg-primary/5 border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-xl">Key Results</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {study.results.monthlyBill && (
                                        <div className="flex flex-col">
                                            <span className="text-sm text-muted-foreground">New Monthly Bill</span>
                                            <span className="text-2xl font-bold">{study.results.monthlyBill}</span>
                                        </div>
                                    )}
                                    {study.results.savings && (
                                        <div className="flex flex-col">
                                            <span className="text-sm text-muted-foreground">Annual Savings</span>
                                            <span className="text-2xl font-bold text-green-500">{study.results.savings}</span>
                                        </div>
                                    )}
                                    <div className="pt-4 border-t border-primary/10">
                                        <p className="text-sm font-medium mb-3 text-muted-foreground">Where did the savings come from?</p>
                                        <ul className="space-y-3">
                                            {study.results.impact.map((impact, i) => (
                                                <li key={i} className="text-sm flex gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{impact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <section>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-lg">
                                {study.quote}
                            </blockquote>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
}
