import {
  Github,
  Linkedin,
  Code,
  ExternalLink,
  Mail,
  Twitter,
  Phone,
  Users,
  CloudCog,
  Pencil,
  CloudUpload,
  Bot,
  Orbit,
  Zap,
  CodeXml,
  AppWindow,
  Briefcase,
  Calendar
} from "lucide-react";

export const portfolioData = {
  name: "Saravanan Gnanaguru",
  image: "/saravanan-gnanaguru.jpg",
  hero: {
    title: "Accelerating Software Delivery with DevOps Cloud Automation & Deployment",
    description: "This is Saravanan, a problem solver passionate about Streamlining DevOps, Platform Engineering, Automating Infrastructure, Cloud operations, and Deploying AI at scale for real-world impact.",
    specialization: "Building AccelSDLC - A Developer Focused IDP Platform",
    socialProof: [
      "AWS Community Builder",
      "HashiCorp Ambassador",
      "Speaker",
      "Tech Blogger",
    ],
    socialLinks: [
      { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/saravanan-gnanaguru/' },
      { name: 'GitHub', icon: Github, url: 'https://github.com/chefgs' },
      { name: 'X', icon: Twitter, url: 'https://www.x.com/@saransid' },
      { name: 'Dev.to', icon: ExternalLink, url: 'https://dev.to/chefgs' },
      { name: 'Stack Overflow', icon: Code, url: 'https://stackoverflow.com/users/843986/saravanan-gnanaguru' },
      { name: 'Phone', icon: Phone, url: 'tel:+919789374170' },
      { name: 'Email', icon: Mail, url: 'mailto:saravanan@cloudenginelabs.io' },
    ],
  },
  about: {
    title: "About Me",
    description1: "I am the founder of CloudEngine Labs, a technology startup & private limited company that provides DevOps Cloud consulting services to Software development startup companies. With over 18 years of experience in various phases of IT software development that includes design, code development and DevOps & Cloud design and implementation. I help product startups accelerate the delivery of their products and features and more reliably, using cloud automation, infrastructure as code, and platform engineering.",
    description2: "My success story includes reducing the overall product release automation time from 2 days to 2 hours for a retail product development startup company. Before founding CloudEngine Labs, I worked with various companies, including Wipro, Accenture, Capgemini, HCL Technologies, and Infracloud Technologies, on projects ranging from small startups to large enterprise clients. I am also a technology blogger, speaker, career mentor, AWS Community Builder, and Hashicorp Ambassador. My passion is to share my knowledge and expertise in DevOps cloud technologies and help others succeed in their careers.",
    skillsTitle: "Top Skills",
    keyHighlights: [
      "Cloud Automation", "Leadership", "Technical Writing", "CI/CD",
      "Infrastructure as Code (IaC)", "Team Management", "Platform Engineering", "DevOps"
    ],
    career: {
      title: "Career Journey",
      timeline: [
        {
            role: "Founder",
            company: "CloudEngine Labs®",
            period: "2023 – Present",
            description: "Leading a technology startup providing DevOps cloud consulting for product startups, focusing on accelerating delivery and reliability through automation and platform engineering."
        },
        {
            role: "Self-Employed Consultant & Writer",
            company: "Freelance",
            period: "2019 – Present",
            description: "Offering expertise in cloud technology, DevOps, infrastructure automation, and creating organic SEO-optimized technical content for product companies."
        },
        {
            role: "DevOps Architect & Engineer",
            company: "Various (Microsoft, InfraCloud, Wipro)",
            period: "2020 – 2023",
            description: "Architected and implemented DevOps strategies, specializing in IaC, CI/CD, and multi-cloud environments for large-scale enterprises."
        },
        {
            role: "Previous Roles",
            company: "Accenture, HCL, Capgemini, Wipro",
            period: "2005 – 2019",
            description: "Progressed through various technical roles, from C++ developer to cloud automation architect, building a strong foundation in enterprise software development and infrastructure management."
        }
      ]
    }
  },
  services: {
    title: "What I Do",
    description: "Providing expert services to help your business thrive.",
    categories: [
      {
        value: 'devops-cloud',
        title: 'DevOps & Cloud',
        services: [
          {
            title: 'IT Consulting',
            description: 'Strategic guidance to align technology with your business goals.',
            icon: Users,
          },
          {
            title: 'Cloud Application Development',
            description: 'Building scalable, resilient applications on AWS, Azure, and GCP.',
            icon: CloudCog,
          },
           {
            title: 'Technical Writing & Blogging',
            description: 'Crafting clear, engaging, and SEO-optimized technical content.',
            icon: Pencil,
          },
          {
            title: 'GenAI Deployment',
            description: 'Deploying generative AI solutions to drive innovation and efficiency.',
            icon: CloudUpload,
          },
        ],
      },
      {
        value: 'ai-services',
        title: 'AI Services',
        services: [
          {
            title: 'AI Automation',
            description: 'Leveraging AI to automate and optimize your business processes.',
            icon: Bot,
          },
          {
            title: 'MLOps Pipeline Deployment',
            description: 'Building and managing robust MLOps pipelines for production.',
            icon: Orbit,
          },
          {
            title: 'n8n Workflow Automation',
            description: 'Creating powerful, custom workflows to automate your business logic.',
            icon: Zap,
          },
        ],
      },
      {
        value: 'software-dev',
        title: 'Software Development',
        services: [
         {
            title: 'Custom Software Development',
            description: 'Bespoke software solutions tailored to your specific business needs.',
            icon: CodeXml,
          },
          {
            title: 'Mobile Application Development',
            description: 'Creating engaging and high-performance mobile apps.',
            icon: AppWindow,
          },
        ],
      },
      {
        value: 'training-mentoring',
        title: 'Training & Mentoring',
        services: [
          {
            title: 'Career Development & Training',
            description: 'Mentoring and training teams to build skills in modern technologies.',
            icon: Briefcase,
          },
        ],
      },
    ]
  },
  projects: {
    title: "Featured Projects & Case Studies",
    description: "A selection of my work demonstrating real-world impact.",
    projectList: [
      {
        title: 'Cloud Release Automation',
        company: 'Retail SaaS Startup',
        duration: '2023',
        description: 'Architected and implemented a fully automated cloud release pipeline, reducing release times from 2 days to just 2 hours. Leveraged Infrastructure as Code and modern CI/CD practices on Kubernetes.',
        tech: ['Terraform', 'Kubernetes', 'AWS', 'CI/CD', 'Docker'],
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
      {
        title: 'Content Engineering & SEO',
        company: 'Major Cloud Vendor',
        duration: 'Ongoing',
        description: 'Develop and execute a content strategy for a major cloud vendor, creating SEO-optimized technical blog posts, tutorials, and documentation that drive organic traffic and developer engagement for new product launches.',
        tech: ['SEO', 'Technical Writing', 'Content Strategy', 'Cloud Technologies'],
        link: '#',
      },
      {
        title: 'E-commerce Microservices Architecture',
        company: 'Retail Startup',
        duration: '2021',
        description: 'Designed and implemented a microservices architecture for an e-commerce platform, improving scalability and maintainability. Integrated payment gateways, inventory management, and user authentication as part of the solution.',
        tech: ['Microservices', 'AWS', 'Docker', 'Kubernetes', 'Node.js'],
        link: '#',
      },
      {
        title: 'AI-Powered Chatbot Development',
        company: 'Tech Innovator',
        duration: '2023',
        description: 'Developed an AI-powered chatbot for a client in the tech industry, enhancing customer support and engagement. The chatbot was integrated with existing CRM systems and trained on industry-specific data.',
        tech: ['AI', 'Machine Learning', 'Python', 'TensorFlow', 'Dialogflow'],
        link: '#',
      },
    ]
  },
  contact: {
    title: "Get In Touch",
    description: "Have a project, a question, or just want to connect? Let's talk.",
    form: {
      title: "Send a Message",
      description: "Fill out the form and I'll get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      mobile: "Mobile",
      message: "Message",
      submit: "Send Message"
    },
    channels: {
      title: "Other Ways to Connect",
      description: "You can also find me on these platforms.",
      list: [
        {
          icon: Linkedin,
          label: "LinkedIn",
          value: "saravanan-gnanaguru",
          url: "https://www.linkedin.com/in/saravanan-gnanaguru/"
        },
        {
          icon: Mail,
          label: "Email",
          value: "saravanan@cloudenginelabs.io",
          url: "mailto:saravanan@cloudenginelabs.io"
        },
        {
          icon: Calendar,
          label: "Book a Call",
          value: "Schedule a meeting",
          url: "https://cal.com/saravanan-gnanaguru/15min"
        },
        {
          icon: Twitter,
          label: "Twitter / X",
          value: "@saransid",
          url: "https://x.com/saransid"
        },
        {
          icon: Phone,
          label: "Phone",
          value: "+91 97893 74170",
          url: "tel:+919789374170"
        }
      ]
    }
  }
};
