import type { Metadata } from "next";
import { Roboto, ABeeZee } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const abeezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Medical Service Company | Home Health Care in San Diego",
    template: "%s | Medical Service Company",
  },
  description:
    "Compassionate home health care services in San Diego County. We provide skilled nursing, personal care, respite care, and hospice support. Serving La Jolla, Del Mar, Encinitas, and all of San Diego.",
  keywords: [
    "home health care",
    "home nursing",
    "personal care",
    "respite care",
    "hospice care",
    "San Diego home care",
    "La Jolla home health",
    "Del Mar nursing care",
    "Encinitas home care",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Medical Service Company",
    title: "Medical Service Company | Home Health Care in San Diego",
    description:
      "Compassionate home health care services in San Diego County. Skilled nursing, personal care, respite, and hospice support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Service Company | Home Health Care in San Diego",
    description:
      "Compassionate home health care services in San Diego County.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Medical Service Company",
              description:
                "Compassionate home health care services in San Diego County",
              url: "https://medicalservicecompany.com",
              telephone: "+1-619-555-0100",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Healthcare Drive",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92101",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.7157,
                longitude: -117.1611,
              },
              areaServed: [
                { "@type": "City", name: "San Diego" },
                { "@type": "City", name: "La Jolla" },
                { "@type": "City", name: "Del Mar" },
                { "@type": "City", name: "Encinitas" },
                { "@type": "City", name: "Carlsbad" },
                { "@type": "City", name: "Oceanside" },
                { "@type": "City", name: "Escondido" },
                { "@type": "City", name: "Chula Vista" },
              ],
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
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${abeezee.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
