export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: 'Production' | 'Active Development' | 'Evolving' | 'Live Concept' | 'Complete';
  featured: boolean;
  accentColor: string;
  secondaryColor?: string;
  technologies: string[];
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: {
    title: string;
    description: string;
  }[];
  technicalDecisions: {
    title: string;
    reason: string;
  }[];
  challenges: string[];
  learnings: string[];
  links: {
    github?: string;
    live?: string;
    demoNote?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    projects: string[]; // slugs of projects where used
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  roleOrField: string;
  organization: string;
  location?: string;
  type: 'engineering' | 'athletics' | 'education';
  highlights: string[];
  takeaways?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  focus: string;
  skillsAcquired: string[];
}
