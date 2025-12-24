# Subarea Pages - Quick Start Guide

## 🚀 Adding a New Subarea (5 Minutes)

### 1. Add Data to `lib/subareas-data.ts`

Copy this template and fill in your data:

```typescript
{
  slug: "your-subarea-slug",          // URL-friendly (lowercase, hyphens)
  name: "Your Subarea Name",          // Display name
  parentLocation: "parent-slug",      // Must match existing location
  tagline: "Your Catchy Tagline",     // 3-7 words
  localNickname: "The Nickname",      // What locals call it
  description: "Full description...", // 1-2 sentences
  heroImageUrl: "/images/subareas/your-subarea.jpg",

  funFacts: [
    "Interesting fact #1 with specific numbers",
    "Interesting fact #2 about local culture",
    "Interesting fact #3 about history",
    "Interesting fact #4 about attractions",
    "Interesting fact #5 about the community",
  ],

  landmarks: [
    {
      name: "Landmark Name",
      description: "What makes it special and interesting",
      imageUrl: "/images/landmarks/landmark-name.jpg",
      category: "beach", // beach | park | historic | entertainment | dining | shopping
    },
    // Add 3-5 more landmarks
  ],

  localSlang: [
    {
      term: "Local Term",
      meaning: "What it means",
      usage: "Example sentence using the term",
    },
    // Add 2-3 more terms
  ],

  weather: {
    averageTemp: "XX°F year-round",
    climate: "Type of climate (e.g., Coastal Mediterranean)",
    bestMonths: ["Month1", "Month2", "Month3"],
    microclimate: "Detailed description of unique weather patterns...",
  },

  whySpecial: {
    title: "Why This Area is Special",
    description: "2-3 sentences about what makes it unique...",
    highlights: [
      "Key benefit #1 for seniors",
      "Key benefit #2 for healthcare",
      "Key benefit #3 for community",
      "Key benefit #4 for accessibility",
      "Key benefit #5 for lifestyle",
      "Key benefit #6 for safety",
    ],
  },

  servicesContext: {
    title: "Care Tailored to [Subarea]",
    description: "How your services fit this specific neighborhood...",
  },

  zipCodes: ["12345", "12346"],
  coordinates: { lat: 32.1234, lng: -117.1234 },
}
```

### 2. Build and Test

```bash
npm run build
npm run start
```

Visit: `http://localhost:3000/locations/[parent]/[your-subarea-slug]`

### 3. Verify Static Generation

Check that your page appears in the build output:

```
├ ● /locations/[slug]/[subarea]
├   ├ /locations/parent/your-subarea-slug
```

---

## 📝 Content Writing Tips

### Fun Facts
- Use specific numbers and statistics
- Include year/date when relevant
- Focus on unique, shareable information
- Verify all facts are accurate

**Good**: "Home to over 200 independent restaurants representing 30+ cuisines"
**Bad**: "Has lots of restaurants"

### Local Slang
- Choose terms locals actually use
- Keep explanations concise
- Use natural example sentences
- Include pronunciation if tricky

**Example**:
```typescript
{
  term: "The Gaslamp",
  meaning: "The historic Gaslamp Quarter downtown",
  usage: "Let's grab dinner in the Gaslamp tonight"
}
```

### Landmarks
- Pick recognizable, iconic locations
- Include what makes them special
- Use active, vivid descriptions
- Choose diverse categories

**Good**: "Historic 1924 Spanish Renaissance theater hosting performances and events"
**Bad**: "Old theater where shows happen"

### Weather Microclimate
- Be specific about temperature ranges
- Mention marine layer patterns
- Explain how it differs from nearby areas
- Include practical information (when fog clears, etc.)

---

## 🎨 Image Guidelines

### Hero Images
- **Size**: 1920x1080px minimum
- **Format**: WebP with JPEG fallback
- **Content**: Iconic view of the subarea
- **Location**: `/public/images/subareas/[slug].jpg`

### Landmark Images
- **Size**: 800x600px minimum
- **Format**: WebP with JPEG fallback
- **Content**: Clear view of the landmark
- **Location**: `/public/images/landmarks/[name].jpg`

### Image Naming Convention
- Use lowercase
- Use hyphens, not spaces
- Be descriptive
- Include location if ambiguous

**Good**: `la-jolla-cove-sunset.jpg`
**Bad**: `IMG_1234.jpg`

---

