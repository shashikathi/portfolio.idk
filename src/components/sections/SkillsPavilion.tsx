import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, BrainCircuit, LineChart, Lightbulb, Globe } from 'lucide-react';

interface SkillsPavilionProps {
  id: string;
  onVisible: () => void;
}

const SkillsPavilion: React.FC<SkillsPavilionProps> = ({ id, onVisible }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  const skillCategories = [
    {
      name: "Languages",
      icon: <Code size={24} className="text-primary-600" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Django", level: 80 }
      ]
    },
    {
      name: "Technologies & Frameworks",
      icon: <BrainCircuit size={24} className="text-primary-600" />,
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "CrewAI", level: 80 },
        { name: "Google Gen AI", level: 85 },
        { name: "Transformers", level: 80 },
        { name: "Scikit-learn", level: 90 }
      ]
    },
    {
      name: "Tools & Platforms",
      icon: <Database size={24} className="text-primary-600" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "OpenAI", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "Power BI", level: 90 },
        { name: "Airflow", level: 80 },
        { name: "Tableau", level: 85 }
      ]
    },
    {
      name: "Data Analysis",
      icon: <LineChart size={24} className="text-primary-600" />,
      skills: [
        { name: "MS Excel", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Kaggle", level: 80 }
      ]
    },
    {
      name: "Soft Skills",
      icon: <Lightbulb size={24} className="text-primary-600" />,
      skills: [
        { name: "Cross-Cultural Competence", level: 90 },
        { name: "Data Storytelling", level: 85 },
        { name: "Design Thinking", level: 85 },
        { name: "Learning Agility", level: 90 },
        { name: "Leadership", level: 85 }
      ]
    }
  ];

  return (
    <section id={id} ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills Pavilion</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and analytical capabilities in data science and business analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-3">{category.icon}</div>
                  <h3 className="text-xl font-medium">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-neutral-700">{skill.name}</span>
                        <span className="text-xs text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                          className="h-2 rounded-full bg-primary-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPavilion;