# Location-Service Schema Guide

## New Function: `generateLocationServiceSchema()`

Added to `/lib/schema.ts` to improve SEO for location-specific service pages.

### Function Signature

```typescript
export function generateLocationServiceSchema(
  service: typeof services[0],
  locationName: string,
  locationData: { zipCodes: string[]; coordinates: { lat: number; lng: number } },
  subareaData?: SubareaData
): SchemaMarkup[]
```

### Parameters

- **service**: A service object from the `services` array (e.g., "skilled-nursing", "home-care")
- **locationName**: The name of the location (e.g., "San Diego", "La Jolla")
- **locationData**: Object containing zip codes and GPS coordinates for the location
- **subareaData** (optional): Neighborhood-level data with structure:
  ```typescript
  interface SubareaData {
    name: string;           // e.g., "Downtown", "Hillcrest"
    zipCodes?: string[];    // Optional: specific zip codes for the subarea
    landmarks?: string[];   // Optional: notable landmarks in the subarea
  }
  ```

### Returns

Returns an array of `SchemaMarkup[]` containing:
1. **Service Schema** - Service with location-specific areaServed
2. **LocalBusiness Schema** - Business info with GeoCoordinates
3. **BreadcrumbList Schema** - Navigation hierarchy
4. **FAQ Schema** - Location-specific questions and answers

## Usage Examples

### Example 1: Location + Service (No Subarea)

Generate schema for "Skilled Nursing in San Diego":

```typescript
import { generateLocationServiceSchema } from "@/lib/schema";
import { services, locations } from "@/lib/content-data";

const skilledNursingService = services.find(s => s.slug === "skilled-nursing");
const sanDiegoLocation = locations.find(l => l.slug === "san-diego");

const schemas = generateLocationServiceSchema(
  skilledNursingService,
  sanDiegoLocation.name,
  {
    zipCodes: sanDiegoLocation.zipCodes,
    coordinates: sanDiegoLocation.coordinates
  }
);

// Return schemas in <head> as JSON-LD
```

### Example 2: Location + Service + Subarea

Generate schema for "Home Care in Downtown San Diego":

```typescript
const homeCareService = services.find(s => s.slug === "home-care");
const sanDiegoLocation = locations.find(l => l.slug === "san-diego");

const schemas = generateLocationServiceSchema(
  homeCareService,
  sanDiegoLocation.name,
  {
    zipCodes: sanDiegoLocation.zipCodes,
    coordinates: sanDiegoLocation.coordinates
  },
  {
    name: "Downtown",
    zipCodes: ["92101", "92102"],
    landmarks: ["Gaslamp Quarter", "Petco Park", "Waterfront"]
  }
);

// Use for location-specific neighborhood pages
```

### Example 3: Integration in Next.js Page

```typescript
// app/services/[slug]/locations/[location]/page.tsx

import { generateLocationServiceSchema } from "@/lib/schema";
import { services, locations } from "@/lib/content-data";

interface Props {
  params: {
    slug: string;
    location: string;
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug);
  const location = locations.find(l => l.slug === params.location);

  const schemas = generateLocationServiceSchema(
    service,
    location.name,
    {
      zipCodes: location.zipCodes,
      coordinates: location.coordinates
    }
  );

  return (
    <>
      <head>
        {schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      {/* Page content */}
    </>
  );
}
```

### Example 4: With Subarea for Hyperlocal Pages

```typescript
// app/locations/[location]/[subarea]/[service]/page.tsx

import { generateLocationServiceSchema } from "@/lib/schema";
import { services, locations } from "@/lib/content-data";

interface Props {
  params: {
    location: string;
    subarea: string;
    service: string;
  };
}

export default function HyperlocalServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.service);
  const location = locations.find(l => l.slug === params.location);

  // Find subarea in location's neighborhoods
  const subareaName = params.subarea
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const schemas = generateLocationServiceSchema(
    service,
    location.name,
    {
      zipCodes: location.zipCodes,
      coordinates: location.coordinates
    },
    {
      name: subareaName,
      landmarks: ["Local hospitals", "Community centers", "Parks"]
    }
  );

  return (
    <>
      <head>
        {schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      {/* Page content */}
    </>
  );
}
```

## Schema Details

### 1. Service Schema

Combines location data with service information:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Skilled Nursing in San Diego",
  "description": "[Service description] Available in San Diego...",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Happy Home Care",
    "url": "https://happyhomecare.com",
    "telephone": "+1-619-555-0100"
  },
  "areaServed": [
    { "@type": "PostalAddress", "postalCode": "92101", ... },
    { "@type": "PostalAddress", "postalCode": "92102", ... }
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "..." }
  }
}
```

**SEO Benefits:**
- Ranks for "[Service] in [Location]" queries
- Shows location-specific availability
- Enables rich snippets with pricing and service details

### 2. LocalBusiness Schema

Provides location context with coordinates:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Happy Home Care - San Diego",
  "address": { "@type": "PostalAddress", ... },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7157,
    "longitude": -117.1611
  },
  "areaServed": [
    { "@type": "PostalAddress", "postalCode": "92101" },
    ...
  ],
  "openingHoursSpecification": {
    "dayOfWeek": ["Monday", "Tuesday", ...],
    "opens": "00:00",
    "closes": "23:59"
  }
}
```

