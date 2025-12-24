# Subarea Schema Implementation Guide

Quick reference for integrating subarea-specific schemas into your pages.

## Quick Start

### 1. Import Functions
```typescript
import {
  generateSubareaLocalBusinessSchema,
  generateSubareaFAQSchema,
  generateSubareaPlaceSchema,
  generateSubareaBreadcrumbSchema,
  generateSubareaServiceSchema,
} from "@/lib/schema";
import { locations, services } from "@/lib/content-data";
```

### 2. Get Location & Subarea
```typescript
// From URL params
const locationSlug = "san-diego"; // or use route params
const subarea = "Hillcrest";      // or use URL param

// Find location object
const location = locations.find(l => l.slug === locationSlug);
if (!location) throw new Error(`Location not found: ${locationSlug}`);
```

### 3. Generate Single Schema
```typescript
const schema = generateSubareaLocalBusinessSchema(location, subarea);
```

### 4. Render in HTML
```html
<head>
  <script type="application/ld+json">
    /* Replace with JSON.stringify(schema) */
  </script>
</head>
```

---

## Framework-Specific Implementation

### Astro

```astro
---
// src/pages/locations/[location]/[subarea].astro
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from "@/lib/schema";
import { locations } from "@/lib/content-data";

export function getStaticPaths() {
  return locations.flatMap(location =>
    location.neighborhoods.map(neighborhood => ({
      params: { location: location.slug, subarea: neighborhood },
      props: { location, neighborhood }
    }))
  );
}

const { location, neighborhood } = Astro.props;

const schemas = [
  generateSubareaLocalBusinessSchema(location, neighborhood),
  generateSubareaFAQSchema(location, neighborhood),
];
---

<head>
  {schemas.map(schema => (
    <script type="application/ld+json" set:html={JSON.stringify(schema)} />
  ))}
</head>

<main>
  <h1>Home Care Services in {neighborhood}, {location.name}</h1>
  {/* Page content */}
</main>
```

### Next.js (Pages Router)

```typescript
// pages/locations/[slug]/[subarea].tsx
import Head from 'next/head';
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';

interface Props {
  location: typeof locations[0];
  subarea: string;
}

export async function getStaticPaths() {
  const paths = locations.flatMap(location =>
    location.neighborhoods.map(neighborhood => ({
      params: { slug: location.slug, subarea: neighborhood }
    }))
  );
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const { slug, subarea } = context.params as { slug: string; subarea: string };
  const location = locations.find(l => l.slug === slug);

  if (!location) return { notFound: true };

  const schemas = [
    generateSubareaLocalBusinessSchema(location, subarea),
    generateSubareaFAQSchema(location, subarea),
  ];

  return {
    props: { location, subarea, schemas },
    revalidate: 86400, // 24 hours
  };
}

export default function LocationPage({ location, subarea, schemas }: Props & { schemas: any[] }) {
  return (
    <>
      <Head>
        <title>Home Care Services in {subarea}, {location.name}</title>
        {schemas.map((schema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>

      <main>
        <h1>Home Care Services in {subarea}, {location.name}</h1>
        {/* Content */}
      </main>
    </>
  );
}
```

### Next.js (App Router)

```typescript
// app/locations/[slug]/[subarea]/page.tsx
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';
import { Metadata } from 'next';

interface Props {
  params: { slug: string; subarea: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.slug);
  if (!location) return {};

  return {
    title: `Home Care Services in ${params.subarea}, ${location.name}`,
    description: `Professional home care services in ${params.subarea}, ${location.name}. Available 24/7.`,
  };
}

export async function generateStaticParams() {
  return locations.flatMap(location =>
    location.neighborhoods.map(neighborhood => ({
      slug: location.slug,
      subarea: neighborhood,
    }))
  );
}

export default function Page({ params }: Props) {
  const location = locations.find(l => l.slug === params.slug);
  if (!location) return null;

  const schemas = [
    generateSubareaLocalBusinessSchema(location, params.subarea),
    generateSubareaFAQSchema(location, params.subarea),
  ];

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        <h1>Home Care Services in {params.subarea}, {location.name}</h1>
        {/* Content */}
      </main>
    </>
  );
}
```

### React (Client-Side)

```typescript
// components/SubareaSchemaHead.tsx
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';

interface Props {
  locationSlug: string;
  subarea: string;
}

export function SubareaSchemaHead({ locationSlug, subarea }: Props) {
  const location = locations.find(l => l.slug === locationSlug);
  if (!location) return null;

  const schemas = [
    generateSubareaLocalBusinessSchema(location, subarea),
    generateSubareaFAQSchema(location, subarea),
  ];

  return (
    <Helmet>
      {schemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

// Usage
<SubareaSchemaHead locationSlug="san-diego" subarea="Hillcrest" />
```

