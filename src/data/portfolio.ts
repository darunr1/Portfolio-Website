import type {
  AdditionalProject,
  CapabilityRow,
  Contact,
  Credential,
  Education,
  Experience,
  NavigationItem,
  Profile,
  Project,
  SocialLink,
} from "@/types/portfolio";

export const profile = {
  name: "Darun Prasath Ramalingam",
  shortRole: "Computer Engineering @ UTD · Research Assistant @ Georgia Tech",
  headline: "Building reliable systems from physical models to production software.",
  summary:
    "I'm Darun Prasath Ramalingam, a Computer Engineering sophomore at UTD. My work spans semiconductor process modeling, embedded validation, robotics, digital verification, and full-stack engineering.",
  location: "Dallas–Fort Worth, Texas",
  opportunity:
    "Open to internships and co-ops in embedded systems, hardware validation, robotics, semiconductor engineering, and software systems.",
  github: "https://github.com/darunr1",
  linkedin:
    "https://www.linkedin.com/in/darun-prasath-ramalingam-1676b9289/",
  now: [
    {
      label: "Research",
      value:
        "Semiconductor Process Modeling Research Assistant, Georgia Institute of Technology",
    },
    {
      label: "Education",
      value:
        "B.S. Computer Engineering, University of Texas at Dallas, expected May 2029",
    },
    {
      label: "Focus",
      value:
        "Embedded validation · robotics · semiconductor modeling · software systems",
    },
  ],
} as const satisfies Profile;

export const navigation = [
  { number: "00", id: "index", label: "Index" },
  { number: "01", id: "experience", label: "Experience" },
  { number: "02", id: "systems", label: "Selected systems" },
  { number: "03", id: "capabilities", label: "Capability map" },
  { number: "04", id: "foundation", label: "Foundation" },
  { number: "05", id: "contact", label: "Contact" },
] satisfies readonly NavigationItem[];

export const sectionIntroductions = {
  systems:
    "Four system records selected for their boundaries, verification work, and inspectable engineering evidence.",
  experience:
    "A chronological ledger of research, physical-system integration, technical competition, and product engineering.",
  capabilities:
    "Skills organized by engineering domain and tied to the work that demonstrates them.",
  foundation:
    "Formal study and applied industry credentials supporting the work above.",
} as const;

export const interfaceCopy = {
  primaryCta: "Explore experience",
  githubCta: "GitHub profile",
  linkedinCta: "LinkedIn profile",
  statusYear: "2026",
} as const;

