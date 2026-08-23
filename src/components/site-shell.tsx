import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

import { interfaceCopy, profile } from "@/data/portfolio";

import { SectionIndex } from "./section-index";
import { ThemeToggle } from "./theme-toggle";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="site-shell">
        <aside className="site-rail">
          <a className="rail-identity" href="#index" aria-label="Back to portfolio index">
            <span className="rail-identity__monogram" aria-hidden="true">
              DP
            </span>
            <span>
              <strong>{profile.name.split(" ")[0]}</strong>
              <span>{profile.name.split(" ").at(-1)}</span>
            </span>
          </a>

          <p className="rail-role">{profile.shortRole.split(" · ")[0]}</p>
          <div className="rail-document-meta" aria-label="Document type">
            <span>Systems Fieldbook</span>
            <span>Portfolio / {interfaceCopy.statusYear}</span>
          </div>
          <SectionIndex />

          <div className="rail-footer">
            <ThemeToggle />
            <div className="rail-socials" aria-label="Social profiles">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" />
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={13} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <p className="rail-location">{profile.location}</p>
          </div>
        </aside>

        <header className="mobile-header">
          <div className="mobile-header__topline">
            <a className="mobile-identity" href="#index" aria-label="Back to portfolio index">
              <span aria-hidden="true">DP</span>
              <strong>{profile.name}</strong>
            </a>
            <ThemeToggle />
          </div>
          <SectionIndex compact />
        </header>

        <main id="main-content" className="reading-column" tabIndex={-1}>
          {children}
        </main>
      </div>
    </>
  );
}
