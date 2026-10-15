# Napster Design System

> ⚠️ **All numbers, metrics, prices, and stats in this repo are illustrative
> placeholders.** They are example content used to demonstrate layouts (slide
> templates, one-pagers, UI kits) and do **not** represent real Napster
> figures. Replace with real data when adapting these templates internally.

AI-ingestible design system for Napster — the AI companion platform.
Dark cinematic identity, circular visual backbone, Napster Pink accent.

> *Twenty-six years ago, we democratized music. Now we're democratizing expertise.*

This system is **production-grade**, not aspirational. Every token was
verified against live `napster.com` (April 2026) and cross-referenced
with Napster's internal brand definition work.

---

## How to use

Point your AI design tool (Claude Design or similar) at this repo as a
design system source, or clone it locally and import `colors_and_type.css`.
Start with `SKILL.md` for the short version of the rules; `README.md` for
the full content/visual fundamentals.

## Sources

This design system was assembled from internal Napster brand materials,
the live `napster.com` site (computed-style audit, April 2026), and
the brand-identity work the design team produced in Figma. The
`assets/reference/napster-com-audit.md` file captures the live-site
findings that the tokens here are based on.

---

## Index

| File | Purpose |
|---|---|
| `colors_and_type.css` | ⭐ Single-import CSS variables + semantic classes (.eyebrow, .btn, .panel, .gradient-word). Start here. |
| `tokens/tokens.css` | Full token reference (same vars, verbose comments) |
| `tokens/colors.json`, `tokens/typography.json`, `tokens/spacing.json` | Machine-readable tokens |
| `assets/logos/` | Wordmark, icon, n-mark — white + black variants, SVG |
| `assets/reference/napster-com-audit.md` | Live-site audit notes |
| `examples/styles.css` + `examples/slides/*.html` | 13 production slide templates: cover, section-divider, content-panels, comparison-table, timeline, action-list, **stat-grid**, **hero-photo**, **architecture-diagram**, **quote**, **thank-you**, **pricing-table**, **competitive-matrix** |
| `preview/*.html` | Design-system cards (shown in the Design System tab) |
| `ui_kits/napster-com/` | Marketing site recreation — hero, nav, CTAs, feature sections |
| `slides/` | Sample 16:9 slides using the deck system |
| `SKILL.md` | Agent-compatible skill front-matter for portable usage |

---

## CONTENT FUNDAMENTALS

Napster writes like **a smart magazine about a serious idea** — editorial,
declarative, unhedged. Never like a product marketer.

### Five load-bearing patterns

1. **Declarative sentences. Short ones.**
   > *Software just became labor.*
   > *A chatbot answers questions. A companion mentors.*

2. **Contrast pairs** — the signature move. Old state / new state in parallel.
   > *Before: Software = Tool you operate.*
   > *Now: Software = Worker you manage.*

3. **Specific numbers**, never vague claims.
   > *$5/hour vs the industry's $1/minute.*
   > *Your first crew member is live in under an hour.*
   > Not *"industry-leading"* or *"at scale"*.

4. **Rename the category, don't compete inside it.**
   We aren't a better chatbot — we're a **companion**. A **crew**.
   You **hire**, **deploy**, **calibrate** crew members.

5. **Name the invisible.** Start copy by naming a tension the reader
   hasn't articulated. Often by naming a group nobody talks about.
   > *Every campus has a visible minority and an invisible majority.*

### Voice-check

| Casing | Sentence case for headlines. UPPERCASE for eyebrows. Never title case. |
| Person | **You** for the user (benefit-led). **We** rarely — Napster is the system, not the speaker. |
| Tense | Present tense. Active verbs. *"Companions remember."* not *"will be able to remember."* |
| Periods | Hero lines end with a period. *"A specialist for every moment."* Signature. |
| Emoji | **Never.** Not in product, not in marketing, not in decks. |
| Exclamation marks | Almost never. The declarative sentence carries its own emphasis. |
| Em-dashes | Sparingly — one per passage max, used for pivots, not lists. |

