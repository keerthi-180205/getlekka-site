# BoloLekka — Website Planner (`planner.md`)

> Single source of truth for building **bololekka.com**.
> Give this whole file to every AI tool before it starts work.
> Last updated: 12 Nov 2026

---

## 0. How to use this file (team workflow)

| Role | Tool | Responsibility |
|---|---|---|
| **Founder / owner** | Keerthi | Decides, reviews, approves. Final say on copy and Kannada text. |
| **Design** | Design AI (Figma / v0 / Stitch / similar) | Brand kit, design tokens, page designs for mobile + desktop (Section 6 + 5) |
| **Build** | Antigravity | Implements the site milestone by milestone (Section 16), following this file exactly |
| **Production review** | Claude | Reviews and hardens each milestone: performance, accessibility, SEO, security, code quality (Section 18) |

**Loop for every milestone**
1. Design AI produces/updates designs for the milestone → export tokens + screenshots.
2. Antigravity builds the milestone → opens a Pull Request (PR) on GitHub.
3. Claude reviews the PR against Section 18 → lists fixes or upgrades the code.
4. Keerthi checks it on her phone → approves → merge → auto-deploy.

**Rules for every AI**
- Follow this file. If something is missing or unclear, **ask** — don't invent features, numbers, testimonials or logos.
- Small PRs, one milestone at a time.
- Never commit secrets (`.env`, API keys).
- Every claim on the site must be **true today** (see Section 2.6).

---

## 1. Project context

### 1.1 The product (what the website is selling)
**BoloLekka** is an AI assistant on **WhatsApp** that keeps a small shop's **credit book (udhaar / saala / baaki)**.
The shop owner sends **voice notes in Kannada, Hindi or English**; BoloLekka records credit and payments, tells
him who owes what, prepares payment reminders, adds up day-end sales, and sends a 9 PM summary.
No app to install, no typing.

### 1.2 Who it's for
- **Primary:** small shop owners in Karnataka — kirana, medical, tailor, salon, mobile repair. Age 25–60. Use WhatsApp
  daily, comfortable with voice notes, not comfortable with complex apps or English-heavy UIs. Mostly on **budget
  Android phones over 4G**.
- **Secondary:** mentors, incubators, investors, Meta (WhatsApp Business verification), journalists.

### 1.3 Current status (be honest about this on the site)
- Prototype in development. **Free pilot starting soon** with a few shops in Karnataka.
- WhatsApp connection is in testing. **Do not** claim it is live or that shops are using it.
- No customers, no testimonials, no usage numbers yet.

### 1.4 Website goals
1. Explain BoloLekka to a shop owner in **under 10 seconds**.
2. Collect **pilot sign-ups** (shop owners) and **contact requests** (partners/mentors).
3. Look credible to Meta, incubators and investors (Privacy Policy, Terms, About, business email).
4. Rank for searches like "udhaar app Kannada", "voice credit book WhatsApp" (long-term).

### 1.5 Success metrics
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- Largest Contentful Paint < 2.5 s on 4G mobile
- Pilot form works end to end (submission reaches email/sheet)
- Every page readable at 360 px width without horizontal scrolling

---

## 2. Brand

### 2.1 Name
- **BoloLekka** — one word, capital B and L. Never "Bolo Lekka", "BOLOLEKKA" in body text, or "Bololekka".
- Meaning: *Bolo* = "speak" (Hindi) + *Lekka* (ಲೆಕ್ಕ) = "accounts" (Kannada) → **"Speak your accounts."**

### 2.2 Taglines
| Language | Tagline |
|---|---|
| English | **Bolo, Lekka ready.** (Speak — your accounts are ready.) |
| Kannada | **ಹೇಳಿ, ಲೆಕ್ಕ ರೆಡಿ.** |
| Hindi (optional) | **बोलो, लेखा तैयार।** |

### 2.3 Voice and tone
- Warm, simple, respectful — like a helpful younger relative, not a bank.
- Short sentences. Everyday words. Use the shop owner's words: *udhaar, saala, baaki, lekka, galla*.
- Address the owner as "you" (English) / ನೀವು (Kannada).
- No jargon: never "AI-powered SaaS platform", "leverage", "seamless", "revolutionary".

