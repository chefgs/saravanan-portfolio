import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/config/portfolioData";
import { Briefcase } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{portfolioData.about.title}</h2>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-justify">
                            {portfolioData.about.description1}
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-justify">
                           {portfolioData.about.description2}
                        </p>
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-foreground">{portfolioData.about.skillsTitle}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.about.keyHighlights.map(skill => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-foreground">{portfolioData.about.career.title}</h3>
                        {portfolioData.about.career.timeline.map((item, index) => (
                             <div key={index} className="flex gap-4">
                                 <div className="flex flex-col items-center">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                                         <Briefcase className="h-4 w-4 text-accent" />
                                     </div>
                                     {index < portfolioData.about.career.timeline.length - 1 && <div className="w-px flex-grow bg-border" />}
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
