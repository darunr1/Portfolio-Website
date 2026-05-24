"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import { motion } from "motion/react";

import {
  education,
  experiences,
  heroMetrics,
  profile,
  projectCategories,
  projects,
  resumeEnabled,
  resumeHref,
  skillGroups,
  socialLinks,
  type Project,
} from "@/data/portfolio";

type Theme = "light" | "dark";
type ProjectFilter = "All" | (typeof projectCategories)[number];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-80px" };

export function PortfolioPage() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const stored = window.localStorage.getItem("theme") as Theme | null;
    return stored ?? "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <BackgroundField />
      <SiteNav theme={theme} onToggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsEducationSection />
      <ContactSection />
    </main>
  );
}

function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--page-gradient)]" />
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_18%_24%,var(--star)_0_1.5px,transparent_1.8px),radial-gradient(circle_at_72%_18%,var(--star)_0_1.2px,transparent_1.6px),radial-gradient(circle_at_88%_72%,var(--star)_0_1.5px,transparent_1.8px),radial-gradient(circle_at_32%_86%,var(--star)_0_1px,transparent_1.5px)] [background-size:260px_220px,310px_240px,280px_260px,340px_300px]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-[var(--line)]" />
    </div>
  );
}

function SiteNav({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  const items = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Stack", "#stack"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Portfolio home">
          <span className="grid size-8 place-items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-xs font-bold text-[var(--accent)]">
            DP
          </span>
          <span className="hidden text-sm font-semibold text-[var(--foreground)] sm:block">
            Darun Ramalingam
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid size-9 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--surface)]"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">Contact</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="px-5 pt-12 pb-10 sm:px-8 lg:pt-16">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)] shadow-[0_0_32px_var(--accent-glow)]">
          <Sparkles className="size-3.5" />
          building research tools, fintech systems, and web products
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Computer engineering portfolio for software teams that care about
              clean systems.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              I&apos;m {profile.name}, a UTA student in Dallas building across
              ML research, backend workflows, numerical finance, and polished
              front-end products.
            </p>
          </div>

          <div className="grid gap-2 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-xl bg-[var(--surface-soft)] px-3 py-2"
              >
                <span className="text-sm text-[var(--muted)]">{metric.label}</span>
                <span className="font-mono text-lg font-semibold text-[var(--foreground)]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <ResumeButton />
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent-border)]"
              >
                <Icon className="size-4 text-[var(--accent)]" />
                {link.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function ResumeButton() {
  if (resumeEnabled) {
    return (
      <a
        href={resumeHref}
        download
        className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--accent)] px-4 text-sm font-semibold text-[var(--accent-contrast)] transition hover:-translate-y-0.5"
      >
        <Download className="size-4" />
        Resume
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      title="Resume PDF is not connected yet."
      className="inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 text-sm font-semibold text-[var(--accent)] opacity-75"
    >
      <Download className="size-4" />
      Resume pending
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">{title}</h2>
      {eyebrow && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--muted)]">
          {eyebrow}
        </p>
      )}
      {subtitle && <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">{subtitle}</p>}
    </div>
  );
}

