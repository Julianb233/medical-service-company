"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, Headphones } from "lucide-react";
import { products, getAllCategories } from "@/lib/supplies-data";
import { ProductGrid } from "@/components/supplies/ProductGrid";
import { QuoteProvider, useQuote } from "@/components/supplies/QuoteContext";
import QuoteBuilder from "@/components/supplies/QuoteBuilder";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations/easings";
import { useStaggerReveal } from "@/lib/animations/hooks";

function SuppliesContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addToQuote } = useQuote();

  const categories = getAllCategories();

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    return selectedCategory === "all" || product.categorySlug === selectedCategory;
  });

  // Stagger animation for trust badges
  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.15,
    initialDelay: 0.4,
    duration: 0.6,
    yOffset: 20,
    withScale: true,
    initialScale: 0.9,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section with gradient-teal background */}
      <section className="bg-gradient-to-br from-primary-teal to-teal-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easings.spring }}
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-accent font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easings.dramatic }}
            >
              Medical Equipment & Supplies
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-xl md:text-2xl text-white font-semibold mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easings.spring }}
            >
              Best Prices for Seniors in San Diego County
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
            >
              {/* Free Quotes Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-white/95"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm md:text-base">Free Quotes</p>
                  <p className="text-xs text-white/70">No Obligations</p>
                </div>
              </motion.div>

              {/* Fast Delivery Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-white/95"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm md:text-base">Fast Delivery</p>
                  <p className="text-xs text-white/70">Same Day Available</p>
                </div>
              </motion.div>

              {/* Expert Support Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 text-white/95"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-sm md:text-base">Expert Support</p>
                  <p className="text-xs text-white/70">24/7 Available</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Main Content (70% on desktop) */}
            <div className="flex-1 lg:w-[70%]">
              {/* Category Filter - Sticky on scroll */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, ease: easings.spring }}
                className={cn(
                  "sticky top-20 z-30 bg-white rounded-xl shadow-md p-4 mb-8",
                  "border border-gray-200"
                )}
              >
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={cn(
                      "px-5 py-2.5 rounded-lg whitespace-nowrap transition-all duration-300 font-semibold text-sm",
                      selectedCategory === "all"
                        ? "bg-primary-teal text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={cn(
                        "px-5 py-2.5 rounded-lg whitespace-nowrap transition-all duration-300 font-semibold text-sm relative",
                        selectedCategory === category.slug
                          ? "bg-primary-teal text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-80">
                        ({category.productCount})
                      </span>
                      {/* Active underline */}
                      {selectedCategory === category.slug && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-orange rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Product Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <ProductGrid products={filteredProducts} onAddToQuote={addToQuote} />
              </motion.div>

              {/* Results Count */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-gray-600 mt-8 text-sm"
              >
                Showing {filteredProducts.length} of {products.length} products
              </motion.p>
            </div>

            {/* Right: QuoteBuilder Sidebar (30% on desktop) */}
            <div className="lg:w-[30%]">
              <QuoteBuilder />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SuppliesPageClient() {
  return (
    <QuoteProvider>
      <SuppliesContent />
    </QuoteProvider>
  );
}
