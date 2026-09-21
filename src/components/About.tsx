import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 relative font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Main Card Only (Sin los 3 bloques inferiores) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#cbd99e]/60 rounded-[32px] sm:rounded-[40px] border-2 border-[#85984e]/40 p-8 sm:p-12 md:p-14 shadow-lg shadow-[#6c7c39]/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Card: Mindset & Identity */}
            <div className="lg:col-span-5 bg-[#85984e] text-white rounded-[28px] p-7 sm:p-8 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <HoneycombIcon className="w-9 h-9" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#f3dc99]">
                  // developer bio
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                "Creando código con el cuidado y dedicación de una colmena."
              </h3>

              <div className="mt-8 pt-6 border-t border-white/25 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#f3dc99] text-[#323e11] flex items-center justify-center font-bold text-lg">
                  🐝
                </div>
                <div>
                  <h4 className="text-base font-bold">Merly</h4>
                  <p className="text-xs text-white/80 font-sans">Software Developer & Creator</p>
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
                Construyendo soluciones digitales pensadas, ordenadas y vivas.
              </h2>

              <p className="text-base sm:text-lg text-[#323e11]/85 leading-relaxed font-sans">
                ¡Hola! Soy Merly. Me fascina crear software que no solo funcione a la perfección, sino que se sienta cálido, intuitivo y estéticamente agradable. Mi especialidad se centra en el ecosistema de <strong>React, TypeScript y arquitecturas limpias</strong>.
              </p>

              <p className="text-base text-[#323e11]/85 leading-relaxed font-sans">
                Al igual que el proceso natural de una abeja que construye su colmena celda por celda, desarrollo cada proyecto cuidando la estructura, la legibilidad y la experiencia de quien lo utiliza.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
