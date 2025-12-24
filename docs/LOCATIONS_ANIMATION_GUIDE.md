# Locations Pages - Animation Reference Guide

## Quick Start

All locations pages now feature award-winning animations. Here's how to use and customize them.

## Animation Features by Page

### Main Locations Page (`/locations`)

#### 1. Hero Section
```tsx
// Features:
- Parallax background (speed: 0.5)
- Floating gradient orbs (8s & 10s cycles)
- Icon with ping animation (2s cycle)
- Text reveals with clip-path
- Gradient text highlight
```

#### 2. Stats Section
```tsx
// Animated Counters:
const [count, ref] = useCounter(targetNumber, {
  suffix: "+",
  duration: 2000,
  decimals: 0,
});

// Usage:
<div ref={ref}>{count}</div>
```

#### 3. Location Cards
```tsx
// Staggered reveal:
- Delay: 0.08s between cards
- Direction: bottom-to-top
- Grouped by region
- Individual card animations on hover
```

#### 4. Map Section
```tsx
// Features:
- Animated grid background
- Icon bounce on reveal
- Hover gradient overlay
- Scale transition on scroll
```

### Individual Location Pages (`/locations/[slug]`)

#### 1. Hero (LocationHero component)
```tsx
// Features:
- Parallax dots pattern
- 2 floating orbs
- Clip-path text reveal
- Blur subtitle effect
- Elastic button entrance
```

#### 2. Services Grid
```tsx
// Each card:
- Staggered reveal (0.08s)
- Hover: scale 1.03
- Icon rotation on hover
- Bottom border animation
- Gradient background fade
```

#### 3. Neighborhoods
```tsx
// Features:
- Floating MapPin icons
- Hover scale: 1.05
- Color transitions
- Grid stagger (0.03s)
```

#### 4. Zip Codes
```tsx
// Badge animations:
- Scale from 0 with rotation
- Hover: scale 1.1, rotate 3deg
- Box-shadow on hover
- Stagger: 0.04s
```

#### 5. Testimonials
```tsx
// Card effects:
- 3D perspective reveal
- Decorative corner animation
- Star icons sequential reveal
- Hover lift with shadow
```

#### 6. Stats Section
```tsx
// Animated counters:
- Years: 20+ (2s duration)
- Caregivers: 500+ (2.5s duration)
- Rating: 5★ (1.5s duration)
- Hover scale on each stat
```

## Custom Hooks Reference

### useCounter
```tsx
const [formattedValue, ref] = useCounter(endValue, {
  duration: 2000,        // Animation duration in ms
  startOnMount: false,   // Wait for scroll or start immediately
  decimals: 0,           // Decimal places
  prefix: "",            // Text before number (e.g., "$")
  suffix: "+",           // Text after number (e.g., "+", "%")
  separator: ",",        // Thousands separator
});
```

### useStaggerReveal
```tsx
const { containerVariants, itemVariants } = useStaggerReveal({
  staggerDelay: 0.08,    // Delay between items
  initialDelay: 0.1,     // Delay before first item
  duration: 0.5,         // Animation duration
  yOffset: 30,           // Vertical movement distance
  withScale: false,      // Include scale animation
  direction: "up",       // "up", "down", "left", "right"
});
```

### useParallax
```tsx
const parallaxRef = useRef<HTMLDivElement>(null);
const { transform } = useParallax(parallaxRef, {
  speed: 0.5,            // Parallax speed multiplier
  direction: "vertical", // "vertical" or "horizontal"
  reverse: false,        // Reverse direction
});

// Usage:
<motion.div ref={parallaxRef} style={{ transform }} />
```

### useMotionProps
```tsx
// Automatically handles reduced motion
const motionProps = useMotionProps();

// Spread on any motion component:
<motion.div {...motionProps} />
```

## Animation Variants Library

### Hero Animations
```tsx
// Icon entrance
heroIconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0 }
}

// Text reveal
heroTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

// Blur reveal
heroSubtitleVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
}
```

