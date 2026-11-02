import { experience, type ExperienceKind } from "@/data/portfolio";
import { Section, SectionHeading } from "./SectionHeading";

const kindStyles: Record<ExperienceKind, { text: string; bg: string }> = {
  Work: { text: "text-cyan", bg: "bg-cyan" },
  Competition: { text: "text-yellow", bg: "bg-yellow" },
  Leadership: { text: "text-magenta", bg: "bg-magenta" },
};

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience-title" index="04" kicker="log.history" title="Experience" />

      <ol className="relative ml-1.5 border-l border-line-strong">
        {experience.map((item, i) => {
          const style = kindStyles[item.kind];
          return (
            <li key={i} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rotate-45 ${style.bg}`}
              />
              <div className="grid gap-3 md:grid-cols-[13rem_1fr] md:gap-10">
                <div className="font-mono text-xs uppercase tracking-wider">
                  <p className="text-muted">{item.period}</p>
                  <p className={`mt-1.5 ${style.text}`}>
                    [{item.team ? `Team ${item.kind}` : item.kind}]
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                  {item.org && <p className="mt-0.5 text-sm text-cyan/80">{item.org}</p>}
                  {item.summary && (
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted">{item.summary}</p>
                  )}
                  {item.points.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-muted">
                      {item.points.map((point, j) => (
                        <li key={j} className="flex gap-3 leading-relaxed">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.tools && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <li key={tool} className="chip">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
