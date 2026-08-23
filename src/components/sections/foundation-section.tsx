import { ArrowUpRight } from "lucide-react";

import { credentials, education, sectionIntroductions } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function FoundationSection() {
  return (
    <section id="foundation" className="field-section" aria-labelledby="foundation-heading">
      <SectionHeading
        id="foundation-heading"
        number="04"
        title="Foundation"
        description={sectionIntroductions.foundation}
        descriptor="Education / credentials"
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

      <div className="foundation-credentials">
        <header className="foundation-credentials__header">
          <div>
            <p className="micro-label">Credential register</p>
            <h3>Applied credentials</h3>
          </div>
          <span>
            {String(credentials.length).padStart(2, "0")} {credentials.length === 1
              ? "record"
              : "records"}
          </span>
        </header>

        <ol className="credential-ledger" aria-label="Professional credentials">
          {credentials.map((credential, index) => (
            <li key={credential.slug}>
              <article className="credential-record">
                <div className="credential-record__track" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                </div>

                <div className="credential-record__identity">
                  <p>{credential.issuer}</p>
                  <h4>{credential.name}</h4>
                </div>

                <dl className="credential-record__details">
                  <div>
                    <dt>Issued</dt>
                    <dd>{credential.issued}</dd>
                  </div>
                  {credential.credentialId ? (
                    <div>
                      <dt>Credential ID</dt>
                      <dd className="credential-id">{credential.credentialId}</dd>
                    </div>
                  ) : null}
                </dl>

                {credential.url ? (
                  <a href={credential.url} target="_blank" rel="noreferrer">
                    View credential
                    <ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