### 2.4 Colors (starting point — Design AI may refine, keep contrast ≥ 4.5:1 for text)
| Token | Hex | Use |
|---|---|---|
| `brand-green` | `#1F7A4D` | Primary buttons, links, logo |
| `brand-green-dark` | `#165C3A` | Hover, footer |
| `brand-amber` | `#F2A93B` | Highlights, badges (never for body text on white) |
| `ink` | `#1D2320` | Body text |
| `muted` | `#5B625E` | Secondary text |
| `cream` | `#FBF7EF` | Page background |
| `white` | `#FFFFFF` | Cards |
| `line` | `#E6E0D4` | Borders |
| `whatsapp-bubble-out` | `#D9FDD3` | Chat mockups only |

### 2.5 Typography
- **Latin:** Inter (or Plus Jakarta Sans) — 400/600/700
- **Kannada:** Noto Sans Kannada — 400/600/700
- **Devanagari (if Hindi used):** Noto Sans Devanagari
- Self-host fonts via `next/font` (no Google Fonts network request at runtime).
- Base size 17–18 px on mobile (older users, bright shop lighting). Line height 1.6.

### 2.6 Content truth rules (non-negotiable)
- ❌ No fake testimonials, reviews, star ratings, logos of "partners", user counts or "as seen in".
- ❌ No stock photos of people presented as customers.
- ✅ Say "pilot starting soon", "planned pricing", "coming soon" where true.
- ✅ Real quotes only after a pilot shop owner gives written permission.
- ✅ Phone/chat mockups must be clearly illustrative (fictional names like "Suresh", "Raju Kirana").

### 2.7 Logo brief (for Design AI)
- Wordmark "BoloLekka" + simple icon combining a **speech bubble / mic** and a **ledger line or ₹**.
- Must work: 32×32 favicon, WhatsApp profile circle, white-on-green and green-on-cream.
- Deliver: SVG (full logo, icon only), PNG 512/192/180, favicon.ico, OG image template.

---

## 3. Site map and routes

| Route (English) | Route (Kannada) | Page | Priority |
|---|---|---|---|
| `/` | `/kn` | Home (long page, all key sections) | P0 |
| `/pricing` | `/kn/pricing` | Pricing + FAQ about cost | P1 |
| `/about` | `/kn/about` | Founder story, mission | P1 |
| `/pilot` | `/kn/pilot` | Join the free pilot (form) | P0 |
| `/contact` | `/kn/contact` | Partners, mentors, press | P1 |
| `/privacy` | `/kn/privacy` | Privacy Policy | P0 (Meta needs it) |
| `/terms` | `/kn/terms` | Terms of Service | P0 |
| `/404` | — | Friendly not-found page | P1 |

- Language switch (EN ⇄ ಕನ್ನಡ) in the header on every page; remembers choice.
- Default language: **English** at `/`, Kannada at `/kn`. (Hindi = later.)

---

## 4. Global layout

**Header (sticky, 64 px):** logo (left) · nav: How it works, Pricing, About · language switch · primary button "Join free pilot".
On mobile: logo · language switch · menu button (opens full-screen menu with large tap targets ≥ 48 px).

**Footer:** logo + tagline · links (Pricing, About, Pilot, Contact, Privacy, Terms) · email `hello@bololekka.com` ·
"Made in Karnataka 🇮🇳" · © 2026 BoloLekka.

**Floating action (mobile only):** bottom "Join free pilot" bar appears after scrolling past the hero.

---

## 5. Page content specs (draft copy — Keerthi to approve; Kannada needs native review)

### 5.1 Home `/`

**S1 — Hero**
- Eyebrow badge: `Free pilot starting soon · Karnataka`
- H1: **Your shop's credit book, on WhatsApp. Just speak.**
- KN H1: **ನಿಮ್ಮ ಅಂಗಡಿಯ ಸಾಲದ ಲೆಕ್ಕ, ಈಗ WhatsApp ಅಲ್ಲಿ. ಸುಮ್ಮನೆ ಹೇಳಿ ಸಾಕು.**
- Sub: Send a voice note in Kannada, Hindi or English. BoloLekka records credit, tracks payments and tells you who owes you money.
- KN Sub: ಕನ್ನಡ, ಹಿಂದಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್ನಲ್ಲಿ ವಾಯ್ಸ್ ಮೆಸೇಜ್ ಕಳಿಸಿ. BoloLekka ಸಾಲ ಬರೆದಿಡುತ್ತೆ, ಬಂದ ದುಡ್ಡಿನ ಲೆಕ್ಕ ಇಡುತ್ತೆ, ಯಾರು ಎಷ್ಟು ಕೊಡಬೇಕು ಅಂತ ಹೇಳುತ್ತೆ.
- Buttons: **Join the free pilot** (primary → `/pilot`) · **See how it works** (secondary → `#how`)
- Visual: animated phone mockup of a WhatsApp chat:
  1. Owner voice note 🎤 0:04 → "Suresh ne 650 ka saaman liya, Friday dega"
  2. Bot: "Saved ✅ Suresh: +₹650 · Total due ₹1,100 · by Friday [Undo]"
  3. Owner: "Kaun kaun dena hai?" → Bot: "5 customers owe you ₹3,200."
  (Animation must respect `prefers-reduced-motion`.)

