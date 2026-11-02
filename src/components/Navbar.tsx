"use client";

import { useEffect, useState } from "react";
import { profile, sections } from "@/data/portfolio";

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Highlight the section currently crossing the upper-middle of the viewport
  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="glitch-hover font-mono text-sm font-semibold tracking-widest text-text"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="glitch-text">
            <span className="text-cyan">[</span>
            {profile.initials}
            <span className="text-cyan">]</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s, i) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`glitch-hover group relative flex items-baseline gap-1.5 px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    isActive ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  <span className={isActive ? "text-magenta" : "text-cyan/60"}>
                    0{i + 1}
                  </span>
                  <span className="glitch-text">{s.label}</span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-3 -bottom-px h-px bg-cyan transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={profile.resume}
          download
          className="btn panel glitch-hover hidden px-4 py-2 md:inline-flex"
        >
          <span className="glitch-text">Resume</span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line-strong text-cyan md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg/95 md:hidden"
      >
        <ul className="mx-auto max-w-6xl px-4 py-3">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-line/60 py-3 font-mono text-sm uppercase tracking-wider text-text"
              >
                <span className="text-xs text-cyan/70">0{i + 1}</span>
                {s.label}
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a href={profile.resume} download className="btn panel w-full">
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
