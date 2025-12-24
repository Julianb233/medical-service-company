"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations";

interface ServiceHeroImage {
  src: string;
  alt: string;
}

interface ServiceHeroCarouselProps {
  title: string;
  description: string;
  images: ServiceHeroImage[];
}

export function ServiceHeroCarousel({
  title,
  description,
  images,
}: ServiceHeroCarouselProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, images.length]);

  // Ken Burns effect - subtle zoom and pan
  const kenBurnsAnimation = prefersReducedMotion
    ? undefined
    : {
        scale: [1, 1.08],
        x: [0, -20],
        y: [0, -10],
        transition: {
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="relative h-[55svh] sm:h-[50vh] min-h-[340px] sm:min-h-[400px] max-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {/* Background Image with Ken Burns Effect */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${images[currentImageIndex].src}')`,
                transformOrigin: "center center",
              }}
              animate={kenBurnsAnimation}
            />

            {/* Gradient Teal Overlay for Text Readability (original) */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/80 via-primary-teal/70 to-primary-teal/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom text-white px-4 sm:px-6 lg:px-8">
        <motion.h1
          className={cn(
            "font-accent font-bold tracking-tight mb-4",
            "text-4xl sm:text-5xl md:text-6xl",
            "max-w-4xl"
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className={cn(
            "text-lg sm:text-xl md:text-2xl",
            "max-w-3xl leading-relaxed",
            "text-white"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Carousel Navigation Dots */}
      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "transition-all duration-300",
                  "hover:scale-110",
                  currentImageIndex === index
                    ? "w-8 h-2 bg-primary-orange rounded-full"
                    : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/80"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
