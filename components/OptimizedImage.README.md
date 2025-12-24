# OptimizedImage Component

A high-performance, feature-rich image component designed for Next.js static export mode with built-in optimization, lazy loading, and SEO features.

## Features

- ✅ **Static Export Compatible** - Works with `output: 'export'` in Next.js
- ✅ **Lazy Loading** - Intersection Observer-based lazy loading with configurable thresholds
- ✅ **Blur Placeholder** - Automatic low-quality placeholder generation
- ✅ **Skeleton Loading** - Elegant loading state with shimmer effect
- ✅ **Aspect Ratio Container** - Prevents layout shift (CLS optimization)
- ✅ **SEO Optimized** - Automatic alt text generation with context awareness
- ✅ **Responsive Images** - Built-in srcset and sizes support
- ✅ **Error Handling** - Fallback images and graceful degradation
- ✅ **TypeScript** - Full type safety with comprehensive interfaces
- ✅ **Accessibility** - WCAG 2.1 AA compliant with proper ARIA attributes
- ✅ **Performance** - Priority loading, preload hints, and fetch priority API
- ✅ **Customizable** - Extensive props for all use cases

## Installation

The component is already set up in your project. Import it from:

```tsx
import { OptimizedImage, ImagePresets } from '@/components/OptimizedImage';
```

## Basic Usage

### Simple Image

```tsx
<OptimizedImage
  src="/images/hero-bg.jpg"
  alt="Happy Home Care services"
  aspectRatio={{ width: 16, height: 9 }}
/>
```

### Using Presets

```tsx
// Hero Image
<ImagePresets.Hero
  src="/images/hero-bg.jpg"
  alt="Home care services in San Diego"
/>

// Service Card
<ImagePresets.ServiceCard
  src="/images/services/personal-care.jpg"
  className="rounded-lg"
/>

// Staff Photo
<ImagePresets.StaffPhoto
  src="/images/staff/nurse-maria.jpg"
/>

// Avatar
<ImagePresets.Avatar
  src="/images/testimonials/john-avatar.jpg"
  className="rounded-full"
/>
```

## Props Reference

### Required Props

None! The component has sensible defaults for all props.

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source path (relative or absolute) |
| `alt` | `string` | auto-generated | Alternative text for accessibility |
| `aspectRatio` | `{width: number, height: number}` | - | Aspect ratio for container |
| `priority` | `'high' \| 'normal' \| 'low'` | `'normal'` | Loading priority |
| `isAboveFold` | `boolean` | `false` | Whether image is above the fold |

### Sizing Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `1920` | Image width in pixels |
| `height` | `number` | `1080` | Image height in pixels |
| `sizes` | `string` | - | Responsive sizes attribute |

### Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | CSS classes for image element |
| `containerClassName` | `string` | - | CSS classes for container |
| `objectFit` | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'` | CSS object-fit |
| `objectPosition` | `string` | `'center'` | CSS object-position |

### Loading Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showSkeleton` | `boolean` | `true` | Show skeleton loader |
| `skeletonColor` | `string` | `'bg-teal-50'` | Skeleton background color |
| `useBlurPlaceholder` | `boolean` | `true` | Enable blur placeholder |
| `blurColor` | `string` | `'#e0f2f1'` | Blur placeholder color |
| `useLazyLoad` | `boolean` | `true` | Enable lazy loading |
| `rootMargin` | `string` | `'50px'` | Intersection observer margin |

### Advanced Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quality` | `number` | `85` | Image quality (1-100) |
| `fallbackSrc` | `string` | - | Fallback image on error |
| `context` | `object` | - | Context for alt text generation |
| `onLoad` | `() => void` | - | Callback on successful load |
| `onError` | `() => void` | - | Callback on load error |

## Image Presets

The component includes five preset configurations for common use cases:

### 1. Hero (`ImagePresets.Hero`)

**Use for:** Banner images, page headers, hero sections

**Configuration:**
- Aspect ratio: 16:9
- Priority: High
- Above fold: Yes
- Sizes: 100vw

