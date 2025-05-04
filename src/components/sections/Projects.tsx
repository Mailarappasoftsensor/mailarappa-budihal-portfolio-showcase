
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dual Character Fusion AI Portrait Generator",
    description:
      "A groundbreaking AI system that generates unique portraits by fusing characteristics from two different subjects.",
    problem: "Creating realistic AI-generated portraits that combine features from multiple subjects is challenging and requires extensive data preparation.",
    solution: "Developed a custom LoRA training pipeline with 20 images per subject, implemented ControlNets for feature preservation, and created a seamless fusion algorithm.",
    tech: ["Python", "LoRa Training", "ControlNets", "ComfyUI", "Image Processing","Jupyter Notebook","JarvisLabs"],
    demo: "https://www.notion.so/MID-Capstone-Project-Template-1db81a2d58e1806f80b2c31b1d9414dc",
    github: "",
    image: "https://media.licdn.com/dms/image/v2/D5622AQEE-1stDScDFA/feedshare-shrink_1280/B56ZZjBG8gHsAo-/0/1745417976926?e=1749081600&v=beta&t=m99JbaeHIshVYL15rasb5-RRRFz0jzDE808pZUJ89pk",
    type: "Generative AI"
  },
  {
    title: "TestCraft Pro: Enterprise Test Generator",
    description:
      "An intelligent test case generation system that automates the creation of comprehensive test cases for software development.",
    problem: "Manual test case creation is time-consuming and prone to human error in large-scale development projects.",
    solution: "Built a Gradio-based frontend with GroqCloud LLM backend that generates detailed test cases based on code analysis and requirements.",
    tech: ["Python", "Gradio", "GroqCloud"],
    demo: "https://huggingface.co/spaces/MailarappaBudihal/TestcaseGenerator",
    image: "https://media.licdn.com/dms/image/sync/v2/D5627AQEBT73b9GZKYA/articleshare-shrink_160/B56ZacXSUHHAAk-/0/1746380074236?e=1746986400&v=beta&t=8bNwcjiaHXRK22rGQVd3hBeY8wG3ADS1rn-PICAxBNY",
    type: "Generative AI"
  },
  {
    title: "E-commerce Product Management",
    description:
      "A comprehensive backend system for managing e-commerce products with user authentication, product catalog, and image handling.",
    problem: "E-commerce platforms need robust product management systems that handle large catalogs while providing fast search and efficient image storage.",
    solution: "Implemented a RESTful API using Node.js and Express with JWT authentication, MongoDB for data storage, and AWS S3 for image optimization.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
        image: "https://img.freepik.com/free-photo/discount-shopping-season-with-sale_23-2150165932.jpg?t=st=1746277375~exp=1746280975~hmac=ef121bf6b163a4e5daa19e25b65aed71ace5a353cd73706f23585671c730abd8&w=996",

    type: "Backend",
    demo: "https://github.com/Mailarappa-Budihal/project-5-Shoping-cart",
    github: "https://github.com/Mailarappa-Budihal/project-5-Shoping-cart",
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service with Redis caching for improved performance and analytics for tracking link usage.",
    problem: "Long URLs are difficult to share and remember. Existing solutions lack detailed analytics and caching for high-traffic scenarios.",
    solution: "Built a system that generates short, unique URLs with Redis caching to handle high traffic loads and MongoDB for persistent storage.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Redis"],
       image: "https://www.bulkgate.com/wp-content/uploads/2022/05/blog-url-shortener.jpg",
    type: "Backend",
    demo: "https://github.com/Mailarappa-Budihal/project-4-UrlShortner-own",
    github: "https://github.com/Mailarappa-Budihal/project-4-UrlShortner-own",
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section id="projects" className="py-20 bg-portfolio-dark/50">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`section ${inView ? "animate-slide-up" : ""}`}
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
              <span className="text-portfolio-primary mono mr-2"></span> Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`relative group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Card
                    className="border border-gray-800 bg-portfolio-dark/50 shadow-lg overflow-hidden hover:shadow-portfolio-primary/20 hover:border-portfolio-primary/30 transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain transform transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = "https://via.placeholder.com/800x450/1a1a1a/ffffff?text=Project+Image";
                        }}
                      />
                      <div className="absolute top-4 right-4 bg-portfolio-primary/20 text-portfolio-primary px-3 py-1 rounded-full text-xs font-medium">
                        {project.type}
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-white text-xl relative inline-block">
                        <span className="relative z-10">{project.title}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-primary group-hover:w-full transition-all duration-500"></span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-portfolio-primary bg-portfolio-primary/20 px-3 py-1 rounded-full text-xs font-medium">
                            {project.impact}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-portfolio-text hover:text-portfolio-primary transition-colors duration-200"
                              title="GitHub Repository"
                            >
                              <i className="w-5 h-5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-portfolio-text hover:text-portfolio-primary transition-colors duration-200"
                              title="Live Demo"
                            >
                              <i className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <CardDescription className="text-portfolio-text text-sm mb-4">
                        {project.description}
                      </CardDescription>
                      <div className="mb-4 bg-portfolio-dark/70 p-3 rounded-md border-l-2 border-portfolio-primary">
                        <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-2 flex items-center">
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
                      <div className="mb-3 bg-portfolio-dark/70 p-2 rounded-md border-l-2 border-portfolio-primary">
                        <h4 className="text-xs uppercase text-portfolio-primary font-semibold mb-1 flex items-center">
                          <span className="w-1 h-1 bg-portfolio-primary mr-1 rounded-full"></span>
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="badge bg-portfolio-primary/10 text-portfolio-primary text-xs py-1 px-2 rounded-full border border-portfolio-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <div className="flex gap-4">
                        {index < 2 ? (
                          <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0 hover:bg-portfolio-primary/10 transition-all duration-300">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              <span>Demo</span>
                            </a>
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0 hover:bg-portfolio-primary/10 transition-all duration-300">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github className="w-4 h-4 mr-1" />
                              <span>Code</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
