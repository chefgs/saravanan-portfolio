import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const keyHighlights = [
    "Cloud Automation", "Leadership", "Technical Writing", "CI/CD",
    "Infrastructure as Code (IaC)", "Team Management", "Platform Engineering", "DevOps"
];

const enterpriseExperience = [
    "Wipro",
    "Accenture",
    "CapGemini",
    "HCL Technologies",
    "InfraCloud Technologies",
];

const timeline = [
    {
        role: "Founder",
        company: "CloudEngine Labs®",
        period: "2023 – Present",
        description: "Leading a technology startup providing DevOps cloud consulting for product startups, focusing on accelerating delivery and reliability through automation and platform engineering."
    },
    {
        role: "Self-Employed Consultant & Writer",
        company: "Freelance",
        period: "2019 – Present",
        description: "Offering expertise in cloud technology, DevOps, infrastructure automation, and creating organic SEO-optimized technical content for product companies."
    },
    {
        role: "DevOps Architect & Engineer",
        company: "Various (Microsoft, InfraCloud, Wipro)",
        period: "2020 – 2023",
        description: "Architected and implemented DevOps strategies, specializing in IaC, CI/CD, and multi-cloud environments for large-scale enterprises."
    },
    {
        role: "Previous Roles",
        company: "Accenture, HCL, Capgemini, Wipro",
        period: "2005 – 2019",
        description: "Progressed through various technical roles, from C++ developer to cloud automation architect, building a strong foundation in enterprise software development and infrastructure management."
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">About Me</h2>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            20 years ago I was writing C++ at Wipro. Today I architect Sovereign AI infrastructure for regulated industries and help engineering teams adopt AI without losing the discipline that made them good.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            Before founding CloudEngine Labs in 2023, I worked across Wipro, Accenture, Capgemini, HCL Technologies, and InfraCloud — from application developer to cloud architect. The through-line was always the same: make complex systems reliable, secure, and auditable.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            In the last 18 months I added a different kind of proof: 59 production-deployed applications built across 7 AI coding tools — all versioned on GitHub, all with real databases, real auth, real CI/CD, and UI end-to-end test automation. Not prototypes. Production.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            I also started the AI Engineering Circle — a weekly practitioner co-working group now in its 8th week with a 4.9 Luma rating — because the best way to understand where AI fits in real engineering work is to work through it with other practitioners, not read about it.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            AWS Community Builder since 2021. HashiCorp Ambassador since 2023. The case studies below are real. The numbers are real. The Topmate link works.
                        </p>
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-foreground">Top Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {keyHighlights.map(skill => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-foreground">Enterprise Experience</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    {enterpriseExperience.map((company) => (
                                        <div
                                            key={company}
                                            className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-sm"
                                        >
                                            {company}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-foreground">Career Journey</h3>
                        {timeline.map((item, index) => (
                             <div key={index} className="flex gap-4">
                                 <div className="flex flex-col items-center">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                                         <Briefcase className="h-4 w-4 text-accent" />
                                     </div>
                                     {index < timeline.length - 1 && <div className="w-px flex-grow bg-border" />}
                                 </div>
                                 <div className="pb-8">
                                     <p className="font-semibold text-foreground">{item.role} @ {item.company}</p>
                                     <p className="text-sm text-muted-foreground">{item.period}</p>
                                     <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
