import { capabilityRows, projectTechnologies, sectionIntroductions } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="field-section" aria-labelledby="capabilities-heading">
      <SectionHeading
        id="capabilities-heading"
        number="03"
        title="Capability map"
        description={sectionIntroductions.capabilities}
      />

      <div className="capability-matrix" role="table" aria-label="Engineering capabilities and evidence">
        <div className="capability-matrix__header" role="row">
          <span role="columnheader">Domain</span>
          <span role="columnheader">Skills</span>
          <span role="columnheader">Evidence</span>
        </div>
        {capabilityRows.map((row, index) => (
          <div className="capability-row" role="row" key={row.domain}>
            <div role="cell" data-label="Domain">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{row.domain}</h3>
            </div>
            <p role="cell" data-label="Skills">{row.skills.join(" · ")}</p>
            <p role="cell" data-label="Evidence">{row.evidence.join(" · ")}</p>
          </div>
        ))}
      </div>

      <div className="project-technologies">
        <span>Technologies used in projects</span>
        <p>{projectTechnologies.join(" / ")}</p>
      </div>
    </section>
  );
}
