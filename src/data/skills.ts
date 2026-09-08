import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    description: 'Constructing resilient, high-speed, accessible user interfaces with deep attention to layout, typography, and motion.',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', highlight: true, projects: ['aska-flow', 'the-archive', 'med-vault', 'mili-dev'] },
      { name: 'React', highlight: true, projects: ['aska-flow', 'the-archive', 'med-vault', 'mili-dev'] },
      { name: 'Next.js', highlight: true, projects: ['aska-flow'] },
      { name: 'JavaScript (ESNext)', highlight: false, projects: ['the-archive', 'med-vault'] },
      { name: 'Tailwind CSS', highlight: true, projects: ['aska-flow', 'the-archive', 'med-vault', 'mili-dev'] },
      { name: 'HTML5 & Semantic Web', highlight: false, projects: ['the-archive', 'med-vault'] },
      { name: 'Modern CSS & Variables', highlight: false, projects: ['mili-dev'] },
      { name: 'Motion / Micro-interactions', highlight: false, projects: ['the-archive', 'mili-dev'] }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Designing deterministic server architectures, structured REST APIs, webhook pipelines, and robust authentication mechanisms.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', highlight: true, projects: ['med-vault', 'aska-flow'] },
      { name: 'REST APIs', highlight: true, projects: ['aska-flow', 'med-vault'] },
      { name: 'Authentication & RBAC', highlight: true, projects: ['med-vault', 'aska-flow'] },
      { name: 'Webhooks & Event Handlers', highlight: false, projects: ['aska-flow'] },
      { name: 'Server Actions', highlight: false, projects: ['aska-flow'] },
      { name: 'Express', highlight: false, projects: ['med-vault'] }
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI, LLMs & Automation',
    description: 'Engineering agentic workflows, prompt architectures, structured outputs, and enterprise automation pipelines.',
    iconName: 'Cpu',
    skills: [
      { name: 'Vercel AI SDK', highlight: true, projects: ['aska-flow'] },
      { name: 'n8n Workflows', highlight: true, projects: ['aska-flow'] },
      { name: 'Prompt Engineering', highlight: true, projects: ['aska-flow'] },
      { name: 'OpenAI API', highlight: false, projects: ['aska-flow'] },
      { name: 'Google Gemini', highlight: false, projects: ['aska-flow'] },
      { name: 'Claude (Anthropic)', highlight: false, projects: ['aska-flow'] },
      { name: 'Structured Schema Outputs', highlight: false, projects: ['aska-flow'] }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Persistence',
    description: 'Modeling relational schemas, ensuring row-level data security, and deploying resilient edge data storage.',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', highlight: true, projects: ['med-vault', 'the-archive'] },
      { name: 'Supabase', highlight: true, projects: ['aska-flow'] },
      { name: 'Turso (libSQL)', highlight: true, projects: ['the-archive'] },
      { name: 'SQL Schema Design', highlight: false, projects: ['med-vault', 'the-archive'] },
      { name: 'Row-Level Security (RLS)', highlight: false, projects: ['med-vault', 'aska-flow'] }
    ]
  },
  {
    id: 'tools-systems',
    name: 'Systems & Tooling',
    description: 'Version control, software analysis methodologies, high-performance tactical discipline, and product delivery.',
    iconName: 'Terminal',
    skills: [
      { name: 'Git', highlight: false, projects: ['aska-flow', 'the-archive', 'med-vault', 'mili-dev'] },
      { name: 'GitHub & CI/CD', highlight: false, projects: ['aska-flow', 'the-archive', 'med-vault', 'mili-dev'] },
      { name: 'Systems Analysis (Analista)', highlight: true, projects: ['aska-flow', 'med-vault'] },
      { name: 'Performance Optimization', highlight: false, projects: ['the-archive', 'mili-dev'] },
      { name: 'Accessibility (WCAG AA)', highlight: false, projects: ['med-vault', 'mili-dev'] }
    ]
  }
];
