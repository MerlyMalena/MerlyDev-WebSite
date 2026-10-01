import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Tag } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-serif">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#323e11]/70 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-3xl rounded-[32px] bg-[#FAF8F2] border-2 border-[#85984e] shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#323e11]/80 text-white hover:bg-[#85984e] transition-all active:scale-95 shadow-md"
          >
            <X size={20} />
          </button>

          {/* Project Image Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#cbd99e]/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
              <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-md">
                {project.category}
              </span>
              {project.date && (
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#f3dc99] bg-[#323e11]/80 backdrop-blur-sm px-3.5 py-1 rounded-full">
                  <Calendar size={13} />
                  {project.date}
                </span>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#6c7c39]">
                {project.title}
              </h2>
              <p className="mt-3 text-base text-[#323e11]/85 leading-relaxed font-sans">
                {project.fullDescription}
              </p>
            </div>

            {/* Highlights bullet points */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#cbd99e]/30 border-2 border-[#85984e]/30">
                <h3 className="text-sm font-bold text-[#6c7c39] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#85984e]" />
                  {project.highlightsTitle || 'Aspectos Destacados & Arquitectura'}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans">
                  {project.highlights.map((item, index) => {
                    const colonIdx = item.indexOf(':');
                    return (
                      <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#323e11]">
                        <span className="text-[#85984e] font-bold mt-0.5">•</span>
                        {colonIdx !== -1 ? (
                          <span>
                            <strong className="font-bold text-[#323e11]">{item.slice(0, colonIdx + 1)}</strong>
                            {item.slice(colonIdx + 1)}
                          </span>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4 className="text-xs font-bold text-[#85984e] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Tag size={14} /> Tecnologías Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Action Buttons */}
            <div className="pt-4 border-t border-[#85984e]/20 flex flex-wrap items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-white border-2 border-[#85984e] text-[#323e11] hover:bg-[#85984e] hover:text-white transition-all"
                >
                  <Github size={18} />
                  Ver Código en GitHub
                </a>
              )}

              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-[#85984e] hover:bg-[#323e11] text-white shadow-md transition-all active:scale-95"
                >
                  <ExternalLink size={18} />
                  Probar Demo en Vivo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
