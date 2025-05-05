
import React from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`section ${inView ? "animate-slide-up" : ""}`}
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          <h2 className="section-heading text-2xl md:text-3xl font-bold mb-12">
            <span className="text-portfolio-primary mono mr-2"></span> About Me
          </h2>

          <div className="grid md:grid-cols-1 gap-10">
            <div>
              <p className="text-portfolio-text mb-4">
                Hello! I'm Mailarappa Budihal, a passionate Generative AI engineer and Software Developer specializing in Applied generative AI . 
                My journey in technology began during my agriculture studies, where I discovered programming could solve real-world 
                agricultural challenges, leading me to pursue a career in software development and GenerativeAI.
              </p>
              
              <p className="text-portfolio-text mb-4">
                After completing my B.Sc in Agriculture, I made a significant career pivot through the FunctionUp program, 
                where I specialized in backend technologies and Learning Generative AI development. I've become an expert in building AI workflows, 
                training custom models, and creating innovative solutions using the latest AI technologies.
              </p>
              
              <div className="mb-6 p-4 border-l-4 border-portfolio-primary bg-portfolio-dark/30">
                <h3 className="text-white text-xl mb-2">My AI Journey</h3>
                <p className="text-portfolio-text italic">
                  "I'm passionate about pushing the boundaries of AI technology and creating solutions that make a real impact. 
                  From building custom AI workflows to training advanced models, I thrive on solving complex problems with AI."
                </p>
              </div>
              
              <p className="text-portfolio-text mb-6">
                I'm a versatile developer with expertise in backend development and generative AI. I build secure, scalable API solutions using Node.js and MongoDB, while also creating advanced AI workflows with ComfyUI, training LoRA models, and implementing image generation systems. I specialize in building cutting-edge AI solutions and generative models. From custom LoRA training to advanced image generation, I transform complex AI challenges into practical, scalable applications using Python, ComfyUI, JarvisLabs and the latest AI frameworks.
              </p>

              <div className="mb-8">
                <h3 className="text-portfolio-primary font-semibold mb-4">Core Expertise:</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">Generative AI Development</span>
                    <span className="text-portfolio-primary">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">Database Design & Optimization</span>
                    <span className="text-portfolio-primary">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">Authentication Systems</span>
                    <span className="text-portfolio-primary">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">Cloud Services Integration</span>
                    <span className="text-portfolio-primary">88%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">ComfyUI Workflow Building</span>
                    <span className="text-portfolio-primary">92%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">LoRa Model Training</span>
                    <span className="text-portfolio-primary">90%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-portfolio-text">Image Generation Pipelines</span>
                    <span className="text-portfolio-primary">89%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-portfolio-primary h-2.5 rounded-full" style={{ width: "89%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
