
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar } from "lucide-react";

const education = [
  {
    institution: "College of Agriculture, Dharwad",
    degree: "B.Sc(Hon.) Agriculture",
    year: "2021",
    gpa: "8.69",
    description: "Studied agricultural sciences with a focus on sustainable farming practices and agricultural technology."
  },
  {
    institution: "SKTM Govt PU College",
    degree: "Pre-University Education",
    year: "2017",
    gpa: null,
    description: "Completed pre-university education with a focus on science subjects."
  }
];

const certificates = [
  {
    title: "NCCT \"C\" Certificate",
    issuer: "National Cadet Corps",
    date: "2019"
  },
  {
    title: "Backend Web Development",
    issuer: "FunctionUp",
    date: "2023",
    description: "Comprehensive training in JavaScript, Node.js, Express.js, and MongoDB"
  },
  {
    title: "Frontend Web Development",
    issuer: "FunctionUp",
    date: "2023",
    description: "Training in JavaScript and React.js for building user interfaces"
  }
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> Education & Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Book className="text-portfolio-primary mr-2" /> Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white text-lg">{edu.institution}</CardTitle>
                        <span className="text-portfolio-primary text-sm mono flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {edu.year}
                        </span>
                      </div>
                      <CardDescription className="text-portfolio-primary font-medium">
                        {edu.degree} {edu.gpa && `- CGPA: ${edu.gpa}`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-portfolio-text text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Book className="text-portfolio-primary mr-2" /> Certifications
              </h3>
              
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <Card 
                    key={index}
                    className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 0.2 + 0.4}s` }}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                        <span className="text-portfolio-primary text-sm mono flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {cert.date}
                        </span>
                      </div>
                      <CardDescription className="text-portfolio-primary font-medium">
                        {cert.issuer}
                      </CardDescription>
                    </CardHeader>
                    {cert.description && (
                      <CardContent>
                        <p className="text-portfolio-text text-sm">{cert.description}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
