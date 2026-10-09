import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, GitBranch, Cloud, Coffee } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

interface SkillItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  tags: string[];
}

const SKILLS_LIST: SkillItem[] = [
  {
    name: 'C# / .NET',
    category: 'Especialidad Principal',
    icon: <Code2 size={20} className="text-[#85984e]" />,
    tags: ['ASP.NET Core', 'EF Core', 'LINQ', 'REST APIs'],
  },
  {
    name: 'SQL Server',
    category: 'Bases de Datos',
    icon: <Database size={20} className="text-[#85984e]" />,
    tags: ['T-SQL', 'Modelado Relacional', 'Consultas & Índices'],
  },
  {
    name: 'Git & GitHub',
    category: 'Control de Versiones',
    icon: <GitBranch size={20} className="text-[#85984e]" />,
    tags: ['Gitflow'],
  },
{
    name: 'Java',
    category: 'Desarrollo de Software',
    icon: <Coffee size={20} className="text-[#85984e]" />,
    tags: ['POO', 'Java Swing / GUI', 'Arquitectura MVC', 'JDBC'],
  },
{
    name: 'Cloud & Azure',
    category: 'Infraestructura & Nube',
    icon: <Cloud size={20} className="text-[#85984e]" />,
    tags: ['Azure Fundamentals', 'Azure SQL (DP-300 Prep)', 'Docker Basics'],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-[85vh] flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 px-3 sm:px-6 relative font-serif scroll-mt-28">
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[28px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-5 sm:p-12 md:p-14 shadow-lg shadow-[#6c7c39]/10"
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
                  Enfoque en desarrollo backend con el ecosistema .NET y bases de datos relacionales, complementado con control de versiones y fundamentos de infraestructura en la nube.
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
                  Herramientas, frameworks y tecnologías con las que construyo soluciones:
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
                    className="p-4 rounded-[22px] bg-[#FAF8F2] border-2 border-[#85984e]/30 shadow-xs hover:border-[#85984e] hover:shadow-md transition-all space-y-3 group"
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

                      {/* Category Badge */}
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full font-sans bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-md bg-white border border-[#85984e]/20 text-[#4c5825]"
                        >
                          {tag}
                        </span>
                      ))}
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