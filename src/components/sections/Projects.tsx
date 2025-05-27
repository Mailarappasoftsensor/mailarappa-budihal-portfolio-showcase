
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Layers, Lightbulb, Rocket, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import "@/styles/projects.css";

const Projects = () => {
  // No longer need hover state as all content is visible
  // const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Dual Character Fusion AI Portrait Generator",
      description: "A groundbreaking AI system that generates unique portraits by fusing characteristics from two different subjects.",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEE-1stDScDFA/feedshare-shrink_1280/B56ZZjBG8gHsAo-/0/1745417976926?e=1749081600&v=beta&t=m99JbaeHIshVYL15rasb5-RRRFz0jzDE808pZUJ89pk",
      problem: "Creating realistic AI-generated portraits that combine features from multiple subjects is challenging and requires extensive data preparation.",
      solution: "Developed a custom LoRA training pipeline with 20 images per subject, implemented ControlNets for feature preservation, and created a seamless fusion algorithm.",
      tech: ["Python", "LoRa Training", "ControlNets", "ComfyUI", "Image Processing", "Jupyter Notebook", "JarvisLabs"],
      github: "",
      demo: "https://drive.google.com/file/d/1sA7PF2OzvGkP-WriJRSq5uvTOlc8fk_H/view?usp=drive_link",
      type: "Generative AI"
    },
    {
      title: "TestCraft Pro: Enterprise Test Generator",
      description: "An intelligent test case generation system that automates the creation of comprehensive test cases for software development.",
      image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEBT73b9GZKYA/articleshare-shrink_160/B56ZacXSUHHAAk-/0/1746380074236?e=1746986400&v=beta&t=8bNwcjiaHXRK22rGQVd3hBeY8wG3ADS1rn-PICAxBNY",
      problem: "Manual test case creation is time-consuming and prone to human error in large-scale development projects.",
      solution: "Built a Gradio-based frontend with GroqCloud LLM backend that generates detailed test cases based on code analysis and requirements.",
      tech: ["Python", "Gradio", "GroqCloud"],
      demo: "https://huggingface.co/spaces/MailarappaBudihal/TestcaseGenerator",
      type: "Generative AI"
    },
    {
      title: "E-commerce Product Management",
      description: "A comprehensive backend system for managing e-commerce products with user authentication, product catalog, and image handling.",
      image: "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165932.jpg?t=st=1746277375~exp=1746280975~hmac=ef121bf6b163a4e5daa19e25b65aed71ace5a353cd73706f23585671c730abd8&w=996",
      problem: "E-commerce platforms need robust product management systems that handle large catalogs while providing fast search and efficient image storage.",
      solution: "Implemented a RESTful API using Node.js and Express with JWT authentication, MongoDB for data storage, and AWS S3 for image optimization.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
      github: "https://github.com/Mailarappa-Budihal/project-5-Shoping-cart",
      demo: "https://github.com/Mailarappa-Budihal/project-5-Shoping-cart",
      type: "Backend"
    },
    {
      title: "URL Shortener",
      description: "A URL shortening service with Redis caching for improved performance and analytics for tracking link usage.",
      image: "https://www.bulkgate.com/wp-content/uploads/2022/05/blog-url-shortener.jpg",
      problem: "Long URLs are difficult to share and remember. Existing solutions lack detailed analytics and caching for high-traffic scenarios.",
      solution: "Built a system that generates short, unique URLs with Redis caching to handle high traffic loads and MongoDB for persistent storage.",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Redis"],
      github: "https://github.com/Mailarappa-Budihal/project-4-UrlShortner-own",
      demo: "https://github.com/Mailarappa-Budihal/project-4-UrlShortner-own",
      type: "Backend"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="flex items-center justify-center mb-4"
              >
                <div className="h-[1px] w-12 bg-portfolio-primary/50"></div>
                <span className="text-portfolio-primary font-semibold mx-4 uppercase text-sm tracking-wider">
                  My Work
                </span>
                <div className="h-[1px] w-12 bg-portfolio-primary/50"></div>
              </motion.div>
              
              <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12 flex items-center">
                <span className="text-portfolio-primary mono mr-2 text-4xl">/</span>
                <span>💻 Projects</span>
                <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-grow ml-4"></div>
              </h2>
              
              <motion.p
                variants={fadeIn('up', 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="text-portfolio-muted max-w-2xl mx-auto"
              >
                Explore a selection of my recent work showcasing my expertise in developing innovative solutions 
                for complex industrial and business challenges.
              </motion.p>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  // No longer need hover handlers
                  // onMouseEnter={() => setHoveredProject(index)}
                  // onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="h-full overflow-hidden bg-portfolio-card border-portfolio-border hover:border-portfolio-primary/50 transition-all duration-300 shadow-lg hover:shadow-portfolio-primary/10">
                    {/* Card Header with Image */}
                    <div className="relative">
                      {/* Decorative elements */}
                      <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-portfolio-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-portfolio-primary opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative">
                        <div className="project-image-container">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className={`project-image opacity-90 group-hover:opacity-100 ${index === 0 ? 'project-image-first' : ''}`}
                          />
                          
                          <div className="absolute top-3 right-3 flex items-center gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-portfolio-primary transition-colors duration-200 bg-portfolio-dark/70 p-2 rounded-full hover:bg-portfolio-primary/20"
                                title="GitHub Repository"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-portfolio-primary transition-colors duration-200 bg-portfolio-dark/70 p-2 rounded-full hover:bg-portfolio-primary/20"
                                title="Live Demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <CardHeader className="p-6 pb-2">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-lg md:text-xl font-bold text-white group-hover:text-portfolio-primary transition-colors duration-300">
                              {project.title}
                            </CardTitle>
                            <span className="text-portfolio-primary bg-portfolio-primary/20 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                              <Rocket className="w-3 h-3 mr-1" /> {project.type || 'Featured'}
                            </span>
                          </div>
                          <CardDescription className="text-portfolio-muted group-hover:text-portfolio-text transition-colors duration-300">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                      </div>
                    </div>
                    
                    {/* Project content - always visible */}
                    <div className="relative">
                      <div className="transform transition-transform duration-500 ease-in-out">
                        <CardContent className="pb-4 pt-6">
                          {/* Links moved to image overlay */}
                          <div className="grid grid-cols-1 gap-3">
                            <div className="bg-portfolio-dark/80 p-3 rounded-md border-l-2 border-portfolio-primary hover:border-l-4 transition-all duration-300">
                              <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-2 flex items-center">
                                <Lightbulb className="w-3 h-3 mr-1" />
                                Problem:
                              </h4>
                              <p className="text-xs text-portfolio-text">{project.problem}</p>
                            </div>
                            
                            <div className="bg-portfolio-dark/80 p-3 rounded-md border-l-2 border-portfolio-primary hover:border-l-4 transition-all duration-300">
                              <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-2 flex items-center">
                                <Check className="w-3 h-3 mr-1" />
                                Solution:
                              </h4>
                              <p className="text-xs text-portfolio-text">{project.solution}</p>
                            </div>
                            
                            <div className="bg-portfolio-dark/80 p-3 rounded-md border-l-2 border-portfolio-primary hover:border-l-4 transition-all duration-300">
                              <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-2 flex items-center">
                                <Layers className="w-3 h-3 mr-1" />
                                Tech Stack:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                  <span 
                                    key={i} 
                                    className="bg-portfolio-dark border border-portfolio-primary/30 text-portfolio-primary text-xs py-1 px-2 rounded-full hover:bg-portfolio-primary/10 hover:border-portfolio-primary/50 transition-all duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-center pt-0 pb-4">
                          <Button 
                            variant="default" 
                            size="sm" 
                            asChild 
                            className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-portfolio-primary/20 group/btn"
                          >
                            <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <span>View Project</span>
                              <ArrowUpRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
