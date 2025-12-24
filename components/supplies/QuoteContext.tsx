'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/supplies-data';

// QuoteItem type representing a product with quantity
export interface QuoteItem {
  product: Product;
  quantity: number;
}

// Context value type
interface QuoteContextValue {
  items: QuoteItem[];
  addToQuote: (product: Product) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  getItemCount: () => number;
  isInQuote: (productId: string) => boolean;
}

// Create context with undefined default (will be provided by QuoteProvider)
const QuoteContext = createContext<QuoteContextValue | undefined>(undefined);

// localStorage key constant
const QUOTE_STORAGE_KEY = 'medicalSuppliesQuote';

// QuoteProvider component
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedQuote = localStorage.getItem(QUOTE_STORAGE_KEY);
        if (storedQuote) {
          const parsedQuote = JSON.parse(storedQuote) as QuoteItem[];
          setItems(parsedQuote);
        }
      } catch (error) {
        console.error('Error loading quote from localStorage:', error);
      } finally {
        setIsHydrated(true);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (isHydrated && typeof window !== 'undefined') {
      try {
        localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error('Error saving quote to localStorage:', error);
      }
    }
  }, [items, isHydrated]);

  // Add product to quote or increment quantity if already exists
  const addToQuote = (product: Product) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Product already in quote, increment quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // New product, add with quantity 1
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from quote by ID
  const removeFromQuote = (productId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  // Update quantity for a specific product
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      // If quantity is 0 or negative, remove the item
      removeFromQuote(productId);
      return;
    }

    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.product.id === productId
      );

      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity,
        };
        return updatedItems;
      }

      // Item not found, return unchanged
      return prevItems;
    });
  };

  // Clear all items from quote
  const clearQuote = () => {
    setItems([]);
  };

  // Get total count of all items (sum of all quantities)
  const getItemCount = (): number => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Check if a product is in the quote
  const isInQuote = (productId: string): boolean => {
    return items.some((item) => item.product.id === productId);
  };

  const value: QuoteContextValue = {
    items,
    addToQuote,
    removeFromQuote,
    updateQuantity,
    clearQuote,
    getItemCount,
    isInQuote,
  };

  return (
    <QuoteContext.Provider value={value}>
      {children}
    </QuoteContext.Provider>
  );
}

// Custom hook to use the QuoteContext
export function useQuote(): QuoteContextValue {
  const context = useContext(QuoteContext);

  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }

  return context;
}
