/**
 * QUOTE BUILDER - Usage Examples
 *
 * This file demonstrates how to integrate the QuoteBuilder component
 * in various scenarios within the medical supplies section.
 */

'use client';

import QuoteBuilder from './QuoteBuilder';
import { QuoteProvider } from './QuoteContext';
import { products } from '@/lib/supplies-data';

/**
 * Example 1: Basic Integration on Supplies Page
 * The QuoteBuilder appears as a fixed sidebar on desktop and bottom drawer on mobile
 */
export function SuppliesPageWithQuoteBuilder() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-warm-50">
        {/* Main content area with proper padding for desktop sidebar */}
        <div className="lg:pr-[400px] pb-32 lg:pb-8">
          <div className="container-custom py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Medical Supplies
            </h1>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description.substring(0, 100)}...
                  </p>
                  <p className="text-primary-orange font-bold mb-4">
                    {product.priceRange}
                  </p>
                  {/* Add to quote button would go here */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Builder - always present */}
        <QuoteBuilder />
      </div>
    </QuoteProvider>
  );
}

/**
 * Example 2: Integration with Product Cards
 * Shows how to add items to the quote from product cards
 */
export function ProductCardWithQuote() {
  const product = products[0];

  return (
    <QuoteProvider>
      <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <p className="text-primary-orange font-bold mb-4">{product.priceRange}</p>

        {/* This would use the useQuote hook in the actual implementation */}
        <button className="w-full bg-primary-teal text-white py-2 px-4 rounded-lg hover:bg-teal-dark transition-colors">
          Add to Quote
        </button>
      </div>

      <QuoteBuilder />
    </QuoteProvider>
  );
}

/**
 * Example 3: Category Page Layout
 * Full page layout with QuoteBuilder integrated
 */
export function CategoryPageWithQuote() {
  return (
    <QuoteProvider>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-teal text-white py-20 lg:mr-[380px]">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mobility Aids
            </h1>
            <p className="text-xl opacity-90">
              Essential walking aids and support equipment
            </p>
          </div>
        </section>

        {/* Content with sidebar spacing */}
        <section className="lg:mr-[380px] pb-32 lg:pb-8">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product cards would go here */}
            </div>
          </div>
        </section>

        {/* Quote Builder */}
        <QuoteBuilder />
      </div>
    </QuoteProvider>
  );
}

/**
 * Example 4: Using the QuoteBuilder with Custom Styling
 */
export function CustomStyledQuoteBuilder() {
  return (
    <QuoteProvider>
      <div className="relative min-h-screen">
        {/* Your content */}

        {/* Quote Builder with custom shadow */}
        <QuoteBuilder className="shadow-2xl border-l-4 border-primary-orange" />
      </div>
    </QuoteProvider>
  );
}

/**
 * Example 5: Programmatic Quote Management
 * Shows how to interact with the quote context directly
 */
import { useQuote } from './QuoteContext';

export function QuoteManagementExample() {
  const { items, addToQuote, removeFromQuote, clearQuote, getItemCount, isInQuote } = useQuote();
  const exampleProduct = products[0];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quote Management</h2>

      <div className="space-y-4">
        {/* Add to quote */}
        <button
          onClick={() => addToQuote(exampleProduct)}
          className="bg-primary-teal text-white px-4 py-2 rounded"
        >
          Add Product to Quote
        </button>

        {/* Check if in quote */}
        <p>
          Product in quote: {isInQuote(exampleProduct.id) ? 'Yes' : 'No'}
        </p>

        {/* Item count */}
        <p className="font-semibold">
          Total items in quote: {getItemCount()}
        </p>

        {/* Clear all */}
        <button
          onClick={clearQuote}
          className="bg-error-600 text-white px-4 py-2 rounded"
        >
          Clear All Items
        </button>

        {/* List items */}
        <div>
          <h3 className="font-semibold mb-2">Items in quote:</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.product.id} className="flex justify-between">
                <span>{item.product.name}</span>
                <span className="font-semibold">Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 6: Mobile-First Layout Considerations
 * Shows how to handle the mobile bottom drawer with page content
 */
export function MobileFriendlyLayout() {
  return (
    <QuoteProvider>
      <div className="min-h-screen">
        {/* Main content with bottom padding for mobile drawer */}
        <main className="pb-32 lg:pb-8 lg:pr-[400px]">
          <div className="container-custom py-8">
            <h1 className="text-3xl font-bold mb-6">Medical Supplies</h1>

            {/* Content grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Your content here */}
              <p className="text-gray-600">
                Content automatically has space for the mobile drawer at bottom
                and desktop sidebar on the right.
              </p>
            </div>
          </div>
        </main>

        {/* Quote Builder - handles its own responsive behavior */}
        <QuoteBuilder />
      </div>
    </QuoteProvider>
  );
}

/**
 * Layout Guidelines:
 *
 * Desktop (lg+):
 * - Add right margin to main content: lg:mr-[380px] or lg:pr-[400px]
 * - QuoteBuilder appears as fixed sidebar on right (380px wide)
 *
 * Mobile:
 * - Add bottom padding: pb-32 (to account for collapsed drawer)
 * - QuoteBuilder appears as bottom drawer
 * - Expands to 85vh when opened
 *
 * Both:
 * - Wrap app/page with QuoteProvider
 * - QuoteBuilder component can be placed anywhere (renders fixed/absolute)
 * - State persists across pages via localStorage
 */
