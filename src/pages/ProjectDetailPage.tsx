import React from 'react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, Tag, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
  onSelectOtherProject: (id: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  projectId,
  onBack,
  onSelectOtherProject,
}) => {
  const project = PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#323e11] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver a Proyectos</span>
        </button>

        {/* Project Header Card */}
        <div className="bg-[#FAF8F2] rounded-[36px] border-2 border-[#85984e]/40 p-6 sm:p-10 shadow-lg shadow-[#6c7c39]/10 space-y-8">
          {/* Top Meta: Badges & Year */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                {project.category}
              </span>
              {project.featured && (
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#f3dc99] text-[#323e11] border border-[#85984e]/30">
                  ★ Destacado
                </span>
              )}
            </div>

            {project.date && (
              <span className="flex items-center gap-1.5 text-xs font-bold text-[#85984e] bg-[#cbd99e]/30 px-3.5 py-1 rounded-full font-sans">
                <Calendar size={13} />
                Año {project.date}
              </span>
            )}
          </div>

          {/* Title & Short Description */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#6c7c39] tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-[#323e11]/85 font-sans leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full rounded-[28px] overflow-hidden bg-[#cbd99e]/30 border border-[#85984e]/20 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/60 via-transparent to-transparent opacity-40" />
          </div>

          {/* Two-Column Deep Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
            {/* Left/Main Column: Full Description & Architecture Highlights */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#6c7c39] mb-3">
                  Sobre el Proyecto
                </h3>
                <p className="text-base sm:text-lg text-[#323e11]/90 font-sans leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[28px] bg-[#cbd99e]/40 border-2 border-[#85984e]/30 space-y-4">
                  <h3 className="text-lg font-bold text-[#6c7c39] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[#85984e]" />
                    Aspectos Destacados & Retos Técnicos
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 font-sans">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#323e11]/90">
                        <span className="text-[#85984e] font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column: Stack & Action Buttons */}
            <div className="lg:col-span-4 space-y-6">
              {/* Actions Box */}
              <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-4 shadow-xs">
                <h4 className="text-base font-bold text-[#6c7c39]">
                  Enlaces del Proyecto
                </h4>

                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-serif font-bold text-white bg-[#85984e] hover:bg-[#323e11] shadow-md transition-all text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Demo en Vivo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-serif font-bold text-[#323e11] bg-[#FAF8F2] hover:bg-[#85984e] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm"
                  >
                    <Github size={16} />
                    <span>Código en GitHub</span>
                  </a>
                )}
              </div>

              {/* Technologies Used */}
              <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-3 shadow-xs">
                <h4 className="text-base font-bold text-[#6c7c39] flex items-center gap-2">
                  <Tag size={16} className="text-[#85984e]" />
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-1.5">
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
            </div>
          </div>
        </div>

        {/* Other Projects Preview */}
        {otherProjects.length > 0 && (
          <div className="pt-8 border-t border-[#85984e]/20 space-y-6">
            <h3 className="text-2xl font-bold text-[#6c7c39] flex items-center gap-2">
              <Layers size={22} className="text-[#85984e]" />
              Explorar otros proyectos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectOtherProject(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer p-5 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30 hover:border-[#85984e] hover:shadow-md transition-all flex items-center gap-4"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#85984e] uppercase">{p.category}</span>
                    <h4 className="text-base font-bold text-[#323e11] line-clamp-1">{p.title}</h4>
                    <span className="text-xs text-[#85984e] font-bold hover:underline">Ver detalle →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

