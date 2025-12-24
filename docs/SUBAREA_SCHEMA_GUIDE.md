# Subarea-Specific SEO Schema Functions Guide

## Overview

This guide documents the five new subarea-specific schema generation functions added to `/lib/schema.ts`. These functions enable hyperlocal SEO optimization by creating schema markup tailored to specific neighborhoods within service areas.

**Functions Added:**
1. `generateSubareaLocalBusinessSchema()` - Hyperlocal business information
2. `generateSubareaFAQSchema()` - Voice-search friendly local questions
3. `generateSubareaPlaceSchema()` - Geographic/landmark context
4. `generateSubareaBreadcrumbSchema()` - Navigation hierarchy
5. `generateSubareaServiceSchema()` - Service availability by neighborhood

---

## 1. generateSubareaLocalBusinessSchema()

### Purpose
Creates LocalBusiness + MedicalBusiness schema for a specific neighborhood within a location, enabling Google to understand your presence in hyperlocal service areas.

### Function Signature
```typescript
function generateSubareaLocalBusinessSchema(
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup
```

### Parameters
- **location**: A location object from `content-data.ts` (e.g., San Diego, La Jolla)
- **subarea**: Neighborhood name (e.g., "Hillcrest", "Downtown", "North Park")

### Schema Output
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "name": "Happy Home Care - Hillcrest, San Diego",
  "description": "Professional home care services in Hillcrest, San Diego...",
  "url": "https://happyhomecare.com/locations/san-diego#hillcrest",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hillcrest, San Diego",
    "postalCode": "92101",
    "areaServed": ["92101", "92102", ...]
  },
  "geo": { "latitude": 32.7157, "longitude": -117.1611 },
  "areaServed": [
    { "@type": "City", "name": "Hillcrest, San Diego" },
    { "@type": "City", "name": "San Diego" }
  ],
  "aggregateRating": { "ratingValue": "4.9", "ratingCount": "127" },
  "openingHoursSpecification": { "dayOfWeek": [...], "opens": "00:00", "closes": "23:59" },
  "knowsAbout": ["Home Care in Hillcrest", "Skilled Nursing in San Diego", ...]
}
```

### Usage Example
```typescript
import { generateSubareaLocalBusinessSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

const sanDiego = locations.find(l => l.slug === "san-diego");
const schema = generateSubareaLocalBusinessSchema(sanDiego, "Hillcrest");

// Add to page <head>
<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>
```

### SEO Benefits
- **SERP Richness**: Shows address, phone, hours in search results
- **Local Pack Eligibility**: Helps visibility in "3-pack" local results
- **Hyperlocal Targeting**: Signals service availability in specific neighborhoods
- **Review Aggregation**: Enables rating display for specific areas
- **Knowledge Panel**: Contributes to Knowledge Panel information

### Best Practices
- Generate schemas for all neighborhoods listed in location's `neighborhoods` array
- Update URLs to use anchor links (`#neighborhood-name`) for easy navigation
- Ensure `aggregateRating` matches or is sourced from actual review data
- Keep `knowsAbout` limited to 5-6 most relevant services/keywords

---

## 2. generateSubareaFAQSchema()

### Purpose
Creates FAQ schema with voice-search optimized questions specific to neighborhoods. Targets natural language queries like "What home care services are available in Hillcrest?"

### Function Signature
```typescript
function generateSubareaFAQSchema(
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup
```

### Parameters
- **location**: Location object from `content-data.ts`
- **subarea**: Neighborhood name

### Schema Output
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What home care services are available in Hillcrest, San Diego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Happy Home Care provides comprehensive home health services..."
      }
    },
    {
      "@type": "Question",
      "name": "Is there 24-hour home care available in Hillcrest?",
      "acceptedAnswer": { ... }
    },
    ...
  ]
}
```

### Voice Search Questions Included
1. **Service Availability**: "What home care services are available in [neighborhood]?"
2. **24/7 Care**: "Is there 24-hour home care available in [neighborhood]?"
3. **Getting Started**: "How do I get started with home care in [neighborhood], [city]?"
4. **Credentials**: "Are caregivers in [neighborhood], [city] licensed and trained?"
5. **Pricing**: "What is the cost of home care in [neighborhood]?"
6. **Coverage**: "Does Happy Home Care serve [neighborhood] neighborhoods?"

### Usage Example
```typescript
import { generateSubareaFAQSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

const sanDiego = locations.find(l => l.slug === "san-diego");
const schema = generateSubareaFAQSchema(sanDiego, "Hillcrest");

// Add to page <head>
<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>
```

### SEO Benefits
- **Featured Snippets**: Eligible for position 0 voice search results
- **Voice Search Optimization**: Targets "Alexa, what...", "Google, tell me...", etc.
- **Question Matching**: Google uses FAQ schema to match natural language queries
- **SERP Enhancement**: FAQs appear as expandable sections in search results
- **Dwell Time**: Expanded FAQ boxes increase engagement on SERPs

### Best Practices
- Answers should be 40-60 words (Google's optimal length)
- Use action-oriented language ("Call us", "Contact us", "Schedule")
- Include neighborhood name in both question and answer (3-4 times)
- Target 6 questions (current standard) - all included
- Ensure answers are unique per neighborhood (varies by location)

### AI-SEO Optimization
- Questions are phrased as natural voice queries
- Long-tail keywords like "24-hour home care in Hillcrest"
- Answer structure includes CTAs ("Contact us", "Schedule")
- Addresses common search intent at neighborhood level

---

## 3. generateSubareaPlaceSchema()

### Purpose
Creates Place schema to establish geographic context and landmark relationships for neighborhoods. Helps Google understand physical geography and service coverage areas.

### Function Signature
```typescript
function generateSubareaPlaceSchema(
  location: (typeof locations)[0],
  subarea: string,
  landmarks?: string[]
): SchemaMarkup
```

### Parameters
- **location**: Location object from `content-data.ts`
- **subarea**: Neighborhood name
- **landmarks** (optional): Array of notable landmarks or places (e.g., ["Balboa Park", "Hillcrest Pride Festival"])

### Schema Output
```json
{
  "@context": "https://schema.org",
  "@type": "Place",
  "name": "Hillcrest",
  "description": "Hillcrest is a neighborhood in San Diego, San Diego County, California. We provide home care services to residents and families in this community.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hillcrest, San Diego",
    "addressRegion": "CA",
    "postalCode": "92101"
  },
  "geo": { "latitude": 32.7157, "longitude": -117.1611 },
  "containedIn": {
    "@type": "City",
    "name": "San Diego",
    "containedIn": { "@type": "State", "name": "California" }
  },
  "potentialAction": {
    "@type": "FindAction",
    "target": { "urlTemplate": "https://happyhomecare.com/locations/san-diego" }
  }
}
```

### With Landmarks
```json
{
  ...
  "knowsAbout": [
    { "@type": "Place", "name": "Balboa Park" },
    { "@type": "Place", "name": "Hillcrest Pride Festival" }
  ]
}
```

### Usage Example
```typescript
import { generateSubareaPlaceSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

const sanDiego = locations.find(l => l.slug === "san-diego");
const schema = generateSubareaPlaceSchema(
  sanDiego,
  "Hillcrest",
  ["Balboa Park", "University Ave", "The Centre City"]
);
```

### SEO Benefits
- **Geographic Understanding**: Establishes hierarchy (Hillcrest → San Diego → California)
- **Knowledge Panel Integration**: Contributes to place information panels
- **Landmark Association**: Links to well-known places increases relevance
- **Map Visibility**: Improves visibility in Google Maps search
- **Disambiguation**: Helps Google distinguish neighborhoods with identical names
- **Local Intent Matching**: Matches queries with location intent

### Best Practices
- Always provide the `landmarks` parameter for better context
- Use 3-5 most recognizable landmarks per neighborhood
- Ensure landmarks actually exist and are relevant to the area
- Include both commercial (restaurants, shops) and civic (parks, institutions) landmarks
- Verify landmark names are consistent with Google's knowledge graph

### Landmark Examples by Neighborhood

**Hillcrest, San Diego:**
- Balboa Park
- University Avenue
- Christopher Street Park

**Downtown, San Diego:**
- Gaslamp Quarter
- Horton Plaza
- San Diego Bay

**La Jolla Shores, La Jolla:**
- La Jolla Cove
- Birch Aquarium
- Sunny Jim Sea Cave

---

## 4. generateSubareaBreadcrumbSchema()

### Purpose
Creates BreadcrumbList schema for enhanced navigation hierarchy showing the path from Home → Locations → City → Neighborhood. Improves SERP click-through rates and navigation clarity.

### Function Signature
```typescript
function generateSubareaBreadcrumbSchema(
  location: (typeof locations)[0],
  subarea: string
): BreadcrumbSchema
```

### Parameters
- **location**: Location object from `content-data.ts`
- **subarea**: Neighborhood name

### Schema Output
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://happyhomecare.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://happyhomecare.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "San Diego",
      "item": "https://happyhomecare.com/locations/san-diego"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Hillcrest",
      "item": "https://happyhomecare.com/locations/san-diego#hillcrest"
    }
  ]
}
```

### Usage Example
```typescript
import { generateSubareaBreadcrumbSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

const sanDiego = locations.find(l => l.slug === "san-diego");
const schema = generateSubareaBreadcrumbSchema(sanDiego, "Hillcrest");

// Render breadcrumbs in page <head>
<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>

// Optionally render visual breadcrumbs in page body
<nav aria-label="breadcrumb">
  Home > Locations > San Diego > Hillcrest
</nav>
```

### SEO Benefits
- **SERP Display**: Shows breadcrumb navigation above search result
- **CTR Improvement**: Clearer path structure increases click-through rates
- **Crawlability**: Helps Google understand site hierarchy
- **User Experience**: Breadcrumbs reduce bounce rate and increase engagement
- **Mobile Optimization**: Breadcrumbs save space while showing context
- **Sitelinks**: Contributes to Knowledge Panel sitelinks

### Best Practices
- Always use 4-level hierarchy (Home → Category → City → Neighborhood)
- Use anchor links (#neighborhood-name) for subarea URLs
- Ensure URL structure matches breadcrumb path
- Position 1 is always the highest-level item (Home)
- Include breadcrumb markup on both parent and child pages
- Keep breadcrumb labels short (1-3 words max)

### Implementation Example
```typescript
// In Astro or Next.js component
import { generateSubareaBreadcrumbSchema } from "@/lib/schema";

export async function getStaticProps(context) {
  const { location, subarea } = context.params;
  const breadcrumbSchema = generateSubareaBreadcrumbSchema(location, subarea);

  return {
    props: { breadcrumbSchema }
  };
}

// In JSX
<Head>
  <script type="application/ld+json">
    {JSON.stringify(breadcrumbSchema)}
  </script>
</Head>
```

---

## 5. generateSubareaServiceSchema()

### Purpose
Creates Service schema linking specific services (skilled nursing, hospice, etc.) to neighborhoods. Targets long-tail keyword queries like "skilled nursing care in Hillcrest, San Diego" with high commercial intent.

### Function Signature
```typescript
function generateSubareaServiceSchema(
  service: (typeof services)[0],
  location: (typeof locations)[0],
  subarea: string
): SchemaMarkup
```

### Parameters
- **service**: Service object from `content-data.ts` (e.g., home-care, skilled-nursing, respite-care)
- **location**: Location object from `content-data.ts`
- **subarea**: Neighborhood name

### Schema Output
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Skilled Nursing in Hillcrest, San Diego",
  "description": "Our nurses are passionate about providing the highest quality of care... Available in Hillcrest, San Diego. We provide local, compassionate skilled nursing services to residents of this neighborhood.",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Happy Home Care",
    "url": "https://happyhomecare.com",
    "areaServed": { "@type": "City", "name": "Hillcrest, San Diego" }
  },
  "url": "https://happyhomecare.com/services/skilled-nursing?location=san-diego&area=hillcrest",
  "serviceArea": [
    { "@type": "City", "name": "Hillcrest, San Diego" },
    { "@type": "City", "name": "San Diego" }
  ],
  "hasOfferingDescription": {
    "@type": "OfferingDescription",
    "description": "Our nurses are passionate about providing the highest quality of care...",
    "priceRange": "$$"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "result": { "@type": "Reservation", "name": "Book Skilled Nursing in Hillcrest" }
  },
  "knows": [
    "Skilled Nursing in Hillcrest",
    "Professional skilled nursing providers",
    "San Diego skilled nursing specialists",
    "Licensed caregivers",
    "Compassionate in-home care"
  ]
}
```

### Usage Example
```typescript
import { generateSubareaServiceSchema } from "@/lib/schema";
import { services, locations } from "@/lib/content-data";

