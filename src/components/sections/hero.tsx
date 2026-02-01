import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Code, ExternalLink, Mail, Twitter, Phone } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/saravanan-gnanaguru/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/chefgs' },
  { name: 'X', icon: Twitter, url: 'https://www.x.com/@saransid' },
  { name: 'Dev.to', icon: ExternalLink, url: 'https://dev.to/chefgs' },
  { name: 'Stack Overflow', icon: Code, url: 'https://stackoverflow.com/users/843986/saravanan-gnanaguru' },
  { name: 'Phone', icon: Phone, url: 'tel:+919789374170' },
  { name: 'Email', icon: Mail, url: 'mailto:saravanan@cloudenginelabs.io' },
];

const socialProof = [
  "Sovereign AI Architect",
  "HashiCorp Ambassador",
  "AWS Community Builder",
  "Delivered for Microsoft/DBS",
  "Tech Blogger"
];

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-background py-12 md:px-10 md:py-16">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 md:px-6 text-center md:text-left">
        <div className="w-full max-w-7xl xl:max-w-8xl 2xl:max-w-screen-2xl mx-auto rounded-3xl shadow-xl bg-gradient-to-br from-blue-400/80 via-purple-400/70 to-orange-400/60 dark:from-blue-900/80 dark:via-purple-900/70 dark:to-orange-900/60 p-8 md:p-14 lg:p-20 backdrop-blur-md border border-white/20 dark:border-white/10 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            <div className="order-2 md:order-1 space-y-4 max-w-6xl lg:max-w-7xl xl:max-w-full mx-auto md:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
                The Sovereign AI Architect for Regulated Finance.
              </h1>
              <p className="text-lg text-medium text-foreground mt-6">
                Founder of CloudEngine Labs® | I build compliance focused infrastructure.
              </p>
              <p className="text-lg text-medium text-foreground mt-6">
                I architect secure, compliant Private AI infrastructure for regulated industries. I help Fintechs and Banks build Sovereign AI on Cloud and On-Prem.
              </p>
              <p className="text-lg font-medium font-semibold text-primary mt-4">
                Creator of the AccelSDLC Platform.
              </p>
              <div className="flex justify-center md:justify-start flex-wrap gap-2 mt-6">
                {socialProof.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start mt-8">
                <Button size="lg" asChild>
                  <Link href="#projects">
                    See My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#contact">Book a Call</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4 pt-8 mt-2">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground hover:text-primary transition-colors">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square mt-6 md:mt-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
              <Card className="rounded-full w-4/5 h-4/5 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/saravanan-gnanaguru.jpg"
                    alt="Saravanan Gnanaguru"
                    fill
                    loading="lazy"
                    className="relative z-10 rounded-full border-4 border-card object-cover"
                    data-ai-hint="professional portrait man"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
