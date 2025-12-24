"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-dark via-primary-teal to-teal-light">
        {/* SVG pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/caregiver-hero.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 overlay-dark" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm sm:text-base uppercase tracking-widest mb-4 text-primary-orange font-semibold"
        >
          California Home Care You Can Trust
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={cn(
            "font-accent font-bold tracking-tight mb-6",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "max-w-5xl mx-auto"
          )}
        >
          San Diego &amp; Los Angeles Home Health Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={cn(
            "text-lg sm:text-xl md:text-2xl mb-10",
            "max-w-3xl mx-auto leading-relaxed",
            "text-gray-100"
          )}
        >
          The best solutions for affordable and trustworthy home care. Free in-home needs evaluation available.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className={cn(
              "bg-primary-orange hover:bg-orange-dark",
              "text-white font-semibold",
              "px-8 py-4 rounded-lg",
              "transition-all duration-300",
              "transform hover:scale-105 hover:shadow-2xl",
              "text-base sm:text-lg",
              "w-full sm:w-auto text-center",
              "min-w-[200px]"
            )}
          >
            Schedule Free Evaluation
          </Link>

          <Link
            href="/services"
            className={cn(
              "border-2 border-white text-white",
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-center"
        >
          <div className="mb-2 text-sm uppercase tracking-wider">Scroll Down</div>
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
