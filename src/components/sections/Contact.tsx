
import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-portfolio-dark/50">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div
          ref={ref}
          className={`section ${inView ? "animate-fade-in" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <p className="text-portfolio-primary mono mb-2">07. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
          
          <p className="text-portfolio-text mb-5">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-5 h-5 text-portfolio-primary mr-2" />
            <p className="text-portfolio-text">
              <span className="font-medium text-white">Availability:</span> Open to full-time positions and freelance projects
            </p>
          </div>
          
          <Button asChild className="bg-transparent border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 mb-12">
            <a href="mailto:mailarappanew@gmail.com">
              Say Hello
            </a>
          </Button>

          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/Mailarappa-Budihal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link flex flex-col items-center text-portfolio-text"
            >
              <Github className="w-6 h-6 mb-2" />
              <span className="text-sm">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mailarappa-budihal-795291194/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link flex flex-col items-center text-portfolio-text"
            >
              <Linkedin className="w-6 h-6 mb-2" />
              <span className="text-sm">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:mailarappanew@gmail.com" 
              className="contact-link flex flex-col items-center text-portfolio-text"
            >
              <Mail className="w-6 h-6 mb-2" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
