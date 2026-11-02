# Sean Kenly R. Dela Peña — Portfolio

**Live site: [seankenlydelapena.vercel.app](https://seankenlydelapena.vercel.app)**

[![Portfolio preview](https://seankenlydelapena.vercel.app/opengraph-image)](https://seankenlydelapena.vercel.app)

Personal portfolio of an AI-driven web developer and UI/UX designer, and 4th-year BS Computer Science (Software Engineering) student at FEU Tech. A cyberpunk-themed single-page site that showcases my projects, skills, experience, and certifications.

## Highlights

- **Projects:** Viscrete (thesis), MapaMars, Papeles, Werewolf, MTGDT, and SideQuest, each with my role, tech stack, and links
- **Experience:** a timeline of my ACM Media Committee role and team hackathons
- **Credentials:** education at FEU Tech and certifications with verification IDs
- **Contact:** email, GitHub, and LinkedIn, plus a downloadable resume

## Built with

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Deployed on [Vercel](https://vercel.com)

No UI or animation libraries: every effect (glitch text, neon borders, the synthwave floor, the ticker) is plain CSS.

## Design notes

- Fully static: every page is prerendered at build time.
- Responsive from phone width up, with a mobile menu and active-section highlighting.
- The hero name glitches once on load, and interactive elements get a short glitch on hover. Body text never animates.
- `prefers-reduced-motion` turns off all non-essential animation.
- Link previews use an image generated at build time with `next/og`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts); components only render it.

- `skills`: grouped tech stack
- `projects`: `featured: true` makes a full-width card, `inProgress: true` adds a badge, `note` adds a status line, and `demoFallback` replaces "Demo soon" when there is no live demo
- `experience`: newest first; `summary` says what you built or did, `points` are bullets, `tools` render as tags, and `team: true` labels a team competition
- `certificates`: `credentialId` and `url` add an ID and a Verify link

Static files:

- `public/resume.pdf` is the file behind every "Download Resume" button
- `public/projects/*` holds project screenshots; cards crop them to 16:10 (for example 1440×900)

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata
    page.tsx              section order
    globals.css           theme tokens, HUD panels, glitch and neon effects
    icon.svg              favicon
    opengraph-image.tsx   link-preview image
  components/             one file per section, plus Navbar, Ticker, icons
  data/portfolio.ts       all content
```

## Contact

- Email: [seankenlydelapena@gmail.com](mailto:seankenlydelapena@gmail.com)
- GitHub: [@Shiin-28](https://github.com/Shiin-28)
- LinkedIn: [sean-kenly-dela-pena](https://www.linkedin.com/in/sean-kenly-dela-pena-004949377/)
