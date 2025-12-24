# Medical Supplies Components

This directory contains React components for displaying medical supply products with a responsive grid layout and interactive features.

## Components

### ProductCard

A card component that displays a single medical supply product with hover effects, image zoom, and an "Add to Quote" button.

**Props:**
- `product: Product` - The product data object
- `onAddToQuote: () => void` - Callback function when the "Add to Quote" button is clicked
- `isInQuote: boolean` - Whether the product is already in the quote (changes button appearance)

**Features:**
- Responsive image with hover zoom effect
- Category badge
- Product name and description (truncated to 2 lines)
- Price range display
- Animated "Add to Quote" button with state changes
- Card elevation on hover
- Framer Motion animations

**File:** `/root/github-repos/medical-service-company/components/supplies/ProductCard.tsx`

---

### ProductGrid

A responsive grid container that displays multiple ProductCard components with stagger animations.

**Props:**
- `products: Product[]` - Array of products to display
- `onAddToQuote: (product: Product) => void` - Callback function when a product is added to quote
- `quoteItems?: Product[]` - (Optional) Array of products currently in the quote for tracking state

**Features:**
- Responsive grid layout:
  - 1 column on mobile (< 768px)
  - 2 columns on tablet (768px - 1023px)
  - 3 columns on desktop (≥ 1024px)
- Stagger reveal animations on mount
- Empty state with icon and message when no products
- Automatic tracking of which products are in the quote
- 6px gap between grid items

**File:** `/root/github-repos/medical-service-company/components/supplies/ProductGrid.tsx`

---

## Usage Examples

### Basic Usage

```tsx
import { ProductGrid } from "@/components/supplies";
import { products } from "@/lib/supplies-data";
import { useState } from "react";

function SuppliesPage() {
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);

  const handleAddToQuote = (product: Product) => {
    if (!quoteItems.find(p => p.id === product.id)) {
      setQuoteItems([...quoteItems, product]);
    }
  };

  return (
    <div className="container-custom py-12">
      <h1>Medical Supplies</h1>
      <ProductGrid
        products={products}
        onAddToQuote={handleAddToQuote}
        quoteItems={quoteItems}
      />
    </div>
  );
}
```

### Category Filtering

```tsx
import { ProductGrid } from "@/components/supplies";
import { getProductsByCategory } from "@/lib/supplies-data";

function MobilityAidsPage() {
  const mobilityProducts = getProductsByCategory("mobility-aids");

  return (
    <ProductGrid
      products={mobilityProducts}
      onAddToQuote={(product) => console.log("Add:", product.name)}
    />
  );
}
```

### With Quote Context

```tsx
import { ProductGrid } from "@/components/supplies";
import { useQuote } from "@/context/QuoteContext";

function SuppliesWithContext() {
  const { items, addItem } = useQuote();

  return (
    <ProductGrid
      products={products}
      onAddToQuote={addItem}
      quoteItems={items}
    />
  );
}
```

### Empty State

```tsx
import { ProductGrid } from "@/components/supplies";

function SearchResults({ results }) {
  return (
    <ProductGrid
      products={results}
      onAddToQuote={(product) => {}}
    />
  );
}

// When results is empty [], displays:
// "No Products Found" message with icon
```

---

## Data Types

### Product Interface

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

---

## Animation Details

### ProductCard Animations
- Initial fade-in and slide-up on mount
- Hover: Card lifts up (-4px translateY)
- Image hover: Scales to 105%
- Button: Spring animation on hover and tap

### ProductGrid Animations
- Stagger reveal: Children animate in sequence
- Stagger delay: 80ms between items
- Initial delay: 200ms before first item
- Duration: 600ms per item
- Includes scale effect (90% → 100%)

---

## Responsive Breakpoints

| Breakpoint | Columns | Min Width |
|------------|---------|-----------|
| Mobile     | 1       | 0px       |
| Tablet     | 2       | 768px     |
| Desktop    | 3       | 1024px    |

Gap spacing: 1.5rem (24px) on all breakpoints

---

## Dependencies

- **framer-motion**: Animation library
- **lucide-react**: Icon components
- **@/lib/supplies-data**: Product data and types
- **@/lib/utils**: `cn()` utility for className merging
- **@/lib/animations/hooks**: `useStaggerReveal` hook
- **@/lib/animations/easings**: Animation easing functions
- **@/components/OptimizedImage**: Image optimization component

---

## File Structure

```
components/supplies/
├── ProductCard.tsx          # Individual product card component
├── ProductGrid.tsx          # Grid container with responsive layout
├── QuoteContext.tsx         # Quote state management context
├── index.ts                 # Barrel exports
├── ProductGrid.example.tsx  # Usage examples
└── README.md               # This file
```

---

## Performance Considerations

1. **Image Optimization**: Uses OptimizedImage component with lazy loading
2. **Animation Performance**: Framer Motion uses GPU-accelerated transforms
3. **List Rendering**: Uses React key prop (product.id) for efficient re-renders
4. **Quote Tracking**: Efficient lookup using Array.some() method

---

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h3 for product names)
- Descriptive alt text for images
- Interactive elements have visible focus states
- Color contrast meets WCAG AA standards

---

## Future Enhancements

- [ ] Product quick view modal
- [ ] Product comparison feature
- [ ] Filter and sort controls
- [ ] Pagination or infinite scroll for large product lists
- [ ] Product favorites/wishlist
- [ ] Share product functionality
- [ ] Print product details

---

## Related Files

- Product data: `/root/github-repos/medical-service-company/lib/supplies-data.ts`
- Quote context: `/root/github-repos/medical-service-company/components/supplies/QuoteContext.tsx`
- Animation utilities: `/root/github-repos/medical-service-company/lib/animations/`
