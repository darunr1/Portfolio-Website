import { experiences, sectionIntroductions } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="field-section" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        number="02"
        title="Field experience"
        description={sectionIntroductions.experience}
      />

      <div className="experience-ledger">
        {experiences.map((experience, index) => (
          <article
            className="experience-entry"
            key={`${experience.organization}-${experience.role}`}
            aria-labelledby={`experience-${index}`}
          >
            <div className="experience-entry__date">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{experience.dates}</time>
            </div>
            <div className="experience-entry__identity">
              <p>{experience.organization}</p>
              <h3 id={`experience-${index}`}>{experience.role}</h3>
              <span>{experience.typeLocation}</span>
            </div>
            <div className="experience-entry__evidence">
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p>
                <span>Capabilities</span>
                {experience.capabilities.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
