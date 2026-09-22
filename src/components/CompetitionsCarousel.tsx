import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronLeft, ChevronRight, ArrowRight, Award, Calendar, Building2, Users } from 'lucide-react';
import { COMPETITIONS_DATA } from '../data/competitions';

interface CompetitionsCarouselProps {
  onSelectCompetition: (id: string) => void;
}

export const CompetitionsCarousel: React.FC<CompetitionsCarouselProps> = ({
  onSelectCompetition,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0); // for restarting 10s timer

  const currentItem = COMPETITIONS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % COMPETITIONS_DATA.length);
    setKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + COMPETITIONS_DATA.length) % COMPETITIONS_DATA.length);
    setKey((prev) => prev + 1);
  };

  // 10-second automatic carousel
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section
      id="competencias"
      className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 relative font-serif scroll-mt-24"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[32px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-6 sm:p-8 md:p-10 shadow-lg shadow-[#6c7c39]/10"
        >
          {/* Section Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#85984e] text-white mb-1.5 shadow-xs">
              <Trophy size={13} className="text-[#f3dc99]" />
              Participaciones & Retos
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6c7c39] tracking-tight leading-tight">
              Hackatones & Competencias
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-[#323e11]/80 font-sans">
              Experiencias de desarrollo intensivo, retos algorítmicos y premios de innovación.
            </p>
          </div>

          {/* Card Container with Side Navigation Arrows */}
          <div className="relative">
            {/* Botón Flecha Izquierda (Al lado izquierdo de la tarjeta) */}
            <button
              onClick={handlePrev}
              aria-label="Anterior competencia"
              className="absolute -left-3 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Olive Card Container: Altura fija y uniforme en todas las competencias */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-[#85984e] text-white rounded-[28px] p-6 sm:p-8 md:p-10 shadow-md relative overflow-hidden transition-all h-[600px] sm:h-[560px] md:h-[460px] lg:h-[440px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
                >
                  {/* Left: Single Honeycomb Cell Frame with Photo */}
                  <div className="md:col-span-5 flex items-center justify-center py-1 md:py-0">
                    <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-56 md:h-64 lg:w-60 lg:h-68 flex items-center justify-center">
                      {/* Hexagon Shadow and Outer Border Container */}
                      <div
                        className="w-full h-full relative p-2 transition-transform duration-500 hover:scale-105"
                        style={{ filter: 'drop-shadow(0 12px 20px rgba(50, 62, 17, 0.35))' }}
                      >
                        {/* Outer Golden Hexagon Rim */}
                        <div
                          className="w-full h-full bg-[#f3dc99] p-[5px] transition-all"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          }}
                        >
                          {/* Middle Amber Honeycomb Line */}
                          <div
                            className="w-full h-full bg-[#e59828] p-[3px] transition-all"
                            style={{
                              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                            }}
                          >
                            {/* Inner Photo Container */}
                            <div
                              className="w-full h-full relative overflow-hidden bg-[#323e11]"
                              style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                              }}
                            >
                              <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                              />
                              {/* Subtle dark gradient overlay at bottom of photo */}
                              <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/50 via-transparent to-transparent pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Small Bottom Badge on Hexagon */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10">
                          <div className="bg-[#FAF8F2] text-[#323e11] px-3.5 py-0.5 rounded-full text-[11px] font-bold shadow-md border-2 border-[#85984e] flex items-center gap-1.5 whitespace-nowrap font-serif">
                            <Trophy size={12} className="text-[#e59828]" />
                            <span>{currentItem.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Competition Title, Organizer, Description and "Ver más" button */}
                  <div className="md:col-span-7 flex flex-col justify-center space-y-2.5 sm:space-y-3">
                    {/* Category and Award Badges (Altura uniforme) */}
                    <div className="flex flex-wrap items-center gap-2 min-h-[26px]">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-[#f3dc99] border border-white/25">
                        {currentItem.category}
                      </span>
                      {currentItem.award && (
                        <span className="flex items-center gap-1 text-xs font-bold bg-[#f3dc99] text-[#323e11] px-3 py-0.5 rounded-full shadow-xs">
                          <Award size={13} />
                          {currentItem.award}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-white/80 font-sans ml-auto">
                        <Calendar size={12} />
                        {currentItem.date}
                      </span>
                    </div>

                    {/* Organizer & Team */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-sans text-[#f3dc99] min-h-[22px]">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={14} className="text-[#f3dc99] shrink-0" />
                        <span>
                          Organizado por:{' '}
                          <strong className="text-white font-semibold underline decoration-[#f3dc99]/50 underline-offset-2">
                            {currentItem.organizer}
                          </strong>
                        </span>
                      </div>

                      {(currentItem.teamName || currentItem.teamSize) && (
                        <div className="flex items-center gap-1.5 text-white/95">
                          <Users size={14} className="text-[#f3dc99] shrink-0" />
                          <span>
                            Equipo:{' '}
                            <strong className="text-white font-semibold">
                              {currentItem.teamName || 'Equipo'}
                            </strong>
                            {currentItem.teamSize && (
                              <span className="text-[#f3dc99] font-medium ml-1">
                                ({currentItem.teamSize} personas)
                              </span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Nombre de competencia: Espacio reservado para 2 líneas uniforme */}
                    <div className="min-h-[3.25rem] sm:min-h-[3.75rem] flex items-center">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-white line-clamp-2">
                        {currentItem.title}
                      </h3>
                    </div>

                    {/* Descripcion: Espacio reservado uniforme para 3 líneas */}
                    <div className="min-h-[3.6rem] sm:min-h-[4.2rem]">
                      <p className="text-xs sm:text-sm md:text-base text-white/90 font-sans leading-relaxed line-clamp-3">
                        {currentItem.shortDescription}
                      </p>
                    </div>

                    {/* Tags: Altura consistente */}
                    <div className="flex flex-wrap gap-1.5 min-h-[26px] items-center pt-0.5">
                      {currentItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón Ver más debajo para ver detalles (abre sección aparte) */}
                    <div className="pt-1.5 sm:pt-2">
                      <button
                        onClick={() => onSelectCompetition(currentItem.id)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF8F2] text-[#6c7c39] hover:text-[#323e11] shadow-md hover:shadow-lg transition-all text-sm font-bold font-serif group active:scale-95"
                      >
                        <span>Ver más detalles</span>
                        <ArrowRight
                          size={15}
                          className="text-[#6c7c39] group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 10-Second Progress Line Indicator at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  key={`progress-${key}`}
                  initial={{ width: '0%' }}
                  animate={{ width: isPaused ? '0%' : '100%' }}
                  transition={{
                    duration: 10,
                    ease: 'linear',
                  }}
                  className="h-full bg-[#f3dc99]"
                />
              </div>
            </div>

            {/* Botón Flecha Derecha (Al lado derecho de la tarjeta) */}
            <button
              onClick={handleNext}
              aria-label="Siguiente competencia"
              className="absolute -right-3 sm:-right-5 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dots Indicators below card */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {COMPETITIONS_DATA.map((comp, idx) => (
              <button
                key={comp.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setKey((prev) => prev + 1);
                }}
                aria-label={`Ir a competencia ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-7 bg-[#85984e]'
                    : 'w-2 bg-[#85984e]/30 hover:bg-[#85984e]/60'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

