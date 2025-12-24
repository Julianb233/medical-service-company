/**
 * HAPPY HOME CARE - Animation Variants
 * Reusable Framer Motion animation variants for award-winning effects
 */

import { Variants } from "framer-motion";
import { easings } from "./easings";
import { durations, stagger } from "./transitions";

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
  exit: {
    opacity: 0,
    transition: { duration: durations.fast },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easings.bounce },
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.elastic,
    },
  },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slower, ease: easings.spring },
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slower, ease: easings.spring },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

// ============================================================================
// 3D / PERSPECTIVE VARIANTS
// ============================================================================

export const flipReveal: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -15,
    y: 50,
    transformPerspective: 1200,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: durations.slower, ease: easings.dramatic },
  },
};

export const card3D: Variants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
  },
  hover: {
    rotateX: -5,
    rotateY: 5,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
    transition: { duration: durations.fast, ease: easings.cardHover },
  },
};

export const tiltOnHover: Variants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: durations.fast, ease: easings.spring },
  },
};

// ============================================================================
// REVEAL VARIANTS (Clip-path)
// ============================================================================

export const revealFromLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: durations.slower, ease: easings.dramatic },
  },
};

export const revealFromRight: Variants = {
  hidden: { clipPath: "inset(0 0 0 100%)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: durations.slower, ease: easings.dramatic },
  },
};

export const revealFromBottom: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: durations.slower, ease: easings.dramatic },
  },
};

// ============================================================================
// HERO VARIANTS
// ============================================================================

export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: durations.slowest, ease: easings.dramatic },
  },
};

export const heroSubtitleReveal: Variants = {
  hidden: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: durations.slower, ease: easings.smooth, delay: 0.3 },
  },
};

export const heroCTAReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: durations.slow, ease: easings.elastic, delay: 0.5 },
  },
};

// ============================================================================
// STAGGER CONTAINER VARIANTS
// ============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.fast,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.slow,
      delayChildren: 0.15,
    },
  },
};

// Grid stagger (for 2D layouts)
export const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ============================================================================
// PAGE TRANSITION VARIANTS
// ============================================================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    },
  },
};

// Curtain reveal (mobile menu style)
export const curtainReveal: Variants = {
  hidden: {
    clipPath: "circle(0% at 100% 0)",
  },
  visible: {
    clipPath: "circle(150% at 100% 0)",
    transition: {
      duration: durations.slower,
      ease: easings.dramatic,
    },
  },
  exit: {
    clipPath: "circle(0% at 100% 0)",
    transition: {
      duration: durations.normal,
      ease: easings.easeIn,
    },
  },
};

// ============================================================================
// BUTTON / INTERACTIVE VARIANTS
// ============================================================================

export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: durations.fast, ease: easings.spring },
  },
  tap: {
    scale: 0.98,
    transition: { duration: durations.instant },
  },
};

export const buttonWithShadow: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
    y: -2,
    transition: { duration: durations.fast, ease: easings.spring },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 2px 4px -1px rgba(0,0,0,0.1)",
    y: 0,
  },
};

export const iconHover: Variants = {
  rest: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, 0],
    scale: 1.1,
    transition: { duration: durations.normal },
  },
};

export const arrowHover: Variants = {
  rest: { x: 0 },
  hover: {
    x: 8,
    transition: { duration: durations.fast, ease: easings.elastic },
  },
};

// ============================================================================
// NAVBAR / HEADER VARIANTS
// ============================================================================

export const navbarHide: Variants = {
  visible: {
    y: 0,
    transition: { duration: durations.normal, ease: easings.smooth },
  },
  hidden: {
    y: "-100%",
    transition: { duration: durations.fast, ease: easings.easeIn },
  },
};

export const dropdownMenu: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    originY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: durations.fast, ease: easings.snappy },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: durations.instant },
  },
};

export const mobileMenu: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: durations.normal, ease: easings.spring },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: durations.fast, ease: easings.easeIn },
  },
};

// ============================================================================
// STAT / COUNTER VARIANTS
// ============================================================================

export const statReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const underlineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: durations.moderate, ease: easings.spring, delay: 0.3 },
  },
};

// ============================================================================
// TESTIMONIAL / CAROUSEL VARIANTS
// ============================================================================

export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easings.spring },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: durations.normal },
  }),
};

export const carouselCard3D: Variants = {
  inactive: {
    scale: 0.85,
    rotateY: 15,
    opacity: 0.5,
    z: -100,
  },
  active: {
    scale: 1,
    rotateY: 0,
    opacity: 1,
    z: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

// ============================================================================
// FORM VARIANTS
// ============================================================================

export const formFieldReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easings.spring },
  },
};

export const formSuccess: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: easings.bounce },
  },
};

export const formError: Variants = {
  initial: { x: 0 },
  shake: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: durations.moderate },
  },
};

// ============================================================================
// FOOTER VARIANTS
// ============================================================================

export const footerColumn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: easings.spring },
  },
};

export const socialIcon: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: durations.normal, ease: easings.bounce },
  },
  hover: {
    scale: 1.2,
    transition: { duration: durations.fast },
  },
};

// ============================================================================
// REDUCED MOTION VARIANTS
// ============================================================================

// Simple fade for reduced motion preference
export const reducedMotionFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01 },
  },
};

// Helper to get reduced motion variant
export const getReducedMotionVariant = (
  variant: Variants,
  prefersReducedMotion: boolean
): Variants => {
  return prefersReducedMotion ? reducedMotionFade : variant;
};
