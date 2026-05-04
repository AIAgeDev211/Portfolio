# Portfolio

A clean, modern portfolio for a senior software engineer. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Elegant dark/light theme with smooth toggle (`next-themes`)
- Single-source content layer — everything lives in [`lib/data.ts`](lib/data.ts)
- Fully responsive, accessible, animated on scroll
- Sections: Hero · About · Skills · Work · Experience · Contact
- Zero client-side heavy libs outside Framer Motion + Lucide icons

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

All copy lives in **`lib/data.ts`**. Edit:

- `profile` — name, role, tagline, bio, email, social links, stats
- `skills` — grouped skill lists (web / mobile / data / tooling)
- `projects` — cards shown in the Work section (mark featured with `highlight: true`)
- `experience` — timeline entries

Accent color is driven by a CSS variable in [`app/globals.css`](app/globals.css):

```css
--accent: 340 72% 55%;        /* light */
--accent: 340 80% 68%;        /* dark (under .dark) */
```

Swap the two HSL triples for a different brand color — everything that uses `accent` inherits automatically.

## Scripts

| Command | What it does |
| -------- | ------------ |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Lint with `next lint` |

## Deploy

Zero-config on **Vercel** — push the repo and import. For any Node host, `npm run build && npm start`.

## Structure

```
app/
  layout.tsx       # fonts, theme provider, metadata
  page.tsx         # section composition
  globals.css      # tokens, utilities, custom classes
components/
  navbar.tsx
  hero.tsx
  about.tsx
  skills.tsx
  projects.tsx
  experience.tsx
  contact.tsx
  footer.tsx
  section.tsx      # shared section shell
  theme-provider.tsx
  theme-toggle.tsx
lib/
  data.ts          # <-- edit me
```
