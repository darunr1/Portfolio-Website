import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

import { interfaceCopy, profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="index" className="field-section hero-section" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span className="section-node" aria-hidden="true" />
        <span>00 / Index</span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-name">{profile.name}</p>
          <p className="hero-role">{profile.shortRole}</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-meta">
            <span>
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <div className="hero-actions">
            <a className="action-link action-link--primary" href="#systems">
              {interfaceCopy.primaryCta}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              className="action-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              {interfaceCopy.githubCta}
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="action-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} aria-hidden="true" />
              {interfaceCopy.linkedinCta}
              <ArrowUpRight size={14} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <p className="opportunity-line">{profile.opportunity}</p>
        </div>

        <aside className="now-panel" aria-labelledby="now-heading">
          <div className="now-panel__header">
            <span className="status-dot" aria-hidden="true" />
            <h2 id="now-heading">Now</h2>
            <span>{interfaceCopy.statusYear}</span>
          </div>
          <dl>
            {profile.now.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="now-panel__links" aria-label="Social profiles">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