```tsx
<ImagePresets.Hero
  src="/images/hero/san-diego-care.jpg"
  alt="San Diego home care services"
/>
```

### 2. Service Card (`ImagePresets.ServiceCard`)

**Use for:** Service listings, feature cards, product cards

**Configuration:**
- Aspect ratio: 4:3
- Priority: Normal
- Responsive sizing: 100vw → 50vw → 33vw

```tsx
<ImagePresets.ServiceCard
  src="/images/services/companion-care.jpg"
  className="rounded-lg"
/>
```

### 3. Location Card (`ImagePresets.LocationCard`)

**Use for:** Office locations, facility images, maps

**Configuration:**
- Aspect ratio: 4:3
- Priority: Normal
- Responsive sizing: 100vw → 50vw → 50vw

```tsx
<ImagePresets.LocationCard
  src="/images/locations/la-office.jpg"
/>
```

### 4. Staff Photo (`ImagePresets.StaffPhoto`)

**Use for:** Team member photos, staff profiles

**Configuration:**
- Aspect ratio: 3:4 (portrait)
- Priority: Low
- Responsive sizing: 50vw → 33vw → 25vw

```tsx
<ImagePresets.StaffPhoto
  src="/images/staff/maria-gonzalez.jpg"
/>
```

### 5. Avatar (`ImagePresets.Avatar`)

**Use for:** User avatars, testimonial photos, small profile images

**Configuration:**
- Aspect ratio: 1:1 (square)
- Priority: Low
- Fixed size: 128px

```tsx
<ImagePresets.Avatar
  src="/images/testimonials/john-smith.jpg"
  className="rounded-full"
/>
```

### 6. Testimonial (`ImagePresets.Testimonial`)

**Use for:** Testimonial photos, client reviews

**Configuration:**
- Aspect ratio: 1:1
- Priority: Low
- Responsive sizing: 80px → 96px

```tsx
<ImagePresets.Testimonial
  src="/images/testimonials/jane-doe.jpg"
/>
```

## Context-Aware Alt Text

The component can automatically generate SEO-optimized alt text using context:

```tsx
<OptimizedImage
  src="/images/services/personal-care.jpg"
  context={{
    service: 'Personal Care Services',
    location: 'San Diego, CA',
    description: 'Compassionate personal care for seniors'
  }}
/>
// Generated alt: "Personal Care Services - San Diego, CA - Compassionate personal care for seniors | Happy Home Care"
```

**Context Props:**
- `service`: Service name or type
- `location`: Geographic location
- `description`: Custom description (takes precedence)

## Image Loading Strategies

### High Priority (Above the Fold)

```tsx
<OptimizedImage
  src="/images/hero-bg.jpg"
  priority="high"
  isAboveFold
  useLazyLoad={false}
/>
```

- Loads immediately
- Uses `loading="eager"`
- Sets `fetchpriority="high"`
- No intersection observer

### Normal Priority (Below the Fold, Important)

```tsx
<OptimizedImage
  src="/images/services/care.jpg"
  priority="normal"
  useLazyLoad={true}
  rootMargin="50px"
/>
```

- Lazy loads with small buffer
- Uses `loading="lazy"`
- Loads when within 50px of viewport

### Low Priority (Far Below Fold)

```tsx
<OptimizedImage
  src="/images/gallery/photo.jpg"
  priority="low"
  useLazyLoad={true}
  rootMargin="200px"
/>
```

- Lazy loads with large buffer
- Uses `loading="lazy"`
- Sets `fetchpriority="low"`

## Aspect Ratios

Common aspect ratios are available from utilities:

```tsx
import { ASPECT_RATIOS } from '@/lib/image-utils';

// Use in component
<OptimizedImage
  src="/images/hero.jpg"
  aspectRatio={ASPECT_RATIOS.HERO} // 16:9
/>
```

