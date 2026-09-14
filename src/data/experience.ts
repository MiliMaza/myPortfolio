import { TimelineItem, EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'Computer Science',
    institution: 'Universidad Siglo 21',
    status: 'Bachelor Degree',
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
    degree: 'Systems Analyst',
    institution: 'Universidad Siglo 21',
    status: 'Associate Degree',
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
    id: 'exp-athletics',
    period: '2021 - Present',
    title: 'Professional Basketball Athlete',
    roleOrField: 'Competitive Sports',
    organization: 'National & International Leagues',
    location: 'Argentina / Spain / Portugal / Italy',
    type: 'athletics',
    highlights: [
      'Competed at the highest national level as a Point Guard, managing game pace and orchestrating offensive execution in real time.',
      'Balanced rigorous daily double-shift physical conditioning with studies.',
      'Cultivated composure under intense pressure.',
      'Developed instincts for team communication, accountability, and collaboration.'
    ],
    takeaways: 'Athletic discipline provides an advantage in programming with rapid error recovery and no fear of high-stakes delivery.'
  },
  {
    id: 'exp-cs-analyst',
    period: '2021 — 2026',
    title: 'Computer Science & Systems Analysis',
    roleOrField: 'Academic Studies',
    organization: 'Universidad Siglo 21',
    location: 'Argentina (Online)',
    type: 'education',
    highlights: [
      'Studied 3 years and obtained an Associate Degree in Systems Analysis',
      'Continue with +2 more years to earned a Bachelor Degree in Computer Science',
      'Worked on my Tesis with LLMs, automation and workflow building, and finished with a 9.60 GPA'
    ],
    takeaways: 'Built a deep theoretical foundation on algorithms, data structures, operating systems, databases, and software engineering.'
  },
  {
    id: 'exp-fullstack',
    period: '2025 — Present',
    title: 'Full-Stack Software Developer & AI Systems Builder',
    roleOrField: 'Software Engineering',
    organization: 'Internship & Personal Projects',
    location: 'Remote',
    type: 'engineering',
    highlights: [
      'Worked as an intern at SKRB (Córdoba, Argentina) in a SCRUM team where I contributed to the development of some internal projects',
      'Builded ASKA FLOW, a conversational engine translating user prompts into executable n8n automation workflows',
      'Developed other full-stack solutions integrating React, Next.js, various databases, LLMs and other tools',
      'Used to work in a collaborative environment using Agile methodologies such as SCRUM'
    ],
    takeaways: 'Ability to think and provide solutions to complex problems with clean, maintainable and user-first interfaces'
  }
];

export const dualPerspectivePrinciples = [
  {
    athleticPrinciple: 'Court Vision & Awareness',
    engineeringTranslation: 'System Architecture & Topology',
    description: 'A point guard sees the entire floor two passes ahead. In software, this translates into anticipating bottlenecks, decoupling components cleanly, and designing predictable data flows.'
  },
  {
    athleticPrinciple: 'The 24-Second Shot Clock',
    engineeringTranslation: 'Rapid Execution & Composure',
    description: 'When the game is on the line with seconds remaining, panic is fatal. High-pressure sports taught me how to triage, communicate clearly, and execute precisely during critical production moments.'
  },
  {
    athleticPrinciple: 'Daily Learning & Incremental Gains',
    engineeringTranslation: 'Code Reviews, Profiling & Refactoring',
    description: 'Video review of yesterday’s mistakes is an standard practice for elite athletes. I approach software the same way: measuring performance metrics, welcoming code critiques, and refining iteratively.'
  }
];
