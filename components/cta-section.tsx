"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/content-data";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
// import { easings } from "@/lib/animations/easings";

export function CTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-primary-teal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
          >
            Contact us today for a free consultation. Our care coordinators are
            available 24/7 to answer your questions and help you find the right
            care solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="/contact"
                className={cn(
                  "btn-primary flex items-center justify-center gap-2",
                  "text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4",
                  "relative overflow-hidden group",
                  "w-full sm:w-auto min-w-[280px] sm:min-w-[300px]"
                )}
              >
                {/* Pulsing glow effect */}
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  animate={prefersReducedMotion ? {} : {
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Schedule a Consultation</span>
                <motion.span
                  className="relative z-10"
                  animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>

            <a
              href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
              className={cn(
                "flex items-center justify-center gap-2",
                "text-white text-base sm:text-lg font-semibold",
                "border-2 border-white/50 rounded-lg",
                "px-6 sm:px-8 py-3.5 sm:py-4",
                "hover:bg-white/10 transition-colors",
                "w-full sm:w-auto min-w-[280px] sm:min-w-[300px]",
                "touch-manipulation"
              )}
            >
              <Phone className="w-5 h-5" />
              <span className="truncate">{contactInfo.phone}</span>
            </a>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center text-white/80 px-4 text-sm sm:text-base"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="truncate">{contactInfo.email}</span>
            </a>

            <span className="hidden md:block">|</span>

            <p className="text-center">
              {contactInfo.address.street}, {contactInfo.address.city},{" "}
              {contactInfo.address.state} {contactInfo.address.zip}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
