type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  id?: string;
};

export function SectionHeading({ index, kicker, title, id }: SectionHeadingProps) {
  return (
    <header className="mb-12 sm:mb-14">
      <p className="label mb-3 flex items-center gap-3">
        <span className="text-magenta">{index}</span>
        <span aria-hidden className="h-px w-6 bg-cyan/50" />
        <span>{kicker}</span>
      </p>
      <div className="flex items-end gap-5">
        <h2
          id={id}
          className="font-display text-3xl font-semibold uppercase tracking-wide text-text sm:text-4xl"
        >
          {title}
        </h2>
        <span aria-hidden className="mb-2.5 h-px flex-1 bg-gradient-to-r from-line-strong to-transparent" />
      </div>
    </header>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
