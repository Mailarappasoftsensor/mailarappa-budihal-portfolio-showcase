
import React from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
  },
  {
    title: "Sales Trainee",
    company: "Syngenix",
    period: "Jun 2021 - Sep 2022",
    description: [
      "Managed product presentations and client communications",
      "Created detailed reports and documentation using MS Office",
      "Built and maintained client relationships",
      "Developed public speaking and networking skills",
      "Analyzed market trends and competitor products",
    ],
    skills: ["Sales", "MS Office", "Public Speaking", "Networking", "Relationship Building"],
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
            <span className="text-portfolio-primary mono mr-2">03.</span> Professional Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`border border-gray-800 bg-portfolio-dark/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="border-b border-gray-800 pb-4">
                  <CardTitle className="text-xl text-white flex justify-between items-start">
                    <span>{exp.title}</span>
                    <span className="text-sm text-portfolio-primary mono">{exp.period}</span>
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-portfolio-primary">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-portfolio-primary mr-2">▹</span>
                        <span className="text-portfolio-text text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 border-t border-gray-800 pt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="badge">
                      {skill}
                    </span>
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
