import { Project, ProjectCategory } from '../types/project';

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'todos', label: 'Todos los Proyectos' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'tools', label: 'Herramientas & APIs' },
];

/**
 * 💡 CÓMO AGREGAR UN NUEVO PROYECTO:
 * Simplemente copia uno de los objetos a continuación, pégalo en la lista
 * y cambia los datos por los de tu proyecto.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'merly-dev-hub',
    title: 'MerlyDev: Un rincón de tecnología, ideas y proyectos',
    shortDescription: 'Espacio digital interactivo donde comparto mis desarrollos técnicos, reflexiones sobre software y proyectos personales con un diseño moderno y accesible.',
    fullDescription: 'Un portafolio y blog personal concebido para documentar mi trayectoria en tecnología de manera cercana y visual. El sitio combina una arquitectura desacoplada y limpia en React con animaciones fluidas mediante Framer Motion, una navegación ágil y una estética visual armónica construida con Tailwind CSS. Está diseñado para ofrecer una experiencia intuitiva tanto a desarrolladores como a cualquier persona interesada en el aprendizaje y la creación digital.',
    category: 'frontend',
    image: '../public/images/proyectos/MerlyDevPort.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/MerlyMalena/MerlyDev',
    liveUrl: '#',
    featured: true,
    date: '2026',
    highlightsTitle: '¿Qué encontrarás aquí?',
    highlights: [
      'Sobre mí: Mi perfil, metas y visión como desarrolladora.',
      'Artículos & Aprendizajes: Guías prácticas, reflexiones y documentación de retos técnicos.',
      'Proyectos destacados: Soluciones funcionales explicadas a detalle, con acceso a su código y demos en vivo.',
      'Comunidad & Eventos: Mi participación en hackatones, talleres y actividades de tecnología.',
      'Stack tecnológico: Las herramientas, frameworks y lenguajes que utilizo en mi día a día y aquellos que aún estoy en proceso de aprendizaje.'
    ]
  }
];

