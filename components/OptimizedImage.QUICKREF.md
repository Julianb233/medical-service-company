# OptimizedImage - Quick Reference

## Import

```tsx
import { OptimizedImage, ImagePresets } from '@/components/OptimizedImage';
```

## Basic Usage

```tsx
<OptimizedImage
  src="/images/photo.jpg"
  alt="Description"
  aspectRatio={{ width: 16, height: 9 }}
/>
```

## Presets

```tsx
// Hero (16:9, high priority, above fold)
<ImagePresets.Hero src="/images/hero.jpg" />

// Service Card (4:3, normal priority)
<ImagePresets.ServiceCard src="/images/service.jpg" />

// Location Card (4:3, normal priority)
<ImagePresets.LocationCard src="/images/location.jpg" />

// Staff Photo (3:4 portrait, low priority)
<ImagePresets.StaffPhoto src="/images/staff.jpg" />

// Avatar (1:1 square, low priority)
<ImagePresets.Avatar src="/images/avatar.jpg" className="rounded-full" />

// Testimonial (1:1 square, low priority, small)
<ImagePresets.Testimonial src="/images/testimonial.jpg" />
```

## Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Image path |
| `alt` | `string` | auto | Alt text |
| `aspectRatio` | `{width, height}` | - | Aspect ratio |
| `priority` | `'high' \| 'normal' \| 'low'` | `'normal'` | Loading priority |
| `isAboveFold` | `boolean` | `false` | Above fold? |
| `className` | `string` | - | CSS classes |

## Auto Alt Text

```tsx
<OptimizedImage
  src="/images/care.jpg"
  context={{
    service: 'Personal Care',
    location: 'San Diego, CA',
    description: 'Custom description' // Takes precedence
  }}
/>
```

## Aspect Ratios

```tsx
import { ASPECT_RATIOS } from '@/lib/image-utils';

// Use constants
<OptimizedImage
  src="/image.jpg"
  aspectRatio={ASPECT_RATIOS.HERO} // 16:9
/>
```

**Available:**
- `HERO`: 16:9
- `CARD`: 4:3
- `PORTRAIT`: 3:4
- `SQUARE`: 1:1
- `WIDE`: 21:9

## Priority Settings

```tsx
// High priority (above fold, critical)
<OptimizedImage
  src="/hero.jpg"
  priority="high"
  isAboveFold
/>

// Normal priority (important content)
<OptimizedImage
  src="/service.jpg"
  priority="normal"
/>

// Low priority (below fold, decorative)
<OptimizedImage
  src="/gallery.jpg"
  priority="low"
/>
```

## With Fallback

```tsx
<OptimizedImage
  src="/might-not-exist.jpg"
  fallbackSrc="/placeholder.jpg"
  onError={() => console.log('Image failed')}
/>
```

## Custom Loading

```tsx
<OptimizedImage
  src="/image.jpg"
  showSkeleton={true}
  skeletonColor="bg-teal-100"
  useBlurPlaceholder={true}
  blurColor="#00796B"
/>
```

## Responsive Sizes

```tsx
<OptimizedImage
  src="/image.jpg"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## Lazy Loading Control

```tsx
// Disable lazy loading (immediate load)
<OptimizedImage
  src="/image.jpg"
  useLazyLoad={false}
/>

// Custom intersection threshold
<OptimizedImage
  src="/image.jpg"
  useLazyLoad={true}
  rootMargin="200px" // Load when 200px from viewport
/>
```

## Styling

```tsx
<OptimizedImage
  src="/image.jpg"
  className="rounded-lg shadow-xl"
  containerClassName="max-w-4xl mx-auto"
  objectFit="cover"
  objectPosition="center top"
/>
```

## Callbacks

```tsx
<OptimizedImage
  src="/image.jpg"
  onLoad={() => console.log('Loaded!')}
  onError={() => console.error('Error!')}
/>
```

## Full Example

```tsx
<OptimizedImage
  src="/images/services/personal-care.jpg"
  alt="Compassionate personal care services"
  aspectRatio={{ width: 4, height: 3 }}
  priority="high"
  isAboveFold
  className="rounded-xl shadow-2xl"
  containerClassName="max-w-6xl mx-auto"
  showSkeleton={true}
  skeletonColor="bg-teal-50"
  useBlurPlaceholder={true}
  blurColor="#e0f2f1"
  fallbackSrc="/images/placeholders/service-placeholder.jpg"
  context={{
    service: 'Personal Care Services',
    location: 'San Diego & Los Angeles',
  }}
  onLoad={() => console.log('Image loaded')}
/>
```

## Migration Cheat Sheet

```tsx
// OLD: Standard img
<img src="/img.jpg" alt="Alt" />

// NEW: OptimizedImage
<OptimizedImage
  src="/img.jpg"
  alt="Alt"
  aspectRatio={{ width: 16, height: 9 }}
/>

// BETTER: Use preset
<ImagePresets.Hero src="/img.jpg" alt="Alt" />
```

## Common Use Cases

### Hero Banner
```tsx
<ImagePresets.Hero
  src="/images/hero/san-diego-care.jpg"
  context={{
    service: 'Home Care',
    location: 'San Diego',
  }}
/>
```

### Service Grid
```tsx
{services.map(service => (
  <ImagePresets.ServiceCard
    key={service.id}
    src={service.image}
    context={{ service: service.name }}
    className="rounded-lg"
  />
))}
```

### Staff Directory
```tsx
<ImagePresets.StaffPhoto
  src="/images/staff/maria.jpg"
  context={{
    description: 'Maria Gonzalez, RN - Head Nurse',
  }}
/>
```

### Testimonials
```tsx
<ImagePresets.Testimonial
  src="/images/testimonials/john.jpg"
  className="rounded-full"
/>
```

## Tips

✅ **Always set aspectRatio** to prevent layout shift
✅ **Use presets** for common patterns
✅ **Set priority="high"** for above-fold images
✅ **Add context** for better SEO
✅ **Use fallbackSrc** for error recovery
✅ **Customize skeleton colors** to match brand

## Debugging

```tsx
<OptimizedImage
  src="/image.jpg"
  onLoad={() => console.log('✅ Loaded')}
  onError={() => console.error('❌ Failed')}
  // Check Network tab in DevTools
  // Verify lazy loading works
  // Check alt text in Elements panel
/>
```

## Resources

- **Full Docs**: `OptimizedImage.README.md`
- **Examples**: `OptimizedImage.example.tsx`
- **Migration**: `OptimizedImage.MIGRATION.md`
- **Utils**: `lib/image-utils.ts`
