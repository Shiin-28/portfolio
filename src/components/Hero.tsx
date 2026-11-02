import { education, profile } from "@/data/portfolio";
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const readout = [
  { key: "Program", value: "BS Computer Science" },
  { key: "Track", value: "Software Engineering" },
  { key: "Campus", value: education.schoolShort },
  { key: "Year", value: `${education.year} · ${education.period}` },
  { key: "Focus", value: "AI web apps · UI/UX" },
];

export function Hero() {
  const [first, ...rest] = profile.headline.split(" & ");

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
        <div>
          <p className="label mb-6 flex items-center gap-3">
            <span className="status-dot inline-block h-2 w-2 bg-yellow" aria-hidden />
            <span className="text-yellow">{profile.status}</span>
          </p>

          <h1 className="font-display text-[2.6rem] font-bold uppercase leading-none tracking-tight text-text sm:text-6xl lg:text-7xl">
            <span className="glitch block">
              <span className="block">Sean Kenly R.</span>
              <span className="block">
                Dela Peña<span className="text-cyan">_</span>
              </span>
              <span aria-hidden className="glitch-layer glitch-layer-a">
                <span className="block">Sean Kenly R.</span>
                <span className="block">Dela Peña_</span>
              </span>
              <span aria-hidden className="glitch-layer glitch-layer-b">
                <span className="block">Sean Kenly R.</span>
                <span className="block">Dela Peña_</span>
              </span>
            </span>
          </h1>

          <p className="mt-6 font-display text-xl font-medium text-text/90 sm:text-2xl">
            {first}
            {rest.length > 0 && (
              <>
                {" "}
                <span className="text-magenta">&amp;</span> {rest.join(" & ")}
              </>
            )}
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary panel glitch-hover">
              <span className="glitch-text">View Projects</span>
              <ArrowDownIcon width={16} height={16} />
            </a>
            <a href={profile.resume} download className="btn panel glitch-hover">
              <span className="glitch-text">Download Resume</span>
              <DownloadIcon width={16} height={16} />
            </a>
            <a href="#contact" className="btn btn-magenta panel glitch-hover">
              <span className="glitch-text">Contact</span>
              <MailIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <aside aria-label="Profile summary" className="hud-corners">
          <div className="panel p-6 [--panel-fill:rgb(11_14_22/0.85)] sm:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
              <span className="label">ID // Profile</span>
              <span className="font-mono text-[0.7rem] text-muted">REV.2026</span>
            </div>
            <dl className="space-y-3.5 font-mono text-sm">
              {readout.map((row) => (
                <div key={row.key} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt className="uppercase tracking-wider text-muted">{row.key}</dt>
                  <dd className="text-text">{row.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                <dt className="uppercase tracking-wider text-muted">Status</dt>
                <dd className="text-yellow">Seeking SWE internship</dd>
              </div>
            </dl>
            <div className="mt-6 flex gap-2 border-t border-line pt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="glitch-hover flex flex-1 items-center justify-center gap-2 border border-line-strong py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-cyan hover:text-cyan"
              >
                <GitHubIcon width={15} height={15} />
                <span className="glitch-text">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glitch-hover flex flex-1 items-center justify-center gap-2 border border-line-strong py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-cyan hover:text-cyan"
              >
                <LinkedInIcon width={15} height={15} />
                <span className="glitch-text">LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
