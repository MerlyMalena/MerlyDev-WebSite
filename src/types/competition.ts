export interface TeamMember {
  name: string;
  role?: string;
}

export interface Competition {
  id: string;
  title: string;
  organizer: string;
  teamName?: string;
  teamSize?: number;
  teamMembers?: (string | TeamMember)[];
  category: string;
  award?: string;
  date: string;
  location?: string;
  shortDescription: string;
  fullDescription: string;
  projectBuilt?: string;
  projectSummary?: string;
  tags: string[];
  image: string;
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