**S2 — The problem** (3 cards with icons)
- 📓 **Notebooks get lost.** Pages tear, handwriting fades, and customers argue: "I already paid!"
- 💸 **Money doesn't come back.** It's easy to forget who owes what — small amounts add up to thousands.
- 😬 **Asking is awkward.** Reminding a regular customer to pay feels uncomfortable.

**S3 — How it works** `id="how"` (3 numbered steps)
1. **Say it.** Send a voice note whenever you give goods on credit or receive money. *"Ramesh ne 200 de diya."*
2. **We write it.** BoloLekka understands the note, saves the entry and replies with the new balance. Wrong? Tap Undo.
3. **You get paid.** See who owes what, send polite reminders with your UPI ID, and get a summary every night.

**S4 — Features** (grid, 2×3 desktop, 1 column mobile)
- 🎤 **Voice credit book** — Kannada, Hindi, English, or a mix. Several entries in one voice note.
- 🔔 **Payment reminders** — Ready-made reminder with amount and your UPI ID. You send it from your own WhatsApp.
- 🧮 **Day-end calculator** — Say "500, 1200, 350" — BoloLekka adds it up: ₹2,050.
- 🌙 **9 PM summary** — Today's sales, credit given, money collected and total pending.
- ↩️ **Easy to correct** — Every entry is shown back with an Undo button. Your voice note is kept as proof.
- 📱 **No new app** — Works inside WhatsApp. Nothing to install or learn.

**S5 — Languages strip**
"Speak the way you speak." Pills: ಕನ್ನಡ · हिंदी · English · Mix. Small note: more languages later.

**S6 — Trust and safety** (green band)
- We will **never** ask for your UPI PIN, OTP or bank password.
- We only need your UPI ID — to show it in your reminders.
- BoloLekka keeps records. It **never moves your money**.
- Your data is yours. Ask us to delete it any time.

**S7 — Pricing teaser**
"Free during the pilot." Planned after pilot: Basic ₹149/month · Pro ₹299/month (label: *planned, may change*). Link → `/pricing`.

**S8 — FAQ** (accordion, 6 items)
1. *Do I need to install an app?* — No. BoloLekka works inside WhatsApp.
2. *Which languages work?* — Kannada, Hindi and English, including mixed sentences.
3. *What if it mishears me?* — Every entry is shown back to you. Tap Undo or say the correction.
4. *Is my data safe?* — We never ask for PINs or OTPs, and you can ask us to delete your data any time. See our Privacy Policy.
5. *Will my customers get messages from BoloLekka?* — No. Reminders are sent by you, from your own WhatsApp.
6. *How much does it cost?* — Free during the pilot. Planned plans start at ₹149/month.

**S9 — Final CTA** (green card)
H2: **Be one of the first shops to try BoloLekka.** Button: Join the free pilot.

### 5.2 Pricing `/pricing`
- Banner: "Free for all pilot shops."
- Two plan cards (labelled *Planned pricing after pilot — may change*):
  - **Basic — ₹149/month:** up to 300 entries/month, voice credit book, reminders, day-end calculator, 9 PM summary.
  - **Pro — ₹299/month:** unlimited entries, everything in Basic, priority support.
- First month free after pilot. No card needed for the pilot.
- FAQ: What counts as an entry? Can I cancel anytime? Is GST included? (→ "Details will be shared before paid plans start.")

### 5.3 About `/about`
- Why we're building BoloLekka (founder's own words — Keerthi to write 3–5 sentences; placeholder until then).
- Mission: "Help every small shop keep its accounts by simply speaking."
- Built in Karnataka. Founder name + photo **only if Keerthi provides them**.

