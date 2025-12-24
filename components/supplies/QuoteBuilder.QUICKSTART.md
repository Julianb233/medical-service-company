# QuoteBuilder - Quick Start Guide

## 5-Minute Integration

### Step 1: Import the Component and Provider

```tsx
// app/supplies/page.tsx
import { QuoteProvider } from '@/components/supplies/QuoteContext';
import QuoteBuilder from '@/components/supplies/QuoteBuilder';
```

### Step 2: Wrap Your Page with QuoteProvider

```tsx
export default function SuppliesPage() {
  return (
    <QuoteProvider>
      {/* Your page content */}
      <QuoteBuilder />
    </QuoteProvider>
  );
}
```

### Step 3: Add Layout Spacing

For proper layout, add these classes to your main content wrapper:

```tsx
<main className="pb-32 lg:pb-8 lg:pr-[400px]">
  {/* Your content here */}
</main>
```

**What this does:**
- `pb-32`: Adds bottom padding on mobile for the collapsed drawer (128px)
- `lg:pb-8`: Reduces bottom padding on desktop (32px)
- `lg:pr-[400px]`: Adds right padding on desktop for the sidebar (400px)

### Step 4: Add Products to the Quote

Use the `useQuote` hook in your product components:

```tsx
'use client';

import { useQuote } from '@/components/supplies/QuoteContext';
import { Product } from '@/lib/supplies-data';

function ProductCard({ product }: { product: Product }) {
  const { addToQuote, isInQuote } = useQuote();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-primary-orange font-bold mb-4">{product.priceRange}</p>

      <button
        onClick={() => addToQuote(product)}
        disabled={isInQuote(product.id)}
        className={`
          w-full py-2 px-4 rounded-lg font-semibold transition-colors
          ${isInQuote(product.id)
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-primary-teal text-white hover:bg-teal-dark'
          }
        `}
      >
        {isInQuote(product.id) ? 'In Quote' : 'Add to Quote'}
      </button>
    </div>
  );
}
```

## Complete Example

```tsx
// app/supplies/page.tsx
'use client';

import { QuoteProvider, useQuote } from '@/components/supplies/QuoteContext';
import QuoteBuilder from '@/components/supplies/QuoteBuilder';
import { products } from '@/lib/supplies-data';

function ProductGrid() {
  const { addToQuote, isInQuote } = useQuote();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {product.description.substring(0, 100)}...
          </p>
          <p className="text-primary-orange font-bold mb-4">
            {product.priceRange}
          </p>
          <button
            onClick={() => addToQuote(product)}
            disabled={isInQuote(product.id)}
            className={`
              w-full py-2 px-4 rounded-lg font-semibold transition-colors
              ${isInQuote(product.id)
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-primary-teal text-white hover:bg-teal-dark'
              }
            `}
          >
            {isInQuote(product.id) ? 'In Quote' : 'Add to Quote'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default function SuppliesPage() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-warm-50">
        {/* Main content with proper spacing */}
        <main className="pb-32 lg:pb-8 lg:pr-[400px]">
          <div className="container-custom py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Medical Supplies
            </h1>
            <ProductGrid />
          </div>
        </main>

        {/* Quote Builder - always present */}
        <QuoteBuilder />
      </div>
    </QuoteProvider>
  );
}
```

## Visual Reference

### Desktop Layout (1024px+)

```
┌─────────────────────────────────────┬──────────────┐
│ Header                              │              │
├─────────────────────────────────────┤              │
│                                     │  Quote       │
│  Main Content                       │  Builder     │
│  (with lg:pr-[400px])               │  Sidebar     │
│                                     │  (380px)     │
│                                     │              │
│                                     │  - Header    │
│                                     │  - Items     │
│                                     │  - CTA       │
│                                     │              │
├─────────────────────────────────────┤              │
│ Footer                              │              │
└─────────────────────────────────────┴──────────────┘
```

### Mobile Layout (<1024px)

**Collapsed State:**
```
┌──────────────────────────────┐
│ Header                       │
├──────────────────────────────┤
│                              │
│  Main Content                │
│  (with pb-32)                │
│                              │
│                              │
│                              │
├══════════════════════════════┤ ← Drawer Handle
│ 🛒 Your Quote      ︿         │ ← Visible (64px)
└──────────────────────────────┘
```

**Expanded State:**
```
┌──────────────────────────────┐
│ Backdrop (tap to close)      │
│                              │
├══════════════════════════════┤
│ 🛒 Your Quote      ︾         │
├──────────────────────────────┤
│                              │
│  Quote Items                 │
│  (scrollable)                │
│                              │
├──────────────────────────────┤
│  Get Free Quote Button       │
└──────────────────────────────┘
```

## Key Features at a Glance

### Desktop
- Fixed sidebar on the right (380px wide)
- Always visible
- Slides in from right on page load
- Scrollable item list

### Mobile
- Bottom drawer with handle
- Collapsed by default (shows header only)
- Tap handle or badge to expand
- Auto-expands when items added
- Tap backdrop to close

### Both
- Animated item add/remove
- Quantity controls (+/-)
- Clear all button
- Empty state messaging
- Orange "Get Free Quote" CTA
- Item count badge
- LocalStorage persistence

## Common Use Cases

### 1. Product Listing Page
```tsx
<QuoteProvider>
  <ProductGrid />
  <QuoteBuilder />
</QuoteProvider>
```

### 2. Product Detail Page
```tsx
<QuoteProvider>
  <ProductDetails />
  <QuoteBuilder />
</QuoteProvider>
```

### 3. Category Page
```tsx
<QuoteProvider>
  <CategoryHero />
  <ProductGrid />
  <QuoteBuilder />
</QuoteProvider>
```

### 4. Global Layout (Recommended)
```tsx
// app/layout.tsx or supplies layout
<QuoteProvider>
  {children}
  <QuoteBuilder />
</QuoteProvider>
```

## Troubleshooting

### QuoteBuilder not visible
- Check that you wrapped with `<QuoteProvider>`
- Verify the component is outside content with `overflow: hidden`
- Check z-index conflicts (QuoteBuilder uses z-40 and z-50)

### Content overlapping on desktop
- Add `lg:pr-[400px]` to your main content container
- Ensure container has proper margins/padding

### Drawer not appearing on mobile
- Add `pb-32` to your content for the collapsed drawer space
- Check viewport width is < 1024px

### Items not persisting
- QuoteContext automatically uses localStorage
- Check browser console for localStorage errors
- Ensure client component with 'use client'

## Next Steps

1. Test on both desktop and mobile devices
2. Customize the "Get Free Quote" button action
3. Add product images to cart items (optional)
4. Implement quote submission form
5. Add analytics tracking for add-to-quote events

## Support

For more details, see:
- `QuoteBuilder.README.md` - Full documentation
- `QuoteBuilder.example.tsx` - Code examples
- `QUOTEBUILDER_SUMMARY.md` - Complete feature list
