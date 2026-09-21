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
    title: 'MerlyDev Portfolio & Creative Space',
    shortDescription: 'Plataforma web personal con diseño interactivo, modo oscuro y visualizador de proyectos.',
    fullDescription: 'Un espacio digital moderno y personal diseñado para mostrar proyectos técnicos de forma creativa. Cuenta con animaciones fluidas utilizando Framer Motion, diseño modular con componentes de React, filtros por categorías, modal con detalles en profundidad y paleta de colores personalizada con Tailwind CSS.',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/merlydev/portfolio',
    liveUrl: '#',
    featured: true,
    date: '2026',
    highlights: [
      'Arquitectura desacoplada basada en datos TypeScript',
      'Sistema de tema oscuro / claro dinámico con persistencia local',
      'Animaciones reactivas y transiciones fluidas de vista previa',
      'Diseño 100% responsivo adaptable a móvil y escritorio'
    ]
  },
  {
    id: 'task-flow-pro',
    title: 'FlowTask — Gestión de Tareas y Productividad',
    shortDescription: 'Aplicación web colaborativa con tableros Kanban, métricas y sincronización en tiempo real.',
    fullDescription: 'Plataforma de gestión de proyectos orientada a equipos ágiles. Permite organizar flujos de trabajo mediante tableros dinámicos de arrastrar y soltar (drag & drop), asignación de prioridades, filtros por miembros y exportación de reportes de progreso.',
    category: 'fullstack',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/merlydev/flowtask',
    liveUrl: 'https://flowtask-demo.vercel.app',
    featured: true,
    date: '2026',
    highlights: [
      'Tableros interactivos con drag and drop fluido',
      'Autenticación segura con JWT y roles de usuario',
      'Optimización de consultas en base de datos para cargas masivas',
      'Métricas gráficas de rendimiento y tareas completadas'
    ]
  },
  {
    id: 'fintech-insights-api',
    title: 'DataSync & Analytics API',
    shortDescription: 'Servicio de integración de datos para procesamiento asíncrono y generación de analítica.',
    fullDescription: 'API RESTful de alto rendimiento enfocada en la ingestión y transformación de grandes volúmenes de datos. Implementa arquitectura limpia, pruebas unitarias automatizadas, sistema de caché para respuestas frecuentes y documentación interactiva OpenAPI/Swagger.',
    category: 'tools',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Node.js', 'Express', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/merlydev/datasync-api',
    liveUrl: '',
    featured: false,
    date: '2025',
    highlights: [
      'Procesamiento en segundo plano de colas de datos con Redis',
      'Cobertura de tests superior al 85% con Jest',
      'Contenedorización completa con Docker Compose',
      'Manejo centralizado de errores y logging estructurado'
    ]
  },
  {
    id: 'fit-track-mobile',
    title: 'FitPulse — Seguimiento de Entrenamientos',
    shortDescription: 'Aplicación móvil multiplataforma para registro de rutinas, temporizadores y metas físicas.',
    fullDescription: 'Aplicación móvil diseñada para deportistas que buscan monitorear su evolución física. Ofrece temporizadores HIIT configurables, cálculo de cargas progresivas, gráficas de historial mensual y funcionamiento sin conexión mediante almacenamiento local.',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'TypeScript', 'Expo', 'SQLite'],
    githubUrl: 'https://github.com/merlydev/fitpulse-app',
    liveUrl: '',
    featured: false,
    date: '2025',
    highlights: [
      'Soporte offline-first con SQLite integrado',
      'Notificaciones locales programadas para recordatorios de entrenamiento',
      'Diseño adaptable a pantallas iOS y Android nativas',
      'Animaciones nativas a 60 FPS'
    ]
  }
];

