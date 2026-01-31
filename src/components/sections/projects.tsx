import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: '$180k/Year Cloud Savings',
    company: 'Fintech Startup',
    duration: '2023',
    description: 'Saved a startup $180k/year by replacing a complex Kubernetes proposal with a streamlined AWS Fargate architecture. Reduced complexity and improved security posture.',
    tech: ['AWS Fargate', 'Cost Optimization', 'Security', 'Cloud Architecture'],
    link: '#',
  },
  {
    title: 'Private GPT Architecture',
    company: 'Banking Client',
    duration: '2024',
    description: 'Designed and deployed "Private GPT" infrastructure and "Sovereign AI" platforms on AWS Bedrock and On-Prem (Ubuntu/OSS) that pass SOC2/ISO audits.',
    tech: ['AWS Bedrock', 'Private GPT', 'SOC2', 'Sovereign AI', 'Ubuntu'],
    link: '#',
  },
  {
    title: 'Platform Engineering Portal (IDP)',
    company: 'Fintech Startup',
    duration: '2022',
    description: 'Built a self-serve Internal Developer Platform (IDP) that enabled developers to provision infrastructure, manage environments, and deploy applications with zero friction, boosting developer velocity by 40%.',
    tech: ['Platform Engineering', 'Backstage', 'Go', 'React', 'GCP'],
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects & Case Studies</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work demonstrating real-world impact.</p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50">
                <div className="flex flex-col p-6">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{project.company} &middot; {project.duration}</p>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                      {project.title}
                      {project.link !== '#' && <ExternalLink className="inline-block h-5 w-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
