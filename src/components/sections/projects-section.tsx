import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import { AutoHilFlow, FpgaFlow, TelemetryFlow } from "@/components/project-visuals";
import { additionalProjects, featuredProjects, sectionIntroductions } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

import { SectionHeading } from "./section-heading";

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "screenshot") {
    return (
      <figure className="dashboard-visual">
        <div className="dashboard-visual__bar" aria-hidden="true">
          <span />
          <span>EquityLens / research workspace</span>
          <span>01</span>
        </div>
        <a
          className="dashboard-visual__image"
          href="/projects/stock-recommendation-dashboard.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the full-resolution Stock Recommendation Engine dashboard in a new tab"
        >
          <Image
            src="/projects/stock-recommendation-dashboard.png"
            alt="Stock Recommendation Engine dashboard showing ranked equities, factor scores, market context, and data warnings"
            width={1280}
            height={1460}
            sizes="(max-width: 760px) 92vw, (max-width: 1180px) 70vw, 42vw"
          />
        </a>
        <figcaption>
          <span>Real application dashboard / repository capture</span>
          <span>Open full resolution ↗</span>
        </figcaption>
      </figure>
    );
  }

  if (project.visual === "autohil-flow") {
    return <AutoHilFlow />;
  }

  if (project.visual === "fpga-flow") {
    return <FpgaFlow />;
  }

  return <TelemetryFlow />;
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const caseNumber = String(index + 1).padStart(2, "0");
  const hasRepository = project.visibility === "public" && Boolean(project.repositoryUrl);

  return (
    <article className="project-case" aria-labelledby={`project-${project.slug}`}>
      <header className="project-case__header">
        <div>
          <span className="project-case__number">01.{caseNumber}</span>
          <span className="project-case__category">{project.category}</span>
        </div>
        <span className="status-label">{project.status}</span>
      </header>

      <div className="project-case__grid">
        <div className="project-case__content">
          {project.productName ? <p className="product-name">{project.productName}</p> : null}
          <h3 id={`project-${project.slug}`}>{project.title}</h3>

          <div className="case-statement">
            <span>Problem</span>
            <p>{project.problem}</p>
          </div>

          <div className="case-statement">
            <span>Build</span>
            <p>{project.summary}</p>
          </div>

          <div className="case-evidence">
            <p className="micro-label">Evidence</p>
            <ul>
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-case__visual">
          <ProjectVisual project={project} />
        </div>
      </div>

      <footer className="project-case__footer">
        <div className="technology-line">
          <span>Technology</span>
          <ul aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        {hasRepository ? (
          <a
            className="repository-link"
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            View repository
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </footer>

      {project.disclaimer ? (
        <p className="project-disclaimer">
          <strong>Scope note.</strong> {project.disclaimer}
        </p>
      ) : null}
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="systems" className="field-section" aria-labelledby="systems-heading">
      <SectionHeading
        id="systems-heading"
        number="01"
        title="Selected systems"
        description={sectionIntroductions.systems}
      />

      <div className="project-cases">
        {featuredProjects.map((project, index) => (
          <ProjectCase key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="additional-builds" aria-labelledby="additional-builds-heading">
        <div className="additional-builds__intro">
          <p className="micro-label">01.B / Index</p>
          <h3 id="additional-builds-heading">Additional builds</h3>
          <p>Relevant systems in private repositories, indexed without overstating their public evidence.</p>
        </div>
        <ol>
          {additionalProjects.map((project, index) => (
            <li key={project.slug}>
              <span className="additional-builds__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
              </div>
              <span className="private-label">Private repository</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
