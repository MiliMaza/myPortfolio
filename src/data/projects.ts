import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'aska-flow',
    slug: 'aska-flow',
    title: 'ASKA FLOW',
    tagline: 'Natural-language AI platform for designing, compiling, and deploying n8n automation workflows.',
    category: 'AI / LLM & Automation',
    year: '2024 — Present',
    status: 'Active Development',
    featured: true,
    accentColor: '#d4ff3a', // Kinetic Signal Lime
    secondaryColor: '#10b981',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Vercel AI SDK',
      'OpenAI / Gemini',
      'n8n Webhooks',
      'REST APIs',
      'Tailwind CSS',
      'Prompt Engineering',
      'Supabase'
    ],
    summary: 'ASKA FLOW bridges high-level human operational intent with robust automated execution. Instead of manually linking dozens of API nodes in n8n, users prompt in natural language to synthesize, validate, and launch live event-driven workflows.',
    problem: 'Building enterprise or personal automation workflows in n8n requires deep knowledge of JSON payloads, webhook structures, and conditional branching logic. For non-technical operators or fast-moving founders, the learning curve slows down pipeline creation.',
    solution: 'Engineered a specialized conversational compiler that converts operational descriptions into validated n8n node DAG (directed acyclic graph) schemas, automatically configuring credentials, error fallbacks, and webhook endpoints with one-click deployment.',
    architecture: [
      'Frontend interactive DAG visualizer built with React and custom canvas node connectors.',
      'Server-side LLM orchestration utilizing Vercel AI SDK with strictly enforced Zod schema outputs.',
      'Direct synchronization with n8n instance via REST API and webhook lifecycle managers.',
      'Supabase database for user workspace state, workflow templates, and run logs.'
    ],
    features: [
      {
        title: 'Intent-to-Workflow Synthesis',
        description: 'Translates conversational prompts like "When a Stripe refund occurs, alert Slack and flag in Postgres" into valid n8n node topologies.'
      },
      {
        title: 'Live Node Canvas & Inspector',
        description: 'Interactive visual graph preview allowing manual tweaking of triggers, filters, and HTTP payload mappers.'
      },
      {
        title: 'Schema Validation & Self-Correction',
        description: 'Automated linter runs against n8n node specification to ensure parameter completeness before execution.'
      },
      {
        title: 'One-Click Webhook Provisioning',
        description: 'Deploys workflows directly to self-hosted or cloud n8n instances with live health check listeners.'
      }
    ],
    technicalDecisions: [
      {
        title: 'Structured Output via Zod Schema vs Raw Prompting',
        reason: 'Raw LLM output introduces syntax anomalies in n8n JSON configs. Enforcing strict Zod structured outputs eliminated 99% of invalid connection schemas.'
      },
      {
        title: 'Decoupled Visual Canvas from Execution Engine',
        reason: 'Allowed rapid iterative prototyping on the UI canvas without hammering the backend n8n instance on every parameter change.'
      }
    ],
    challenges: [
      'Handling nested cyclic dependencies in complex automation logic without crashing the workflow generator.',
      'Mapping heterogeneous API authentication requirements into uniform n8n credential blocks safely.'
    ],
    learnings: [
      'Prompt engineering is fundamentally a systems specification problem, requiring rigorous edge-case guarding.',
      'Developer velocity jumps dramatically when visual tooling provides immediate runtime feedback on generated schemas.'
    ],
    links: {
      github: 'https://github.com/milimaza/aska-flow',
      live: 'https://aska-flow.mili.dev',
      demoNote: 'Live preview available with sample sandbox workflows.'
    },
    metrics: [
      { label: 'Workflow Gen Time', value: '< 2.4s' },
      { label: 'Supported Nodes', value: '45+' },
      { label: 'Schema Accuracy', value: '98.5%' }
    ]
  },
  {
    id: 'the-archive',
    slug: 'the-archive',
    title: 'THE ARCHIVE',
    tagline: 'Interactive spatial timeline & visual data analytics celebrating a professional basketball journey.',
    category: 'Data Visualization & Interactive Storytelling',
    year: '2024',
    status: 'Production',
    featured: true,
    accentColor: '#ff6036', // Court Electric Orange
    secondaryColor: '#f59e0b',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'D3.js / SVG Canvas',
      'Motion',
      'PostgreSQL',
      'Turso'
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
      github: 'https://github.com/milimaza/the-archive',
      live: 'https://archive.mili.dev',
      demoNote: 'Explore the full interactive career dataset and shot matrix.'
    },
    metrics: [
      { label: 'Matches Logged', value: '180+' },
      { label: 'Tactical Sets Analyzed', value: '40+' },
      { label: 'Render Latency', value: '60 FPS' }
    ]
  },
  {
    id: 'med-vault',
    slug: 'med-vault',
    title: 'MED VAULT',
    tagline: 'Privacy-first medical web application for clinical record organization, patient telemetry, and access auditing.',
    category: 'Full-Stack Web & Healthcare UX',
    year: '2023 — 2024',
    status: 'Complete',
    featured: true,
    accentColor: '#38bdf8', // Cyber Cyan
    secondaryColor: '#6366f1',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'REST APIs',
      'Tailwind CSS',
      'RBAC Auth',
      'Client-Side Encryption'
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
      github: 'https://github.com/milimaza/med-vault',
      live: 'https://medvault.mili.dev',
      demoNote: 'Interactive sandbox loaded with anonymized synthetic clinical records.'
    },
    metrics: [
      { label: 'Role Latency', value: '< 15ms' },
      { label: 'WCAG Compliance', value: 'AA / AAA' },
      { label: 'Security Model', value: 'RBAC + RLS' }
    ]
  },
  {
    id: 'mili-dev',
    slug: 'mili-dev',
    title: 'MILI.DEV (PLAYGROUND)',
    tagline: 'The portfolio as a living digital experiment: kinetic physics, custom typography, and high-signal recruiter HUD.',
    category: 'Creative Frontend & Design System',
    year: '2025',
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
    solution: 'Designed an art-directed, dark-first interactive experience with a bespoke geometric visual identity, kinetic node graph, instant Recruiter Brief drawer, and filterable interactive skill matrix.',
    architecture: [
      'Modern React 19 architecture with fine-grained modular components and zero unnecessary backend overhead.',
      'Custom dynamic canvas physics engine reacting to cursor trajectory and velocity.',
      'Deep URL state synchronization supporting direct linking to project case studies.',
      'Sub-100kb initial script footprint with optimized zero-CLS typography loading.'
    ],
    features: [
      {
        title: 'Recruiter Fast-Track HUD',
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
      'The best portfolio is not a list of past work—it is proof of craftsmanship in the present moment.'
    ],
    links: {
      github: 'https://github.com/milimaza/mili-dev',
      live: 'https://mili.dev'
    }
  }
];
