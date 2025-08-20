'use client';

import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { portfolioData } from '@/config/portfolioData';

const TechnologiesSection = () => {
  const { title, description, logos } = portfolioData.technologies;
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Marquee
            pauseOnHover={true}
            speed={50}
            gradient={true}
            gradientColor="bg-gray-50 dark:bg-gray-900"
            gradientWidth={100}
          >
            <div className="flex items-center space-x-12 pr-12">
              {logos.map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center w-24 h-24">
                  <img 
                    src={tech.url} 
                    alt={tech.name} 
                    className="h-12 object-contain"
                  />
                  <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">{tech.name}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
