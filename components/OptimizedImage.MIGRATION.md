# Migration Guide: OptimizedImage Component

This guide helps you migrate from standard Next.js `<Image>` components or inline `<img>` tags to the optimized `<OptimizedImage>` component.

## Quick Migration

### From Standard `<img>` Tag

**Before:**
```tsx
<img
  src="/images/hero-bg.jpg"
  alt="Home care services"
  className="w-full h-auto"
/>
```

**After:**
```tsx
<OptimizedImage
  src="/images/hero-bg.jpg"
  alt="Home care services"
  aspectRatio={{ width: 16, height: 9 }}
  className="w-full"
/>
```

### From Next.js `<Image>` Component

**Before:**
```tsx
import Image from 'next/image';

<Image
  src="/images/service.jpg"
  alt="Personal care services"
  width={1200}
  height={900}
  className="rounded-lg"
/>
```

**After:**
```tsx
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src="/images/service.jpg"
  alt="Personal care services"
  aspectRatio={{ width: 4, height: 3 }}
  className="rounded-lg"
/>
```

### Using Presets

**Even Better:**
```tsx
import { ImagePresets } from '@/components/OptimizedImage';

<ImagePresets.ServiceCard
  src="/images/service.jpg"
  alt="Personal care services"
  className="rounded-lg"
/>
```

## Component-Specific Migrations

### Hero Section

**Current Code** (`components/hero-section.tsx`):
```tsx
<div
  className="absolute inset-0 bg-cover bg-center opacity-20"
  style={{
    backgroundImage: "url('/images/hero-bg.jpg')",
    backgroundBlendMode: "overlay",
  }}
/>
```

**Migrate To:**
```tsx
import { ImagePresets } from '@/components/OptimizedImage';

<div className="absolute inset-0 opacity-20">
  <ImagePresets.Hero
    src="/images/hero-bg.jpg"
    alt="Happy Home Care - Compassionate home health services"
    priority="high"
    isAboveFold
    className="mix-blend-overlay"
    context={{
      service: 'Home Care Services',
      location: 'San Diego & Los Angeles',
    }}
  />
</div>
```

**Benefits:**
- ✅ Automatic lazy loading for below-fold content
- ✅ Blur placeholder while loading
- ✅ Prevents layout shift
- ✅ SEO-optimized alt text
- ✅ Better Core Web Vitals scores

### Service Cards

**Before:**
```tsx
<div className="service-card">
  <img
    src="/images/services/personal-care.jpg"
    alt="Personal care"
    className="rounded-lg"
  />
  <h3>Personal Care</h3>
</div>
```

**After:**
```tsx
<div className="service-card">
  <ImagePresets.ServiceCard
    src="/images/services/personal-care.jpg"
    context={{ service: 'Personal Care Services' }}
    className="rounded-lg"
  />
  <h3>Personal Care</h3>
</div>
```

### Location Cards

**Before:**
```tsx
<div className="location-card">
  <img
    src="/images/locations/san-diego.jpg"
    alt="San Diego office"
  />
</div>
```

**After:**
```tsx
<div className="location-card">
  <ImagePresets.LocationCard
    src="/images/locations/san-diego.jpg"
    context={{
      location: 'San Diego, CA',
      description: 'Happy Home Care San Diego office location'
    }}
  />
</div>
```

### Staff Photos

**Before:**
```tsx
<img
  src="/images/staff/maria-gonzalez.jpg"
  alt="Maria Gonzalez, RN"
  className="rounded-full w-32 h-32 object-cover"
/>
```

**After:**
```tsx
<ImagePresets.StaffPhoto
  src="/images/staff/maria-gonzalez.jpg"
  context={{
    description: 'Maria Gonzalez, RN - Registered Nurse'
  }}
  className="rounded-full"
/>
```

### Testimonial Avatars

**Before:**
```tsx
<img
  src="/images/testimonials/john-smith.jpg"
  alt="John Smith"
  className="w-16 h-16 rounded-full"
/>
```

