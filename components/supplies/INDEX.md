# Medical Supplies Components - Index

Complete component library for the medical supplies section.

## Components

### QuoteContext
**File:** `QuoteContext.tsx`
**Type:** Context Provider + Hook
**Purpose:** Global state management for shopping cart/quote

**Features:**
- Add/remove products
- Update quantities
- LocalStorage persistence
- Cross-tab synchronization
- TypeScript types

**Usage:**
```tsx
import { QuoteProvider, useQuote } from './QuoteContext';

// Wrap app
<QuoteProvider>{children}</QuoteProvider>

// Use in components
const { items, addToQuote, removeFromQuote } = useQuote();
```

---

### QuoteBuilder
**File:** `QuoteBuilder.tsx`
**Type:** UI Component
**Purpose:** Responsive shopping cart with desktop sidebar and mobile drawer

**Features:**
- Desktop: Fixed right sidebar (380px)
- Mobile: Bottom drawer (collapsible)
- Framer Motion animations
- Quantity controls
- Empty state
- "Get Free Quote" CTA

**Props:**
```typescript
interface QuoteBuilderProps {
  className?: string;
}
```

**Example:**
```tsx
import QuoteBuilder from './QuoteBuilder';

<QuoteProvider>
  <main className="pb-32 lg:pb-8 lg:pr-[400px]">
    {/* Content */}
  </main>
  <QuoteBuilder />
</QuoteProvider>
```

---

## Documentation Files

### QuoteBuilder.README.md
Complete documentation including:
- Feature breakdown
- Animation catalog
- API reference
- Responsive behavior
- Accessibility features

### QuoteBuilder.QUICKSTART.md
5-minute integration guide:
- Step-by-step setup
- Code examples
- Visual layout diagrams
- Troubleshooting

### QuoteBuilder.example.tsx
Six working examples:
1. Basic page integration
2. Product card integration
3. Category page layout
4. Custom styling
5. Programmatic quote management
6. Mobile-friendly layouts

### QUOTEBUILDER_SUMMARY.md
Complete implementation summary:
- Technical specifications
- File structure
- Testing checklist
- Future enhancements

### INDEX.md (this file)
Component directory and quick reference

---

## File Structure

```
components/supplies/
├── QuoteContext.tsx              # State management (160 lines)
├── QuoteBuilder.tsx              # Main component (560 lines)
├── QuoteBuilder.README.md        # Full documentation
├── QuoteBuilder.QUICKSTART.md    # Quick start guide
├── QuoteBuilder.example.tsx      # Usage examples
├── QUOTEBUILDER_SUMMARY.md       # Implementation summary
└── INDEX.md                      # This file
```

---

## Quick Reference

### Color Palette
```css
--color-primary-teal: #007486     /* Brand, cart icon, increment buttons */
--color-primary-orange: #eb981c   /* CTA, badge, accents */
--color-warm-50: #fefdfb          /* Background */
--color-warm-100: #fdfbf7         /* Card backgrounds */
```

### Key Classes
```css
.bg-primary-teal          /* Teal background */
.bg-primary-orange        /* Orange background */
.text-primary-teal        /* Teal text */
.hover:bg-teal-dark       /* Darker teal on hover */
.container-custom         /* Max-width container */
```

### Responsive Breakpoints
```css
lg: 1024px                /* Desktop sidebar threshold */
```

### Layout Spacing
```css
pb-32                     /* Mobile bottom padding (128px) */
lg:pb-8                   /* Desktop bottom padding (32px) */
lg:pr-[400px]             /* Desktop right padding for sidebar */
```

---

## Common Patterns

### Add Product to Quote
```tsx
const { addToQuote } = useQuote();

<button onClick={() => addToQuote(product)}>
  Add to Quote
</button>
```

### Check if Product in Quote
```tsx
const { isInQuote } = useQuote();

{isInQuote(product.id) ? 'In Quote' : 'Add to Quote'}
```

### Get Total Item Count
```tsx
const { getItemCount } = useQuote();

<span>{getItemCount()} items</span>
```

### Update Quantity
```tsx
const { updateQuantity } = useQuote();

updateQuantity(productId, newQuantity);
```

### Remove Product
```tsx
const { removeFromQuote } = useQuote();

<button onClick={() => removeFromQuote(productId)}>
  Remove
</button>
```

### Clear All Items
```tsx
const { clearQuote } = useQuote();

<button onClick={clearQuote}>Clear All</button>
```

---

## Integration Checklist

- [ ] Install dependencies (framer-motion, lucide-react)
- [ ] Import QuoteProvider and QuoteBuilder
- [ ] Wrap app/page with QuoteProvider
- [ ] Add QuoteBuilder component
- [ ] Add layout spacing classes (pb-32, lg:pr-[400px])
- [ ] Implement add-to-quote buttons
- [ ] Test desktop layout (sidebar)
- [ ] Test mobile layout (drawer)
- [ ] Verify localStorage persistence
- [ ] Test animations and interactions
- [ ] Check accessibility (keyboard nav, screen readers)
- [ ] Customize "Get Free Quote" button action

---

## Dependencies

```json
{
  "react": "19.1.0",
  "framer-motion": "^12.23.26",
  "lucide-react": "^0.562.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0"
}
```

---

## TypeScript Types

### Product
```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  image: string;
  priceRange: string;
  popular: boolean;
}
```

### QuoteItem
```typescript
interface QuoteItem {
  product: Product;
  quantity: number;
}
```

### QuoteContext
```typescript
interface QuoteContextValue {
  items: QuoteItem[];
  addToQuote: (product: Product) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  getItemCount: () => number;
  isInQuote: (productId: string) => boolean;
}
```

---

## Animation Variants

### Sidebar Entry (Desktop)
```typescript
{
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1 }
}
```

### Drawer States (Mobile)
```typescript
{
  collapsed: { y: 'calc(100% - 64px)' },
  expanded: { y: 0 }
}
```

### Item Add/Remove
```typescript
{
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, x: 100, scale: 0.8 }
}
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Notes

- Efficient re-renders (only on quote changes)
- Debounced resize listeners
- LocalStorage operations are async-safe
- Animations respect `prefers-reduced-motion`
- Tree-shaken imports (icons, motion)

---

## Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels on icon buttons
- ✅ Keyboard navigation
- ✅ Focus visible states
- ✅ Screen reader friendly
- ✅ High contrast ratios (WCAG AA)
- ✅ Reduced motion support

---

## Future Roadmap

### Phase 1: Quote Submission
- Quote request form integration
- Email notification to sales team
- PDF quote generation

### Phase 2: Enhanced Features
- Item notes/comments
- Multiple saved quotes
- Share quote functionality
- Print quote

### Phase 3: Analytics
- Add-to-quote tracking
- Conversion metrics
- Cart abandonment monitoring
- A/B testing

---

## Getting Help

1. **Quick Start**: See `QuoteBuilder.QUICKSTART.md`
2. **Full Docs**: See `QuoteBuilder.README.md`
3. **Examples**: See `QuoteBuilder.example.tsx`
4. **Summary**: See `QUOTEBUILDER_SUMMARY.md`

---

## License

Part of the HappyHomeCare medical service company website.

---

**Last Updated:** December 24, 2024
**Component Version:** 1.0.0
**React Version:** 19.1.0
**Next.js Version:** 15.5.9
