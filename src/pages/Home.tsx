import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { BlogPreview } from '../components/BlogPreview';
import { ProjectsPreview } from '../components/ProjectsPreview';
import { CompetitionsCarousel } from '../components/CompetitionsCarousel';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

interface HomeProps {
  onNavigateBlog: () => void;
  onNavigateProjects: () => void;
  onSelectProject: (id: string) => void;
  onSelectPost: (id: string) => void;
  onSelectCompetition: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigateBlog,
  onNavigateProjects,
  onSelectProject,
  onSelectPost,
  onSelectCompetition,
}) => {
  return (
    <>
      {/* 1. Hero Card */}
      <Hero />

      {/* 2. Sobre Mí (Solo en el Inicio, sin los 3 bloques) */}
      <About />

      {/* 3. Blog: 3 blogs más recientes con navegación a página de lectura */}
      <BlogPreview onViewAll={onNavigateBlog} onSelectPost={onSelectPost} />

      {/* 4. Portafolio: 3 proyectos más destacados con navegación a página de detalle */}
      <ProjectsPreview onViewAll={onNavigateProjects} onSelectProject={onSelectProject} />

      {/* 5. Hackatones & Competencias: carrusel automático con 10s */}
      <CompetitionsCarousel onSelectCompetition={onSelectCompetition} />

      {/* 6. Skills: Todos */}
      <Skills />

      {/* 7. Contacto */}
      <Contact />
    </>
  );
};
