"use client";

import { useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Heart,
  Clock,
  HandHeart,
  Stethoscope,
  Brain,
  Check,
  Phone,
  ArrowLeft,
  Shield,
  Award,
  Star,
} from "lucide-react";
import { services, contactInfo } from "@/lib/content-data";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  heart: Heart,
  clock: Clock,
  "hand-holding-heart": HandHeart,
  stethoscope: Stethoscope,
  brain: Brain,
};

const whyChooseUsItems = [
  {
    icon: Clock,
    title: "Hourly, Daily & 24/7 Home Care",
    description: "Flexible care options that fit your schedule and needs, from a few hours to round-the-clock support",
  },
  {
    icon: Brain,
    title: "Alzheimer's/Dementia Certified",
    description: "Specialized training in memory care with compassionate, expert caregivers",
  },
  {
    icon: Shield,
    title: "Home Safety Evaluation",
    description: "Comprehensive assessment to identify and address potential hazards in your home",
  },
  {
    icon: Stethoscope,
    title: "RN Care Management",
    description: "Registered nurses oversee care plans and coordinate with healthcare providers",
  },
  {
    icon: Heart,
    title: "Medication Management",
    description: "Professional oversight ensuring medications are taken correctly and on time",
  },
  {
    icon: Award,
    title: "Medicare Certified Home Health",
    description: "Fully certified to provide skilled nursing and therapy services covered by Medicare",
  },
];

// Animated Process Step Component
function ProcessStep({ number, title, description, index }: {
  number: number;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative bg-gray-50 p-6 rounded-lg text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Connecting Line */}
      {index < 2 && (
        <motion.div
          className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-teal to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      )}

      <motion.div
        className="text-3xl font-bold text-primary-teal mb-2 inline-block"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: index * 0.15 + 0.2,
        }}
      >
        {number}
      </motion.div>
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}

// Feature Card with Scroll Animation
function FeatureCard({ feature, index }: { feature: string; index: number }) {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-10 h-10 bg-primary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: index * 0.08 + 0.1 }}
        >
          <Check className="w-5 h-5 text-primary-teal" />
        </motion.div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{feature}</h4>
          <p className="text-sm text-gray-600">
            Professional care tailored to your specific needs
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Why Choose Us Card with Hover Effect
function WhyChooseUsCard({ item, index }: {
  item: typeof whyChooseUsItems[0];
  index: number;
}) {
  const Icon = item.icon;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="card card-glow bg-primary-teal/5 p-6 rounded-lg border-2 border-primary-teal/20"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="w-12 h-12 bg-primary-teal rounded-lg flex items-center justify-center flex-shrink-0"
          whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Sticky Sidebar Component
function StickySidebar({ service, otherServices }: {
  service: typeof services[0];
  otherServices: typeof services;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sidebarRef} className="lg:col-span-1">
      <motion.div
        className="sticky top-24"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Contact Card */}
        <motion.div
          className="bg-primary-teal text-white p-8 rounded-lg mb-8 shadow-lg"
          whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4">
            Schedule a Free Consultation
          </h3>
          <p className="text-white/90 mb-6">
            Speak with a care coordinator today to learn more about our{" "}
            {service.title.toLowerCase()} services.
          </p>

          <motion.a
            href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
            className={cn(
              "flex items-center justify-center gap-2",
              "bg-white text-primary-teal font-bold",
              "px-6 py-3 rounded-lg mb-4",
              "transition-colors"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-5 h-5" />
            {contactInfo.phone}
          </motion.a>

          <Link
            href="/contact"
            className={cn(
              "block text-center",
              "border-2 border-white",
              "px-6 py-3 rounded-lg",
              "hover:bg-white/10 transition-colors"
            )}
          >
            Request a Call Back
          </Link>
        </motion.div>

        {/* Other Services */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-bold mb-4">Other Services</h3>
          <ul className="space-y-3">
            {otherServices.map((other) => {
              const OtherIcon = iconMap[other.icon] || Heart;
              return (
                <li key={other.slug}>
                  <Link
                    href={`/services/${other.slug}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-teal transition-colors group"
                  >
                    <OtherIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {other.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/services"
                className="text-primary-orange font-medium hover:underline inline-flex items-center gap-1"
              >
                View All Services
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface ServicePageClientProps {
  slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Heart;
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const prefersReducedMotion = useReducedMotion();

  const processSteps = [
    {
      number: 1,
      title: "Free Assessment",
      description: "We start with a comprehensive in-home assessment to understand your needs.",
    },
    {
      number: 2,
      title: "Custom Care Plan",
      description: "We create a personalized care plan tailored to your specific requirements.",
    },
    {
      number: 3,
      title: "Caregiver Match",
      description: "We match you with caregivers who fit your personality and care needs.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-white/90 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  About Our {service.title} Services
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                  <p>{service.fullDescription}</p>
                  <p>
                    Our team of trained professionals is dedicated to providing the
                    highest quality care in the comfort of your own home. We work
                    closely with families and healthcare providers to create
                    personalized care plans that meet each client&apos;s unique needs.
                  </p>
                </div>
              </motion.div>

              {/* Features Grid with Scroll Animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us Section with Animated Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {whyChooseUsItems.map((item, index) => (
                    <WhyChooseUsCard key={index} item={item} index={index} />
                  ))}
                </div>
              </motion.div>

              {/* Animated Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-12 relative">
                  {processSteps.map((step, index) => (
                    <ProcessStep
                      key={index}
                      number={step.number}
                      title={step.title}
                      description={step.description}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sticky Sidebar */}
            <StickySidebar service={service} otherServices={otherServices} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-primary-orange text-white section-padding"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Schedule your FREE IN-HOME NEEDS EVALUATION today. We&apos;ll assess
              your unique situation and create a personalized care plan at no cost
              or obligation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                className="btn btn-white btn-lg shadow-lg"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.phone}
              </motion.a>
              <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="btn btn-outline-orange btn-lg border-white text-white hover:bg-white hover:text-primary-orange"
                >
                  Request Free Evaluation
                </Link>
              </motion.div>
            </motion.div>
            <motion.p
              className="text-sm text-white/80 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Available 24/7 • Medicare Certified • Licensed &amp; Insured
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} Services`,
            description: service.fullDescription,
            provider: {
              "@type": "MedicalBusiness",
              name: "Happy Home Care",
              telephone: contactInfo.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.address.street,
                addressLocality: contactInfo.address.city,
                addressRegion: contactInfo.address.state,
                postalCode: contactInfo.address.zip,
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "State",
              name: "California",
            },
            serviceType: service.title,
          }),
        }}
      />
    </>
  );
}
