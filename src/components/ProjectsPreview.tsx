import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Calendar } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

interface ProjectsPreviewProps {
  onViewAll?: () => void;
  onSelectProject?: (id: string) => void;
}

export const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ onViewAll, onSelectProject }) => {
  // Take the 3 top featured projects
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  const handleSelect = (id: string) => {
    if (onSelectProject) {
      onSelectProject(id);
    } else {
      window.location.hash = `/proyecto/${id}`;
    }
  };

  return (
    <section id="proyectos" className="min-h-[85vh] flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 px-3 sm:px-6 relative font-serif scroll-mt-28">
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[28px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-4 sm:p-8 md:p-9 shadow-lg shadow-[#6c7c39]/10"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#85984e] text-white mb-1.5 shadow-xs">
                <Layers size={13} className="text-[#f3dc99]" />
                Portafolio
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6c7c39] tracking-tight leading-tight">
                Proyectos Destacados
              </h2>
              <p className="mt-0.5 text-xs sm:text-sm text-[#323e11]/80 font-sans">
                Una muestra seleccionada de mis trabajos y herramientas principales.
              </p>
            </div>

            {/* Botón con fondo blanco sólido y letras verdes */}
            <a
              href="#/proyectos"
              onClick={(e) => {
                if (onViewAll) {
                  e.preventDefault();
                  onViewAll();
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-xs sm:text-sm font-bold font-serif group"
            >
              <span>Ver todos los proyectos</span>
              <ArrowRight size={15} className="text-[#6c7c39] group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-5 ${featuredProjects.length === 1 ? 'max-w-md mx-auto grid-cols-1' : featuredProjects.length === 2 ? 'max-w-2xl mx-auto grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -5 }}
                onClick={() => handleSelect(project.id)}
                className="cursor-pointer rounded-[24px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#85984e] transition-all flex flex-col justify-between group"
              >
                {/* Cover Image */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-[#cbd99e]/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/60 via-transparent to-transparent opacity-50" />
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#85984e] mb-1.5 font-sans">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                        {project.category}
                      </span>
                      {project.date && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-[#85984e]">
                          <Calendar size={11} />
                          {project.date}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#6c7c39] leading-snug line-clamp-1 group-hover:text-[#323e11] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#323e11]/80 line-clamp-2 font-sans leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#85984e]/20 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#6c7c39] group-hover:text-[#323e11] flex items-center gap-1">
                      Ver detalles →
                    </span>
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#cbd99e]/40 text-[#323e11]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
