'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rss, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Full list of 15 blog posts
const allBlogPosts = [
  // Theme A: Sovereign AI & Security
  {
    title: 'The Anatomy of a Private GPT: Architecting for SOC2 in Banking',
    description: 'Why public chatbots fail audits. A deep dive into your AWS Bedrock + VPC Endpoint + Private Subnet topology.',
    tags: ['#PrivateGPT', '#Architecture', '#SOC2'],
    category: 'Sovereign AI',
    link: '#',
  },
  {
    title: 'Sovereign AI on Metal: Building an Air-Gapped LLM Stack with Ubuntu & vLLM',
    description: 'For when the cloud isn\'t private enough. How to run a "Sovereign Appliance" using hardened Ubuntu and Open Source models.',
    tags: ['#OnPremise', '#Ubuntu', '#vLLM'],
    category: 'Sovereign AI',
    link: '#',
  },
  {
    title: 'From Prompt to Production: The "Golden Path" for Secure GenAI Apps',
    description: 'Stop letting developers paste API keys in code. A guide to the Lambda + Bedrock + Guardrails serverless pattern.',
    tags: ['#SecureGenAI', '#Lambda', '#Guardrails'],
    category: 'Sovereign AI',
    link: '#',
  },
  {
    title: 'The Hidden Costs of AI: How to Prevent "Token Shock" in AWS Bedrock',
    description: 'GenAI is cheap on Day 1 and expensive on Day 30. How to implement quotas and cost governance using APIGW throttling.',
    tags: ['#CostOptimization', '#AWSBedrock', '#Governance'],
    category: 'Sovereign AI',
    link: '#',
  },
  // Theme B: Compliance-as-Code
  {
    title: 'Terraform is Your Auditor\'s Best Friend: Automating Evidence Collection',
    description: 'How to use Infrastructure-as-Code to prove Immutability and Traceability for ISO audits.',
    tags: ['#Terraform', '#IaC', '#Compliance'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'Killing the Bastion Host: Zero-Trust Access Patterns for Fintech',
    description: 'Why SSH keys are a liability. Using AWS SSM Session Manager and identity-based access for compliant operations.',
    tags: ['#ZeroTrust', '#AWSSSM', '#Security'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'The $180,000 Kubernetes Mistake: Why Complexity is a Security Risk',
    description: 'The story of the rightsizing win. Arguing that a complex K8s cluster is harder to secure and audit than a simple ECS setup.',
    tags: ['#CloudCost', '#Kubernetes', '#Complexity'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'NAT Gateways are Leaking Your Data (and Your Budget)',
    description: 'A technical takedown of the default Public Subnet + NAT Gateway pattern. Why VPC Interface Endpoints are superior.',
    tags: ['#AWS', '#Networking', '#Security'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'The Death of .env Files: Automated Secret Rotation with Terraform',
    description: 'Hardcoded secrets in CI/CD variables are a compliance failure. Walk through AWS Secrets Manager rotation.',
    tags: ['#SecretsManager', '#Security', '#Terraform'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'Deploy on Friday: The ECS Blue/Green Safety Net',
    description: 'Compliance requires availability. How to set up AWS CodeDeploy with ECS Fargate for safe deployments.',
    tags: ['#ECS', '#BlueGreen', '#DevOps'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'Logs are Your Forensic Evidence: Structured Security Logging',
    description: 'Text logs are useless during an incident. Guide on implementing JSON Structured Logging and CloudWatch Insights.',
    tags: ['#Logging', '#Forensics', '#Security'],
    category: 'Compliance',
    link: '#',
  },
  {
    title: 'The "Region Nuke" Test: Why IaC is Your Ransomware Policy',
    description: 'True Disaster Recovery isn\'t just backups. Using Terraform to re-hydrate an entire environment in a fresh region.',
    tags: ['#DisasterRecovery', '#Terraform', '#Resiliency'],
    category: 'Compliance',
    link: '#',
  },
  // Theme C: Platform Architect
  {
    title: 'Why Your "Internal Developer Platform" is actually a Compliance Engine',
    description: 'Don\'t sell IDPs as "making devs happy." Sell them as "making auditors happy" by forcing standardized paths.',
    tags: ['#IDP', '#Compliance', '#PlatformEng'],
    category: 'Platform',
    link: '#',
  },
  {
    title: 'Supply Chain Security in GitHub Actions: Stopping the Next SolarWinds',
    description: 'Leveraging your GitHub expertise. Using SBOMs and signed commits to guarantee code provenance.',
    tags: ['#GitHubActions', '#Security', '#SBOM'],
    category: 'Platform',
    link: '#',
  },
  {
    title: 'Identity is the New Perimeter: Integrating Cognito with Private AI Workloads',
    description: 'How to ensure that only the right employee can access the right LLM model using strict IAM and Cognito claims.',
    tags: ['#Cognito', '#IAM', '#PrivateAI'],
    category: 'Platform',
    link: '#',
  },
];



// ... (imports remain same)

// ... (allBlogPosts array remains same)

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesTab = activeTab === 'All' || post.category === activeTab;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const categories = ['All', 'Sovereign AI', 'Compliance', 'Platform'];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast({
        title: "Success!",
        description: data.message,
      });
      setEmail('');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">Insights on DevOps, Cloud, and AI-driven productivity.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeTab === category ? "default" : "outline"}
                onClick={() => setActiveTab(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <a href={post.link} key={post.title} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50">
                <CardContent className="flex-grow p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-accent">{tag}</span>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="text-sm font-semibold text-accent group-hover:underline flex items-center">
                    Read More <ArrowRight className="inline-block h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
            <Button variant="link" onClick={() => { setSearchQuery(''); setActiveTab('All'); }}>Clear filters</Button>
          </div>
        )}

        <div className="mt-16 text-center">
          <Card className="max-w-xl mx-auto p-6">
            <CardHeader className="p-2">
              <Rss className="h-8 w-8 text-accent mx-auto" />
              <CardTitle>Subscribe for Updates</CardTitle>
              <CardDescription>Get the latest articles on DevOps, Cloud, and AI delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
