export type ProjectCategory = 'todos' | 'frontend' | 'fullstack' | 'mobile' | 'tools';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: Exclude<ProjectCategory, 'todos'>;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights?: string[];
  date?: string;
}

export interface SkillItem {
  name: string;
  level: string; // ej: "Avanzado", "Intermedio", "En aprendizaje"
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

