# 3D Testimonials Carousel Component

An award-winning, production-ready 3D testimonials carousel built with React, Framer Motion, and Embla Carousel.

## Features

### 🎨 Visual Excellence
- **3D Perspective Effect**: Cards arranged in a circular arc with realistic depth
- **Dynamic Scaling**: Active card at full size, side cards scaled down (85%)
- **Rotation Animation**: Cards rotate on Y-axis based on position (±15°)
- **Depth Layering**: Z-axis positioning creates realistic 3D space
- **Smooth Shadows**: Shadow intensity changes based on card state

### 🎬 Advanced Animations
- **Spring Physics**: Smooth, natural transitions using Framer Motion springs
- **Star Rating Reveal**: Stars animate in with rotation and scale effects
- **Quote Fade-in**: Text fades up with stagger delay
- **Author Info Slide**: Author details slide up when card becomes active
- **Button Micro-interactions**: Scale animations on hover/tap

### ⌨️ Interaction & Accessibility
- **Touch/Swipe Support**: Native Embla Carousel touch gestures
- **Keyboard Navigation**: Arrow keys (←/→) to navigate
- **Auto-play**: Automatic rotation every 5 seconds
- **Pause on Hover**: Auto-play pauses when user hovers
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **ARIA Labels**: Full screen reader support
- **Focus Management**: Proper focus indicators

### 📱 Responsive Design
- **Mobile First**: Optimized for touch devices
- **Breakpoint Adaptive**:
  - Mobile: 100% width cards
  - Tablet: 85% width cards
  - Desktop: 70% width cards
- **Touch-friendly Controls**: Large tap targets
- **Flexible Layout**: Works in any container

## Usage

### Basic Implementation

```tsx
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export default function TestimonialsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
```

### With Section Wrapper

```tsx
export default function HomePage() {
  return (
    <>
      {/* Other sections */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Families Across San Diego
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real families who trust us with their loved ones
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Other sections */}
    </>
  );
}
```

## Configuration

### Auto-play Timing

Modify the auto-play interval (default: 5000ms):

```tsx
// In testimonials-carousel.tsx, line 78
const autoplay = setInterval(() => {
  emblaApi.scrollNext();
}, 7000); // Change to 7 seconds
```

### 3D Effect Intensity

Adjust the 3D transformation values in `getCardPosition()`:

```tsx
// More dramatic 3D effect
const x = position * 45; // Increase horizontal spread
const z = -distance * 200; // Increase depth
const rotateY = position * 25; // Increase rotation
const scale = 1 - distance * 0.2; // More aggressive scaling
```

### Animation Speed

Modify spring physics for different feels:

```tsx
// Bouncier animation
transition={{
  ...springs.bouncy, // or springs.gentle, springs.stiff
  duration: durations.slow,
}}
```

## Customization

### Card Styling

The component uses CSS classes from `/styles/components/cards.css`:
- `.card-testimonial` - Base testimonial card styles
- `.card-elevated` - Elevation/shadow effects
- `.card-3d-tilt` - 3D transformation setup

Override these in your styles:

```css
.card-testimonial {
  background: linear-gradient(135deg, #fff 0%, #f9fafb 100%);
  border: 2px solid #e5e7eb;
}

.card-testimonial:hover {
  border-color: #06b6d4; /* teal color */
}
```

### Animation Variants

Import and use different animation variants:

```tsx
import { fadeInUp, scaleIn } from '@/lib/animations/variants';

<motion.div
  variants={scaleIn} // Different entrance animation
  initial="hidden"
  animate="visible"
/>
```

### Color Scheme

Update the brand colors used:
- `bg-primary-teal` - Navigation buttons
- `bg-primary-orange` - Active indicator dot
- `text-primary-teal` - Location text

Change these in your Tailwind config or inline:

```tsx
<button className="bg-blue-600 hover:bg-blue-700">
  {/* Your color */}
</button>
```

## Data Structure

The carousel expects testimonials from `/lib/content-data.ts`:

```typescript
export const testimonials = [
  {
    id: 1,
    quote: "The testimonial text goes here...",
    author: "John Doe",
    role: "Patient", // or "Family Member", "Caregiver", etc.
    location: "San Diego",
    rating: 5, // 1-5 stars
  },
  // ... more testimonials
];
```

### Adding Testimonials

1. Open `/lib/content-data.ts`
2. Add a new object to the `testimonials` array
3. The carousel automatically updates (no code changes needed)

## Performance Optimization

### Lazy Loading

The component uses `AnimatePresence` with `mode="wait"` to only animate the active card, reducing render overhead.

### Pointer Events

Inactive cards have `pointer-events: none` to prevent unnecessary event listeners.

### Reduced Motion

When users prefer reduced motion:
- 3D transforms are disabled
- Animation durations are near-instant (0.01s)
- Auto-play is disabled
- Only essential opacity transitions remain

## Accessibility Features

### Keyboard Support
- `Arrow Left`: Previous testimonial
- `Arrow Right`: Next testimonial
- `Tab`: Navigate to controls
- `Enter/Space`: Activate focused button

### Screen Readers
- Carousel region labeled as "Customer testimonials carousel"
- Star ratings have `sr-only` text announcing rating
- Navigation buttons have descriptive `aria-label`
- Dot indicators use `role="tablist"` and `aria-selected`

### Focus Management
- Visible focus rings on all interactive elements
- Focus trap within carousel controls
- Skip links compatible

## Browser Support

- **Chrome**: ✅ Full support (v90+)
- **Firefox**: ✅ Full support (v88+)
- **Safari**: ✅ Full support (v14+)
- **Edge**: ✅ Full support (v90+)
- **Mobile Safari**: ✅ Full support (iOS 14+)
- **Chrome Mobile**: ✅ Full support

### Polyfills Required
None - uses modern CSS transforms and Framer Motion handles browser compatibility.

## Troubleshooting

### Cards not showing 3D effect
- Check that `perspective` is applied to parent container
- Verify `transform-style: preserve-3d` is set
- Ensure no `overflow: hidden` on parent containers

### Auto-play not working
- Check that `prefersReducedMotion` is not enabled in OS settings
- Verify carousel is not in hover state
- Check browser console for JavaScript errors

### Animations feel sluggish
- Reduce the number of testimonials (optimal: 4-6)
- Use `springs.stiff` instead of `springs.default`
- Decrease `durations.slow` to `durations.normal`

### Mobile touch not working
- Embla Carousel handles touch automatically
- Ensure no `touch-action: none` CSS conflicts
- Check for competing touch event listeners

## Dependencies

```json
{
  "embla-carousel-react": "^8.0.0",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.300.0"
}
```

## File Structure

```
components/
  testimonials-carousel.tsx       # Main component
lib/
  content-data.ts                 # Testimonial data
  animations/
    index.ts                      # Animation exports
    easings.ts                    # Spring physics configs
    transitions.ts                # Duration presets
    variants.ts                   # Animation variants
    hooks/
      useReducedMotion.ts         # Accessibility hook
styles/
  components/
    cards.css                     # Card component styles
```

## Credits

Built with:
- [Embla Carousel](https://www.embla-carousel.com/) - Touch/swipe functionality
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon set

## License

Part of Happy Home Care project - All rights reserved
