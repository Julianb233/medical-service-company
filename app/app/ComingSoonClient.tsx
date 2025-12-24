"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Building2,
  Bell,
  FileText,
  CheckCircle2,
  Smartphone,
  Mail,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  heroTextReveal,
  heroSubtitleReveal,
  heroCTAReveal,
} from "@/lib/animations/variants";
import { useParallax } from "@/lib/animations/hooks/useParallax";
import { use3DTilt } from "@/lib/animations/hooks/use3DTilt";
import { useReducedMotion } from "@/lib/animations/hooks/useReducedMotion";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: "teal" | "orange";
}

const features: Feature[] = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "See when your caregiver is on the way with live GPS tracking and ETA updates.",
    color: "teal",
  },
  {
    icon: Calendar,
    title: "Appointment Updates",
    description:
      "Get instant notifications about appointment status, delays, and changes.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Family Connection",
    description:
      "Keep family members in the loop with real-time updates and care summaries.",
    color: "teal",
  },
  {
    icon: Building2,
    title: "Healthcare Integration",
    description:
      "Seamlessly share updates with doctors and healthcare providers.",
    color: "orange",
  },
  {
    icon: Bell,
    title: "Medication Reminders",
    description:
      "Never miss a dose with smart medication tracking and alerts.",
    color: "teal",
  },
  {
    icon: FileText,
    title: "Care Notes",
    description:
      "Access detailed visit summaries and care notes after each appointment.",
    color: "orange",
  },
];

// Feature Card Component
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  const { handleMouseMove, handleMouseLeave, style } = use3DTilt({
    maxTilt: 8,
    scale: 1.03,
    perspective: 1200,
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
      onMouseLeave={prefersReducedMotion ? undefined : handleMouseLeave}
      style={prefersReducedMotion ? {} : style}
      className="h-full"
    >
      <div className="card card-elevated p-8 h-full transform-gpu group hover:shadow-xl transition-shadow">
        <motion.div
          className={`w-16 h-16 ${
            feature.color === "teal" ? "bg-primary-teal/10" : "bg-accent-orange/10"
          } rounded-full flex items-center justify-center mb-6 group-hover:${
            feature.color === "teal" ? "bg-primary-teal/20" : "bg-accent-orange/20"
          } transition-colors`}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon
            className={`w-8 h-8 ${
              feature.color === "teal" ? "text-primary-teal" : "text-accent-orange"
            }`}
          />
        </motion.div>

        <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
}

// iPhone Mockup Component
function IPhoneMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative max-w-sm mx-auto"
      variants={scaleIn}
      whileHover={
        prefersReducedMotion
          ? {}
          : {
              scale: 1.02,
              transition: { duration: 0.3 },
            }
      }
    >
      {/* Floating notification badges - hidden on small mobile screens */}
      <motion.div
        className="absolute -left-2 sm:-left-4 top-16 sm:top-20 z-10 hidden xs:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3 max-w-[140px] sm:max-w-[180px]">
          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
              <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-accent-orange" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-gray-900 leading-tight">
                Sarah is 5 min away
              </div>
              <div className="text-[9px] sm:text-xs text-gray-500 leading-tight">Just now</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 sm:-right-4 top-28 sm:top-32 z-10 hidden xs:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3 max-w-[140px] sm:max-w-[180px]">
          <div className="flex items-start gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-teal" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-gray-900 leading-tight">
                Visit completed
              </div>
              <div className="text-[9px] sm:text-xs text-gray-500 leading-tight">View summary</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* iPhone Frame - responsive sizing */}
      <div className="relative mx-auto w-[260px] sm:w-[300px] bg-gray-900 rounded-[40px] sm:rounded-[50px] shadow-2xl p-2.5 sm:p-3 border-[6px] sm:border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-6 sm:h-7 bg-gray-900 rounded-b-2xl sm:rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-primary-teal to-teal-600 rounded-[32px] sm:rounded-[40px] overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 sm:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4 text-white text-[10px] sm:text-xs">
            <span>9:41</span>
            <div className="flex gap-0.5 sm:gap-1">
              <div className="w-3 sm:w-4 h-2.5 sm:h-3 border border-white rounded-sm" />
              <div className="w-0.5 sm:w-1 h-2.5 sm:h-3 bg-white rounded-sm" />
            </div>
          </div>

          {/* App content preview - properly scaled to look like actual iPhone content */}
          <div className="px-3 pt-1.5">
            <div className="text-white text-center mb-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Smartphone className="w-5 h-5 mx-auto mb-1" />
                <h2 className="text-xs font-bold mb-0.5">Welcome</h2>
                <p className="text-teal-100 text-[9px]">Your care, connected</p>
              </motion.div>
            </div>

            {/* Mock appointment card */}
            <motion.div
              className="bg-white rounded-lg p-2 shadow-xl mb-2"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs">
                  👨‍⚕️
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-semibold text-gray-900 leading-tight">
                    Today&apos;s Appointment
                  </div>
                  <div className="text-[8px] text-gray-500 leading-tight">2:00 PM - 3:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[8px] text-primary-teal font-medium">
                <motion.div
                  className="w-1 h-1 bg-primary-teal rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Caregiver on the way
              </div>
            </motion.div>

            {/* Mock buttons */}
            <div className="grid grid-cols-2 gap-1.5">
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-md p-1.5 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="w-3.5 h-3.5 mx-auto mb-0.5 text-white" />
                <div className="text-[8px] text-white">Track</div>
              </motion.div>
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-md p-1.5 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Users className="w-3.5 h-3.5 mx-auto mb-0.5 text-white" />
                <div className="text-[8px] text-white">Family</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Email Form Component
