import { Competition } from '../types/competition';

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: 'hackaton-por-los-derechos',
    title: 'Hackathon Por los Derechos 2026',
    organizer: 'Defensor del Pueblo',
    teamName: 'Mecaflow',
    teamMembers: [
      'José Nicolás Sánchez (NikoVanetti)' ,
      'Huascar Zapata',
      'Mayelin',
      'Abel',
      'Merly Malena',
    ],
    category: 'Hackathon 48 Horas',
    award: '🏆 2do Lugar - Eje de Economía de Triple Impacto',
    date: 'Mayo 2026',
    location: 'Santo Domingo',
    shortDescription: 'Desarrollo de un sistema de drenaje para la prevención en caso de inundaciones.',
    fullDescription: ``,
    projectBuilt: 'AquaShield',
    projectSummary: 'Plataforma web con mapa interactivo y gestión de inventario para bancos de alimentos comunitarios.',
    tags: ['C#', '.NET', 'SQL Server', 'React', 'Arquitectura Limpia'],
    image: '/images/competencias/Defensordelpueblo-Mecaflow.jpg',
    highlights: [
      'Segundo lugar obtenido entre más de 20 equipos universitarios y profesionales.',
      'Pitch técnico final de 5 minutos ante jurados expertos'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 'CodeJam',
    title: 'CodeJam 2026',
    organizer: 'CICC: PUCMM',
    category: 'Competencia de programación',
    award: 'Participación',
    date: 'Junio 2026',
    location: 'Sede Santiago',
    shortDescription: 'Resolución de problemas complejos de optimización matemática, teoría de grafos y manipulación de memoria con C#.',
    fullDescription: `Competencia intensiva individual y grupal centrada en la resolución de problemas algorítmicos contrarreloj bajo estrictas limitaciones de tiempo de CPU y memoria.

Se evaluó la eficiencia asintótica de las soluciones (notación Big-O), el dominio de colecciones genéricas de C#, algoritmos de búsqueda y ordenamiento avanzado, así como la prevención de excepciones en tiempo de ejecución.

Logré resolver 2 de 8 retos algorítmicos complejos en el menor tiempo registrado`,
    projectBuilt: 'GraphOptimizer C#',
    projectSummary: 'Suite de algoritmos de optimización de rutas y análisis de árboles de expansión mínima.',
    tags: ['C#', 'Algoritmos', 'Estructuras de Datos', 'Big-O', 'Optimización'],
    image: '/images/competencias/CodeJam2026.jpg',
    highlights: [
      '2do lugar entre más de 120 participantes a nivel nacional.',
      'Soluciones con complejidad O(N log N) en problemas de grafos dirigidos.',
      'Uso eficiente de tipos por valor y gestión de memoria sin sobrecargar el Garbage Collector de .NET.',
      'Resolución de casos límite (edge cases) con cobertura del 100% de los tests automáticos.'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 'AlphaRamosWeek',
    title: 'AlphaRamosWeek 2026',
    organizer: 'Grupo Ramos',
    teamName: 'Equipo Pulse',
    teamMembers: [
      'César ',
      'Jinellys',
      'Johan Vicente',
      'Merly Malena Hernández',
    ],
    category: 'Hackatón de Retail',
    award: 'Participación',
    date: 'Agosto 2026',
    location: 'UNIBE',
    shortDescription: 'Sistema de telemetría y dashboard analítico para monitorizar la eficiencia energética y métricas ambientales.',
    fullDescription: `Convocatoria orientada a crear soluciones de software que ayuden a mitigar la huella de carbono y optimizar el consumo de recursos en entornos corporativos y educativos.

Desarrollamos un prototipo funcional que recolecta métricas de consumo en tiempo real, las almacena en una base de datos centralizada y genera reportes analíticos con alertas tempranas ante anomalías.

El jurado destacó la claridad y separación de capas del software, otorgándonos la mención de honor a la mejor arquitectura técnica.`,
    projectBuilt: 'GreenMetrics Telemetry',
    projectSummary: 'Dashboard en tiempo real para análisis de consumo energético y huella de carbono.',
    tags: ['SQL Server', 'TypeScript', 'Tailwind CSS', 'Telemetría', 'Cloud'],
    image: '/images/competencias/AlphaRamosWeek.jpg',
    highlights: [
      'Premio a la Mejor Arquitectura de Software del evento.',
      'Pipelines de ingesta de datos simulados con WebSocket y persistencia periódica.',
      'Diseño de interfaz con enfoque accesible y visualización clara de gráficos de tendencias.',
      'Presentación de caso de negocio y sostenibilidad ante directores de tecnología.'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  }
];

