
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { GitHub, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="particles-container"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <p 
            className={`mono text-portfolio-primary mb-5 text-lg opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Hi, my name is
          </p>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Mailarappa Budihal.
          </h1>
          
          <h2 
            className={`text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6 opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            I build things for the web.
          </h2>
          
          <div 
            className={`flex flex-wrap items-center mb-6 opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-portfolio-secondary/20 text-white py-1 px-3 rounded-full text-sm mr-3 mb-3">
              Backend Developer
            </div>
            <div className="bg-portfolio-primary/20 text-portfolio-primary py-1 px-3 rounded-full text-sm mr-3 mb-3">
              FunctionUp Certified
            </div>
            <div className="bg-portfolio-secondary/20 text-white py-1 px-3 rounded-full text-sm mb-3">
              ELSA Score: Outstanding
            </div>
          </div>
          
          <p 
            className={`text-lg text-portfolio-text mb-8 max-w-xl opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            I'm a backend developer specializing in building robust APIs and server-side applications.
            Currently focused on creating scalable web applications using Node.js, Express, and MongoDB.
          </p>
          
          <div 
            className={`flex flex-wrap items-center gap-4 opacity-0 ${
              mounted ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "1.2s" }}
          >
            <Button asChild className="bg-transparent border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10">
              <Link to="projects" smooth={true} duration={500} offset={-100}>
                View my projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4 ml-2">
              <a
                href="https://github.com/Mailarappa-Budihal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              >
                <GitHub className="w-5 h-5" />
              </a>
              <a
                href="https://bit.ly/3WLyKq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text hover:text-portfolio-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <div className="w-6 h-10 rounded-full border-2 border-portfolio-primary flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-portfolio-primary rounded-full animate-bounce"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
