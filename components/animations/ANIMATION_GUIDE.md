# Happy Home Care - Animation System Guide

Complete guide to the award-winning animation system built for the Happy Home Care website.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Core Components](#core-components)
4. [Animation Variants](#animation-variants)
5. [Best Practices](#best-practices)
6. [Performance Optimization](#performance-optimization)
7. [Accessibility](#accessibility)
8. [Examples](#examples)

## Overview

The Happy Home Care animation system provides:

- **Smooth page transitions** between routes
- **Buttery smooth scrolling** across the entire site
- **Staggered animations** for visual hierarchy
- **Accessibility-first** design with reduced motion support
- **Performance-optimized** with GPU acceleration
- **Production-ready** TypeScript components

### Tech Stack

- **Framer Motion 12.x** - Animation library
- **Lenis 1.3.x** - Smooth scroll engine
- **React 19** - Latest React features
- **Next.js 15** - App Router support
- **TypeScript 5** - Full type safety

## Architecture

```
components/animations/
├── PageTransition.tsx      # Page transition wrapper
├── SmoothScroll.tsx        # Smooth scroll provider
├── index.ts                # Central exports
├── examples.tsx            # Usage examples
└── README.md               # Quick reference

lib/animations/
├── variants.ts             # Framer Motion variants
├── easings.ts              # Custom easing functions
└── transitions.ts          # Transition presets
```

### Component Hierarchy

```
RootLayout (layout.tsx)
└── SmoothScroll
    ├── Header
    ├── PageTransition
    │   └── Page Content (children)
    └── Footer
```

## Core Components

### 1. PageTransition

Main page transition wrapper with fade and slide effects.

```tsx
import { PageTransition } from "@/components/animations";

export default function Page() {
  return (
    <PageTransition>
      <YourContent />
    </PageTransition>
  );
}
```

**Features:**
- Automatic route change detection
- Smooth fade + slide + blur effect
- Reduced motion support
- GPU-accelerated transforms

**Props:**
```typescript
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}
```

### 2. PageTransitionContainer

Enhanced version with staggered children animations.

```tsx
import { PageTransitionContainer, PageTransitionSection } from "@/components/animations";

export default function Page() {
  return (
    <PageTransitionContainer>
      <PageTransitionSection>
        <HeroSection />
      </PageTransitionSection>
      <PageTransitionSection>
        <ServicesSection />
      </PageTransitionSection>
    </PageTransitionContainer>
  );
}
```

**Features:**
- Sections animate in sequence
- Customizable stagger timing
- Smooth visual hierarchy
- Perfect for long-form pages

### 3. SlidePageTransition

Alternative transition with directional slide.

```tsx
import { SlidePageTransition } from "@/components/animations";

export default function Page() {
  return (
    <SlidePageTransition direction="right">
      <YourContent />
    </SlidePageTransition>
  );
}
```

**Props:**
```typescript
interface SlidePageTransitionProps extends PageTransitionProps {
  direction?: "left" | "right";
}
```

### 4. SmoothScroll

Smooth scrolling provider using Lenis.

```tsx
// Already implemented in layout.tsx
import { SmoothScroll } from "@/components/animations";

export default function RootLayout({ children }) {
  return (
    <SmoothScroll>
      {children}
    </SmoothScroll>
  );
}
```

**Features:**
- 60fps smooth scrolling
- Touch gesture support
- Reduced motion support
- Programmatic scroll API
- Zero config needed

**Props:**
```typescript
interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  enabled?: boolean;           // Default: true
  duration?: number;            // Default: 1
  easing?: number;              // Default: 0.1
  direction?: "vertical" | "horizontal" | "both";
  smoothTouch?: boolean;        // Default: false
  onScroll?: (e: ScrollEvent) => void;
}
```

### 5. useLenis Hook

Programmatic scroll control.

```tsx
import { useLenis } from "@/components/animations";

function MyComponent() {
  const { scrollTo, stop, start, lenis } = useLenis();

  return (
    <button onClick={() => scrollTo("#contact", { offset: -80 })}>
      Contact Us
    </button>
  );
}
```

**API:**
```typescript
interface UseLenisReturn {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: ScrollToOptions) => void;
  stop: () => void;
  start: () => void;
}

interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
  immediate?: boolean;
  onComplete?: () => void;
}
```

### 6. ScrollToTop

Animated scroll-to-top button.

```tsx
import { ScrollToTop } from "@/components/animations";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ScrollToTop
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full"
        showAt={400}
      />
    </>
  );
}
```

**Props:**
```typescript
interface ScrollToTopProps {
  className?: string;
  children?: React.ReactNode;  // Custom icon/text
  showAt?: number;              // Show after X pixels (default: 400)
}
```

## Animation Variants

Pre-built animation variants from `/lib/animations/variants.ts`:

### Fade Variants

```typescript
fadeVariants        // Simple fade in/out
fadeInUp            // Fade in from bottom
fadeInDown          // Fade in from top
fadeInLeft          // Fade in from left
fadeInRight         // Fade in from right
```

### Scale Variants

```typescript
scaleIn             // Scale up with fade
scaleInBounce       // Scale up with bounce
```

### Slide Variants

```typescript
slideUp             // Slide up from bottom
slideDown           // Slide down from top
slideInFromLeft     // Slide in from left
slideInFromRight    // Slide in from right
```

### Hero Variants

```typescript
heroTextReveal      // Dramatic hero text reveal
heroSubtitleReveal  // Subtitle with blur effect
heroCTAReveal       // CTA button reveal
```

### Stagger Variants

```typescript
staggerContainer         // Normal stagger (0.1s)
staggerContainerFast     // Fast stagger (0.05s)
staggerContainerSlow     // Slow stagger (0.15s)
staggerGrid             // Grid layout stagger
```

### Interactive Variants

```typescript
buttonHover          // Button scale on hover
buttonWithShadow     // Button with shadow lift
iconHover            // Icon wiggle on hover
arrowHover           // Arrow slide on hover
```

### Usage Example

```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations/variants";

function MyComponent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeInUp}>
        Welcome
      </motion.h1>
      <motion.p variants={fadeInUp}>
        Compassionate care
      </motion.p>
    </motion.div>
  );
}
```

## Best Practices

### 1. One SmoothScroll Per App

✅ **Correct:**
```tsx
// layout.tsx
<SmoothScroll>
  <App />
</SmoothScroll>
```

❌ **Incorrect:**
```tsx
// Multiple SmoothScroll components
<SmoothScroll>
  <Page1 />
</SmoothScroll>
<SmoothScroll>
  <Page2 />
</SmoothScroll>
```

### 2. PageTransition Per Route

✅ **Correct:**
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <PageTransition>
      <AboutContent />
    </PageTransition>
  );
}
```

### 3. Use Stagger for Multiple Elements

✅ **Correct:**
```tsx
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### 4. Respect GPU Acceleration

✅ **Correct:**
```tsx
// Animate transform and opacity only
<motion.div
  animate={{ x: 100, opacity: 1 }}
/>
```

❌ **Incorrect:**
```tsx
// Animating layout properties causes reflow
<motion.div
  animate={{ width: 200, height: 300 }}
/>
```

### 5. Always Test Reduced Motion

```tsx
useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  console.log("Reduced motion:", prefersReducedMotion);
}, []);
```

## Performance Optimization

### 1. GPU Acceleration

All animations use GPU-accelerated properties:
- `transform` (x, y, scale, rotate)
- `opacity`
- `filter` (blur)

### 2. Will-Change Hints

Components automatically set `will-change` for browser optimization:

```tsx
<motion.div
  style={{ willChange: "opacity, transform" }}
/>
```

### 3. Lazy Loading

Use `AnimatePresence` with `mode="wait"` to avoid multiple animations:

```tsx
<AnimatePresence mode="wait">
  <motion.div key={pathname}>
    {children}
  </motion.div>
</AnimatePresence>
```

### 4. Debounce Scroll Events

When using `onScroll` callback, debounce expensive operations:

```tsx
import { debounce } from "lodash";

const handleScroll = debounce((e) => {
  // Expensive operation
}, 100);

<SmoothScroll onScroll={handleScroll}>
  {children}
</SmoothScroll>
```

### 5. Monitor Performance

Use React DevTools Profiler:

```bash
# Build and analyze
npm run build
npm run start

# Check for animation jank in DevTools Performance tab
```

## Accessibility

### Reduced Motion Support

All components automatically detect `prefers-reduced-motion`:

```tsx
// Automatically handled
<PageTransition>
  {/* Simple fade for reduced motion users */}
  {/* Full animation for others */}
</PageTransition>
```

### Manual Testing

```bash
# macOS
System Preferences → Accessibility → Display → Reduce motion

# Windows
Settings → Ease of Access → Display → Show animations

# Chrome DevTools
Rendering → Emulate CSS media feature prefers-reduced-motion
```

### Keyboard Navigation

Smooth scroll doesn't interfere with keyboard navigation:
- Tab key still works
- Focus indicators visible
- Skip links functional

### Screen Readers

Animations don't affect screen reader navigation:
- Content remains in DOM during animation
- No `display: none` used
- ARIA labels preserved

## Examples

### Example 1: Simple Page

```tsx
// app/about/page.tsx
import { PageTransition } from "@/components/animations";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1>About Us</h1>
        <p>Content here...</p>
      </div>
    </PageTransition>
  );
}
```

### Example 2: Hero with Stagger

```tsx
// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideUp } from "@/lib/animations/variants";

export function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center"
    >
      <motion.h1 variants={fadeInUp}>
        Happy Home Care
      </motion.h1>
      <motion.p variants={fadeInUp}>
        Compassionate care in your home
      </motion.p>
      <motion.button variants={slideUp}>
        Get Started
      </motion.button>
    </motion.section>
  );
}
```

### Example 3: Scroll to Section

```tsx
// components/Navigation.tsx
"use client";

import { useLenis } from "@/components/animations";

export function Navigation() {
  const { scrollTo } = useLenis();

  return (
    <nav>
      <button onClick={() => scrollTo("#services", { offset: -80 })}>
        Services
      </button>
      <button onClick={() => scrollTo("#contact", { offset: -80 })}>
        Contact
      </button>
    </nav>
  );
}
```

### Example 4: Animated Card Grid

```tsx
"use client";

import { motion } from "framer-motion";
import { staggerGrid, scaleIn } from "@/lib/animations/variants";

export function ServiceGrid() {
  const services = [...]; // Your services

  return (
    <motion.div
      variants={staggerGrid}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-3 gap-8"
    >
      {services.map((service) => (
        <motion.div
          key={service.id}
          variants={scaleIn}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## Troubleshooting

### Animations Not Working

1. Check `"use client"` directive at top of file
2. Verify Framer Motion is installed: `npm list framer-motion`
3. Check browser console for errors
4. Ensure parent has `initial` and `animate` props

### Jerky Scrolling

1. Disable smooth scroll on touch: `smoothTouch={false}`
2. Reduce duration: `duration={0.8}`
3. Check for heavy scroll event listeners
4. Test on target devices

### Layout Shifts

1. Use `transform` instead of `width/height`
2. Set explicit dimensions on animated elements
3. Use `will-change` sparingly
4. Avoid animating `margin` or `padding`

### Memory Leaks

1. Cleanup event listeners in useEffect
2. Cancel animation frames on unmount
3. Destroy Lenis instance on cleanup
4. Remove global references

## Version History

- **v1.0.0** - Initial release
  - PageTransition component
  - SmoothScroll component
  - Full animation variant library
  - Accessibility support
  - Performance optimizations

## Support

For issues or questions:
- Check `/components/animations/examples.tsx`
- Review this guide
- Test with reduced motion enabled
- Profile with React DevTools

## License

MIT - Happy Home Care © 2024
