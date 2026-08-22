"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        <Sun className="theme-toggle__sun" size={17} />
        <Moon className="theme-toggle__moon" size={17} />
      </span>
      <span className="theme-toggle__label theme-toggle__light-label">Light</span>
      <span className="theme-toggle__label theme-toggle__dark-label">Dark</span>
    </button>
  );
}
