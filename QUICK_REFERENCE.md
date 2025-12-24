# Quick Reference: generateLocationServiceSchema()

## Function Signature

```typescript
generateLocationServiceSchema(
  service: typeof services[0],
  locationName: string,
  locationData: { zipCodes: string[]; coordinates: { lat: number; lng: number } },
  subareaData?: SubareaData
): SchemaMarkup[]
```

## Minimal Working Example

```typescript
import { generateLocationServiceSchema } from "@/lib/schema";
import { services, locations } from "@/lib/content-data";

// Get service and location
const service = services.find(s => s.slug === "skilled-nursing");
const location = locations.find(l => l.slug === "san-diego");

// Generate schemas
const schemas = generateLocationServiceSchema(
  service,
  location.name,
  {
    zipCodes: location.zipCodes,
    coordinates: location.coordinates
  }
);

// Use in Next.js
export default function Page() {
  return (
    <head>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </head>
  );
}
```

## With Subarea (Hyperlocal)

```typescript
const schemas = generateLocationServiceSchema(
  service,
  "San Diego",
  {
    zipCodes: location.zipCodes,
    coordinates: location.coordinates
  },
  {
    name: "Downtown"
    // Optional: zipCodes, landmarks
  }
);
```

## Returns

Array of 4 schemas:

```typescript
[
  SchemaMarkup,  // 1. Service schema (with location areaServed)
  SchemaMarkup,  // 2. LocalBusiness schema (with GeoCoordinates)
  SchemaMarkup,  // 3. BreadcrumbList schema (navigation)
  SchemaMarkup   // 4. FAQ schema (location-specific Qs)
]
```

## Quick Checklist

- [ ] Import function and data
- [ ] Find service object
- [ ] Find location object
- [ ] Create locationData object with zipCodes and coordinates
- [ ] Call generateLocationServiceSchema()
- [ ] Output schemas to JSON-LD in <head>
- [ ] Test with Google Rich Results Test
- [ ] Optional: Add subarea parameter for hyperlocal pages

## Service Slugs

```
"home-care"
"personal-care"
"respite-care"
"hospice-support"
"skilled-nursing"
"specialty-services"
```

## Location Slugs

```
"san-diego", "la-jolla", "del-mar", "encinitas", "carlsbad",
"oceanside", "escondido", "poway", "chula-vista", "coronado",
"rancho-bernardo", "rancho-santa-fe", "san-marcos", "vista", "solana-beach"
```

## URL Parameter Format

```
?location=san-diego
?location=san-diego&area=downtown
?location=la-jolla&area=village
```

## What Gets Generated

1. **Service Schema**
   - Ranks: "[Service] in [Location]"
   - Shows booking action, pricing, provider info

2. **LocalBusiness Schema**
   - Ranks: "[Location] + [Service]" queries
   - Shows on Google Maps, Local Pack
   - Includes 24/7 availability badge

3. **Breadcrumb Schema**
   - Displays in search results
   - Improves CTR
   - Shows site structure

4. **FAQ Schema**
   - Voice search friendly
   - Common questions pre-answered
   - 5 questions auto-generated:
     - What [service] services are available?
     - How much does [service] cost?
     - Do you provide 24/7 [service]?
     - Are caregivers licensed?
     - Is [service] available in my area?

## Coordinates Reference

```typescript
// Example location with coordinates
{
  name: "San Diego",
  zipCodes: ["92101", "92102", "92103", ...],
  coordinates: { lat: 32.7157, lng: -117.1611 }
}

// Available in locations[] array
const location = locations.find(l => l.slug === "san-diego");
// location.coordinates.lat, location.coordinates.lng
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Service not found | Check slug against services array |
| Location not found | Check slug against locations array |
| Schema validation error | Ensure coordinates are numbers, not strings |
| Missing breadcrumbs | Verify subarea is only for hyperlocal pages |
| FAQ not showing | All 5 questions are auto-generated |
| Map not showing | Ensure GeoCoordinates are valid (lat/lng) |

## Type Definition

```typescript
interface SubareaData {
  name: string;           // "Downtown", "Hillcrest", etc.
  zipCodes?: string[];    // ["92101", "92102"]
  landmarks?: string[];   // ["Gaslamp Quarter", "Petco Park"]
}
```

## API Contract

**Input Requirements:**
- ✓ Valid service object (from services array)
- ✓ Location name (string, any case)
- ✓ locationData with zipCodes (array) and coordinates (lat/lng)
- ✓ subareaData optional (SubareaData or undefined)

**Output Guarantees:**
- ✓ Always returns array of exactly 4 SchemaMarkup objects
- ✓ All schemas have proper @context and @type
- ✓ URLs properly formatted and slugified
- ✓ Coordinates included in LocalBusiness
- ✓ All zip codes included in areaServed
- ✓ FAQ questions dynamically generated

## Testing

```bash
# Validate schema.ts compiles
npx tsc --noEmit

# Test generated JSON
import { generateLocationServiceSchema } from "@/lib/schema";
const schemas = generateLocationServiceSchema(...);
console.log(JSON.stringify(schemas, null, 2));

# Validate in browser
const script = JSON.stringify(schemas[0]);
// Copy to https://validator.schema.org/
```

## Integration Pattern

```typescript
// 1. In page component
async function generateSchemaMarkup(params) {
  const service = findService(params.slug);
  const location = findLocation(params.location);
  return generateLocationServiceSchema(
    service,
    location.name,
    { zipCodes: location.zipCodes, coordinates: location.coordinates },
    params.subarea ? { name: params.subarea } : undefined
  );
}

// 2. In head/metadata
const schemas = await generateSchemaMarkup(params);
return (
  <head>
    {schemas.map((schema, i) => (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ))}
  </head>
);
```

## Related Docs

- **SCHEMA_GUIDE.md** - Full usage guide with detailed examples
- **IMPLEMENTATION_SUMMARY.md** - Technical implementation details
- **lib/schema.ts** - Source code (lines 887-1144)

## Support

For questions:
1. Check SCHEMA_GUIDE.md Q&A section
2. Review function documentation in schema.ts
3. Test output with Google Rich Results Test
4. Validate with schema.org Validator
