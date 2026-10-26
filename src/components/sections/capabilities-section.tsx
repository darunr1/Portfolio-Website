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
        descriptor="Domains / descriptions"
      />

      <div className="capability-matrix" role="table" aria-label="Engineering capabilities and descriptions">
        <div className="capability-matrix__header" role="row">
          <span role="columnheader">Domain</span>
          <span role="columnheader">Skills</span>
          <span role="columnheader">Description</span>
        </div>
        {capabilityRows.map((row, index) => (
          <div className="capability-row" role="row" key={row.domain}>
            <div role="cell" data-label="Domain">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{row.domain}</h3>
            </div>
            <div role="cell" data-label="Skills">
              <ul className="capability-row__items">
                {row.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div role="cell" data-label="Description">
              <ul className="capability-row__items capability-row__evidence">
                {row.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="project-technologies">
        <span>Technologies used in projects</span>
        <ul>
          {projectTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
