import { skills } from "@/data/portfolio";
import { Section, SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading id="skills-title" index="02" kicker="stack.load()" title="Skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <article
            key={group.title}
            className={`panel p-6 ${
              i === skills.length - 1 && skills.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <header className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-text">
                {group.title}
              </h3>
              <span className="font-mono text-[0.7rem] text-cyan/70">
                {group.code}·{String(group.items.length).padStart(2, "0")}
              </span>
            </header>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
