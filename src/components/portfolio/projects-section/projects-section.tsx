"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { ProjectCard } from "@/components/portfolio/projects-section/project-card";
import { Button } from "@/components/ui/button";

interface ProjectLink {
  readonly icon: React.ReactNode;
  readonly type: string;
  readonly href: string;
}

interface ProjectItem {
  readonly title: string;
  readonly href?: string;
  readonly active: boolean;
  readonly category?: string;
  readonly description: string;
  readonly technologies?: readonly string[];
  readonly authors?: string;
  readonly links?: readonly ProjectLink[];
  readonly image?: string;
  readonly video?: string;
}

interface ProjectsSectionProps {
  projects: readonly ProjectItem[];
  delay?: number;
  mobileDisplayCount?: number;
  desktopDisplayCount?: number;
  showAllText?: string;
}

export default function ProjectsSection({
  projects,
  delay = 0,
  mobileDisplayCount = 6,
  desktopDisplayCount = 6,
  showAllText = "Show All",
}: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [displayCount, setDisplayCount] = useState(desktopDisplayCount);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category).filter((c): c is string => !!c)))];

  useEffect(() => {
    setMounted(true);

    const updateDisplayCount = () => {
      // 使用 Tailwind 的 lg 断点 (1024px) 作为桌面和移动端的分界
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      setDisplayCount(isDesktop ? desktopDisplayCount : mobileDisplayCount);
    };

    updateDisplayCount();
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", updateDisplayCount);

    return () => {
      mediaQuery.removeEventListener("change", updateDisplayCount);
    };
  }, [mobileDisplayCount, desktopDisplayCount]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const displayed = showAll ? filteredProjects : filteredProjects.slice(0, displayCount);
  const hasMore = filteredProjects.length > displayCount;

  if (!mounted) {
    return (
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, displayCount).map((project) => (
          <ProjectCard
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            category={project.category}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
            authors={project.authors}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveFilter(category);
              setShowAll(false);
            }}
            className="rounded-full px-4 text-xs"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((project) => (
          <ProjectCard
            key={project.title}
            href={project.href}
            title={project.title}
            description={project.description}
            category={project.category}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
            authors={project.authors}
          />
        ))}
        {hasMore && !showAll && (
          <div className="col-span-full flex justify-center pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2"
            >
              <ChevronDown className="h-4 w-4" />
              {showAllText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
