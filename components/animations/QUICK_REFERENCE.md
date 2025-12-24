# Animation System Quick Reference

One-page cheat sheet for the Happy Home Care animation system.

## Import Shortcuts

```tsx
// All-in-one import
import {
  PageTransition,
  PageTransitionContainer,
  PageTransitionSection,
  SlidePageTransition,
  SmoothScroll,
  useLenis,
  ScrollToTop,
  // Animation variants
  fadeInUp,
  scaleIn,
  staggerContainer,
  buttonWithShadow,
} from "@/components/animations";
```

## Common Patterns

### Basic Page

```tsx
export default function Page() {
  return (
    <PageTransition>
      <YourContent />
    </PageTransition>
  );
}
```

### Staggered Page

```tsx
export default function Page() {
  return (
    <PageTransitionContainer>
      <PageTransitionSection><Hero /></PageTransitionSection>
      <PageTransitionSection><Services /></PageTransitionSection>
      <PageTransitionSection><CTA /></PageTransitionSection>
    </PageTransitionContainer>
  );
}
```

### Smooth Scroll Navigation

```tsx
function Nav() {
  const { scrollTo } = useLenis();

  return (
    <button onClick={() => scrollTo("#contact", { offset: -80 })}>
      Contact
    </button>
  );
}
```

### Animated Card Grid

```tsx
<motion.div variants={staggerContainer} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={scaleIn}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Interactive Button

```tsx
<motion.button
  variants={buttonWithShadow}
  whileHover="hover"
  whileTap="tap"
>
  Click Me
</motion.button>
```

## Animation Variants Cheat Sheet

### Fade
- `fadeVariants` - Simple fade
- `fadeInUp` - Fade from bottom
- `fadeInDown` - Fade from top
- `fadeInLeft` - Fade from left
- `fadeInRight` - Fade from right

### Scale
- `scaleIn` - Scale up
- `scaleInBounce` - Scale with bounce

### Slide
- `slideUp` - Slide from bottom
- `slideDown` - Slide from top
- `slideInFromLeft` - Slide from left
- `slideInFromRight` - Slide from right

### Hero
- `heroTextReveal` - Dramatic text
- `heroSubtitleReveal` - Subtitle blur
- `heroCTAReveal` - CTA button

### Stagger
- `staggerContainer` - Normal (0.1s)
- `staggerContainerFast` - Fast (0.05s)
- `staggerContainerSlow` - Slow (0.15s)
- `staggerGrid` - Grid layout

### Interactive
- `buttonHover` - Button scale
- `buttonWithShadow` - Button lift
- `iconHover` - Icon wiggle
- `arrowHover` - Arrow slide

## useLenis API

```tsx
const { scrollTo, stop, start, lenis } = useLenis();

// Scroll to element
scrollTo("#section");

// Scroll with options
scrollTo("#contact", {
  offset: -80,
  duration: 1.5,
  onComplete: () => console.log("Done!")
});

// Scroll to position
scrollTo(500);

// Stop/start scrolling
stop();
start();
```

## Props Reference

### PageTransition
```tsx
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}
```

### SlidePageTransition
```tsx
interface SlidePageTransitionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}
```

### SmoothScroll
```tsx
interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
  enabled?: boolean;
  duration?: number;
  easing?: number;
  direction?: "vertical" | "horizontal" | "both";
  smoothTouch?: boolean;
  onScroll?: (e: ScrollEvent) => void;
}
```

### ScrollToTop
```tsx
interface ScrollToTopProps {
  className?: string;
  children?: React.ReactNode;
  showAt?: number;
}
```

## Common Issues & Fixes

### Animation not working
```tsx
// Add "use client" at top
"use client";

// Ensure parent has initial/animate
<motion.div initial="hidden" animate="visible">
```

### Jerky scroll
```tsx
// Reduce duration
<SmoothScroll duration={0.8}>

// Disable on touch
<SmoothScroll smoothTouch={false}>
```

### Layout shifts
```tsx
// Use transform, not width/height
<motion.div animate={{ x: 100 }} /> ✅
<motion.div animate={{ width: 100 }} /> ❌
```

## Testing Checklist

- [ ] Test with reduced motion enabled
- [ ] Test on mobile devices
- [ ] Check smooth scroll on touch
- [ ] Verify keyboard navigation works
- [ ] Profile with React DevTools
- [ ] Check layout shifts in DevTools
- [ ] Test screen reader navigation

## Performance Tips

1. Use GPU properties only (`transform`, `opacity`, `filter`)
2. Set explicit dimensions to prevent reflow
3. Debounce scroll event handlers
4. Use `AnimatePresence` with `mode="wait"`
5. Limit `will-change` to animating elements only

## Files Reference

- `PageTransition.tsx` - Page transition components
- `SmoothScroll.tsx` - Smooth scroll components
- `index.ts` - Central exports
- `examples.tsx` - Usage examples
- `README.md` - Component documentation
- `ANIMATION_GUIDE.md` - Comprehensive guide
- `QUICK_REFERENCE.md` - This file

## Links

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Docs](https://github.com/studio-freight/lenis)
- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

Happy Home Care © 2024