### Banned words

`revolutionize`, `disrupt`, `game-changing`, `AI-powered`, `leverage`,
`solution`, `seamlessly`, `effortlessly`, `powerful`, `unlock` (the verb),
`empower`, `industry-leading`, `world-class`, `chatbot` (that's what we aren't),
`assistant`, `bot`, `users` (name them: students, operators, counselors, fans).

### Preferred vocabulary

**companion** (AI) · **crew** (group) · **hire, deploy, ship, bring online** ·
**calibrate, tune, dial in** · **remembers, builds on, picks up where** ·
**expertise, tacit knowledge, the hidden curriculum** · **mentorship**.

### Named characters

Companions get full human names. **Jasmine Taylor.** **Carlos Rivera.** **Kevin.**
Not *"Jasmine the AI"*. We talk about them like colleagues.

---

## VISUAL FOUNDATIONS

### The Circle

The circle is Napster's **visual backbone**. The OG n-mark is circular.
Avantt was chosen for circular letterforms. Every surface rounds its corners.

> **Rule:** If you can round a corner without breaking meaning, do it.

### Colors

| | |
|---|---|
| **Background** | Pure `#000000`. Not `#111`, not `#0a0a0a`. Not gradient. Pure black. |
| **Text** | `#FFFFFF` primary. `rgba(255,255,255,0.5)` muted. `rgba(255,255,255,0.2)` subtle. |
| **Accent** | Napster Pink `#DD52CB` — **ONE element per composition**. |
| **Primary button** | `#BE369D` (deeper pink) solid fill. |
| **Atmospheric** | Plum gradients (`#140627 → #3C185A`) on hero imagery. Default bg stays pure black. |

### Typography

| Role | Font | Weight | Size | LS | Case |
|---|---|---|---|---|---|
| Hero | Avantt | 600 | 72px | -2% | Sentence |
| Section | Avantt | 600 | 41px | -2% | Sentence |
| Eyebrow | Inter | 700 | 12px | -0.12px | **UPPERCASE** |
| Body | Inter | 400 | 16px | — | Sentence |
| Button | Inter | 600 | 14px | — | Sentence |

