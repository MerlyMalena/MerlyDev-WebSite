import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

// Ruta de tu foto en la carpeta public/images/competencias/
const PROFILE_IMAGE = '/images/competencias/Me.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 relative font-serif scroll-mt-24">
      <div className="w-full max-w-5xl mx-auto">
        {/* Main Card Only (Sin los 3 bloques inferiores) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[32px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-8 sm:p-12 md:p-14 shadow-lg shadow-[#6c7c39]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Card: Mindset, Identity & Photo */}
            <div className="lg:col-span-5 bg-[#85984e] text-white rounded-[28px] p-6 sm:p-7 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <HoneycombIcon className="w-8 h-8" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#f3dc99]">
                  // developer bio
                </span>
              </div>

              {/* Foto de Merly */}
              <div className="my-2 relative w-full h-64 sm:h-72 rounded-[22px] overflow-hidden border-2 border-white/25 shadow-md bg-[#323e11]/25 group">
                <img
                  src={PROFILE_IMAGE}
                  alt="Merly Malena"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback estético si no se encuentra la imagen local
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#323e11]/35 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="pt-4 border-t border-white/25 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#f3dc99] text-[#323e11] flex items-center justify-center font-bold text-lg">
                  🐝
                </div>
                <div>
                  <h4 className="text-base font-bold">Merly Malena</h4>
                  <p className="text-xs text-white/80 font-sans">Software Developer & Future DBA</p>
                </div>
              </div>
            </div>

            {/* Right: Bio & Journey */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#85984e] text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-[#f3dc99]" />
                Sobre Mí
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#6c7c39] leading-tight">
                Construyendo soluciones eficientes para los retos de hoy.
              </h2>

              <p className="text-base sm:text-lg text-[#323e11]/85 leading-relaxed font-sans">
                ¡Hola! Soy Merly Malena, estudiante de software en el ITLA. Me fascina el desarrollo de sistemas que resuelvan problemas reales mediante lógica estructurada, optimización de recursos y un funcionamiento impecable.
              </p>

              <p className="text-base text-[#323e11]/85 leading-relaxed font-sans">
                Como estudiante de desarrollo de software en el ITLA, me encuentro en constante aprendizaje, enfocándome principalmente en la gestión de bases de datos y la infraestructura en la nube para crear proyectos eficientes y preparados para el futuro.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
