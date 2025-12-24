/**
 * HAPPY HOME CARE - Animation Easings
 * Custom easing functions for Framer Motion
 */

// Standard easings
export const easings = {
  // Basic
  linear: [0, 0, 1, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,

  // Custom expressive easings
  spring: [0.22, 1, 0.36, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
  snappy: [0.19, 1, 0.22, 1] as const,
  dramatic: [0.6, 0.01, 0.05, 0.95] as const,
  elastic: [0.68, -0.6, 0.32, 1.6] as const,
  expoOut: [0.16, 1, 0.3, 1] as const,
  backOut: [0.34, 1.56, 0.64, 1] as const,

  // Specific use cases
  heroReveal: [0.6, 0.01, 0.05, 0.95] as const,
  cardHover: [0.22, 1, 0.36, 1] as const,
  menuOpen: [0.19, 1, 0.22, 1] as const,
  menuClose: [0.4, 0, 0.6, 1] as const,
  buttonPress: [0.4, 0, 0.2, 1] as const,
  pageTransition: [0.25, 0.1, 0.25, 1] as const,
} as const;

// Spring physics configurations
export const springs = {
  // Gentle - subtle movements
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  },

  // Default - balanced
  default: {
    type: "spring" as const,
    stiffness: 300,
    damping: 24,
    mass: 0.5,
  },

  // Bouncy - playful
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
    mass: 0.5,
  },

  // Stiff - snappy
  stiff: {
    type: "spring" as const,
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  },

  // Slow - dramatic
  slow: {
    type: "spring" as const,
    stiffness: 80,
    damping: 20,
    mass: 1,
  },

  // Quick - fast response
  quick: {
    type: "spring" as const,
    stiffness: 600,
    damping: 30,
    mass: 0.3,
  },
} as const;

export type EasingName = keyof typeof easings;
export type SpringName = keyof typeof springs;
