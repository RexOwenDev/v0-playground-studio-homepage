<div align=center>

<img src=./assets/banner.jpg alt=Playground Studio — Reimagined width=100% />

<br /><br />

<img src=./assets/rex-character.jpg alt=Rex — Built this width=100 />

### Built by [Rex](https://github.com/RexOwenDev) · Take-home assessment · Full-Stack Developer (AI Tools) · May 2026

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![V0 by Vercel](https://img.shields.io/badge/V0_by_Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://v0.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)

**[Live Demo →](https://v0-playground-studio-homepage.vercel.app)** &nbsp;·&nbsp; **[Loom Walkthrough →](#loom)** &nbsp;·&nbsp; **[Original Site](https://playgroundstudio.com.au)**

</div>

---

## What this is

A full reimagination of [playgroundstudio.com.au](https://playgroundstudio.com.au) — same brand DNA, rebuilt from scratch with modern web tooling.

The brief asked for V0 by Vercel + Next.js + Tailwind. I went deeper: a structured brand audit, AI council planning session, 6 focused V0 prompts, and a post-generation polish pass via Claude Code. The result is a site that matches Playground's bold editorial voice with the interaction quality the original doesn't have.

**Scope:** Homepage · Work · Capabilities · Team · Contact

---

## New Feature — Start a Project Wizard

The original contact form is a generic 5-field form. This replaces it with a guided 5-step lead qualification flow.

| Step | What it captures |
|------|-----------------|
| 1 | Work type (multi-select: Brand, Digital, Campaign, Social, 3D & Motion, Strategy) |
| 2 | Sector (Property, Beauty, Hospitality, Health, Fashion, Food & Bev, Retail, Non-Profit) |
| 3 | Budget range |
| 4 | Timeline |
| 5 | Contact details |

**Why this feature:**
- Qualifies leads before studio time is spent
- Demonstrates stateful React (useState step machine, progress bar, slide transitions)
- Directly useful for a boutique studio like Playground — every brief they receive is a sales conversation

---

## Pages

| Route | What changed |
|-------|-------------|
|  | Animated hero text entrance, staggered capability grid, scroll-triggered portfolio reveal |
|  | Filter bar by capability, hover states, scroll-triggered project grid (18 projects) |
|  | Numbered scroll-reveal layout, sector tile grid |
|  | Portrait cards with hover zoom, studio personality copy |
|  | **New:** 5-step multi-step enquiry wizard (see above) |

---

## AI-Assisted Development Workflow

This role is explicitly about AI tools — so here's exactly how I built this:

**1. Brand audit (before touching V0)**
Deep-read of playgroundstudio.com.au HTML source. Extracted: color system (pure black/white, no mid-tones), typography scale (uppercase, font-medium, 120px at 2xl), grid logic (2-col aspect-[16/10]), animation patterns (transition-opacity duration-1000, staggered fade-in), CMS (DatoCMS). Gaps documented: no filtering, no scroll animation, no lead qualification.

**2. AI Council architecture session**
Used Claude Opus 4.7 to plan site structure, identify the new feature, and design the component hierarchy before prompting V0. This avoids the throw things at V0 and see what sticks credit burn.

**3. V0 prompt engineering (6 prompts, 1 per surface)**
Each prompt included: Tailwind palette constraints, component naming, animation directives, accessibility requirements. One prompt per page — no mid-generation corrections.

**4. Claude Code polish pass**
Post-V0 fixes: Nav scoped to homepage only → moved to . Filter bar z-index conflict fixed. Scroll animation wiring via IntersectionObserver + Framer Motion. Dark/light mode persistence.

**5. Adversarial quality gate**
25 UI/UX issues caught before deploy — contrast ratios, focus states, mobile breakpoints, empty state handling.

**Result:** V0 credits used strategically (generation, not iteration). Claude Code handled all post-generation work at zero credit cost.

---

## Tech Stack



---

## Running Locally

```bash
git clone https://github.com/RexOwenDev/v0-playground-studio-homepage
cd v0-playground-studio-homepage
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

<div align=center>

<img src=./assets/rex-character.jpg alt=Rex width=60 />

**Rex** · AI Automation + Full-Stack · Philippines

[github.com/RexOwenDev](https://github.com/RexOwenDev) · [owenquintenta@gmail.com](mailto:owenquintenta@gmail.com)

</div>