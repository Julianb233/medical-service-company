"use client";

import { useRef } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useParallax, useMotionProps } from "@/lib/animations";

interface LocationHeroProps {
  locationName: string;
  description: string;
}

const heroTextVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 1.2,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.6, 0.32, 1.6] as const,
      delay: 0.5 + i * 0.1,
    },
  }),
};

const buttonHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 2px 4px -1px rgba(0,0,0,0.1)",
    y: 0,
  },
};

export default function LocationHero({ locationName, description }: LocationHeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { transform } = useParallax(parallaxRef, { speed: 0.3 });
  const motionProps = useMotionProps();

  return (
    <section className="relative bg-brand-dark py-14 md:py-20 overflow-hidden">
      {/* Animated background pattern with parallax */}
      <motion.div
        ref={parallaxRef}
        className="absolute inset-0 opacity-10"
        style={{ transform }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.35) 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Main heading with dramatic reveal */}
          <motion.div
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            {...motionProps}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Home Health Care in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-orange-light">
                {locationName}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle with blur reveal */}
          <motion.p
            className="text-xl md:text-2xl text-white/85 mb-8 leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            {...motionProps}
          >
            {description}
          </motion.p>

          {/* CTA buttons with staggered elastic entrance */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="tel:(619) 555-0100"
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              {...motionProps}
            >
              <motion.div
                variants={buttonHoverVariants}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: (619) 555-0100
              </motion.div>
            </motion.a>

            <Link href="/contact">
              <motion.div
                custom={1}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                {...motionProps}
              >
                <motion.div
                  variants={buttonHoverVariants}
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Request Consultation
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Animated accent line */}
          <motion.div
            className="mt-12 h-1 bg-gradient-to-r from-primary-orange via-orange-light to-transparent rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.8,
            }}
          />
        </div>
      </div>
    </section>
  );
}