### 5.4 Pilot sign-up `/pilot`
Form fields:
| Field | Type | Required | Notes |
|---|---|---|---|
| Your name | text | ✅ | |
| Shop name | text | ✅ | |
| Shop type | select | ✅ | Kirana, Medical, Tailor, Salon, Mobile repair, Other |
| Area / city | text | ✅ | |
| WhatsApp number | tel | ✅ | +91, 10 digits, validate |
| Preferred language | radio | ✅ | ಕನ್ನಡ / हिंदी / English |
| How do you track credit today? | select | ❌ | Notebook, Memory, App, Don't give credit |
| Consent checkbox | checkbox | ✅ | "I agree BoloLekka may contact me on WhatsApp/phone about the pilot. See Privacy Policy." |

- Success state: "Thank you! We'll contact you on WhatsApp within 3 days." (Kannada too.)
- Spam protection: honeypot field + provider's built-in spam filter. No CAPTCHA in v1 (hurts older users).
- **Never** ask for UPI ID, bank details, Aadhaar or PAN on the website.

### 5.5 Contact `/contact`
Short form (name, email, organisation, message) + `hello@bololekka.com`. For mentors, incubators, partners, press.

### 5.6 Privacy Policy `/privacy` (outline — get a lawyer/mentor to review before launch)
1. Who we are (BoloLekka, contact email)
2. What we collect — website: form fields, basic cookieless analytics. Product: shop details, UPI ID, customer names/numbers the owner adds, entries, voice notes.
3. Why we collect it (run the service, contact pilot shops)
4. Where it's stored and for how long
5. Who we share it with (service providers: WhatsApp/Meta, speech-to-text, AI model provider, hosting) — no selling of data
6. Your rights (access, correction, deletion — email us); India's Digital Personal Data Protection Act, 2023
7. Children (not for under-18s)
8. Security measures
9. Changes to this policy
10. Contact / grievance contact

### 5.7 Terms `/terms` (outline — review before launch)
Service description · pilot is "as is" · owner responsible for checking entries · BoloLekka keeps records only, does not move money ·
acceptable use · WhatsApp terms apply · limitation of liability · termination · governing law: India (Karnataka) · contact.

### 5.8 404
"This page went out for chai ☕" + buttons Home / Join pilot.

---

## 6. Design system (for Design AI)

### 6.1 Deliverables
- Brand kit (logo set, colors, type) — Section 2
- **Design tokens** as JSON or Tailwind config (colors, font sizes, spacing, radius, shadows)
- Page designs: Home, Pricing, Pilot, About, Contact, Privacy template, 404 — **mobile 360 px first**, then desktop 1280 px
- Component sheet with all states (default, hover, focus, active, disabled, error, loading)
- OG image template 1200×630 (EN + KN)

### 6.2 Scales
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96 px
- Radius: 8 (inputs), 12 (cards), 16–24 (hero/phone), full (pills)
- Type scale (mobile → desktop): H1 32→48, H2 26→36, H3 20→24, body 17→18, small 14
- Breakpoints: 360 (base), 640, 768, 1024, 1280
- Max content width: 1120 px

### 6.3 Components
Header, MobileMenu, LanguageSwitch, Button (primary/secondary/ghost), Badge, SectionHeading, ProblemCard, StepCard,
FeatureCard, LanguagePills, TrustBand, PricingCard, FAQAccordion, PhoneChatMockup (animated), CTASection,
Form inputs (text, tel, select, radio, checkbox, textarea), FormSuccess, Footer, StickyMobileCTA, 404 illustration.

### 6.4 Design rules
- Big tap targets (≥ 48 px), high contrast, no text over busy images.
- Icons: one icon set (e.g. Lucide) + emoji only where shown in this spec.
- Illustrations over photos. Flat, warm, local (shop counters, notebooks, phones).
- Motion: subtle (fade/slide 150–300 ms); nothing that blocks reading; respect reduced motion.
- Kannada text is ~20–30% longer than English — designs must not break with longer strings.

---

## 7. Tech stack

