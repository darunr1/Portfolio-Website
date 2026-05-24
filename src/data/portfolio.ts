import type { LucideIcon } from "lucide-react";
import {
  Binary,
  BookOpen,
  BrainCircuit,
  Braces,
  Calculator,
  Code2,
  Cpu,
  Database,
  Github,
  GraduationCap,
  Layers3,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ServerCog,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  tech: string[];
  description: string;
  icon: LucideIcon;
  accent: string;
  category: ProjectCategory;
  href?: string;
};

export type ProjectCategory = "ML/AI" | "Quant/Fintech" | "SWE";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const resumeEnabled = false;
export const resumeHref = "/resume.pdf";

export const profile = {
  name: "Darun Prasath Ramalingam",
  location: "Dallas, Texas",
  title: "Computer Engineering Student | Software Developer | ML/AI Research Assistant",
  headline: "Building intelligent, scalable, and user-focused software.",
  summary:
    "Computer Engineering student at the University of Texas at Arlington with experience across ML/AI research, full-stack platforms, backend APIs, static analysis, data pipelines, and polished frontend systems.",
  email: "dxr2311@mavs.uta.edu",
  github: "https://github.com/darunr1",
  linkedin: "https://www.linkedin.com/in/darun-prasath-ramalingam-1676b9289/",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

export const education = {
  school: "University of Texas at Arlington",
  degree: "Bachelor of Science in Computer Engineering",
  graduation: "Expected Graduation: May 2028",
  coursework: [
    "MATH 1426 - Differential Calculus",
    "MATH 2425 - Integral Calculus",
    "MATH 2426 - Multivariable Calculus",
    "PHYS 1443 - Mechanics",
    "PHYS 1444 - Electricity & Magnetism",
    "CSE 1310 - Introduction to Programming",
    "CSE 1320 - Intermediate Programming",
    "CSE 1106 - Computer Science & Engineering Lab",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Libraries & Tools",
    icon: TerminalSquare,
    skills: [
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "Pytest",
      "React",
      "Git",
      "GitHub",
      "Google Colab",
      "Linux",
      "VS Code",
    ],
  },
  {
    title: "Concepts",
    icon: Network,
    skills: [
      "Data Structures",
      "Algorithms",
      "Numerical Methods",
      "REST APIs",
      "Statistical Modeling",
      "Data Analysis",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "ML/AI Research Assistant",
    company: "University of Texas at Arlington",
    period: "Aug 2025 - Present",
    location: "Arlington, TX",
    icon: BrainCircuit,
    highlights: [
      "Turn research questions into repeatable analysis workflows for mining large Java repositories.",
      "Clean and organize repository metadata so experiments can be reproduced across notebooks and scripts.",
      "Compare structural code signals with refactoring behavior to understand where design issues appear.",
      "Document findings and pipeline decisions so collaborators can review methods without reverse-engineering the code.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Ascend Web Agency",
    period: "Aug 2023 - Present",
    location: "Remote",
    icon: Layers3,
    highlights: [
      "Translate client goals into clean page structures, interaction patterns, and responsive front-end builds.",
      "Refine layouts across breakpoints so pages feel intentional on both desktop and mobile.",
      "Improve existing interfaces by simplifying hierarchy, spacing, and component behavior.",
      "Coordinate feedback with clients and ship polished updates without overcomplicating the stack.",
    ],
  },
  {
    role: "Back-End Developer",
    company: "PromptMesh",
    period: "July 2024 - June 2025",
    location: "Remote",
    icon: ServerCog,
    highlights: [
      "Built service endpoints that connected prompt input, generation state, and asset delivery.",
      "Handled long-running model generation with clear job states and predictable API responses.",
      "Structured prompt, metadata, and output records so the product could track generated assets reliably.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "AdWealth",
    period: "Dec 2025 - Feb 2026",
    location: "Remote",
    icon: Sparkles,
    highlights: [
      "Created reusable interface sections for a nonprofit platform with donation and volunteer workflows.",
      "Integrated payment paths into the site experience while keeping the user flow simple.",
      "Built responsive screens that made program information, giving, and volunteer actions easier to find.",
      "Supported secure content and asset delivery requirements as the platform moved toward launch.",
    ],
  },
];

export const projectCategories: ProjectCategory[] = ["ML/AI", "Quant/Fintech", "SWE"];

export const projects: Project[] = [
  {
    title: "Automated Code Smell Prioritization System",
    tech: ["Java", "Python", "JDeodorant", "RefactoringMiner"],
    description:
      "Static analysis and repository mining system that ranks code smells using refactoring signals, AST proximity, and graph metrics.",
    icon: Braces,
    accent: "Static Analysis",
    category: "SWE",
  },
  {
    title: "AI 3D Model Generator",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Three.js",
      "React Three Fiber",
      "Supabase",
      "PostgreSQL",
    ],
    description:
      "Web app that converts natural language prompts into 3D models with generation tracking, backend services, and a browser-based 3D viewer.",
    icon: Cpu,
    accent: "AI Product",
    category: "ML/AI",
  },
  {
    title: "Algorithmic Trading Backtester",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Pytest"],
    description:
      "Modular backtesting system with slippage, fees, latency, stop-losses, dynamic sizing, walk-forward validation, and performance metrics.",
    icon: LineChart,
    accent: "Quant Systems",
    category: "Quant/Fintech",
  },
  {
    title: "Adaptive PDE Solver for Option Pricing",
    tech: ["Python", "Numerical PDEs", "Black-Scholes", "Benchmarking", "Pytest"],
    description:
      "European option pricing project that compares a fixed-grid PDE solver with an adaptive solver focused near critical regions such as expiration.",
    icon: Calculator,
    accent: "Numerical Finance",
    category: "Quant/Fintech",
    href: "https://github.com/darunr1/Adaptive-PDE-Solver-For-Option-Pricing",
  },
];

export const heroMetrics = [
  {
    value: "2028",
    label: "Expected graduation",
  },
  {
    value: "4",
    label: "Technical roles",
  },
  {
    value: "4",
    label: "Featured systems",
  },
];

export const signatureSignals = [
  {
    label: "ML research",
    icon: BrainCircuit,
  },
  {
    label: "Full-stack platforms",
    icon: Binary,
  },
  {
    label: "Data pipelines",
    icon: Database,
  },
  {
    label: "Dallas, TX",
    icon: MapPin,
  },
  {
    label: "UTA Computer Engineering",
    icon: GraduationCap,
  },
  {
    label: "Research-ready systems",
    icon: BookOpen,
  },
];
