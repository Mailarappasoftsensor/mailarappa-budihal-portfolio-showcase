
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="hero-wrapper">
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center relative pt-20 hero-container"
      >
        <div className="particles-container"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-8">
            <div
              className={`opacity-0 ${mounted ? "animate-fade-in" : ""} delay-100 mx-auto`}
            >
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-portfolio-primary mx-auto">
                <AvatarImage src="/lovable-uploads/48d5e614-364e-4a28-a1bd-a7b0b86471ce.png" alt="Mailarappa Budihal" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
            </div>

            <div className="space-y-6">
              <p
                className={`mono text-portfolio-primary mb-2 text-lg opacity-0 ${mounted ? "animate-fade-in" : ""} delay-200`}
              >
                Hi, my name is
              </p>

              <h1
                className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 ${mounted ? "animate-fade-in" : ""} delay-400`}
              >
                Mailarappa Budihal.
              </h1>

              <h2
                className={`text-lg md:text-xl lg:text-2xl font-semibold text-portfolio-text mb-6 opacity-0 ${mounted ? "animate-fade-in" : ""} delay-600`}
              >
                Generative AI Engineer & Software Developer
              </h2>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-portfolio-primary/20 text-portfolio-primary py-1 px-3 rounded-full text-sm hover:bg-portfolio-primary/30 transition-colors duration-300">
                  Generative AI Specialist
                </div>
                <div className="bg-portfolio-primary/20 text-portfolio-primary py-1 px-3 rounded-full text-sm hover:bg-portfolio-primary/30 transition-colors duration-300">
                  ELSA Score: Outstanding
                </div>
                <div className="bg-portfolio-secondary/20 text-white py-1 px-3 rounded-full text-sm">
                  Generative AI
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className={`text-lg text-portfolio-text opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1000`}
                >
                  I'm a versatile developer with expertise in backend development and generative AI. I build secure,
                  scalable API solutions using Node.js and MongoDB, while also creating advanced AI workflows with
                  ComfyUI, training LoRA models, and implementing image generation systems.
                </p>
                <p
                  className={`text-lg text-portfolio-text opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1100`}
                >
                  I specialize in building cutting-edge AI solutions and generative models. From custom LoRA training to advanced image generation, 
                  I transform complex AI challenges into practical, scalable applications using Python,ComfyUI, JarvisLabs and the latest AI frameworks.
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-4 opacity-0 ${mounted ? "animate-fade-in" : ""} delay-1200`}
              >
                <Button asChild className="bg-transparent border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-portfolio-primary/20">
                  <Link to="projects" smooth={true} duration={500} offset={-100}>
                    View my projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>

                <Button asChild className="bg-transparent border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-portfolio-primary/20">
                  <a href="https://drive.google.com/file/d/1XgsrjewRhKJkm77-jth7sWdBRFOQe1g3/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    Download Resume <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/Mailarappa-Budihal"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                    className="text-portfolio-text hover:text-portfolio-primary transition-colors p-2 rounded-full hover:bg-portfolio-primary/10"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mailarappa-budihal-795291194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                    className="text-portfolio-text hover:text-portfolio-primary transition-colors p-2 rounded-full hover:bg-portfolio-primary/10"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <div className="w-6 h-10 rounded-full border-2 border-portfolio-primary flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-portfolio-primary rounded-full animate-bounce"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
