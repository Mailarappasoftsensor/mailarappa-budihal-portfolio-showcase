
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Mailarappa is an exceptional backend developer with strong problem-solving skills. His ability to design efficient API solutions made our project a success.",
    name: "Rahul Sharma",
    position: "Senior Developer, FunctionUp",
    company: "FunctionUp"
  },
  {
    text: "Working with Mailarappa was a pleasure. His deep knowledge of Node.js and MongoDB helped us optimize our database operations and improve overall application performance.",
    name: "Anubhav Guha",
    position: "Software Engineer",
    company: "Softsensor.ai"
  },
  {
    text: "Mailarappa's dedication to writing clean, maintainable code is impressive. He consistently delivered high-quality work and was always willing to help team members.",
    name: "Ashit Choudary",
    position: "Tech Lead",
    company: "Softsensor.ai"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> Testimonials
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover relative ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <Quote className="absolute top-4 left-4 text-portfolio-primary opacity-20 w-10 h-10" />
                <CardContent className="pt-12 pb-6 px-6">
                  <p className="text-portfolio-text italic">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t border-gray-800 pt-4 px-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-portfolio-primary">{testimonial.position}</p>
                  <p className="text-xs text-portfolio-text">{testimonial.company}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
