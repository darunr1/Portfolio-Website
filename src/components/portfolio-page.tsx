"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

import {
  education,
  experiences,
  heroMetrics,
  profile,
  projects,
  resumeEnabled,
  resumeHref,
  signatureSignals,
  skillGroups,
  socialLinks,
  type Experience,
  type Project,
  type SkillGroup,
} from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: true, margin: "-80px" };

export function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(21,128,61,0.26),transparent_34%),radial-gradient(circle_at_86%_8%,rgba(214,177,103,0.12),transparent_30%),linear-gradient(145deg,#030806_0%,#06130f_42%,#020403_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(214,177,103,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(214,177,103,0.035)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <SiteNav />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

function SiteNav() {
  const items = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#030806]/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Darun Prasath Ramalingam home"
        >
          <span className="grid size-9 place-items-center rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] text-sm font-black text-[var(--gold)] shadow-[0_0_30px_rgba(214,177,103,0.15)]">
            DP
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.16em] text-white/78 uppercase sm:block">
            Darun
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/62 transition hover:bg-white/6 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] px-3 py-2 text-sm font-semibold text-[var(--gold)] transition hover:border-[var(--gold)] hover:bg-[rgba(214,177,103,0.16)]"
        >
          <Mail className="size-4" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative px-5 pt-16 pb-20 sm:px-8 lg:px-10 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-300/14 bg-emerald-300/8 px-3 py-2 text-sm font-medium text-emerald-100/86">
            <MapPin className="size-4 text-[var(--gold)]" />
            {profile.location}
          </div>
          <p className="mb-4 text-sm font-semibold tracking-[0.24em] text-[var(--gold)] uppercase">
            {profile.title}
          </p>
          <h1 className="max-w-4xl text-5xl leading-[0.98] font-black tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-2xl text-2xl leading-tight font-semibold text-[var(--foreground)] sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ResumeButton />
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-5 text-sm font-semibold text-white/84 transition hover:-translate-y-0.5 hover:border-emerald-200/24 hover:bg-white/[0.075] hover:text-white"
                >
                  <Icon className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-white/8 bg-white/[0.035] px-4 py-4"
              >
                <div className="text-2xl font-black text-white">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/52">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function ResumeButton() {
  if (resumeEnabled) {
    return (
      <a
        href={resumeHref}
        download
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[var(--gold)] px-5 text-sm font-black text-[#07110d] shadow-[0_20px_60px_rgba(214,177,103,0.2)] transition hover:-translate-y-0.5 hover:bg-[#e2c27c]"
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
      className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] px-5 text-sm font-black text-[rgba(214,177,103,0.58)]"
    >
      <Download className="size-4" />
      Resume coming soon
    </button>
  );
}

