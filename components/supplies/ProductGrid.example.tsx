"use client";

/**
 * ProductGrid Component - Usage Examples
 *
 * This file demonstrates how to use the ProductGrid component
 * with different configurations and scenarios.
 */

import { useState } from "react";
import { ProductGrid } from "./ProductGrid";
import { products, getProductsByCategory, getFeaturedProducts, Product } from "@/lib/supplies-data";

// Example 1: Basic Usage with All Products
export function AllProductsExample() {
  const [quote, setQuote] = useState<Product[]>([]);

  const handleAddToQuote = (product: Product) => {
    if (!quote.find(p => p.id === product.id)) {
      setQuote([...quote, product]);
      console.log(`Added ${product.name} to quote`);
    }
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-accent font-bold mb-8">All Products</h2>
      <ProductGrid products={products} onAddToQuote={handleAddToQuote} />

      {quote.length > 0 && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Quote Items: {quote.length}</h3>
          <ul className="list-disc list-inside">
            {quote.map(p => <li key={p.id}>{p.name}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

// Example 2: Category Filtered Products
export function CategoryProductsExample() {
  const mobilityProducts = getProductsByCategory("mobility-aids");

  const handleAddToQuote = (product: Product) => {
    console.log("Add to quote:", product.name);
    // Implement your quote logic here
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-accent font-bold mb-8">Mobility Aids</h2>
      <ProductGrid products={mobilityProducts} onAddToQuote={handleAddToQuote} />
    </div>
  );
}

// Example 3: Featured/Popular Products Only
export function FeaturedProductsExample() {
  const featuredProducts = getFeaturedProducts();

  const handleAddToQuote = (product: Product) => {
    alert(`${product.name} added to quote!`);
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-accent font-bold mb-8">Popular Products</h2>
      <ProductGrid products={featuredProducts} onAddToQuote={handleAddToQuote} />
    </div>
  );
}

// Example 4: Empty State
export function EmptyStateExample() {
  const handleAddToQuote = (product: Product) => {
    console.log("Add to quote:", product.name);
  };

  return (
    <div className="container-custom py-12">
      <h2 className="text-3xl font-accent font-bold mb-8">Search Results</h2>
      <ProductGrid products={[]} onAddToQuote={handleAddToQuote} />
    </div>
  );
}

// Example 5: With Quote Context Integration
export function WithQuoteContextExample() {
  // This would typically use the QuoteContext
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);

  const handleAddToQuote = (product: Product) => {
    // Check if already in quote
    if (quoteItems.some(item => item.id === product.id)) {
      alert(`${product.name} is already in your quote`);
      return;
    }

    // Add to quote
    setQuoteItems([...quoteItems, product]);

    // Show success message
    const message = `${product.name} has been added to your quote`;
    console.log(message);

    // Could trigger a toast notification here
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  return (
    <div className="container-custom py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-accent font-bold">All Medical Supplies</h2>

        {quoteItems.length > 0 && (
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">
              Quote Items: {quoteItems.length}
            </span>
            <button
              onClick={handleClearQuote}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Clear Quote
            </button>
          </div>
        )}
      </div>

      <ProductGrid products={products} onAddToQuote={handleAddToQuote} />

      {quoteItems.length > 0 && (
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">Your Quote</h3>
          <div className="space-y-3">
            {quoteItems.map(item => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <span className="font-bold text-primary-teal">{item.priceRange}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-primary-teal to-teal-dark text-white font-semibold rounded-lg hover:shadow-lg transition-all">
            Request Quote
          </button>
        </div>
      )}
    </div>
  );
}

// Example 6: Responsive Grid Demonstration
export function ResponsiveGridExample() {
  const limitedProducts = products.slice(0, 6);

  const handleAddToQuote = (product: Product) => {
    console.log("Add to quote:", product.name);
  };

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-accent font-bold mb-2">Responsive Grid</h2>
        <p className="text-gray-600">
          Resize your browser to see the grid adapt:
          <br />
          Mobile (320px+): 1 column
          <br />
          Tablet (768px+): 2 columns
          <br />
          Desktop (1024px+): 3 columns
        </p>
      </div>

      <ProductGrid products={limitedProducts} onAddToQuote={handleAddToQuote} />
    </div>
  );
}
