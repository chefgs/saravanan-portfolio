'use client';

import { Download, Briefcase, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/config/portfolioData';

const ResumeSection = () => {
  const { title, description, downloadButton, linkedInButton, timeline } = portfolioData.resume;

  const handleDownload = () => {
    // Create a link to the PDF and trigger a download
    const pdfUrl = '/documents/saravanan_profile.pdf';
    window.open(pdfUrl, '_blank');
  };

  const visitLinkedIn = () => {
    // Replace with your actual LinkedIn profile URL
    window.open('https://www.linkedin.com/in/saravanan-gnanaguru/', '_blank');
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-12 mb-8">
              <div className="absolute left-0 top-1.5 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Briefcase className="h-4 w-4" />
              </div>
               <div className="p-4 rounded-lg">
                <p className="font-semibold text-lg text-foreground">{item.role}</p>
                <p className="font-medium text-muted-foreground">{item.company} &middot; {item.period}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center space-x-4">
            <Button size="lg" onClick={handleDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="mr-2 h-5 w-5" />
                {downloadButton}
            </Button>
            <Button size="lg" onClick={visitLinkedIn} className="bg-[#0077B5] text-white hover:bg-[#0077B5]/90">
                <Linkedin className="mr-2 h-5 w-5" />
                {linkedInButton}
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
