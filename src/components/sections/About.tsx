
import React from "react";
import { useInView } from "react-intersection-observer";
import { Code, Database, Server, Cloud, Cpu, Layers, Award, BookOpen } from "lucide-react";
import "@/styles/about.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-portfolio-primary/5 -skew-x-12 transform origin-top-right"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""} animation-delay-02s`}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12 flex items-center">
            <span className="text-portfolio-primary mono mr-2 text-4xl">/</span> 
            <span>📝 About Me</span>
            <div className="h-px bg-gradient-to-r from-portfolio-primary to-transparent flex-grow ml-4"></div>
          </h2>

          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="bg-portfolio-dark/50 p-6 rounded-lg border border-portfolio-primary/20 h-full backdrop-blur-sm hover:shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300">
                <div className="relative mb-4">
                  <h3 className="text-portfolio-primary font-bold text-xl flex items-center">
                    <Code className="w-5 h-5 mr-2" /> Meet Me
                  </h3>
                  <div className="h-0.5 w-full bg-gradient-to-r from-portfolio-primary to-transparent mt-1"></div>
                </div>
                
                {/* Video Introduction */}
                <div className="mb-6 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition-all duration-500"></div>
                  <div className="relative bg-portfolio-dark rounded-lg overflow-hidden border border-portfolio-primary/30">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://drive.google.com/file/d/1XDB52pdTlj1unj2QgK32z0T_71u7sK7l/preview"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                        title="Mailarappa Budihal Introduction"
                      ></iframe>
                    </div>
                    <div className="absolute top-2 right-2 bg-portfolio-dark/80 text-portfolio-primary text-xs py-1 px-2 rounded-full backdrop-blur-sm">
                      My Intro Video
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-4 mt-6">
                  <h3 className="text-portfolio-primary font-bold text-xl flex items-center">
                    <Code className="w-5 h-5 mr-2" /> Core Expertise
                  </h3>
                  <div className="h-0.5 w-full bg-gradient-to-r from-portfolio-primary to-transparent mt-1"></div>
                </div>
                <p className="text-portfolio-text text-sm leading-relaxed">
                  From <span className="text-portfolio-primary">B.Sc in Agriculture</span> to <span className="text-white font-medium">Generative AI Engineer</span>, my unique journey brings a fresh perspective to technical challenges.
                </p>
                <div className="mt-4 p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="text-portfolio-text italic text-sm relative z-10">
                    "I transform complex AI challenges into practical, scalable solutions that make a real impact."
                  </p>
                  <div className="text-right text-portfolio-primary/70 text-xs mt-2 relative z-10">— Mailarappa Budihal</div>
                </div>
              </div>

            </div>
            
            <div className="md:col-span-3">
              <div className="bg-portfolio-dark/50 p-6 rounded-lg border border-portfolio-primary/20 mb-8 backdrop-blur-sm hover:shadow-lg hover:shadow-portfolio-primary/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative mb-4">
                      <h3 className="text-portfolio-primary font-bold text-xl flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" /> My Story
                      </h3>
                      <div className="h-0.5 w-full bg-gradient-to-r from-portfolio-primary to-transparent mt-1"></div>
                    </div>
                    <p className="text-portfolio-text text-sm leading-relaxed">
                      From <span className="text-portfolio-primary">B.Sc in Agriculture</span> to <span className="text-white font-medium">Generative AI Engineer</span>, my unique journey brings a fresh perspective to technical challenges.
                    </p>
                    <div className="mt-4 p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-portfolio-text italic text-sm relative z-10">
                        "I transform complex AI challenges into practical, scalable solutions that make a real impact."
                      </p>
                      <div className="text-right text-portfolio-primary/70 text-xs mt-2 relative z-10">— Mailarappa Budihal</div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="relative mb-4">
                      <h3 className="text-portfolio-primary font-bold text-xl flex items-center">
                        <Award className="w-5 h-5 mr-2" /> Professional Summary
                      </h3>
                      <div className="h-0.5 w-full bg-gradient-to-r from-portfolio-primary to-transparent mt-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 hover:border-portfolio-primary/30 transition-all duration-300">
                        <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                          Backend Development
                        </h4>
                        <p className="text-portfolio-text text-xs leading-relaxed">
                          Building secure, scalable API solutions with Node.js, Express, and MongoDB for enterprise applications.
                        </p>
                      </div>
                      <div className="p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 hover:border-portfolio-primary/30 transition-all duration-300">
                        <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                          Generative AI Engineering
                        </h4>
                        <p className="text-portfolio-text text-xs leading-relaxed">
                          Creating advanced AI workflows with ComfyUI, training LoRA models, and implementing custom image generation systems.
                        </p>
                      </div>
                      <div className="p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 hover:border-portfolio-primary/30 transition-all duration-300">
                        <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                          Technical Expertise
                        </h4>
                        <p className="text-portfolio-text text-xs leading-relaxed">
                          Proficient in Python, JavaScript, Node.js, MongoDB, ComfyUI, and JarvisLabs for comprehensive solution development.
                        </p>
                      </div>
                      <div className="p-3 bg-portfolio-dark/70 rounded-lg border border-portfolio-primary/10 hover:border-portfolio-primary/30 transition-all duration-300">
                        <h4 className="text-white text-sm font-medium mb-2 flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                          Problem Solving
                        </h4>
                        <p className="text-portfolio-text text-xs leading-relaxed">
                          Transforming complex requirements into elegant, efficient solutions with a focus on scalability and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Core Expertise section removed as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
