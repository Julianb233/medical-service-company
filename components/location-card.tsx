import Link from "next/link";
import { MapPin } from "lucide-react";

interface LocationCardProps {
  slug: string;
  name: string;
  region: string;
  description: string;
  neighborhoods: string[];
}

export default function LocationCard({
  slug,
  name,
  region,
  description,
  neighborhoods,
}: LocationCardProps) {
  return (
    <Link
      href={`/locations/${slug}`}
      className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white group"
    >
      <div className="flex items-start gap-3 mb-3">
        <MapPin className="w-6 h-6 text-primary-teal flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
        <div>
          <h3 className="text-xl font-bold group-hover:text-primary-teal transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-600">{region}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="text-sm text-gray-600">
        <span className="font-semibold">Neighborhoods:</span>{" "}
        {neighborhoods.slice(0, 3).join(", ")}
        {neighborhoods.length > 3 && "..."}
      </div>
    </Link>
  );
}
