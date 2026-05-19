# Repository Skills & Alignment Guide

> Purpose: keep future contributors (including AI agents) aligned with the design intent, technical architecture, and maintenance practices of this codebase.

## 0) Alignment Contract (Required)

- **Every AI model MUST update `skills.md` whenever it makes changes to the codebase** that affect architecture, routes, structure, design tokens, content strategy, tooling, or conventions.
- When in doubt, update this file. Keeping it current is mandatory for alignment.

---

## 1) Project Overview

This repository powers a **nonprofit CSR showcase** website. It is a **Next.js (App Router) application** built with TypeScript, Tailwind (via PostCSS), and currently uses **hardcoded content** (CMS integration planned later).

Key traits:
- **Content-heavy, brand-led pages** for CSR initiatives, grants, media, and policies.
- **No AI‑generated visuals**. All imagery must be manually uploaded assets.
- **Design tokens** are defined in `src/app/globals.css` and should be treated as the source of truth.

---

## 2) Architecture & Structure

### 2.1 Frontend Framework
- Next.js App Router with `src/app` as the route root.
- TypeScript for all logic and UI (`.tsx`).

### 2.2 Routes
All routes are filesystem-based:
- Root layout: `src/app/layout.tsx`
- Home page: `src/app/page.tsx`
- Other pages: `src/app/<route>/page.tsx`
- Admin route: `src/app/admin/[[...tool]]/page.tsx`

### 2.3 Components & Utilities
- **Reusable UI**: `src/components`
- **Shared logic/utils**: `src/lib`

### 2.4 CMS Status
- **No CMS currently in use** (all content hardcoded).
- Sanity config files exist, but **do not integrate CMS yet** until explicitly requested.

---

## 3) Design Tokens (Source of Truth)

Extracted from `src/app/globals.css`:

### Colors
- `--color-background`: `#ffffff`
- `--color-foreground`: `#171717`
- `--color-primary`: `#FBBF24`
- `--color-primary-dark`: `#FBBF24`
- `--color-secondary`: `#b7b7b7`
- `--color-surface`: `#fefefe`

### Typography
- Base font size: **18px** (set on `html`)
- `--font-sans`: `var(--font-body)`
- `--font-mono`: `var(--font-body)`

### Animations
- `subtle-zoom`: scale 1 → 1.05 (20s alternate)
- `fade-in-up`: opacity/translateY transition (1s)
- `marquee`: horizontal scroll animation (30s linear)

**Do not introduce new tokens** without updating `globals.css` and documenting them here.

---

## 4) Content Strategy

- All page content is currently **hardcoded** in route components.
- **No AI‑generated visuals**; all imagery must be manually uploaded.
- When CMS integration starts, update this guide to reflect which routes are CMS-driven.

---

## 5) Code Quality & Conventions

### TypeScript
- Use strict typing for props, data shapes, and helpers.

### Linting
- Follow rules in `eslint.config.mjs`.

### Component Design
- Prefer composition over duplication.
- Route-level pages should remain thin and delegate UI to `src/components` when complex.

---

## 6) Performance & SEO

- Use Server Components by default; only opt into Client Components when needed.
- Use `next/image` for optimized imagery.
- Keep metadata consistent in `layout.tsx` and/or route-level metadata exports.

---

## 7) Do’s and Don’ts

### ✅ Do
- Respect existing design tokens.
- Reuse shared components.
- Keep CSR content tone consistent and nonprofit‑appropriate.
- Update `skills.md` when behavior, tokens, or structure change.

### ❌ Don’t
- Introduce AI‑generated visuals or placeholder stock art.
- Add new colors/typography tokens without updating this doc.
- Mix CMS assumptions into hardcoded routes.
- Add client components without a clear need.

---

## 8) Contribution Checklist

Before merging changes:
- [ ] Types pass.
- [ ] Lint passes.
- [ ] No new tokens or routes are undocumented.
- [ ] `skills.md` updated if anything structural/design‑related changed.

---

## 9) Quick Map of Key Locations

- **Routes**: `src/app/...`
- **Global layout**: `src/app/layout.tsx`
- **Global styles**: `src/app/globals.css`
- **Components**: `src/components`
- **Utilities**: `src/lib`
- **Assets**: `public/`

---

## 10) Update Mandate (Critical)

Every AI model must treat this file as **living documentation**:
- If you change structure, content strategy, routes, or styling, update `skills.md` **in the same change**.
- If you are unsure, err on the side of updating this file.