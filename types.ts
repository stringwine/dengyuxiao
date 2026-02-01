
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  videoUrl?: string;
  image?: string;
  link?: string;
  type: 'Game' | 'Animation' | 'AIGC';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  tools: string[];
}
