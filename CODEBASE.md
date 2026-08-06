# FIH Website — Codebase Reference

Foundation for Innovations in Health · Next.js 16 · Tailwind CSS v4 · Sanity CMS v5

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | `motion/react` (Framer Motion v11+), CSS keyframes, IntersectionObserver |
| Icons | `lucide-react` |
| Images | `next/image` |
| Fonts | Google Fonts via `next/font` — Poppins (headings), Lato (body), Merriweather (quotes) |
| CMS | Sanity v5 + `next-sanity` v12 |
| CMS Studio | Mounted at `/admin_for_main_website` via Next.js catch-all route |

---

## Global Layout (`src/app/layout.tsx`)

- Loads all three Google fonts and maps them to CSS variables (`--font-heading`, `--font-body`, `--font-quote`)
- Renders `<Header />`, `<main>`, `<Footer />`, and `<SanityLive />` on every page
- `<SanityLive />` keeps Sanity-fetched content in sync without a full redeploy
- `metadataBase` set to the Vercel deployment URL for correct Open Graph image resolution
- Favicon and apple-touch icons served from `public/favicon_io/`

---

## Shared UI Components (`src/components/ui/`)

### FadeIn
- Wraps any element and fades it in when it enters the viewport
- Uses `motion/react` `whileInView` with `viewport: { once: true, margin: "-100px" }`
- Supports direction prop: `up | down | left | right | none` (±40px offset)
- Props: `children`, `delay`, `direction`, `className`
- Duration: 0.8s, easing: `[0.21, 0.47, 0.32, 0.98]`

### BlurText
- Animates text word-by-word or letter-by-letter with a blur-to-clear effect
- Uses IntersectionObserver to trigger; each segment is a `<motion.span>`
- Multi-step keyframes: `blur(10px) opacity-0` → `blur(5px) opacity-0.5` → `blur(0) opacity-1`
- Customisable: `animateBy`, `direction`, `delay`, `duration`, `easing`

### ShinyText
- Renders a gradient shine moving left-to-right (or right-to-left) across text
- Uses `useMotionValue`, `useAnimationFrame`, `useTransform` from `motion/react`
- 60fps smooth animation via `requestAnimationFrame`
- Props: `speed`, `spread`, `color`, `yoyo`, `pauseOnHover`

---

## Layout Components (`src/components/layout/`)

### Header (`Header.tsx`)
- **Client component** — needs scroll detection and mobile menu state
- Scroll logic: `window.scrollY > 20` triggers `isScrolled` state → nav card scales to `scale-[0.98]` and reduces padding
- Desktop nav hidden below `min-[1120px]`; mobile shows a full-screen fixed overlay panel
- Mobile menu locks `document.body` + `document.documentElement` overflow and `touchAction`
- Contains `<NotificationBell />` — visible at all breakpoints, sits between nav and Donate button
- "Donate Now" button has `pointer-events-none` (visually present but unclickable)
- Special background rules: Grants page gets `bg-[#fafafa]`, CSR page gets transparent on load

### NotificationBell (`NotificationBell.tsx`)
- **Client component** — fetches, displays, and tracks notifications from Sanity
- **Data**: Fetches `*[_type == "notification"] | order(publishDate desc)` using `client.withConfig({ useCdn: false })` for always-fresh data
- **Unseen dot**: Compares latest notification `publishDate` against `localStorage` key `fih_notifications_last_seen`; shows primary-colour dot if unseen
- **Dropdown**: `motion/react` `AnimatePresence` — slides in from top (y: -6, scale: 0.97 → 1); on mobile uses `fixed left-3 right-3 top-24`, on `sm+` uses `absolute right-0 top-full`
- **Detail modal**: Opens on notification click; locks body scroll; image shown with `object-contain` in a fixed-height `h-56 sm:h-64` container
- **Zoom lightbox**: Clicking the image opens a full-screen `bg-black/95` overlay at 2400px resolution; also locks body scroll; closes on backdrop click, X button, or `Escape`
- **Keyboard**: `Escape` closes zoom first, then modal if zoom is already closed

### Footer (`Footer.tsx`)
- Dark background `#0e0f11`, two-column responsive grid
- Copyright year generated dynamically with `new Date().getFullYear()`
- Social: LinkedIn link; Legal: Privacy Policy, Refund Policy, Terms & Conditions

---

## Pages

---

### Home (`src/app/page.tsx`)

**Data fetching**: `async` server component — calls `sanityFetch({ query: EVENTS_QUERY })` to get events from Sanity. Falls back to hardcoded static events if Sanity returns an empty array. Images are resolved server-side using `urlFor().width(900).auto("format").url()` before being passed to the client component.

**Section order**: Hero → What We Do → Recognition → Specific Objectives → Supported By → Stories & Milestones → Events → Partner With Us

