import Image from "next/image";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";

import { AutoHilFlow, FpgaFlow, TelemetryFlow } from "@/components/project-visuals";
import { featuredProjects, sectionIntroductions } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

import { SectionHeading } from "./section-heading";

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.visual === "screenshot") {
    return (
      <figure className="dashboard-visual">
        <div className="dashboard-visual__bar" aria-hidden="true">
          <span />
          <span>EquityLens / research workspace</span>
          <span>02.{String(index + 1).padStart(2, "0")}</span>
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

function ProjectRecord({ project, index }: { project: Project; index: number }) {
  const recordNumber = String(index + 1).padStart(2, "0");
  const hasRepository = project.visibility === "public" && Boolean(project.repositoryUrl);
  const artifactLabel =
    project.visual === "screenshot" ? "Inspect interface capture" : "Inspect system path";

  return (
    <li>
      <article className="project-entry" aria-labelledby={`project-${project.slug}`}>
        <div className="project-entry__track" aria-hidden="true">
          <span>{recordNumber}</span>
          <i />
        </div>

        <div className="project-entry__identity">
          <p>{project.category}</p>
          {project.productName ? <p className="product-name">{project.productName}</p> : null}
          <h3 id={`project-${project.slug}`}>{project.title}</h3>
          <div className="project-entry__links">
            <span className="visibility-label">{project.visibility} repository</span>
            {hasRepository ? (
              <a
                className="repository-link"
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={14} aria-hidden="true" />
                Repository
                <ArrowUpRight size={13} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>

        <dl className="project-entry__brief">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Build</dt>
            <dd>{project.summary}</dd>
          </div>
        </dl>

        <div className="project-entry__evidence">
          <p className="micro-label">Description</p>
          <ol>
            {project.evidence.map((item, evidenceIndex) => (
              <li key={item}>
                <span aria-hidden="true">D{String(evidenceIndex + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="project-entry__meta">
          <div className="technology-line">
            <span>Technology</span>
            <ul aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>

          <div className="project-entry__status">
            <span>Status</span>
            <p>{project.status}</p>
          </div>

          {project.disclaimer ? (
            <p className="project-disclaimer">
              <strong>Scope note.</strong> {project.disclaimer}
            </p>
          ) : null}
        </div>

        <details className="project-entry__artifact">
          <summary>
            <span>Artifact {recordNumber}</span>
            <strong>{artifactLabel}</strong>
            <ChevronDown size={15} aria-hidden="true" />
          </summary>
          <div className="project-entry__artifact-body">
            <ProjectVisual project={project} index={index} />
          </div>
        </details>
      </article>
    </li>
  );
}

export function ProjectsSection() {
  return (
    <section id="systems" className="field-section" aria-labelledby="systems-heading">
      <SectionHeading
        id="systems-heading"
        number="02"
        title="Selected systems"
        description={sectionIntroductions.systems}
        descriptor="Systems ledger / project descriptions"
      />

      <ol className="project-ledger">
        {featuredProjects.map((project, index) => (
          <ProjectRecord key={project.slug} project={project} index={index} />
        ))}
      </ol>

    </section>
  );
}
