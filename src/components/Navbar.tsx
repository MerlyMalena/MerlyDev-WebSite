import React, { useState } from 'react';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import { HoneycombIcon } from './HoneycombIcon';

export type PageRoute = 'home' | 'blog' | 'proyectos' | 'skills' | 'proyecto-detalle' | 'articulo-detalle' | 'competencia-detalle';

interface NavbarProps {
  currentRoute?: PageRoute;
  onNavigate?: (route: PageRoute) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute: _currentRoute = 'home', onNavigate, onScrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(route);
    } else {
      window.location.hash = route === 'home' ? '/' : `/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none font-serif">
      <header className="max-w-5xl mx-auto pointer-events-auto bg-[#85984e] text-white rounded-[26px] shadow-lg shadow-[#85984e]/20 px-6 sm:px-8 py-3.5 flex items-center justify-between transition-all">
        {/* Logo Left: Honeycomb + MerlyDev -> Leads to Home Top */}
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-serif font-bold tracking-normal text-white hover:opacity-90 transition-opacity"
        >
          <HoneycombIcon className="w-8 h-8 drop-shadow-xs text-white" />
          <span>MerlyDev</span>
        </a>

        {/* Desktop Navigation: Va a las secciones en la misma página */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#sobre-mi"
            onClick={(e) => handleSectionClick(e, 'sobre-mi')}
            className="text-base font-serif font-bold text-white hover:text-[#f3dc99] transition-colors"
          >
            Sobre mí
          </a>
          <a
            href="#blog"
            onClick={(e) => handleSectionClick(e, 'blog')}
            className="text-base font-serif font-bold text-white hover:text-[#f3dc99] transition-colors"
          >
            Blog
          </a>
          <a
            href="#proyectos"
            onClick={(e) => handleSectionClick(e, 'proyectos')}
            className="text-base font-serif font-bold text-white hover:text-[#f3dc99] transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#competencias"
            onClick={(e) => handleSectionClick(e, 'competencias')}
            className="text-base font-serif font-bold text-white hover:text-[#f3dc99] transition-colors"
          >
            Competencias
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSectionClick(e, 'skills')}
            className="text-base font-serif font-bold text-white hover:text-[#f3dc99] transition-colors"
          >
            Skills
          </a>

          {/* Social Icons Right */}
          <div className="flex items-center gap-3.5 pl-2 border-l border-white/30 text-white">
            <a
              href="mailto:contacto@merlymalena2303@hotmail.com"
              aria-label="Email"
              className="hover:text-[#f3dc99] hover:scale-110 transition-all p-0.5"
            >
              <Mail size={22} strokeWidth={2.2} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#f3dc99] hover:scale-110 transition-all p-0.5"
            >
              <Linkedin size={22} strokeWidth={2.2} />
            </a>
            <a
              href="https://github.com/MerlyMalena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#f3dc99] hover:scale-110 transition-all p-0.5"
            >
              <Github size={22} strokeWidth={2.2} />
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
            className="p-1.5 text-white hover:text-[#f3dc99] transition-colors"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto pointer-events-auto bg-[#85984e] text-white rounded-2xl p-5 shadow-xl border border-white/20 animate-fadeIn space-y-3">
          <a
            href="#sobre-mi"
            onClick={(e) => handleSectionClick(e, 'sobre-mi')}
            className="block text-lg font-serif font-bold text-white hover:text-[#f3dc99] py-1"
          >
            Sobre mí
          </a>
          <a
            href="#blog"
            onClick={(e) => handleSectionClick(e, 'blog')}
            className="block text-lg font-serif font-bold text-white hover:text-[#f3dc99] py-1"
          >
            Blog
          </a>
          <a
            href="#proyectos"
            onClick={(e) => handleSectionClick(e, 'proyectos')}
            className="block text-lg font-serif font-bold text-white hover:text-[#f3dc99] py-1"
          >
            Proyectos
          </a>
          <a
            href="#competencias"
            onClick={(e) => handleSectionClick(e, 'competencias')}
            className="block text-lg font-serif font-bold text-white hover:text-[#f3dc99] py-1"
          >
            Competencias
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSectionClick(e, 'skills')}
            className="block text-lg font-serif font-bold text-white hover:text-[#f3dc99] py-1"
          >
            Skills
          </a>
          <div className="pt-3 border-t border-white/25 flex items-center gap-5">
            <a href="mailto:contacto@merly.dev" className="text-white hover:text-[#f3dc99]">
              <Mail size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f3dc99]">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f3dc99]">
              <Github size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
