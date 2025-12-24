"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import { useSimpleParallax } from "@/lib/animations/hooks/useParallax";
import { useStaggerReveal } from "@/lib/animations/hooks/useStaggerReveal";
import { heroSubtitleReveal } from "@/lib/animations/variants";
import { easings } from "@/lib/animations/easings";
import { durations } from "@/lib/animations/transitions";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const backgroundRef = useRef<HTMLDivElement>(null);

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

  // Split headline into words for animation
  const headlineText = "San Diego & Los Angeles Home Health Care";
  const words = useMemo(() => headlineText.split(" "), []);

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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns effect and parallax */}
      <motion.div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-teal-dark via-primary-teal to-teal-light"
        style={{ y: bgParallaxY }}
      >
        {/* Image overlay with Ken Burns effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundBlendMode: "overlay",
            transformOrigin: "center center",
          }}
          animate={kenBurnsAnimation}
        />
      </motion.div>

      {/* Parallax overlay for depth */}
      <motion.div
        className="absolute inset-0 overlay-dark"
        style={{ y: overlayParallaxY }}
      />

      {/* Gradient accent overlay with parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent"
        style={{ y: bgParallaxY * 0.5 }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        {/* Tagline with subtle entrance */}
        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base uppercase tracking-widest mb-4 text-primary-orange font-semibold"
        >
          California Home Care You Can Trust
        </motion.p>

        {/* Main headline with word-by-word reveal */}
        <h1
          className={cn(
            "font-accent font-bold tracking-tight mb-6",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "max-w-5xl mx-auto"
          )}
          style={{ perspective: "1000px" }}
        >
          {words.map((word, i) => (
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
            "text-lg sm:text-xl md:text-2xl mb-10",
            "max-w-3xl mx-auto leading-relaxed",
            "text-gray-100"
          )}
        >
          The best solutions for affordable and trustworthy home care. Free in-home needs evaluation available.
        </motion.p>

        {/* CTA Buttons with stagger + scale */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className={cn(
                "block bg-primary-orange hover:bg-orange-dark",
                "text-white font-semibold",
                "px-8 py-4 rounded-lg",
                "transition-all duration-300",
                "transform hover:scale-105 hover:shadow-2xl",
                "text-base sm:text-lg",
                "w-full sm:w-auto text-center",
                "min-w-[200px]",
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
                "font-semibold px-8 py-4 rounded-lg",
                "transition-all duration-300",
                "transform hover:scale-105",
                "text-base sm:text-lg",
                "w-full sm:w-auto text-center",
                "min-w-[200px]"
              )}
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: easings.spring }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
        >
          {/* Licensed badge */}
          <motion.div
            animate={floatingAnimation}
            className="flex items-center gap-2 text-sm sm:text-base text-white/90"
          >
            <motion.div
              animate={pulseGlowAnimation}
              className="w-12 h-12 rounded-full bg-primary-orange/20 border-2 border-primary-orange flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-primary-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </motion.div>
            <span className="font-semibold">CA Licensed</span>
          </motion.div>

          {/* Insured badge */}
          <motion.div
            animate={floatingAnimation ? { ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } } : undefined}
            className="flex items-center gap-2 text-sm sm:text-base text-white/90"
          >
            <motion.div
              animate={pulseGlowAnimation}
              className="w-12 h-12 rounded-full bg-primary-teal/20 border-2 border-white flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </motion.div>
            <span className="font-semibold">Fully Insured</span>
          </motion.div>

          {/* 24/7 Support badge */}
          <motion.div
            animate={floatingAnimation ? { ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } } : undefined}
            className="flex items-center gap-2 text-sm sm:text-base text-white/90"
          >
            <motion.div
              animate={pulseGlowAnimation}
              className="w-12 h-12 rounded-full bg-primary-orange/20 border-2 border-primary-orange flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-primary-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <span className="font-semibold">24/7 Support</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: easings.spring }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
