import type { Metadata } from "next";
import { Roboto, ABeeZee } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { PageTransition } from "@/components/animations/PageTransition";
import SchemaMarkup from "@/components/SchemaMarkup";

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
  metadataBase: new URL("https://happyhomecare.com"),
  title: {
    default: "HappyHomeCare | Home Health Care in San Diego",
    template: "%s | HappyHomeCare",
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
    "HappyHomeCare",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HappyHomeCare",
    title: "HappyHomeCare | Home Health Care in San Diego",
    description:
      "Compassionate home health care services in San Diego County. Skilled nursing, personal care, respite, and hospice support.",
    images: [
      {
        url: "https://happyhomecare.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HappyHomeCare - Professional Home Health Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HappyHomeCare | Home Health Care in San Diego",
    description:
      "Compassionate home health care services in San Diego County.",
    images: ["https://happyhomecare.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://happyhomecare.com",
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
        <SchemaMarkup pathname="/" />
      </head>
      <body className={`${roboto.variable} ${abeezee.variable} antialiased`}>
        <SmoothScroll>
          <Header />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
