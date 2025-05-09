
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, Download, Mail, Code, Briefcase, Award } from "lucide-react";
import { Link } from "react-scroll";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import "@/styles/hero.css";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hero-wrapper">
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center relative pt-5 hero-container"
      >
        <div className="particles-container"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div
              className={`opacity-0 ${mounted ? "animate-fade-in" : ""} delay-100 mx-auto md:mx-0 md:order-2 relative group md:-mt-8`}
            >
              {/* Passport-style photo frame with decorative elements */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -inset-6 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-80 transition-opacity duration-1000 group-hover:duration-200"></div>
                
                {/* Main photo container */}
                <div className="relative bg-portfolio-dark p-2 rounded-lg border-2 border-portfolio-primary shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  {/* Passport-style square photo */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden hero-image-container">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30"></div>
                    
                    {/* Actual image */}
                    <img 
                      src="/lovable-uploads/48d5e614-364e-4a28-a1bd-a7b0b86471ce.png" 
                      alt="Mailarappa Budihal" 
                      className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-500 hero-image"
                    />
                    
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Stamp-like certification */}
                  <div className="absolute -bottom-4 -right-4 bg-portfolio-dark border-2 border-portfolio-primary rounded-full p-2 shadow-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                    <Award className="w-6 h-6 text-portfolio-primary hero-badge-animation" />
                  </div>
                  
                  {/* Additional decorative badge */}
                  <div className="absolute -top-4 -left-4 bg-portfolio-dark border-2 border-purple-500 rounded-full p-2 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <Code className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                
                {/* Interactive elements that appear on hover */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-portfolio-primary text-white text-xs py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap">
                  AI Engineer & Developer
                </div>
              </div>
            </div>

            <div className="space-y-6 md:order-1 md:w-3/5">
              <div className="inline-block relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-full blur opacity-30"></div>
                <p
                  className={`mono text-portfolio-primary mb-2 text-lg opacity-0 ${mounted ? "animate-fade-in" : ""} delay-200 bg-portfolio-dark/80 border border-portfolio-primary/50 rounded-full px-4 py-1 relative flex items-center`}
                >
                  <span className="inline-block w-3 h-3 bg-portfolio-primary rounded-full mr-2 animate-pulse"></span>
                  <span className="relative">
                    Available for hire
                    <span className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-primary to-transparent"></span>
                  </span>
                </p>
              </div>

              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white hero-title">
                <span className="mr-2">👨‍💻</span><span className="text-portfolio-primary">Mailarappa</span> Budihal
              </div>

              <h2
                className={`text-lg md:text-2xl lg:text-3xl font-semibold text-portfolio-text mb-6 opacity-0 ${mounted ? "animate-fade-in" : ""} delay-600 relative`}
              >
                <span className="relative inline-block">
                  <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-portfolio-primary"></span>
                  <span className="relative">
                    Generative AI Engineer & Software Developer
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-primary/30 to-transparent"></span>
                  </span>
                </span>
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="relative group/badge cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-full opacity-0 group-hover/badge:opacity-100 blur transition duration-300"></div>
                  <div className="bg-portfolio-dark border border-portfolio-primary/30 text-portfolio-primary py-1.5 px-4 rounded-full text-sm group-hover/badge:border-portfolio-primary/80 transition-all duration-300 flex items-center relative">
                    <Code className="w-4 h-4 mr-2 group-hover/badge:text-white transition-colors duration-300" />
                    <span>Generative AI Specialist</span>
                  </div>
                </div>
                
                <div className="relative group/badge cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-full opacity-0 group-hover/badge:opacity-100 blur transition duration-300"></div>
                  <div className="bg-portfolio-dark border border-portfolio-primary/30 text-portfolio-primary py-1.5 px-4 rounded-full text-sm group-hover/badge:border-portfolio-primary/80 transition-all duration-300 flex items-center relative">
                    <Award className="w-4 h-4 mr-2 group-hover/badge:text-white transition-colors duration-300" />
                    <span>ELSA Score: Outstanding</span>
                  </div>
                </div>
                
                <div className="relative group/badge cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-0 group-hover/badge:opacity-100 blur transition duration-300"></div>
                  <div className="bg-portfolio-dark border border-purple-500/30 text-purple-400 py-1.5 px-4 rounded-full text-sm group-hover/badge:border-purple-500/80 transition-all duration-300 flex items-center relative">
                    <Briefcase className="w-4 h-4 mr-2 group-hover/badge:text-white transition-colors duration-300" />
                    <span>Backend Developer</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className={`text-lg text-portfolio-text opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1000 border-l-4 border-portfolio-primary pl-4`}
                >
                  I'm a <span className="text-portfolio-primary font-semibold">versatile developer</span> with expertise in backend development and generative AI. I build secure,
                  scalable API solutions using Node.js and MongoDB, while also creating advanced AI workflows with
                  ComfyUI, training LoRA models, and implementing image generation systems.
                </p>
                <p
                  className={`text-lg text-portfolio-text opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1100`}
                >
                  I specialize in building <span className="text-portfolio-primary font-semibold">cutting-edge AI solutions</span> and generative models. From custom LoRA training to advanced image generation, 
                  I transform complex AI challenges into practical, scalable applications using Python, ComfyUI, JarvisLabs and the latest AI frameworks.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    { name: "Node.js", color: "from-green-500 to-green-700" },
                    { name: "MongoDB", color: "from-green-600 to-teal-600" },
                    { name: "Python", color: "from-blue-500 to-blue-700" },
                    { name: "ComfyUI", color: "from-portfolio-primary to-purple-600" },
                    { name: "LoRA", color: "from-purple-500 to-pink-600" },
                    { name: "JarvisLabs", color: "from-red-500 to-orange-600" },
                    { name: "Express", color: "from-gray-600 to-gray-800" },
                    { name: "REST APIs", color: "from-blue-600 to-indigo-700" }
                  ].map((tech) => (
                    <span 
                      key={tech.name} 
                      className="relative group/tech cursor-pointer overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300`}></div>
                      <span className="bg-portfolio-dark border border-portfolio-primary/30 text-portfolio-text px-3 py-1 rounded-md text-sm block relative z-10 group-hover/tech:text-white group-hover/tech:border-transparent transition-all duration-300">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`flex flex-wrap gap-4 opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1200 mt-8`}
              >
                <div className="relative group/btn">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-lg blur opacity-75 group-hover/btn:opacity-100 transition duration-300"></div>
                  <Button asChild className="relative bg-portfolio-dark text-white border border-portfolio-primary hover:bg-portfolio-dark hover:scale-105 transition-all duration-300 shadow-lg group-hover/btn:shadow-portfolio-primary/30 group z-10">
                    <Link to="projects" smooth={true} duration={500} offset={-100}>
                      View my projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                <div className="relative group/btn">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                  <Button asChild className="relative bg-transparent border border-portfolio-primary/50 text-portfolio-primary hover:border-portfolio-primary hover:scale-105 transition-all duration-300 shadow-md group-hover/btn:shadow-portfolio-primary/20 group z-10">
                    <a href="https://drive.google.com/file/d/1ObiebOMwZ-n6Zp1nxJsB4roK1PO5IxQD/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 w-4 h-4" /> Download Resume
                    </a>
                  </Button>
                </div>

                <div className="relative group/btn">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-0 group-hover/btn:opacity-75 transition duration-300"></div>
                  <Button asChild className="relative bg-transparent border border-white/20 text-white hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-md group z-10">
                    <Link to="contact" smooth={true} duration={500} offset={-100}>
                      <Mail className="mr-2 w-4 h-4" /> Contact Me
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-4 ml-2">
                  <a
                    href="https://github.com/Mailarappa-Budihal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                    className="relative group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-portfolio-text group-hover/social:text-white transition-colors p-3 rounded-full border border-portfolio-text/20 group-hover/social:border-transparent">
                      <Github className="w-5 h-5" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mailarappa-budihal-795291194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                    className="relative group/social overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-portfolio-text group-hover/social:text-white transition-colors p-3 rounded-full border border-portfolio-text/20 group-hover/social:border-transparent">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="w-10 h-14 rounded-full border-2 border-portfolio-primary flex justify-center items-start p-1 relative overflow-hidden bg-portfolio-dark/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-portfolio-primary/5 to-portfolio-primary/20 group-hover:from-portfolio-primary/10 group-hover:to-portfolio-primary/30 transition-colors duration-500"></div>
              <div className="w-1.5 h-3 bg-portfolio-primary rounded-full animate-bounce relative z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center overflow-hidden">
                <span className="text-xs text-portfolio-primary transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">Explore</span>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs text-portfolio-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider">Scroll Down</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
