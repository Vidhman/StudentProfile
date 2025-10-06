# Design Guidelines: Vidhman Agarwal Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from minimal, modern portfolio sites like Linear (clean typography, generous spacing), Stripe (confidence through restraint), and academic portfolios with emphasis on credibility and clarity.

## Core Design Principles
- **Minimal & Accessible**: Clean, uncluttered layouts with strong hierarchy
- **Credibility-First**: Professional presentation for admissions/academic audiences
- **Student-Friendly**: Warm, approachable without sacrificing technical fluency
- **Content-Forward**: Let projects and achievements speak prominently

## Color Palette

**Primary Colors:**
- Midnight Navy: `#0b1220` (203 81% 8%) - Main background, headers
- Electric Blue: `#2563eb` (217 91% 60%) - CTAs, links, accents
- Soft Mint: `#bfe5db` (161 43% 81%) - Subtle highlights, success states
- Warm Sand: `#f7f3ef` (30 33% 96%) - Light backgrounds, cards
- High-Contrast Text: `#111827` (220 26% 14%) - Body text

**Usage:**
- Dark sections use Midnight Navy backgrounds with white/Warm Sand text
- Light sections use Warm Sand backgrounds with High-Contrast text
- Electric Blue for all interactive elements and emphasis
- Soft Mint sparingly for badges, subtle accents, gentle highlights

## Typography

**Headings**: Bold geometric sans-serif (Poppins, Space Grotesk, or similar)
- H1: text-5xl md:text-6xl, font-bold, tracking-tight
- H2: text-3xl md:text-4xl, font-bold
- H3: text-2xl md:text-3xl, font-semibold
- H4: text-xl md:text-2xl, font-semibold

**Body**: Clean humanist sans-serif (Inter, Source Sans Pro, or similar)
- Base: text-base md:text-lg, leading-relaxed (1.6)
- Large: text-lg md:text-xl for important paragraphs
- Small: text-sm for metadata, captions

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-4
- Standard spacing: p-6, py-8, gap-8
- Section spacing: py-16 md:py-24
- Component spacing: p-8, gap-12

**Container Strategy:**
- Max width: max-w-7xl for main content
- Narrow content: max-w-4xl for text-heavy sections (About)
- Full-width: w-full for hero, footer

## Component Library

### Navigation
- Sticky top navigation (sticky top-0 z-50)
- Transparent on dark hero, solid on scroll
- Logo/name left, nav links center, primary CTA right
- Mobile: Hamburger menu with full-screen overlay

### Hero Section (Homepage)
- Large hero image: Workspace/project photo with subtle overlay
- Headline: "Engineering Empathy through Innovation" (text-5xl md:text-7xl)
- Subheadline: 2-3 lines, max-w-3xl
- Three CTAs: Primary (Electric Blue solid), Secondary (outline), Tertiary (ghost)
- Height: min-h-screen with content centered

### Highlight Badges (Homepage)
- Four badges in 2x2 or 4-column grid
- Icon + short text format
- Soft Mint background with Electric Blue icons
- Rounded corners (rounded-lg), padding p-6

### Project Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Image/thumbnail top, title, one-line pitch, summary (4-6 lines), tech stack pills, link buttons
- Hover: Subtle lift (shadow-lg transform transition)
- Warm Sand background with High-Contrast text

### Testimonial Quotes
- Large quotation marks (decorative)
- Quote text (text-xl, italic)
- Attribution (name, title) below
- Soft border-left accent in Electric Blue

### Timeline (Résumé page)
- Vertical line with milestone nodes
- Year markers on left, content on right
- Alternating connection points for visual interest

### Contact Form
- Large, accessible inputs (min-h-12)
- Labels above fields (text-sm font-medium)
- Electric Blue focus states
- Submit button: Large, Electric Blue background
- Helper text below fields when needed

### Awards Grid
- 2-column layout on desktop, single column mobile
- Each award: Title, date, description
- Subtle dividers between items
- Icons/badges for different award types

## Images

**Hero Image (Homepage)**: Wide workspace shot showing engineering/robotics equipment, warm lighting, slightly desaturated to maintain text readability over image. Image should be full-width, min-h-screen with dark gradient overlay (from bottom).

**Project Cards**: Screenshots or photos of each project:
- SoulSound: Interface screenshot or device in use
- Bharati Braille Translator: Code editor or output sample
- Waste Robot: Diagram/concept render
- Health Solution: Hardware prototype photo
- Exoplanet Simulator: Unity interface screenshot

**About Page**: Optional portrait or casual workspace photo, max-w-md, rounded-lg

**Leadership Section**: Community engagement photos (if available) or icon-based visual instead

All images should have descriptive alt text following pattern: "Photo of [device] showing [function] used by [user/context]"

## Accessibility Requirements
- Large tap targets (min 44x44px)
- Strong color contrast (WCAG AA minimum)
- Line spacing: 1.5-1.6 for body text
- Focus indicators on all interactive elements (ring-2 ring-Electric Blue)
- Semantic HTML structure
- Alt text on all images
- Skip to content link

## Page-Specific Layouts

**Homepage**: Hero → Highlight Badges → Featured Projects (3 cards) → Testimonial → CTA Strip → Footer

**Projects**: Page header → Project grid (5 cards) → Each card expandable or links to detail view

**Research**: Publication cards → Conference section → Mentors section → In Progress section

**Leadership**: Role description → Community projects list → Reflection quote (callout box)

**Awards**: Chronological grid with year groupings

**About**: Three-section layout (My Why, Today, Tomorrow) with generous spacing

**Contact**: Split layout - Form left (60%), Direct links + note right (40%)

**Résumé**: Download CTA prominent → Interactive timeline below

## Animations
Use very sparingly:
- Fade-in on scroll for project cards
- Subtle hover transforms on cards (translateY(-4px))
- Smooth page transitions
- No distracting motion

## Footer
- Full-width Midnight Navy background
- Copyright notice, quick links to all pages
- Social links (Email, LinkedIn, GitHub) with icons
- "Built with care" tagline