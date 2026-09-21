import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Layers, Search, Eye, Github, ExternalLink } from 'lucide-react';
import { CATEGORIES, PROJECTS_DATA } from '../data/projects';
import { ProjectCategory } from '../types/project';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onSelectProject: (id: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigateHome, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      activeCategory === 'todos' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Link */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </button>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
            <Layers size={14} className="text-[#f3dc99]" />
            Galería Completa
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#6c7c39] tracking-tight">
            Todos los Proyectos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#323e11]/80 font-sans">
            Explora cada una de las aplicaciones, herramientas y desarrollos construidos paso a paso.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-3xl bg-[#cbd99e]/30 border-2 border-[#85984e]/30">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all ${
                    isActive
                      ? 'bg-[#85984e] text-white shadow-md'
                      : 'bg-white/80 text-[#323e11] hover:bg-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#85984e]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tecnología..."
              className="w-full pl-11 pr-4 py-2 text-sm rounded-full bg-white border border-[#85984e]/40 text-[#323e11] placeholder-[#323e11]/50 focus:outline-none focus:border-[#85984e] font-sans"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#cbd99e]/30 rounded-[32px] border-2 border-[#85984e]/30">
            <p className="text-[#323e11]/80 text-lg font-sans">No se encontraron proyectos con ese criterio.</p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#85984e] text-white text-sm font-bold hover:bg-[#323e11]"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-[30px] bg-[#FAF8F2] border-2 border-[#85984e]/30 overflow-hidden flex flex-col justify-between hover:border-[#85984e] hover:shadow-xl hover:shadow-[#85984e]/15 transition-all"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-[#cbd99e]/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/85 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                    {/* Quick action button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#323e11]/40 backdrop-blur-xs">
                      <button
                        onClick={() => onSelectProject(project.id)}
                        className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#85984e] hover:bg-[#e59828] text-white shadow-lg flex items-center gap-2"
                      >
                        <Eye size={16} /> Ver Detalles
                      </button>
                    </div>

                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#6c7c39] group-hover:text-[#323e11] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-[#323e11]/80 line-clamp-2 leading-relaxed font-sans">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#85984e]/20">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#cbd99e]/40 text-[#323e11] border border-[#85984e]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => onSelectProject(project.id)}
                          className="text-xs font-bold text-[#6c7c39] hover:text-[#323e11]"
                        >
                          Ver detalle completo →
                        </button>

                        <div className="flex items-center gap-3 text-[#85984e]">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub"
                              className="hover:text-[#323e11] hover:scale-110 transition-all p-1"
                            >
                              <Github size={18} />
                            </a>
                          )}
                          {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Demo"
                              className="hover:text-[#323e11] hover:scale-110 transition-all p-1"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};
