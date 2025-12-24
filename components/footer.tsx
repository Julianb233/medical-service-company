"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { services, locations, contactInfo } from "@/lib/content-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const firstSixLocations = locations.slice(0, 6);

  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-8 md:py-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {/* Company Info Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                <span className="text-white">Happy</span>
                <span className="text-white">Home</span>
                <span className="text-white">Care</span>
              </h3>
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Providing compassionate, professional home health care services throughout San Diego County.
              Your trusted partner in quality care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Contact Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Service Locations</h3>
            <ul className="space-y-2 mb-6">
              {firstSixLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-white hover:text-white transition-colors text-sm sm:text-base inline-block min-h-[44px] flex items-center"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-white hover:text-white transition-colors group min-h-[44px]"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                  <span className="text-sm sm:text-base">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-white hover:text-white transition-colors group min-h-[44px]"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                  <span className="text-sm sm:text-base break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-white min-h-[44px]">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                  <div className="text-sm sm:text-base">
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
        <div className="container-custom py-4 px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-white text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} HappyHomeCare. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link
                href="/privacy"
                className="text-white hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-white hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="text-white hover:text-white transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
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