const skilledNursing = services.find(s => s.slug === "skilled-nursing");
const sanDiego = locations.find(l => l.slug === "san-diego");
const schema = generateSubareaServiceSchema(skilledNursing, sanDiego, "Hillcrest");

// Generate schema for all services in a location
sanDiego.neighborhoods.forEach(neighborhood => {
  services.forEach(service => {
    const schema = generateSubareaServiceSchema(service, sanDiego, neighborhood);
    // Store in schemas array for page rendering
  });
});
```

### SEO Benefits
- **Long-Tail Keywords**: Targets specific service + location combinations
- **Commercial Intent**: Matches high-intent search queries
- **Service-Area Clarity**: Specifies exact neighborhoods where service is available
- **Rich Results**: May appear as rich cards in certain search contexts
- **Booking Integration**: `potentialAction` enables "Book Now" buttons
- **Local Relevance**: Increases relevance score for neighborhood-level searches

### Keyword Targets
```
Skilled Nursing in Hillcrest
24-Hour Home Care in Downtown San Diego
Respite Care in North Park
Hospice Support near Balboa Park
Alzheimer's Care for Hillcrest residents
In-home nursing services in San Diego
Senior home care in Hillcrest, CA
Professional caregivers near University Avenue
```

### Best Practices
- Generate one schema per service-location-subarea combination
- Keep service descriptions under 160 characters for SERP display
- Include "Available in [neighborhood]" phrase in description
- Use query parameters in URL for tracking/analytics
- Ensure `knows` array includes both broad and specific terms
- Link to booking/contact form via `potentialAction`

### Implementation Strategy
```typescript
// Generate schemas for all services in a location
export function generateLocationServiceSchemas(
  location: (typeof locations)[0]
): SchemaMarkup[] {
  const schemas: SchemaMarkup[] = [];

  location.neighborhoods.forEach(neighborhood => {
    services.forEach(service => {
      schemas.push(
        generateSubareaServiceSchema(service, location, neighborhood)
      );
    });
  });

  return schemas;
}

