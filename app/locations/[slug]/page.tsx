import { notFound } from "next/navigation";
import { locations, services, testimonials, contactInfo } from "@/lib/content-data";
import LocationHero from "@/components/location-hero";
import { MapPin, Phone, MessageSquare, Heart, Home, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Home Health Care in ${location.name} | Happy Home Care`,
    description: `Compassionate home health care services in ${location.name}, ${location.region}. Serving ${location.neighborhoods.join(", ")}. Skilled nursing, personal care, respite care, and more. Call (619) 555-0100.`,
    keywords: [
      `home health care ${location.name}`,
      `${location.name} home nursing`,
      `personal care ${location.name}`,
      `${location.name} hospice care`,
      `respite care ${location.name}`,
      ...location.neighborhoods.map((n) => `home care ${n}`),
    ],
    openGraph: {
      title: `Home Health Care in ${location.name}`,
      description: `Professional home health care services serving ${location.name} and surrounding neighborhoods.`,
    },
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  // Filter testimonials for this location
  const locationTestimonials = testimonials.filter(
    (t) => t.location.toLowerCase() === location.name.toLowerCase()
  );

  // LocalBusiness JSON-LD schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://medicalservicecompany.com/locations/${location.slug}`,
    name: `Happy Home Care - ${location.name}`,
    description: location.description,
    url: `https://medicalservicecompany.com/locations/${location.slug}`,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressRegion: "CA",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: location.name,
      },
      ...location.neighborhoods.map((neighborhood) => ({
        "@type": "Place",
        name: neighborhood,
      })),
    ],
    serviceType: services.map((s) => s.title),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <LocationHero locationName={location.name} description={location.description} />

        {/* Services Available Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Home Health Care Services in {location.name}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              We provide comprehensive home health care services to residents of {location.name}{" "}
              and surrounding areas. Our licensed caregivers and nurses deliver personalized
              care in the comfort of your home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white group"
                >
                  <div className="flex items-start gap-4">
                    {service.icon === "home" && (
                      <Home className="w-8 h-8 text-primary-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    {service.icon === "heart" && (
                      <Heart className="w-8 h-8 text-primary-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    {service.icon === "clock" && (
                      <Clock className="w-8 h-8 text-primary-teal flex-shrink-0 group-hover:scale-110 transition-transform" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Neighborhoods We Serve in {location.name}
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {location.neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <MapPin className="w-4 h-4 text-primary-teal flex-shrink-0" />
                      <span>{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zip Codes Served */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Zip Codes Served in {location.name}
              </h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {location.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="bg-white border-2 border-primary-teal px-4 py-2 rounded-lg font-semibold text-primary-teal"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (if available for this location) */}
        {locationTestimonials.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
                What {location.name} Families Say About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {locationTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-primary-orange fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA Section */}
        <section className="gradient-teal py-16 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started in {location.name}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-teal-light">
              Contact us today for a free consultation. Our care coordinators are available
              24/7 to answer your questions and help you get the care you need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 bg-primary-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors"
              >
                <Phone className="w-5 h-5" />
                {contactInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-teal transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Request Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Why Families in {location.name} Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-teal mb-2">20+</div>
                <div className="text-gray-700 font-semibold mb-2">Years Experience</div>
                <p className="text-sm text-gray-600">
                  Decades of trusted care in San Diego County
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-teal mb-2">500+</div>
                <div className="text-gray-700 font-semibold mb-2">Trained Caregivers</div>
                <p className="text-sm text-gray-600">
                  Licensed, insured, and background-checked professionals
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-teal mb-2">24/7</div>
                <div className="text-gray-700 font-semibold mb-2">Availability</div>
                <p className="text-sm text-gray-600">
                  Round-the-clock care and support when you need it
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-teal mb-2">5★</div>
                <div className="text-gray-700 font-semibold mb-2">Rated Service</div>
                <p className="text-sm text-gray-600">
                  Consistently excellent reviews from families
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
