"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content-data";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations";
import { springs, easings } from "@/lib/animations/easings";
import { durations } from "@/lib/animations/transitions";
import { ImagePresets } from "@/components/OptimizedImage";

/**
 * Award-winning 3D Testimonials Carousel
 * Features:
 * - 3D perspective carousel with circular arc arrangement
 * - Active card in center, side cards scaled down and rotated
 * - Smooth spring physics transitions
 * - Auto-play with pause on hover
 * - Star rating reveal animation
 * - Quote text fade-in animation
 * - Touch/swipe support via Embla
 * - Keyboard navigation
 * - Reduced motion support
 * - Mobile responsive
 */
export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize Embla
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || isHovered || prefersReducedMotion) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isHovered, prefersReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };

    if (containerRef.current) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollPrev, scrollNext]);

  // Calculate 3D position for each card
  const getCardPosition = (index: number) => {
    const total = testimonials.length;
    const position = ((index - selectedIndex + total) % total) - Math.floor(total / 2);

    // Distance from center (-2, -1, 0, 1, 2 for 5 items)
    const distance = Math.abs(position);

    // 3D transformations based on position
    const x = position * (prefersReducedMotion ? 0 : 35); // Horizontal offset (% of card width)
    const z = -distance * (prefersReducedMotion ? 0 : 150); // Depth (closer cards are forward)
    const rotateY = position * (prefersReducedMotion ? 0 : 15); // Y-axis rotation
    const scale = 1 - distance * (prefersReducedMotion ? 0 : 0.15); // Scale down side cards
    const opacity = Math.max(0.3, 1 - distance * 0.25); // Fade side cards

    return { x, z, rotateY, scale, opacity };
  };

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      role="region"
      aria-label="Customer testimonials carousel"
      tabIndex={0}
    >
      {/* 3D Carousel Container */}
      <div
        className="relative overflow-visible"
        style={{
          perspective: prefersReducedMotion ? "none" : "1500px",
          perspectiveOrigin: "center center"
        }}
      >
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="flex items-center"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index);
              const isActive = index === selectedIndex;

              return (
                <motion.div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_85%] lg:flex-[0_0_70%] min-w-0 px-4"
                  initial={false}
                  animate={{
                    x: `${position.x}%`,
                    z: position.z,
                    rotateY: position.rotateY,
                    scale: position.scale,
                    opacity: position.opacity,
                  }}
                  transition={{
                    ...springs.default,
                    duration: prefersReducedMotion ? 0.01 : durations.slow,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    isActive={isActive}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-12">
        {/* Previous Button */}
        <motion.button
          onClick={scrollPrev}
          className="bg-primary-teal text-white p-3 rounded-full hover:bg-teal-dark transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
          aria-label="Previous testimonial"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2",
                index === selectedIndex
                  ? "bg-primary-orange w-8"
                  : "bg-gray-300 hover:bg-gray-400 w-3"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === selectedIndex}
              role="tab"
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={scrollNext}
          className="bg-primary-teal text-white p-3 rounded-full hover:bg-teal-dark transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-teal focus:ring-offset-2"
          aria-label="Next testimonial"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
        >
          <ChevronRight size={24} aria-hidden="true" />
        </motion.button>
      </div>

      {/* Auto-play Indicator */}
      <div className="text-center mt-4 text-sm text-gray-600">
        {isHovered ? (
          <span>Paused</span>
        ) : prefersReducedMotion ? (
          <span>Auto-play disabled</span>
        ) : (
          <span>Auto-playing</span>
        )}
      </div>
    </div>
  );
}

/**
 * Individual Testimonial Card Component
 */
interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  isActive: boolean;
  prefersReducedMotion: boolean;
}

function TestimonialCard({
  testimonial,
  isActive,
  prefersReducedMotion
}: TestimonialCardProps) {
  return (
    <motion.article
      className={cn(
        "card-testimonial card-elevated card-3d-tilt bg-white rounded-xl shadow-lg relative overflow-hidden",
        "p-8 md:p-12 h-full min-h-[400px] flex flex-col justify-between"
      )}
      initial={false}
      animate={{
        boxShadow: isActive
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : durations.normal,
        ease: easings.smooth,
      }}
      style={{
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      {/* Quote Icon Background */}
      <div className="absolute top-6 left-6 text-primary-orange opacity-10 pointer-events-none">
        <Quote size={64} fill="currentColor" aria-hidden="true" />
      </div>

      {/* Star Rating with Reveal Animation */}
      <div className="flex items-center gap-1 mb-6 relative z-10">
        {testimonial.rating && (
          <motion.div
            className="flex gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isActive ? 1 : 0.7,
              y: 0
            }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : durations.normal,
              staggerChildren: prefersReducedMotion ? 0 : 0.05,
            }}
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{
                  opacity: 1,
                  scale: isActive ? 1 : 0.9,
                  rotate: 0
                }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : durations.normal,
                  delay: prefersReducedMotion ? 0 : i * 0.05,
                  ease: easings.bounce,
                }}
              >
                <Star
                  size={20}
                  className="text-primary-orange fill-current"
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
      </div>

      {/* Quote Text with Fade-in Animation */}
      <blockquote className="relative z-10 flex-grow">
        <motion.p
          className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed mb-6 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isActive ? 1 : 0.6,
            y: 0
          }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : durations.slow,
            delay: prefersReducedMotion ? 0 : 0.1,
            ease: easings.smooth,
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.p>
      </blockquote>

      {/* Author Info with Avatar and Slide-up Animation */}
      <motion.div
        className="flex items-center gap-4 pt-6 border-t border-gray-200 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isActive ? 1 : 0.6,
          y: 0
        }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : durations.normal,
          delay: prefersReducedMotion ? 0 : 0.2,
          ease: easings.spring,
        }}
      >
        {/* Avatar */}
        {testimonial.avatar && (
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-primary-teal/20">
            <ImagePresets.Testimonial
              src={testimonial.avatar}
              alt={`${testimonial.author} - ${testimonial.role}`}
              className="rounded-full"
            />
          </div>
        )}

        {/* Author Details */}
        <div className="flex-grow min-w-0">
          <p className="font-semibold text-gray-900 text-lg truncate">
            {testimonial.author}
          </p>
          <p className="text-gray-600 text-sm truncate">
            {testimonial.role}
          </p>
          <p className="text-primary-teal font-medium text-sm flex items-center gap-1 mt-1">
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">{testimonial.location}</span>
          </p>
        </div>
      </motion.div>

      {/* Decorative Gradient Overlay for Depth */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-teal/5 pointer-events-none"
        aria-hidden="true"
      />
    </motion.article>
  );
}
