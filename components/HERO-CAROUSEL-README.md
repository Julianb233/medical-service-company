# Hero Carousel Component

## Overview

The hero section now features an auto-rotating carousel with smooth crossfade transitions between background images. This creates dynamic visual interest while maintaining excellent readability for the hero content.

## Features

### 1. **Auto-Rotating Carousel**
- Automatically cycles through 4 background images
- Rotation interval: 5.5 seconds
- Smooth 1.5-second crossfade transitions using Framer Motion
- Respects user's `prefers-reduced-motion` setting

### 2. **Background Images**
The carousel rotates through:
- San Diego skyline/landmarks
- Family photos with seniors
- Caregiver providing care
- Happy senior at home

### 3. **Teal Overlay**
- Semi-transparent teal overlay: `bg-teal-600/70` (70% opacity)
- Ensures white text remains readable on all images
- Maintains brand consistency across different photos
- Additional gradient overlays add depth

### 4. **Manual Navigation**
- Carousel dots at bottom center
- Click any dot to jump to specific image
- Active dot expands and changes to orange
- Inactive dots are semi-transparent white
- Smooth transitions when manually navigating

### 5. **Ken Burns Effect**
- Subtle zoom and pan animation on each image
- 25-second duration for smooth, barely-noticeable movement
- Adds cinematic quality without being distracting
- Disabled when user prefers reduced motion

### 6. **Responsive Height**
- Height: `70vh` (70% of viewport height)
- Minimum height: 600px
- Maximum height: 800px
- Prevents hero from dominating entire viewport on desktop
- Ensures mobile users see content below fold

## Technical Implementation

### State Management
```tsx
const [currentImageIndex, setCurrentImageIndex] = useState(0);
```

### Auto-Rotation Logic
```tsx
useEffect(() => {
  if (prefersReducedMotion) return;

  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, 5500);

  return () => clearInterval(interval);
}, [prefersReducedMotion]);
```

### Transition Effect
```tsx
<AnimatePresence mode="sync">
  <motion.div
    key={currentImageIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {/* Background image */}
  </motion.div>
</AnimatePresence>
```

## Image Configuration

Edit the `HERO_IMAGES` array to change carousel images:

```tsx
const HERO_IMAGES = [
  {
    src: "/images/hero/san-diego-skyline.jpg",
    alt: "San Diego skyline with beautiful waterfront"
  },
  // ... more images
];
```

## Customization Options

### Change Rotation Speed
Modify the interval value (in milliseconds):
```tsx
}, 5500); // Current: 5.5 seconds
}, 6000); // Change to 6 seconds
```

### Change Transition Speed
Modify the transition duration:
```tsx
transition={{ duration: 1.5, ease: "easeInOut" }}
// Change to:
transition={{ duration: 2, ease: "easeInOut" }} // Slower fade
```

### Adjust Overlay Opacity
Modify the teal overlay class:
```tsx
<div className="absolute inset-0 bg-teal-600/70" />
// Change to:
<div className="absolute inset-0 bg-teal-600/60" /> // More transparent
<div className="absolute inset-0 bg-teal-600/80" /> // More opaque
```

### Change Overlay Color
Replace `bg-teal-600/70` with any Tailwind color:
```tsx
<div className="absolute inset-0 bg-blue-600/70" />
<div className="absolute inset-0 bg-green-600/70" />
<div className="absolute inset-0 bg-slate-800/70" />
```

## Accessibility

- **Reduced Motion**: Carousel pauses for users with `prefers-reduced-motion`
- **Keyboard Navigation**: Carousel dots are keyboard accessible
- **ARIA Labels**: Each navigation dot has descriptive `aria-label`
- **Alt Text**: Images include descriptive alt text
- **Focus States**: Navigation buttons have visible focus states

## Performance

- **Smooth Transitions**: Uses GPU-accelerated CSS transitions
- **Optimized Re-renders**: Only carousel state changes trigger re-render
- **Image Optimization**: Use Next.js Image component for production
- **Lazy Loading**: Background images load on-demand

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-optimized with touch support

## Future Enhancements

Potential improvements to consider:

1. **Image Preloading**: Preload next image for smoother transitions
2. **Touch Gestures**: Swipe left/right on mobile to navigate
3. **Pause on Hover**: Pause auto-rotation when user hovers
4. **Play/Pause Button**: Give users manual control
5. **Next.js Image**: Replace CSS backgrounds with `<Image>` component
6. **Dynamic Images**: Load images from CMS or API
7. **Video Backgrounds**: Support video as carousel items

## Related Files

- **Component**: `/components/hero-section.tsx`
- **Images**: `/public/images/hero/`
- **Image Guide**: `/public/images/hero/IMAGE-GUIDE.md`
- **Animations**: `/lib/animations/`

## Troubleshooting

### Images Not Showing
1. Check image paths in `HERO_IMAGES` array
2. Verify images exist in `/public/images/hero/`
3. Check console for 404 errors
4. Ensure image filenames match exactly (case-sensitive)

### Carousel Not Rotating
1. Check if `prefersReducedMotion` is enabled
2. Verify interval is set correctly
3. Check browser console for errors
4. Ensure component is mounted and rendering

### Text Not Readable
1. Increase overlay opacity: `bg-teal-600/80`
2. Add darker gradient overlay
3. Choose lighter background images
4. Increase text contrast with text shadows
