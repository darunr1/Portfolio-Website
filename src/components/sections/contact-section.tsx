import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { contact, profile } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="field-section contact-section" aria-labelledby="contact-heading">
      <SectionHeading
        id="contact-heading"
        number="05"
        title="Contact"
        descriptor="Open channel / verified profiles"
      />

      <div className="contact-layout">
        <div className="contact-copy">
          <p className="micro-label">Closing docket / 05.A</p>
          <h3>{contact.heading}</h3>
          <p>{contact.body}</p>
        </div>
        <div className="contact-docket">
          <dl className="contact-docket__meta">
            <div>
              <dt>Base</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Current focus</dt>
              <dd>{profile.now[2].value}</dd>
            </div>
          </dl>

          <div className="contact-links" aria-label="Contact links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <span>
                <Github size={18} aria-hidden="true" />
                GitHub
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>Computer Engineering / {profile.location}</span>
        <a href="#index">Back to index ↑</a>
      </footer>
    </section>
  );
}
