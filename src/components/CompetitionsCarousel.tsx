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
      className="min-h-[85vh] flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-20 px-3 sm:px-6 relative font-serif scroll-mt-28"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Contenedor transparente idéntico al de Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[28px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-4 sm:p-8 md:p-10 shadow-lg shadow-[#6c7c39]/10"
        >
          {/* Section Header */}
          <div className="mb-5 sm:mb-6">
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
            {/* Botón Flecha Izquierda (Al lado izquierdo de la tarjeta en desktop) */}
            <button
              onClick={handlePrev}
              aria-label="Anterior competencia"
              className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-lg items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Olive Card Container: Altura adaptable en móvil y uniforme en desktop */}
            <div
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="bg-[#85984e] text-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-7 md:p-10 shadow-md relative overflow-hidden transition-all min-h-[500px] sm:min-h-[480px] md:h-[480px] lg:h-[460px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center"
                >
                  {/* Left: Single Honeycomb Cell Frame with Photo */}
                  <div className="md:col-span-5 flex items-center justify-center py-1 md:py-0">
                    <div className="relative w-36 h-44 sm:w-48 sm:h-56 md:w-56 md:h-64 lg:w-60 lg:h-68 flex items-center justify-center">
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
                  <div className="md:col-span-7 flex flex-col justify-center space-y-2 sm:space-y-3">
                    {/* Category and Award Badges (Altura uniforme) */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/20 text-[#f3dc99] border border-white/25">
                        {currentItem.category}
                      </span>
                      {currentItem.award && (
                        <span className="flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-[#f3dc99] text-[#323e11] px-2.5 sm:px-3 py-0.5 rounded-full shadow-xs">
                          <Award size={12} />
                          {currentItem.award}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs text-white/80 font-sans ml-auto">
                        <Calendar size={11} />
                        {currentItem.date}
                      </span>
                    </div>

                    {/* Organizer & Team */}
                    <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs sm:text-sm font-sans text-[#f3dc99]">
                      <div className="flex items-center gap-1.5">
                        <Building2 size={13} className="text-[#f3dc99] shrink-0" />
                        <span>
                          Organizado por:{' '}
                          <strong className="text-white font-semibold underline decoration-[#f3dc99]/50 underline-offset-2">
                            {currentItem.organizer}
                          </strong>
                        </span>
                      </div>

                      {(currentItem.teamName || currentItem.teamSize) && (
                        <div className="flex items-center gap-1.5 text-white/95">
                          <Users size={13} className="text-[#f3dc99] shrink-0" />
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

                    {/* Nombre de competencia */}
                    <div className="flex items-center">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-white line-clamp-2">
                        {currentItem.title}
                      </h3>
                    </div>

                    {/* Descripcion */}
                    <div>
                      <p className="text-xs sm:text-sm md:text-base text-white/90 font-sans leading-relaxed line-clamp-3">
                        {currentItem.shortDescription}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 items-center pt-0.5">
                      {currentItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botón Ver más debajo para ver detalles (abre sección aparte) */}
                    <div className="pt-2 sm:pt-2.5 pb-2 sm:pb-0">
                      <button
                        onClick={() => onSelectCompetition(currentItem.id)}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white hover:bg-[#FAF8F2] text-[#6c7c39] hover:text-[#323e11] shadow-md hover:shadow-lg transition-all text-xs sm:text-sm font-bold font-serif group active:scale-95"
                      >
                        <span>Ver más detalles</span>
                        <ArrowRight
                          size={14}
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

            {/* Botón Flecha Derecha (Al lado derecho de la tarjeta en desktop) */}
            <button
              onClick={handleNext}
              aria-label="Siguiente competencia"
              className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-lg items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            >
              <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Controls: Flechas en móvil y puntos indicadores */}
          <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
            <button
              onClick={handlePrev}
              aria-label="Anterior competencia"
              className="md:hidden w-8 h-8 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-md flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {COMPETITIONS_DATA.map((comp, idx) => (
                <button
                  key={comp.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setKey((prev) => prev + 1);
                  }}
                  aria-label={`Ir a competencia ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-7 bg-[#85984e]'
                      : 'w-2.5 bg-[#85984e]/30 hover:bg-[#85984e]/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Siguiente competencia"
              className="md:hidden w-8 h-8 rounded-full bg-white hover:bg-[#85984e] text-[#6c7c39] hover:text-white border-2 border-[#85984e]/30 shadow-md flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