| Area | Choice | Why |
|---|---|---|
| Framework | **Next.js (latest stable, App Router) + TypeScript (strict)** | Industry standard, SEO-friendly |
| Output | **Static export** (`output: "export"`) | Fast, cheap, secure — no server needed for a marketing site |
| Styling | **Tailwind CSS** | Matches design tokens 1:1 |
| i18n | **next-intl** (EN + KN, static params per locale) | Clean locale routing |
| Icons | lucide-react | Light, consistent |
| Forms | **Formspree** (or Tally embed) | No backend; spam filter included. Endpoint ID in env var. |
| Analytics | **Cloudflare Web Analytics** | Free, cookieless → no cookie banner needed |
| Hosting | **Cloudflare Pages** (free plan allows business sites) | Free SSL, CDN in India, auto-deploy from GitHub |
| Domain | `bololekka.com` (Namecheap) → nameservers moved to Cloudflare | One place for DNS + hosting |
| Email | Zoho Mail (free plan) → `hello@bololekka.com` | Business email |
| Code quality | ESLint, Prettier, TypeScript strict | |
| Tests | Playwright smoke tests (pages load, form validates, language switch) | |
| CI | GitHub Actions: lint → typecheck → build → Playwright on every PR | |

> Notes:
> - Vercel's free Hobby plan is for **non-commercial** use only, and GitHub Pages' terms also exclude online-business
>   hosting, so neither is used for this business site. (The temporary GitHub Pages site should be retired after launch.)
> - Cloudflare is merging Pages into **Workers (static assets)**. If the dashboard offers "Workers" instead of "Pages",
>   deploy the same static `out/` folder there — nothing else in this plan changes.

---

## 8. Folder structure

```
bololekka-site/
├── planner.md                 ← this file
├── README.md
├── next.config.ts             ← output: "export", images.unoptimized: true
├── tailwind.config.ts         ← design tokens
├── messages/
│   ├── en.json                ← all English strings
│   └── kn.json                ← all Kannada strings
├── public/
│   ├── logo.svg, icon.svg, favicon.ico, apple-touch-icon.png
│   ├── og/og-en.png, og/og-kn.png
│   ├── _headers               ← Cloudflare security headers (Section 13)
│   └── _redirects             ← www → apex, old paths
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx              ← Home
│   │   │   ├── pricing/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── pilot/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   └── terms/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/            ← one file per component in Section 6.3
│   ├── lib/                   ← i18n config, form helpers, constants
│   └── styles/globals.css
├── tests/                     ← Playwright
└── .github/workflows/ci.yml
```

**Rule:** no user-facing text hard-coded in components — everything comes from `messages/*.json`.

---

## 9. Internationalisation (EN + ಕನ್ನಡ)
- Locales: `en` (default, served at `/`), `kn` (served at `/kn`).
- `<html lang>` set per locale (`en-IN`, `kn-IN`).
- `hreflang` alternate links on every page (`en-IN`, `kn-IN`, `x-default`).
- Kannada strings reviewed by a native speaker (Keerthi) before launch — machine translation not allowed as final.
- Numbers: Indian format (₹1,100; ₹1,00,000). Currency always "₹".

---

## 10. SEO
- Unique `<title>` (≤ 60 chars) and meta description (≤ 155) per page and locale. Example Home:
  - Title: `BoloLekka — Your shop's credit book on WhatsApp`
  - Description: `Send a voice note in Kannada, Hindi or English. BoloLekka records udhaar, tracks payments and tells you who owes you money.`
- Open Graph + Twitter cards with locale-specific OG image (WhatsApp shares show a proper preview).
- `sitemap.xml` and `robots.txt` generated at build.
- JSON-LD: `Organization` (name, url, logo, email) + `FAQPage` on Home.
- Canonical URLs; one H1 per page; semantic headings.
- Google Search Console + Bing Webmaster verified after launch; submit sitemap.

---

## 11. Accessibility (target WCAG 2.2 AA)
- Text contrast ≥ 4.5:1; large text ≥ 3:1.
- Every interactive element reachable by keyboard with a visible focus ring.
- Form fields have labels, helpful error messages, `aria-describedby` for errors.
- Images have `alt`; decorative ones `alt=""`.
- Phone mockup animation: pause/stop available and respects `prefers-reduced-motion`.
- Language switch announces language names in their own script ("ಕನ್ನಡ", "English").

---

## 12. Performance budget
- Total JS on Home ≤ 120 KB gzipped; no heavy animation libraries (CSS animations preferred).
- Images: SVG for illustrations; WebP/AVIF for any raster, explicit width/height.
- Fonts: subset, `font-display: swap`, preload only the main weight.
- No third-party scripts except Cloudflare Web Analytics (and Formspree only on form pages).
- Lighthouse mobile ≥ 90 on every page before merge.

---

