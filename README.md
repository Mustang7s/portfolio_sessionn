# Editorial Grid Portfolio Template

> A production-ready raw-editorial portfolio template built with Next.js 15, React 19, TailwindCSS v4, and Framer Motion. Optimized for performance, SEO, and AI discoverability.

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

🚀 Check out the live portfolio: https://portfolio-session-gdg.vercel.app/  

If you like this project, consider giving it a star! ⭐

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Design Philosophy](#-design-philosophy)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [UI Components](#-ui-components)
- [SEO & AI Optimization](#-seo--ai-optimization)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Customization Guide](#-customization-guide)

---

## ✨ Features

- **Raw Editorial Design** — Exposed grids, structural borders, architectural typography
- **Smooth Physics-Based Scrolling** — Lenis integration for momentum-driven navigation
- **Advanced Animations** — Framer Motion entrance sequences with staggered reveals
- **Dark/Light Theme Toggle** — Automatic OS detection with manual override
- **AI-Optimized** — Structured metadata for LLM discoverability (`llms.txt`, enhanced `robots.txt`)
- **SEO-First** — Comprehensive Open Graph, Twitter Cards, and meta tags via Next.js Metadata API
- **Performance-Optimized** — Server Components, optimized fonts, GPU-accelerated animations
- **Fully Responsive** — Mobile-first grid system with adaptive layouts

---

## 🛠 Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | App Router, SSR, Image Optimization, Metadata API |
| **React** | 19.x | UI Component Model |
| **TypeScript** | 5.x | Type safety across all components |

### Styling & Animation

| Technology | Purpose |
|------------|---------|
| **TailwindCSS v4** | Utility-first CSS with Lightning CSS engine |
| **CSS Custom Properties** | Theme tokens (colors, typography, spacing) |
| **Framer Motion** | Entrance animations, staggered reveals, transitions |
| **Lenis** | Physics-based smooth scroll engine |

### Typography

Three typefaces loaded via Google Fonts with `display=swap`:

| Font | Token | Usage |
|------|-------|-------|
| **Montserrat** | `font-display` | Section headings, hero title |
| **Instrument Serif** | `font-accent` | Section labels, metadata, captions |
| **Google Sans** | `font-sans` | Body copy, descriptions, UI text |

---

## 🎨 Design Philosophy

### Why Raw-Editorial?

**Raw architecture** (think exposed concrete, visible steel, functional honesty) inspired a generation of designers who believed structure itself could be beautiful. **Raw-editorial web design** applies the same logic: grids are visible, borders are structural elements, typography is architectural.

**Core Principles:**

| Principle | Conventional Design | Raw-Editorial Approach |
|-----------|-------------------|-------------------|
| **Grid** | Hidden, invisible structure | Exposed with visible borders — the grid IS the design |
| **Ornamentation** | Gradients, shadows, effects | None. Raw elements only. |
| **Typography** | Decorative, expressive | Architectural — large, structural, functional |
| **Whitespace** | Breathing room, soft | Hard-edged, gridded, intentional |
| **Borders** | Subtle, decorative | Structural — they define zones |
| **Animation** | Smooth, organic | Mechanical, purposeful, geometric |

**Why This Works for Developer Portfolios:**

1. **Signal-to-Noise Ratio** — No visual fluff. Content is the focus.
2. **Technical Credibility** — The exposed structure shows you understand systems thinking.
3. **Performance** — No heavy gradients, blurs, or effects = faster load times.
4. **Timelessness** — Trends (glassmorphism, neumorphism) fade. Raw structure doesn't.
5. **Accessibility** — High contrast, clear hierarchy, readable typography.

**Intentional rawness ≠ ugly** — Think industrial loft apartments vs. suburban homes. Same principle applies to web design.

**Visual Comparison:**

```
Conventional Portfolio:         Raw-Editorial Portfolio:
┌─────────────────────┐        ┏━━━━━━━━━┯━━━━━━━━━┓
│  ╭───────────╮      │        ┃ SECTION │ CONTENT ┃
│  │  Rounded  │      │        ┠─────────┼─────────┨
│  │   Card    │      │        ┃         │         ┃
│  ╰───────────╯      │        ┃         │         ┃
│   [soft shadow]     │        ┗━━━━━━━━━┷━━━━━━━━━┛
│                     │        [hard borders visible]
│ Background gradient │        [flat color]
└─────────────────────┘        

• Rounded corners              • 90° angles only
• Drop shadows                 • No shadows
• Gradient backgrounds         • Flat colors
• Hidden grid                  • Grid is visible structure
• Soft, organic                • Hard, geometric
```

**Real-World Examples of This Aesthetic:**

- [Bloomberg Businessweek](https://www.bloomberg.com/businessweek) — Editorial grid, structural typography
- [The Outline](https://theoutline.com) (archived) — Exposed borders, no decoration
- [Yale School of Art](https://www.art.yale.edu) — Raw, editable, chaotic structure
- [Balenciaga](https://www.balenciaga.com) (certain campaigns) — Minimal, structural

**This Template's Structural Features:**

✅ **12-column editorial grid** — Visible via `border-r border-b` on every cell  
✅ **Structural typography** — Montserrat at huge sizes, architectural hierarchy  
✅ **Exposed watermarks** — Section numbers (01-06) bleeding off viewport edge  
✅ **Hard borders** — `border: 1px solid` everywhere, no `border-radius`  
✅ **Flat colors** — No gradients, no `backdrop-blur`, no `box-shadow`  
✅ **Mechanical motion** — Clip-path reveals, hard stops, geometric transforms

### Visual Language

**Raw-Editorial** — The grid is exposed, borders are structural, typography is architectural. No drop shadows, no glassmorphism, no gradient text.

**Color System:**

```css
/* Dark Mode (Default) */
--background: #213824;  /* Deep forest green */
--foreground: #FAF3E1;  /* Warm cream */
--accent: #fcfdd2;      /* Bright cream accents */

/* Light Mode */
--background: #FAF3E1;  /* Warm cream */
--foreground: #222222;  /* Near-black graphite */
--accent: #222222;
```

**Why These Colors?**

- **No pure black/white** — `#213824` and `#FAF3E1` are warmer, less harsh
- **High contrast** — This aesthetic demands readable text (WCAG AAA compliance)
- **No gradients** — Flat colors only. Gradients hide structure.
- **Limited palette** — 3 colors total. Restraint is the point.

**Anti-Patterns Avoided:**

❌ Glassmorphism (`backdrop-blur`, semi-transparent cards)  
❌ Gradient text (`background-clip: text`)  
❌ Drop shadows (`box-shadow`)  
❌ Soft borders (`border-radius` overuse)  
❌ Multiple accent colors (restraint = strength)

### Animation Philosophy

**Motion is mechanical and purposeful.**

- Clip-path `inset()` transitions reveal text like stamps
- Easing curve: `cubic-bezier(0.16, 1, 0.3, 1)` — high-end deceleration
- Lenis adds physics-based scroll inertia — the page feels like a physical object

**Animation Principles:**

| Principle | Implementation |
|-----------|---------------|
| **Mechanical over Organic** | Hard stops, not bounces. `easeOut`, never `spring` |
| **Purposeful** | Every animation serves function (reveal, emphasis) |
| **Geometric** | Clip-path, opacity, transform. Never blur (except `BlurText`) |
| **Low FPS is OK** | 30fps animations feel more mechanical than 60fps |

**Why `cubic-bezier(0.16, 1, 0.3, 1)`?**

```
    ^ 
  1 |         ●────────
    |        /
    |       /
    |      /
  0 |●────/
    └────────────────>
    0              1
```

This curve decelerates aggressively at the end — creating a "thud" effect. Compare to:
- `ease-in-out` — smooth, organic (not this aesthetic)
- `spring` — bouncy (not this aesthetic)
- `linear` — robotic but no emphasis (better, but less impactful)

**GPU-Optimized:** All animations use only `transform` and `opacity` — never layout properties.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Basic knowledge of Next.js and React

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, SEO, NoiseOverlay
│   ├── page.tsx                # Main page composition
│   └── globals.css             # Design tokens, Tailwind layers
│
├── components/
│   ├── sections/               # Portfolio sections
│   │   ├── hero.tsx            # Hero: headline + bio + portrait
│   │   ├── about.tsx           # About section
│   │   ├── awards.tsx          # Honors & Impact (Section 02)
│   │   ├── experience.tsx      # Professional History (Section 03)
│   │   ├── projects.tsx        # Selected Projects (Section 04)
│   │   ├── tech-stack.tsx      # Technical Proficiency (Section 05)
│   │   ├── certifications.tsx  # Verified Credentials (Section 06)
│   │   └── contact.tsx         # Contact / Footer
│   │
│   └── ui/                     # Reusable UI components
│       ├── grid-cell.tsx       # Animated grid wrapper
│       ├── blurText.tsx        # Word-blur entrance animation
│       ├── noise-overlay.tsx   # SVG grain texture
│       ├── lenis-provider.tsx  # Smooth scroll provider
│       └── theme-toggle.tsx    # Dark/Light mode switch
│
└── public/
    ├── portrait.jpg            # Hero portrait image
    ├── robots.txt              # SEO + AI crawler directives
    └── llms.txt                # LLM-readable profile
```

---

## 🧩 UI Components

### `GridCell` — Animated Grid Wrapper

Wraps content in a Framer Motion `whileInView` entrance animation.

**Props:**
- `children`: Content to render
- `className`: Additional Tailwind classes
- `delay`: Animation delay in seconds (for staggering)
- `noBorder`: Removes default grid borders

**Example:**
```tsx
<GridCell className="p-10 hover:bg-foreground" delay={0.2}>
  <h3>Content</h3>
</GridCell>
```

### `BlurText` — Word-by-Word Reveal

Splits text into words/letters and animates with blur → clear transition.

**Props:**
- `text`: String to animate
- `delay`: Milliseconds between each word/letter (default: 200)
- `animateBy`: `"words"` | `"letters"`
- `direction`: `"top"` | `"bottom"`

**Example:**
```tsx
<BlurText
  text="Building scalable web applications..."
  delay={30}
  animateBy="words"
  className="text-2xl"
/>
```

### `NoiseOverlay` — Grain Texture

Fixed full-screen SVG grain overlay for tactile depth. Added once in `layout.tsx`.

### `ThemeToggle` — Dark/Light Mode

Top-right navbar button. Toggles `dark` class on `<html>` root.

**Features:**
- Auto-detects OS preference on first load
- Smooth icon swap animation
- CSS custom properties for theme switching

### `LenisProvider` — Smooth Scroll Engine

Physics-based scroll engine that replaces native browser scroll with momentum-driven inertia.

**What is Lenis?**

Lenis (by [Darkroom Engineering](https://darkroom.engineering/)) is a lightweight smooth scroll library that transforms standard browser scrolling into a high-performance, physics-based experience. Unlike CSS `scroll-behavior: smooth`, Lenis provides:

- **Momentum scrolling** with customizable friction
- **Exponential easing** for that mechanical "thud" feel
- **Touch gesture support** with configurable multipliers
- **Programmatic scroll control** via JavaScript API
- **Framework compatibility** with React, Next.js, and scroll-linked animations

**Installation:**
```bash
npm install lenis
```

**Implementation (`components/ui/lenis-provider.tsx`):**

```tsx
"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // Scroll animation duration (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
      orientation: "vertical",
      smoothWheel: true,      // Enable smooth wheel scrolling
      touchMultiplier: 2,     // Touch scroll speed multiplier
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

**Configuration Breakdown:**

| Option | Value | Effect |
|--------|-------|--------|
| `duration` | `1.2` | Scroll feels weighty, not instant (default: 1.0) |
| `easing` | Exponential | Aggressive deceleration at end — mechanical "landing" |
| `smoothWheel` | `true` | Smooths mouse wheel events on desktop |
| `touchMultiplier` | `2` | Mobile swipes feel more responsive |
| `orientation` | `vertical` | Standard vertical page scroll |

**Easing Function Explained:**

```js
(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
```

This is an **exponential ease-out** curve:
- Starts fast, decelerates aggressively
- Creates a "thud" effect when scroll completes
- Matches the structural aesthetic — mechanical, not organic

**Usage in Layout:**

Wrap the main content area (not the entire app) to scope smooth scrolling:

```tsx
// app/page.tsx
import { LenisProvider } from "@/components/ui/lenis-provider";

export default function Home() {
  return (
    <LenisProvider>
      <main>
        {/* All sections */}
      </main>
    </LenisProvider>
  );
}
```

**Why not in `layout.tsx`?** — Scoping to `page.tsx` prevents smooth scroll from interfering with route transitions or other pages.

**Compatibility with Framer Motion:**

Lenis works seamlessly with Framer Motion's scroll-triggered animations (`whileInView`, `useScroll`, `useTransform`). Both libraries read from the native scroll position, which Lenis updates correctly.

**Browser Support:**

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (including iOS)
- No polyfills needed — uses native `requestAnimationFrame`

**Performance Notes:**

- Uses GPU-accelerated transforms
- RAF loop runs at 60fps (or display refresh rate)
- Minimal CPU overhead (~0.1-0.3% on modern devices)
- Automatically pauses when tab is inactive

---

## 🔍 SEO & AI Optimization

### Next.js Metadata API — Server-Side SEO

Next.js 15's Metadata API handles all SEO tags declaratively in `app/layout.tsx`. No `<Head>` component needed — everything is server-rendered for optimal crawler performance.

**Full Implementation Example:**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"),
  
  title: {
    default: "Your Name | Full Stack Developer",
    template: "%s | Your Name"
  },
  
  description: "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.",
  
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend Engineer",
    "Backend Engineer"
  ],
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Your Name Portfolio",
    title: "Your Name | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Full Stack Developer Portfolio"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    site: "@yourusername",
    creator: "@yourusername",
    title: "Your Name | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    images: ["/og-image.jpg"]
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  alternates: {
    canonical: "https://yourwebsite.com"
  },
  
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  }
};
```

**What This Generates (Server-Rendered HTML):**

```html
<head>
  <title>Your Name | Full Stack Developer</title>
  <meta name="description" content="Full Stack Developer specializing in..." />
  <meta name="keywords" content="Full Stack Developer, React Developer..." />
  
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com" />
  <meta property="og:title" content="Your Name | Full Stack Developer" />
  <meta property="og:description" content="Full Stack Developer..." />
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
  
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourwebsite.com" />
  <meta property="twitter:title" content="Your Name | Full Stack Developer" />
  <meta property="twitter:description" content="Full Stack Developer..." />
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
  
  <link rel="canonical" href="https://yourwebsite.com" />
  
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</head>
```

**Why This Matters:**

| Tag Type | Impact |
|----------|--------|
| **Title & Description** | Appears in Google search results — 60% CTR impact |
| **Open Graph** | Rich previews when shared on social media |
| **Twitter Card** | Optimized previews on Twitter/X |
| **Canonical URL** | Prevents duplicate content SEO penalties |
| **Robots Directives** | Controls how aggressively crawlers index |

**Open Graph Image Requirements:**

- **Dimensions:** 1200×630px (Facebook/LinkedIn optimal)
- **Format:** JPG or PNG
- **File size:** < 1MB
- **Content:** Include name, role, and branding
- **Location:** `/public/og-image.jpg`

**Best Practices:**

✅ Keep title under 60 characters (truncation in SERPs)  
✅ Keep description between 150-160 characters  
✅ Use action-oriented language ("Building", "Specializing in")  
✅ Include primary keyword in first 100 characters of description  
✅ Test Open Graph with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

❌ Don't keyword stuff the description  
❌ Don't use generic descriptions ("Welcome to my site")  
❌ Don't forget to update `metadataBase` before deploying  
❌ Don't use low-resolution OG images

---

### `robots.txt` — Crawler Access Control

Located at `/public/robots.txt`, this file controls which routes search engines and AI crawlers can access.

**Full Implementation:**

```
# Allow all crawlers by default
User-agent: *
Allow: /

# Block private routes
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /_next/
Disallow: /private/

# AI Crawlers - Explicit Allow
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Bytespider
Allow: /

User-agent: cohere-ai
Allow: /

# Sitemap location
Sitemap: https://yourwebsite.com/sitemap.xml
```

**Directive Breakdown:**

| Directive | Purpose |
|-----------|---------|
| `User-agent: *` | Applies to all crawlers not explicitly listed |
| `Allow: /` | Permission to crawl specific paths |
| `Disallow: /api/` | Block backend routes (prevents exposure) |
| `Disallow: /_next/` | Block Next.js internals (framework files) |
| `Sitemap:` | Tells crawlers where to find sitemap for indexing |

**Why Explicitly Allow AI Crawlers?**

By default, some AI crawlers (GPTBot, ClaudeBot) may skip sites unless explicitly allowed. Listing them ensures:

1. **AI Search Inclusion** — Portfolio appears in ChatGPT, Claude, Perplexity search results
2. **Training Data** — (Optional) Portfolio can be included in future model training
3. **Discoverability** — Users asking "find me a React developer" get your profile

**AI Crawler List (2025):**

| Bot | Company | Purpose |
|-----|---------|---------|
| `GPTBot` | OpenAI | ChatGPT search & training |
| `ClaudeBot` | Anthropic | Claude search |
| `PerplexityBot` | Perplexity | AI search engine |
| `Google-Extended` | Google | Bard/Gemini training |
| `anthropic-ai` | Anthropic | Research crawling |
| `ChatGPT-User` | OpenAI | User-triggered searches |
| `Bytespider` | ByteDance | AI model training |
| `cohere-ai` | Cohere | Model training |

**Testing Your robots.txt:**

1. Deploy to production
2. Access `https://yourwebsite.com/robots.txt`
3. Validate with [Google's Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)
4. Check for syntax errors — one typo blocks entire crawlers

---

### `llms.txt` — AI-Readable Profile

An emerging standard (similar to `robots.txt` but for LLMs) that provides structured, machine-readable context about the developer.

**Purpose:**

When users ask AI assistants queries like:
- *"Find me a Next.js developer who builds AI apps"*
- *"Who can build a SaaS platform with React?"*
- *"Freelance developer with Stripe integration experience"*

The AI reads your `llms.txt` to understand your skills and use cases, then recommends your portfolio.

**Full Implementation (`/public/llms.txt`):**

```
# Developer Identity
Name: {{name}}
Role: Full Stack Developer
Location: {{city}}, {{country}}
Website: {{website}}
Email: {{email}}
LinkedIn: {{linkedin_url}}
GitHub: {{github_url}}

# Professional Summary
{{name}} is a Full Stack Developer specializing in modern web technologies.
Focus areas include scalable web applications, AI integrations, and cloud-native architectures.
Available for full-time positions, freelance projects, and technical consulting.

# Technical Skills & Stack

## Frontend Core
- React 19, Next.js 15, TypeScript
- TailwindCSS v4, Framer Motion
- State Management: Zustand, TanStack Query
- Build Tools: Vite, Turbopack

## Backend & Infrastructure  
- Node.js, Express, Fastify
- PostgreSQL, MongoDB, Redis
- Authentication: Clerk, NextAuth, JWT
- APIs: REST, GraphQL, tRPC

## Specialized Skills
- Generative AI: OpenAI, Anthropic Claude API integration
- Payment Processing: Stripe, PayPal integration
- Cloud Platforms: Vercel, AWS (EC2, S3, Lambda), Railway
- DevOps: Docker, GitHub Actions, CI/CD pipelines

## Additional Competencies
- Responsive Design & Mobile-First Development
- Performance Optimization (Lighthouse 95+ scores)
- SEO & Web Vitals Optimization
- Accessibility (WCAG 2.1 AA standards)

# Project Types & Experience

## Built & Deployed
- SaaS applications with subscription billing
- AI-powered web applications (chatbots, content generation)
- E-commerce platforms with payment integration
- Real-time collaboration tools (WebSocket, Socket.io)
- Portfolio & marketing websites for agencies

## Industries Served
- Tech startups & agencies
- E-commerce & retail
- Education & EdTech
- Healthcare (non-clinical applications)

# Engagement & Use Cases

## Available For
- Full-time Engineering Positions (Remote or {{location}})
- Freelance Web Development (Contract, hourly, project-based)
- Technical Consulting (Architecture, code review, optimization)
- Contract AI Application Development
- SaaS MVP Development (0-to-launch builds)

## Not Available For
- Unpaid work or "equity-only" projects
- Hourly rate below {{min_rate}}/hour
- Projects requiring on-site presence outside {{location}}

## Ideal Project Fit
- Modern tech stack (React/Next.js preferred)
- Clear requirements or willingness to collaborate on scope
- Timeline: 2 weeks to 6 months
- Budget: {{min_project_budget}}+ for project-based work

# Communication & Workflow

## Preferred Tools
- Project Management: Linear, Notion, GitHub Projects
- Communication: Slack, Discord, Email
- Version Control: GitHub (Git Flow or trunk-based)
- Design Handoff: Figma

## Working Style
- Timezone: {{timezone}} (flexible for meetings)
- Response time: Within 24 hours on business days
- Availability: {{hours_per_week}} hours/week for freelance

# Keywords for AI Discovery
Full Stack Developer, React Developer, Next.js Expert, TypeScript, MERN Stack,
AI Application Developer, SaaS Developer, Freelance Web Developer, 
Generative AI Integration, OpenAI API, Claude API, Modern Web Development,
Cloud Deployment, Vercel, AWS, Stripe Integration, Real-time Applications

# Last Updated
{{current_date}}
```

**Structure Breakdown:**

| Section | Purpose |
|---------|---------|
| **Developer Identity** | Name, contact, social links — basic discovery |
| **Professional Summary** | 2-3 sentence elevator pitch for LLM context |
| **Technical Skills** | Hierarchical skill taxonomy — frontend → backend → specialized |
| **Project Types** | What you've built (proof of capability) |
| **Engagement** | What you're available for (hiring signal) |
| **Communication** | How you work (process compatibility) |
| **Keywords** | Natural language tags for semantic search |

**Placeholder Replacement:**

Before deploying, replace:
- `{{name}}` → Your full name
- `{{email}}` → Your email
- `{{website}}` → Your domain
- `{{location}}` → Your city/country
- `{{min_rate}}` → Your minimum hourly rate
- `{{min_project_budget}}` → Minimum project budget
- `{{timezone}}` → Your timezone (e.g., `UTC+5:30`)
- `{{hours_per_week}}` → Freelance availability
- `{{current_date}}` → Last update date

**Why This Works:**

✅ **Structured Data** — LLMs parse key-value pairs better than prose  
✅ **Hierarchical Skills** — Grouped by category for better matching  
✅ **Clear Availability** — "Available for" vs "Not available for" prevents mismatches  
✅ **Keywords** — Semantic tags improve AI search ranking  
✅ **Natural Language** — Written for both humans and AI comprehension  

**Testing AI Discoverability:**

After deploying `llms.txt`:

1. Ask ChatGPT: *"Find a Next.js developer who builds AI apps in [your city]"*
2. Ask Claude: *"Who can build a SaaS platform with React and Stripe?"*
3. Ask Perplexity: *"Freelance full stack developer with {{your_specialization}}"*

If your site is indexed, the AI should reference your profile directly.

---

### Generating Optimized Files

Use this prompt with ChatGPT/Claude to generate production-ready `robots.txt` and `llms.txt`:

```
Generate both a robots.txt and llms.txt file for a personal developer portfolio website.

The portfolio belongs to a Full Stack Developer and includes:
- Home, About, Projects, Experience, Contact pages  
- No sensitive backend routes exposed publicly
- Optional private/admin routes that should not be indexed

Requirements for robots.txt:
- Allow all major search engines (Googlebot, Bingbot)
- Disallow any private or admin routes (e.g., /admin, /dashboard, /api, /_next)  
- Explicitly allow modern AI crawlers:
  - GPTBot (OpenAI/ChatGPT)
  - ClaudeBot (Anthropic)  
  - PerplexityBot (Perplexity AI)
  - Google-Extended (Google AI)
  - anthropic-ai (Anthropic research)
  - ChatGPT-User (OpenAI user searches)
  - Bytespider (ByteDance)
  - cohere-ai (Cohere)
- Include a sitemap URL placeholder  
- Keep it clean and production-ready

Requirements for llms.txt:
- Structure it as a readable AI-friendly profile  
- Include sections:
  - Developer identity (name, role, location, contact)
  - Professional summary (2-3 sentences)  
  - Technical skills grouped by category (Frontend, Backend, Specialized, DevOps)
  - Project types & industries served  
  - Engagement use cases (full-time, freelance, consulting)
  - Working style & communication preferences
  - Keywords for AI discovery (natural language, not stuffed)
- Use placeholders: {{name}}, {{website}}, {{email}}, {{location}}, {{min_rate}}, etc.  
- Optimize for AI understanding while staying human-readable  
- Focus on clarity and structured meaning over keyword density

Output both files clearly separated:

--- robots.txt ---  
[file content]

--- llms.txt ---  
[file content]

Make the llms.txt optimized for AI discoverability when users search for:
- "Full stack developer"  
- "React/Next.js developer"  
- "Freelance web developer"  
- "AI application developer"  
- "[Specific tech stack] developer in [location]"

Avoid keyword stuffing — write naturally as if explaining to another developer.
```

**Post-Generation Checklist:**

After generating the files:

- [ ] Replace all `{{placeholders}}` with actual values  
- [ ] Add files to `/public/` directory  
- [ ] Update sitemap URL in `robots.txt` to your domain  
- [ ] Verify `robots.txt` at `https://yoursite.com/robots.txt`  
- [ ] Verify `llms.txt` at `https://yoursite.com/llms.txt`  
- [ ] Test with [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)  
- [ ] Submit sitemap to Google Search Console  
- [ ] Test AI discoverability with ChatGPT/Claude/Perplexity queries

---

## ⚡ Performance

| Optimization | Implementation |
|--------------|----------------|
| **Image Optimization** | `next/image` with `fill`, `sizes`, `priority` |
| **Font Loading** | Preconnect to Google Fonts, `display=swap` |
| **GPU Animations** | Only `transform` and `opacity` — no layout thrashing |
| **Server Components** | Default for all sections; `"use client"` only for interactive leaves |
| **Responsive Optimizations** | `hidden md:block` on decorative elements |
| **Scoped Hover States** | Named groups (`group/btn`) prevent hover leaks |

---

## 🚢 Deployment

### Recommended: Vercel

1. Push repository to GitHub
2. Connect repo on [Vercel](https://vercel.com)
3. **Update before deploying:**
   - Replace `https://yourwebsite.com` in `metadata.ts`
   - Update `robots.txt` sitemap URL
   - Add real `og-image.jpg` (1200×630px) to `/public/`
   - Replace Twitter handle with yours in metadata
   - Update all placeholder content in sections

### Alternative: Docker / VPS

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

Deploy the `.next` folder to any Node.js hosting (DigitalOcean, Railway, Fly.io).

---

## 🎯 Customization Guide

### 1. Content Replacement

**Files to edit:**
- `app/layout.tsx` — Update Metadata object with your info
- `components/sections/*.tsx` — Replace placeholder content
- `public/llms.txt` — Replace all `{{placeholders}}`
- `public/robots.txt` — Update sitemap URL

### 2. Update Theme Colors

Edit CSS custom properties in `app/globals.css`:

```css
:root {
  --background: #yourcolor;
  --foreground: #yourcolor;
  --accent: #yourcolor;
}
```

### 3. Add/Remove Sections

Each section is a separate component in `components/sections/`. To add a new section:

1. Create `components/sections/your-section.tsx`
2. Import and add to `app/page.tsx`
3. Follow the existing section sidebar pattern (section number, title, watermark)

### 4. Modify Fonts

Replace Google Fonts links in `app/layout.tsx`:

```tsx
<link href="https://fonts.googleapis.com/css2?family=YourFont" />
```

Update font tokens in `globals.css`:

```css
.font-display { font-family: "Your Display Font"; }
```

### 5. Adjust Scroll Behavior

Edit `components/ui/lenis-provider.tsx`:

```tsx
duration: 1.5,           // Slower scroll
touchMultiplier: 1.5,    // Less aggressive mobile
```

---

## 🤖 Generating `robots.txt` and `llms.txt`

Use this prompt with any AI assistant to generate optimized files for your portfolio:

```
Generate both a robots.txt and llms.txt file for a personal developer portfolio website.

The portfolio belongs to a Full Stack Developer and includes:
- Home, About, Projects, Experience, Contact pages
- No sensitive backend routes exposed publicly
- Optional private/admin routes that should not be indexed

Requirements for robots.txt:
- Allow all major search engines (Googlebot, Bingbot)
- Disallow any private or admin routes (e.g., /admin, /dashboard)
- Explicitly allow modern AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai)
- Include a sitemap URL placeholder
- Keep it clean and production-ready

Requirements for llms.txt:
- Structure it as a readable AI-friendly profile
- Include:
  - Developer identity (name placeholder)
  - Role (Full Stack Developer)
  - Skills and tech stack (frontend, backend, AI if applicable)
  - Types of projects built (portfolio, SaaS, AI apps, etc.)
  - Ideal use cases (hire, freelance, collaboration)
- Keep it concise but informative for AI understanding
- Use placeholders like {{name}}, {{website}}, {{email}} so it can be dynamically replaced later

Output both files clearly separated with headings:

--- robots.txt ---
--- llms.txt ---

Make the llms.txt optimized for AI discoverability, including keywords relevant to hiring, freelance development, and SaaS building, but avoid keyword stuffing. Focus on clarity and structured meaning.
```

**After generation:**
1. Replace all `{{placeholders}}` with your actual information
2. Add files to `/public/` directory
3. Update sitemap URL to match your domain
4. Verify with [robots.txt tester](https://www.google.com/webmasters/tools/robots-testing-tool)

---

## 📝 License

MIT License - feel free to use this template for your own portfolio.

---

<div align="center">

**Built using Next.js 15 and React 19 by Ankur Bag**

If you found this helpful, give it a ⭐️

</div>