**SEO Benefits:**
- Improves local map visibility (Google Maps, Google Local Pack)
- Coordinates enable distance-based ranking
- 24/7 availability signals boost local search relevance
- Zip code coverage demonstrates service area

### 3. BreadcrumbList Schema

Hierarchical navigation path:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "https://happyhomecare.com" },
    { "position": 2, "name": "Locations", "item": "..." },
    { "position": 3, "name": "San Diego", "item": "..." },
    { "position": 4, "name": "Skilled Nursing in San Diego", "item": "..." }
  ]
}
```

**With Subarea:**
```json
{
  "itemListElement": [
    ...,
    { "position": 4, "name": "Downtown", "item": "..." },
    { "position": 5, "name": "Skilled Nursing in Downtown San Diego", "item": "..." }
  ]
}
```

**SEO Benefits:**
- Improves SERP click-through rate (breadcrumbs display in search results)
- Helps Google understand site hierarchy
- Enables "breadcrumb navigation" rich snippet

### 4. FAQ Schema

Location-specific questions answered:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What skilled nursing services are available in San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Happy Home Care provides comprehensive skilled nursing services throughout San Diego, including RN care management, medication administration, wound care..."
      }
    },
    {
      "name": "How much does skilled nursing cost in San Diego?",
      ...
    },
    {
      "name": "Do you provide 24/7 skilled nursing in San Diego?",
      ...
    },
    {
      "name": "Are caregivers in San Diego licensed and trained for skilled nursing?",
      ...
    },
    {
      "name": "Is skilled nursing available in my area of San Diego?",
      ...
    }
  ]
}
```

**SEO Benefits:**
- Targets voice search queries ("What skilled nursing services in San Diego?")
- Enables FAQ rich snippet in search results
- Provides semantic signal about location-service relevance
- Improves CTR with question-based snippets

## Implementation Tips

### 1. Use with URL Structure

Best when URL structure matches schema hierarchy:
```
/services/[slug]/locations/[location]
/services/[slug]/locations/[location]/[subarea]
/locations/[location]/services/[slug]
```

### 2. Dynamic Page Generation

For sites with many location-service combinations:

```typescript
// Generate static params for all combinations
export async function generateStaticParams() {
  const params = [];

  services.forEach(service => {
    locations.forEach(location => {
      params.push({
        serviceSlug: service.slug,
        locationSlug: location.slug
      });

      // Add subarea pages
      location.neighborhoods?.forEach(neighborhood => {
        params.push({
          serviceSlug: service.slug,
          locationSlug: location.slug,
          subareaSlug: neighborhood.toLowerCase().replace(/\s+/g, "-")
        });
      });
    });
  });

  return params;
}
```

### 3. Content Strategy

For maximum SEO impact:

1. **Service Main Page** → Use `generateServiceSchema()`
2. **Location Main Page** → Use `generateLocalBusinessSchema()`
3. **Service + Location** → Use `generateLocationServiceSchema()`
4. **Service + Location + Subarea** → Use `generateLocationServiceSchema()` with subareaData
5. **Subarea Main Page** → Use `generateSubareaLocalBusinessSchema()` or `generateSubareaPlaceSchema()`

### 4. Content Optimization

Pages using this schema should include:

- Location-specific service descriptions
- Local testimonials or case studies
- Service availability in that area
- Local pricing (if applicable)
- Geographic area zip codes
- Contact information for that location
- Call-to-action for that service + location

## Testing

Validate generated schemas with:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Structured Data Testing Tool**: https://developers.google.com/structured-data/testing-tool

## Related Functions

- `generateServiceSchema()` - General service schema
- `generateLocalBusinessSchema()` - General location schema
- `generateSubareaServiceSchema()` - Subarea-specific service schema
- `generateSubareaLocalBusinessSchema()` - Subarea-specific location schema
- `generateSubareaFAQSchema()` - Subarea-specific FAQ schema
- `generateSubareaBreadcrumbSchema()` - Subarea-specific breadcrumbs

## Questions & Answers

**Q: When should I use this instead of generateSubareaServiceSchema()?**
A: Use `generateLocationServiceSchema()` when you need a comprehensive schema bundle. Use `generateSubareaServiceSchema()` when you only need a single service schema for a subarea.

**Q: Can I use this for multiple subareas?**
A: Generate separate schema bundles for each subarea. Don't try to pass multiple subareas - call the function once per subarea.

**Q: How does this impact local SEO?**
A: The combination of GeoCoordinates, specific zip codes, and FAQ schema significantly improves local search visibility, Google Maps ranking, and voice search results.

**Q: Does the order of subareas in breadcrumbs matter?**
A: Yes. The function generates: Home > Locations > Location > Subarea > Service. Ensure your URL structure and site navigation match this hierarchy.
