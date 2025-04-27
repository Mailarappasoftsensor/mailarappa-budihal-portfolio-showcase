import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Product Management",
    description:
      "A comprehensive backend system for managing e-commerce products with user authentication, product catalog, and image handling using AWS S3.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
    github: "https://github.com/Mailarappa-Budihal",
    demo: "#",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=E-commerce+API"
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortening service with Redis caching for improved performance and analytics for tracking link usage.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Redis"],
    github: "https://github.com/Mailarappa-Budihal",
    demo: "#",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=URL+Shortener"
  },
  {
    title: "Book Management",
    description:
      "A RESTful API for managing books with features like user authentication, authorization, CRUD operations, and AWS S3 integration for book covers.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "AWS S3", "JWT"],
    github: "https://github.com/Mailarappa-Budihal",
    demo: "#",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Book+Management"
  },
  {
    title: "Infinite Scrolling",
    description:
      "A product listing application with infinite scrolling functionality to dynamically load products as the user scrolls down the page.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "InfiniteScroll"],
    github: "https://github.com/Mailarappa-Budihal",
    demo: "#",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Infinite+Scroll"
  },
  {
    title: "Blog Management",
    description:
      "A blog platform with user authentication, blog post creation, editing, and commenting functionality.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Mailarappa-Budihal",
    demo: "#",
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Blog+Management"
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
            <span className="text-portfolio-primary mono mr-2">04.</span> Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg overflow-hidden card-hover ${
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
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="text-portfolio-text text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="w-4 h-4 mr-1" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="text-portfolio-primary hover:text-portfolio-primary/80 p-0">
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
