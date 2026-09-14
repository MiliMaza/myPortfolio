import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Building resilient, high-speed, accessible user interfaces with deep attention to layout, performance, and security.',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', highlight: true, projects: ['aska-flow', 'the-archive', 'health-vault', 'mili-dev'] },
      { name: 'React', highlight: true, projects: ['aska-flow', 'the-archive', 'health-vault', 'mili-dev'] },
      { name: 'Next.js', highlight: true, projects: ['aska-flow'] },
      { name: 'Vite', highlight: true, projects: ['mili-dev', 'the-archive', 'health-vault'] },
      { name: 'CSS', highlight: true, projects: ['aska-flow', 'the-archive', 'health-vault', 'mili-dev'] },
      { name: 'HTML', highlight: true, projects: ['aska-flow', 'the-archive', 'the-archive', 'health-vault'] },
      { name: 'JavaScript', highlight: false, projects: [] },
      { name: 'Python', highlight: false, projects: [] }
    ]
  },
  {
    id: 'backend',
    name: 'Backend / APIs',
    description: 'Designing deterministic server architectures, structured REST APIs, webhook pipelines, and robust authentication mechanisms.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', highlight: true, projects: ['health-vault', 'aska-flow', 'the-archive', 'mili-dev'] },
      { name: 'REST APIs', highlight: true, projects: ['aska-flow', 'health-vault'] },
      { name: 'Clerk Auth', highlight: true, projects: ['health-vault', 'aska-flow'] },
      { name: 'Webhooks & Event Handlers', highlight: false, projects: [] },
      { name: 'Server Actions', highlight: false, projects: [] },
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI / Automation',
    description: 'Engineering agentic workflows, prompt architectures, structured outputs, and automation pipelines.',
    iconName: 'Cpu',
    skills: [
      { name: 'Vercel AI SDK', highlight: true, projects: ['aska-flow'] },
      { name: 'n8n Workflows', highlight: true, projects: ['aska-flow'] },
      { name: 'Prompt Engineering', highlight: true, projects: ['aska-flow'] },
      { name: 'LLMs APIs', highlight: true, projects: ['aska-flow'] },
      { name: 'Structured Schema Outputs', highlight: true, projects: ['aska-flow'] }
    ]
  },
  {
    id: 'databases',
    name: 'Databases',
    description: 'Modeling relational schemas, ensuring row-level data security, and deploying resilient edge data storage.',
    iconName: 'Database',
    skills: [
      { name: 'Supabase', highlight: true, projects: ['health-vault', 'the-archive'] },
      { name: 'Turso (libSQL)', highlight: true, projects: ['aska-flow'] },
      { name: 'PostgreSQL', highlight: false, projects: [] }
    ]
  },
  {
    id: 'tools-systems',
    name: 'Systems / Tooling',
    description: 'Version control, software methodologies, high-performance tactical discipline, and product delivery.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', highlight: true, projects: ['aska-flow', 'the-archive', 'health-vault', 'mili-dev'] },
      { name: 'GitHub', highlight: true, projects: ['aska-flow', 'the-archive', 'health-vault', 'mili-dev'] },
      { name: 'Antigravity', highlight: true, projects: ['the-archive', 'health-vault'] },
      { name: 'GitHub Copilot', highlight: true, projects: ['aska-flow'] },
      { name: 'Scrum Methodology', highlight: false, projects: [] },
      { name: 'Windsurf', highlight: false, projects: [] },
      { name: 'Cursor', highlight: false, projects: [] },
    ]
  }
];
