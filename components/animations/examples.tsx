/**
 * HAPPY HOME CARE - Animation Examples
 * Demonstrating best practices for using the animation components
 */

"use client";

import {
  PageTransition,
  PageTransitionContainer,
  PageTransitionSection,
  SlidePageTransition,
  useLenis,
  ScrollToTop,
  SmoothScrollSection,
} from "@/components/animations";
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  slideUp,
  staggerContainer,
  buttonWithShadow,
} from "@/lib/animations/variants";

// ============================================================================
// EXAMPLE 1: Basic Page Transition
// ============================================================================

export function BasicPageExample() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Welcome to Happy Home Care</h1>
        <p className="text-lg text-gray-600">
          This page will smoothly transition when navigating.
        </p>
      </div>
    </PageTransition>
  );
}

// ============================================================================
// EXAMPLE 2: Staggered Section Animations
// ============================================================================

export function StaggeredPageExample() {
  return (
    <PageTransitionContainer>
      {/* Hero Section - animates first */}
      <PageTransitionSection>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional home care services in San Diego
            </p>
          </div>
        </section>
      </PageTransitionSection>

      {/* Services Section - animates second */}
      <PageTransitionSection>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service cards would go here */}
            </div>
          </div>
        </section>
      </PageTransitionSection>

      {/* CTA Section - animates third */}
      <PageTransitionSection>
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold">
              Contact Us Today
            </button>
          </div>
        </section>
      </PageTransitionSection>
    </PageTransitionContainer>
  );
}

// ============================================================================
// EXAMPLE 3: Programmatic Smooth Scroll
// ============================================================================

export function SmoothScrollExample() {
  const { scrollTo } = useLenis();

  const scrollToSection = (id: string) => {
    scrollTo(`#${id}`, {
      offset: -80, // Account for fixed header
      duration: 1.5,
    });
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 py-4">
        <div className="container mx-auto flex gap-6 justify-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-blue-600 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Sections */}
      <SmoothScrollSection id="home">
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Home Section</h1>
        </div>
      </SmoothScrollSection>

      <SmoothScrollSection id="about">
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-4xl font-bold">About Section</h2>
        </div>
      </SmoothScrollSection>

      <SmoothScrollSection id="services">
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl font-bold">Services Section</h2>
        </div>
      </SmoothScrollSection>

      <SmoothScrollSection id="contact">
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-4xl font-bold">Contact Section</h2>
        </div>
      </SmoothScrollSection>

      {/* Scroll to top button */}
      <ScrollToTop
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        showAt={400}
      />
    </div>
  );
}

// ============================================================================
// EXAMPLE 4: Slide Page Transition
// ============================================================================

export function SlidePageExample() {
  return (
    <SlidePageTransition direction="right">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Slide Transition</h1>
        <p className="text-lg text-gray-600">
          This page slides in from the right when navigating.
        </p>
      </div>
    </SlidePageTransition>
  );
}

// ============================================================================
// EXAMPLE 5: Custom Stagger Grid
// ============================================================================

export function CustomStaggerExample() {
  const services = [
    { title: "Skilled Nursing", icon: "🏥" },
    { title: "Personal Care", icon: "❤️" },
    { title: "Respite Care", icon: "🛏️" },
    { title: "Hospice Care", icon: "🕊️" },
    { title: "24/7 Support", icon: "📞" },
    { title: "Licensed Staff", icon: "✅" },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}

// ============================================================================
// EXAMPLE 6: Interactive Button with Animation
// ============================================================================

export function AnimatedButtonExample() {
  const { scrollTo } = useLenis();

  return (
    <motion.button
      variants={buttonWithShadow}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={() => scrollTo("#contact", { offset: -80 })}
      className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold"
    >
      Get Started
    </motion.button>
  );
}

// ============================================================================
// EXAMPLE 7: Hero Section with Multiple Animations
// ============================================================================

export function HeroWithAnimationsExample() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold mb-6"
          >
            Happy Home Care
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-2xl mb-8 opacity-90"
          >
            Compassionate care in the comfort of your home
          </motion.p>

          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              variants={buttonWithShadow}
              whileHover="hover"
              whileTap="tap"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              variants={buttonWithShadow}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

// ============================================================================
// EXAMPLE 8: Accessible Reduced Motion Example
// ============================================================================

export function ReducedMotionExample() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Accessibility Note</h3>
          <p className="text-gray-700">
            All animations on this page respect your system&apos;s &quot;Reduce Motion&quot;
            preference. If you have reduced motion enabled in your operating
            system settings, animations will be simplified to simple fades for
            better accessibility and comfort.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
