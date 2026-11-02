import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="hazard h-1 opacity-70" />
      <p
        aria-hidden
        className="outline-text pointer-events-none mx-auto max-w-6xl select-none px-4 pt-10 text-center font-display text-[13vw] font-bold uppercase leading-none sm:px-6 lg:text-[10rem]"
      >
        Dela Peña
      </p>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 font-mono text-xs uppercase tracking-wider text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="text-cyan">©</span> {profile.name}
        </p>
        <p className="flex items-center gap-4">
          <span>Built with Next.js</span>
          <a href="#top" className="glitch-hover text-text hover:text-cyan">
            <span className="glitch-text">Back to top ↑</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
