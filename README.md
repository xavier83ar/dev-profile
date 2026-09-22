# dev-profile

My developer profile, and the CV it generates.

Live at **https://xavier83ar.github.io/dev-profile/**

All content lives in [`src/data/profile.ts`](src/data/profile.ts). The site
renders it as a profile page; the same data prints to a single-column,
ATS-readable PDF. Components render the data — they never contain copy.

## Commands

```bash
npm run dev         # http://localhost:5173
npm run build       # typecheck, then static build to dist/
npm run pdf         # build, then render cv.pdf with headless Chrome
npm run pdf:verify  # print what a parser extracts from the PDF
npm run typecheck   # vue-tsc --noEmit
```

## Structure

Two real HTML entry points rather than a single-page app with a router:

```
index.html           → src/ProfilePage.vue    the CV
projects/index.html  → src/ProjectsPage.vue   the portfolio
```

Clean URLs on GitHub Pages with no SPA-fallback trick, and the PDF pipeline
points at `index.html` alone — so the portfolio is excluded from the CV
structurally, not by a print rule that can rot.

## How the PDF works

`npm run pdf` builds the site, serves `dist/`, and drives headless Chrome's
`--print-to-pdf` over the profile page. The browser's print pipeline emits real,
selectable text, which is what an applicant tracking system parses. Client-side
PDF libraries rasterise the DOM into an image that most parsers read as an empty
document.

The output is written to `dist/cv.pdf` (deployed with the build) and
`public/cv.pdf` (committed, so a plain `vite build` still ships a CV). The
Download button links to that file rather than calling `window.print()`, so a
visitor gets the exact PDF that was built and checked.

### The print rules, and why each exists

In [`src/styles/main.css`](src/styles/main.css), under `@media print`. Every one
came from reading `pdftotext` output, not from guessing:

| Rule | Why |
| --- | --- |
| `.print-flat` — single column | Multi-column layouts extract out of reading order |
| `.print-stack` — collapse grids | A two-column grid interleaves its columns in extracted text |
| No letter-spacing on `h2` | Wide tracking made `EXPERIENCE` extract as `E XPERIENCE` |
| `.print-row` — `Label: a, b, c` | Chip grids extract scrambled; commas read as keyword delimiters |
| `.print-entry` — collapse entries | Education as one flowing line rather than four short ones |
| `.print-hide` | Tagline and per-role stack lines: duplication on paper |
| `.print-keep` on short blocks | Stops an entry splitting across a page |
| *No* `.print-keep` on long roles | Forcing a seven-bullet role whole left ~70pt dead at a page foot |
| `.print-url` | A printed CV cannot be clicked, so URLs are spelled out |
| `.no-print` | Drops nav, theme toggle and buttons |

Verify after any change:

```bash
npm run pdf && npm run pdf:verify
```

If that output reads cleanly top to bottom, a parser will read it too.

## Deployment

Pushing to `main` builds, regenerates the PDF and publishes to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Enable it once
under **Settings → Pages → Source: GitHub Actions**.

`base` in [`vite.config.ts`](vite.config.ts) is `/dev-profile/` and must match
the repository name, or assets 404. It is also duplicated as `BASE` in
[`scripts/generate-pdf.mjs`](scripts/generate-pdf.mjs), which serves the build
the same way Pages does.

## Why Vue, when the CV sells Next.js

Because this is a two-page static site. It has no server, no data fetching, no
routing and no authentication — every problem Next.js is good at solving is
absent here. Reaching for it would have said something worse about my judgement
than Vue does about my React experience. And because I love Vue.

## Stack

Vue 3 · TypeScript · Vite · Tailwind CSS v4. No runtime dependencies beyond Vue.
