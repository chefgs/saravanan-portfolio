import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import BlogSection from '@/components/sections/blog';
import ResumeSection from '@/components/sections/resume';
import ContactSection from '@/components/sections/contact';
import TechnologiesSection from '@/components/sections/technologies';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ServicesSection />
        <ProjectsSection />
        {/* <BlogSection /> */}
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
