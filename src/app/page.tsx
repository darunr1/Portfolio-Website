import { SiteShell } from "@/components/site-shell";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FoundationSection } from "@/components/sections/foundation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { profile } from "@/data/portfolio";

export default function Home() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    description: profile.summary,
    homeLocation: {
      "@type": "Place",
      name: profile.location,
    },
    sameAs: [profile.github, profile.linkedin],
    affiliation: [
      {
        "@type": "CollegeOrUniversity",
        name: "The University of Texas at Dallas",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Georgia Institute of Technology",
      },
    ],
  };

  return (
    <SiteShell>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <CapabilitiesSection />
      <FoundationSection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
    </SiteShell>
  );
}
