"use client";

import { useEffect, useRef, useState } from "react";

import { navigation } from "@/data/portfolio";

export function SectionIndex({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState(navigation[0].id);
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>());

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0, 0.15, 0.35],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!compact) return;

    const activeLink = linkRefs.current.get(activeId);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    activeLink?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId, compact]);

  return (
    <nav
      className={compact ? "section-index section-index--compact" : "section-index"}
      aria-label="Portfolio sections"
    >
      {navigation.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            ref={(element) => {
              if (element) linkRefs.current.set(item.id, element);
              else linkRefs.current.delete(item.id);
            }}
            href={`#${item.id}`}
            className="section-index__link"
            aria-current={isActive ? "location" : undefined}
          >
            <span className="section-index__marker" aria-hidden="true" />
            <span className="section-index__number">{item.number}</span>
            <span className="section-index__label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