function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading}
              className="w-full pl-12 pr-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300 text-lg bg-white shadow-lg disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </span>
            ) : (
              "Notify Me"
            )}
          </button>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
          <p className="text-white/90">
            We&apos;ll send you an email as soon as HappyHomeCare Connect is ready.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ComingSoonClient() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { transform } = useParallax(heroRef, { speed: 0.3 });

  return (
    <>
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-white via-teal-50 to-teal-100 section-padding overflow-hidden"
      >
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            transform: prefersReducedMotion ? "none" : transform,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(20,184,166,0.1) 0%, transparent 50%)",
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.4, 0.3],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600/20 backdrop-blur-sm rounded-full mb-6 border border-teal-300"
              variants={fadeInUp}
            >
              <Smartphone className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-medium text-teal-800">Coming Soon</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
              variants={heroTextReveal}
            >
              HappyHomeCare Connect
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-4"
              variants={heroSubtitleReveal}
            >
              Track your caregiver in real-time. Stay connected with family. Never
              miss an update.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600"
              variants={heroCTAReveal}
            >
              The future of home healthcare coordination is almost here.
            </motion.p>
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <IPhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              Everything You Need
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Powerful features designed to keep you and your loved ones connected
              and informed.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Peace of Mind for Everyone
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We understand that coordinating home care can be stressful. You
                  want to know when the caregiver will arrive, how the visit went,
                  and that your loved one is receiving the best care possible.
                </p>
                <p>
                  HappyHomeCare Connect brings transparency and real-time
                  communication to home healthcare, giving you the confidence that
                  comes from being truly connected to your loved one&apos;s care.
                </p>
                <p>
                  Join thousands of families who are already on the waitlist for
                  the future of home healthcare coordination.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Always Know",
                    description: "Where your caregiver is and when they&apos;ll arrive",
                  },
                  {
                    icon: Bell,
                    title: "Stay Informed",
                    description:
                      "Real-time updates keep everyone in the loop",
                  },
                  {
                    icon: FileText,
                    title: "Complete Records",
                    description: "Access detailed care notes and visit summaries",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-primary-teal/10 rounded-full flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary-teal" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="section-padding bg-gradient-to-br from-primary-teal via-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Be the First to Know
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              variants={fadeInUp}
            >
              Get notified when HappyHomeCare Connect launches and receive
              exclusive early access.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <EmailSignupForm />
            </motion.div>

            <motion.p
              className="text-sm text-white/80 mt-6"
              variants={fadeInUp}
            >
              No spam, ever. Just important updates about our launch.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <motion.div
          className="container-custom text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 className="text-3xl font-bold mb-6" variants={fadeInUp}>
            Already a HappyHomeCare Client?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Learn more about our current home care services and how we can help
            your loved one live comfortably at home.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroCTAReveal}
          >
            <Link href="/services" className="btn btn-primary btn-lg">
              Our Services
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
