import { Metadata } from "next";
import SuppliesPageClient from "./SuppliesPageClient";
import { getAllCategories, getFeaturedProducts } from "@/lib/supplies-data";

export const metadata: Metadata = {
  title: "Medical Equipment & Supplies | HappyHomeCare San Diego",
  description: "Shop medical equipment and supplies for seniors in San Diego. Wheelchairs, walkers, hospital beds, hearing aids, and more. Best prices with free quotes.",
  keywords: [
    "medical supplies San Diego",
    "wheelchairs",
    "walkers",
    "hospital beds",
    "hearing aids",
    "senior medical equipment",
    "mobility aids",
    "bathroom safety equipment",
    "oxygen equipment",
    "lift chairs",
    "daily living aids"
  ],
  openGraph: {
    title: "Medical Equipment & Supplies | HappyHomeCare",
    description: "Best prices on medical equipment for seniors in San Diego County. Free quotes and expert consultation.",
    type: "website",
    locale: "en_US",
  },
};

export default function SuppliesPage() {
  const categories = getAllCategories();
  const featuredProducts = getFeaturedProducts();

  // JSON-LD Structured Data for Product Catalog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Medical Equipment & Supplies Catalog",
    "description": "Comprehensive catalog of medical equipment and supplies for seniors in San Diego County",
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "ProductCollection",
        "name": category.name,
        "description": category.description,
        "numberOfItems": category.productCount,
        "url": `https://happyhomecare.com/supplies#${category.slug}`
      }
    })),
    "provider": {
      "@type": "MedicalBusiness",
      "name": "HappyHomeCare",
      "description": "Leading provider of medical equipment and supplies in San Diego County",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "CA",
        "addressLocality": "San Diego",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "California"
      },
      "telephone": "+1-619-XXX-XXXX",
      "priceRange": "$$"
    }
  };

  // Additional JSON-LD for Featured Products
  const featuredProductsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Medical Equipment",
    "description": "Popular medical equipment and supplies chosen by our customers",
    "itemListElement": featuredProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "category": product.category,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "price": product.priceRange
        }
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredProductsJsonLd) }}
      />

      {/* Render Client Component */}
      <SuppliesPageClient />
    </>
  );
}
