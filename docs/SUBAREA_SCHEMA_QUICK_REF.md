# Subarea Schema Functions - Quick Reference Card

## Function Overview

All functions follow this pattern:
```typescript
function generate[Type]Schema(
  location: (typeof locations)[0],
  subarea: string,
  ...optional params
): SchemaMarkup | BreadcrumbSchema
```

---

## 1. Local Business Schema

**Function:** `generateSubareaLocalBusinessSchema(location, subarea)`

**Returns:** SchemaMarkup with `@type: ["LocalBusiness", "MedicalBusiness"]`

**Purpose:** Show in SERP with address, phone, hours; local pack eligibility

**Key Properties:**
- `name`: "Happy Home Care - Hillcrest, San Diego"
- `address`: Full postal address with neighborhood
- `geo`: Latitude/longitude coordinates
- `aggregateRating`: 4.9 stars, 127 reviews
- `openingHoursSpecification`: 24/7 support

**Usage:**
```typescript
const schema = generateSubareaLocalBusinessSchema(sanDiego, "Hillcrest");
// Targets: "home care in Hillcrest" SERP rich results
```

---

## 2. FAQ Schema

**Function:** `generateSubareaFAQSchema(location, subarea)`

**Returns:** SchemaMarkup with `@type: "FAQPage"`

**Purpose:** Voice search, position 0, featured snippets

**Voice Queries Targeted:**
1. "What home care services are available in Hillcrest?"
2. "Is there 24-hour home care in Hillcrest?"
3. "How do I get started with home care in Hillcrest?"
4. "Are caregivers in Hillcrest licensed?"
5. "What is the cost of home care in Hillcrest?"
6. "Does Happy Home Care serve Hillcrest?"

**Usage:**
```typescript
const schema = generateSubareaFAQSchema(sanDiego, "Hillcrest");
// Targets: Voice searches, "People also ask"
```

---

## 3. Place Schema

**Function:** `generateSubareaPlaceSchema(location, subarea, landmarks?)`

**Returns:** SchemaMarkup with `@type: "Place"`

**Purpose:** Geographic context; maps; landmark association

**Optional Parameter:**
```typescript
landmarks: ["Balboa Park", "University Ave", "The Centre City"]
```

**Usage:**
```typescript
const schema = generateSubareaPlaceSchema(
  sanDiego,
  "Hillcrest",
  ["Balboa Park", "University Ave"]
);
// Targets: "neighborhood near [landmark]" queries
```

---

## 4. Breadcrumb Schema

**Function:** `generateSubareaBreadcrumbSchema(location, subarea)`

**Returns:** BreadcrumbSchema (4-level hierarchy)

**Purpose:** SERP breadcrumb display; click-through improvement

**Hierarchy:**
1. Home → happyhomecare.com
2. Locations → /locations
3. San Diego → /locations/san-diego
4. Hillcrest → /locations/san-diego#hillcrest

**Usage:**
```typescript
const schema = generateSubareaBreadcrumbSchema(sanDiego, "Hillcrest");
// Targets: SERP display, navigation clarity
```

---

## 5. Service Schema

**Function:** `generateSubareaServiceSchema(service, location, subarea)`

**Returns:** SchemaMarkup with `@type: "Service"`

**Purpose:** Long-tail keywords; high-intent searches; booking integration

**Example Queries:**
- "Skilled nursing care in Hillcrest"
- "24-hour home care near Balboa Park"
- "Respite care services in San Diego"

**Usage:**
```typescript
const skilledNursing = services.find(s => s.slug === "skilled-nursing");
const schema = generateSubareaServiceSchema(
  skilledNursing,
  sanDiego,
  "Hillcrest"
);
// Targets: "service + location" commercial intent
```

---

## Complete Example

```typescript
// Generate ALL schemas for one neighborhood
import {
  generateSubareaLocalBusinessSchema,
  generateSubareaFAQSchema,
  generateSubareaPlaceSchema,
  generateSubareaBreadcrumbSchema,
  generateSubareaServiceSchema,
} from "@/lib/schema";
import { locations, services } from "@/lib/content-data";

const location = locations.find(l => l.slug === "san-diego");
const subarea = "Hillcrest";
const landmarks = ["Balboa Park", "University Ave"];

const schemas = [
  // 1. Business info
  generateSubareaLocalBusinessSchema(location, subarea),

  // 2. Voice search FAQs
  generateSubareaFAQSchema(location, subarea),

  // 3. Geographic context
  generateSubareaPlaceSchema(location, subarea, landmarks),

  // 4. Navigation breadcrumbs
  generateSubareaBreadcrumbSchema(location, subarea),

  // 5. All services in area
  ...services.map(s =>
    generateSubareaServiceSchema(s, location, subarea)
  ),
];

// Render all in <head>
schemas.forEach(schema => {
  // <script type="application/ld+json">{JSON.stringify(schema)}</script>
});
```

---

## Common Patterns

