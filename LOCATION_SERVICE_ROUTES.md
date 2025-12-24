# Location-Specific Service Pages Route Structure

## Overview

Created a comprehensive route structure for location-specific service pages that generates **90 static pages** (6 services × 15 parent locations).

## Files Created

### 1. Server Component
**Path:** `app/locations/[slug]/[service]/page.tsx`

**Features:**
- `generateStaticParams()`: Creates all location × service combinations
- `generateMetadata()`: SEO-optimized metadata with:
  - Location-specific keywords
  - Zip code targeting
  - Landmark-based keywords (if subarea data available)
  - Local nickname integration
  - Comprehensive Open Graph and Twitter card metadata
- Server-side data fetching from:
  - `lib/content-data.ts` (services, locations)
  - `lib/subareas-data.ts` (subarea details, getSubareaBySlug, getSubareasForLocation)

**Route Examples:**
- `/locations/san-diego/home-care` - Home Care in San Diego
- `/locations/la-jolla/skilled-nursing` - Skilled Nursing in La Jolla
- `/locations/del-mar/respite-care` - Respite Care in Del Mar

### 2. Client Component
**Path:** `app/locations/[slug]/[service]/LocationServiceClient.tsx`

**Sections:**
1. **Hero Section**
   - Parallax background with animated gradient orbs
   - Service + Location title (e.g., "Home Care in Del Mar")
   - Breadcrumb navigation
   - CTA buttons (call + consultation)

2. **Service Overview**
   - Service icon and full description
   - Local context from `subarea.servicesContext.description`
   - Quick stats grid (Licensed, 24/7, Expert Team, Free Assessment)

3. **Why Choose This Service in This Location**
   - Uses `subarea.whySpecial.highlights` if available
   - Weather-appropriate care context
   - Microclimate information

4. **Service Features Grid**
   - All features from `service.features`
   - Animated stagger reveal
   - Hover effects

5. **Local Landmarks Grid**
   - Top 4 landmarks from `subarea.landmarks`
   - Landmark images (placeholder gradient with category icon)
   - Category badges (beach, park, historic, entertainment)

6. **Local Testimonials**
   - Filters testimonials by location
   - Star ratings
   - Author info with avatar initials

7. **Service Areas / Zip Codes**
   - Displays all zip codes served
   - Animated chips with hover effects

8. **CTA Section**
   - Final call-to-action
   - Phone number and consultation link
   - Trust badges (Licensed, 24/7, Compassionate)

9. **Related Subareas**
   - Links to same service in other areas
   - Dynamic links: `/locations/{location.slug}/{subarea.slug}/{service.slug}`

## Data Structure Integration

### From `lib/content-data.ts`
```typescript
- services[]: All 6 services
  - slug, title, shortDescription, fullDescription
  - icon, features[]

- locations[]: All 15 parent locations
  - slug, name, region, description
  - zipCodes[], neighborhoods[]
  - coordinates
```

### From `lib/subareas-data.ts`
```typescript
- getSubareaBySlug(slug): Find subarea by slug
- getSubareasForLocation(locationSlug): Get all subareas for a parent location

SubareaData includes:
  - heroImageUrl (used for hero background)
  - servicesContext.description (local care context)
  - landmarks[] (with images, categories)
  - whySpecial.highlights[] (unique selling points)
  - weather (climate, microclimate, averageTemp)
  - zipCodes[], localNickname
```

## Route Generation

### Static Params Generated
```
Total: 90 routes (6 services × 15 locations)

Examples:
- /locations/san-diego/home-care
- /locations/san-diego/personal-care
- /locations/san-diego/respite-care
- /locations/san-diego/hospice-support
- /locations/san-diego/skilled-nursing
- /locations/san-diego/specialty-services
- /locations/la-jolla/home-care
- /locations/la-jolla/personal-care
... (continues for all locations)
```

## SEO Optimization

### Metadata Keywords Include:
1. Service + Location combinations
2. Zip code targeting
3. Landmark proximity ("Home Care near Gaslamp Quarter")
4. Local nicknames
5. Climate/weather keywords (if subarea)
6. Regional terms

### Open Graph
- Custom title per location + service
- Service-specific images (fallback to hero images)
- Twitter card support
- Canonical URL generation

## Animations

Uses existing animation system from `lib/animations`:
- `useParallax`: Hero background parallax effect
- `useStaggerReveal`: Sequential animations for lists
- `useMotionProps`: Reduced motion support
- Framer Motion variants:
  - `fadeInUp`: Smooth reveal from bottom
  - `scaleIn`: Scale and fade
  - `slideInLeft`: Slide from left

## Component Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:`, `lg:` for grid layouts
- Flex-wrap for CTA buttons and zip codes

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion preferences respected

### Performance
- Static generation at build time
- Optimized animations (GPU-accelerated transforms)
- Lazy loading with IntersectionObserver (via Framer Motion)
- Code splitting (client component separate from server)

## Related Routes

This route structure complements:
1. `/app/locations/[slug]/[subarea]/page.tsx` - Subarea overview pages
2. `/app/services/[slug]/page.tsx` - Service detail pages
3. `/app/locations/[slug]/page.tsx` - Location overview pages

## URL Structure

```
/locations/{location-slug}/{service-slug}
Examples:
- /locations/san-diego/home-care
- /locations/la-jolla/skilled-nursing
- /locations/downtown/respite-care (if downtown is a subarea)
```

## Testing URLs

Once built, you can test these URLs:
1. `/locations/san-diego/home-care`
2. `/locations/la-jolla/personal-care`
3. `/locations/del-mar/skilled-nursing`
4. `/locations/encinitas/hospice-support`
5. `/locations/carlsbad/specialty-services`

## Build Output

Expected output during `npm run build`:
```
Generating static pages...
├─ /locations/san-diego/home-care
├─ /locations/san-diego/personal-care
├─ /locations/san-diego/respite-care
... (90 total routes)
```

## Implementation Notes

1. **Subarea Detection**: Routes check if `slug` is a subarea first, then fall back to parent location
2. **Related Areas**: Automatically shows other subareas in the same parent location
3. **Image Fallbacks**: Uses `subarea.heroImageUrl` or falls back to service-specific image
4. **Testimonials**: Filters by location name or subarea name for local relevance
5. **Zip Codes**: Displays subarea-specific or location-wide zip codes

## Future Enhancements

Potential additions:
1. Add actual landmark images (currently using gradients with icons)
2. Implement schema.org LocalBusiness structured data
3. Add service availability calendar
4. Include local provider profiles
5. Add real-time availability indicators
6. Implement reviews/ratings per location