## 13. Security and privacy
`public/_headers` (Cloudflare Pages):
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' https://static.cloudflareinsights.com; connect-src 'self' https://formspree.io https://cloudflareinsights.com; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self'; form-action 'self' https://formspree.io; frame-ancestors 'none'
```
(Claude will finalise the CSP to match the actual build.)
- HTTPS only; `www.bololekka.com` → `bololekka.com` (301).
- Form endpoint ID in environment variable, not hard-coded.
- Collect the minimum personal data; consent checkbox on forms; link to Privacy Policy.
- Dependabot enabled; `npm audit` clean (no high/critical) before launch.

---

## 14. Integrations
- **Pilot form** → Formspree → email to `hello@bololekka.com` (+ optional Google Sheet via Formspree plugin or Zapier later).
- **Contact form** → Formspree (separate form ID).
- **WhatsApp click-to-chat** button: **hidden until the BoloLekka WhatsApp number is live**. Then: `https://wa.me/<number>?text=Hi%20BoloLekka`.
- **Analytics:** Cloudflare Web Analytics snippet (or automatic via Cloudflare Pages setting).

---

## 15. Out of scope for v1
Blog, Hindi version, login/dashboard, payments, chatbot widget, demo video (slot reserved in Hero/How-it-works, filled after prototype demo is recorded), testimonials (after pilot, with permission).

---

## 16. Build milestones

Each milestone = one PR. ✅ = acceptance criteria that must pass before merge.

### M0 — Setup (Antigravity)
- [ ] Create GitHub repo `bololekka-site` (private), add this `planner.md`
- [ ] Next.js + TypeScript strict + Tailwind + ESLint + Prettier; `output: "export"`
- [ ] next-intl with `en`, `kn`; `messages/en.json`, `messages/kn.json` skeletons
- [ ] GitHub Actions CI: lint, typecheck, build
- ✅ `npm run build` produces static `out/` folder; CI green

### M1 — Design system (Design AI → Antigravity)
- [ ] Design AI delivers tokens + component sheet + logo set
- [ ] Tokens in `tailwind.config.ts`; fonts via `next/font` (Inter + Noto Sans Kannada)
- [ ] Components: Button, Badge, SectionHeading, Card variants, LanguageSwitch, Header, MobileMenu, Footer
- ✅ A `/dev/components` page (excluded from sitemap, removed before launch) shows all components in EN + KN

### M2 — Home page
- [ ] Sections S1–S9 from Section 5.1, all text from messages files
- [ ] PhoneChatMockup with CSS animation + reduced-motion support
- [ ] StickyMobileCTA
- ✅ Looks right at 360, 768, 1280 px; Lighthouse mobile ≥ 90 on all four categories

### M3 — Pilot + Contact forms
- [ ] `/pilot` and `/contact` with validation (client side), honeypot, consent checkbox
- [ ] Formspree integration via env var; success + error states
- ✅ Real test submission reaches `hello@bololekka.com`; errors readable by screen reader

### M4 — Pricing, About, 404
- ✅ All content from Section 5; no fake data; Kannada versions present

### M5 — Legal pages
- [ ] Privacy + Terms from outlines (Section 5.6, 5.7), clearly dated
- ✅ Reviewed by Keerthi (and ideally a mentor/lawyer); linked from footer and forms

### M6 — Kannada review + SEO
- [ ] Native review of every `kn.json` string
- [ ] Metadata, OG images, sitemap, robots, hreflang, JSON-LD
- ✅ Social share preview correct on WhatsApp (test with a real share); sitemap lists all locale pages

### M7 — Production review (Claude) + launch
- [ ] Claude review against Section 18; fixes merged
- [ ] Cloudflare Pages connected to GitHub; custom domain + www redirect; `_headers` live
- [ ] Cloudflare Web Analytics on; Search Console verified; sitemap submitted
- [ ] Remove `/dev/components`
- ✅ `https://bololekka.com` live with HTTPS; securityheaders.com grade A; Lighthouse ≥ 90 on live URL

---

## 17. Deployment and domain steps

