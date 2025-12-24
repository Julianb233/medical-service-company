"use client";

/**
 * HAPPY HOME CARE - Page Transition Component
 * Award-winning page transitions with Framer Motion
 *
 * Features:
 * - Smooth fade and slide animations between pages
 * - Staggered child animations for enhanced visual hierarchy
 * - Respects user's reduced motion preferences
 * - Works seamlessly with Next.js App Router
 * - Optimized for performance with GPU acceleration
 */

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pageTransition, staggerContainer } from "@/lib/animations/variants";
import { durations } from "@/lib/animations/transitions";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageTransition Component
 *
 * Wraps page content with smooth transition animations.
 * Automatically detects route changes and triggers animations.
 *
 * @example
 * ```tsx
 * <PageTransition>
 *   <YourPageContent />
 * </PageTransition>
 * ```
 */
export function PageTransition({ children, className = "" }: PageTransitionProps) {
  const pathname = usePathname();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Reduced motion variants - simple fade only
  const reducedMotionVariants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.15 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1 }
    },
  };

  const variants = prefersReducedMotion ? reducedMotionVariants : pageTransition;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={className}
        style={{
          // GPU acceleration for better performance
          willChange: "opacity, transform",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * PageTransitionContainer Component
 *
 * Enhanced version with staggered children animations.
 * Use this when you want sections to animate in sequence.
 *
 * @example
 * ```tsx
 * <PageTransitionContainer>
 *   <Section1 />
 *   <Section2 />
 *   <Section3 />
 * </PageTransitionContainer>
 * ```
 */
export function PageTransitionContainer({
  children,
  className = ""
}: PageTransitionProps) {
  const pathname = usePathname();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.15 }
    },
  };

  const containerVariants = prefersReducedMotion
    ? reducedMotionVariants
    : staggerContainer;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className={className}
        style={{
          willChange: "opacity, transform",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * PageTransitionSection Component
 *
 * Individual section within a PageTransitionContainer.
 * Inherits stagger timing from parent container.
 *
 * @example
 * ```tsx
 * <PageTransitionContainer>
 *   <PageTransitionSection>
 *     <Hero />
 *   </PageTransitionSection>
 *   <PageTransitionSection>
 *     <Services />
 *   </PageTransitionSection>
 * </PageTransitionContainer>
 * ```
 */
export function PageTransitionSection({
  children,
  className = ""
}: PageTransitionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const sectionVariants = prefersReducedMotion
    ? ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.01 } },
      } as const)
    : ({
        hidden: {
          opacity: 0,
          y: 20,
          filter: "blur(4px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: durations.slow,
            ease: [0.25, 0.1, 0.25, 1] as const,
          },
        },
      } as const);

  return (
    <motion.div
      variants={sectionVariants}
      className={className}
      style={{
        willChange: "opacity, transform",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * SlidePageTransition Component
 *
 * Alternative page transition with slide effect.
 * Useful for creating a more directional navigation feel.
 *
 * @example
 * ```tsx
 * <SlidePageTransition direction="left">
 *   <YourPageContent />
 * </SlidePageTransition>
 * ```
 */
export function SlidePageTransition({
  children,
  className = "",
  direction = "right" as "left" | "right"
}: PageTransitionProps & { direction?: "left" | "right" }) {
  const pathname = usePathname();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const slideVariants = {
    initial: {
      opacity: 0,
      x: direction === "right" ? 30 : -30,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: durations.slow,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -30 : 30,
      transition: {
        duration: durations.fast,
        ease: [0.4, 0, 0.6, 1] as const,
      },
    },
  };

  const reducedMotionVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.15 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  const variants = prefersReducedMotion ? reducedMotionVariants : slideVariants;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={className}
        style={{
          willChange: "opacity, transform",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;