export const featuredProjects = [
  {
    slug: "stock-recommendation-engine",
    title: "Stock Recommendation Engine",
    productName: "EquityLens",
    category: "Full-stack research platform",
    problem:
      "Make equity research explainable by showing how deterministic factor scores, confidence, data warnings, and point-in-time evidence produce each ranking.",
    summary:
      "A full-stack research application with factor-based stock ranking, walk-forward backtests, watchlists, paper portfolios, authentication, operational jobs, and deployment-ready infrastructure.",
    evidence: [
      "Versioned momentum, trend, quality, value, and risk scoring with contributor explanations and SPY market context.",
      "Monthly walk-forward backtests with next-session execution, costs, slippage, benchmark, and drawdown series.",
      "Next.js web app, FastAPI services, PostgreSQL/Redis topology, Celery jobs, Alembic migrations, CI, smoke tests, and Vercel/Railway configuration.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Alembic",
      "Docker",
      "Pytest",
      "Vitest",
      "Playwright",
    ],
    status: "Built and deployment-configured; live demo not yet deployed",
    visibility: "public",
    repositoryUrl:
      "https://github.com/darunr1/Stock-Recommendation-Engine",
    disclaimer:
      "For education and research only. The application does not place real trades, and simulated performance is not a guarantee of future results.",
    visual: "screenshot",
    featured: true,
  },
  {
    slug: "autohil-validation-bench",
    title: "AutoHIL Validation Bench",
    category: "Embedded test and validation",
    problem:
      "Turn microcontroller behavior into repeatable pass/fail evidence instead of relying on manual bench checks.",
    summary:
      "A Python-controlled hardware-in-the-loop bench for an STM32 safety-controller model that exchanges JSON telemetry over USB serial, injects faults, measures latency, and writes test reports.",
    evidence: [
      "Portable C modules for sensor reads, state/fault management, telemetry formatting, command dispatch, and board abstraction.",
      "Python runner for PING, status, sensor, fault-injection, recovery, and latency checks with CSV/JSON reporting.",
      "NUCLEO-F401RE target adapter, wiring documentation, bring-up sequence, hardware tests, mock-serial tests, and GitHub Actions configuration.",
    ],
    technologies: [
      "C",
      "STM32 HAL",
      "NUCLEO-F401RE",
      "UART/USB Serial",
      "JSON telemetry",
      "Python",
      "PySerial",
      "Pytest",
      "GitHub Actions",
    ],
    status:
      "STM32-targeted MVP with portable firmware, mock-serial testing, and documented hardware bring-up",
    visibility: "public",
    repositoryUrl:
      "https://github.com/darunr1/Embedded-HIL-Validation-Bench",
    visual: "autohil-flow",
    featured: true,
  },
  {
    slug: "fpga-peripheral-verification-lab",
    title: "FPGA Peripheral Verification Lab",
    category: "Digital design verification",
    problem:
      "Verify a realistic peripheral at the register, protocol, timing, buffering, and error-handling levels—not just as isolated RTL blocks.",
    summary:
      "A memory-mapped UART peripheral composed of transmit, receive, FIFO, and top-level register modules, verified cycle-by-cycle with Python testbenches.",
    evidence: [
      "SystemVerilog implementations of UART TX, UART RX, synchronous FIFO, and MMIO top-level logic.",
      "Cocotb regression suites for framing, FIFO behavior, register transactions, and integrated peripheral behavior.",
      "Icarus Verilog simulation, VCD waveform workflow, register map, verification plan, and debugging documentation.",
    ],
    technologies: [
      "SystemVerilog",
      "Python",
      "cocotb",
      "Icarus Verilog",
      "GTKWave",
      "UART",
      "FIFO",
      "MMIO",
      "Make",
    ],
    status: "RTL implemented and verified in open-source simulation",
    visibility: "public",
    repositoryUrl:
      "https://github.com/darunr1/FPGA-Peripheral-Verification-Lab",
    visual: "fpga-flow",
    featured: true,
  },
  {
    slug: "embedded-telemetry-logger",
    title: "Embedded Telemetry Logger",
    category: "Firmware and telemetry systems",
    problem:
      "Make embedded state observable, parsable, and reviewable across firmware and host tooling.",
    summary:
      "A modular C/Python telemetry system that emits newline-delimited JSON packets, parses and logs them on a host, computes statistics, and generates human-readable reports.",
    evidence: [
      "C99 modules for ADC/I2C sensor interfaces, GPIO status, faults, time, commands, and telemetry packets.",
      "Python CLI for simulation, serial runs, device commands, CSV/JSONL logging, summaries, and report generation.",
      "Hardware-free simulator, sample logs, protocol/wiring/test documentation, and a host-side pytest suite.",
    ],
    technologies: [
      "C99",
      "STM32-oriented firmware",
      "UART",
      "JSONL",
      "Python",
      "PySerial",
      "pandas",
      "Matplotlib",
      "Pytest",
    ],
    status:
      "Host-simulated pipeline with STM32-oriented interfaces; hardware port remains documented work",
    visibility: "public",
    repositoryUrl:
      "https://github.com/darunr1/Embedded-Telemetry-Logger",
    visual: "telemetry-flow",
    featured: true,
  },
] as const satisfies readonly Project[];

export const additionalProjects = [
  {
    slug: "world-cup-analytics",
    title: "World Cup Analytics",
    summary:
      "Leakage-safe soccer prediction pipeline with pre-match Elo/form/market features, auditable outcome models, FastAPI/CLI interfaces, and chronological walk-forward evaluation.",
    status: "Repository is currently private",
    visibility: "private",
    repositoryUrl: null,
    visual: "text-index",
    featured: false,
  },
  {
    slug: "algorithmic-trading-backtester",
    title: "Algorithmic Trading Backtester",
    summary:
      "Modular research engine for strategies, execution friction, risk controls, portfolio accounting, walk-forward analysis, and performance reports.",
    status: "Repository is currently private",
    visibility: "private",
    repositoryUrl: null,
    visual: "text-index",
    featured: false,
  },
  {
    slug: "adaptive-pde-solver-for-option-pricing",
    title: "Adaptive PDE Solver for Option Pricing",
    summary:
      "Fixed-grid and adaptive numerical solvers benchmarked against Black–Scholes with tests and convergence analysis.",
    status: "Repository is currently private",
    visibility: "private",
    repositoryUrl: null,
    visual: "text-index",
    featured: false,
  },
  {
    slug: "ai-3d-model-generator",
    title: "AI 3D Model Generator",
    summary:
      "Next.js/TypeScript interface for prompt-driven model selection, interactive Three.js viewing, and GLB download.",
    status: "Repository is currently private",
    visibility: "private",
    repositoryUrl: null,
    visual: "text-index",
    featured: false,
  },
] as const satisfies readonly AdditionalProject[];

