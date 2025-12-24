/**
 * San Diego Subarea Data
 * Detailed information about specific neighborhoods and subareas
 */

export interface Landmark {
  name: string;
  description: string;
  imageUrl: string;
  category: "beach" | "park" | "historic" | "entertainment" | "dining" | "shopping";
}

export interface LocalSlang {
  term: string;
  meaning: string;
  usage: string;
}

export interface WeatherInfo {
  averageTemp: string;
  climate: string;
  bestMonths: string[];
  microclimate: string;
}

export interface SubareaData {
  slug: string;
  name: string;
  parentLocation: string; // Parent location slug
  tagline: string;
  localNickname: string;
  description: string;
  heroImageUrl: string;
  funFacts: string[];
  landmarks: Landmark[];
  localSlang: LocalSlang[];
  weather: WeatherInfo;
  whySpecial: {
    title: string;
    description: string;
    highlights: string[];
  };
  servicesContext: {
    title: string;
    description: string;
  };
  zipCodes: string[];
  coordinates: { lat: number; lng: number };
}

// San Diego Subareas
export const subareas: SubareaData[] = [
  {
    slug: "downtown",
    name: "Downtown San Diego",
    parentLocation: "san-diego",
    tagline: "Where City Lights Meet Compassionate Care",
    localNickname: "The Gaslamp",
    description: "Experience premium home health care in the heart of San Diego's vibrant downtown district, where urban living meets exceptional senior care services.",
    heroImageUrl: "/images/subareas/downtown-sd.jpg",
    funFacts: [
      "Home to over 94 downtown restaurants and nightlife venues in the historic Gaslamp Quarter",
      "The USS Midway Museum welcomes over 1 million visitors annually",
      "Petco Park hosts 81 Padres games each season, plus year-round events",
      "Downtown's Convention Center is the largest on the West Coast",
      "Over 6,500 residential units built in the last decade",
    ],
    landmarks: [
      {
        name: "Gaslamp Quarter",
        description: "Historic 16½-block neighborhood with Victorian-era buildings, renowned restaurants, and vibrant nightlife",
        imageUrl: "/images/landmarks/gaslamp.jpg",
        category: "historic",
      },
      {
        name: "USS Midway Museum",
        description: "America's longest-serving aircraft carrier turned interactive museum on the waterfront",
        imageUrl: "/images/landmarks/midway.jpg",
        category: "historic",
      },
      {
        name: "Petco Park",
        description: "State-of-the-art home of the San Diego Padres with stunning city and bay views",
        imageUrl: "/images/landmarks/petco-park.jpg",
        category: "entertainment",
      },
      {
        name: "Seaport Village",
        description: "Waterfront shopping and dining destination with 70+ shops along the bay",
        imageUrl: "/images/landmarks/seaport-village.jpg",
        category: "shopping",
      },
      {
        name: "Balboa Theatre",
        description: "Restored 1924 Spanish Renaissance theater hosting performances and events",
        imageUrl: "/images/landmarks/balboa-theatre.jpg",
        category: "entertainment",
      },
      {
        name: "Embarcadero Marina",
        description: "Scenic waterfront promenade perfect for walks with beautiful bay views",
        imageUrl: "/images/landmarks/embarcadero.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "The Gaslamp",
        meaning: "The historic Gaslamp Quarter downtown",
        usage: "Let's grab dinner in the Gaslamp tonight",
      },
      {
        term: "East Village",
        meaning: "The trendy neighborhood east of downtown proper",
        usage: "I live in East Village near Petco Park",
      },
      {
        term: "Little Italy",
        meaning: "The Italian neighborhood north of downtown",
        usage: "We're meeting for coffee in Little Italy this morning",
      },
      {
        term: "The Embarcadero",
        meaning: "The waterfront area along the bay",
        usage: "Let's take a walk on the Embarcadero",
      },
    ],
    weather: {
      averageTemp: "70°F year-round",
      climate: "Mild Mediterranean with coastal influence",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Urban heat island effect makes it slightly warmer than coastal areas, with less marine layer influence. Evenings can be breezy near the waterfront.",
    },
    whySpecial: {
      title: "Urban Living Meets Premium Care",
      description: "Downtown San Diego offers a unique blend of city energy and accessible healthcare. Our caregivers understand the needs of urban seniors.",
      highlights: [
        "Close proximity to UCSD Medical Center and Scripps Mercy Hospital",
        "Walkable neighborhoods with accessible senior-friendly amenities",
        "Cultural attractions and entertainment within easy reach",
        "Strong community of active seniors and retirees",
        "Excellent public transportation options for appointments",
        "Vibrant waterfront for therapeutic outdoor activities",
      ],
    },
    servicesContext: {
      title: "Home Care Tailored to Downtown Living",
      description: "Whether you're in a high-rise condo or a historic Gaslamp loft, we provide personalized care that fits your urban lifestyle. Our caregivers help with transportation to cultural events, accompany clients to nearby hospitals, and ensure safety in busy downtown environments.",
    },
    zipCodes: ["92101", "92113"],
    coordinates: { lat: 32.7157, lng: -117.1611 },
  },
  {
    slug: "hillcrest",
    name: "Hillcrest",
    parentLocation: "san-diego",
    tagline: "Vibrant Community, Compassionate Care",
    localNickname: "The Heart of San Diego",
    description: "Hillcrest combines tree-lined streets, walkable neighborhoods, and a strong sense of community with exceptional home health care services for seniors.",
    heroImageUrl: "/images/subareas/hillcrest.jpg",
    funFacts: [
      "Known as one of San Diego's most walkable neighborhoods with a Walk Score of 94",
      "Home to the historic Hillcrest sign installed in 1940",
      "Over 200 independent shops, restaurants, and cafes line University Avenue",
      "Hosts San Diego's largest farmers market every Sunday",
      "Balboa Park's western entrance is just blocks away",
    ],
    landmarks: [
      {
        name: "Balboa Park",
        description: "1,200-acre urban cultural park with museums, gardens, and the San Diego Zoo",
        imageUrl: "/images/landmarks/balboa-park.jpg",
        category: "park",
      },
      {
        name: "Hillcrest Farmers Market",
        description: "Premier Sunday market with 175+ vendors offering fresh produce and artisan goods",
        imageUrl: "/images/landmarks/hillcrest-farmers-market.jpg",
        category: "shopping",
      },
      {
        name: "University Avenue",
        description: "Main street featuring diverse dining, shopping, and entertainment options",
        imageUrl: "/images/landmarks/university-ave.jpg",
        category: "shopping",
      },
      {
        name: "The Landmark Theatre",
        description: "Historic 1940s movie palace showing independent and classic films",
        imageUrl: "/images/landmarks/landmark-theatre.jpg",
        category: "entertainment",
      },
    ],
    localSlang: [
      {
        term: "The Sign",
        meaning: "The iconic Hillcrest gateway sign",
        usage: "Meet me by the Sign on University",
      },
      {
        term: "Uptown",
        meaning: "The broader district including Hillcrest, Mission Hills, and Bankers Hill",
        usage: "I'm heading to Uptown for brunch",
      },
      {
        term: "The Park",
        meaning: "Balboa Park, the cultural heart of San Diego",
        usage: "Let's spend the afternoon at the Park",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mild Mediterranean, slightly warmer than coastal areas",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Located on a mesa, Hillcrest enjoys morning sun while coastal areas have marine layer. Cooler evenings with gentle breezes.",
    },
    whySpecial: {
      title: "A Community That Cares",
      description: "Hillcrest's tight-knit community and walkable streets make it ideal for seniors who value independence and social connection.",
      highlights: [
        "Extensive sidewalks and pedestrian-friendly infrastructure",
        "Diverse dining and entertainment within walking distance",
        "Strong LGBTQ+ community and senior support networks",
        "Close to multiple hospitals including UCSD Hillcrest",
        "Active neighborhood association supporting seniors",
        "Weekly farmers market for fresh, healthy food access",
      ],
    },
    servicesContext: {
      title: "Care That Embraces Community",
      description: "Our Hillcrest caregivers help seniors stay active in this vibrant community—accompanying them to farmers markets, local cafes, and Balboa Park events while providing the medical and personal care they need at home.",
    },
    zipCodes: ["92103", "92104"],
    coordinates: { lat: 32.7490, lng: -117.1647 },
  },
  {
    slug: "north-park",
    name: "North Park",
    parentLocation: "san-diego",
    tagline: "Artistic Spirit, Caring Hearts",
    localNickname: "NoPa",
    description: "North Park's creative energy and thriving arts scene provide a dynamic backdrop for personalized senior care in San Diego's hippest neighborhood.",
    heroImageUrl: "/images/subareas/north-park.jpg",
    funFacts: [
      "Home to over 40 craft breweries and tasting rooms—the highest concentration in San Diego",
      "The historic North Park Theatre (1928) is a designated San Diego landmark",
      "Ray Street Arts District features monthly art walks with 20+ galleries",
      "Named 'Best Neighborhood in America' by the American Planning Association in 2018",
      "Over 100 independent restaurants representing 30+ cuisines",
    ],
    landmarks: [
      {
        name: "North Park Observatory",
        description: "Historic 1920s performance venue hosting concerts and comedy shows",
        imageUrl: "/images/landmarks/observatory.jpg",
        category: "entertainment",
      },
      {
        name: "Ray Street Arts District",
        description: "Creative hub with galleries, studios, and monthly Second Saturday art walks",
        imageUrl: "/images/landmarks/ray-street.jpg",
        category: "entertainment",
      },
      {
        name: "North Park Sign",
        description: "Iconic neighborhood gateway marking the heart of NoPa",
        imageUrl: "/images/landmarks/north-park-sign.jpg",
        category: "historic",
      },
      {
        name: "30th Street Corridor",
        description: "Main commercial street lined with craft breweries, cafes, and boutiques",
        imageUrl: "/images/landmarks/30th-street.jpg",
        category: "dining",
      },
    ],
    localSlang: [
      {
        term: "NoPa",
        meaning: "Abbreviated nickname for North Park",
        usage: "I'm grabbing coffee in NoPa this morning",
      },
      {
        term: "The Ray",
        meaning: "Ray Street Arts District",
        usage: "Don't miss the art walk on the Ray this Saturday",
      },
      {
        term: "30th Street",
        meaning: "The main commercial corridor of North Park",
        usage: "Let's check out that new brewery on 30th Street",
      },
      {
        term: "Second Saturday",
        meaning: "Monthly art walk event",
        usage: "We go to Second Saturday every month",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Warm Mediterranean with less coastal influence",
      bestMonths: ["April", "May", "June", "September", "October"],
      microclimate: "Inland location means warmer days and cooler nights than beach areas. Less marine layer, more sunshine. Summer afternoons can reach the 80s.",
    },
    whySpecial: {
      title: "Where Culture Meets Care",
      description: "North Park's artistic community embraces diversity and creativity, making it perfect for seniors who want to stay culturally engaged.",
      highlights: [
        "Thriving arts scene with accessible galleries and performances",
        "Walkable neighborhood with wide sidewalks and benches",
        "Strong community spirit and neighborhood watch programs",
        "Diverse dining options for every dietary need",
        "Close to Kaiser Permanente and Scripps Mercy hospitals",
        "Active senior centers offering classes and social programs",
      ],
    },
    servicesContext: {
      title: "Creative Care Solutions",
      description: "Our North Park caregivers appreciate the neighborhood's creative spirit. We help seniors participate in art walks, attend performances at the Observatory, and enjoy the area's famous breweries and cafes—all while ensuring their health and safety.",
    },
    zipCodes: ["92104", "92116"],
    coordinates: { lat: 32.7408, lng: -117.1301 },
  },
  {
    slug: "la-jolla-village",
    name: "La Jolla Village",
    parentLocation: "la-jolla",
    tagline: "Coastal Elegance, Exceptional Care",
    localNickname: "The Village",
    description: "La Jolla Village offers world-class dining, shopping, and ocean views paired with premium home health care for discerning seniors.",
    heroImageUrl: "/images/subareas/la-jolla-village.jpg",
    funFacts: [
      "Home to over 200 art galleries, making it one of California's premier art destinations",
      "La Jolla Cove sees over 5 million visitors annually",
      "The village features more than 40 Prospect Street boutiques",
      "Birch Aquarium attracts 500,000+ visitors each year",
      "Year-round average temperature is 70°F—perfect weather every day",
    ],
    landmarks: [
      {
        name: "La Jolla Cove",
        description: "Stunning beach cove famous for sea lions, snorkeling, and dramatic cliffs",
        imageUrl: "/images/landmarks/la-jolla-cove.jpg",
        category: "beach",
      },
      {
        name: "Prospect Street",
        description: "Upscale shopping and dining street with ocean views and luxury boutiques",
        imageUrl: "/images/landmarks/prospect-street.jpg",
        category: "shopping",
      },
      {
        name: "Ellen Browning Scripps Park",
        description: "Clifftop park with panoramic ocean views and grassy lawns for picnics",
        imageUrl: "/images/landmarks/scripps-park.jpg",
        category: "park",
      },
      {
        name: "Birch Aquarium",
        description: "Scripps Institution oceanographic museum with 60+ habitats",
        imageUrl: "/images/landmarks/birch-aquarium.jpg",
        category: "entertainment",
      },
      {
        name: "La Jolla Playhouse",
        description: "Tony Award-winning theater producing innovative productions",
        imageUrl: "/images/landmarks/playhouse.jpg",
        category: "entertainment",
      },
      {
        name: "Children's Pool",
        description: "Protected beach home to a harbor seal colony, popular viewing spot",
        imageUrl: "/images/landmarks/childrens-pool.jpg",
        category: "beach",
      },
    ],
    localSlang: [
      {
        term: "The Village",
        meaning: "La Jolla's downtown commercial district",
        usage: "Let's have lunch in the Village today",
      },
      {
        term: "The Cove",
        meaning: "La Jolla Cove beach and surrounding area",
        usage: "We're watching the sunset at the Cove",
      },
      {
        term: "Prospect",
        meaning: "Prospect Street, the main shopping corridor",
        usage: "I'm browsing galleries on Prospect this afternoon",
      },
      {
        term: "The Jewel",
        meaning: "Nickname for La Jolla (Spanish for 'the jewel')",
        usage: "Living in the Jewel never gets old",
      },
    ],
    weather: {
      averageTemp: "70°F year-round",
      climate: "Perfect Mediterranean coastal climate",
      bestMonths: ["All year—La Jolla has ideal weather 365 days"],
      microclimate: "Coastal location means morning marine layer burns off by 11am. Ocean breezes keep temperatures comfortable. Rarely above 75°F or below 65°F.",
    },
    whySpecial: {
      title: "Luxury Living, Personalized Care",
      description: "La Jolla Village's refined atmosphere and proximity to world-class medical facilities make it ideal for seniors seeking premium care.",
      highlights: [
        "Walking distance to Scripps Memorial Hospital La Jolla",
        "Access to UCSD Health specialists and research hospital",
        "Upscale senior living options and community programs",
        "Safe, well-maintained streets with excellent lighting",
        "Cultural attractions including theaters and museums",
        "Beautiful coastal walking paths for therapeutic exercise",
      ],
    },
    servicesContext: {
      title: "White-Glove Home Health Care",
      description: "Our La Jolla caregivers provide discreet, professional service that matches the sophistication of the Village. From accompanying clients to the Playhouse to coordinating with UCSD specialists, we deliver care that exceeds expectations.",
    },
    zipCodes: ["92037"],
    coordinates: { lat: 32.8461, lng: -117.2750 },
  },
  {
    slug: "la-jolla-shores",
    name: "La Jolla Shores",
    parentLocation: "la-jolla",
    tagline: "Beach Living, Caring Hearts",
    localNickname: "The Shores",
    description: "La Jolla Shores combines pristine beaches, marine research, and family-friendly atmosphere with exceptional senior care services.",
    heroImageUrl: "/images/subareas/la-jolla-shores.jpg",
    funFacts: [
      "Mile-long sandy beach is one of San Diego's best for swimming and kayaking",
      "Home to Scripps Institution of Oceanography, world's leading ocean research center",
      "Kellogg Park hosts free summer concerts and community events",
      "Tide pools at north end reveal marine life during low tide",
      "Scripps Pier extends 1,090 feet into the ocean for research",
    ],
    landmarks: [
      {
        name: "La Jolla Shores Beach",
        description: "Wide, family-friendly beach perfect for swimming, kayaking, and surfing lessons",
        imageUrl: "/images/landmarks/shores-beach.jpg",
        category: "beach",
      },
      {
        name: "Scripps Pier",
        description: "Historic research pier and iconic La Jolla landmark extending into the Pacific",
        imageUrl: "/images/landmarks/scripps-pier.jpg",
        category: "historic",
      },
      {
        name: "Kellogg Park",
        description: "Beachfront park with grassy areas, picnic tables, and summer concerts",
        imageUrl: "/images/landmarks/kellogg-park.jpg",
        category: "park",
      },
      {
        name: "La Jolla Shores Tide Pools",
        description: "Natural tide pools teeming with sea life at low tide",
        imageUrl: "/images/landmarks/tide-pools.jpg",
        category: "beach",
      },
    ],
    localSlang: [
      {
        term: "The Shores",
        meaning: "La Jolla Shores neighborhood and beach area",
        usage: "Let's paddle board at the Shores tomorrow",
      },
      {
        term: "Scripps",
        meaning: "Scripps Institution of Oceanography",
        usage: "I attended a lecture at Scripps last night",
      },
      {
        term: "Kellogg",
        meaning: "Kellogg Park at the beach",
        usage: "We're having a picnic at Kellogg on Sunday",
      },
      {
        term: "The Pier",
        meaning: "Scripps Pier",
        usage: "The sunset view from the Pier is incredible",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Coastal Mediterranean with ocean influence",
      bestMonths: ["May", "June", "September", "October"],
      microclimate: "Direct ocean exposure means consistent temperatures. May Gray and June Gloom can bring morning clouds. Gentle sea breezes all year. Water temp averages 60-70°F.",
    },
    whySpecial: {
      title: "Coastal Living with Medical Excellence",
      description: "La Jolla Shores offers beach living combined with proximity to world-class medical research and care facilities.",
      highlights: [
        "Minutes from UCSD Medical Center and Thornton Hospital",
        "Access to cutting-edge medical research at Scripps Institution",
        "Flat, accessible beach perfect for therapeutic walks",
        "Strong community of active, health-conscious seniors",
        "Beautiful environment promoting mental and physical wellness",
        "Year-round outdoor activities for staying active",
      ],
    },
    servicesContext: {
      title: "Beach-Side Care Excellence",
      description: "Our Shores caregivers understand the active beach lifestyle. We help seniors enjoy daily beach walks, coordinate water therapy, and maintain the outdoor activities that make living by the ocean so special—all while providing expert medical and personal care.",
    },
    zipCodes: ["92037"],
    coordinates: { lat: 32.8580, lng: -117.2563 },
  },
];

/**
 * Get subarea by slug
 */
export function getSubareaBySlug(slug: string): SubareaData | undefined {
  return subareas.find((subarea) => subarea.slug === slug);
}

/**
 * Get all subareas for a parent location
 */
export function getSubareasForLocation(locationSlug: string): SubareaData[] {
  return subareas.filter((subarea) => subarea.parentLocation === locationSlug);
}

/**
 * Get parent location name from slug
 */
export function getParentLocationName(locationSlug: string): string {
  const locationNames: Record<string, string> = {
    "san-diego": "San Diego",
    "la-jolla": "La Jolla",
    "del-mar": "Del Mar",
    "encinitas": "Encinitas",
    "carlsbad": "Carlsbad",
    "oceanside": "Oceanside",
    "escondido": "Escondido",
    "poway": "Poway",
    "chula-vista": "Chula Vista",
    "coronado": "Coronado",
    "rancho-bernardo": "Rancho Bernardo",
    "rancho-santa-fe": "Rancho Santa Fe",
    "san-marcos": "San Marcos",
    "vista": "Vista",
    "solana-beach": "Solana Beach",
  };
  return locationNames[locationSlug] || locationSlug;
}
