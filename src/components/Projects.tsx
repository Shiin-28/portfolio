import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { Section, SectionHeading } from "./SectionHeading";

function ProjectLink({ href, label, fallback, icon }: {
  href?: string;
  label: string;
  fallback: string;
  icon: React.ReactNode;
}) {
  const cls =
    "inline-flex items-center gap-2 border px-3.5 py-2 font-mono text-xs uppercase tracking-wider";
  if (!href) {
    return (
      <span className={`${cls} cursor-not-allowed border-line text-muted/70`} title={fallback}>
        {icon}
        {fallback}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${cls} glitch-hover border-line-strong text-text transition-colors hover:border-cyan hover:text-cyan`}
    >
      {icon}
      <span className="glitch-text">{label}</span>
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = project.featured;
  // Alternate image side between consecutive featured cards
  const reversed = featured && index % 2 === 1;
  return (
    <article
      className={`project-card panel group flex flex-col hover:[--panel-border:var(--magenta)] ${
        featured
          ? `md:col-span-2 lg:col-span-3 lg:grid ${reversed ? "lg:grid-cols-[1fr_1.4fr]" : "lg:grid-cols-[1.4fr_1fr]"}`
          : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-line lg:border-b-0 ${reversed ? "lg:order-last" : ""}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          sizes={
            featured
              ? "(min-width: 1024px) 660px, (min-width: 768px) 720px, 100vw"
              : "(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          }
          className={`project-image aspect-[16/10] w-full object-cover ${featured ? "lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" : ""}`}
        />
        <span aria-hidden className="image-overlay pointer-events-none absolute inset-0" />
        <span className="absolute left-3 top-3 bg-bg/85 px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-cyan">
          P.{String(index + 1).padStart(2, "0")}
          {featured && <span className="text-yellow"> · Featured</span>}
        </span>
        {project.inProgress && (
          <span className="absolute right-3 top-3 border border-yellow/60 bg-bg/85 px-2 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-yellow">
            In progress
          </span>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${
          featured ? (reversed ? "lg:border-r lg:border-line" : "lg:border-l lg:border-line") : ""
        }`}>
        <p className="label text-[0.7rem] text-magenta">{project.tagline}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-text">
          <span className="glitch-text project-title">{project.title}</span>
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
        {project.note && (
          <p className="mt-3 border-l-2 border-yellow/70 pl-3 text-sm leading-relaxed text-text/80">
            {project.note}
          </p>
        )}

        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="label text-[0.7rem] text-muted">My role</dt>
            <dd className="mt-1 text-text">{project.role}</dd>
          </div>
          <div>
            <dt className="label text-[0.7rem] text-muted">Tech stack</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <ProjectLink
            href={project.liveUrl}
            label="Live demo"
            fallback="Demo soon"
            icon={<ArrowUpRightIcon width={14} height={14} />}
          />
          <ProjectLink
            href={project.repoUrl}
            label="GitHub"
            fallback="Repo soon"
            icon={<GitHubIcon width={14} height={14} />}
          />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading id="projects-title" index="03" kicker="selected_work" title="Projects" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title + i} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
