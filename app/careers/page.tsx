"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { contactInfo } from "@/lib/content-data";
import {
  heroTextReveal,
  heroSubtitleReveal,
} from "@/lib/animations/variants";
import { useParallax, useStaggerReveal } from "@/lib/animations";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "We offer above-market wages and regular pay increases.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose hours that work for your lifestyle.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Free continuing education and certification opportunities.",
  },
  {
    icon: Shield,
    title: "Benefits Package",
    description: "Health insurance, 401(k), and paid time off available.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    description: "Work with experienced professionals who care.",
  },
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every day.",
  },
];

const openPositions = [
  {
    title: "Registered Nurse (RN)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Provide skilled nursing care to patients in their homes, including assessments, medication management, and care coordination.",
    badge: "High Demand",
  },
  {
    title: "Licensed Vocational Nurse (LVN)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Deliver quality nursing care under RN supervision, including wound care, vital signs, and patient education.",
    badge: "Now Hiring",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Assist patients with daily living activities, personal care, and mobility support.",
    badge: "Multiple Openings",
  },
  {
    title: "Home Health Aide",
    type: "Full-time / Part-time",
    location: "San Diego County",
    description:
      "Provide compassionate personal care, companionship, and household assistance to clients.",
    badge: "Entry Level",
  },
  {
    title: "Care Coordinator",
    type: "Full-time",
    location: "San Diego, CA",
    description:
      "Coordinate care services, manage client relationships, and ensure quality service delivery.",
    badge: "Leadership",
  },
];

const hiringSteps = [
  {
    number: 1,
    title: "Apply Online",
    description: "Submit your application and resume through our website.",
  },
  {
    number: 2,
    title: "Phone Screen",
    description: "Brief call to discuss your experience and goals.",
  },
  {
    number: 3,
    title: "In-Person Interview",
    description: "Meet our team and learn more about the role.",
  },
  {
    number: 4,
    title: "Welcome Aboard",
    description: "Complete onboarding and start your new career!",
  },
];

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(heroRef, { speed: 0.3 });

  const { containerVariants: benefitsContainerVariants, itemVariants: benefitsItemVariants } =
    useStaggerReveal({
      staggerDelay: 0.1,
      direction: "up",
      withScale: true,
    });

  // Job card hover animation
  const jobCardVariants = {
    rest: {
      scale: 1,
      borderColor: "rgba(229, 231, 235, 1)",
    },
    hover: {
      scale: 1.02,
      borderColor: "rgba(20, 184, 166, 0.3)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  // Timeline connector animation
  const timelineConnectorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  // Pulsing CTA button
  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  // Badge animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <>
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="bg-primary-teal text-white section-padding relative overflow-hidden"
      >
        {/* Parallax background decoration */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ transform: parallax.transform }}
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              variants={heroSubtitleReveal}
              initial="hidden"
              animate="visible"
              className="text-xl text-white/90"
            >
              Build a rewarding career making a difference in people&apos;s lives.
              We&apos;re hiring compassionate healthcare professionals across San Diego
              County.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Staggered Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Work With Us?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={benefitsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={benefitsItemVariants}
                whileHover={{ y: -5 }}
                className="flex gap-4"
              >
                <motion.div
                  className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-6 h-6 text-primary-teal" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions with Animated Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            Explore our current openings and find the perfect role for you.
          </motion.p>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={jobCardVariants}
                initial="rest"
                whileHover="hover"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden"
              >
                {/* Position badge */}
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <span className="bg-primary-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {position.badge}
                  </span>
                </motion.div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="pr-24 md:pr-0">
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Apply Now
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Hiring Process
          </motion.h2>

          <div className="relative">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-primary-orange origin-left"
                variants={timelineConnectorVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {hiringSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Step number circle */}
                  <motion.div
                    className="w-12 h-12 bg-primary-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring" as const,
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Pulsing Button */}
      <section className="section-padding bg-primary-orange text-white">
        <div className="container-custom text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join our team of dedicated healthcare professionals and build a
            meaningful career helping others.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              variants={pulseVariants}
              initial="initial"
              animate="pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-white text-primary-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Call {contactInfo.phone}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            hiringOrganization: {
              "@type": "MedicalBusiness",
              name: "Happy Home Care",
              sameAs: "https://happyhomecare.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                addressCountry: "US",
              },
            },
            employmentType: ["FULL_TIME", "PART_TIME"],
            industry: "Healthcare",
          }),
        }}
      />
    </>
  );
}
