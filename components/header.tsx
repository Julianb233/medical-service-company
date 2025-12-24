"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navigation, contactInfo } from "@/lib/content-data";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";
import { useMagneticButton, getMagneticStyle } from "@/lib/animations/hooks/useMagneticButton";
import {
  navbarHide,
  dropdownMenu,
  staggerContainer,
  fadeInDown
} from "@/lib/animations/variants";
import { easings } from "@/lib/animations/easings";
import { durations } from "@/lib/animations/transitions";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  const prefersReducedMotion = useReducedMotion();
  const callButtonRef = useRef<HTMLAnchorElement | null>(null);
  const [magneticValue, magneticHandlers] = useMagneticButton(callButtonRef, { strength: 8 });
  const { scrollY } = useScroll();

  const lastScrollY = useRef(0);

  // Handle scroll for hide/show and background transition
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;

    // Update scrolled state for background transition
    setScrolled(currentScrollY > 20);

    // Hide/show header based on scroll direction (Apple-style)
    if (!prefersReducedMotion) {
      // Only hide if scrolled past header height and scrolling down
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
    }

    lastScrollY.current = currentScrollY;
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <motion.header
      variants={navbarHide}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        scrolled
          ? "shadow-lg"
          : "backdrop-blur-sm"
      )}
      style={{
        backgroundColor: scrolled ? "#0D9488" : "rgba(13, 148, 136, 0.95)",
        transition: scrolled
          ? "background-color 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)"
          : "background-color 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)"
      }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-white">Happy</span>
              <span className="text-2xl font-bold text-white">Home</span>
              <span className="text-2xl font-bold text-primary-orange">Care</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <motion.button
                      className="flex items-center space-x-1 text-white hover:text-white font-semibold relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      whileHover={prefersReducedMotion ? {} : { y: -1 }}
                      transition={{ duration: durations.fast, ease: easings.spring }}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: durations.fast, ease: easings.snappy }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      {/* Hover underline */}
                      <motion.span
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-orange"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: durations.normal, ease: easings.spring }}
                      />
                    </motion.button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          variants={dropdownMenu}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-2xl overflow-hidden border border-white/10"
                          style={{ backgroundColor: "#0D9488" }}
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-2">
                            {item.children.map((child) => (
                              <motion.div
                                key={child.name}
                                whileHover={prefersReducedMotion ? {} : { x: 4 }}
                                transition={{ duration: durations.fast }}
                              >
                                <Link
                                  href={child.href}
                                  className="block px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-colors"
                                >
                                  {child.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div
                    className="relative"
                    whileHover={prefersReducedMotion ? {} : { y: -1 }}
                    transition={{ duration: durations.fast, ease: easings.spring }}
                  >
                    {item.href === "/app" ? (
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-flex items-center",
                          "px-4 py-2 rounded-full",
                          "bg-primary-orange text-white",
                          "font-bold shadow-md",
                          "hover:bg-orange-dark transition-colors"
                        )}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white hover:text-white font-semibold relative"
                      >
                        {item.name}
                        {/* Hover underline */}
                        <motion.span
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-orange"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: durations.normal, ease: easings.spring }}
                        />
                      </Link>
                    )}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Call Now Button with Magnetic Effect */}
            <motion.a
              ref={callButtonRef}
              href={`tel:${contactInfo.phone}`}
              className="btn-primary flex items-center space-x-2 relative"
              animate={getMagneticStyle(magneticValue)}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              {...magneticHandlers}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-white transition-colors"
            aria-label="Toggle menu"
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Curtain Style */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: durations.fast }}
              className="fixed inset-0 bg-black/60 lg:hidden"
              style={{ top: "80px" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Curtain Panel - Slide from Top */}
            <motion.div
              initial={{
                clipPath: "inset(0% 0% 100% 0%)",
                opacity: 0
              }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1
              }}
              exit={{
                clipPath: "inset(0% 0% 100% 0%)",
                opacity: 0
              }}
              transition={{
                duration: prefersReducedMotion ? durations.instant : durations.moderate,
                ease: easings.dramatic
              }}
              className="fixed top-20 right-0 bottom-0 w-80 shadow-2xl lg:hidden overflow-y-auto border-l border-white/10"
              style={{ backgroundColor: "#0D9488" }}
            >
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="p-6 space-y-6"
              >
                {/* Call Button in Mobile Menu */}
                <motion.div variants={fadeInDown}>
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </motion.a>
                </motion.div>

                {/* Navigation Links with Stagger */}
                <motion.nav
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={fadeInDown}
                      custom={index}
                    >
                      {item.children ? (
                        <div>
                          <motion.button
                            onClick={() => handleDropdownToggle(item.name)}
                            className="flex items-center justify-between w-full text-left text-white font-semibold text-lg"
                            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                          >
                            <span>{item.name}</span>
                            <motion.div
                              animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: durations.fast, ease: easings.snappy }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </motion.button>
                          <AnimatePresence>
                            {openDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: prefersReducedMotion ? durations.instant : durations.normal,
                                  ease: easings.snappy
                                }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  variants={staggerContainer}
                                  initial="hidden"
                                  animate="visible"
                                  className="mt-2 ml-4 space-y-2"
                                >
                                  {item.children.map((child, childIndex) => (
                                    <motion.div
                                      key={child.name}
                                      variants={fadeInDown}
                                      custom={childIndex}
                                    >
                                      <Link
                                        href={child.href}
                                        className="block py-2 text-white hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {child.name}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block font-semibold text-lg transition-colors",
                            item.href === "/app"
                              ? "px-4 py-3 rounded-xl bg-primary-orange text-white font-bold hover:bg-orange-dark"
                              : "text-white hover:text-white"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.nav>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  variants={fadeInDown}
                  className="pt-6 border-t border-white/10"
                >
                  <p className="text-sm text-white mb-2">Contact Us</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-white transition-colors text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