---

## Common Use Cases

### Case 1: Single Subarea Page

Generate all schemas for one neighborhood:

```typescript
const location = locations.find(l => l.slug === "san-diego");
const subarea = "Hillcrest";

const schemas = [
  generateSubareaLocalBusinessSchema(location, subarea),
  generateSubareaFAQSchema(location, subarea),
  generateSubareaPlaceSchema(location, subarea, ["Balboa Park", "University Ave"]),
  generateSubareaBreadcrumbSchema(location, subarea),
];
```

### Case 2: Service-Specific Landing Page

Generate schemas for a service + subarea combination:

```typescript
const location = locations.find(l => l.slug === "san-diego");
const service = services.find(s => s.slug === "skilled-nursing");
const subarea = "Hillcrest";

const schemas = [
  generateSubareaServiceSchema(service, location, subarea),
  generateSubareaBreadcrumbSchema(location, subarea),
  generateSubareaFAQSchema(location, subarea), // Neighborhood FAQs
];
```

### Case 3: Location Hub Page (All Subareas)

Generate schemas for all neighborhoods in a location:

```typescript
const location = locations.find(l => l.slug === "san-diego");

const allSchemas = location.neighborhoods.flatMap(neighborhood => [
  generateSubareaLocalBusinessSchema(location, neighborhood),
  generateSubareaPlaceSchema(location, neighborhood),
]);

// Or generate service schemas for all neighborhoods + services
const serviceSchemas = location.neighborhoods.flatMap(neighborhood =>
  services.map(service =>
    generateSubareaServiceSchema(service, location, neighborhood)
  )
);
```

### Case 4: Dynamic Service Pages

Generate schemas based on query parameters:

```typescript
// Example: /services/skilled-nursing?location=san-diego&area=hillcrest
const searchParams = new URLSearchParams(window.location.search);
const locationSlug = searchParams.get('location') || 'san-diego';
const subareaParam = searchParams.get('area') || 'Downtown';

const location = locations.find(l => l.slug === locationSlug);
const subarea = subareaParam.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
const service = services.find(s => s.slug === 'skilled-nursing');

const schema = generateSubareaServiceSchema(service, location, subarea);
```

---

## Building Complete Schema Collections

### Utility Function: Generate All Schemas for Location

```typescript
// lib/schema-utils.ts
import {
  generateSubareaLocalBusinessSchema,
  generateSubareaFAQSchema,
  generateSubareaPlaceSchema,
  generateSubareaBreadcrumbSchema,
  generateSubareaServiceSchema,
  SchemaMarkup,
} from './schema';
import { locations, services } from './content-data';

export interface SubareaSchemaCollection {
  business: SchemaMarkup;
  faq: SchemaMarkup;
  place: SchemaMarkup;
  breadcrumb: SchemaMarkup;
  services: SchemaMarkup[];
}

export function generateAllSubareaSchemas(
  locationSlug: string,
  subarea: string,
  landmarks?: string[]
): SubareaSchemaCollection {
  const location = locations.find(l => l.slug === locationSlug);
  if (!location) throw new Error(`Location not found: ${locationSlug}`);

  return {
    business: generateSubareaLocalBusinessSchema(location, subarea),
    faq: generateSubareaFAQSchema(location, subarea),
    place: generateSubareaPlaceSchema(location, subarea, landmarks),
    breadcrumb: generateSubareaBreadcrumbSchema(location, subarea),
    services: services.map(service =>
      generateSubareaServiceSchema(service, location, subarea)
    ),
  };
}

export function getAllSubareaSchemas(locationSlug: string, landmarks?: Record<string, string[]>) {
  const location = locations.find(l => l.slug === locationSlug);
  if (!location) return [];

  return location.neighborhoods.flatMap(neighborhood => {
    const collection = generateAllSubareaSchemas(
      locationSlug,
      neighborhood,
      landmarks?.[neighborhood]
    );
    return Object.values(collection).flat();
  });
}

// Usage
const schemas = generateAllSubareaSchemas('san-diego', 'Hillcrest', ['Balboa Park', 'University Ave']);
const allSchemas = getAllSubareaSchemas('san-diego', {
  'Hillcrest': ['Balboa Park', 'University Ave'],
  'Downtown': ['Gaslamp Quarter', 'Horton Plaza'],
  'North Park': ['North Park Hardware', 'Ray Street'],
});
```

### Utility Function: Render Schemas

