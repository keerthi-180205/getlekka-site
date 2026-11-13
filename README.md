# GetLekka — website

Bilingual (English + ಕನ್ನಡ) marketing website for **GetLekka**, a WhatsApp voice credit-book assistant for small shops in Karnataka. A shop owner sends a voice note in Kannada, Hindi or English; GetLekka records the credit and payments, shows who owes what, and prepares payment reminders.

> **Status: prototype.** A free pilot is *starting soon*. The product is in testing, so the site must not claim that shops are using it. See [Content rules](#content-rules).

This repo is the website only (a static export). The WhatsApp bot itself lives elsewhere.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript (strict), `output: "export"` |
| Styling | Tailwind CSS 3 (design tokens in `tailwind.config.ts`) |
| i18n | `next-intl` — English at `/`, Kannada at `/kn/` |
| Icons | `lucide-react` |
| Fonts | `next/font` — Inter, Plus Jakarta Sans, Noto Sans Kannada (self-hosted at build) |
| Forms | Formspree (no backend; endpoint ids come from environment variables) |
| Hosting | Static files in `out/` — planned: Cloudflare Pages |

No runtime server, no database, no third-party scripts.

## Getting started

Requires **Node 22** (the version CI uses) and npm.

```bash
npm ci
cp .env.example .env.local   # then fill in the Formspree ids (see below)
npm run dev
```

Open <http://localhost:3000>. In dev, English lives at `/en/` (the root `/` redirects there); Kannada is at `/kn/`. In the production build English is served at `/`.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Static export to `out/`, then copies `out/en` to `out/` so English is the default at `/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | `next lint` *(ESLint config not added yet — see [Roadmap](#roadmap))* |
| `npm run format` | Prettier |

To preview the production build, serve the folder — **do not open `out/index.html` by double-clicking**, because assets load from root-absolute paths (`/_next/...`) and will look broken:

```bash
npm run build && npx serve out
```

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local`.

| Variable | Used by |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_PILOT_ID` | Pilot sign-up form (`/pilot/`) |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` | Contact form (`/contact/`) |

They are inlined at **build time**, so set them in your hosting dashboard *before* the build. If one is missing, that form shows a "couldn't send" message with the contact email — it never shows a fake "thank you". Never commit real values or `.env` files.

## Project structure

```
messages/          en.json, kn.json — ALL user-facing text
public/            logo + icon files, _headers (security headers), _redirects (www → apex)
scripts/           copy-en-to-root.mjs (post-build step)
src/
  app/             routes: [locale]/{page,pricing,about,pilot,contact,privacy,terms}, 404, sitemap, robots
  components/      sections (Hero, Problem, HowItWorks, …), forms, ui/ (Button, Logo, SectionHeading)
  i18n/            next-intl routing + request config
  lib/             seo helpers, URL helpers (paths.ts), Formspree client (forms.ts)
  styles/          globals.css (ledger-paper utilities, chat animation)
planner.md         product + website spec (single source of truth)
DESIGN.md          design tokens and component rules
```

### Editing text (i18n)

- All visible text is in `messages/en.json` and `messages/kn.json`. **Don't hard-code strings in components.**
- Both files must keep identical keys. Add a key to both when you add one.
- Kannada runs ~20–30% longer than English; check layouts in both languages.
- Kannada must be reviewed by a native speaker before launch.

### Changing the contact email

The address appears in the message files (`common.email` and a few sentences in the legal and form text). It is currently a temporary Gmail address. When the domain is ready, replace it with `hello@getlekka.com` everywhere:

```bash
grep -rn "getlekka.hello@gmail.com" messages/
```

## Deploy

The site is a static export, so any static host works.

**Cloudflare Pages (recommended — free and allows commercial sites)**

- Build command: `npm run build`
- Output directory: `out`
- Node version: 22
- Environment variables: the two `NEXT_PUBLIC_FORMSPREE_*` ids above

`public/_headers` (security headers + CSP) and `public/_redirects` are in Cloudflare's format. Other hosts ignore them and need their own header/redirect config.

> Vercel's free Hobby plan is for non-commercial use only; check its current terms before using it for the real business site.

When you add a custom domain, update `SITE_URL` in `src/lib/seo.ts` (it drives canonical URLs, the sitemap and structured data).

## Content rules

This is a business site for a product that is not live yet. Every claim must be true today:

- No fake testimonials, ratings, user counts, "trusted by" or partner logos.
- Say "pilot starting soon" and "planned pricing (may change)", not "live" or "now available".
- Chat mockups are illustrative and labelled as such.
- Never ask for UPI PIN, OTP, bank details, Aadhaar or PAN anywhere on the site.

Full details are in [`planner.md`](planner.md).

## Accessibility & performance targets

WCAG 2.2 AA; 48 px tap targets; no horizontal scroll at 360 px; respects `prefers-reduced-motion`; Lighthouse mobile ≥ 90 on every page; no heavy animation libraries (CSS only).

## Roadmap

Open items before launch:

- [ ] Add an ESLint config (`npm run lint` and CI currently have none)
- [ ] CI: trigger on the default branch name, add Playwright smoke tests
- [ ] OG / Twitter share images (1200×630, EN + KN)
- [ ] Remove the `/dev/components` showcase page
- [ ] Run Lighthouse on every page; trim home-page JS toward the 120 kB gzip budget
- [ ] Native review of all Kannada text; legal review of Privacy Policy and Terms
- [ ] Trademark and app-store name search for "GetLekka"
- [ ] Buy the domain, set up `hello@` email, update `SITE_URL`
- [ ] Cloudflare Web Analytics, Search Console, Dependabot, `npm audit` clean

## License

Private repository. All rights reserved. © 2026 GetLekka.
# getlekka-site
