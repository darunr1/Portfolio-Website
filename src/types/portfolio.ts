export type SectionId =
  | "index"
  | "systems"
  | "experience"
  | "capabilities"
  | "foundation"
  | "contact";

export type SectionNumber = "00" | "01" | "02" | "03" | "04" | "05";

export type NavigationItem = {
  number: SectionNumber;
  id: string;
  label: string;
};

export type NowLabel = "Research" | "Education" | "Focus";

export type NowItem = {
  label: NowLabel;
  value: string;
};

export type Profile = {
  name: string;
  shortRole: string;
  headline: string;
  summary: string;
  location: string;
  opportunity: string;
  github: string;
  linkedin: string;
  now: readonly [NowItem, NowItem, NowItem];
};

export type SocialLink = {
  label: "GitHub" | "LinkedIn";
  href: string;
};

export type Contact = {
  heading: string;
  body: string;
};

export type ProjectVisibility = "public" | "private";

export type ProjectVisual =
  | "screenshot"
  | "autohil-flow"
  | "fpga-flow"
  | "telemetry-flow";

export type ProjectStatus =
  | "Built and deployment-configured; live demo not yet deployed"
  | "STM32-targeted MVP with portable firmware, mock-serial testing, and documented hardware bring-up"
  | "RTL implemented and verified in open-source simulation"
  | "Host-simulated pipeline with STM32-oriented interfaces; hardware port remains documented work";

export type Project = {
  slug: string;
  title: string;
  productName?: string;
  category: string;
  problem: string;
  summary: string;
  evidence: readonly string[];
  technologies: readonly string[];
  status: ProjectStatus;
  visibility: ProjectVisibility;
  repositoryUrl?: string;
  disclaimer?: string;
  visual: ProjectVisual;
  featured: boolean;
};

export type AdditionalProject = {
  slug: string;
  title: string;
  summary: string;
  status: "Repository is currently private";
  visibility: "private";
  repositoryUrl: null;
  visual: "text-index";
  featured: false;
};

export type Experience = {
  organization: string;
  role: string;
  dates: string;
  typeLocation: string;
  highlights: readonly [string, string];
  capabilities: readonly string[];
};

export type CapabilityDomain =
  | "Semiconductor & research"
  | "Embedded & physical systems"
  | "Software & computation"
  | "Mathematical foundation";

export type CapabilityRow = {
  domain: CapabilityDomain;
  skills: readonly string[];
  evidence: readonly string[];
};

export type UniversityEducation = {
  institution: "The University of Texas at Dallas";
  credential: "Bachelor of Science in Computer Engineering";
  dates: "Aug 2025 – May 2029";
  standing: "Sophomore";
  activities: readonly string[];
  foundation: readonly string[];
};

export type HighSchoolEducation = {
  institution: "Emerson High School";
  credential: "High School Diploma";
  dates: "Aug 2022 – May 2025";
  activities: readonly string[];
  foundation: readonly string[];
};

export type Education = {
  university: UniversityEducation;
  highSchool: HighSchoolEducation;
};

export type Credential = {
  issuer: "Johnson & Johnson MedTech";
  name: "Robotics and Controls";
  issued: "Aug 2026";
  credentialId: "a6Lh5xvoWPzxI2NDD";
  url: null;
};