### All Neighborhoods in a Location
```typescript
const location = locations.find(l => l.slug === "san-diego");
const allSchemas = location.neighborhoods.flatMap(neighborhood => [
  generateSubareaLocalBusinessSchema(location, neighborhood),
  generateSubareaFAQSchema(location, neighborhood),
  generateSubareaBreadcrumbSchema(location, neighborhood),
]);
```

### All Services in a Neighborhood
```typescript
const schemas = services.map(service =>
  generateSubareaServiceSchema(service, location, "Hillcrest")
);
```

### Single Service + Neighborhood
```typescript
const schema = generateSubareaServiceSchema(
  services.find(s => s.slug === "skilled-nursing"),
  location,
  "Hillcrest"
);
```

---

## Key Parameters

| Function | location | subarea | Optional |
|----------|----------|---------|----------|
| LocalBusiness | Required | Required | - |
| FAQ | Required | Required | - |
| Place | Required | Required | landmarks |
| Breadcrumb | Required | Required | - |
| Service | Required (via service) | Required | - |

---

## Neighborhood Data Structure

From `content-data.ts`:

```typescript
locations[0].neighborhoods  // Array of strings: ["Hillcrest", "Downtown", ...]
locations[0].name           // "San Diego"
locations[0].slug           // "san-diego"
locations[0].coordinates    // { lat: 32.7157, lng: -117.1611 }
locations[0].zipCodes       // ["92101", "92102", ...]
```

---

## URL Structure for Subareas

Use anchor links for neighborhood URLs:

```typescript
// In breadcrumb & schema
url: `${DOMAIN}/locations/${location.slug}#${subarea.toLowerCase().replace(/\s+/g, "-")}`

// Examples:
// https://happyhomecare.com/locations/san-diego#hillcrest
// https://happyhomecare.com/locations/san-diego#north-park
// https://happyhomecare.com/locations/san-diego#mission-hills
```

---

## Type Definitions

All functions return `SchemaMarkup` (except breadcrumb):

```typescript
interface SchemaMarkup {
  "@context": string;           // "https://schema.org"
  "@type": string | string[];   // e.g., "LocalBusiness" or ["LocalBusiness", "MedicalBusiness"]
  [key: string]: unknown;       // Flexible properties
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string; // URL
}
```

---

## Validation Checklist

- [ ] `@context` is "https://schema.org"
- [ ] `@type` is correct for schema
- [ ] All URLs are absolute (https://...)
- [ ] Neighborhood name matches exactly
- [ ] JSON is valid (no syntax errors)
- [ ] Required properties present
- [ ] No circular references
- [ ] Dates in ISO 8601 format
- [ ] Numbers not quoted as strings
- [ ] Test with validator.schema.org

---

## Framework Snippets

### Astro
```astro
---
const schema = generateSubareaLocalBusinessSchema(location, subarea);
---
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

### Next.js Pages
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### Next.js App Router
```tsx
<script
  type="application/ld+json"
  suppressHydrationWarning
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### React Helmet
```tsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify(schema)}
  </script>
</Helmet>
```

---

## SEO Metrics to Track

- **Rich Result Impressions** (Google Search Console → Enhancements)
- **Breadcrumb CTR** (Search Console → Performance)
- **FAQ Click-Through** (People also ask clicks)
- **Local Pack Visibility** (Google Business Profile)
- **Voice Search Impressions** (Search Console filters)

---

## Troubleshooting

**Schema not showing in search results?**
- Validate with validator.schema.org
- Check `@context` is exactly "https://schema.org"
- Ensure all URLs are absolute and valid
- Test with Google Rich Results Test

**Neighborhoods not in breadcrumbs?**
- Verify exact spelling/case matches
- Check URL structure uses anchor links
- Validate with Google Rich Results Test
- Wait 2 weeks for indexing

**FAQ snippets not appearing?**
- Ensure 6 questions minimum
- Answers should be 40-60 words
- Include neighborhood name in question
- Test specific queries in Google

**Service schema showing wrong location?**
- Verify `serviceArea` array is complete
- Check URL includes location slug
- Ensure provider location matches
- Validate against schema.org/Service

---

## File Locations

- **Functions:** `/lib/schema.ts` (lines 567-885)
- **Usage Guide:** `/docs/SUBAREA_SCHEMA_GUIDE.md`
- **Implementation:** `/docs/SUBAREA_SCHEMA_IMPLEMENTATION.md`
- **Quick Ref:** `/docs/SUBAREA_SCHEMA_QUICK_REF.md` (this file)

---

## Import Syntax

```typescript
// ESM
import { generateSubareaLocalBusinessSchema } from "@/lib/schema";

// CommonJS
const { generateSubareaLocalBusinessSchema } = require("./lib/schema");

// TypeScript with types
import type { SchemaMarkup } from "@/lib/schema";
const schema: SchemaMarkup = generateSubareaLocalBusinessSchema(...);
```

---

## Last Updated

December 2025 - v1.0.0

Compatible with:
- Node.js 16+
- TypeScript 4.5+
- All modern frameworks (Next.js, Astro, Remix, etc.)
