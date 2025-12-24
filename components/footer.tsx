"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { services, locations, contactInfo } from "@/lib/content-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const firstSixLocations = locations.slice(0, 6);

  return (
    <footer className="gradient-teal text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info Column */}
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-bold">
                <span className="text-white">Happy</span>
                <span className="text-white">Home</span>
                <span className="text-orange-light">Care</span>
              </h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Providing compassionate, professional home health care services throughout San Diego County.
              Your trusted partner in quality care.
            </p>
            <div className="flex space-x-3 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-orange-light">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/about"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/90 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-orange-light">Our Services</h3>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact Column */}
          <div>
            <h3 className="text-base font-bold mb-3 text-orange-light">Service Locations</h3>
            <ul className="space-y-1.5 mb-4">
              {firstSixLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-white/90 hover:text-white transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-bold mb-3 text-orange-light">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start space-x-2 text-white hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-orange-light" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-2 text-white hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-orange-light" />
                  <span className="text-sm break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-white">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>{contactInfo.address.street}</p>
                    <p>{contactInfo.address.suite}</p>
                    <p>
                      {contactInfo.address.city}, {contactInfo.address.state}{" "}
                      {contactInfo.address.zip}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-white text-xs text-center md:text-left">
              &copy; {currentYear} HappyHomeCare. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-white/90 hover:text-white transition-colors text-xs"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-white/90 hover:text-white transition-colors text-xs"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="text-white/90 hover:text-white transition-colors text-xs"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
