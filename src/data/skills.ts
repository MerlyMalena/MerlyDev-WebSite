import { SkillCategory } from '../types/project';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    description: 'Construcción de interfaces interactivas, responsivas y centradas en la experiencia del usuario.',
    skills: [
      { name: 'React', level: 'Avanzado', iconName: 'Atom' },
      { name: 'TypeScript', level: 'Avanzado', iconName: 'FileCode2' },
      { name: 'Tailwind CSS', level: 'Avanzado', iconName: 'Palette' },
      { name: 'JavaScript (ES6+)', level: 'Avanzado', iconName: 'Code' },
      { name: 'HTML5 & CSS3', level: 'Avanzado', iconName: 'Layout' },
      { name: 'Framer Motion', level: 'Intermedio', iconName: 'Sparkles' },
    ]
  },
  {
    title: 'Backend & APIs',
    description: 'Diseño de servidores, arquitecturas limpias y servicios web seguros y eficientes.',
    skills: [
      { name: 'Node.js', level: 'Intermedio / Avanzado', iconName: 'Server' },
      { name: 'Express / NestJS', level: 'Intermedio', iconName: 'Layers' },
      { name: 'RESTful APIs', level: 'Avanzado', iconName: 'Network' },
      { name: 'C# / .NET', level: 'Intermedio', iconName: 'Cpu' },
    ]
  },
  {
    title: 'Bases de Datos & Caché',
    description: 'Modelado relacional, persistencia eficiente y estrategias de optimización de datos.',
    skills: [
      { name: 'PostgreSQL', level: 'Intermedio / Avanzado', iconName: 'Database' },
      { name: 'SQL Server', level: 'Intermedio', iconName: 'HardDrive' },
      { name: 'Redis', level: 'Intermedio', iconName: 'Zap' },
      { name: 'Supabase / Firebase', level: 'Intermedio', iconName: 'Cloud' },
    ]
  },
  {
    title: 'Herramientas & Flujo de Trabajo',
    description: 'Buenas prácticas de desarrollo, control de versiones y entornos de despliegue continuo.',
    skills: [
      { name: 'Git & GitHub', level: 'Avanzado', iconName: 'GitBranch' },
      { name: 'Docker', level: 'Intermedio', iconName: 'Box' },
      { name: 'Vite & Tooling', level: 'Avanzado', iconName: 'Wrench' },
      { name: 'Postman', level: 'Avanzado', iconName: 'Send' },
    ]
  }
];

