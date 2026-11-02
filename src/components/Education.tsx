import { certificates, education } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";
import { Section, SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education-title" index="05" kicker="credentials" title="Education" />

      <article className="hud-corners">
        <div className="panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="label text-[0.7rem] text-magenta">{education.schoolShort}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-text sm:text-3xl">
              {education.school}
            </h3>
            <p className="mt-3 text-lg text-text">{education.degree}</p>
            <p className="text-muted">{education.specialization}</p>
          </div>
          <div className="flex shrink-0 gap-2 font-mono text-xs uppercase tracking-wider sm:flex-col sm:items-end">
            <span className="border border-line-strong px-3 py-1.5 text-text">{education.period}</span>
            <span className="border border-cyan/40 px-3 py-1.5 text-cyan">{education.year}</span>
          </div>
        </div>
      </article>

      <div className="mt-12">
        <h3 className="mb-5 flex items-center gap-4 font-display text-lg font-semibold uppercase tracking-wide text-text">
          Certifications
          <span className="font-mono text-[0.7rem] font-normal text-cyan/70">
            CERT·{String(certificates.length).padStart(2, "0")}
          </span>
          <span aria-hidden className="h-px flex-1 bg-line" />
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <li key={i} className="panel flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-text">{cert.name}</p>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{cert.date}</span>
              </div>
              {(cert.credentialId || cert.url) && (
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 font-mono text-xs">
                  {cert.credentialId && (
                    <span className="text-muted">
                      ID <span className="text-text">{cert.credentialId}</span>
                    </span>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="glitch-hover inline-flex items-center gap-1 uppercase tracking-wider text-cyan hover:text-text"
                    >
                      <span className="glitch-text">Verify</span>
                      <ArrowUpRightIcon width={12} height={12} />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
