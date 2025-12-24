"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import { useSimpleParallax } from "@/lib/animations/hooks/useParallax";
import { useStaggerReveal } from "@/lib/animations/hooks/useStaggerReveal";
import { heroSubtitleReveal } from "@/lib/animations/variants";
import { easings } from "@/lib/animations/easings";
import { durations } from "@/lib/animations/transitions";

// Hero carousel images
const HERO_IMAGES = [
  {
    src: "/images/hero/san-diego-skyline.jpg",
    alt: "San Diego skyline with beautiful waterfront"
  },
  {
    src: "/images/hero/family-with-senior.jpg",
    alt: "Happy family with senior loved one"
  },
  {
    src: "/images/hero/caregiver-caring.jpg",
    alt: "Professional caregiver providing compassionate care"
  },
  {
    src: "/images/hero/happy-senior-home.jpg",
    alt: "Senior smiling at home with caregiver"
  }
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel every 5.5 seconds
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Parallax for background layers
  const bgParallaxY = useSimpleParallax(0.15);
  const overlayParallaxY = useSimpleParallax(0.25);

  // Stagger reveal for CTA buttons
  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.15,
    initialDelay: 0.6,
    duration: 0.6,
    yOffset: 40,
    withScale: true,
    initialScale: 0.85,
  });

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

  // Headlines (mobile version is shorter to avoid cramped wrapping)
  const desktopHeadlineText = "San Diego & Los Angeles Home Health Care";
  const desktopWords = useMemo(() => desktopHeadlineText.split(" "), []);

  // Word reveal variant
  const wordReveal = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
      filter: "blur(8px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: durations.slower,
        delay: 0.3 + (i * 0.08),
        ease: easings.dramatic,
      },
    }),
  };

  // Floating animation for trust badges
  const floatingAnimation = prefersReducedMotion
    ? undefined
    : {
        y: [0, -8, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  // Pulsing glow animation
  const pulseGlowAnimation = prefersReducedMotion
    ? undefined
    : {
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.05, 1],
        transition: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="relative h-[84svh] sm:h-[70vh] min-h-[560px] sm:min-h-[600px] max-h-[860px] flex items-end sm:items-center justify-center overflow-hidden pb-10 sm:pb-0">
      {/* Carousel Background Images */}
      <div ref={backgroundRef} className="absolute inset-0">
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
                backgroundImage: `url('${HERO_IMAGES[currentImageIndex].src}')`,
                transformOrigin: "center center",
              }}
              animate={kenBurnsAnimation}
            />

            {/* Lighter overlay: mostly clear at top, stronger behind text */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/55 via-teal-700/25 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Additional gradient overlays for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"
        style={{ y: bgParallaxY * 0.5 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
        style={{ y: overlayParallaxY }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Mobile content panel to keep layout clean */}
        <div className="mx-auto w-full max-w-2xl sm:max-w-none">
        {/* Tagline with subtle entrance */}
        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base uppercase tracking-widest mb-3 sm:mb-4 text-primary-orange font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          California Home Care You Can Trust
        </motion.p>

        {/* Mobile headline (shorter, less jumbled) */}
        <motion.h1
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className={cn(
            "sm:hidden font-accent font-bold tracking-tight",
            "text-4xl leading-tight",
            "mb-3 drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]"
          )}
        >
          Home Health Care
        </motion.h1>
        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className={cn(
            "sm:hidden",
            "text-lg font-semibold text-white/95",
            "mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          )}
        >
          San Diego &amp; Los Angeles
        </motion.p>

        {/* Desktop headline with word-by-word reveal */}
        <h1
          className={cn(
            "hidden sm:block font-accent font-bold tracking-tight mb-6",
            "text-5xl md:text-6xl lg:text-7xl",
            "max-w-5xl mx-auto",
            "leading-tight drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]"
          )}
          style={{ perspective: "1000px" }}
        >
          {desktopWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordReveal}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3 md:mr-4"
              style={{ transformStyle: "preserve-3d" }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle with blur reveal */}
        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className={cn(
            "text-base sm:text-xl md:text-2xl mb-6 sm:mb-10",
            "max-w-3xl mx-auto leading-relaxed",
            "text-white font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          )}
        >
          The best solutions for affordable and trustworthy home care. Free in-home needs evaluation available.
        </motion.p>

        {/* CTA Buttons with stagger + scale */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className={cn(
                "block bg-primary-orange hover:bg-orange-dark",
                "text-white font-semibold",
                "px-6 py-3 sm:px-8 sm:py-4 rounded-lg",
                "transition-all duration-300",
                "transform hover:scale-105 hover:shadow-2xl",
                "text-base sm:text-lg",
                "w-full sm:w-auto text-center",
                "sm:min-w-[200px] max-w-sm",
                "relative overflow-hidden group"
              )}
            >
              {/* Button shine effect */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              )}
              <span className="relative z-10">Schedule Free Evaluation</span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/services"
              className={cn(
                "block border-2 border-white text-white",
                "hover:bg-white hover:text-primary-teal",
                "font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg",
                "transition-all duration-300",
                "transform hover:scale-105",
                "text-base sm:text-lg",
                "w-full sm:w-auto text-center",
                "sm:min-w-[200px] max-w-sm"
              )}
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust badges (simple on mobile; fuller on desktop) */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-2">
          <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold">
            Licensed
          </span>
          <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold">
            Insured
          </span>
          <span className="px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white text-sm font-semibold">
            24/7 Support
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: easings.spring }}
          className="hidden sm:flex flex-row flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          <div className="flex items-center gap-3 text-white font-semibold">
            <div className="w-12 h-12 rounded-full bg-primary-orange/20 border-2 border-primary-orange flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span>CA Licensed</span>
          </div>
          <div className="flex items-center gap-3 text-white font-semibold">
            <div className="w-12 h-12 rounded-full bg-primary-teal/20 border-2 border-white flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center gap-3 text-white font-semibold">
            <div className="w-12 h-12 rounded-full bg-primary-orange/20 border-2 border-primary-orange flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex gap-3">
          {HERO_IMAGES.map((_, index) => (
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

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: easings.spring }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-center"
        >
          <div className="mb-2 text-sm uppercase tracking-wider opacity-80">Scroll Down</div>
          <motion.svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={prefersReducedMotion ? {} : {
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
