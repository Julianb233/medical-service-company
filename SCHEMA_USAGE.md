# Location Service Schema Usage Guide

## New Function: `generateLocationServiceSchema`

Added to `/root/github-repos/medical-service-company/lib/schema.ts`

### Function Signature

```typescript
export function generateLocationServiceSchema(
  service: Service,
  location: Location | Subarea,
  zipCodes: string[],
  coordinates: { lat: number; lng: number }
): object
```

### Parameters

1. **service**: Service object from `lib/content-data.ts`
   - Contains service details (title, description, slug, etc.)
   - Example: `services.find(s => s.slug === 'skilled-nursing')`

2. **location**: Location or Subarea object
   - From `lib/content-data.ts` locations array, OR
   - From `lib/subareas-data.ts` SubareaData type
   - Must have `name` and `slug` properties

3. **zipCodes**: Array of zip codes served
   - Example: `["92037", "92038", "92039"]`

4. **coordinates**: Geographic coordinates
   - Example: `{ lat: 32.8328, lng: -117.2713 }`

### Returns

Object containing 4 JSON-LD schemas:

```typescript
{
  localBusiness: SchemaMarkup;  // LocalBusiness + MedicalBusiness
  service: SchemaMarkup;         // Service schema
  breadcrumb: BreadcrumbSchema;  // Navigation breadcrumbs
  faq: SchemaMarkup;            // FAQPage with 6 location-specific questions
}
```

## Schema Details

### 1. LocalBusiness Schema
- **@type**: `["LocalBusiness", "MedicalBusiness"]`
- **Features**:
  - Service type (home care, skilled nursing, etc.)
  - Location details (address, coordinates, zip codes)
  - AreaServed with specific zip codes
  - Contact info (phone, email)
  - AggregateRating (4.9/5.0)
  - 24/7 opening hours
  - Available service details
  - Parent organization link

### 2. Service Schema
- **@type**: `"Service"`
- **Features**:
  - Service name and description
  - Provider (Happy Home Care)
  - AreaServed (all zip codes)
  - AggregateRating
  - Offering description with price range
  - Potential action (booking/reservation)

### 3. BreadcrumbList Schema
- **@type**: `"BreadcrumbList"`
- **Hierarchy**: Home > Locations > [Location] > [Service]
- Improves SEO and user navigation

### 4. FAQPage Schema
- **@type**: `"FAQPage"`
- **6 Location-Specific Questions**:
  1. "What [service] services are available in [Location]?"
  2. "How much does [service] cost in [Location]?"
  3. "Do you serve [zip code] and surrounding zip codes?"
  4. "Is [service] available 24/7 in [Location]?"
  5. "Are caregivers in [Location] licensed and trained for [service]?"
  6. "How do I get started with [service] in [Location]?"

## Example Usage

### Example 1: Location + Service

```typescript
import { generateLocationServiceSchema } from './lib/schema';
import { services, locations } from './lib/content-data';

const lajollaLocation = locations.find(l => l.slug === 'la-jolla')!;
const skilledNursingService = services.find(s => s.slug === 'skilled-nursing')!;

const schemas = generateLocationServiceSchema(
  skilledNursingService,
  lajollaLocation,
  lajollaLocation.zipCodes,
  lajollaLocation.coordinates
);

// Use individual schemas
const localBusinessSchema = schemas.localBusiness;
const serviceSchema = schemas.service;
const breadcrumbSchema = schemas.breadcrumb;
const faqSchema = schemas.faq;
```

### Example 2: Subarea + Service

```typescript
import { generateLocationServiceSchema } from './lib/schema';
import { services } from './lib/content-data';
import { subareas } from './lib/subareas-data';

const downtownSubarea = subareas.find(s => s.slug === 'downtown')!;
const homeCareService = services.find(s => s.slug === 'home-care')!;

const schemas = generateLocationServiceSchema(
  homeCareService,
  downtownSubarea,
  downtownSubarea.zipCodes,
  downtownSubarea.coordinates
);
```

### Example 3: In a Next.js Page

```tsx
import { generateLocationServiceSchema } from '@/lib/schema';
import { services, locations } from '@/lib/content-data';

export default function LocationServicePage({ params }: { params: { location: string; service: string } }) {
  const location = locations.find(l => l.slug === params.location)!;
  const service = services.find(s => s.slug === params.service)!;

  const schemas = generateLocationServiceSchema(
    service,
    location,
    location.zipCodes,
    location.coordinates
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />

      {/* Your page content */}
    </>
  );
}
```

## SEO Benefits

1. **Local SEO**: Geo-coordinates and zip codes improve local search rankings
2. **Voice Search**: FAQ schema optimized for voice queries
3. **Rich Results**: Eligible for Google rich snippets
4. **Service Discovery**: Clear service + location associations
5. **Breadcrumb Navigation**: Enhanced SERP display with breadcrumbs
6. **Trust Signals**: Ratings, licensing, and availability information

## Type Safety

All schemas are fully typed with TypeScript:
- `SchemaMarkup` interface for general schemas
- `BreadcrumbSchema` interface for breadcrumb navigation
- Type inference from `services` and `locations` arrays
- Compatible with both Location and Subarea types

## File Location

- **Schema File**: `/root/github-repos/medical-service-company/lib/schema.ts`
- **Function**: `generateLocationServiceSchema` (line 907-1134)
- **Related Types**: `SchemaMarkup`, `BreadcrumbSchema`, `BreadcrumbItem`
