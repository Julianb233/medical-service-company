'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, X, Trash2, ChevronUp } from 'lucide-react';
import { useQuote } from './QuoteContext';
import { cn } from '@/lib/utils';

interface QuoteBuilderProps {
  className?: string;
}

export default function QuoteBuilder({ className }: QuoteBuilderProps) {
  const { items, updateQuantity, removeFromQuote, clearQuote, getItemCount } = useQuote();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-expand on mobile when items are added
  useEffect(() => {
    if (isMobile && items.length > 0) {
      setIsExpanded(true);
    }
  }, [items.length, isMobile]);

  const itemCount = getItemCount();
  const isEmpty = items.length === 0;

  // Animation variants
  const sidebarVariants = {
    desktop: {
      hidden: { x: '100%', opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring' as const,
          stiffness: 300,
          damping: 30,
        },
      },
    },
    mobile: {
      collapsed: {
        y: 'calc(100% - 64px)',
        transition: {
          type: 'spring' as const,
          stiffness: 300,
          damping: 30,
        },
      },
      expanded: {
        y: 0,
        transition: {
          type: 'spring' as const,
          stiffness: 300,
          damping: 30,
        },
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrement = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromQuote(productId);
    }
  };

  const handleGetQuote = () => {
    // TODO: Navigate to contact form or open quote request modal
    console.log('Getting quote for:', items);
  };

  // Desktop sidebar
  if (!isMobile) {
    return (
      <motion.aside
        variants={sidebarVariants.desktop}
        initial="hidden"
        animate="visible"
        className={cn(
          'fixed top-20 right-0 h-[calc(100vh-80px)] w-[380px] bg-white shadow-2xl z-40',
          'border-l border-gray-200 flex flex-col',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-warm-50">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-primary-teal" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </div>
            <h2 className="text-xl font-bold text-gray-900">Your Quote</h2>
          </div>
          {!isEmpty && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearQuote}
              className="text-sm text-gray-600 hover:text-error-600 transition-colors flex items-center space-x-1"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear All</span>
            </motion.button>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <AnimatePresence mode="popLayout">
            {isEmpty ? (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Your quote is empty</h3>
                <p className="text-gray-500 mb-6">Browse our supplies to get started</p>
                <a
                  href="#products"
                  className="text-primary-teal hover:text-teal-dark font-medium transition-colors"
                >
                  Browse Supplies
                </a>
              </motion.div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.product.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="bg-warm-50 rounded-lg p-4 border border-gray-200 hover:border-teal-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 pr-2">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-gray-600">{item.product.priceRange}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromQuote(item.product.id)}
                      className="text-gray-400 hover:text-error-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                    <span className="text-sm text-gray-600 font-medium">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDecrement(item.product.id, item.quantity)}
                        className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="w-8 text-center font-semibold text-gray-900">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleIncrement(item.product.id, item.quantity)}
                        className="w-7 h-7 rounded-md bg-primary-teal hover:bg-teal-dark flex items-center justify-center text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Footer with CTA */}
        {!isEmpty && (
          <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-warm-50 to-teal-50">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGetQuote}
              className="w-full bg-primary-orange hover:bg-orange-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Get Free Quote</span>
            </motion.button>
            <p className="text-xs text-center text-gray-500 mt-3">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your quote
            </p>
          </div>
        )}
      </motion.aside>
    );
  }

  // Mobile bottom drawer
  return (
    <>
      {/* Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && !isEmpty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            style={{ top: '80px' }}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        variants={sidebarVariants.mobile}
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className={cn(
          'fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 lg:hidden',
          'rounded-t-2xl border-t-2 border-gray-200',
          'max-h-[85vh] flex flex-col',
          className
        )}
      >
        {/* Handle Bar */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 cursor-pointer flex items-center justify-between bg-gradient-to-r from-teal-50 to-warm-50 rounded-t-2xl"
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-primary-teal" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold text-gray-900">Your Quote</h2>
              {itemCount > 0 && (
                <p className="text-xs text-gray-600">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              )}
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="w-6 h-6 text-gray-600" />
          </motion.div>
        </motion.button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col flex-1 overflow-hidden"
            >
              {/* Clear All Button */}
              {!isEmpty && (
                <div className="px-4 py-2 border-b border-gray-200 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearQuote}
                    className="text-sm text-gray-600 hover:text-error-600 transition-colors flex items-center space-x-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear All</span>
                  </motion.button>
                </div>
              )}

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <AnimatePresence mode="popLayout">
                  {isEmpty ? (
                    <motion.div
                      key="empty-state"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex flex-col items-center justify-center text-center py-8"
                    >
                      <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Your quote is empty</h3>
                      <p className="text-gray-500 mb-6">Browse our supplies to get started</p>
                      <button
                        onClick={() => setIsExpanded(false)}
                        className="text-primary-teal hover:text-teal-dark font-medium transition-colors"
                      >
                        Browse Supplies
                      </button>
                    </motion.div>
                  ) : (
                    items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="bg-warm-50 rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-2">
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-gray-600">{item.product.priceRange}</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromQuote(item.product.id)}
                            className="text-gray-400 hover:text-error-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <X className="w-5 h-5" />
                          </motion.button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-200">
                          <span className="text-sm text-gray-600 font-medium">Quantity:</span>
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDecrement(item.product.id, item.quantity)}
                              className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            <span className="w-8 text-center font-semibold text-gray-900">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleIncrement(item.product.id, item.quantity)}
                              className="w-7 h-7 rounded-md bg-primary-teal hover:bg-teal-dark flex items-center justify-center text-white transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Footer with CTA */}
              {!isEmpty && (
                <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-warm-50 to-teal-50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleGetQuote}
                    className="w-full bg-primary-orange hover:bg-orange-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Get Free Quote</span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
