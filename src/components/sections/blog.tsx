import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rss } from 'lucide-react';
import { Input } from '../ui/input';

const blogPosts = [
  // Theme A: The Sovereign AI & Security Series
  {
    title: 'The Anatomy of a Private GPT: Architecting for SOC2 in Banking',
    description: 'Why public chatbots fail audits. A deep dive into your AWS Bedrock + VPC Endpoint + Private Subnet topology.',
    tags: ['#PrivateGPT', '#Architecture', '#SOC2'],
    link: '#',
  },
  {
    title: 'Sovereign AI on Metal: Building an Air-Gapped LLM Stack with Ubuntu & vLLM',
    description: 'For when the cloud isn\'t private enough. How to run a "Sovereign Appliance" using hardened Ubuntu and Open Source models.',
    tags: ['#OnPremise', '#Ubuntu', '#vLLM'],
    link: '#',
  },
  {
    title: 'From Prompt to Production: The "Golden Path" for Secure GenAI Apps',
    description: 'Stop letting developers paste API keys in code. A guide to the Lambda + Bedrock + Guardrails serverless pattern.',
    tags: ['#SecureGenAI', '#Lambda', '#Guardrails'],
    link: '#',
  },
  {
    title: 'The Hidden Costs of AI: How to Prevent "Token Shock" in AWS Bedrock',
    description: 'GenAI is cheap on Day 1 and expensive on Day 30. How to implement quotas and cost governance using APIGW throttling.',
    tags: ['#CostOptimization', '#AWSBedrock', '#Governance'],
    link: '#',
  },
  // Theme B: The "Compliance-as-Code" Series
  {
    title: 'Terraform is Your Auditor\'s Best Friend: Automating Evidence Collection',
    description: 'How to use Infrastructure-as-Code to prove Immutability and Traceability for ISO audits.',
    tags: ['#Terraform', '#IaC', '#Compliance', '#ISO'],
    link: '#',
  },
  {
    title: 'Killing the Bastion Host: Zero-Trust Access Patterns for Fintech',
    description: 'Why SSH keys are a liability. Using AWS SSM Session Manager and identity-based access for compliant operations.',
    tags: ['#ZeroTrust', '#AWSSSM', '#Security'],
    link: '#',
  },
  {
    title: 'The $180,000 Kubernetes Mistake: Why Complexity is a Security Risk',
    description: 'The story of the rightsizing win. Arguing that a complex K8s cluster is harder to secure and audit than a simple ECS setup.',
    tags: ['#CloudCost', '#Kubernetes', '#Complexity'],
    link: '#',
  },
  // Theme C: The "Platform Architect" Series
  {
    title: 'Why Your "Internal Developer Platform" is actually a Compliance Engine',
    description: 'Don\'t sell IDPs as "making devs happy." Sell them as "making auditors happy" by forcing standardized, pre-approved paths.',
    tags: ['#IDP', '#Compliance', '#PlatformEng'],
    link: '#',
  },
  {
    title: 'Supply Chain Security in GitHub Actions: Stopping the Next SolarWinds',
    description: 'Leveraging your GitHub expertise. Using SBOMs and signed commits to guarantee code provenance.',
    tags: ['#GitHubActions', '#Security', '#SBOM'],
    link: '#',
  },
  {
    title: 'Identity is the New Perimeter: Integrating Cognito with Private AI Workloads',
    description: 'How to ensure that only the right employee can access the right LLM model using strict IAM and Cognito claims.',
    tags: ['#Cognito', '#IAM', '#PrivateAI', '#Security'],
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">Insights on DevOps, Cloud, and AI-driven productivity.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <a href={post.link} key={post.title} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50">
                <CardContent className="flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-accent">{tag}</span>
                    ))}
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="text-sm font-semibold text-accent group-hover:underline">
                    Read More <ArrowRight className="inline-block h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Card className="max-w-xl mx-auto p-6">
            <CardHeader className="p-2">
              <Rss className="h-8 w-8 text-accent mx-auto" />
              <CardTitle>Subscribe for Updates</CardTitle>
              <CardDescription>Get the latest articles on DevOps, Cloud, and AI delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="your.email@example.com" className="flex-grow" />
                <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
