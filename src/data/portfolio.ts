import type { LucideIcon } from "lucide-react";
import {
  Binary,
  BookOpen,
  BrainCircuit,
  Braces,
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
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const resumeEnabled = false;
export const resumeHref = "/resume.pdf";

export const profile = {
  name: "Darun Prasath Ramalingam",
  location: "McKinney, Texas",
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
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Discrete Structures",
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
      "Built workflows using Google Drive, GitHub, and Colab for large-scale Java repository analysis.",
      "Automated pipelines to extract repository metrics like commits, LOC, and project structure.",
      "Computed smell density, refactoring density, churn, and method-level complexity.",
      "Implemented Java static analysis pipelines to study refactoring patterns.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Ascend Web Agency",
    period: "Aug 2023 - Present",
    location: "Remote",
    icon: Layers3,
    highlights: [
      "Developed responsive client websites using HTML, CSS, and JavaScript.",
      "Built interactive components and improved desktop/mobile usability.",
      "Optimized frontend performance and layout structure.",
      "Collaborated with clients to turn business needs into clean interfaces.",
    ],
  },
  {
    role: "Back-End Developer",
    company: "PromptMesh",
    period: "July 2024 - June 2025",
    location: "Remote",
    icon: ServerCog,
    highlights: [
      "Built backend APIs for text-to-3D model generation.",
      "Implemented async job processing for long-running generation tasks.",
      "Designed database and storage workflows for prompt history, metadata, and 3D assets.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "AdWealth",
    period: "Dec 2025 - Feb 2026",
    location: "Remote",
    icon: Sparkles,
    highlights: [
      "Built a nonprofit web platform from scratch.",
      "Integrated Stripe and PayPal APIs for online donations.",
      "Developed responsive UI components.",
      "Implemented workflows for volunteer management and secure asset distribution.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Automated Code Smell Prioritization System",
    tech: ["Java", "Python", "JDeodorant", "RefactoringMiner"],
    description:
      "Static analysis and repository mining system that ranks code smells using refactoring signals, AST proximity, and graph metrics.",
    icon: Braces,
    accent: "Static Analysis",
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
  },
  {
    title: "Algorithmic Trading Backtester",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Pytest"],
    description:
      "Modular backtesting system with slippage, fees, latency, stop-losses, dynamic sizing, walk-forward validation, and performance metrics.",
    icon: LineChart,
    accent: "Quant Systems",
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
    value: "3",
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
    label: "McKinney, TX",
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