function AboutSection() {
  const stackSnapshot = [
    ["Daily drivers", "Python · TypeScript · React · Node.js · Git"],
    ["ML / Data", "PyTorch · NumPy · pandas · Jupyter"],
    ["Infra & tools", "GitHub · Colab · Linux · Supabase · Figma"],
    ["Interests", "AI systems, aerospace software, quant tooling"],
  ];

  const optimizingFor = [
    "Teams that bias toward shipping and honest feedback.",
    "Problems where engineering quality changes the outcome.",
    "Learning curves that are steep but worth climbing.",
  ];

  return (
    <section id="about" className="border-y border-[var(--line)] px-5 py-14 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <SectionHeader title="About" />
          <div className="space-y-5 text-base leading-8 text-[var(--foreground)]">
            <p>
              I enjoy designing systems that stay understandable even when the
              inputs are messy: noisy repository data, complex model workflows,
              scattered product requirements, or numerical assumptions that need
              to be tested carefully.
            </p>
            <p>
              Most of my work sits at the intersection of{" "}
              <span className="text-[var(--accent)]">AI/ML</span>,{" "}
              <span className="text-[var(--accent)]">quantitative finance</span>,
              and <span className="text-[var(--accent)]">software engineering</span>.
              I like projects where the code has to explain itself and the user
              experience has to earn its space.
            </p>
            <p>
              I&apos;m especially drawn to aerospace and defense software because
              the work rewards disciplined thinking: clear interfaces, reliable
              systems, and strong communication.
            </p>
          </div>
        </div>

        <div className="grid content-start gap-4">
          <div className="justify-self-end rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-[0_0_32px_var(--accent-glow)]">
            building in public
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Quick stack snapshot</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {stackSnapshot.map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[var(--foreground)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">What I&apos;m optimizing for</h3>
            <ul className="mt-3 grid gap-2">
              {optimizingFor.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-[var(--muted)]">
                  <span className="mt-2 size-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const filters: ProjectFilter[] = ["All", ...projectCategories];
  const visibleProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="px-5 py-14 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeader
            title="Projects"
            subtitle="A mix of research, products, and experiments I have enjoyed building."
          />
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {filters.map((filter) => {
              const active = activeCategory === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveCategory(filter)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)] shadow-[0_0_24px_var(--accent-glow)]"
                      : "border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent-border)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className="group flex min-h-[326px] flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent-border)] hover:shadow-[0_16px_50px_var(--card-shadow)]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold leading-tight text-[var(--foreground)]">
            {project.title}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
            {project.category}
          </p>
        </div>
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--surface-soft)] text-[var(--accent)]">
          <Icon className="size-4" />
        </span>
      </div>

      <p className="text-sm font-semibold leading-5 text-[var(--foreground)]">
        {project.accent}
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs font-semibold text-[var(--chip-text)]"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition group-hover:gap-2.5"
          >
            GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-[var(--line)] px-5 py-14 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl"
      >
        <SectionHeader
          title="Experience"
          subtitle="Roles where I have worked across research pipelines, interfaces, APIs, and shipped web systems."
        />
        <div className="grid gap-3">
          {experiences.map((experience, index) => (
            <ExperienceRow
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceRow({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const Icon = experience.icon;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.42, delay: index * 0.04 }}
      className="grid gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent-border)] md:grid-cols-[16rem_1fr]"
    >
      <div>
        <span className="mb-4 grid size-10 place-items-center rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent)]">
          <Icon className="size-5" />
        </span>
        <h3 className="text-lg font-semibold leading-tight text-[var(--foreground)]">
          {experience.role}
        </h3>
        <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
          {experience.company}
        </p>
        <div className="mt-4 rounded-xl bg-[var(--surface-soft)] px-3 py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            {experience.period}
          </p>
          {experience.location && (
            <p className="mt-1 text-xs text-[var(--muted)]">{experience.location}</p>
          )}
        </div>
      </div>

      <ul className="grid content-start gap-3">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function SkillsEducationSection() {
  return (
    <section id="stack" className="px-5 py-14 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_1fr]"
      >
        <div>
          <SectionHeader title="Stack" subtitle="Compact overview of the tools and concepts I use most." />
          <div className="grid gap-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="size-4 text-[var(--accent)]" />
                    <h3 className="text-sm font-semibold text-[var(--foreground)]">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs font-semibold text-[var(--chip-text)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <SectionHeader title="Education" subtitle="Computer Engineering coursework and technical foundation." />
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 size-5 text-[var(--accent)]" />
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">{education.school}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{education.degree}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{education.graduation}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span key={course} className="rounded-full bg-[var(--chip)] px-2.5 py-1 text-xs font-semibold text-[var(--chip-text)]">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 pt-4 pb-16 sm:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              Looking for software engineering internships.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Interested in aerospace/defense software, ML-adjacent platforms,
              data-heavy products, and teams that care about clean engineering.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between rounded-xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-3 font-semibold text-[var(--accent)]"
            >
              <span className="flex items-center gap-2">
                <Mail className="size-4" />
                {profile.email}
              </span>
              <ArrowUpRight className="size-4" />
            </a>
            <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <BriefcaseBusiness className="size-4 text-[var(--accent)]" />
              Open to software engineering internships
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
