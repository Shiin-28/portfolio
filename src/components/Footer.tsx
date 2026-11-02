import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line">
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
