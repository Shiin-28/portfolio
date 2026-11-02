# Sean Kenly R. Dela Peña — Portfolio

Single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. No UI or animation libraries; all effects are plain CSS.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

Everything shown on the page comes from **`src/data/portfolio.ts`**:

- `skills`: grouped stack, mirrored from the GitHub profile README
- `projects`: set `featured: true` for a full-width card, `inProgress: true` for the badge, `note` for a status line. Leave `liveUrl` / `repoUrl` `undefined` to show "Demo soon" / "Repo soon".
- `experience`: newest first. `summary` says what you built or did, `points` are your bullets, `tools` render as tags.
- `certificates`: `credentialId` and `url` add an ID and a Verify link.

### Files to add

| File | Purpose |
| --- | --- |
| `public/resume.pdf` | Target of every "Download Resume" button |
| `public/projects/*` | Project screenshots, referenced by each project's `image`. Cards crop to 16:10 (e.g. 1440×900). |

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata
    page.tsx              section order
    globals.css           theme tokens, HUD panels, glitch effects
    icon.svg              favicon
    opengraph-image.tsx   link-preview image (generated at build time)
  components/             one file per section + Navbar, icons
  data/portfolio.ts       all content
```

## Motion and accessibility

- The hero name glitches once on load; links, buttons, and project cards get a short glitch on hover/focus. Body text is never animated.
- `prefers-reduced-motion: reduce` disables every animation and transition, including smooth scrolling.
- The scanline overlay is static and very faint.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repo, and keep the detected Next.js defaults.
3. Optional: if you use a custom domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourname.dev`) so link previews use it. Otherwise Vercel's production URL is used automatically.