1. **Buy** `bololekka.com` on Namecheap (privacy ON, auto-renew ON, 2FA on account).
2. **Cloudflare account** → Add site `bololekka.com` (free plan) → Cloudflare shows 2 nameservers.
3. **Namecheap** → Domain List → Manage → Nameservers → *Custom DNS* → paste Cloudflare's 2 nameservers → save. (Can take up to 24 h.)
4. **Cloudflare Pages** → Create project → connect GitHub repo → framework preset *Next.js (Static HTML Export)* → build command `npm run build` → output directory `out`.
5. Pages project → **Custom domains** → add `bololekka.com` and `www.bololekka.com` → Cloudflare creates DNS records automatically.
6. Add `_redirects`: `https://www.bololekka.com/* https://bololekka.com/:splat 301`.
7. **Email (Zoho Mail free):** add the MX/SPF/DKIM records Zoho shows into Cloudflare DNS; add DMARC record `v=DMARC1; p=quarantine; rua=mailto:hello@bololekka.com`.
8. Every merge to `main` auto-deploys; every PR gets a preview URL for review.

---

## 18. Production-readiness checklist (Claude's review)

**Code quality**
- [ ] TypeScript strict, no `any`, no unused code, ESLint clean
- [ ] Components small and reusable; no hard-coded strings; consistent naming

**Performance**
- [ ] Lighthouse mobile ≥ 90 (Perf), LCP < 2.5 s, CLS < 0.1, JS budget met
- [ ] Fonts subset + preloaded correctly; images sized; no layout shift from fonts

**Accessibility**
- [ ] axe/Lighthouse a11y ≥ 95; keyboard-only walkthrough; screen reader check of form errors
- [ ] Contrast verified for every color pair used

**SEO**
- [ ] Titles/descriptions per page per locale; canonical; hreflang; sitemap; robots; JSON-LD valid (Rich Results Test)

**Security & privacy**
- [ ] Security headers + CSP working (no console CSP errors); HTTPS + HSTS; www redirect
- [ ] No secrets in repo/history; `npm audit` clean; Dependabot on
- [ ] Forms: honeypot, consent, minimum data, privacy link

**Content**
- [ ] No fake testimonials/numbers; "pilot"/"planned" labels present; Kannada reviewed
- [ ] All links work (no 404s); email address correct

**Ops**
- [ ] CI green (lint, typecheck, build, Playwright); preview deploys working
- [ ] Analytics receiving data; Search Console verified

---

## 19. Prompts for each AI

### 19.1 Design AI — kickoff prompt
```
You are designing the marketing website for BoloLekka, a WhatsApp voice assistant that keeps
small Indian shops' credit books. Read the attached planner.md fully, especially Sections 1, 2, 5 and 6.
Audience: kirana/medical/tailor shop owners in Karnataka, aged 25–60, on budget Android phones.
Design mobile-first (360 px), then desktop (1280 px). Warm, simple, trustworthy; green + cream + amber.
Deliver: logo set (Section 2.7), design tokens (Tailwind-compatible), component sheet with all states,
and full designs for Home, Pricing, Pilot, About, Contact, Privacy template, 404 — in English and Kannada.
Rules: no fake testimonials, no stock photos of people, big tap targets, WCAG AA contrast,
Kannada text is ~30% longer — layouts must not break.
```

### 19.2 Antigravity — kickoff prompt
```
You are building bololekka.com. Read planner.md fully before writing code and follow it exactly.
Work one milestone at a time from Section 16, starting with M0. For each milestone:
create a branch, implement only that milestone, make CI pass, and summarise what you did and
anything you were unsure about. Never invent content, numbers, testimonials or features —
use the copy in Section 5 and the messages files. Never commit secrets. Ask me when something
in planner.md is unclear or conflicts with the design files.
```

### 19.3 Claude — review request template
```
Production review for milestone M<n> of bololekka.com.
Attached: planner.md, the PR diff (or repo zip), Lighthouse report, screenshots (360 / 1280 px).
Review against Section 18. List issues by severity (must-fix / should-fix / nice-to-have),
then give the upgraded code for the must-fix items.
```

---

## 20. Open items (owner: Keerthi)
- [ ] Buy domain `bololekka.com` (in cart)
- [ ] IP India trademark search: BOLOLEKKA (wordmark + phonetic, classes 9, 35, 36, 42)
- [ ] Social handles `@bololekka` (Instagram, X, LinkedIn, YouTube)
- [ ] Zoho Mail: `hello@bololekka.com`
- [ ] Write the About story (3–5 sentences) and decide on founder photo
- [ ] Approve all English copy; review all Kannada copy
- [ ] Choose form provider (Formspree vs Tally) — default Formspree
- [ ] Update old GitHub Pages site to redirect/link to bololekka.com after launch
- [ ] Update Meta business details (website + email) after launch

