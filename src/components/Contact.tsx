import { profile } from "@/data/portfolio";
import { CopyEmail } from "./CopyEmail";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";
import { Section, SectionHeading } from "./SectionHeading";

const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Internship opportunity")}`;

const channels = [
  { label: "Email", value: profile.email, href: mailto, icon: MailIcon, external: false },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: PhoneIcon, external: false },
  { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.github, icon: GitHubIcon, external: true },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: LinkedInIcon, external: true },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <SectionHeading id="contact-title" index="06" kicker="open_channel" title="Contact" />

      <div className="hud-corners">
        <div className="panel overflow-hidden p-6 [--chamfer:20px] sm:p-10 lg:p-14">
          <div aria-hidden className="hazard -mx-6 -mt-6 mb-8 h-1.5 opacity-80 sm:-mx-10 sm:-mt-10 lg:-mx-14 lg:-mt-14" />
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div className="min-w-0">
              <p className="label flex items-center gap-3 text-yellow">
                <span className="status-dot inline-block h-2 w-2 bg-yellow" aria-hidden />
                {profile.status}
              </p>
              <p className="mt-5 font-display text-3xl font-semibold uppercase leading-tight text-text sm:text-5xl">
                Have a role in mind?
                <br />
                <span className="text-cyan">Let&apos;s talk.</span>
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-muted">
                I&apos;m looking for a software engineering internship. If my work fits your
                team, send me an email.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={mailto} className="btn btn-primary panel glitch-hover">
                  <MailIcon width={16} height={16} />
                  <span className="glitch-text">Email me</span>
                </a>
                <CopyEmail email={profile.email} />
              </div>
            </div>

            <ul className="min-w-0 divide-y divide-line border-y border-line">
              {channels.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="glitch-hover group flex items-center gap-4 py-4 transition-colors"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line-strong text-cyan transition-colors group-hover:border-cyan">
                      <Icon width={17} height={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="label block text-[0.7rem] text-muted">{label}</span>
                      <span className="glitch-text block truncate text-text group-hover:text-cyan">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRightIcon
                      width={16}
                      height={16}
                      className="shrink-0 text-muted transition-colors group-hover:text-magenta"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