### Card Animations
```tsx
// Standard card
cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
}

// 3D card (testimonials)
testimonialCardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0 }
}
```

### Interactive States
```tsx
// Hover effect
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.98 }}

// Icon rotation
whileHover={{ scale: 1.2, rotate: 5 }}
```

## Common Patterns

### Scroll-Triggered Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6 }}
  {...motionProps}
>
  Content
</motion.div>
```

### Staggered Grid
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Animated Counter
```tsx
const [count, ref] = useCounter(100, { suffix: "+", duration: 2000 });

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div ref={ref}>{count}</div>
  <p>Description</p>
</motion.div>
```

### Continuous Animation
```tsx
<motion.div
  animate={{
    y: [0, -30, 0],
    x: [0, 20, 0],
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Parallax Background
```tsx
const parallaxRef = useRef<HTMLDivElement>(null);
const { transform } = useParallax(parallaxRef, { speed: 0.3 });

<motion.div
  ref={parallaxRef}
  className="absolute inset-0"
  style={{ transform }}
>
  {/* Background pattern */}
</motion.div>
```

## Timing Functions (Easings)

```tsx
// Available easings:
[0.22, 1, 0.36, 1]      // spring (smooth spring)
[0.6, 0.01, 0.05, 0.95] // dramatic (hero reveals)
[0.68, -0.6, 0.32, 1.6] // elastic (bouncy)
[0.25, 0.1, 0.25, 1]    // smooth (Apple-like)
```

## Performance Tips

1. **Use `viewport={{ once: true }}`** for one-time animations
2. **Limit continuous animations** to decorative elements
3. **Use `will-change` sparingly** (already handled in hooks)
4. **Prefer transforms** over position/size changes
5. **Throttle scroll events** (done in parallax hook)

## Customization Examples

### Custom Counter
```tsx
// Currency counter
const [price, priceRef] = useCounter(1299, {
  prefix: "$",
  decimals: 2,
  separator: ",",
  duration: 2500,
});
```

### Custom Stagger
```tsx
// Slower, from right
const { containerVariants, itemVariants } = useStaggerReveal({
  staggerDelay: 0.15,
  direction: "right",
  withScale: true,
  initialScale: 0.9,
});
```

### Custom Parallax
```tsx
// Faster horizontal parallax
const { transform } = useParallax(ref, {
  speed: 1.5,
  direction: "horizontal",
  reverse: true,
});
```

## Accessibility

All animations automatically support reduced motion:

```tsx
// Users with prefers-reduced-motion will get:
- Instant transitions (0.01s)
- No parallax movement
- No continuous animations
- Immediate state changes
```

## Troubleshooting

### Animation not triggering
- Check `viewport` settings
- Ensure element is in viewport
- Verify `initial` and `animate` props

### Counter not animating
- Check `ref` is attached correctly
- Verify element enters viewport
- Check IntersectionObserver support

### Parallax not smooth
- Ensure `ref` is on correct element
- Check element has height
- Verify scroll container

### Performance issues
- Use `once: true` for scroll animations
- Limit number of animated elements
- Check for layout thrashing
- Reduce continuous animations

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (13+)
- Mobile: Optimized, reduced complexity
- Reduced motion: Automatic fallback

## File Locations

```
app/locations/page.tsx              # Main locations page
app/locations/[slug]/page.tsx       # Individual location pages
components/location-card.tsx        # Location card component
components/location-hero.tsx        # Location hero component
lib/animations/hooks/useCounter.ts  # Counter hook
lib/animations/hooks/useStaggerReveal.ts  # Stagger hook
lib/animations/hooks/useParallax.ts # Parallax hook
lib/animations/variants.ts          # Pre-built variants
```

## Additional Resources

- Framer Motion Docs: https://www.framer.com/motion/
- Animation Examples: `/components/animations/examples.tsx`
- Design Tokens: `/styles/tokens/animations.css`
