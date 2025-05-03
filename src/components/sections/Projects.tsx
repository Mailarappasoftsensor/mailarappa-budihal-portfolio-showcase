
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dual Character Fusion AI Portrait Generator",
    description:
      "A groundbreaking AI system that generates unique portraits by fusing characteristics from two different subjects.",
    problem: "Creating realistic AI-generated portraits that combine features from multiple subjects is challenging and requires extensive data preparation.",
    solution: "Developed a custom LoRA training pipeline with 20 images per subject, implemented ControlNets for feature preservation, and created a seamless fusion algorithm.",
    tech: ["Python", "LoRA Training", "ControlNets", "ComfyUI", "Image Processing","Jupyter Notebook","JarvisLabs"],
    demo: "https://www.notion.so/MID-Capstone-Project-Template-1db81a2d58e1806f80b2c31b1d9414dc",
    image: "https://drive.google.com/file/d/1qLmK4Wq3nLntwzhNGXbasKzowENB66t9/view?usp=sharing"
  },
  {
    title: "TestCraft Pro: Enterprise Test Generator",
    description:
      "An intelligent test case generation system that automates the creation of comprehensive test cases for software development.",
    problem: "Manual test case creation is time-consuming and prone to human error in large-scale development projects.",
    solution: "Built a Gradio-based frontend with GroqCloud LLM backend that generates detailed test cases based on code analysis and requirements.",
    tech: ["Python", "Gradio", "GroqCloud", "NLP", "Code Analysis", "Test Automation"],
    github: "https://huggingface.co/spaces/MailarappaBudihal/TestcaseGenerator",
    demo: "https://huggingface.co/spaces/MailarappaBudihal/TestcaseGenerator",
    image: "https://drive.google.com/file/d/1GKy3wu4yKC0ZyxTIKBREamNsdY22PB_m/view?usp=sharing"
  },
  {
    title: "E-commerce Product Management",
    description:
      "A comprehensive backend system for managing e-commerce products with user authentication, product catalog, and image handling.",
    problem: "E-commerce platforms need robust product management systems that handle large catalogs while providing fast search and efficient image storage.",
    solution: "Implemented a RESTful API using Node.js and Express with JWT authentication, MongoDB for data storage, and AWS S3 for image optimization.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
    github: "https://github.com/Mailarappa-Budihal/project-5-Shoping-cart",
    image: "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165932.jpg?t=st=1746277375~exp=1746280975~hmac=ef121bf6b163a4e5daa19e25b65aed71ace5a353cd73706f23585671c730abd8&w=996"
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service with Redis caching for improved performance and analytics for tracking link usage.",
    problem: "Long URLs are difficult to share and remember. Existing solutions lack detailed analytics and caching for high-traffic scenarios.",
    solution: "Built a system that generates short, unique URLs with Redis caching to handle high traffic loads and MongoDB for persistent storage.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Redis"],
    github: "https://github.com/Mailarappa-Budihal/project-4-UrlShortner-own",
    image: "https://www.bulkgate.com/wp-content/uploads/2022/05/blog-url-shortener.jpg"
  }

];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-portfolio-dark/50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg overflow-hidden card-hover hover:shadow-portfolio-primary/20 hover:border-portfolio-primary/30 transition-all duration-300 hover:translate-y-[-5px] ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-xl relative inline-block">
                    <span className="relative z-10">{project.title}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-primary group-hover:w-full transition-all duration-500"></span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="text-portfolio-text text-sm mb-3">
                    {project.description}
                  </CardDescription>
                  <div className="mb-3 bg-portfolio-dark/70 p-2 rounded-md border-l-2 border-portfolio-primary">
                    <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-1 flex items-center">
                      <span className="w-1 h-1 bg-portfolio-primary mr-1 rounded-full"></span>
                      Problem:
                    </h4>
                    <p className="text-xs text-portfolio-text">{project.problem}</p>
                  </div>
                  <div className="mb-3 bg-portfolio-dark/70 p-2 rounded-md border-l-2 border-portfolio-primary">
                    <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-1 flex items-center">
                      <span className="w-1 h-1 bg-portfolio-primary mr-1 rounded-full"></span>
                      Solution:
                    </h4>
                    <p className="text-xs text-portfolio-text">{project.solution}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-portfolio-primary/10 text-portfolio-primary text-xs py-1 px-2 rounded-full border border-portfolio-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0 hover:bg-portfolio-primary/10 transition-all duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="w-4 h-4 mr-1" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0 hover:bg-portfolio-primary/10 transition-all duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Link className="w-4 h-4 mr-1" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
