
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, ExternalLink, Briefcase, Calendar, Award, ChevronDown, ChevronUp, Building, Target, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "@/styles/experience.css";

const experiences = [
  {
    title: "Software Developer",
    company: "SoftSensor.ai",
    period: "Feb 2023 - Present",
    description: [
      "Led MERN stack development for LMDmax's fleet management systems (PMRS and Payroll Project), driving operational efficiency improvements of 30%",
      "Architected and implemented real-time communication features using Twilio Chat API, reducing response times by 45%",
      "Engineered comprehensive dashboards with data visualization for critical KPIs, enabling data-driven decision making",
      "Developed automated report generation systems with customizable parameters, saving 20+ hours of manual work weekly",
      "Designed and optimized MongoDB database schema for the MMD project, resulting in 35% improved query performance",
      "Integrated AI tools (ChatGPT, Claude) into development workflow to enhance productivity and automate routine tasks",
      "Implemented OAuth 2.0 and JWT for secure authentication, improving system security and user experience",
    ],
    skills: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Twilio API", "JWT", "Data Visualization", "AI Integration", "Database Design"],
    achievements: [
      { metric: "30%", description: "Operational efficiency improvement" },
      { metric: "45%", description: "Reduction in response times" },
      { metric: "20+ hrs", description: "Weekly time savings" },
      { metric: "35%", description: "Database query performance boost" }
    ]
  },
  {
    title: "Backend Developer Trainee",
    company: "FunctionUp",
    period: "Oct 2022 - May 2023",
    description: [
      "Developed RESTful APIs using Node.js with Express.js and MongoDB for various applications",
      "Implemented secure file storage solutions using AWS S3 for image handling",
      "Built authentication and authorization systems using JWT tokens",
      "Optimized application response time using Redis caching",
      "Collaborated with peers on code reviews and problem solving",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Redis", "JWT", "REST APIs"],
    achievements: [
      { metric: "15+", description: "APIs developed" },
      { metric: "40%", description: "Avg. performance improvement with Redis" }
    ]
  },
  {
    title: "Sales Trainee",
    company: "Syngenta",
    period: "Jun 2021 - Sep 2022",
    description: [
      "Managed product presentations and client communications",
      "Created detailed reports and documentation using MS Office",
      "Built and maintained client relationships",
      "Developed public speaking and networking skills",
      "Analyzed market trends and competitor products",
    ],
    skills: ["Sales", "MS Office", "Public Speaking", "Networking", "Relationship Building"],
    achievements: [
      { metric: "20+", description: "Client relationships managed" }
    ]
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedExp, setExpandedExp] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""} animation-delay-02s`}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className="text-portfolio-primary mono mr-2 text-4xl">/</span>
            <span>💼 Professional Experience</span>
            <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-grow ml-4"></div>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`border border-gray-800 bg-portfolio-dark/50 backdrop-blur-sm shadow-lg transition-all duration-500 overflow-hidden relative group ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${expandedExp === index ? 'ring-1 ring-portfolio-primary/50 shadow-portfolio-primary/20' : 'hover:shadow-portfolio-primary/10 hover:border-portfolio-primary/30'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-portfolio-primary/20 -rotate-45 transform origin-top-left"></div>
                </div>
                
                <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-portfolio-primary to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-portfolio-primary to-transparent"></div>
                
                <CardHeader className="border-b border-gray-800 pb-4 relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div className="flex items-start gap-3">
                      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-lg bg-portfolio-primary/10 text-portfolio-primary border border-portfolio-primary/30">
                        <Building className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white group-hover:text-portfolio-primary transition-colors duration-300 flex items-center">
                          {exp.title}
                          <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-portfolio-primary flex items-center">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <span className="text-sm text-portfolio-primary mono py-1 px-3 bg-portfolio-primary/10 rounded-full inline-flex items-center border border-portfolio-primary/30">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                
                <div 
                  className={`relative overflow-hidden transition-all duration-500 ${expandedExp === index ? 'experience-card-expanded' : 'experience-card-collapsed'}`}
                >
                  <CardContent className="pt-6 grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start group/item hover:bg-portfolio-primary/5 p-2 rounded-md transition-colors duration-300">
                            <span className="text-portfolio-primary mr-2 transform group-hover/item:translate-x-1 transition-transform duration-300">▹</span>
                            <span className="text-portfolio-text text-sm group-hover/item:text-white transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="md:col-span-1">
                        <h4 className="text-white font-medium mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                          Key Metrics
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="bg-portfolio-dark/70 p-3 rounded-md border border-gray-800 hover:border-portfolio-primary/30 hover:shadow-portfolio-primary/10 transition-all duration-300 group/metric">
                              <div className="text-xl md:text-2xl font-bold text-portfolio-primary flex items-center justify-center">
                                <Target className="w-4 h-4 mr-1 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300" />
                                {achievement.metric}
                              </div>
                              <div className="text-xs text-portfolio-text text-center group-hover/metric:text-white transition-colors duration-300">{achievement.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="flex flex-wrap gap-2 border-t border-gray-800 pt-4">
                    <div className="w-full mb-2">
                      <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                        <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                        Skills & Technologies
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="bg-portfolio-primary/10 text-portfolio-primary border border-portfolio-primary/20 py-1 px-3 rounded-full text-xs hover:bg-portfolio-primary/20 hover:border-portfolio-primary/40 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardFooter>
                </div>
                
                {/* Toggle button */}
                <div 
                  className="absolute bottom-2 right-2 cursor-pointer p-2 rounded-full bg-portfolio-dark/80 border border-gray-800 hover:border-portfolio-primary/30 transition-colors duration-300 z-20 experience-toggle"
                  onClick={() => toggleExpand(index)}
                >
                  {expandedExp === index ? 
                    <ChevronUp className="w-4 h-4 text-portfolio-primary experience-toggle-open" /> : 
                    <ChevronDown className="w-4 h-4 text-portfolio-text experience-toggle-closed" />
                  }
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
