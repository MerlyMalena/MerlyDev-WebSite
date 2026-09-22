import React from 'react';
import { ArrowLeft, ExternalLink, Github, Trophy, Award, Calendar, MapPin, CheckCircle2, Tag, Layers, Building2, Users } from 'lucide-react';
import { COMPETITIONS_DATA } from '../data/competitions';

interface CompetitionDetailPageProps {
  competitionId: string;
  onBack: () => void;
  onSelectOtherCompetition: (id: string) => void;
}

export const CompetitionDetailPage: React.FC<CompetitionDetailPageProps> = ({
  competitionId,
  onBack,
  onSelectOtherCompetition,
}) => {
  const item = COMPETITIONS_DATA.find((c) => c.id === competitionId) || COMPETITIONS_DATA[0];
  const otherCompetitions = COMPETITIONS_DATA.filter((c) => c.id !== item.id).slice(0, 2);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </button>

        {/* Competition Detail Card */}
        <div className="bg-[#FAF8F2] rounded-[36px] border-2 border-[#85984e]/40 p-6 sm:p-10 shadow-lg shadow-[#6c7c39]/10 space-y-8">
          {/* Top Meta: Badges, Award, Organizer, Team & Date */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white shadow-xs">
                {item.category}
              </span>
              {item.award && (
                <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#f3dc99] text-[#323e11] border border-[#85984e]/30 shadow-xs">
                  <Award size={14} className="text-[#85984e]" />
                  {item.award}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-[#85984e] font-sans">
              <span className="flex items-center gap-1.5 bg-[#cbd99e]/40 px-3.5 py-1 rounded-full text-[#323e11]">
                <Building2 size={13} className="text-[#85984e]" />
                Org: {item.organizer}
              </span>
              {(item.teamName || item.teamSize) && (
                <span className="flex items-center gap-1.5 bg-[#cbd99e]/40 px-3.5 py-1 rounded-full text-[#323e11]">
                  <Users size={13} className="text-[#85984e]" />
                  <span>
                    Equipo: {item.teamName || 'Equipo'} {item.teamSize ? `(${item.teamSize} personas)` : ''}
                  </span>
                </span>
              )}
              {item.location && (
                <span className="flex items-center gap-1 bg-[#cbd99e]/30 px-3 py-1 rounded-full">
                  <MapPin size={12} />
                  {item.location}
                </span>
              )}
              <span className="flex items-center gap-1 bg-[#cbd99e]/30 px-3 py-1 rounded-full">
                <Calendar size={12} />
                {item.date}
              </span>
            </div>
          </div>

          {/* Title & Short Description */}
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#6c7c39] tracking-tight leading-tight">
              {item.title}
            </h1>
            <p className="mt-4 text-base sm:text-xl text-[#323e11]/85 font-sans leading-relaxed">
              {item.shortDescription}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 md:h-[440px] w-full rounded-[28px] overflow-hidden bg-[#cbd99e]/30 border border-[#85984e]/20 shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/60 via-transparent to-transparent opacity-40" />
          </div>

          {/* Two-Column Deep Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
            {/* Left/Main Column: Full Description & Solution Built */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#6c7c39] mb-3 flex items-center gap-2">
                  <Trophy size={24} className="text-[#85984e]" />
                  La Experiencia & El Reto
                </h3>
                <p className="text-base sm:text-lg text-[#323e11]/90 font-sans leading-relaxed whitespace-pre-line">
                  {item.fullDescription}
                </p>
              </div>

              {/* Solution Built Box */}
              {item.projectBuilt && (
                <div className="p-6 sm:p-8 rounded-[28px] bg-white border-2 border-[#85984e]/30 shadow-xs space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#85984e] font-bold">
                    // Proyecto Desarrollado
                  </span>
                  <h4 className="text-xl font-bold text-[#323e11] font-serif">
                    {item.projectBuilt}
                  </h4>
                  {item.projectSummary && (
                    <p className="text-sm sm:text-base text-[#323e11]/80 font-sans">
                      {item.projectSummary}
                    </p>
                  )}
                </div>
              )}

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[28px] bg-[#cbd99e]/40 border-2 border-[#85984e]/30 space-y-4">
                  <h3 className="text-lg font-bold text-[#6c7c39] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[#85984e]" />
                    Puntos Clave & Logros del Evento
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 font-sans">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#323e11]/90">
                        <span className="text-[#85984e] font-bold mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Team Members List (Integrantes del Equipo) */}
              {item.teamMembers && item.teamMembers.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[28px] bg-white border-2 border-[#85984e]/30 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-[#85984e]/20 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#6c7c39] flex items-center gap-2">
                      <Users size={22} className="text-[#85984e]" />
                      Integrantes del Equipo {item.teamName ? `(${item.teamName})` : ''}
                    </h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#cbd99e]/40 text-[#323e11] font-sans">
                      {item.teamMembers.length} {item.teamMembers.length === 1 ? 'persona' : 'personas'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {item.teamMembers.map((member, idx) => {
                      const name = typeof member === 'string' ? member : member.name;
                      const role = typeof member === 'object' ? member.role : null;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#85984e]/25 hover:border-[#85984e] transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#85984e] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs font-serif">
                            {name.charAt(0).toUpperCase()}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-[#323e11] text-sm sm:text-base truncate font-sans">
                              {name}
                            </p>
                            {role ? (
                              <p className="text-xs text-[#85984e] font-sans font-medium">{role}</p>
                            ) : (
                              <p className="text-xs text-[#323e11]/60 font-sans">Integrante del equipo</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right/Sidebar Column: Stack & Action Buttons */}
            <div className="lg:col-span-4 space-y-6">
              {/* Organizer Info Box */}
              <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-2 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-widest text-[#85984e] font-bold flex items-center gap-1.5">
                  <Building2 size={14} /> Entidad Organizadora
                </span>
                <p className="text-base font-bold text-[#323e11] font-sans">
                  {item.organizer}
                </p>
              </div>

              {/* Team Info Box */}
              {(item.teamName || item.teamSize || (item.teamMembers && item.teamMembers.length > 0)) && (
                <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-3 shadow-xs">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#85984e] font-bold flex items-center gap-1.5">
                    <Users size={14} /> Equipo Participante
                  </span>
                  <p className="text-base font-bold text-[#323e11] font-sans">
                    {item.teamName || 'Equipo'}
                  </p>
                  {(item.teamSize || (item.teamMembers && item.teamMembers.length > 0)) && (
                    <p className="text-xs text-[#323e11]/70 font-sans">
                      {item.teamSize || item.teamMembers?.length} integrantes
                    </p>
                  )}
                  {item.teamMembers && item.teamMembers.length > 0 && (
                    <div className="pt-2 border-t border-[#85984e]/15 flex flex-wrap gap-1.5">
                      {item.teamMembers.map((m, idx) => {
                        const name = typeof m === 'string' ? m : m.name;
                        return (
                          <span
                            key={idx}
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#cbd99e]/30 text-[#323e11]"
                          >
                            {name}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Actions Box */}
              <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-4 shadow-xs">
                <h4 className="text-base font-bold text-[#6c7c39]">
                  Enlaces del Proyecto
                </h4>

                {item.liveUrl && item.liveUrl !== '#' && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-serif font-bold text-white bg-[#85984e] hover:bg-[#323e11] shadow-md transition-all text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Proyecto en Vivo</span>
                  </a>
                )}

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-serif font-bold text-[#6c7c39] bg-[#FAF8F2] hover:bg-[#85984e] hover:text-white border-2 border-[#85984e]/40 shadow-xs transition-all text-sm"
                  >
                    <Github size={16} />
                    <span>Repositorio en GitHub</span>
                  </a>
                )}
              </div>

              {/* Technologies Used */}
              <div className="p-6 rounded-[28px] bg-white border-2 border-[#85984e]/30 space-y-3 shadow-xs">
                <h4 className="text-base font-bold text-[#6c7c39] flex items-center gap-2">
                  <Tag size={16} className="text-[#85984e]" />
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
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

        {/* Other Competitions Preview */}
        {otherCompetitions.length > 0 && (
          <div className="pt-8 border-t border-[#85984e]/20 space-y-6">
            <h3 className="text-2xl font-bold text-[#6c7c39] flex items-center gap-2">
              <Layers size={22} className="text-[#85984e]" />
              Otras participaciones y retos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherCompetitions.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectOtherCompetition(c.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer p-5 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30 hover:border-[#85984e] hover:shadow-md transition-all flex items-center gap-4 group"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <span className="text-[11px] font-bold text-[#85984e] uppercase">{c.category}</span>
                    <h4 className="text-base font-bold text-[#323e11] group-hover:text-[#6c7c39] line-clamp-1 transition-colors">
                      {c.title}
                    </h4>
                    <span className="text-xs text-[#6c7c39] font-bold group-hover:underline">
                      Ver detalles →
                    </span>
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