// Usage in page layout
const locationSchemas = generateLocationServiceSchemas(sanDiego);
```

---

## Integration Examples

### Complete Example: Location Page with All Subarea Schemas

```typescript
// pages/locations/[slug].astro
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema, generateSubareaPlaceSchema, generateSubareaBreadcrumbSchema, generateSubareaServiceSchema } from "@/lib/schema";
import { locations, services } from "@/lib/content-data";

export async function getStaticPaths() {
  return locations.flatMap(location =>
    location.neighborhoods.map(neighborhood => ({
      params: { slug: location.slug, neighborhood },
      props: { location, neighborhood }
    }))
  );
}

const { location, neighborhood } = Astro.props;
const schemas: SchemaMarkup[] = [
  generateSubareaLocalBusinessSchema(location, neighborhood),
  generateSubareaFAQSchema(location, neighborhood),
  generateSubareaPlaceSchema(location, neighborhood, getLandmarks(neighborhood)),
  generateSubareaBreadcrumbSchema(location, neighborhood),
];

// Generate service schemas for this neighborhood
services.forEach(service => {
  schemas.push(generateSubareaServiceSchema(service, location, neighborhood));
});
---

<head>
  {schemas.map(schema => (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  ))}
</head>

<main>
  <!-- Page content -->