```typescript
// components/SchemaRenderer.tsx
import { SchemaMarkup } from '@/lib/schema';

interface SchemaRendererProps {
  schemas: SchemaMarkup | SchemaMarkup[];
  inline?: boolean; // If true, returns string instead of JSX
}

export function SchemaRenderer({ schemas, inline = false }: SchemaRendererProps) {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
  const schemaString = schemaArray.map(s => JSON.stringify(s)).join('\n');

  if (inline) return schemaString;

  return schemaArray.map((schema, idx) => (
    <script
      key={idx}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}

// Usage
<head>
  <SchemaRenderer schemas={allSchemas} />
</head>
```

---

## Data Structure: Landmarks by Neighborhood

Common landmarks for each San Diego subarea:

```typescript
// lib/landmarks.ts
export const subareaLandmarks: Record<string, Record<string, string[]>> = {
  'san-diego': {
    'Downtown': ['Gaslamp Quarter', 'Horton Plaza', 'San Diego Bay', 'USS Midway Museum'],
    'Hillcrest': ['Balboa Park', 'University Avenue', 'The Centre City'],
    'North Park': ['North Park Hardware', 'Ray Street', 'South Park Avenue'],
    'Mission Hills': ['Presidio Park', 'San Diego National Avenue', 'Fort Stockton'],
    'Normal Heights': ['Normal Street', 'Adams Avenue', 'El Cajon Boulevard'],
    'Kensington': ['Kensington Drive', 'Adams Avenue', 'Meade Avenue'],
  },
  'la-jolla': {
    'La Jolla Village': ['Prospect Street', 'Girard Avenue', 'Cave Store'],
    'La Jolla Shores': ['La Jolla Cove', 'Sunny Jim Sea Cave', 'Birch Aquarium'],
    'Bird Rock': ['Bird Rock Lookout', 'Sunny Jim Sea Cave'],
    'Windansea': ['Windansea Beach', 'Boulders Beach'],
    'Upper Hermosa': ['Hermosa Avenue', 'High School Road'],
  },
  'encinitas': {
    'Leucadia': ['Leucadia Blob', 'Highway 101', 'Cottonwood Creek'],
    'Cardiff-by-the-Sea': ['Cardiff Reef', 'San Elijo Lagoon'],
    'Olivenhain': ['Santa Fe Valley Road', 'Olivenhain Dam'],
    'New Encinitas': ['Encinitas Boulevard', 'Cremona Drive'],
  },
  // ... more neighborhoods
};

// Usage
import { generateSubareaPlaceSchema } from '@/lib/schema';
import { subareaLandmarks } from '@/lib/landmarks';

const landmarks = subareaLandmarks['san-diego']['Hillcrest'];
const schema = generateSubareaPlaceSchema(location, 'Hillcrest', landmarks);
```

---

## Testing Schemas

### Unit Test Template

```typescript
// __tests__/schema.test.ts
import { generateSubareaLocalBusinessSchema, generateSubareaFAQSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';

describe('Subarea Schema Functions', () => {
  const sanDiego = locations.find(l => l.slug === 'san-diego');
  const subarea = 'Hillcrest';

  describe('generateSubareaLocalBusinessSchema', () => {
    it('should create valid LocalBusiness schema', () => {
      const schema = generateSubareaLocalBusinessSchema(sanDiego, subarea);

      expect(schema['@context']).toBe('https://schema.org');
      expect(schema['@type']).toEqual(['LocalBusiness', 'MedicalBusiness']);
      expect(schema.name).toContain(subarea);
      expect(schema.address.addressLocality).toBe(`${subarea}, ${sanDiego.name}`);
      expect(schema.telephone).toBeDefined();
      expect(schema.aggregateRating.ratingValue).toBe('4.9');
    });

    it('should include neighborhood in description', () => {
      const schema = generateSubareaLocalBusinessSchema(sanDiego, subarea);
      expect(schema.description).toContain(subarea);
      expect(schema.description).toContain(sanDiego.name);
    });

    it('should have proper geo coordinates', () => {
      const schema = generateSubareaLocalBusinessSchema(sanDiego, subarea);
      expect(schema.geo.latitude).toBe(sanDiego.coordinates.lat);
      expect(schema.geo.longitude).toBe(sanDiego.coordinates.lng);
    });
  });

  describe('generateSubareaFAQSchema', () => {
    it('should include 6 questions', () => {
      const schema = generateSubareaFAQSchema(sanDiego, subarea);
      expect(schema.mainEntity).toHaveLength(6);
    });

    it('should target voice search queries', () => {
      const schema = generateSubareaFAQSchema(sanDiego, subarea);
      const questions = schema.mainEntity.map(q => q.name);

      expect(questions[0]).toMatch(/What.*home care.*available/);
      expect(questions[1]).toMatch(/24-hour/);
      expect(questions[2]).toMatch(/how.*get started/i);
    });

    it('should include neighborhood name in all questions', () => {
      const schema = generateSubareaFAQSchema(sanDiego, subarea);
      schema.mainEntity.forEach(q => {
        expect(q.name).toContain(subarea);
      });
    });
  });
});
```

