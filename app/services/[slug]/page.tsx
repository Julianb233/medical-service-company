import { Metadata } from "next";
import { services } from "@/lib/content-data";
import ServicePageClient from "./ServicePageClient";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Happy Home Care",
    };
  }

  return {
    title: `${service.title} Services | Happy Home Care San Diego`,
    description: service.fullDescription,
    keywords: [
      `${service.title.toLowerCase()} San Diego`,
      `home ${service.title.toLowerCase()} services`,
      `${service.title.toLowerCase()} care California`,
      "home health care",
      "senior care services",
    ],
    openGraph: {
      title: `${service.title} Services | Happy Home Care`,
      description: service.shortDescription,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}
