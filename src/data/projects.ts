import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'aska-flow',
    slug: 'aska-flow',
    title: 'ASKA FLOW',
    tagline: 'Natural-language AI platform that generates n8n automation workflows from user instructions.',
    category: 'AI / LLM & Automation',
    year: '2025 — 2026',
    status: 'Complete',
    featured: true,
    accentColor: '#d4ff3a',
    secondaryColor: '#10b981',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vercel AI SDK',
      'Prompt Engineering',
      'OpenAI',
      'n8n',
      'REST APIs',
      'Turso',
      'Clerk'
    ],
    summary: 'ASKA FLOW bridges high-level human operational intent with robust automated execution. Instead of manually linking dozens of API nodes in n8n, users prompt in natural language to synthesize, validate, and launch live event-driven workflows.',
    problem: 'Building automation workflows in n8n requires deep technical knowledge and algorithmic thinking. For non-technical operators or fast-moving founders, the learning curve slows down pipeline creation.',
    solution: 'Developed a specialized conversational chat that converts users descriptions into validated n8n schemas, configuring credentials, error fallbacks, and webhook endpoints with one-click deployment.',
    architecture: [
      'Frontend easy-interactive chat interface.',
      'Server-side LLM orchestration.',
      'Validation-first before showing the response to the user.',
      'Direct synchronization with n8n user instance.',
      'Database persistency for iterative prompts and workflow improvements.'
    ],
    features: [
      {
        title: 'Natural Language Processing (NLP)',
        description: 'Translates conversational prompts like "When a Stripe refund occurs, alert me through Slack" into valid n8n node topologies.'
      },
      {
        title: 'Schema & Security Validation',
        description: 'Own validation system before showing the response to the user, ensuring that the workflow is valid and secure.'
      },
      {
        title: 'One-Click Deployment',
        description: 'Execute workflows directly to self-hosted n8n instances without the user leaving the website.'
      },
      {
        title: 'Persistency and Iterative Improvement',
        description: 'Allows users to iterate on previous generated workflows, improving them and achieving better results over time.'
      }
    ],
    technicalDecisions: [
      {
        title: 'Structured Output via Zod Schema vs Raw Prompting',
        reason: 'Raw LLM output introduces syntax anomalies in n8n JSON configs. Enforcing strict Zod structured outputs eliminated most of invalid connection schemas.'
      },
      {
        title: 'Non-Stream vs Streaming Responses',
        reason: 'Even though streaming responses are better for UX, the configuration schema is complex and requires waiting for the complete and validated response to ensure system stability.'
      }
    ],
    challenges: [
      'Obtaining consistent quality outputs from the LLM and guiding it to generate valid and secure n8n JSON schemas.',
      'Connecting and syncing directly to user n8n instance using the n8n API REST and avoiding user authentication issues.'
    ],
    learnings: [
      'Prompt engineering is fundamentally a systems specification problem, requiring rigorous edge-case guarding.',
      'AI systems are vulnerable to prompt injection attacks, which requires robust validation and sanitization of user inputs.'
    ],
    links: {
      github: 'https://github.com/milimaza/aska_flow',
      live: 'https://aska-flow.vercel.app',
      demoNote: 'Ask for your first workflow :D'
    },
    metrics: [
      { label: 'Workflow Gen Time', value: '< 1 min' },
      { label: 'Supported Nodes', value: '45+' },
      { label: 'Cost of MVP', value: 'Free' }
    ]
  },
  {
    id: 'the-archive',
    slug: 'the-archive',
    title: 'THE ARCHIVE',
    tagline: 'Interactive timeline & visual data analytics for your professional basketball journey.',
    category: 'Fullstack & Data Management',
    year: '2026',
    status: 'Complete',
    featured: true,
    accentColor: '#ff6036',
    secondaryColor: '#f59e0b',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase'
    ],
    summary: 'A bespoke digital exhibition combining years of professional basketball competition with modern frontend engineering. Features an interactive court heatmap, shot charts, career milestones, and match-by-match tactical analytics.',
    problem: 'Traditional sports portfolios are static, image-heavy, and lack depth. They fail to convey the analytical intelligence, spatial awareness, and strategic discipline that elite athletes bring to software engineering teams.',
    solution: 'Designed and built a spatial data exploration experience. Users can scrub through season timelines, filter games by opponent and clutch performance, and interact with a vector-rendered basketball court to examine offensive distribution.',
    architecture: [
      'Custom SVG tactical basketball court engine with dynamic coordinate projection and shot cluster filtering.',
      'Normalized relational schema hosted on Turso (libSQL) storing match statistics, tactical roles, and season chronologies.',
      'Physics-assisted timeline scroller built with Motion for smooth narrative transitions across multi-year milestones.',
      'Responsive data tables with custom sorting, clutch-time filters, and instant metric aggregations.'
    ],
    features: [
      {
        title: 'Interactive Vector Half-Court Heatmap',
        description: 'Visualizes shooting percentages, play distribution, and floor spacing based on spatial coordinate datasets.'
      },
      {
        title: 'Season Chronology Scrubber',
        description: 'Smooth timeline scrubbing through team campaigns, championships, and crunch-time performances.'
      },
      {
        title: 'Tactical Mindset Annotations',
        description: 'Side-by-side technical commentary showing how point-guard decision-making parallels software system design.'
      }
    ],
    technicalDecisions: [
      {
        title: 'Custom SVG Projections over Canvas',
        reason: 'SVG preserves sharp vector fidelity on Retina displays and enables crisp DOM accessibility inspectability for individual shot nodes.'
      },
      {
        title: 'Edge Database Deployment with Turso',
        reason: 'Ensures sub-50ms data retrieval globally for all career records without running a bloated backend server.'
      }
    ],
    challenges: [
      'Standardizing multi-season statistical archives from disparate tournament scorebooks into a cohesive relational schema.',
      'Crafting court interactions that remain intuitive on mobile touchscreens without frustrating horizontal scroll traps.'
    ],
    learnings: [
      'Visual storytelling becomes unforgettable when quantitative performance metrics are coupled with personal narrative context.',
      'The tactile feel of responsive data visualizations directly impacts user dwell time.'
    ],
    links: {
      github: 'https://github.com/milimaza/theArchive',
      live: 'https://the-archive-mm.vercel.app/',
      demoNote: 'Connect your own database to see your custom analytics'
    },
    metrics: [
      { label: 'Matches Logged', value: '180+' },
      { label: 'Modes', value: 'Light/Dark' },
      { label: 'Cost', value: 'Free' }
    ]
  },
  {
    id: 'health-vault',
    slug: 'health-vault',
    title: 'HEALTH VAULT',
    tagline: 'Medical web application for clinical record organization, health tracking, and file management.',
    category: 'Fullstack & Healthcare',
    year: '2026',
    status: 'Complete',
    featured: true,
    accentColor: '#38bdf8',
    secondaryColor: '#6366f1',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Supabase'
    ],
    summary: 'A resilient clinical data management platform built to simplify high-stakes patient tracking. Delivers granular role-based access control, cryptographic field masking, and an ergonomic interface crafted for fast clinical workflows under stress.',
    problem: 'Healthcare software is notorious for clunky UI, overwhelming cognitive load, and risky security models that frustrate practitioners and slow down urgent patient triage.',
    solution: 'Engineered an accessible clinical dashboard featuring rapid keyboard search, immutable audit trails, and zero-confusion patient overview cards that display vital trends at a single glance.',
    architecture: [
      'PostgreSQL database with strict row-level security policies separating administrative, doctor, and patient roles.',
      'Express REST API layer implementing token-based authentication and rate-limited audit logging.',
      'Optimistic client updates for vital log entries with offline resilience and local validation.',
      'Strict accessibility compliance (WCAG AA) with high-contrast clinical visual presets.'
    ],
    features: [
      {
        title: 'Role-Based Clinical Vault',
        description: 'Hierarchical permission gates ensuring sensitive diagnostic records are only decrypted for authorized personnel.'
      },
      {
        title: 'Real-Time Vital Stream & Alerts',
        description: 'Visual threshold indicators flagging abnormal vitals (blood pressure, SpO2, heart rate) with color-safe warnings.'
      },
      {
        title: 'Cryptographic Audit History',
        description: 'Tamper-evident activity logs detailing who accessed, viewed, or edited any clinical record.'
      }
    ],
    technicalDecisions: [
      {
        title: 'Strict Row-Level Security in Postgres',
        reason: 'Enforced data privacy rules directly at the persistence layer rather than trusting application code alone.'
      },
      {
        title: 'Keyboard-First Navigation (Vim/Command Style)',
        reason: 'Practitioners save critical seconds when navigating between charts using keyboard shortcuts rather than clicking nested menus.'
      }
    ],
    challenges: [
      'Balancing strict zero-knowledge encryption requirements with the ability to perform fast multi-patient text searches.',
      'Designing complex multi-parameter clinical tables that remain legible on tablet viewports.'
    ],
    learnings: [
      'In high-stakes software, UX simplicity is not a cosmetic luxury—it directly prevents human operational errors.',
      'Security architectures must be designed with developer ergonomics in mind to prevent accidental security bypasses.'
    ],
    links: {
      github: 'https://github.com/milimaza/health-vault',
      live: 'https://health-vault.vercel.app',
      demoNote: 'Register and try it out!'
    },
    metrics: [
      { label: 'Response Time', value: '< 200ms' },
      { label: 'Supported', value: '+6 File Types' },
      { label: 'Privacy', value: 'Very high' }
    ]
  },
  {
    id: 'mili-dev',
    slug: 'mili-dev',
    title: 'MILI.DEV',
    tagline: 'The portfolio as a digital living experience: kinetic physics, custom typography, and high-level data visualization.',
    category: 'Creative Frontend',
    year: '2026',
    status: 'Live Concept',
    featured: false,
    accentColor: '#e0e7ff',
    secondaryColor: '#d4ff3a',
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Motion',
      'HTML Canvas',
      'Web Audio API'
    ],
    summary: 'A deliberate rejection of generic portfolio templates. Built as an interactive digital playground that merges athletic precision with creative web engineering, featuring keyboard navigation, recruiter fast-paths, and custom micro-interactions.',
    problem: 'Standard developer portfolios look like identical cloned templates with generic card grids, glowing purple blobs, and zero personality.',
    solution: 'Designed an art-directed, dark-first interactive experience with a geometric visual identity, kinetic node graph, instant Recruiter Brief drawer, and filterable interactive skill matrix.',
    architecture: [
      'Modern React 19 architecture with fine-grained modular components and zero unnecessary backend overhead.',
      'Custom dynamic canvas physics engine reacting to cursor trajectory and velocity.',
      'Deep URL state synchronization supporting direct linking to project case studies.',
    ],
    features: [
      {
        title: 'Recruiter Fast-Track',
        description: 'Single-click high-signal summary answering the 7 core hiring questions in under 30 seconds.'
      },
      {
        title: 'Interactive Skill-to-Project Matrix',
        description: 'Clicking any technology highlights exactly which production projects utilized it in real code.'
      },
      {
        title: 'Sound & Kinetic Motion Controls',
        description: 'Optional subtle auditory and motion feedback designed to make exploration feel tangible.'
      }
    ],
    technicalDecisions: [
      {
        title: 'Native Canvas Physics over Bloated 3D Libraries',
        reason: 'Delivers 60 FPS fluidity with under 5KB of code, avoiding 500KB+ Three.js bundle penalties.'
      }
    ],
    challenges: [
      'Maintaining 100% WCAG accessibility and keyboard usability while pushing creative interaction boundaries.'
    ],
    learnings: [
      'The best portfolio is not a list of past work, it is a reflection of your current abilities as a developer.'
    ],
    links: {
      github: 'https://github.com/milimaza/myPortfolio',
      live: 'https://mili-dev.vercel.app',
      demoNote: 'You are currently experiencing it!'
    }
  }
];