**After:**
```tsx
<ImagePresets.Avatar
  src="/images/testimonials/john-smith.jpg"
  alt="John Smith testimonial"
  className="rounded-full ring-2 ring-teal-500"
/>
```

## Background Images Migration

### CSS Background Image

**Before:**
```tsx
<div
  className="hero-bg h-screen"
  style={{ backgroundImage: 'url(/images/hero.jpg)' }}
/>
```

**After:**
```tsx
<div className="relative h-screen overflow-hidden">
  <OptimizedImage
    src="/images/hero.jpg"
    aspectRatio={{ width: 16, height: 9 }}
    priority="high"
    isAboveFold
    objectFit="cover"
    alt="Hero background"
  />
  {/* Your content overlay here */}
</div>
```

### Inline Style Background

**Before:**
```tsx
<section style={{
  backgroundImage: 'url(/images/bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
  <h1>Content</h1>
</section>
```

**After:**
```tsx
<section className="relative">
  <div className="absolute inset-0 -z-10">
    <OptimizedImage
      src="/images/bg.jpg"
      aspectRatio={{ width: 16, height: 9 }}
      objectFit="cover"
      alt="Background decoration"
    />
  </div>
  <h1>Content</h1>
</section>
```

## Props Mapping Reference

### From `<img>` to `<OptimizedImage>`

| `<img>` Prop | `<OptimizedImage>` Prop | Notes |
|--------------|-------------------------|-------|
| `src` | `src` | Same |
| `alt` | `alt` | Auto-generated if omitted |
| `width` | `width` | Optional with aspectRatio |
| `height` | `height` | Optional with aspectRatio |
| `className` | `className` | Same |
| `style` | - | Use className or CSS props |
| `loading` | `priority` + `useLazyLoad` | Automatic based on priority |
| - | `aspectRatio` | **New: Prevents layout shift** |
| - | `context` | **New: SEO optimization** |
| - | `showSkeleton` | **New: Loading states** |

### From Next.js `<Image>` to `<OptimizedImage>`

| Next.js `<Image>` Prop | `<OptimizedImage>` Prop | Notes |
|------------------------|-------------------------|-------|
| `src` | `src` | Same |
| `alt` | `alt` | Auto-generated if omitted |
| `width` | `width` | Optional |
| `height` | `height` | Optional |
| `fill` | - | Use aspectRatio instead |
| `className` | `className` | Same |
| `sizes` | `sizes` | Same |
| `quality` | `quality` | Same |
| `priority` | `priority` + `isAboveFold` | More granular control |
| `placeholder` | `useBlurPlaceholder` | Automatic generation |
| `blurDataURL` | `blurColor` | Generated automatically |
| `loading` | `useLazyLoad` | Automatic via Intersection Observer |
| - | `aspectRatio` | **Better than fill** |
| - | `context` | **New: Auto alt text** |
| - | `showSkeleton` | **New: Loading UI** |

## Common Patterns

### Pattern 1: Above-the-Fold Hero

```tsx
// Old
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>

// New - Using preset
<ImagePresets.Hero src="/hero.jpg" />
```

### Pattern 2: Lazy-Loaded Grid

```tsx
// Old
<div className="grid grid-cols-3 gap-4">
  {items.map(item => (
    <Image
      key={item.id}
      src={item.image}
      alt={item.title}
      width={400}
      height={300}
      loading="lazy"
    />
  ))}
</div>

// New
<div className="grid grid-cols-3 gap-4">
  {items.map(item => (
    <ImagePresets.ServiceCard
      key={item.id}
      src={item.image}
      context={{ service: item.title }}
    />
  ))}
</div>
```

### Pattern 3: Responsive Images

```tsx
// Old
<Image
  src="/image.jpg"
  alt="Image"
  width={1200}
  height={900}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// New
<OptimizedImage
  src="/image.jpg"
  aspectRatio={{ width: 4, height: 3 }}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Descriptive alt text"
/>
```

