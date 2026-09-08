import { TimelineItem, EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'Licenciada en Informática',
    institution: 'Universidad Siglo 21',
    status: 'Degree Conferred',
    focus: 'Advanced Software Engineering, Distributed Systems, Data Structures & Algorithm Design, Database Architectures, Information Security.',
    skillsAcquired: [
      'Relational Database Modeling',
      'Object-Oriented & Functional Paradigms',
      'System Architecture',
      'Operating Systems & Networks',
      'Formal Verification & Security'
    ]
  },
  {
    degree: 'Analista de Sistemas',
    institution: 'Universidad Siglo 21',
    status: 'Intermediate Degree Conferred',
    focus: 'Requirements Engineering, Systems Analysis, Workflow Modeling, Business Process Automation, Software Quality Assurance.',
    skillsAcquired: [
      'Business Process Flowcharting',
      'Data Flow Diagrams (DFD)',
      'Entity-Relationship Modeling',
      'User Requirements Specification'
    ]
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: 'exp-fullstack',
    period: '2023 — Present',
    title: 'Full-Stack Software Developer & AI Systems Builder',
    roleOrField: 'Software Engineering',
    organization: 'Independent & Project Work',
    location: 'Remote',
    type: 'engineering',
    highlights: [
      'Architected ASKA FLOW, a conversational engine translating user prompts into executable n8n automation DAGs, cutting workflow drafting time by 75%.',
      'Engineered Med Vault, a HIPAA/PHI-conscious clinical records application utilizing PostgreSQL row-level security and strict cryptographic role boundaries.',
      'Constructed custom full-stack solutions integrating React, Next.js, Supabase, Turso (libSQL), and the Vercel AI SDK.',
      'Active focus on high-reliability automation, prompt engineering workflows, and high-performance frontend interfaces.'
    ],
    takeaways: 'Direct translation of complex operational logic into clean, declarative code and user-first interfaces.'
  },
  {
    id: 'exp-athletics',
    period: 'Multi-Year Career',
    title: 'Professional Basketball Athlete (Point Guard / Playmaker)',
    roleOrField: 'Professional Competition',
    organization: 'National & Regional Leagues',
    location: 'Argentina / International',
    type: 'athletics',
    highlights: [
      'Competed at the highest national level as a tactical floor general (Point Guard), managing game pace, reading opponent defensive schemes, and orchestrating offensive execution in real time.',
      'Balanced rigorous daily double-shift physical conditioning and international travel with intensive computer science coursework and software development.',
      'Cultivated elite composure under intense pressure (24-second shot clocks, hostile away environments, clutch final possessions).',
      'Developed deep instincts for non-verbal team communication, constructive accountability, and selfless collaboration.'
    ],
    takeaways: 'Athletic discipline provided an unfair advantage in engineering: absolute grit, rapid error recovery, high stamina for complex problem solving, and zero fear of high-stakes delivery.'
  },
  {
    id: 'exp-cs-analyst',
    period: 'Academic Foundation',
    title: 'Computer Science & Systems Analysis Specialist',
    roleOrField: 'Academic & Applied R&D',
    organization: 'Universidad Siglo 21',
    location: 'Argentina',
    type: 'education',
    highlights: [
      'Earned dual technical credentials: Licenciada en Informática and Analista de Sistemas.',
      'Researched optimization of relational database access patterns and software testing methodologies.',
      'Designed end-to-end information system blueprints for real-world enterprise use cases.'
    ],
    takeaways: 'Built a deep theoretical foundation that prevents common software traps and enables rapid adoption of cutting-edge technologies.'
  }
];

export const dualPerspectivePrinciples = [
  {
    athleticPrinciple: 'Court Vision & Spatial Awareness',
    engineeringTranslation: 'Macro Architecture & System Topology',
    description: 'A point guard sees the entire floor two passes ahead. In software, this translates into anticipating bottlenecks, decoupling components cleanly, and designing predictable data flows.'
  },
  {
    athleticPrinciple: 'The 24-Second Shot Clock',
    engineeringTranslation: 'Rapid Execution & High-Stakes Composure',
    description: 'When the game is on the line with seconds remaining, panic is fatal. High-pressure sports taught me how to triage, communicate clearly, and execute precisely during critical production moments.'
  },
  {
    athleticPrinciple: 'Daily Film Study & Incremental Gains',
    engineeringTranslation: 'Code Reviews, Profiling & Refactoring',
    description: 'Unforgiving video review of yesterday’s mistakes is standard practice for elite athletes. I approach software the same way: measuring performance metrics, welcoming code critiques, and refining iteratively.'
  }
];
