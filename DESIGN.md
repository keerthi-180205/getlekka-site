---
name: Indian Fintech Minimalist
colors:
  surface: '#fbf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ed'
  surface-container: '#f0eee7'
  surface-container-high: '#eae8e1'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#404944'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1ea'
  outline: '#717973'
  outline-variant: '#c0c9c2'
  surface-tint: '#366852'
  primary: '#003423'
  on-primary: '#ffffff'
  primary-container: '#174b37'
  on-primary-container: '#86baa0'
  inverse-primary: '#9dd2b7'
  secondary: '#3d6655'
  on-secondary: '#ffffff'
  secondary-container: '#bfedd6'
  on-secondary-container: '#436d5b'
  tertiary: '#3d2800'
  on-tertiary: '#ffffff'
  tertiary-container: '#593d00'
  on-tertiary-container: '#d7a750'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b9eed3'
  primary-fixed-dim: '#9dd2b7'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#1c503b'
  secondary-fixed: '#bfedd6'
  secondary-fixed-dim: '#a4d0bb'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#254e3e'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#f1be65'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Noto Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Noto Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Noto Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system serves small business owners, traditional merchants (*dukaandars*), and emerging enterprises across India managing daily bookkeeping (*vyapar*) through automated, conversational WhatsApp interactions. The interface communicates institutional credibility, fiscal security, and intuitive simplicity. It balances the dignity of a heritage banking institution with the effortless immediacy of modern conversational software.

The visual direction merges **Warm Elegant Minimalism** with subtle **Tactile Precision**. The experience avoids utilitarian coldness, using an ivory and deep forest green base accented by refined metallic gold touches. Micro-interactions and layouts mirror conversational clarity, stripping away superfluous finance jargon in favor of scannable ledger balances, transparent auditable transaction feeds, and accessible regional messaging. High contrast ensures readability in varied ambient lighting conditions, from sunlit retail counters to busy wholesale markets.

## Colors

The palette establishes an authoritative, trustworthy environment grounded in botanical deep greens, warm natural neutrals, and understated gold accents:

- **Primary (`#174B37`) & Secondary (`#103B2C`):** Deep Forest Green serves as the anchor for primary interactions, headers, key metric states, and brand framing. Dark Green provides depth in pressed states, elevated cards, and high-emphasis focal elements.
- **Tertiary / Accent (`#C99A45`):** Muted Gold highlights premium statuses, reconciliation confirmations, badge highlights, and subtle borders.
- **Backgrounds:** The primary background uses Warm Ivory (`#F8F6EF`) to prevent eye fatigue. Soft Sage (`#E8EEE8`) provides secondary compartmentalization for sidebars, stat rails, and inactive states. Pure White (`#FFFFFF`) is reserved for foreground cards and ledger rows to maintain high contrast.
- **Typography:** Charcoal (`#252B27`) drives primary titles, values, and ledger amounts. Muted Grey (`#68736C`) handles metadata, timestamps, and secondary descriptions.
- **Functional & Conversational Tokens:** 
  - WhatsApp Inbound Bubble: `#D9FDD3` (subtly bordered with `#BEE3B8` for crispness).
  - Success State: `#267A50` for verified deposits and cleared dues.
  - Error State: `#B84040` for overdue collections, sync failures, or payment discrepancies.
  - Neutral Outlines: `#E6E3D9` ensures soft structural containment across light surfaces.

## Typography

Typography prioritizes high legibility and natural multilingual pairing:

- **Inter** manages numeric ledgers, English metrics, administrative headers, and conversational transcriptions. Tabular numbers (`tnum`) should be enabled across all data grids, receipt views, and balance summaries to ensure clear alignment of currency values.
- **Noto Sans (with complete regional Indic fallbacks, specifically Noto Sans Kannada)** renders multilingual micro-labels, quick-reply tags, and regional vernacular toggles. Vertical alignment offsets must be standardized across both fonts to eliminate visual baseline shifts in mixed-script strings.
- Currency symbols (₹) must be set at equal baseline height and matched font weight to avoid visual dissonance in transactional feeds.

## Layout & Spacing

The layout adapts across conversational mobile workflows and expansive tablet/desktop administrative dashboards:

- **Mobile (Base to 599px):** 4-column fluid layout with an edge margin of `margin` (16px) and gutters of `gutter` (16px). Content is structured sequentially: pinned quick balance, conversational feed, and sticky quick-action prompt.
- **Tablet (600px to 1023px):** 8-column fluid layout with `1.5rem` margins. The WhatsApp chat transcript and dynamic accounting book sit side-by-side or in a collapsible master-detail split.
- **Desktop (1024px and up):** 12-column fixed-max layout capped at 1280px, centered with `margin-desktop` (40px) outer canvas margins and `gutter-desktop` (24px) gutters. The desktop view separates navigational telemetry, live WhatsApp audit logs, and analytical accounting widgets.
- **Rhythm:** All component padding, gaps, and structural dividers strictly follow the 4px baseline rhythm (`space-xs` through `space-xl`).

