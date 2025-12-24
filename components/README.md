# Medical Service Company Components

## Overview

This directory contains reusable React components for the Medical Service Company website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Components

### HeroSection

A full-width hero section with background gradient, overlay, and animated content.

**Features:**
- Responsive text sizing (smaller on mobile)
- Framer Motion fade-in and slide-up animations
- Two CTA buttons (Get Started - orange, Our Services - teal outline)
- Animated scroll indicator
- Dark overlay for text readability

**Usage:**
```tsx
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  return <HeroSection />;
}
```

**Customization:**
- Replace the background image URL in the component: `backgroundImage: "url('/images/hero-bg.jpg')"`
- Modify text content directly in the component
- Adjust colors using Tailwind classes or CSS variables

---

### ServicesGrid

A responsive grid displaying service cards with icons, descriptions, and links.

**Features:**
- 4-column responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- Animated service cards with staggered entrance
- Lucide-react icons (Home, Heart, Clock, HandHeart, Stethoscope, Brain)
- Hover effects with lift and shadow
- Links to `/services/[slug]` pages
- Gradient icon backgrounds

**Usage:**
```tsx
import { ServicesGrid } from "@/components/services-grid";

export default function HomePage() {
  return (
    <div>
      {/* Other content */}
      <ServicesGrid />
      {/* Other content */}
    </div>
  );
}
```

**Data Source:**
- Imports services from `@/lib/content-data`
- Icons mapped from string to Lucide components
- Each service requires: `slug`, `title`, `shortDescription`, `icon`

---

### StatsSection

A statistics display with animated counting numbers on a teal background.

**Features:**
- 4 columns on desktop, 2 on tablet, 1 on mobile
- Animated number counting on scroll into view
- Handles numbers with commas and suffixes (e.g., "5,000+", "20+")
- Decorative underlines with staggered animation
- Optional CTA button
- Teal gradient background

**Usage:**
```tsx
import { StatsSection } from "@/components/stats-section";

export default function HomePage() {
  return (
    <div>
      {/* Other content */}
      <StatsSection />
      {/* Other content */}
    </div>
  );
}
```

**Data Source:**
- Imports stats from `@/lib/content-data`
- Each stat requires: `number` (string with formatting), `label`

---

## Complete Page Example

```tsx
// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { StatsSection } from "@/components/stats-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
    </main>
  );
}
```

---

## Design System

### Colors

The components use the color scheme defined in `globals.css`:

- **Primary Orange:** `#eb981c` - CTA buttons, accents
- **Primary Teal:** `#007486` - Links, secondary elements, backgrounds
- **Orange Dark:** `#d4860a` - Hover states
- **Teal Dark:** `#005c6b` - Hover states
- **Orange Light:** `#f5b84d` - Gradients
- **Teal Light:** `#00a3b3` - Gradients

### Typography

- **Body Font:** Roboto (`--font-roboto`)
- **Accent Font:** ABeeZee (`--font-abeezee`) - Used for headings

### Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (sm to lg)
- **Desktop:** > 1024px (lg+)

---

## Animation Details

### HeroSection Animations

```typescript
// Title animation
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
duration: 0.8s

// Staggered delays:
- Title: 0s
- Subtitle: 0.2s
- Buttons: 0.4s
- Scroll indicator: 1s
```

### ServicesGrid Animations

```typescript
// Staggered children
staggerChildren: 0.1s
delayChildren: 0.2s

// Card animation
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
duration: 0.6s
```

### StatsSection Animations

```typescript
// Number counting
duration: 2s
easing: easeOutQuart (1 - (1 - progress)^4)

// Staggered cards: index * 0.1s
// Decorative line: index * 0.1s + 0.4s
```

---

## Accessibility

All components include:
- Semantic HTML elements
- Proper heading hierarchy
- Keyboard navigation support
- ARIA attributes where needed
- Sufficient color contrast ratios
- Focus states on interactive elements

---

## Performance

- Components use `"use client"` directive only when needed (animations, interactivity)
- Framer Motion animations use GPU-accelerated transforms
- `viewport={{ once: true }}` prevents re-animation on scroll
- Lazy loading with `margin` offsets for smoother entrance

---

## Dependencies

- `framer-motion` - Animations and transitions
- `lucide-react` - Icon components
- `clsx` & `tailwind-merge` - Utility class merging
- `next` & `react` - Framework and library

---

## File Paths

```
/root/github-repos/medical-service-company/
├── components/
│   ├── hero-section.tsx
│   ├── services-grid.tsx
│   └── stats-section.tsx
├── lib/
│   ├── content-data.ts (data source)
│   └── utils.ts (cn function)
└── app/
    └── globals.css (design system)
```
