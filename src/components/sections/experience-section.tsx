import { MapPin } from "lucide-react";

import { experiences, sectionIntroductions } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="field-section" aria-labelledby="experience-heading">
      <SectionHeading
        id="experience-heading"
        number="01"
        title="Experience"
        description={sectionIntroductions.experience}
        descriptor="Chronology / applied work"
      />

      <ol className="experience-ledger">
        {experiences.map((experience, index) => (
          <li key={`${experience.organization}-${experience.role}`}>
            <article
              className="experience-entry"
              aria-labelledby={`experience-${index}`}
            >
              <div className="experience-entry__track" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
              </div>

              <div className="experience-entry__date">
                <time>{experience.dates}</time>
                <span>{experience.engagement}</span>
              </div>

              <div className="experience-entry__identity">
                <p>{experience.organization}</p>
                <h3 id={`experience-${index}`}>{experience.role}</h3>
                <div className="experience-entry__meta">
                  <span className="work-mode">{experience.workMode}</span>
                  <span className="experience-location">
                    <MapPin size={13} aria-hidden="true" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <div className="experience-entry__evidence">
                <p className="micro-label">Evidence</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