function HeroVisual() {
  const rows = [
    ["repo_scan.py", "extract commits, LOC, churn"],
    ["smell_ranker.java", "AST proximity + refactoring signals"],
    ["api/jobs.ts", "async generation workflow"],
    ["backtest.py", "fees, slippage, walk-forward validation"],
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-lg bg-emerald-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#07120e]/88 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.035] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#d45656]" />
            <span className="size-2.5 rounded-full bg-[#d6b167]" />
            <span className="size-2.5 rounded-full bg-[#3fbf7f]" />
          </div>
          <div className="text-xs font-semibold tracking-[0.22em] text-white/38 uppercase">
            Systems Console
          </div>
        </div>
        <div className="p-5 sm:p-7">
          <div className="grid gap-3">
            {rows.map(([file, detail], index) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
                className="group rounded-md border border-white/8 bg-black/24 p-4 transition hover:border-[var(--gold-border)] hover:bg-white/[0.045]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-sm font-semibold text-emerald-100">
                      {file}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/54">
                      {detail}
                    </div>
                  </div>
                  <ChevronRight className="mt-1 size-4 shrink-0 text-[var(--gold)] transition group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {signatureSignals.slice(0, 4).map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.label}
                  className="flex min-h-16 items-center gap-3 rounded-md border border-emerald-200/10 bg-emerald-200/[0.045] px-4 py-3"
                >
                  <Icon className="size-4 shrink-0 text-[var(--gold)]" />
                  <span className="text-sm font-medium leading-5 text-white/70">
                    {signal.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-[var(--gold)] uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="Internship-ready engineering range.">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 sm:p-8">
          <p className="text-lg leading-8 text-white/76">
            I am a Computer Engineering student at the University of Texas at
            Arlington, expected to graduate in May 2028. I have experience in
            ML/AI research, frontend development, backend APIs, static analysis,
            data pipelines, and full-stack web platforms.
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            I build software with the same mindset across research tools,
            product interfaces, and backend workflows: make the system clear,
            measurable, useful, and reliable enough for other people to trust.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {signatureSignals.slice(0, 3).map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className="rounded-md border border-emerald-200/10 bg-emerald-200/[0.04] p-5"
              >
                <Icon className="mb-4 size-5 text-[var(--gold)]" />
                <div className="text-lg font-bold text-white">{signal.label}</div>
                <div className="mt-2 text-sm leading-6 text-white/55">
                  Practical experience across research, product, and data-heavy
                  engineering contexts.
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="Computer Engineering foundation.">
      <div className="rounded-lg border border-white/10 bg-[#07120e]/78 p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)]">
              <GraduationCap className="size-5 text-[var(--gold)]" />
            </div>
            <h3 className="text-2xl font-black text-white">{education.school}</h3>
            <p className="mt-2 text-lg text-white/70">{education.degree}</p>
            <p className="mt-2 font-semibold text-[var(--gold)]">
              {education.graduation}
            </p>
          </div>
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-white/40 uppercase">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-sm font-semibold text-white/72"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="A practical stack for research and product work.">
      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-emerald-200/18 hover:bg-white/[0.06]">
      <div className="mb-5 flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)]">
          <Icon className="size-5 text-[var(--gold)]" />
        </span>
        <h3 className="text-xl font-black text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-emerald-200/10 bg-emerald-200/[0.045] px-3 py-2 text-sm font-semibold text-emerald-50/74"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Premium execution across research, web, and backend systems.">
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--gold)] via-emerald-400/30 to-transparent md:block" />
        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const Icon = experience.icon;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-lg border border-white/10 bg-[#07120e]/78 p-6 transition hover:-translate-y-1 hover:border-[var(--gold-border)] hover:bg-[#0a1712] md:ml-14"
    >
      <div className="absolute -left-[3.95rem] top-6 hidden size-10 place-items-center rounded-md border border-[var(--gold-border)] bg-[#07120e] md:grid">
        <Icon className="size-5 text-[var(--gold)]" />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-4 inline-flex size-10 items-center justify-center rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] md:hidden">
            <Icon className="size-5 text-[var(--gold)]" />
          </div>
          <h3 className="text-2xl font-black text-white">{experience.role}</h3>
          <p className="mt-1 text-lg font-semibold text-emerald-100/76">
            {experience.company}
          </p>
        </div>
        <div className="shrink-0 rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-left lg:text-right">
          <div className="font-bold text-[var(--gold)]">{experience.period}</div>
          {experience.location && (
            <div className="mt-1 text-sm text-white/44">{experience.location}</div>
          )}
        </div>
      </div>
      <ul className="mt-6 grid gap-3">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-7 text-white/68">
            <ShieldCheck className="mt-1 size-4 shrink-0 text-[var(--gold)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Projects" title="Systems that show depth, judgment, and shipping ability.">
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
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
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex min-h-[410px] flex-col rounded-lg border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[var(--gold-border)] hover:bg-white/[0.065]"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] px-3 py-2 text-xs font-black tracking-[0.18em] text-[var(--gold)] uppercase">
          {project.accent}
        </span>
        <span className="grid size-11 place-items-center rounded-md border border-emerald-200/12 bg-emerald-200/[0.055]">
          <Icon className="size-5 text-emerald-100" />
        </span>
      </div>
      <h3 className="text-2xl font-black leading-tight text-white">
        {project.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>
      <div className="mt-auto pt-7">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-black/18 px-2.5 py-1.5 text-xs font-semibold text-white/68"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 pt-16 pb-24 sm:px-8 lg:px-10 lg:pt-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-[#07120e]/82"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-10">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-[var(--gold)] uppercase">
              Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m looking for internship opportunities where I can contribute
              to strong engineering teams, learn quickly, and ship reliable
              software across product, infrastructure, data, or ML-adjacent work.
            </p>
          </div>
          <div className="grid content-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-between gap-4 rounded-md border border-[var(--gold-border)] bg-[var(--gold-soft)] p-4 transition hover:border-[var(--gold)] hover:bg-[rgba(214,177,103,0.16)]"
            >
              <span className="flex items-center gap-3 font-bold text-[var(--gold)]">
                <Mail className="size-5" />
                {profile.email}
              </span>
              <ArrowUpRight className="size-5 text-[var(--gold)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {socialLinks
              .filter((link) => link.label !== "Email")
              .map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-emerald-200/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex items-center gap-3 font-bold text-white/78">
                      <Icon className="size-5 text-[var(--gold)]" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="size-5 text-white/42 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/8 px-6 py-5 text-sm text-white/42 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>Darun Prasath Ramalingam</span>
          <span className="inline-flex items-center gap-2">
            <BriefcaseBusiness className="size-4 text-[var(--gold)]" />
            Open to software engineering internships
          </span>
        </div>
      </motion.div>
    </section>
  );
}
