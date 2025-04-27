
import React, { useEffect, useState } from "react";
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
                Hello! I'm Mailarappa Budihal, a backend developer passionate about building web applications. My journey in technology started during my agriculture studies, where I discovered my interest in programming.
              </p>
              
              <p className="text-portfolio-text mb-4">
                After completing my B.Sc in Agriculture, I transitioned to web development through the FunctionUp program, where I specialized in backend technologies like Node.js, Express, and MongoDB.
              </p>
              
              <p className="text-portfolio-text mb-6">
                I enjoy solving complex problems and creating efficient, scalable applications. My background in agriculture gives me a unique perspective on technology and its real-world applications.
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
                  src="https://placehold.co/400x500/0a192f/64ffda?text=Mailarappa+Budihal" 
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
