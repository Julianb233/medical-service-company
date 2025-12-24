# Medical Supplies Images - Quick Usage Guide

## Image Paths Reference

Use these exact paths in your Next.js application:

### Mobility Aids
```jsx
/images/supplies/mobility/cane.jpg
/images/supplies/mobility/walking-stick.jpg
/images/supplies/mobility/quad-cane.jpg
```

### Walkers
```jsx
/images/supplies/walkers/standard-walker.jpg
/images/supplies/walkers/rollator.jpg
/images/supplies/walkers/knee-walker.jpg
```

### Wheelchairs
```jsx
/images/supplies/wheelchairs/manual-wheelchair.jpg
/images/supplies/wheelchairs/transport-chair.jpg
/images/supplies/wheelchairs/electric-scooter.jpg
```

### Hospital Beds
```jsx
/images/supplies/hospital-beds/manual-bed.jpg
/images/supplies/hospital-beds/electric-bed.jpg
```

### Lift Chairs
```jsx
/images/supplies/lift-chairs/power-lift-recliner.jpg
/images/supplies/lift-chairs/zero-gravity-chair.jpg
```

### Bathroom Safety
```jsx
/images/supplies/bathroom-safety/grab-bars.jpg
/images/supplies/bathroom-safety/shower-seat.jpg
/images/supplies/bathroom-safety/raised-toilet-seat.jpg
```

### Hearing Aids
```jsx
/images/supplies/hearing-aids/behind-ear.jpg
/images/supplies/hearing-aids/in-ear.jpg
/images/supplies/hearing-aids/rechargeable.jpg
```

### Oxygen Equipment
```jsx
/images/supplies/oxygen/portable-concentrator.jpg
/images/supplies/oxygen/oxygen-tank.jpg
/images/supplies/oxygen/cpap-machine.jpg
```

### Daily Living Aids
```jsx
/images/supplies/daily-living/reacher-grabber.jpg
/images/supplies/daily-living/pill-organizer.jpg
/images/supplies/daily-living/magnifier.jpg
```

## Next.js Implementation Example

```jsx
import Image from 'next/image';

// Product Card Component
export function ProductCard({ category, imageName, alt, title, price }) {
  return (
    <div className="product-card">
      <Image
        src={`/images/supplies/${category}/${imageName}`}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg"
        priority={false}
      />
      <h3>{title}</h3>
      <p className="price">${price}</p>
    </div>
  );
}

// Usage
<ProductCard
  category="mobility"
  imageName="cane.jpg"
  alt="Adjustable medical cane"
  title="Premium Adjustable Cane"
  price={29.99}
/>
```

## TypeScript Types

```typescript
type SupplyCategory =
  | 'mobility'
  | 'walkers'
  | 'wheelchairs'
  | 'hospital-beds'
  | 'lift-chairs'
  | 'bathroom-safety'
  | 'hearing-aids'
  | 'oxygen'
  | 'daily-living';

interface ProductImage {
  category: SupplyCategory;
  filename: string;
  alt: string;
}
```

## SEO-Optimized Alt Text Examples

```jsx
// Mobility
alt="Adjustable walking cane for seniors and elderly support"
alt="Quad cane with four-point stability base"
alt="Premium wooden walking stick with ergonomic handle"

// Walkers
alt="Standard aluminum walker for mobility assistance"
alt="Rollator walker with wheels and seat"
alt="Knee walker scooter for leg injury recovery"

// Wheelchairs
alt="Manual wheelchair with comfortable padded seat"
alt="Lightweight transport wheelchair for travel"
alt="Electric mobility scooter for independence"

// Hospital Beds
alt="Adjustable manual hospital bed for home care"
alt="Electric hospital bed with remote control"

// Lift Chairs
alt="Power lift recliner chair for elderly"
alt="Zero gravity lift chair with massage feature"

// Bathroom Safety
alt="Bathroom grab bars for shower safety"
alt="Shower seat for elderly and disabled"
alt="Raised toilet seat with handles"

// Hearing Aids
alt="Behind-the-ear hearing aid device"
alt="In-ear hearing aid for discreet use"
alt="Rechargeable hearing aids with charging case"

// Oxygen Equipment
alt="Portable oxygen concentrator for travel"
alt="Medical oxygen tank with regulator"
alt="CPAP machine for sleep apnea treatment"

// Daily Living
alt="Reacher grabber tool for picking up items"
alt="Weekly pill organizer with daily compartments"
alt="Magnifying glass for reading assistance"
```

## Performance Tips

1. Use Next.js Image component for automatic optimization
2. Set `priority={true}` only for above-the-fold images
3. Use `loading="lazy"` for below-the-fold images
4. Define explicit width/height to prevent layout shift
5. Use `quality={80}` for optimal size/quality balance

## Responsive Sizes

```jsx
<Image
  src="/images/supplies/mobility/cane.jpg"
  alt="Medical cane"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

---

**Total Images Available**: 25
**Categories**: 9
**Total Size**: 2.0 MB
