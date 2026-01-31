export interface CaseStudy {
    slug: string;
    title: string;
    company: string;
    overview: string;
    challenge: string;
    intervention: string;
    architecture: {
        text: string;
        points: string[];
    };
    results: {
        monthlyBill?: string;
        savings?: string;
        impact: string[];
        forensicAnalysis?: {
            title: string;
            headers: string[];
            rows: string[][];
            footer?: string;
        }[];
    };
    quote: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'fintech-cost-optimization-kubernetes-vs-fargate',
        title: 'How We Cut a Fintech\'s Cloud Bill by 75% Before Day 1',
        company: 'Fintech Startup',
        overview: 'A pre-revenue Fintech startup received a proposal from a "Modern DevOps Agency." The architecture was "Portfolio-Driven Development" at its finest: a massive AWS EKS (Kubernetes) cluster, oversized node groups, and complex service meshes—all for an app with zero active users.',
        challenge: 'The projected cost was $20,000 / month, which would have drained their seed funding rapidly.',
        intervention: 'We performed a forensic architecture review and identified that the complexity was unnecessary for the "0 to 1" phase. We stripped out the EKS control plane overhead and migrated the workload to AWS ECS Fargate.',
        architecture: {
            text: 'We implemented aggressive auto-scaling policies and a serverless-first approach.',
            points: [
                'Compute: AWS Fargate (Spot Instances for dev, On-Demand for Prod).',
                'IaC: Terraform (Modularized for rapid tear-down).',
                'Database: Aurora Serverless v2 (Pay only for active SQL cycles).'
            ]
        },
        results: {
            monthlyBill: '< $4,800',
            savings: '~$182,000',
            impact: [
                'The "Cluster Tax" ($3k/mo): We deleted the EKS Control Plane and oversized Node Groups. With ECS Fargate, you don\'t pay for the "Orchestrator," you only pay for the App.',
                'The "Zombie Infrastructure" ($6k/mo): The previous proposal had Dev/UAT environments running on massive servers 24/7. We moved them to Fargate Spot Instances and automated them to sleep when developers sleep.',
                'The "Network Bloat" ($2k/mo): They proposed 9 NAT Gateways (one for every Availability Zone in every environment). We consolidated this to 3 Shared NATs.',
                'The "License Trap" ($4k/mo): We replaced host-based licensing (Datadog) with event-based logging (CloudWatch), removing the penalty for scaling out.'
            ],
            forensicAnalysis: [
                {
                    title: '1. The "Bloated" Proposal (The Resume-Driven Stack)',
                    headers: ['Cost Driver', 'Technical Justification (The Waste)', 'Monthly Cost (Est.)'],
                    rows: [
                        ['Compute (Prod)', '6x m5.4xlarge (16 vCPU) across 3 AZs for HA.\n(Price: ~$0.768/hr x 730 hrs x 6 nodes)', '~$3,360'],
                        ['Compute (Non-Prod)', 'Mirror of Prod (Dev + UAT) running 24/7.\n(Agencies rarely script "shut down" logic for EKS node groups)', '~$3,360'],
                        ['EKS Control Plane', '$0.10/hr per cluster x 3 Clusters (Dev, UAT, Prod).\n($73/mo x 3)', '~$220'],
                        ['Networking', '9 NAT Gateways (3 AZs x 3 Envs).\n($0.045/hr x 9 GWs x 730 hrs + Data Proc)', '~$600+'],
                        ['Observability', 'Datadog Enterprise (Host-based licensing).\n($23/node x 12 nodes + Custom Metrics/Logs)', '~$2,500+'],
                        ['Load Balancers', 'Dedicated ALBs per microservice (20 services).\n(Common anti-pattern: 1 ALB per Service)', '~$1,500'],
                        ['Database', 'Provisioned Aurora (Writer + Reader).\n(Running 24/7 even when idle)', '~$1,200'],
                    ],
                    footer: 'TOTAL: ~$12,740 - $20,000+ (Variance depends on Observability/data transfer)'
                },
                {
                    title: '2. The "Optimized" Reality (The Velocity Stack)',
                    headers: ['Cost Driver', 'Optimization Strategy', 'Monthly Cost (Verified)'],
                    rows: [
                        ['Compute (Prod)', 'ECS Fargate. Right-sized tasks (1 vCPU).\n(No idle capacity; pay per second)', '~$800'],
                        ['Compute (Non-Prod)', 'Fargate Spot Instances (70% discount).\nAuto-shutdown nights/weekends (160 hrs/mo usage).', '~$150'],
                        ['Control Plane', 'ECS Control Plane is Free.', '$0'],
                        ['Networking', 'Shared NAT Gateway (1 per Env).\n(3 NATs total vs. 9)', '~$150'],
                        ['Observability', 'CloudWatch Container Insights.\n(Optimized ingestion)', '~$500'],
                        ['Load Balancers', 'Shared ALB (Path-based routing).\n(1 ALB per Environment)', '~$100'],
                        ['Database', 'Aurora Serverless v2.\n(Scales to 0.5 ACU ($0.06/hr) when idle)', '~$800'],
                    ],
                    footer: 'TOTAL: ~$2,500 - $4,800'
                }
            ]
        },
        quote: '"If your Day 1 architecture costs more than your first 5 employees, you don\'t have a scaling strategy. You have a spending problem."'
    },
    {
        slug: 'sovereign-ai-platform-aws-bedrock',
        title: 'Building a SOC2-Ready "Private GPT" for Regulated Finance',
        company: 'Regulated Financial Services Firm',
        overview: 'A regulated financial services firm needed to give their internal teams access to GenAI (LLMs) for document analysis but was blocked by compliance risks associated with public APIs.',
        challenge: 'They could not use public ChatGPT/Claude APIs due to data residency laws and "Zero Data Training" requirements.',
        intervention: 'We architected a Sovereign AI Platform entirely inside their AWS VPC, using VPC Interface Endpoints to ensure traffic never traversed the public internet.',
        architecture: {
            text: 'We deployed Amazon Bedrock with strict IAM policies and full audit logging.',
            points: [
                'Entry: API Gateway (Private) + AWS WAF (IP Whitelisting).',
                'Auth: Amazon Cognito (integrated with Corporate SSO) for RBAC.',
                'Compute: Python FastAPI on AWS Lambda (Serverless) in Private Subnets.',
                'Model: Amazon Bedrock (Claude 3.5 Sonnet) with Zero Data Retention.',
                'Audit: Full payload logging to S3 (Encrypted with KMS) + CloudWatch Logs Insights.'
            ]
        },
        results: {
            impact: [
                'Compliance: Passed internal ISO/SOC2 security review in 3 weeks.',
                'Adoption: Scaled to 5 internal departments in Month 1.',
                'Security: Zero Data Egress. The AI lives in the vault.'
            ]
        },
        quote: '"We didn\'t just build a chatbot. We built a data fortress that happens to speak English."'
    },
    {
        slug: 'fintech-idp-backstage-gcp-governance',
        title: 'Killing "Ticket Ops": Building a Self-Serve IDP for Fintech Velocity',
        company: 'Fast-Growing Fintech',
        overview: 'A fast-growing Fintech was paralyzed by its own success. The developer count had doubled, but the DevOps team remained small, leading to "Ticket Ops" bottlenecks.',
        challenge: 'Every deployment required a Jira ticket, causing 3+ day delays for environment provisioning and increasing the risk of "Shadow IT".',
        intervention: 'We shifted to a "Platform" model, building a custom Internal Developer Platform (IDP) using Spotify Backstage to codify compliant infrastructure standards.',
        architecture: {
            text: 'We created a "Golden Path" for developers to provision secure microservices.',
            points: [
                'Portal: Backstage (React) as the unified frontend.',
                'Orchestration: Custom Go plugins to interface with GCP and Kubernetes.',
                'Infra-as-Code: Terraform modules hidden behind the UI (Abstraction Layer).',
                'Governance: Policy-as-Code checks ran automatically before infrastructure was created.'
            ]
        },
        results: {
            impact: [
                'Velocity Boost: 40% increase in deployment frequency.',
                'Friction Reduced: "Ticket Ops" was eliminated for routine tasks.',
                'Compliance: 100% of new services followed the security standard by default.'
            ]
        },
        quote: '"We didn\'t just make developers faster. We made the secure way the path of least resistance."'
    }
];