Most sections are wrapped in `<FadeIn>` for scroll-reveal.

#### HeroSection
- Static — no animation library
- Layered image composition: hero man, child, woman stacked with z-index
- Icons: `ArrowRight`, `HeartHandshake`, `Users` from lucide-react

#### WhatWeDoSection
- Hover effects: cards scale up, images scale to `scale-105`
- Gradient overlays using radial-gradient CSS
- Icons: `Briefcase`, `GraduationCap`, `ArrowUpRight`

#### RecognitionSection
- 4-column responsive grid (1 → 2 → 4)
- Hover: `−translate-y-1` lift + deeper shadow

#### SpecificObjectivesSection
- 4-column image grid with alternating primary-colour backgrounds
- Hover: image scales to `scale-105` (700ms), progress bar animates from `w-0` to `w-full`
- Overlay opacity toggles on hover

#### SupportedBySection
- CSS marquee: duplicate logo list, `animation: marquee 30s linear infinite`
- Fades at edges via `mask-image` gradient
- Pauses on hover (`animation-play-state: paused`)

#### StoriesAndMilestonesSection
- 3-column card grid with hover borders and shadow
- Tag badges and year display

#### EventsSection
- **Client component** — receives pre-fetched `EventItem[]` as a prop
- Desktop: CSS marquee (60s linear infinite), pauses on hover
- Mobile: horizontal overflow scroll (no marquee)
- Card reveal: `motion.button` with `initial: { opacity: 0, y: 32 }` → `whileInView` (staggered by `i * 0.1s`)
- Click → detail modal with `AnimatePresence` scale animation (`0.96 → 1`, y: `20 → 0`)
- Modal: image full-width, date badge, title, description; closes on backdrop click or X

#### PartnerWithUsSection
- Two-column grid: contact info cards (left) + contact form (right)
- Form inputs: focus border changes to `border-primary`, background switches to white
- Icons: `MapPin`, `Phone`, `Mail`, `Heart`, `ArrowRight`
- Donation CTA card with decorative blur circle

---

### About FIH (`src/app/aboutFIH/page.tsx`)

Sections: Hero → Content → Vision & Mission → Impact → Our Journey → Board of Members → Statutory Compliance

#### AboutHeroSection
- Full-bleed dark hero (`#0A0A0B`) with dual gradient overlays
- White text with `drop-shadow`

#### AboutContentSection
- **Client component** — custom `useFadeIn` hook (IntersectionObserver)
- Scroll-triggered: `opacity 0 → 1`, `translateY(20px → 0)`, 700ms ease-out, staggered delays
- Bento-box layout: 3 cards with distinct background colours
- Images: `grayscale(100%) → grayscale(0%)` on hover (1000ms transition)
- Uses `<BlurText>` for animated section heading

#### VisionMissionSection
- 50/50 split: dark vision panel / primary-colour mission panel
- Hover: vision arrow moves `−translate-x-4`, mission arrow moves `+translate-x-4`
- Icons: `Eye`, `Target`

#### ImpactSection
- **Client component** — most complex component in the project
- Custom `useFadeIn` hooks for 5 independent sections
- **TriangleArrows**: SVG component with animated bidirectional arrows (blink keyframe)
- **RotatingCircles**: 4 labelled circles cycling through positions every 2400ms with 800ms cubic-bezier transitions
- **3T Model diagram**: SVG definitions with stroke markers and opacity/rotation animations
- Background: blurred primary-colour circle (120px blur) fades in on scroll
- Uses `<ShinyText>` for the main heading

#### OurJourneySection
- **Client component** — IntersectionObserver on each journey section
- Full-width alternating image/text layout
- Scroll-triggered: `opacity 0 → 1`, `translateY(10px → 0)`, 1000ms, staggered `60ms × index`
- Image hover: `scale-105` (1000ms)
- Year watermark: large semi-transparent text as background element

#### BoardOfMembersSection
- **Client component** — `useState` for selected member modal
- 3-column responsive grid
- Modal: split layout (image left + scrollable bio right)
- CSS `animate-in` (fade-in + zoom-in-95, 200ms)
- Images: `object-contain` (no cropping in modal)

#### StatutoryComplianceSection
- 2-column table grid (stacks on mobile)
- Full-bleed width: `width: 100vw; margin-left: calc(−50vw + 50%)`
- Hover: `bg-[#F5F5F7]` row highlight

---

### Our Work (`src/app/our-work/page.tsx`)

Merges two content areas: Stories of Change (top) + Our Healthcare Model (bottom).

**Section order**: StoriesOfChangeHero → Story sections (mapped) → Quote → OurWorkHero → Intro paragraphs → YouTube embed → ClinicWorkflow → OurWorkContent → Services