</main>
```

### React/Next.js Example

```typescript
// components/SubareaSchema.tsx
import { useEffect } from 'react';
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';

interface SubareaSchemaProps {
  locationSlug: string;
  subarea: string;
}

export default function SubareaSchema({ locationSlug, subarea }: SubareaSchemaProps) {
  useEffect(() => {
    const location = locations.find(l => l.slug === locationSlug);
    if (!location) return;

    const businessSchema = generateSubareaLocalBusinessSchema(location, subarea);
    const faqSchema = generateSubareaFAQSchema(location, subarea);

    // Add to document head
    const scripts = [businessSchema, faqSchema].map(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach(s => s.remove());
    };
  }, [locationSlug, subarea]);

  return null;
}

// Usage
export default function LocationPage({ location, subarea }) {
  return (
    <>
      <SubareaSchema locationSlug={location.slug} subarea={subarea} />
      {/* Page content */}
    </>
  );
}
```

---

## TypeScript Type Support

All functions maintain full TypeScript compatibility:

```typescript
// Type inference works automatically
const location = locations[0]; // Inferred as location object
const schema = generateSubareaLocalBusinessSchema(location, "Hillcrest");
// schema type is SchemaMarkup (fully typed)

// Type safety ensures parameters
generateSubareaServiceSchema(
  services[0],      // ✓ Correctly typed service
  locations[0],     // ✓ Correctly typed location
  "Hillcrest"       // ✓ string subarea
);

