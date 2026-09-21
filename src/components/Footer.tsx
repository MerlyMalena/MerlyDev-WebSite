import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t-2 border-[#85984e]/20 bg-[#FAF8F2]/80 font-serif">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 font-bold text-xl text-[#323e11]">
          <HoneycombIcon className="w-6 h-6" />
          <span>MerlyDev</span>
        </div>

        <p className="text-sm text-[#323e11]/80 font-sans flex items-center gap-1.5">
          Hecho con <Heart size={15} className="text-[#85984e] fill-[#85984e]" /> en React, TypeScript y Tailwind CSS.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="p-3 rounded-full bg-[#85984e] text-white hover:bg-[#323e11] transition-all active:scale-95 shadow-md"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};