#### StoriesOfChangeHero
- Dark hero (`#0A0A0B`) with `animate-subtle-zoom` CSS keyframe on background image
- CSS grid radial-gradient pattern overlay
- Staggered fade-in-up keyframes on headline, description, metadata (delays: 100ms, 200ms, 400ms, 600ms)

#### StorySectionItem
- **Client component** — custom `useFadeIn` hook
- Alternating layout: even sections flip image/text order (`order-1` vs `order-2`)
- Scroll-triggered: `opacity 0 → 1`, `translateY(20px → 0)`, 1000ms ease-out
- First paragraph: CSS drop cap (float-left, large font-size)
- Image hover: `scale-110` + gradient overlay fades in

#### QuoteSection
- IntersectionObserver for reveal (opacity 0 → 1, translateY 10px → 0, 1000ms)
- Large decorative quotation mark (semi-transparent)
- Primary-colour background

#### OurWorkHeroSection
- Side-by-side: text left (label + large uppercase heading + accent bar), image right (52% width)
- `next/image` with `priority` for LCP

#### ClinicWorkflowSection
- **Client component** — most interactive component on this page
- **Desktop**: Circular diagram with nodes positioned around a central hub
  - Rotating dashed track ring (360° CSS animation, very slow)
  - SVG path arrows with blink keyframe (1.5s ease-in-out)
  - Active node: `scale-125`; hover node: `scale-110`
  - Tooltip fades in on hover (`opacity 0 → 1`, `translateY(4px → 0)`, 300ms)
  - Auto-cycles every 2000ms; pauses when user hovers over the diagram
- **Mobile**: Vertical stepper replaces the diagram entirely (`hidden lg:flex` / `flex flex-col lg:hidden`)
  - Tap-to-expand step description
  - Animated progress connector between steps

#### OurWorkContentSection
- Benefits + Uniqueness: 2-column grid with `FadeIn direction="left/right"`
- Core Pillars: 3-column card grid with `FadeIn delay={i * 0.1}`
- Card hover: `shadow-sm → shadow-xl` (300ms), title colour → primary

#### ServicesSection
- CSS columns (1 → 2 → 3)
- `FadeIn` with staggered delay
- Cards: feature list with check icons, arrow links

---

### Stories of Change (`src/app/stories-of-change/page.tsx`)

Dedicated page wrapping just `<TestimonialSection />`.

#### TestimonialSection
- **Client component** — each card is a `TestimonialCard` with its own `useFadeIn(0.08)` IntersectionObserver instance
- Per-card observer prevents the mobile black-screen bug (whole grid would stay invisible until the container entered viewport)
- `rootMargin: "0px 0px -40px 0px"` triggers animation slightly before the card fully enters
- Stagger: `transitionDelay: visible ? \`${index * 80}ms\` : "0ms"` — delay only applies after card is visible
- Hover: `translateY(-4px)`, deeper shadow, accent gradient scales to `scale-150`
- Quote icon fades in on hover

---

### Press & Media (`src/app/press-media/page.tsx`)

**Data fetching**: Same `sanityFetch` + static fallback pattern as the home page. `EventsSection` component is reused.

Sections: Awards & Recognition → Publications → Events (reused) → Gallery

#### AwardsRecognitionSection
- Featured award: dark card with radial-gradient CSS pattern
- Grid: 3-column responsive dark cards with year badges

#### PublicationSection
- **Client component** — full lightbox with keyboard controls
- Features: zoom (scroll wheel), pan (drag when zoomed), prev/next navigation
- Keyboard: `Escape` closes, `ArrowLeft`/`ArrowRight` navigates, `+`/`-` zooms
- Body scroll locked when lightbox open
- Image hover: `scale-105` (500ms)

#### GallerySection
- **Client component** — tab switching (Photos / Videos), pagination, lightboxes
- Photo grid: 4-col desktop, 3-col tablet, 2-col mobile; paginated (12 per page)
- Photo lightbox: prev/next, keyboard controls, body scroll lock
- Video modal: YouTube `youtube-nocookie` embed
- Tab UI: sliding pill indicator using absolute positioning

---

### Grants & Mandates (`src/app/grants-mandates/page.tsx`)

- Page background: `bg-[#fafafa]` (Header picks this up and matches)
- Sections: Hero + content grid
- Static content only

---

### CSR Projects (`src/app/csr-projects/page.tsx`)

- Uses `<BlurText>` for the hero value statement
- Present and past project cards with `FadeIn delay={i * 0.1}` stagger
- SDG goals section
- `CSRGalleryStrip` for visual imagery

---

### Contact (`src/app/contact/page.tsx`)

- Hero + `ContactFormSection`
- Form: name, email, subject, message — UI only (no backend connected yet)
- Donation CTA with `pointer-events-none` (visually active, unclickable)