> **Font:** Avantt ("Napster Sans") is included in `fonts/` — licensed
> from [Displaay](https://displaay.net/). Weights 500/600/700/800 available
> as `.ttf` and `.otf`. The `@font-face` rules are in `colors_and_type.css`.

### Backgrounds

- **Default:** pure `#000000`.
- **Atmospheric:** radial purple bloom on hero imagery — never full-bleed gradient over content.
- **Lifestyle photography** for User Value shots (humans in real environments).
- **Glass orb** — a signature Napster visual: a floating spherical glass volume, often containing product imagery.
- No repeating patterns. No textures. No hand-drawn illustrations. Photography or pure geometry.

### Animation

- **Fades** (120-200ms opacity). **No bounces, no spring overshoot.**
- Easing: standard ease-out. Nothing cinematic on UI — save motion for hero video.
- Hover: opacity/brightness shift, never scale up.
- Press: tiny `scale(0.98)`. Never color flip.

### Hover & press states

- **Buttons hover:** background lightens (~5%). **Press:** `scale(0.98)`.
- **Links:** underline on hover, pink `#DD52CB`.
- **Cards:** border shifts to `rgba(255,255,255,0.20)` on hover.
- **Icons:** never rotate or color-cycle — they are product furniture.

### Borders

- `1px solid rgba(255,255,255,0.10)` — the default panel border.
- `1px solid rgba(255,161,243,0.20)` — secondary button (pink rim at 20%).
- `1px solid rgba(190,54,157,0.35)` — pink callout panel.
- **Never 2px.** Never dashed. Never full-color solid borders except on pink buttons.

### Shadows

- **Panel shadow:** `0 10px 40px rgba(0,0,0,0.35)`. Subtle.
- **Inset highlight:** `inset 0 0 0 0.5px rgba(255,255,255,0.35)` — gives glass panels a rim light.
- **Pink glow (hero only):** `0 0 40px rgba(255,16,232,0.35)` — on the n-mark in brand-film moments. Never on UI.
- **No cinematic drop shadows.** Dark background means things sit; they don't float.

### Blur & transparency

- **Glass panels:** `backdrop-filter: blur(20px) saturate(1.2)` + 4% white fill.
- **Atmospheric blur:** 100-600px — used on hero glow shapes and the n-mark's bloom halo.
- Transparency falls at documented steps: `0.04`, `0.10`, `0.20`, `0.35`, `0.50`. Don't invent fractional values.

### Corner radii

| Element | Radius |
|---|---|
| Buttons | **10px** (most common — 22 uses on live site) |
| Cards | **16px** (15 uses) |
| Large cards / modals | 24px |
| Pills / chips | 100px |
| Small UI | 6px |
| Avatars, orbs | 50% |

### Layout rules

- **Wordmark top-left** on every composition. Clearspace ≥ logo-height on all sides.
- **Eyebrow → Title → Subtitle** is the universal section stack.
- **Pink falls on the load-bearing noun**, not verbs or modifiers. One per composition.
- Generous whitespace. If a slide has wall-to-wall text, the voice is also broken.
- Orbital compositions when content permits (user at center, companions surrounding).

### Imagery

- **Warm lifestyle photography** for User Value (humans in real environments, warm amber-to-magenta tone).
- **Atmospheric / cinematic** for Brand Feeling (abstract light, motion, purple atmospheric washes).
- **Isolated portraits** for Companion Character (clean, intimate, 3/4 framing).
- **Product screens on pure black** for Product Clarity.
- Never: stock iconography, illustration-style humans, busy patterns, or B&W photography.

---

## ICONOGRAPHY

**Napster does not ship its own icon font.** Product screens use small,
rounded, line-style icons (1.5-2px stroke, rounded caps, circular geometry
to echo the n-mark).

### What's in the repo

| File | Use |
|---|---|
| `assets/logos/icon/napster-n-mark.svg` | The OG cat-headphones n-mark. **This is the brand icon**, not a UI icon. |
| `assets/logos/icon/icon-white.svg` / `icon-black.svg` | Simplified n-mark for app icons, favicons |
| `assets/logos/horizontal/horizontal-white.svg` / `-black.svg` | Wordmark + mark lockup |
| `assets/logos/wordmark/napster-wordmark.svg` | Wordmark only |
| `assets/logos/wordmark/vertical-white.svg` | Stacked vertical lockup |

### UI icons — CDN substitution

For UI components (microphone, message bubble, tick, phone, chevron, key,
heart, etc., as catalogued in the Figma file under `Napster Go/components/`),
use **Lucide** (`lucide.dev`) — same stroke weight, same rounded-cap
aesthetic, same geometric family. This is a **substitution flag**: the
Figma source contains bespoke icons, but they aren't in the `assets/`
drop. Lucide is the closest CDN-available match.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="mic"></i>
```

### Emoji & unicode

**Never.** Napster does not use emoji. Not in UI, not in marketing,
not in decks. Unicode arrows (`→`, `↔`) are acceptable in diagrams;
anything else is off-brand.

### Logo placement rules

- Top-left of every composition.
- Clearspace ≥ one logo-height on all sides.
- Always white on dark. Never recolored (pink-glow treatment is hero-only, not daily use).
- Use PNG (not SVG) in PowerPoint/Keynote — SVG rendering is unreliable there.
- The n-mark CAN take a pink neon glow (`#FF10E8`, 20-40px spread) in hero imagery. Not in UI.

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">

<p class="eyebrow">Meet your crew</p>
<h1 class="h-hero">AI companions you can see, talk to, and
  <span class="gradient-word">create with.</span></h1>
<button class="btn btn-primary">Get started now</button>
<button class="btn btn-secondary">Watch the film</button>
```

---

*Maintained as part of the Napster brand system. Primary author of voice:
Ziv Navoth. Visual system based on Napster's brand definition work
(April 2026).*
