import { credential, education, sectionIntroductions } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function FoundationSection() {
  return (
    <section id="foundation" className="field-section" aria-labelledby="foundation-heading">
      <SectionHeading
        id="foundation-heading"
        number="04"
        title="Foundation"
        description={sectionIntroductions.foundation}
      />

      <div className="foundation-primary">
        <div className="foundation-primary__heading">
          <p className="micro-label">University / Current</p>
          <h3>{education.university.institution}</h3>
          <p>{education.university.credential}</p>
        </div>
        <dl className="foundation-details">
          <div>
            <dt>Dates</dt>
            <dd>{education.university.dates}</dd>
          </div>
          <div>
            <dt>Standing</dt>
            <dd>{education.university.standing}</dd>
          </div>
          <div>
            <dt>Activities</dt>
            <dd>{education.university.activities.join(" · ")}</dd>
          </div>
          <div>
            <dt>Relevant foundation</dt>
            <dd>{education.university.foundation.join(" · ")}</dd>
          </div>
        </dl>
      </div>

      <div className="foundation-secondary-grid">
        <article className="foundation-secondary">
          <p className="micro-label">Earlier foundation</p>
          <h3>{education.highSchool.institution}</h3>
          <p>{education.highSchool.credential}</p>
          <time>{education.highSchool.dates}</time>
          <dl>
            <div>
              <dt>Activities</dt>
              <dd>{education.highSchool.activities.join(" · ")}</dd>
            </div>
            <div>
              <dt>Relevant coursework</dt>
              <dd>{education.highSchool.foundation.join(" · ")}</dd>
            </div>
          </dl>
        </article>

        <article className="credential-entry">
          <p className="micro-label">Credential</p>
          <h3>{credential.issuer}</h3>
          <p>{credential.name}</p>
          <dl>
            <div>
              <dt>Issued</dt>
              <dd>{credential.issued}</dd>
            </div>
            <div>
              <dt>Credential ID</dt>
              <dd className="credential-id">{credential.credentialId}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
