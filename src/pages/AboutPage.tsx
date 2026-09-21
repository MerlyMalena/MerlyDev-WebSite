import React from 'react';
import { ArrowLeft, Sparkles, Compass, Heart, Zap, Coffee } from 'lucide-react';
import { HoneycombIcon } from '../components/HoneycombIcon';

interface AboutPageProps {
  onNavigateHome: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Back Link */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#85984e] hover:text-[#323e11] group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </button>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#85984e] text-white mb-3 shadow-xs">
            <Sparkles size={14} className="text-[#f3dc99]" />
            Mi Trayectoria
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#6c7c39] tracking-tight">
            Sobre Mí
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#323e11]/80 font-sans">
            Desarrollo de software con empatía, curiosidad constante y cuidado artesanal.
          </p>
        </div>

        {/* Story Card */}
        <div className="bg-[#cbd99e]/60 rounded-[36px] border-2 border-[#85984e]/40 p-8 sm:p-14 shadow-lg shadow-[#6c7c39]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 bg-[#85984e] text-white rounded-[28px] p-8 shadow-md">
              <HoneycombIcon className="w-10 h-10 mb-4" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#f3dc99]">
                // developer manifesto
              </span>
              <h3 className="text-2xl font-bold mt-2 leading-snug">
                "El buen software es como la naturaleza: complejo por dentro, armónico y simple por fuera."
              </h3>
              <div className="mt-8 pt-6 border-t border-white/25 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f3dc99] text-[#323e11] flex items-center justify-center font-bold text-xl">
                  🐝
                </div>
                <div>
                  <h4 className="text-base font-bold">Merly</h4>
                  <p className="text-xs text-white/80 font-sans">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-[#323e11]/90 text-base sm:text-lg leading-relaxed">
              <p>
                Comencé en el mundo del desarrollo impulsada por las ganas de entender cómo funcionan las cosas en el fondo y la emoción de poder crear herramientas que resuelvan problemas reales.
              </p>
              <p>
                Hoy en día me enfoco en el desarrollo frontend moderno con <strong>React, TypeScript y arquitecturas limpias</strong>, asegurándome de que cada línea de código tenga un propósito claro y que cada pantalla sea un placer de navegar.
              </p>
              <p>
                Me interesan especialmente los sistemas accesibles, el diseño responsivo, las animaciones fluidas y los proyectos que combinan tecnología y creatividad.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30">
            <div className="w-10 h-10 rounded-2xl bg-[#85984e] text-white flex items-center justify-center mb-3">
              <Zap size={20} className="text-[#f3dc99]" />
            </div>
            <h4 className="text-lg font-bold text-[#6c7c39]">Rendimiento</h4>
            <p className="text-xs sm:text-sm text-[#323e11]/80 mt-1 font-sans">
              Optimización de carga y arquitectura ligera.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30">
            <div className="w-10 h-10 rounded-2xl bg-[#85984e] text-white flex items-center justify-center mb-3">
              <Compass size={20} className="text-[#f3dc99]" />
            </div>
            <h4 className="text-lg font-bold text-[#6c7c39]">Código Limpio</h4>
            <p className="text-xs sm:text-sm text-[#323e11]/80 mt-1 font-sans">
              Estructura tipada, componentes modulares y legibles.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30">
            <div className="w-10 h-10 rounded-2xl bg-[#85984e] text-white flex items-center justify-center mb-3">
              <Heart size={20} className="text-[#f3dc99]" />
            </div>
            <h4 className="text-lg font-bold text-[#6c7c39]">Diseño Cálido</h4>
            <p className="text-xs sm:text-sm text-[#323e11]/80 mt-1 font-sans">
              Estética orgánica con identidad propia.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-[#FAF8F2] border-2 border-[#85984e]/30">
            <div className="w-10 h-10 rounded-2xl bg-[#85984e] text-white flex items-center justify-center mb-3">
              <Coffee size={20} className="text-[#f3dc99]" />
            </div>
            <h4 className="text-lg font-bold text-[#6c7c39]">Aprendizaje</h4>
            <p className="text-xs sm:text-sm text-[#323e11]/80 mt-1 font-sans">
              Constante exploración de nuevas tecnologías.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

