"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, locations } from "@/lib/content-data";
import {
  heroTextReveal,
  heroSubtitleReveal,
} from "@/lib/animations/variants";
import { useParallax, useStaggerReveal } from "@/lib/animations";

export default function ContactPage() {
  const featuredLocations = locations.slice(0, 6);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallax = useParallax(heroRef, { speed: 0.3 });

  const { containerVariants, itemVariants } = useStaggerReveal({
    staggerDelay: 0.1,
    direction: "up",
  });

  // Contact card hover variants
  const contactCardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
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
              Contact Us
            </motion.h1>
            <motion.p
              variants={heroSubtitleReveal}
              initial="hidden"
              animate="visible"
              className="text-xl text-white/90"
            >
              Ready to learn more about our services? Get in touch with our care
              coordinators today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our care coordinators will get
                back to you within 24 hours.
              </p>

              <ContactForm />
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="sticky top-24 space-y-8">
                {/* Phone Card */}
                <motion.div
                  variants={contactCardVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-primary-orange text-white p-6 rounded-lg"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-lg font-bold mb-3">Call Us Today</h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                      className="flex items-center gap-3 text-2xl font-bold group"
                    >
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="w-6 h-6" />
                      </motion.div>
                      {contactInfo.phone}
                    </a>
                    <p className="mt-2 text-white/80 text-sm">
                      Available 24/7 for emergencies
                    </p>
                  </motion.div>
                </motion.div>

                {/* Contact Details Card */}
                <motion.div
                  variants={contactCardVariants}
                  initial="rest"
                  whileHover="hover"
                  className="bg-gray-50 p-6 rounded-lg space-y-6"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-bold text-lg"
                  >
                    Get in Touch
                  </motion.h3>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-5 h-5 text-primary-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Main Office</p>
                      <p className="text-gray-600 text-sm">
                        {contactInfo.address.street}
                        <br />
                        {contactInfo.address.suite}
                        <br />
                        {contactInfo.address.city}, {contactInfo.address.state}{" "}
                        {contactInfo.address.zip}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5 text-primary-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-teal hover:underline text-sm"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <Clock className="w-5 h-5 text-primary-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600 text-sm">
                        {contactInfo.hours.weekdays}
                        <br />
                        {contactInfo.hours.weekend}
                        <br />
                        <span className="text-primary-orange font-medium">
                          {contactInfo.hours.emergency}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            Serving All of San Diego County
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          >
            We provide home health care services throughout San Diego County. Find
            a location near you.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredLocations.map((location) => (
              <motion.div
                key={location.slug}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{location.region}</p>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link
              href="/locations"
              className="text-primary-teal font-medium hover:underline inline-flex items-center gap-2 group"
            >
              View All Locations
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center text-gray-500">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-16 h-16 mx-auto mb-4" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg"
            >
              Interactive Map Coming Soon
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm"
            >
              Serving all of San Diego County
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Happy Home Care",
              telephone: contactInfo.phone,
              email: contactInfo.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.address.street,
                addressLocality: contactInfo.address.city,
                addressRegion: contactInfo.address.state,
                postalCode: contactInfo.address.zip,
                addressCountry: "US",
              },
            },
          }),
        }}
      />
    </>
  );
}
