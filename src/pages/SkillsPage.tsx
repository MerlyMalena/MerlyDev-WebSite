import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Skills } from '../components/Skills';

interface SkillsPageProps {
  onNavigateHome: () => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-8">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#85984e] hover:text-[#323e11] group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Inicio</span>
        </button>

        <Skills />
      </div>
    </div>
  );
};

