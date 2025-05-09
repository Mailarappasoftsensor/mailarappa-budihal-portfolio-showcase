
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, Cloud, Cpu, Layers } from "lucide-react";
import "@/styles/skills.css";

interface Skill {
  name: string;
  level: number;
}

const skillCategories = [
  {
    title: "Generative AI",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "ComfyUI Workflow Building", level: 95, icon: "🔄" },
      { name: "Jarvis Labs Integration", level: 90, icon: "🚀" },
      { name: "LoRa Model Training", level: 92, icon: "🧪" },
      { name: "ControlNets Implementation", level: 88, icon: "🎮" },
      { name: "Image Generation Techniques", level: 90, icon: "🖼️" },
      { name: "IP Adapters Development", level: 85, icon: "🔌" },
      { name: "Flux Model Generation", level: 88, icon: "⚡" },
      { name: "Text-to-Image Workflows", level: 92, icon: "📝" },
      { name: "Image-to-Image Workflows", level: 89, icon: "🔄" },
    ],
  },
  {
    title: "Programming & Development",
    icon: "💻",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 90, icon: "🚂" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "React.js", level: 60, icon: "⚛️" },
      { name: "TypeScript", level: 75, icon: "📘" },
      { name: "HTML/CSS", level: 80, icon: "🎨" },
      { name: "SQL", level: 80, icon: "🗃️" },
      { name: "Python", level: 40, icon: "🐍" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "☁️",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "AWS S3", level: 80, icon: "📦" },
      { name: "Docker", level: 60, icon: "🐳" },
      { name: "CI/CD Pipelines", level: 70, icon: "🔄" },
      { name: "Serverless", level: 65, icon: "⚡" }
    ],
  },
];

interface EnhancedSkill extends Skill {
  icon?: string;
}

const SkillBar = ({ skill, inView, index }: { skill: EnhancedSkill; inView: boolean; index: number }) => {
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
    <div className="mb-6 skill-bar-item hover:transform hover:translate-x-1 transition-all duration-300">
      <div className="flex justify-between items-center mb-2 group">
        <span className="font-medium text-sm md:text-base text-white flex items-center">
          {skill.icon && <span className="mr-2 text-lg skill-icon group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>}
          {skill.name}
        </span>
        <div className="flex items-center space-x-2 bg-portfolio-dark/50 px-2 py-1 rounded-full border border-portfolio-primary/20 group-hover:border-portfolio-primary/40 transition-all duration-300">
          <span className="text-xs mono text-portfolio-primary">{skill.level}%</span>
          <span className="text-xs text-portfolio-primary/60 group-hover:text-portfolio-primary transition-colors duration-300">{getSkillRange(skill.level)}</span>
        </div>
      </div>
      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden skill-progress-container">
        <div
          className={`absolute inset-0 ${getRangeColor(skill.level)} rounded-full transform transition-all duration-1000 skill-bar-progress ${inView ? 'visible' : ''}`}
          style={{
            width: `${skill.level}%`,
            transitionDelay: `${0.2 + index * 0.1}s`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skill-bar-shine"></div>
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
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className="text-portfolio-primary mono mr-2 text-4xl">/</span>
            <span>💪 Technical Skills</span>
            <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-grow ml-4"></div>
          </h2>
          <p className="text-portfolio-text text-sm mb-8">
            My skills are categorized into ranges: Expert (90-100%), Advanced (75-89%), Intermediate (60-74%), and Beginner (0-59%)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`skill-category ${inView ? 'visible' : ''} bg-portfolio-dark/30 p-5 rounded-lg border border-portfolio-primary/10 hover:border-portfolio-primary/30 transition-all duration-500`}
                style={{
                  transitionDelay: `${catIndex * 0.2}s`,
                }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg mr-3 bg-gradient-to-br ${category.color} text-white`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <span className="text-portfolio-primary">{category.title}</span>
                    <div className="h-0.5 w-full bg-gradient-to-r from-portfolio-primary to-transparent mt-1"></div>
                  </div>
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
