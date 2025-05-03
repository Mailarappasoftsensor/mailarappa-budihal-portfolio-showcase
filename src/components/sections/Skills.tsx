
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  level: number;
}

const skillCategories = [
  {
    title: "Generative AI",
    skills: [
      { name: "ComfyUI Workflow Building", level: 95 },
      { name: "Jarvis Labs Integration", level: 90 },
      { name: "LoRA Model Training", level: 92 },
      { name: "ControlNets Implementation", level: 88 },
      { name: "Image Generation Techniques", level: 90 },
      { name: "IP Adapters Development", level: 85 },
      { name: "Flux Model Generation", level: 88 },
      { name: "Text-to-Image Workflows", level: 92 },
      { name: "Image-to-Image Workflows", level: 89 },
    ],
  },
  {
    title: "Programming & Development",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "React.js", level: 60 },
      { name: "TypeScript", level: 75 },
      { name: "HTML/CSS", level: 80 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 40 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS S3", level: 80 },
      { name: "Docker", level: 85 }
    ],
  },
];

const SkillBar = ({ skill, inView, index }: { skill: Skill; inView: boolean; index: number }) => {
  const getSkillRange = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getRangeColor = (level: number) => {
    if (level >= 90) return 'bg-portfolio-primary';
    if (level >= 75) return 'bg-portfolio-primary/80';
    if (level >= 60) return 'bg-portfolio-primary/60';
    return 'bg-portfolio-primary/40';
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm md:text-base text-white">{skill.name}</span>
        <div className="flex items-center space-x-2">
          <span className="text-xs mono text-portfolio-primary">{skill.level}%</span>
          <span className={`text-xs text-portfolio-primary/60`}>{getSkillRange(skill.level)}</span>
        </div>
      </div>
      <div className="relative h-2.5 bg-gray-800 rounded-full">
        <div
          className={`absolute inset-0 ${getRangeColor(skill.level)} rounded-full transform transition-all duration-300 ${inView ? 'visible' : ''}`}
          style={{
            width: `${skill.level}%`,
            transitionDelay: `${0.2 + index * 0.1}s`,
          }}
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
          className={`skill-container ${inView ? 'visible' : ''}`}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> Technical Skills
          </h2>
          <p className="text-portfolio-text text-sm mb-8">
            My skills are categorized into ranges: Expert (90-100%), Advanced (75-89%), Intermediate (60-74%), and Beginner (0-59%)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`skill-category ${inView ? 'visible' : ''}`}
                style={{
                  transitionDelay: `${catIndex * 0.2}s`,
                }}
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
