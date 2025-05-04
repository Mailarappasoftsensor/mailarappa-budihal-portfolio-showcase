
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="border-b border-gray-800 pb-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl text-white">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-portfolio-primary">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-portfolio-primary mono py-1 px-2 bg-portfolio-primary/10 rounded-md inline-flex items-center">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-6 grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h4 className="text-white font-medium mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-portfolio-primary mr-2">▹</span>
                          <span className="text-portfolio-text text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="md:col-span-1">
                      <h4 className="text-white font-medium mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="bg-portfolio-dark/70 p-3 rounded-md border border-gray-800">
                            <div className="text-xl md:text-2xl font-bold text-portfolio-primary">{achievement.metric}</div>
                            <div className="text-xs text-portfolio-text">{achievement.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 border-t border-gray-800 pt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
