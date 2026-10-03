import { Competition } from '../types/competition';

export const COMPETITIONS_DATA: Competition[] = [
  {
    id: 'hackaton-por-los-derechos',
    title: 'Hackathon Por los Derechos 2026',
    organizer: 'Defensor del Pueblo',
    teamName: 'Meca Flow',
    teamMembers: [
      'José Nicolás Sánchez (NikoVanetti)',
      'Huascar Zapata',
      'Mayelin',
      'Abel',
      'Merly Malena',
    ],
    category: 'Hackathon 48 Horas',
    award: '🏆 2do Lugar — Eje de Economía de Triple Impacto',
    date: 'Mayo 2026',
    location: 'Santo Domingo, Rep. Dom.',
    shortDescription: 'Sistema inteligente para mitigar inundaciones y generar energía limpia con lluvia, integrando la barrera automática HydroShield.',
    fullDescription: `La iniciativa Meca Flow busca reducir las inundaciones urbanas y la dependencia de los combustibles fósiles en República Dominicana, mediante un sistema inteligente que monitorea el drenaje y genera energía limpia a partir del flujo de lluvia.

Además, incorpora el HydroShield, una barrera automática contra inundaciones que funciona sin electricidad y promueve la economía circular al reutilizar plástico reciclado para fabricar parte de la infraestructura. De este modo, procura ofrecer mayor seguridad y sostenibilidad a las familias dominicanas.`,
    projectBuilt: 'AquaShield',
    projectSummary: 'Monitoreo inteligente de drenaje, barrera hidromecánica autónoma HydroShield y generación de energía limpia basada en flujo pluvial y economía circular.',
    tags: ['Sostenibilidad', 'Economía Circular', 'IoT', 'Energía Limpia', 'C#', '.NET'],
    image: '/images/competencias/Defensordelpueblo-Mecaflow.jpg',
    highlights: [
      '🏆 2do Lugar en el Eje de Economía de Triple Impacto.',
      'Barrera HydroShield: protección hidromecánica automática contra inundaciones sin consumo eléctrico.',
      'Generación de energía limpia aprovechando el caudal del flujo de lluvia.',
      'Fomento de la economía circular utilizando plástico reciclado en la infraestructura física.',
      'Defensa de pitch técnico y prototipo funcional ante el panel de jurados del Defensor del Pueblo.'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 'CodeJam',
    title: 'Code Jam 2026',
    organizer: 'CICC — Club de Programación Competitiva (PUCMM)',
    category: 'Programación Competitiva',
    award: 'Participación',
    date: 'Junio 2026',
    location: 'Campus Santiago, PUCMM (STI)',
    shortDescription: 'Competencia oficial en PUCMM Santiago bajo el lema "Aprende. Practica. Construye.", resolviendo retos algorítmicos contrarreloj estilo ICPC.',
    fullDescription: `Competencia de programación competitiva organizada por el CICC (Comité de Estudiantes de Ingeniería en Ciencias de la Computación / Club de Programación Competitiva) de la Pontificia Universidad Católica Madre y Maestra (PUCMM) en su Campus Santiago.

Bajo el lema oficial "Aprende. Practica. Construye.", la competencia reunió a estudiantes en una intensa jornada presencial para resolver problemas algorítmicos de alto nivel contrarreloj, inspirados en los estándares internacionales de ICPC y Codeforces.

Durante el certamen se abordaron retos centrados en manipulación eficiente de entrada y salida estándar, estructuras de datos avanzadas, optimización asintótica (Big-O), lógica matemática y prevención de fallos en tiempo de ejecución.`,
    projectBuilt: 'Soluciones Algorítmicas Code Jam',
    projectSummary: 'Implementación de algoritmos de optimización, manejo de grafos y estructuras de datos con estricto control de tiempo de CPU y memoria.',
    tags: ['Programación Competitiva', 'Algoritmos', 'Estructuras de Datos', 'Big-O', 'ICPC', 'C#'],
    image: '/images/competencias/CodeJam2026.jpg',
    highlights: [
      'Competencia oficial organizada por el CICC (PUCMM Campus Santiago).',
      'Lema oficial: "Aprende. Practica. Construye."',
      'Resolución de problemas de alta complejidad bajo formato competitivo estilo ICPC y Codeforces.',
      'Optimización asintótica estricta con límites reducidos de tiempo de CPU y memoria.',
      'Dominio de estructuras de datos, lógica matemática y colecciones eficientes.'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#'
  },
  {
    id: 'AlphaRamosWeek',
    title: 'AlphaRamos Week 2026',
    organizer: 'Grupo Ramos',
    teamName: 'Equipo Pulse',
    teamMembers: [
      'César',
      'Jinellys',
      'Johan Vicente',
      'Merly Malena Hernández',
    ],
    category: 'Innovación Abierta / Retail Tech',
    award: 'Participación',
    date: 'Agosto 2026',
    location: 'Santo Domingo, Rep. Dom.',
    shortDescription: 'Programa de innovación abierta de Grupo Ramos para transformar el retail moderno con foco en experiencia del cliente, operaciones y sostenibilidad.',
    fullDescription: `AlphaRamos Week es el programa oficial de innovación abierta de Grupo Ramos, concebido para conectar el talento universitario multidisciplinario con los desafíos reales de la industria del retail bajo la premisa de que "innovar comienza con quienes se atreven a construir el futuro".

Durante una semana intensiva que abarcó formación en metodologías ágiles, mentorías personalizadas de líderes empresariales y sesiones de resolución estratégica, nuestro equipo colaboró en el diseño de propuestas innovadoras orientadas a los ejes clave de la organización: experiencia del cliente, eficiencia operativa y sostenibilidad en retail.

El proceso culminó con la presentación y defensa de la propuesta ante un panel de jurados ejecutivos y referentes tecnológicos de Grupo Ramos. (Nota: Por acuerdo de confidencialidad, los detalles técnicos y el proyecto desarrollado se mantienen bajo reserva).`,
    tags: ['Retail Tech', 'Sostenibilidad', 'Innovación Abierta', 'Estrategia', 'Retail'],
    image: '/images/competencias/AlphaRamosWeek.jpg',
    highlights: [
      'Seleccionados por la universidad para participar en la 2da edición oficial de AlphaRamos Week.',
      'Alineación estratégica con los desafíos del retail: operaciones eficientes, experiencia y sostenibilidad.',
      'Acompañamiento y mentorías especializadas con directores del sector retail y expertos tecnológicos.',
      'Defensa de propuesta y caso de negocio ante el jurado evaluador ejecutivo.',
      'Proyecto desarrollado bajo acuerdo de confidencialidad (NDA).'
    ]
  }
];
