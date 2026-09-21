import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Eye, Github, ExternalLink } from 'lucide-react';
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
    <section id="proyectos-preview" className="py-20 px-4 sm:px-6 relative font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
              <Layers size={14} className="text-[#f3dc99]" />
              Portafolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#6c7c39] tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="mt-2 text-base text-[#323e11]/80 font-sans">
              Una muestra seleccionada de mis trabajos y herramientas principales.
            </p>
          </div>

          {/* Botón con fondo blanco sólido y alto contraste */}
          <a
            href="#/proyectos"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-sm transition-all text-sm font-bold font-serif group"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              className="group rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#85984e] transition-all"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#cbd99e]/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/85 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#323e11]/40 backdrop-blur-xs">
                  <button
                    onClick={() => handleSelect(project.id)}
                    className="px-5 py-2 rounded-full text-xs font-bold bg-[#85984e] hover:bg-[#e59828] text-white shadow-md flex items-center gap-1.5 transition-transform active:scale-95"
                  >
                    <Eye size={14} /> Ver Detalles
                  </button>
                </div>

                <span className="absolute top-3 left-3 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#6c7c39] group-hover:text-[#323e11] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#323e11]/80 line-clamp-2 font-sans leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#85984e]/20">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleSelect(project.id)}
                      className="text-xs font-bold text-[#6c7c39] hover:text-[#323e11]"
                    >
                      Ver detalle completo →
                    </button>

                    <div className="flex items-center gap-2.5 text-[#85984e]">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="hover:text-[#323e11] hover:scale-110 transition-all"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Demo"
                          className="hover:text-[#323e11] hover:scale-110 transition-all"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