## 🔍 SEO Best Practices

### Keyword Targeting
Each subarea page should target:
- Primary: `home health care [subarea name]`
- Secondary: `[local nickname] senior care`
- Tertiary: `caregivers near [landmark]`
- Long-tail: `home care [zip code]`

### Internal Linking
- Link to parent location page
- Link to service pages
- Link to sibling subareas
- Link to contact page

### Content Length
- Aim for 1,000-1,500 words total
- Include all 9 sections
- Use natural language (no keyword stuffing)
- Write for humans first, search engines second

---

## ✅ Pre-Launch Checklist

Before adding a new subarea to production:

- [ ] All required fields filled in `subareas-data.ts`
- [ ] Minimum 5 fun facts (verified accuracy)
- [ ] Minimum 4 landmarks with descriptions
- [ ] Minimum 3 local slang terms
- [ ] 6+ "Why Special" highlights
- [ ] Weather microclimate description (100+ words)
- [ ] Services context is location-specific
- [ ] Zip codes are accurate
- [ ] Coordinates verified on Google Maps
- [ ] Images uploaded (or placeholders acceptable)
- [ ] Build completes without errors
- [ ] Page renders correctly on mobile
- [ ] All links work
- [ ] Metadata displays correctly

---

## 🐛 Troubleshooting

### Page Not Generating
**Problem**: Subarea doesn't appear in build output

**Solutions**:
1. Check `parentLocation` matches existing location slug
2. Verify no TypeScript errors
3. Run `npm run build` again
4. Check console for errors

### TypeScript Errors
**Problem**: Type errors when adding data

**Solutions**:
1. Import types: `import type { SubareaData, Landmark, LocalSlang, WeatherInfo } from '@/lib/subareas-data'`
2. Check all required fields are present
3. Verify `category` is one of: `beach | park | historic | entertainment | dining | shopping`
4. Ensure arrays have at least one item

### Images Not Loading
**Problem**: Placeholder gradients show instead of images

**Solutions**:
1. Check image path is correct (starts with `/`)
2. Verify file exists in `/public/images/`
3. Use `.jpg`, `.png`, or `.webp` format
4. Replace OptimizedImage component implementation

---

## 📊 Data Quality Standards

### Minimum Requirements
- **Fun Facts**: 5+ unique, verified facts
- **Landmarks**: 4-6 notable locations
- **Local Slang**: 3-4 commonly used terms
- **Highlights**: 6 specific benefits
- **Microclimate**: 100+ word description
- **Zip Codes**: All codes serving the area

### Content Quality
- No grammatical errors
- Consistent tone and voice
- Factually accurate information
- Location-specific (not generic)
- Engaging and informative

---

## 🎯 Quick Examples

### Downtown Urban Area
```typescript
{
  slug: "gaslamp",
  tagline: "Historic Charm, Modern Care",
  localNickname: "The Gaslamp",
  // Focus on: nightlife, historic buildings, walkability, urban amenities
}
```

### Beach Community
```typescript
{
  slug: "pacific-beach",
  tagline: "Surf, Sand, and Superior Care",
  localNickname: "PB",
  // Focus on: beach lifestyle, outdoor activities, casual atmosphere
}
```

### Upscale Residential
```typescript
{
  slug: "rancho-santa-fe",
  tagline: "Exclusive Living, Exceptional Care",
  localNickname: "The Ranch",
  // Focus on: privacy, luxury, premium services, safety
}
```

### Family Neighborhood
```typescript
{
  slug: "mira-mesa",
  tagline: "Community Care, Family Values",
  localNickname: "Mira Mesa",
  // Focus on: schools, parks, safety, family services
}
```

---

## 🚦 Launch Process

1. **Development**: Add data to `subareas-data.ts`
2. **Local Testing**: `npm run dev` and verify at `localhost:3000`
3. **Build Test**: `npm run build` and check output
4. **Review**: Have someone review content for accuracy
5. **Deploy**: Merge to main and deploy to production
6. **Verify**: Check live site for all functionality
7. **Monitor**: Watch analytics for traffic and engagement

---

## 📞 Support

**Questions?** Check the main README in this directory or contact the development team.

**Need help with content?** Refer to existing subareas as examples.

**Found a bug?** Create an issue with:
- Subarea slug
- Expected behavior
- Actual behavior
- Steps to reproduce

---

**Last Updated**: 2025-12-24
**Version**: 1.0.0
