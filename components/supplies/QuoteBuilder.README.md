# QuoteBuilder Component

A responsive shopping cart component for the medical supplies section with adaptive layouts for desktop and mobile devices.

## Features

### Desktop Layout (lg+)
- **Fixed Right Sidebar**: 380px wide, full-height sidebar anchored to the right
- Positioned below header (top: 80px)
- Slides in from the right with spring animation
- Visible at all times for easy access

### Mobile Layout (<lg)
- **Bottom Drawer**: Collapsible drawer that slides up from bottom
- Compact collapsed state showing only header bar (64px)
- Expands to 85vh max height when opened
- Click backdrop to close
- Auto-expands when items are added

### Cart Features

#### Header
- Shopping cart icon with animated badge showing item count
- "Your Quote" title
- "Clear All" button (with trash icon) when cart has items
- Gradient background (teal to warm)

#### Items Display
- **Product Cards** with:
  - Product name and price range
  - Remove button (X) with rotate animation on hover
  - Quantity controls with +/- buttons
  - Hover effects and border highlighting

- **Quantity Controls**:
  - Increment button (teal background)
  - Decrement button (gray background)
  - Current quantity display
  - Auto-removes item when quantity reaches 0

#### Empty State
- Shopping cart icon (large, gray)
- "Your quote is empty" message
- "Browse our supplies" link
- Centered layout

#### Footer CTA
- Large orange "Get Free Quote" button
- Shopping cart icon
- Item count display below button
- Gradient background

### Animations

All animations use Framer Motion and respect `prefers-reduced-motion`:

1. **Sidebar Entry**:
   - Desktop: Slides in from right with spring physics
   - Mobile: Slides up from bottom with spring physics

2. **Drawer Toggle** (Mobile):
   - Chevron icon rotates 180° when expanding/collapsing
   - Smooth spring animation

3. **Item Add/Remove**:
   - Items fade in from top with scale animation
   - Items slide out to right with scale animation on remove
   - Layout shift animation when items change

4. **Button Interactions**:
   - Remove button rotates 90° on hover
   - Quantity buttons scale up on hover, down on tap
   - CTA button scales slightly on hover/tap

5. **Badge**:
   - Item count badge pops in with scale animation
   - Updates smoothly when count changes

## Usage

### Basic Implementation

```tsx
import QuoteBuilder from '@/components/supplies/QuoteBuilder';
import { QuoteProvider } from '@/components/supplies/QuoteContext';

// Wrap your app/page with QuoteProvider
export default function SuppliesPage() {
  return (
    <QuoteProvider>
      <div className="relative">
        {/* Your page content */}
        <QuoteBuilder />
      </div>
    </QuoteProvider>
  );
}
```

### With Custom Styling

```tsx
<QuoteBuilder className="custom-shadow" />
```

## Context Integration

The component uses the `useQuote` hook from `QuoteContext`:

```typescript
const {
  items,           // Array of QuoteItem[]
  updateQuantity,  // (productId: string, quantity: number) => void
  removeFromQuote, // (productId: string) => void
  clearQuote,      // () => void
  getItemCount,    // () => number
} = useQuote();
```

## Responsive Breakpoints

- **Desktop**: `lg` breakpoint (1024px+) - Fixed sidebar
- **Mobile**: Below `lg` - Bottom drawer

The component automatically detects viewport size and switches layout modes.

## Styling

### Color Scheme
- **Primary Teal**: `#007486` - Shopping cart icon, increment buttons
- **Primary Orange**: `#eb981c` - CTA button, item count badge
- **Backgrounds**: Warm neutrals (`warm-50`, `warm-100`) and white
- **Borders**: Gray scale for subtle separation

### Design System Classes
- `bg-primary-teal`, `bg-primary-orange`
- `text-primary-teal`, `text-primary-orange`
- `bg-warm-50`, `bg-warm-100`
- Custom gradients via `gradient-to-r`

## Accessibility

- Semantic HTML elements
- ARIA labels on icon buttons
- Keyboard navigable
- Focus visible states
- Respects `prefers-reduced-motion`
- High contrast color ratios

## State Management

Cart state persists to localStorage via QuoteContext:
- Items saved on every change
- Automatically restored on page reload
- Synced across browser tabs

## Future Enhancements

1. **Quote Submission**:
   - Implement `handleGetQuote` function
   - Navigate to contact form or open modal
   - Pre-fill form with cart items

2. **Animations**:
   - Add confetti effect on first item add
   - Pulse animation when new item added
   - Success toast on quote submission

3. **Features**:
   - Add notes/comments per item
   - Save multiple quotes
   - Share quote via email/link
   - Print quote function

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox
- Framer Motion compatible browsers
- Falls back gracefully without animations

## Performance

- Lazy loads animation library
- Minimal re-renders with React optimization
- Efficient localStorage usage
- Debounced resize listeners

## File Location

```
/root/github-repos/medical-service-company/components/supplies/QuoteBuilder.tsx
```

## Dependencies

- `react` - Core framework
- `framer-motion` - Animations
- `lucide-react` - Icons
- `@/lib/utils` - cn() utility
- `@/lib/animations/hooks/useReducedMotion` - Accessibility hook
- `./QuoteContext` - State management
