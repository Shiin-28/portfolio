const items = [
  "Open to SWE internships",
  "AI-driven web developer",
  "UI/UX designer",
  "Next.js · TypeScript · Supabase",
  "BSCS Software Engineering · FEU Tech",
  "Based in the Philippines",
];

// Decorative and duplicated for a seamless loop, so hidden from screen readers
export function Ticker() {
  const row = (
    <ul className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-6 pr-6">
          <span>{item}</span>
          <span className="text-magenta">{"///"}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="ticker overflow-hidden border-b border-line bg-surface/70 py-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan/80"
    >
      <div className="ticker-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