### Manual Validation

```bash
# Validate schemas with Google's Rich Results Test
# 1. Go to https://search.google.com/test/rich-results
# 2. Paste your page URL
# 3. Check that LocalBusiness and FAQ are recognized
# 4. Verify no errors appear
```

---

## Performance Optimization

### Schema Generation Caching

```typescript
// lib/schema-cache.ts
import { SchemaMarkup } from './schema';

const cache = new Map<string, SchemaMarkup>();
const CACHE_DURATION = 86400000; // 24 hours
const timestamps = new Map<string, number>();

export function getCachedSchema(
  key: string,
  generator: () => SchemaMarkup
): SchemaMarkup {
  const now = Date.now();
  const cachedSchema = cache.get(key);
  const timestamp = timestamps.get(key) || 0;

  if (cachedSchema && now - timestamp < CACHE_DURATION) {
    return cachedSchema;
  }

  const schema = generator();
  cache.set(key, schema);
  timestamps.set(key, now);

  return schema;
}

export function clearCache() {
  cache.clear();
  timestamps.clear();
}

// Usage
const schema = getCachedSchema(
  'subarea:san-diego:hillcrest:business',
  () => generateSubareaLocalBusinessSchema(location, subarea)
);
```

### Static Generation Strategy

```typescript
// scripts/generate-schemas.ts
import { writeFileSync } from 'fs';
import { locations, services } from '@/lib/content-data';
import { generateAllSubareaSchemas } from '@/lib/schema-utils';

// Pre-generate all schemas at build time
const allSchemas = locations.flatMap(location =>
  location.neighborhoods.map(neighborhood => ({
    id: `${location.slug}:${neighborhood}`,
    schemas: generateAllSubareaSchemas(location.slug, neighborhood),
  }))
);

// Save to JSON for runtime lookup
writeFileSync(
  'public/schema-cache.json',
  JSON.stringify(allSchemas, null, 2)
);

console.log(`Generated schemas for ${allSchemas.length} neighborhoods`);
```

---

## Troubleshooting Checklist

- [ ] All `@context` values are "https://schema.org"
- [ ] All URLs are absolute (start with https://)
- [ ] `@type` matches expected schema type(s)
- [ ] Required properties are present per schema.org spec
- [ ] JSON is valid (use JSON validator)
- [ ] No circular references in objects
- [ ] Text content is plain text (no HTML tags)
- [ ] Dates are ISO 8601 formatted
- [ ] Numbers are valid JSON numbers (not strings)
- [ ] Arrays are used for multi-valued properties
- [ ] Neighborhood names match exactly
- [ ] Location coordinates are correct
- [ ] Phone numbers include country code
- [ ] Email addresses are valid format

---

## Related Functions Reference

From `/lib/schema.ts`:

```typescript
// Existing functions to pair with subarea schemas
generateOrganizationSchema()           // Add to all pages
generateMedicalBusinessSchema()         // Add to service pages
generateFullSchemaBundle(pathname)      // Auto-generates based on pathname
generateBreadcrumbSchema(breadcrumbs)  // Generic breadcrumb (use generateSubareaBreadcrumbSchema for subareas)
```

---

## Advanced: Custom Landmark Integration

```typescript
// components/SubareaPageWithLandmarks.tsx
import { generateSubareaPlaceSchema } from '@/lib/schema';
import { locations } from '@/lib/content-data';

interface SubareaPageProps {
  locationSlug: string;
  subarea: string;
  customLandmarks?: string[];
}

export function SubareaPage({
  locationSlug,
  subarea,
  customLandmarks
}: SubareaPageProps) {
  const location = locations.find(l => l.slug === locationSlug);
  if (!location) return null;

  // Use provided landmarks or fetch from external service
  const landmarks = customLandmarks || (
    await fetchLandmarksFromGoogle(subarea, locationSlug)
  );

  const schema = generateSubareaPlaceSchema(location, subarea, landmarks);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <h1>Landmarks in {subarea}</h1>
        <ul>
          {landmarks.map(landmark => (
            <li key={landmark}>{landmark}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
```

---

Last Updated: December 2025
