import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, locations } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Medical Service Company for home health care services in San Diego County. Call us 24/7 or schedule a free consultation online.",
};

export default function ContactPage() {
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-teal text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white/90">
              Ready to learn more about our services? Get in touch with our care
              coordinators today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our care coordinators will get
                back to you within 24 hours.
              </p>

              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Phone */}
                <div className="bg-primary-orange text-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Call Us Today</h3>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^\d]/g, "")}`}
                    className="flex items-center gap-3 text-2xl font-bold"
                  >
                    <Phone className="w-6 h-6" />
                    {contactInfo.phone}
                  </a>
                  <p className="mt-2 text-white/80 text-sm">
                    Available 24/7 for emergencies
                  </p>
                </div>

                {/* Contact Details */}
                <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                  <h3 className="font-bold text-lg">Get in Touch</h3>

                  <div className="flex items-start gap-4">
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
                  </div>

                  <div className="flex items-start gap-4">
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
                  </div>

                  <div className="flex items-start gap-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Serving All of San Diego County
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide home health care services throughout San Diego County. Find
            a location near you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLocations.map((location) => (
              <div
                key={location.slug}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{location.region}</p>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-primary-teal font-medium hover:underline"
            >
              View All Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <p className="text-lg">Interactive Map Coming Soon</p>
            <p className="text-sm">Serving all of San Diego County</p>
          </div>
        </div>
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
              name: "Medical Service Company",
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
