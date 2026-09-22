import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, GitBranch, Cloud, Coffee } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

interface SkillItem {
  name: string;
  level: 'Avanzado' | 'Intermedio' | 'Principiante' | 'Básico';
  icon: React.ReactNode;
  percentage: number;
}

const SKILLS_LIST: SkillItem[] = [
  {
    name: 'C#',
    level: 'Avanzado',
    icon: <Code2 size={20} className="text-[#85984e]" />,
    percentage: 90,
  },
  {
    name: 'Java',
    level: 'Básico',
    icon: <Coffee size={20} className="text-[#85984e]" />,
    percentage: 45,
  },
  {
    name: 'SQL Server',
    level: 'Intermedio',
    icon: <Database size={20} className="text-[#85984e]" />,
    percentage: 70,
  },
  {
    name: 'Git',
    level: 'Intermedio',
    icon: <GitBranch size={20} className="text-[#85984e]" />,
    percentage: 70,
  },
  {
    name: 'Cloud',
    level: 'Principiante',
    icon: <Cloud size={20} className="text-[#85984e]" />,
    percentage: 40,
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 relative font-serif scroll-mt-24">
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[32px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-8 sm:p-12 md:p-14 shadow-lg shadow-[#6c7c39]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Card: Identity & Mindset */}
            <div className="lg:col-span-5 bg-[#85984e] text-white rounded-[28px] p-7 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <HoneycombIcon className="w-9 h-9 text-white" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f3dc99]">
                    // tech stack
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                  "Código estructurado, datos sólidos y arquitecturas en crecimiento."
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-white/85 font-sans leading-relaxed">
                  Enfoque en desarrollo backend y bases de datos relacionales, complementado con control de versiones y fundamentos de infraestructura en la nube.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/25 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#f3dc99] text-[#323e11] flex items-center justify-center font-bold text-lg shadow-xs">
                  🐝
                </div>
                <div>
                  <h4 className="text-base font-bold">Merly</h4>
                  <p className="text-xs text-white/80 font-sans">Software Developer & Creator</p>
                </div>
              </div>
            </div>

            {/* Right: Skills List */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#85984e] text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
                  <Sparkles size={14} className="text-[#f3dc99]" />
                  Stack Tecnológico
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-[#6c7c39] tracking-tight">
                  Habilidades Principales
                </h2>

                <p className="text-sm text-[#323e11]/80 font-sans mt-1">
                  Mi conjunto de competencias técnicas clave y nivel de dominio:
                </p>
              </div>

              {/* Clean List */}
              <div className="space-y-3 pt-1">
                {SKILLS_LIST.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-4 rounded-[22px] bg-[#FAF8F2] border-2 border-[#85984e]/30 shadow-xs hover:border-[#85984e] hover:shadow-md transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#cbd99e]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-base sm:text-lg font-bold text-[#323e11] font-serif">
                          {skill.name}
                        </span>
                      </div>

                      {/* Level Badge */}
                      <span
                        className={`text-xs font-bold px-3.5 py-1 rounded-full font-sans shadow-xs ${
                          skill.level === 'Avanzado'
                            ? 'bg-[#85984e] text-white'
                            : skill.level === 'Intermedio'
                            ? 'bg-[#e59828] text-white'
                            : 'bg-[#cbd99e] text-[#323e11] border border-[#85984e]/30'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-[#cbd99e]/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          skill.level === 'Avanzado'
                            ? 'bg-[#85984e]'
                            : skill.level === 'Intermedio'
                            ? 'bg-[#e59828]'
                            : 'bg-[#85984e]/60'
                        }`}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
