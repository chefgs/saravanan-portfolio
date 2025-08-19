import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { portfolioData } from '@/config/portfolioData';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{portfolioData.services.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{portfolioData.services.description}</p>
        </div>
        <Tabs defaultValue="devops-cloud" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8">
            {portfolioData.services.categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {portfolioData.services.categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <Card key={index} className="flex flex-col items-center text-center p-6 bg-card hover:bg-accent/20 transition-colors">
                    <CardHeader>
                      <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
