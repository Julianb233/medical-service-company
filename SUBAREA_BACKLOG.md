# Subarea Implementation Backlog

## Current Status (December 24, 2025)

### Implemented Subareas (15 total)

| # | Subarea | Parent Location | Status |
|---|---------|-----------------|--------|
| 1 | Downtown San Diego | san-diego | Live |
| 2 | Hillcrest | san-diego | Live |
| 3 | North Park | san-diego | Live |
| 4 | La Jolla Village | la-jolla | Live |
| 5 | La Jolla Shores | la-jolla | Live |
| 6 | Pacific Beach | san-diego | Live |
| 7 | Ocean Beach | san-diego | Live |
| 8 | Mission Beach | san-diego | Live |
| 9 | Point Loma | san-diego | Live |
| 10 | Coronado | coronado | Live |
| 11 | Del Mar | del-mar | Live |
| 12 | Encinitas | encinitas | Live |
| 13 | Carlsbad | carlsbad | Live |
| 14 | Mission Hills | san-diego | Live |
| 15 | Bankers Hill | san-diego | Live |

---

## Backlog: Next 20 Subareas

### Priority 1: High-Population San Diego Neighborhoods (6)

| # | Subarea | Parent Location | Zip Codes | Notes |
|---|---------|-----------------|-----------|-------|
| 1 | Clairemont | san-diego | 92117 | Large residential area, family-oriented |
| 2 | University City | san-diego | 92122 | Near UCSD, educated demographic |
| 3 | Kensington | san-diego | 92116 | Historic, walkable, charming |
| 4 | Normal Heights | san-diego | 92116 | Artsy, Adams Avenue corridor |
| 5 | Bay Park | san-diego | 92110 | Near Mission Bay, family-friendly |
| 6 | Linda Vista | san-diego | 92111 | Diverse, near USD |

### Priority 2: Inland Communities (6)

| # | Subarea | Parent Location | Zip Codes | Notes |
|---|---------|-----------------|-----------|-------|
| 7 | Scripps Ranch | san-diego | 92131 | Upscale, excellent schools |
| 8 | Rancho Penasquitos | san-diego | 92129 | Large master-planned community |
| 9 | Mira Mesa | san-diego | 92126 | Tech industry hub |
| 10 | Tierrasanta | san-diego | 92124 | "Island in the Hills" |
| 11 | Serra Mesa | san-diego | 92123 | Central location, hospital access |
| 12 | Allied Gardens | san-diego | 92120 | Quiet, established |

### Priority 3: Urban/Historic Neighborhoods (4)

| # | Subarea | Parent Location | Zip Codes | Notes |
|---|---------|-----------------|-----------|-------|
| 13 | University Heights | san-diego | 92104 | Uptown, walkable, trendy |
| 14 | South Park | san-diego | 92102 | Hipster, restaurants, boutiques |
| 15 | Golden Hill | san-diego | 92102 | Victorian homes, views |
| 16 | Old Town | san-diego | 92110 | Historic district, tourism |

### Priority 4: North County Coastal (4)

| # | Subarea | Parent Location | Zip Codes | Notes |
|---|---------|-----------------|-----------|-------|
| 17 | Solana Beach | solana-beach | 92075 | Cedros Design District |
| 18 | Oceanside | oceanside | 92054, 92056, 92057 | Beach town, military community |
| 19 | Leucadia | encinitas | 92024 | Funky, Highway 101, surf |
| 20 | Cardiff-by-the-Sea | encinitas | 92007 | Small beach community |

---

## Implementation Notes

### Data Required Per Subarea

Each subarea entry requires:
- `slug` - URL-friendly identifier
- `name` - Display name
- `parentLocation` - Parent location slug
- `tagline` - Catchy phrase for hero
- `localNickname` - What locals call it
- `description` - SEO-friendly description
- `heroImageUrl` - Hero image path
- `funFacts` - 5 interesting facts
- `landmarks` - 4-6 local landmarks
- `localSlang` - 3-4 local terms
- `weather` - Temperature, climate, best months, microclimate
- `whySpecial` - Title, description, 6 highlights
- `servicesContext` - Title, description
- `zipCodes` - Array of zip codes
- `coordinates` - Lat/lng for mapping

### Estimated Time Per Subarea
- Data research: 10-15 minutes
- Implementation: 5 minutes
- Testing: 2 minutes
- **Total: ~20 minutes per subarea**

### Batch Implementation Strategy
- Implement in batches of 5-10
- Run build after each batch
- Commit and push per batch
- Verify pages in staging before production

---

## Future Expansion (Beyond Backlog)

### South Bay Communities
- Chula Vista (multiple subareas)
- National City
- Imperial Beach
- Eastlake
- Bonita
- Spring Valley

### East County
- El Cajon
- La Mesa
- Santee
- Lemon Grove
- Alpine
- Lakeside

### North County Inland
- Escondido (multiple subareas)
- San Marcos
- Vista
- Poway
- Rancho Bernardo
- 4S Ranch
- Rancho Santa Fe

---

## SEO Impact Estimate

### Current (15 subareas)
- Long-tail keyword coverage: ~300 terms
- Local search visibility: High for covered areas
- Voice search eligibility: Strong

### After Backlog (35 subareas)
- Long-tail keyword coverage: ~700 terms
- Local search visibility: Comprehensive
- Voice search eligibility: Dominant in San Diego County

### Full Expansion (60+ subareas)
- Long-tail keyword coverage: ~1,200+ terms
- Local search visibility: Complete county coverage
- Voice search eligibility: Market leader position

---

**Last Updated:** December 24, 2025
**Next Review:** When implementing next batch