**Available Ratios:**
- `HERO`: 16:9 (widescreen)
- `CARD`: 4:3 (traditional)
- `PORTRAIT`: 3:4 (vertical)
- `SQUARE`: 1:1 (square)
- `WIDE`: 21:9 (ultra-wide)

## Error Handling

### With Fallback Image

```tsx
<OptimizedImage
  src="/images/might-not-exist.jpg"
  fallbackSrc="/images/placeholders/default.jpg"
  onError={() => console.error('Image failed')}
/>
```

### Auto Placeholder Selection

```tsx
<OptimizedImage
  src="/images/service.jpg"
  context={{ service: 'Personal Care' }}
  // Automatically uses service placeholder on error
/>
```

## Performance Best Practices

### 1. Use Appropriate Priority

```tsx
// Above fold - high priority
<OptimizedImage src="/hero.jpg" priority="high" isAboveFold />

// Important content - normal priority
<OptimizedImage src="/service.jpg" priority="normal" />

// Below fold - low priority
<OptimizedImage src="/gallery.jpg" priority="low" />
```

### 2. Configure Sizes Attribute

```tsx
<OptimizedImage
  src="/image.jpg"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 3. Use Lazy Loading Strategically

```tsx
// Disable for above-fold content
<OptimizedImage src="/hero.jpg" useLazyLoad={false} isAboveFold />

// Enable with appropriate rootMargin
<OptimizedImage src="/below-fold.jpg" useLazyLoad rootMargin="100px" />
```

### 4. Optimize Quality

```tsx
// High quality for important images
<OptimizedImage src="/award-badge.jpg" quality={95} />

// Normal quality for content images
<OptimizedImage src="/service.jpg" quality={85} />

// Lower quality for decorative images
<OptimizedImage src="/background.jpg" quality={75} />
```

## Accessibility

The component is WCAG 2.1 AA compliant:

✅ Semantic HTML with proper alt text
✅ ARIA attributes for loading states
✅ Keyboard navigation support
✅ Screen reader announcements
✅ Error state communication

```tsx
<OptimizedImage
  src="/image.jpg"
  alt="Descriptive alternative text for screen readers"
  // Component handles ARIA automatically
/>
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { OptimizedImageProps, ImagePriority } from '@/components/OptimizedImage';

const imageProps: OptimizedImageProps = {
  src: '/image.jpg',
  alt: 'Description',
  priority: 'high',
  aspectRatio: { width: 16, height: 9 },
};
```

## Utility Functions

The component uses helper functions from `@/lib/image-utils`:

```tsx
import {
  generateBlurDataURL,
  generateAltText,
  normalizeImagePath,
  getPlaceholderImage,
  IMAGE_SIZES,
  ASPECT_RATIOS,
  IMAGE_PRESETS,
} from '@/lib/image-utils';
```

See `lib/image-utils.ts` for complete documentation.

## Examples

See `components/OptimizedImage.example.tsx` for 17+ comprehensive usage examples including:

- Hero images
- Service cards
- Location cards
- Staff photos
- Avatars
- Gallery thumbnails
- Background images
- Carousels
- Responsive grids
- And more!

## Static Export Considerations

This component is specifically designed for Next.js static export (`output: 'export'`):

- Uses `unoptimized` prop for Next.js Image
- All optimization happens at build time
- No server-side image optimization
- Client-side lazy loading via Intersection Observer
- Pre-generated blur placeholders

## Browser Support

- Modern browsers with Intersection Observer API
- Graceful fallback for older browsers
- Progressive enhancement approach
- No external dependencies beyond Next.js

## Performance Metrics

**Core Web Vitals Impact:**

- ✅ **LCP (Largest Contentful Paint)** - Priority loading and preconnect hints
- ✅ **CLS (Cumulative Layout Shift)** - Aspect ratio containers prevent shift
- ✅ **FID (First Input Delay)** - Lazy loading reduces main thread blocking

## License

Part of the Happy Home Care website project.

## Support

For issues or questions, see the main project documentation or contact the development team.
