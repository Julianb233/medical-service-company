# Animation Components - Happy Home Care

Award-winning animation components built with Framer Motion and Lenis for the Happy Home Care website.

## Components

### 1. PageTransition

Smooth page transitions with fade and slide effects.

#### Basic Usage

```tsx
import { PageTransition } from "@/components/animations/PageTransition";

export default function Page() {
  return (
    <PageTransition>
      <YourPageContent />
    </PageTransition>
  );
}
```

#### Advanced Usage with Stagger

```tsx
import {
  PageTransitionContainer,
  PageTransitionSection
} from "@/components/animations/PageTransition";

export default function Page() {
  return (
    <PageTransitionContainer>
      <PageTransitionSection>
        <HeroSection />
      </PageTransitionSection>
      <PageTransitionSection>
        <ServicesSection />
      </PageTransitionSection>
      <PageTransitionSection>
        <TestimonialsSection />
      </PageTransitionSection>
    </PageTransitionContainer>
  );
}
```

#### Slide Transitions

```tsx
import { SlidePageTransition } from "@/components/animations/PageTransition";

export default function Page() {
  return (
    <SlidePageTransition direction="right">
      <YourPageContent />
    </SlidePageTransition>
  );
}
```

### 2. SmoothScroll

Buttery smooth scrolling across the entire site using Lenis.

#### Setup (Already done in layout.tsx)

```tsx
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
```

#### Programmatic Scrolling

```tsx
import { useLenis } from "@/components/animations/SmoothScroll";

function MyComponent() {
  const { scrollTo } = useLenis();

  return (
    <button onClick={() => scrollTo("#contact", { offset: -80 })}>
      Contact Us
    </button>
  );
}
```

#### Scroll to Top Button

```tsx
import { ScrollToTop } from "@/components/animations/SmoothScroll";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <ScrollToTop
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg"
        showAt={400}
      />
    </>
  );
}
```

## Features

### Accessibility

- **Reduced Motion Support**: All components automatically detect and respect `prefers-reduced-motion` preference
- **Keyboard Navigation**: Smooth scroll works seamlessly with keyboard navigation
- **Screen Reader Friendly**: No interference with screen reader navigation

### Performance

- **GPU Acceleration**: All animations use `transform` and `opacity` for 60fps performance
- **Optimized Rendering**: Uses `will-change` hints for browser optimization
- **Lazy Execution**: Animations only run when elements are in view
- **No Layout Shifts**: Animations don't cause layout reflow

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome Mobile 90+

## Animation Variants

All components use pre-configured variants from `/lib/animations/variants.ts`:

- `pageTransition` - Main page transition with blur effect
- `staggerContainer` - Container with staggered children
- `fadeInUp` - Fade in from bottom
- `slideUp` - Slide up with fade
- And many more...

## Customization

### Custom Transition Duration

```tsx
<PageTransition className="transition-duration-700">
  <Content />
</PageTransition>
```

### Custom Smooth Scroll Settings

```tsx
<SmoothScroll
  duration={1.2}
  easing={0.12}
  smoothTouch={true}
>
  <App />
</SmoothScroll>
```

### Custom Variants

```tsx
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations/variants";

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Custom Animation
</motion.div>
```

## Best Practices

1. **One SmoothScroll per app**: Only wrap your root layout once
2. **PageTransition per route**: Each page should have its own PageTransition
3. **Respect reduced motion**: Always test with reduced motion enabled
4. **Test on mobile**: Smooth scroll behaves differently on touch devices
5. **Monitor performance**: Use React DevTools Profiler to check animation impact

## Troubleshooting

### Animations not working

- Check that components are marked with `"use client"`
- Verify Framer Motion is installed
- Check browser console for errors

### Jerky scrolling

- Disable smooth scroll on touch devices if needed
- Reduce `duration` and `easing` values
- Check for heavy JavaScript on scroll events

### Reduced motion not working

- Test in browser with reduced motion enabled
- Check that `prefers-reduced-motion` media query is supported
- Verify components are detecting the preference correctly

## Examples

See the Happy Home Care website for live examples:
- Homepage: Full page transitions with stagger
- Services: Smooth scroll to sections
- Contact: Scroll to top button

## License

MIT - Happy Home Care © 2024
