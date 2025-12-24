import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";

interface LocationHeroProps {
  locationName: string;
  description: string;
}

export default function LocationHero({ locationName, description }: LocationHeroProps) {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-16 md:py-24 mt-20">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Home Health Care in {locationName}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:(619) 555-0100"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: (619) 555-0100
            </a>
            <Link
              href="/contact"
              className="btn-outline inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
