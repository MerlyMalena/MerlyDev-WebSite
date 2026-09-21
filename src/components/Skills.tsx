import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  Database,
  Wrench,
  Sparkles,
  Server,
  Atom,
  FileCode2,
  Palette,
  Layout,
  Network,
  Cpu,
  HardDrive,
  Zap,
  Cloud,
  GitBranch,
  Box,
  Send,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

// Helper to render icon by name
const renderSkillIcon = (iconName: string) => {
  const iconProps = { size: 18, className: "text-[#85984e]" };
  switch (iconName) {
    case 'Atom': return <Atom {...iconProps} />;
    case 'FileCode2': return <FileCode2 {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Code': return <Code {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Layers': return <Layers {...iconProps} />;
    case 'Network': return <Network {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'HardDrive': return <HardDrive {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Cloud': return <Cloud {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Box': return <Box {...iconProps} />;
    case 'Wrench': return <Wrench {...iconProps} />;
    case 'Send': return <Send {...iconProps} />;
    default: return <Code {...iconProps} />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 relative font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
            <Sparkles size={14} className="text-[#f3dc99]" />
            Stack Tecnológico
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#6c7c39] tracking-tight">
            Habilidades & Herramientas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#323e11]/85 font-sans">
            Tecnologías y herramientas que empleo a diario para diseñar arquitecturas escalables y experiencias de usuario memorables.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e]/30 shadow-md hover:border-[#85984e] transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#6c7c39]">
                  {category.title}
                </h3>
                <p className="text-sm text-[#323e11]/70 mt-1 font-sans">
                  {category.description}
                </p>
              </div>

              {/* Skills badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-2xl bg-white border border-[#85984e]/25 flex items-center justify-between hover:border-[#85984e] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-xl bg-[#cbd99e]/40 text-[#85984e]">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-sm font-bold text-[#323e11]">
                        {skill.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full bg-[#85984e]">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