// SchemaMarkup interface supports all schema.org types
const schema: SchemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", // or ["LocalBusiness", "MedicalBusiness"]
  [key: string]: unknown     // Flexible property support
};
```

---

## Validation & Testing

### Schema Validation Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Schema.org Validator**: https://validator.schema.org/
- **Microdata Validator**: https://validator.w3.org/

### Test Case Example
```typescript
import { generateSubareaLocalBusinessSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

test("generateSubareaLocalBusinessSchema creates valid schema", () => {
  const sanDiego = locations.find(l => l.slug === "san-diego");
  const schema = generateSubareaLocalBusinessSchema(sanDiego, "Hillcrest");

  expect(schema["@context"]).toBe("https://schema.org");
  expect(schema["@type"]).toContain("LocalBusiness");
  expect(schema["@type"]).toContain("MedicalBusiness");
  expect(schema.name).toContain("Hillcrest");
  expect(schema.address.addressLocality).toBe("Hillcrest, San Diego");
});
```

---

## Performance Considerations

### Generation Efficiency
- Functions are lightweight and execute in milliseconds
- Schema objects are serializable for caching
- No external API calls required
- Compatible with static site generation (SSG)

### Caching Strategy
```typescript
// Cache generated schemas
const schemaCache = new Map<string, SchemaMarkup>();

function getCachedSubareaSchema(locationSlug: string, subarea: string): SchemaMarkup {
  const key = `${locationSlug}:${subarea}`;

  if (!schemaCache.has(key)) {
    const location = locations.find(l => l.slug === locationSlug);
    if (!location) throw new Error(`Location not found: ${locationSlug}`);

    schemaCache.set(key, generateSubareaLocalBusinessSchema(location, subarea));
  }

  return schemaCache.get(key)!;
}
```

---

## Troubleshooting

### Common Issues

**Q: Schema not showing in Google Rich Results Test**
- A: Ensure JSON-LD is valid (use validator.schema.org)
- Verify `@context` is "https://schema.org"
- Check for required properties per schema type
- Validate all URLs are absolute (https://...)

**Q: Neighborhoods not appearing in breadcrumbs**
- A: Verify neighborhood names match exactly in `locations[].neighborhoods` array
- Use correct URL structure with anchor links (#neighborhood-name)
- Test with Google Rich Results Test tool

**Q: FAQ schema not showing snippets**
- A: Ensure 6+ questions in mainEntity array (minimum for FAQ)
- Keep answers between 40-60 words
- Include clear question-answer structure
- Test specific neighborhood queries in Google Search Console

**Q: Service schema showing wrong location**
- A: Verify `serviceArea` array includes both neighborhood and city
- Check `url` includes correct query parameters
- Ensure `provider.areaServed` matches intended location

---

## SEO Measurement

### Key Metrics to Track
- **Rich Result Impressions**: Google Search Console > Enhancements
- **Breadcrumb Click-Through**: Search Console > Performance > Click CTR
- **FAQ Schema Clicks**: Search Console > Performance > "People also ask"
- **Local Pack Visibility**: Google Business Profile dashboard
- **Position Zero Rate**: Rich results + featured snippets tracking

### Analytics Integration
```typescript
// Track schema generation
function trackSchemaGeneration(schemaType: string, location: string, subarea: string) {
  gtag('event', 'schema_generated', {
    schema_type: schemaType,
    location: location,
    subarea: subarea,
    timestamp: new Date().toISOString()
  });
}

const schema = generateSubareaLocalBusinessSchema(location, subarea);
trackSchemaGeneration('LocalBusiness', location.slug, subarea);
```

---

## Maintenance & Updates

### When to Update Schemas
- New neighborhoods added to locations
- Service offerings change
- Landmarks/areas need updating
- Aggregate ratings updated with new reviews
- Business hours change
- Phone numbers or contact info updates

### Version Control
```typescript
// Add version metadata to schemas for tracking
const schema = {
  ...generateSubareaLocalBusinessSchema(location, subarea),
  "@version": "1.0.0",
  "@generated": new Date().toISOString(),
  "@generator": "Happy Home Care SEO Schema Generator"
};
```

---

## Related Resources

- **schema.org Documentation**: https://schema.org
- **Google Structured Data Guide**: https://developers.google.com/search/docs/beginner/intro-structured-data
- **Local Business Schema**: https://schema.org/LocalBusiness
- **Medical Business Schema**: https://schema.org/MedicalBusiness
- **FAQ Schema Guidelines**: https://developers.google.com/search/docs/appearance/faqpage

---

## Function Reference Summary

| Function | Input | Output | Best For |
|----------|-------|--------|----------|
| `generateSubareaLocalBusinessSchema()` | location, subarea | LocalBusiness+MedicalBusiness | SERP richness, Local Pack |
| `generateSubareaFAQSchema()` | location, subarea | FAQPage | Voice search, Position 0 |
| `generateSubareaPlaceSchema()` | location, subarea, landmarks | Place | Geographic context, Maps |
| `generateSubareaBreadcrumbSchema()` | location, subarea | BreadcrumbList | Navigation, CTR improvement |
| `generateSubareaServiceSchema()` | service, location, subarea | Service | Long-tail keywords, Booking |

---

## License & Attribution

These schema functions are part of the Happy Home Care SEO optimization suite. Use freely within your organization and modify as needed for your specific content structure.

Last Updated: December 2025
