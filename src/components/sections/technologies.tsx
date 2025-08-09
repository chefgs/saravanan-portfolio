'use client';

import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { FaCloud} from 'react-icons/fa';

const techLogos = [
  {
    name: 'Jenkins',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg',
  },
  {
    name: 'GitHub Actions',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  },
  {
    name: 'Jira',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
  },
/*   {
    name: 'Ant Build',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Apache_Ant_logo.svg',
  }, */

  {
    name: 'Terraform',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg',
  },
  {
    name: 'SonarQube',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Sonarqube-48x200.png',
  },
  {
    name: 'HCP Vault',
    url: 'https://www.hashicorp.com/_next/static/media/vault_on-dark.97792f64.svg',
  },
  {
    name: 'HCP Waypoint',
    url: 'https://www.hashicorp.com/_next/static/media/waypoint_on-dark.1f2cc8a5.svg',
  },
  {
    name: 'Docker',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  },
  {
    name: 'Kubernetes',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
  },
  {
    name: 'GenAI',
    url: '/ai.png',
  },
/*   {
    name: 'LangGraph',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Graph_icon.svg',
  }, */
  {
    name: 'LangChain',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/LangChain_Logo.svg',
  },
  {
    name: 'n8n',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg',
  },
  {
    name: 'DevOps',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg',
  },
  {
    name: 'Cloud',
    icon: FaCloud,
  },
  {
    name: 'AWS',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  },
  {
    name: 'GCP',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Google_cloud.png',
  },
  {
    name: 'Azure',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
  },
  {
    name: 'MLOps',
    isSvgText: true,
  },
  {
    name: 'AIOps',
    isSvgText: true,
  },
  {
    name: 'NPM',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg',
  },
  {
    name: 'Golang',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
  },
  {
    name: 'Python',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'Next.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    name: 'React.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Vue.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
  },
  {
    name: 'Nuxt.js',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg',
  },
  {
    name: 'Bash',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
  },
];

const TechnologiesSection = () => {
  const marqueeRef = useRef(null);
  const [play, setPlay] = useState(true);
  const [speed, setSpeed] = useState(60);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  
  // Function to handle left arrow click
  const handleMoveLeft = () => {
    // Set direction to left (reverse)
    setDirection('right');
    // Increase scroll speed
    setSpeed(150);
    
    // Reset after a few seconds
    setTimeout(() => {
      setSpeed(60);
      setDirection('left');
    }, 2000);
  };
  
  // Function to handle right arrow click
  const handleMoveRight = () => {
    // Set direction to right (normal)
    setDirection('left');
    // Increase scroll speed
    setSpeed(150);
    
    // Reset after a few seconds
    setTimeout(() => {
      setSpeed(60);
    }, 2000);
  };

  return (
    <section id="technologies" className="w-full py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Technologies and Tools</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tools and technologies I use for DevOps, Cloud, AI, and Software Engineering
        </p>
        
        <div className="relative mx-auto max-w-5xl">
          <Marquee 
            gradient={false} 
            speed={speed}
            play={play}
            pauseOnHover={true}
            direction={direction} 
            className="py-6 rounded-lg"
            ref={marqueeRef}
          >
            {techLogos.map((logo) => (
              <div key={logo.name} className="mx-8 flex flex-col items-center" style={{ minWidth: '100px' }}>
                {logo.icon ? (
                  <logo.icon className="h-16 w-16 mb-2 text-blue-400 dark:text-blue-300 dark:drop-shadow-[0_0_6px_rgba(147,197,253,0.5)]" aria-label={logo.name} />
                ) : logo.isSvgText && logo.name === 'MLOps' ? (
                  <svg width="64" height="64" viewBox="0 0 120 64" className="mb-2 dark:drop-shadow-[0_0_6px_rgba(147,197,253,0.5)]" aria-label="MLOps">
                    <text x="10" y="40" fontFamily="monospace" fontSize="32" fill="#6366f1" fontWeight="bold">ML-Ops</text>
                  </svg>
                ) : logo.isSvgText && logo.name === 'AIOps' ? (
                  <svg width="64" height="64" viewBox="0 0 120 64" className="mb-2 dark:drop-shadow-[0_0_6px_rgba(147,197,253,0.5)]" aria-label="AIOps">
                    <text x="10" y="40" fontFamily="monospace" fontSize="32" fill="#8b5cf6" fontWeight="bold">AI-Ops</text>
                  </svg>
                ) : (
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-16 w-auto object-contain mb-2 drop-shadow-lg dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] dark:brightness-[1.1] dark:contrast-[1.1]"
                    loading="lazy"
                    style={{ minWidth: 64, maxHeight: 64 }}
                  />
                )}
                <span className="text-sm text-foreground font-medium dark:text-white/90">{logo.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
