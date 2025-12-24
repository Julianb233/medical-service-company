import { Metadata } from "next";
import { locations } from "@/lib/content-data";
import LocationPageClient from "./LocationPageClient";

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

// Generate metadata for each location
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found | Happy Home Care",
    };
  }

  return {
    title: `Home Health Care in ${location.name} | Happy Home Care`,
    description: `Professional home health care services in ${location.name}, CA. ${location.description} Serving ${location.neighborhoods.slice(0, 3).join(", ")} and more.`,
    keywords: [
      `home health care ${location.name}`,
      `senior care ${location.name}`,
      `caregiver services ${location.name}`,
      `in-home care ${location.name} CA`,
      ...location.zipCodes.map((zip) => `home care ${zip}`),
    ],
    openGraph: {
      title: `Home Health Care in ${location.name} | Happy Home Care`,
      description: `Professional home health care services in ${location.name}. Serving ${location.neighborhoods.slice(0, 3).join(", ")} and surrounding areas.`,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  return <LocationPageClient slug={slug} />;
}
