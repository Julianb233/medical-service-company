# Hero Carousel Quick Start

## Image Setup (5 Minutes)

### Step 1: Download Images
Visit these sites and download 4 images:

**Unsplash** - https://unsplash.com
- Search: "San Diego skyline" → Download one
- Search: "family senior care" → Download one
- Search: "caregiver elderly" → Download one
- Search: "happy senior home" → Download one

**Pexels** - https://pexels.com (alternative)

### Step 2: Optimize Images
Visit **TinyPNG** - https://tinypng.com
1. Upload all 4 images
2. Download compressed versions
3. Target: Under 300KB per image

### Step 3: Rename Files
Rename downloaded images exactly as:
```
san-diego-skyline.jpg
family-with-senior.jpg
caregiver-caring.jpg
happy-senior-home.jpg
```

### Step 4: Add to Project
Place all 4 images in:
```
/public/images/hero/
```

Your directory should look like:
```
/public/images/hero/
  ├── san-diego-skyline.jpg
  ├── family-with-senior.jpg
  ├── caregiver-caring.jpg
  ├── happy-senior-home.jpg
  ├── IMAGE-GUIDE.md
  └── QUICK-START.md
```

### Step 5: Test
```bash
npm run dev
```

Visit http://localhost:3000

You should see:
- Images rotating every 5.5 seconds
- Smooth crossfade transitions
- Navigation dots at bottom
- Teal overlay on all images
- Readable white text

## Troubleshooting

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Verify files are in `/public/images/hero/`
- Check browser console for 404 errors

**Carousel not rotating?**
- Ensure JavaScript is enabled
- Check if reduced motion is enabled in OS
- Look for errors in console

**Text not readable?**
- Increase overlay: `bg-teal-600/80` (more opaque)
- Choose lighter background images
- Add text shadow if needed

## Free Image Sources

### Recommended Sites:
1. **Unsplash** - https://unsplash.com
   - High quality, free for commercial use
   - Search: "San Diego", "senior care", "caregiver"

2. **Pexels** - https://pexels.com
   - Large selection, free license
   - Good for family/care photos

3. **Pixabay** - https://pixabay.com
   - Good variety, free license
   - May need more filtering

### Search Terms That Work:
- "San Diego skyline sunset"
- "San Diego waterfront"
- "Coronado bridge"
- "elderly care family"
- "senior citizen smiling"
- "caregiver helping elderly"
- "home health care"
- "happy grandparents"

## Image Guidelines

✅ **DO**:
- Use bright, well-lit images
- Choose images with positive emotions
- Select varied compositions
- Keep subjects center-weighted
- Optimize file size (under 300KB)

❌ **DON'T**:
- Use dark/underexposed images
- Choose images with busy text
- Select portrait orientation
- Use low resolution (<1920px)
- Skip optimization

## Quick Customization

### Change rotation speed (in hero-section.tsx):
```tsx
}, 5500); // Current: 5.5 seconds
}, 4000); // Faster: 4 seconds
}, 7000); // Slower: 7 seconds
```

### Adjust overlay darkness:
```tsx
<div className="absolute inset-0 bg-teal-600/70" />
// Change to:
bg-teal-600/60 // Lighter
bg-teal-600/80 // Darker
```

### Change overlay color:
```tsx
bg-teal-600/70 // Current teal
bg-blue-600/70 // Blue
bg-green-600/70 // Green
bg-slate-800/70 // Dark gray
```

## Done!

Once images are added, the carousel will:
- Auto-rotate through all images
- Show navigation dots
- Crossfade smoothly
- Maintain text readability
- Work on all devices

Need help? Check:
- `/components/HERO-CAROUSEL-README.md` (detailed docs)
- `/HERO-CAROUSEL-IMPLEMENTATION.md` (full summary)
- Browser console (for errors)
