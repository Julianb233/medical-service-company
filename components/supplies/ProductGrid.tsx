"use client";

import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { Product } from "@/lib/supplies-data";
import { cn } from "@/lib/utils";
import { useStaggerReveal } from "@/lib/animations/hooks";
import { easings } from "@/lib/animations/easings";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToQuote: (product: Product) => void;
  quoteItems?: Product[];
}

export function ProductGrid({ products, onAddToQuote, quoteItems = [] }: ProductGridProps) {
  // Use stagger reveal hook for grid animation
  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.08,
    initialDelay: 0.2,
    duration: 0.6,
    yOffset: 40,
    withScale: true,
    initialScale: 0.9,
  });

  // Empty state
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easings.spring }}
        className={cn(
          "flex flex-col items-center justify-center",
          "py-16 md:py-24",
          "text-center"
        )}
      >
        <div
          className={cn(
            "w-20 h-20 md:w-24 md:h-24 mb-6",
            "rounded-full",
            "bg-gray-100",
            "flex items-center justify-center"
          )}
        >
          <Package className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
        </div>
        <h3 className="text-2xl md:text-3xl font-accent font-bold text-gray-900 mb-3">
          No Products Found
        </h3>
        <p className="text-gray-600 text-lg max-w-md">
          We couldn&apos;t find any products matching your criteria. Try adjusting your filters or browse all categories.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "grid gap-6",
        "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {products.map((product) => {
        const isInQuote = quoteItems.some(item => item.id === product.id);

        return (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard
              product={product}
              onAddToQuote={() => onAddToQuote(product)}
              isInQuote={isInQuote}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