### Pattern 4: Images with Fallback

```tsx
// Old
<Image
  src="/might-not-exist.jpg"
  alt="Image"
  width={800}
  height={600}
  onError={(e) => {
    e.currentTarget.src = '/fallback.jpg'
  }}
/>

// New
<OptimizedImage
  src="/might-not-exist.jpg"
  fallbackSrc="/fallback.jpg"
  aspectRatio={{ width: 4, height: 3 }}
/>
```

## Checklist for Migration

### Per Image

- [ ] Replace `<img>` or `<Image>` with `<OptimizedImage>`
- [ ] Add `aspectRatio` prop to prevent layout shift
- [ ] Set appropriate `priority` (high/normal/low)
- [ ] Mark `isAboveFold={true}` for above-fold images
- [ ] Add `context` for better SEO alt text
- [ ] Test loading states (skeleton appears)
- [ ] Verify lazy loading works (check Network tab)
- [ ] Check accessibility (alt text, ARIA)

### Per Page

- [ ] Hero images use `priority="high"` and `isAboveFold`
- [ ] Below-fold images use lazy loading
- [ ] Aspect ratios prevent layout shift
- [ ] All images have meaningful alt text
- [ ] Fallback images configured where needed
- [ ] Test on slow 3G network (lighthouse)
- [ ] Verify Core Web Vitals scores improve

### Project-Wide

- [ ] Update all hero sections
- [ ] Update all service cards
- [ ] Update all location cards
- [ ] Update all staff photos
- [ ] Update all testimonial avatars
- [ ] Update all background images
- [ ] Update all gallery images
- [ ] Run lighthouse audit
- [ ] Test accessibility with screen reader
- [ ] Verify build succeeds with static export

## Testing After Migration

### 1. Visual Regression

```bash
# Take screenshots before and after migration
# Compare for visual differences
```

### 2. Performance Testing

```bash
# Run Lighthouse before migration
npm run build
# Serve production build
# Run Lighthouse
# Record scores

# Migrate images
# Run Lighthouse after migration
# Compare scores - should improve!
```

### 3. Accessibility Testing

- Use screen reader (VoiceOver, NVDA, JAWS)
- Check alt text is announced
- Verify loading states are communicated
- Test keyboard navigation

### 4. Network Testing

- Test on Fast 3G
- Test on Slow 3G
- Verify lazy loading works
- Check image loading order

## Common Issues & Solutions

### Issue: Images not loading

**Solution:** Check that `next.config.ts` has:
```ts
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Issue: Layout shift still occurring

**Solution:** Ensure `aspectRatio` prop is set:
```tsx
<OptimizedImage
  src="/image.jpg"
  aspectRatio={{ width: 16, height: 9 }} // ← Required!
/>
```

### Issue: Images load too late

**Solution:** Adjust priority and lazy loading:
```tsx
<OptimizedImage
  src="/image.jpg"
  priority="high"
  isAboveFold
  useLazyLoad={false}
/>
```

### Issue: Skeleton doesn't match brand colors

**Solution:** Customize skeleton color:
```tsx
<OptimizedImage
  src="/image.jpg"
  skeletonColor="bg-teal-100"
  blurColor="#00796B"
/>
```

## Rollback Plan

If you need to rollback:

1. Keep old components in a `_backup` folder
2. Use git to restore previous versions
3. Keep both implementations during transition
4. A/B test if needed

## Support

For questions or issues during migration:

1. Check the README: `OptimizedImage.README.md`
2. Review examples: `OptimizedImage.example.tsx`
3. Run tests: `OptimizedImage.test.tsx`
4. Contact the development team

## Next Steps

After migration:

1. Monitor Core Web Vitals in production
2. Review image loading performance
3. Gather user feedback
4. Optimize further based on analytics
5. Consider adding image CDN for even better performance
