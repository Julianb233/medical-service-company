import { locations } from "@/lib/content-data";
import LocationCard from "@/components/location-card";
import { MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Health Care Locations Across San Diego County",
  description:
    "Medical Service Company serves 15+ locations across San Diego County including La Jolla, Del Mar, Encinitas, Carlsbad, Oceanside, Escondido, Chula Vista, and more. Find home health care services near you.",
  keywords: [
    "San Diego home health care",
    "La Jolla home care",
    "Del Mar nursing",
    "Encinitas home health",
    "Carlsbad care services",
    "Oceanside home nursing",
    "Escondido home care",
    "Chula Vista health services",
  ],
  openGraph: {
    title: "Home Health Care Locations Across San Diego County",
    description:
      "Comprehensive home health care services across 15+ San Diego County locations. Find quality care near you.",
  },
};

// Group locations by region
const locationsByRegion = locations.reduce((acc, location) => {
  if (!acc[location.region]) {
    acc[location.region] = [];
  }
  acc[location.region].push(location);
  return acc;
}, {} as Record<string, typeof locations>);

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24 mt-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <MapPin className="w-16 h-16 text-primary-teal" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Home Health Care Across San Diego County
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Quality, compassionate home health care services in 15+ locations throughout
              San Diego County. Find personalized care close to home.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-teal mb-2">15+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-teal mb-2">100+</div>
              <div className="text-gray-600">Neighborhoods</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-teal mb-2">75+</div>
              <div className="text-gray-600">Zip Codes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-12">
            {Object.entries(locationsByRegion).map(([region, regionLocations]) => (
              <div key={region}>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{region}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionLocations.map((location) => (
                    <LocationCard
                      key={location.slug}
                      slug={location.slug}
                      name={location.name}
                      region={location.region}
                      description={location.description}
                      neighborhoods={location.neighborhoods}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Service Area</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-teal mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-700">
                    San Diego County Coverage Map
                  </p>
                  <p className="text-gray-600 mt-2">
                    Serving communities from Oceanside to Chula Vista
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We proudly serve patients and families across San Diego County, from coastal
                communities to inland areas. Our caregivers travel to you, providing
                compassionate care in the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-teal py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don&apos;t See Your Location?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-teal-light">
            We&apos;re continually expanding our service area. Contact us to see if we can
            serve your neighborhood.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-dark transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
