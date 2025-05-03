
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
}

const skillCategories = [
  {
    title: "Programming Languages & Core Technologies",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "Cloud & Database",
    skills: [
      { name: "AWS S3", level: 75 },
      { name: "Redis", level: 70 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    title: "Concepts & Design",
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "ComfyUI Workflow Building", level: 85 },
      { name: "LoRA Model Training", level: 80 },
      { name: "ControlNets", level: 75 },
      { name: "Text-to-Image Generation", level: 85 },
    ],
  },
  {
    title: "AI Tools & Techniques",
    skills: [
      { name: "Image-to-Image Workflow", level: 80 },
      { name: "IPT Adapters", level: 75 },
      { name: "Flux Model Image Generation", level: 70 },
      { name: "Jarvis Labs", level: 85 },
    ],
  },
];

const SkillBar = ({ skill, inView, index }: { skill: Skill; inView: boolean; index: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm md:text-base text-white">{skill.name}</span>
        <span className="text-xs mono text-portfolio-primary">{skill.level}%</span>
      </div>
      <div className="skill-progress">
        <div
          className={inView ? "progress-fill h-full bg-portfolio-primary" : "w-0 h-full bg-portfolio-primary"}
          style={
            inView
              ? {
                  width: `${skill.level}%`,
                  "--percent": `${skill.level}%`,
                  "--delay": `${0.2 + index * 0.1}s`,
                } as React.CSSProperties
              : {}
          }
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-portfolio-dark/50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">Technical Skills</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-primary/30"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`bg-portfolio-dark/50 border border-gray-800 rounded-lg p-6 shadow-lg transform transition-all hover:shadow-portfolio-primary/10 hover:border-portfolio-primary/30 hover:translate-y-[-5px] ${
                  inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${catIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-portfolio-primary flex items-center">
                  <span className="w-2 h-2 bg-portfolio-primary mr-2 rounded-full"></span>
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} inView={inView} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