## Elevation & Depth

Visual hierarchy uses tactile surface differentiation, crisp boundaries, and soft ambient shadows:

- **Surface Layering:** The foundational layer rests on Warm Ivory (`#F8F6EF`). Neutral panels leverage Soft Sage (`#E8EEE8`). Interactive surfaces and distinct content cards adopt Pure White (`#FFFFFF`), outlined by a 1px border of Soft Beige (`#E6E3D9`).
- **Shadow Behavior:** Shadows avoid synthetic grey washes, using a low-opacity Deep Forest Green tint to create warm, natural depth:
  - *Resting Card Elevation:* `0 2px 8px rgba(16, 59, 44, 0.04), 0 1px 2px rgba(16, 59, 44, 0.02)`.
  - *Floating / Hover Action Elevation:* `0 8px 24px rgba(16, 59, 44, 0.08), 0 2px 6px rgba(16, 59, 44, 0.04)`.
  - *Modals & Overlays:* `0 16px 40px rgba(16, 59, 44, 0.12), 0 4px 12px rgba(16, 59, 44, 0.06)`.
- **Micro-Accents:** Premium badges, active ledger filters, and special verification checkmarks use an ultra-fine 1px border or hairline glow in Muted Gold (`#C99A45`).

## Shapes

The interface balances approachability with structured utility:

- **Corner Radii (`roundedness: 2`):** Base components (inputs, interactive chips, list items, WhatsApp message bubbles) utilize a consistent 0.5rem (8px) to 1rem (16px) radius.
- **Cards & Panels (`rounded-lg` / `rounded-xl`):** Primary white containers, transaction sheets, and balance summary cards range between 14px and 20px (0.875rem to 1.25rem), yielding soft, tactile containers.
- **Pill Badges:** Financial status tags (*Jama/Udhar*, Paid, Pending) use full pill shapes (`9999px`) to distinguish them from standard structural cards.

## Components

### Buttons & Interactive Controls
- **Primary Button:** Background Deep Forest Green (`#174B37`), text Pure White (`#FFFFFF`), 16px rounded corners, padding `space-sm` vertical by `space-lg` horizontal. Active state darkens to Dark Green (`#103B2C`).
- **Secondary Button:** Background Soft Sage (`#E8EEE8`), text Deep Forest Green (`#174B37`), border 1px solid Soft Beige (`#E6E3D9`).
- **Premium Action:** Background Muted Gold (`#C99A45`), text Pure White, with an ambient warm shadow for settlement reconciliation.

### WhatsApp Message & Ledger Cards
- **Incoming WhatsApp Message:** Background `#D9FDD3`, border 1px solid `#CCEEC6`, 16px radius with bottom-left anchor notch. Text formatted in Charcoal (`#252B27`).
- **System Audio/Text Extraction Card:** Background Pure White (`#FFFFFF`), border 1px solid Soft Beige (`#E6E3D9`), with an amber audio waveform or text chip identifying parsed AI data (*Amount*, *Customer*, *Category*).
- **Balance & Transaction Cards:** Pure White ground, rounded to 18px. Credits (*Jama*) display Success Green (`#267A50`); Debits/Dues (*Udhar*) display Error Red (`#B84040`).

### Chips & Filter Tags
- **Filter Chips:** 8px height padding, pill-shaped. Inactive chips use Warm Ivory or Pure White with `#E6E3D9` border and Muted Grey text. Active chips invert to Deep Forest Green with white text.

### Form Inputs & Voice Triggers
- **Text & Numeric Inputs:** Pure White field, 1px border in Soft Beige (`#E6E3D9`), transitioning to a 1.5px Deep Forest Green outline on focus. Labels rendered in Charcoal with optional regional translation in Noto Sans beneath.
- **WhatsApp Mic / AI Input Bar:** Sticky pill container, Soft Sage background, Deep Forest Green mic icon with Gold accent ping indicator.

### Lists, Checkboxes & Radio Elements
- **Ledger List Items:** Separated by 1px horizontal borders in Soft Beige (`#E6E3D9`). Ripple states activate to Soft Sage (`#E8EEE8`) on tap.
- **Selection Controls:** Deep Forest Green fill on selection with Pure White glyphs; unchecked states show a 1.5px Soft Beige border on white.