export const experiences = [
  {
    organization: "Georgia Institute of Technology",
    role: "Semiconductor Process Modeling Research Assistant",
    dates: "Aug 2026 – Present",
    engagement: "Part-time",
    workMode: "Remote",
    location: "Atlanta, Georgia",
    highlights: [
      "Built workflows that generate simulation datasets and evaluate ML surrogates for physics-based models.",
      "Analyzed process inputs, solver behavior, and modeling assumptions for semiconductor research.",
    ],
  },
  {
    organization: "FloLabsInnovationsGroup",
    role: "Robotics Engineering Intern",
    dates: "May 2026 – Aug 2026",
    engagement: "Internship",
    workMode: "Hybrid",
    location: "Austin, Texas",
    highlights: [
      "Integrated and tested humanoid robotics subsystems across sensors, actuators, controllers, circuitry, and mechanics.",
      "Diagnosed hardware/software issues through sensor, actuator, and real-time control validation.",
    ],
  },
  {
    organization: "Business Professionals of America",
    role: "Competitor (C++ Programming)",
    dates: "Aug 2023 – May 2025",
    engagement: "Seasonal",
    workMode: "On-site",
    location: "Frisco, Texas",
    highlights: [
      "Solved timed C++ challenges using control structures, functions, and data structures.",
      "Strengthened algorithmic thinking, debugging accuracy, and code efficiency under competition constraints.",
    ],
  },
  {
    organization: "Comet",
    role: "Software Engineering Intern",
    dates: "May 2023 – Aug 2023",
    engagement: "Internship",
    workMode: "Remote",
    location: "Santa Clara, California",
    highlights: [
      "Developed and tested Python features for a student-focused college application platform.",
      "Supported feature planning, UI testing, and debugging for student-productivity workflows.",
    ],
  },
] as const satisfies readonly Experience[];

export const capabilityRows = [
  {
    domain: "Semiconductor & research",
    skills: [
      "Semiconductor Engineering",
      "Process Modeling",
      "Research Skills",
    ],
    evidence: ["Georgia Tech research"],
  },
  {
    domain: "Embedded & physical systems",
    skills: [
      "Embedded Systems",
      "STM32/ESP32",
      "Control Systems",
      "Testing & Validation",
      "Computer-Aided Design (CAD)",
      "Systems Design",
    ],
    evidence: ["FloLabs", "AutoHIL", "Embedded Telemetry Logger"],
  },
  {
    domain: "Software & computation",
    skills: [
      "C",
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Full-Stack Development",
      "UI/UX Design",
    ],
    evidence: [
      "Stock Recommendation Engine",
      "FPGA Verification Lab",
      "Comet",
      "BPA",
    ],
  },
  {
    domain: "Mathematical foundation",
    skills: ["Multivariable Calculus"],
    evidence: ["UTD coursework", "numerical/PDE projects"],
  },
] as const satisfies readonly CapabilityRow[];

export const projectTechnologies = [
  "TypeScript",
  "Next.js",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Docker",
  "SystemVerilog",
  "cocotb",
  "UART",
  "Pytest",
  "GitHub Actions",
] as const;

export const education = {
  university: {
    institution: "The University of Texas at Dallas",
    credential: "Bachelor of Science in Computer Engineering",
    dates: "Aug 2025 – May 2029",
    standing: "Sophomore",
    activities: ["Dallas Formula Racing", "Comet Robotics", "IEEE", "ACM"],
    foundation: [
      "Physics I & II",
      "Discrete Mathematics",
      "Calculus I–III",
      "Linear Algebra",
      "Differential Equations",
    ],
  },
} as const satisfies Education;

export const credentials: readonly Credential[] = [
  {
    slug: "johnson-johnson-medtech-robotics-controls",
    issuer: "Johnson & Johnson MedTech",
    name: "Robotics and Controls",
    issued: "Aug 2026",
    credentialId: "a6Lh5xvoWPzxI2NDD",
  },
];

export const contact = {
  heading: "Let's build systems that have to work in the real world.",
  body: "I'm interested in internship and co-op opportunities across embedded systems, hardware validation, robotics, semiconductor engineering, and software systems.",
} as const satisfies Contact;

export const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
] as const satisfies readonly SocialLink[];
