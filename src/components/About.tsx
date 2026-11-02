import { about } from "@/data/portfolio";
import { Section, SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading id="about-title" index="01" kicker="whoami" title="About" />
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-text" : undefined}>
              {p}
            </p>
          ))}
        </div>
        <ul className="grid content-start gap-3">
          {about.focus.map((f) => (
            <li key={f.label} className="panel px-5 py-4">
              <p className="label text-[0.7rem] text-muted">{f.label}</p>
              <p className="mt-1 font-display text-lg font-semibold text-text">{f.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
