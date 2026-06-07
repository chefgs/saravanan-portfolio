import { Github, Linkedin, Mail, Code, ExternalLink, Twitter, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/saravanan-gnanaguru/' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/chefgs' },
  { name: 'X', icon: Twitter, url: 'https://www.x.com/@saransid' },
  { name: 'Dev.to', icon: ExternalLink, url: 'https://dev.to/chefgs' },
  { name: 'Stack Overflow', icon: Code, url: 'https://stackoverflow.com/users/843986/saravanan-gnanaguru' },
  { name: 'Phone', icon: Phone, url: 'tel:+919789374170' },
  { name: 'Email', icon: Mail, url: 'mailto:saravanan@cloudenginelabs.io' },
];

const ecosystemLinks = [
  { name: 'AI Engineering Circle', url: 'https://ai-engineering.in' },
  { name: 'Dev Logs & Field Notes', url: 'https://gsaravanan.com' },
  { name: 'Product Portfolio', url: 'https://gs-vibe-codes.lovable.app' },
  { name: 'Book a Call', url: 'https://topmate.io/saravanan_gnanaguru/' },
];

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-end">
          <div className="w-full text-center lg:text-left">
            <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 lg:flex lg:flex-row lg:flex-wrap lg:items-center">
              <span className="font-medium text-foreground sm:col-span-2 lg:col-auto">Ecosystem:</span>
              {ecosystemLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Saravanan Gnanaguru. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
