"use client";

import { motion } from "framer-motion";
import { Plus, Check } from "lucide-react";
import { Product } from "@/lib/supplies-data";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/OptimizedImage";

interface ProductCardProps {
  product: Product;
  onAddToQuote: () => void;
  isInQuote: boolean;
}

export function ProductCard({ product, onAddToQuote, isInQuote }: ProductCardProps) {
  return (
    <motion.div
      className="card-elevated h-full flex flex-col bg-white rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      {/* Product Image with Hover Zoom */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <OptimizedImage
            src={product.image}
            alt={product.name}
            aspectRatio={{ width: 4, height: 3 }}
            priority="normal"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            objectFit="cover"
            fallbackSrc="/images/supplies/placeholder.jpg"
            context={{
              service: product.category,
              description: product.description,
            }}
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span
            className={cn(
              "inline-block px-3 py-1 rounded-full text-xs font-semibold",
              "bg-teal-100 text-teal-700"
            )}
          >
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Price Range */}
        <div className="mb-4">
          <p className="text-xl font-bold text-teal-600">
            {product.priceRange}
          </p>
        </div>

        {/* Add to Quote Button */}
        <motion.button
          onClick={onAddToQuote}
          className={cn(
            "w-full flex items-center justify-center gap-2",
            "px-4 py-3 rounded-lg font-semibold text-sm",
            "transition-all duration-200",
            isInQuote
              ? "bg-green-500 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isInQuote ? 0 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isInQuote ? (
              <Check className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </motion.div>
          <span>{isInQuote ? "Added to Quote" : "Add to Quote"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
