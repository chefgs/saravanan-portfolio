import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '@/config/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{portfolioData.projects.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{portfolioData.projects.description}</p>
        </div>
        <div className="grid gap-8">
          {portfolioData.projects.projectList.map((project, index) => (
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
