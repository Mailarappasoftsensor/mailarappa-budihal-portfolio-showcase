
import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2">01.</span> About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <p className="text-portfolio-text mb-4">
                Hello! I'm Mailarappa Budihal, a backend developer with a passion for building robust, scalable web applications. 
                My journey in technology began during my agriculture studies, where I discovered programming could solve real-world 
                agricultural challenges, leading me to pursue a career in software development.
              </p>
              
              <p className="text-portfolio-text mb-4">
                After completing my B.Sc in Agriculture, I made a significant career pivot through the FunctionUp program, 
                where I specialized in backend technologies like Node.js, Express, and MongoDB. This transition allowed me to 
                combine my analytical thinking from my agricultural background with technical skills.
              </p>
              
              <div className="mb-6 p-4 border-l-4 border-portfolio-primary bg-portfolio-dark/30">
                <h3 className="text-white text-xl mb-2">My Work Philosophy</h3>
                <p className="text-portfolio-text italic">
                  "I believe in writing clean, maintainable code that solves real problems. My approach 
                  combines technical excellence with practical solutions, always keeping the end user in mind."
                </p>
              </div>
              
              <p className="text-portfolio-text mb-6">
                I enjoy tackling complex problems and creating efficient, scalable applications. My unique background in agriculture 
                gives me a different perspective on technology implementation, especially for real-world applications.
              </p>

              <p className="text-portfolio-text">
                Here are some technologies I've been working with recently:
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">Express.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">MongoDB</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">AWS S3</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-portfolio-primary mr-2"></div>
                  <span className="mono text-sm">Redis</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative z-10 border-2 border-portfolio-primary rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-portfolio-primary opacity-20 group-hover:opacity-10 transition-opacity"></div>
                <img 
                  src="/lovable-uploads/48d5e614-364e-4a28-a1bd-a7b0b86471ce.png" 
                  alt="Mailarappa Budihal" 
                  className="mix-blend-multiply filter grayscale hover:filter-none transition-all w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 border-2 border-portfolio-primary h-full w-full rounded-md z-0 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