---

### Admin (`src/app/admin_for_main_website/[[...tool]]/page.tsx`)

- Embedded Sanity Studio CMS interface
- Catch-all route using `next-sanity/studio` (`NextStudio`)
- Accessible at `/admin_for_main_website` on any deployment
- Static rendering mode (`export const dynamic = 'force-static'`)
- Re-exports `metadata` and `viewport` from `next-sanity/studio`
- Config: `sanity.config.ts` (basePath `/admin_for_main_website`, structureTool, visionTool)
- Credentials: `src/sanity/env.ts` reads from `NEXT_PUBLIC_SANITY_*` env vars

## Sanity CMS

### Project config
- Project ID: `zquzohi1` · Dataset: `production` · API version: `2026-04-20`
- Config: `sanity.config.ts` (basePath `/admin_for_main_website`, structureTool, visionTool)
- Credentials: `src/sanity/env.ts` reads from `NEXT_PUBLIC_SANITY_*` env vars

### Client (`src/sanity/lib/client.ts`)
- `createClient` from `next-sanity`; `useCdn: true` for general use
- NotificationBell overrides with `.withConfig({ useCdn: false })` for always-fresh notification data

### Image builder (`src/sanity/lib/image.ts`)
- `urlFor(source)` returns an image URL builder
- Call `.width(N).auto("format").url()` for optimised delivery via `cdn.sanity.io`

### Live (`src/sanity/lib/live.ts`)
- `defineLive` exports `sanityFetch` (server-side fetch with cache tags) and `SanityLive` (client script for real-time updates)

### Queries (`src/sanity/lib/queries.ts`)
- `EVENTS_QUERY`: `*[_type == "event" && defined(image.asset)] | order(date desc)` — only returns events with an uploaded image

### Schemas

**Event** (`sanity/schemas/event.ts`)
| Field | Type | Required |
|---|---|---|
| title | string | yes (min 3) |
| date | datetime | yes |
| description | text | yes (min 20) |
| image | image (hotspot) | yes |

**Notification** (`sanity/schemas/notification.ts`)
| Field | Type | Required |
|---|---|---|
| title | string | yes (min 3) |
| publishDate | datetime | yes |
| shortMessage | text (6 rows) | yes |
| image | image (hotspot) | no |

---

## Animation Patterns — Quick Reference

| Pattern | Where used | How |
|---|---|---|
| **FadeIn (scroll reveal)** | Everywhere | `motion/react` `whileInView`, once, margin -100px |
| **BlurText** | Section headings | Multi-step blur keyframe per word/letter |
| **ShinyText** | Impact section | `useAnimationFrame` gradient sweep |
| **Marquee (CSS)** | Logos, Events | `@keyframes marquee` + `animation-play-state: paused` on hover |
| **Stagger** | Cards, grids | `delay={i * 0.1}` on FadeIn or `transitionDelay` in style prop |
| **Modal / Lightbox** | Events, notifications, gallery, board | `AnimatePresence` + scale + y transition |
| **Zoom lightbox** | Notification image, publications | Fixed overlay, `object-contain`, scroll locked |
| **IntersectionObserver** | Testimonials, journey, about | Custom `useFadeIn` hook, per-element observer |
| **Rotating diagram** | Clinic Workflow | CSS `rotate(360deg)` infinite + JS auto-cycle `setInterval` |
| **Hover scale** | Images, cards | Tailwind `hover:scale-105/110` + `transition-transform duration-500/1000` |
| **Grayscale toggle** | About content | `hover:grayscale-0` on `grayscale` base |

---

## Content Architecture

Most content is **hardcoded** in `src/lib/content/` TypeScript files (type-safe, no CMS). Only two content types are CMS-driven:

| Content | Source |
|---|---|
| Events | Sanity (`event` documents), fallback to `src/lib/content/events.ts` |
| Notifications | Sanity (`notification` documents) — no static fallback |
| Everything else | `src/lib/content/*.ts` static files |

---

## Key Decisions & Notes

- **Donate button** is `pointer-events-none` site-wide — visually present but not clickable (placeholder for future payment integration)
- **Publish button greyed out in Studio** — check that the deployment URL is in the Sanity CORS allowed origins list (managed at sanity.io/manage)
- **CDN bypass for notifications** — `useCdn: false` ensures published notifications appear immediately without waiting for CDN cache expiry
- **Event images required** — the GROQ query filters out events without `image.asset`, preventing `urlFor` crashes
- **Per-card observers on testimonials** — a single observer on the grid container caused a mobile black-screen bug (all cards invisible until the container entered viewport). Each card has its own observer instead.
- **Mobile notification dropdown** — uses `fixed` positioning on small screens to avoid misalignment caused by the bell not sitting at the far right of the header on mobile
