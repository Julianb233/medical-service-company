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
  // ===== NEW SUBAREAS ADDED DECEMBER 2025 =====
  {
    slug: "pacific-beach",
    name: "Pacific Beach",
    parentLocation: "san-diego",
    tagline: "Beach Vibes, Caring Lives",
    localNickname: "PB",
    description: "Pacific Beach brings together the best of San Diego beach living with exceptional home health care for active seniors who love the coastal lifestyle.",
    heroImageUrl: "/images/subareas/pacific-beach.jpg",
    funFacts: [
      "Crystal Pier is one of the last remaining piers on the West Coast where you can stay overnight in cottages",
      "The boardwalk stretches 3.2 miles from South Mission Beach to La Jolla",
      "Over 125 restaurants, bars, and cafes line Garnet Avenue",
      "PB hosts the annual Over-the-Line tournament, a San Diego tradition since 1953",
      "Home to one of the most popular surf breaks in San Diego",
    ],
    landmarks: [
      {
        name: "Crystal Pier",
        description: "Historic 1927 pier with vacation cottages extending over the Pacific Ocean",
        imageUrl: "/images/landmarks/crystal-pier.jpg",
        category: "historic",
      },
      {
        name: "Garnet Avenue",
        description: "Main commercial strip with restaurants, shops, and nightlife",
        imageUrl: "/images/landmarks/garnet-ave.jpg",
        category: "dining",
      },
      {
        name: "Pacific Beach Boardwalk",
        description: "Scenic oceanfront path for walking, biking, and people-watching",
        imageUrl: "/images/landmarks/pb-boardwalk.jpg",
        category: "beach",
      },
      {
        name: "Tourmaline Surf Park",
        description: "Mellow surf spot popular with longboarders and beginners",
        imageUrl: "/images/landmarks/tourmaline.jpg",
        category: "beach",
      },
    ],
    localSlang: [
      {
        term: "PB",
        meaning: "Pacific Beach neighborhood",
        usage: "I'm heading to PB for sunset drinks",
      },
      {
        term: "The Pier",
        meaning: "Crystal Pier",
        usage: "Let's meet at the Pier for a morning walk",
      },
      {
        term: "Garnet",
        meaning: "Garnet Avenue, the main strip",
        usage: "All the best restaurants are on Garnet",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Coastal Mediterranean with ocean breezes",
      bestMonths: ["May", "June", "September", "October"],
      microclimate: "Strong marine influence keeps temperatures mild. Morning fog common in May-June (May Gray, June Gloom). Afternoon sea breezes keep summers comfortable.",
    },
    whySpecial: {
      title: "Active Beach Living with Quality Care",
      description: "Pacific Beach's laid-back atmosphere and flat terrain make it perfect for seniors who want to stay active and enjoy the beach lifestyle.",
      highlights: [
        "Flat, accessible boardwalk perfect for daily walks",
        "Close to Scripps Memorial Hospital Encinitas and UCSD",
        "Active senior community with beach activities",
        "Year-round outdoor dining and socializing",
        "Strong local pharmacy and medical services",
        "Beautiful sunsets and ocean views for mental wellness",
      ],
    },
    servicesContext: {
      title: "Beach-Side Senior Care",
      description: "Our PB caregivers embrace the beach lifestyle. We help seniors enjoy daily boardwalk walks, beach wheelchair access, and outdoor dining while providing comprehensive medical and personal care.",
    },
    zipCodes: ["92109"],
    coordinates: { lat: 32.7997, lng: -117.2356 },
  },
  {
    slug: "ocean-beach",
    name: "Ocean Beach",
    parentLocation: "san-diego",
    tagline: "Bohemian Spirit, Caring Hearts",
    localNickname: "OB",
    description: "Ocean Beach's eclectic, bohemian atmosphere and tight-knit community create a unique environment for seniors who value authenticity and connection.",
    heroImageUrl: "/images/subareas/ocean-beach.jpg",
    funFacts: [
      "Ocean Beach Pier is the longest concrete pier on the West Coast at 1,971 feet",
      "Dog Beach was one of the first official leash-free beaches in the United States",
      "The Wednesday Farmers Market has been running for over 30 years",
      "Newport Avenue is one of San Diego's best streets for antique shopping",
      "OB has maintained its 1960s counterculture vibe with locally-owned businesses",
    ],
    landmarks: [
      {
        name: "Ocean Beach Pier",
        description: "Longest concrete pier on the West Coast with restaurant at the end",
        imageUrl: "/images/landmarks/ob-pier.jpg",
        category: "historic",
      },
      {
        name: "Dog Beach",
        description: "Famous leash-free beach where dogs and owners play freely",
        imageUrl: "/images/landmarks/dog-beach.jpg",
        category: "beach",
      },
      {
        name: "Newport Avenue",
        description: "Main street lined with antique shops, surf stores, and local eateries",
        imageUrl: "/images/landmarks/newport-ave.jpg",
        category: "shopping",
      },
      {
        name: "Sunset Cliffs",
        description: "Dramatic coastal bluffs with spectacular sunset views",
        imageUrl: "/images/landmarks/sunset-cliffs.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "OB",
        meaning: "Ocean Beach neighborhood",
        usage: "OB has the best fish tacos in San Diego",
      },
      {
        term: "The Cliffs",
        meaning: "Sunset Cliffs Natural Park",
        usage: "We watch every sunset from the Cliffs",
      },
      {
        term: "Hodad's",
        meaning: "Famous local burger joint",
        usage: "You haven't lived until you've tried Hodad's",
      },
    ],
    weather: {
      averageTemp: "67°F year-round",
      climate: "Coastal with consistent ocean influence",
      bestMonths: ["April", "May", "September", "October", "November"],
      microclimate: "Point Loma blocks some fog, making OB sunnier than other beach communities. Strong afternoon sea breezes. Spectacular sunset lighting.",
    },
    whySpecial: {
      title: "Community-Centered Care",
      description: "OB's strong community bonds and local character create a supportive environment for seniors who value authentic connections.",
      highlights: [
        "Tight-knit community where neighbors know each other",
        "Weekly farmers market with fresh, local produce",
        "Flat terrain from beach to main street",
        "Independent shops and restaurants within walking distance",
        "Active local senior groups and social clubs",
        "Dog-friendly community for pet therapy benefits",
      ],
    },
    servicesContext: {
      title: "Care with OB Character",
      description: "Our OB caregivers fit right into the neighborhood's welcoming vibe. We help seniors enjoy the farmers market, walks on the pier, and the community gatherings that make OB special.",
    },
    zipCodes: ["92107"],
    coordinates: { lat: 32.7489, lng: -117.2494 },
  },
  {
    slug: "mission-beach",
    name: "Mission Beach",
    parentLocation: "san-diego",
    tagline: "Classic California, Compassionate Care",
    localNickname: "MB",
    description: "Mission Beach offers the quintessential Southern California beach experience with world-famous attractions and exceptional senior care services.",
    heroImageUrl: "/images/subareas/mission-beach.jpg",
    funFacts: [
      "Belmont Park's Giant Dipper roller coaster has been thrilling riders since 1925",
      "The beach is actually a narrow sandbar between the ocean and Mission Bay",
      "Mission Beach Boardwalk is one of the most iconic in California",
      "SeaWorld San Diego is just minutes away across Mission Bay",
      "The community spans just 2 miles but packs in beach, bay, and attractions",
    ],
    landmarks: [
      {
        name: "Belmont Park",
        description: "Historic beachfront amusement park with the iconic Giant Dipper coaster",
        imageUrl: "/images/landmarks/belmont-park.jpg",
        category: "entertainment",
      },
      {
        name: "Mission Beach Boardwalk",
        description: "3-mile oceanfront path connecting Mission Beach to Pacific Beach",
        imageUrl: "/images/landmarks/mb-boardwalk.jpg",
        category: "beach",
      },
      {
        name: "Mission Bay",
        description: "Largest man-made aquatic park in the country with calm waters",
        imageUrl: "/images/landmarks/mission-bay.jpg",
        category: "park",
      },
      {
        name: "The Plunge",
        description: "Historic indoor swimming pool at Belmont Park since 1925",
        imageUrl: "/images/landmarks/the-plunge.jpg",
        category: "entertainment",
      },
    ],
    localSlang: [
      {
        term: "MB",
        meaning: "Mission Beach",
        usage: "MB gets crowded on summer weekends",
      },
      {
        term: "The Bay",
        meaning: "Mission Bay",
        usage: "Let's kayak on the Bay this afternoon",
      },
      {
        term: "Belmont",
        meaning: "Belmont Park amusement area",
        usage: "The grandkids love Belmont",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Beach Mediterranean with bay influence",
      bestMonths: ["May", "June", "July", "August", "September"],
      microclimate: "Sandbar location provides both ocean and bay breezes. Slightly warmer than north beaches. Morning marine layer burns off quickly.",
    },
    whySpecial: {
      title: "Active Living in Paradise",
      description: "Mission Beach's unique location between ocean and bay provides endless options for active seniors.",
      highlights: [
        "Flat boardwalk perfect for walking and wheelchair access",
        "Calm bay waters ideal for water therapy",
        "Historic attractions for entertainment and nostalgia",
        "Close to multiple hospitals and medical centers",
        "Year-round outdoor activity options",
        "Strong vacation rental community means excellent local services",
      ],
    },
    servicesContext: {
      title: "Beachfront Care Excellence",
      description: "Our Mission Beach caregivers help seniors enjoy both bay and ocean activities, from calm kayaking to boardwalk strolls, while ensuring their health and safety needs are fully met.",
    },
    zipCodes: ["92109"],
    coordinates: { lat: 32.7710, lng: -117.2526 },
  },
  {
    slug: "point-loma",
    name: "Point Loma",
    parentLocation: "san-diego",
    tagline: "Historic Peninsula, Modern Care",
    localNickname: "The Point",
    description: "Point Loma's rich maritime history, stunning views, and established neighborhoods provide an ideal setting for distinguished senior care.",
    heroImageUrl: "/images/subareas/point-loma.jpg",
    funFacts: [
      "Cabrillo National Monument marks where Europeans first landed on the West Coast in 1542",
      "Point Loma Lighthouse guided ships from 1855 to 1891",
      "Home to the largest military population in San Diego with Naval Base Point Loma",
      "Liberty Station was the Naval Training Center from 1923 to 1997",
      "The peninsula offers views of downtown, Coronado, Mexico, and the Pacific",
    ],
    landmarks: [
      {
        name: "Cabrillo National Monument",
        description: "Historic site commemorating the first European expedition to land on the West Coast",
        imageUrl: "/images/landmarks/cabrillo.jpg",
        category: "historic",
      },
      {
        name: "Liberty Station",
        description: "Former Naval Training Center now a cultural and dining destination",
        imageUrl: "/images/landmarks/liberty-station.jpg",
        category: "shopping",
      },
      {
        name: "Point Loma Lighthouse",
        description: "Historic 1855 lighthouse with panoramic views of San Diego Bay",
        imageUrl: "/images/landmarks/pl-lighthouse.jpg",
        category: "historic",
      },
      {
        name: "Shelter Island",
        description: "Man-made peninsula with marinas, restaurants, and bay views",
        imageUrl: "/images/landmarks/shelter-island.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "The Point",
        meaning: "Point Loma peninsula",
        usage: "I've lived on the Point for 30 years",
      },
      {
        term: "Liberty Station",
        meaning: "The former Naval Training Center area",
        usage: "Let's grab dinner at Liberty Station",
      },
      {
        term: "The Village",
        meaning: "Point Loma Village shopping area",
        usage: "I do all my shopping in the Village",
      },
    ],
    weather: {
      averageTemp: "66°F year-round",
      climate: "Coastal with ocean on three sides",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Peninsula geography creates unique weather. Ocean side is cooler with more fog. Bay side is warmer and sunnier. Hilltop areas catch steady breezes.",
    },
    whySpecial: {
      title: "Distinguished Care on the Peninsula",
      description: "Point Loma's established neighborhoods and military heritage create a community that values service and caring for one another.",
      highlights: [
        "Strong VA and military medical services nearby",
        "Close to Sharp Memorial Hospital",
        "Established neighborhoods with long-term residents",
        "Beautiful parks and walking paths",
        "Liberty Station cultural amenities",
        "Rich history and community pride",
      ],
    },
    servicesContext: {
      title: "Peninsula Premium Care",
      description: "Our Point Loma caregivers appreciate the neighborhood's heritage and community values. We provide care that honors seniors' service and independence while ensuring their health needs are met.",
    },
    zipCodes: ["92106", "92107"],
    coordinates: { lat: 32.7157, lng: -117.2425 },
  },
  {
    slug: "coronado",
    name: "Coronado",
    parentLocation: "coronado",
    tagline: "Island Elegance, Exceptional Care",
    localNickname: "The Crown City",
    description: "Coronado's resort atmosphere, pristine beaches, and safe, walkable streets make it one of San Diego's most desirable locations for premium senior care.",
    heroImageUrl: "/images/subareas/coronado.jpg",
    funFacts: [
      "The Hotel del Coronado has hosted 16 U.S. presidents since opening in 1888",
      "Coronado Beach is consistently ranked among America's best beaches",
      "The Coronado Bridge is the third-longest bridge in California at 2.12 miles",
      "Home to Naval Air Station North Island, the birthplace of naval aviation",
      "The village has maintained a small-town feel despite being minutes from downtown",
    ],
    landmarks: [
      {
        name: "Hotel del Coronado",
        description: "Iconic 1888 Victorian beach resort and National Historic Landmark",
        imageUrl: "/images/landmarks/hotel-del.jpg",
        category: "historic",
      },
      {
        name: "Coronado Beach",
        description: "Award-winning beach with golden sand and stunning skyline views",
        imageUrl: "/images/landmarks/coronado-beach.jpg",
        category: "beach",
      },
      {
        name: "Orange Avenue",
        description: "Charming main street with boutiques, galleries, and dining",
        imageUrl: "/images/landmarks/orange-ave.jpg",
        category: "shopping",
      },
      {
        name: "Coronado Ferry Landing",
        description: "Waterfront marketplace with shops, restaurants, and bay views",
        imageUrl: "/images/landmarks/ferry-landing.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "The Del",
        meaning: "Hotel del Coronado",
        usage: "Let's have brunch at the Del this Sunday",
      },
      {
        term: "Crown City",
        meaning: "Coronado's official nickname",
        usage: "Crown City has the best sunsets",
      },
      {
        term: "The Strand",
        meaning: "Silver Strand State Beach area",
        usage: "We bike the Strand every weekend",
      },
    ],
    weather: {
      averageTemp: "67°F year-round",
      climate: "Perfect coastal Mediterranean",
      bestMonths: ["All year—Coronado has exceptional weather year-round"],
      microclimate: "Island geography creates stable, mild temperatures. Less fog than mainland beaches. Consistent afternoon sea breezes. Rarely above 75°F or below 55°F.",
    },
    whySpecial: {
      title: "Resort-Quality Care",
      description: "Coronado's safe streets, resort atmosphere, and excellent medical facilities make it perfect for seniors seeking the finest care environment.",
      highlights: [
        "Sharp Coronado Hospital on the island",
        "Extremely safe, walkable community",
        "Flat terrain ideal for mobility",
        "Resort amenities and dining options",
        "Strong senior community and activities",
        "Easy ferry access to downtown San Diego",
      ],
    },
    servicesContext: {
      title: "Crown City Premium Care",
      description: "Our Coronado caregivers provide white-glove service befitting the Crown City. We help seniors enjoy the beach, ferry rides to downtown, and the charming village atmosphere while ensuring exceptional care.",
    },
    zipCodes: ["92118"],
    coordinates: { lat: 32.6859, lng: -117.1831 },
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    parentLocation: "del-mar",
    tagline: "Where the Turf Meets the Surf",
    localNickname: "Del Mar by the Sea",
    description: "Del Mar combines world-class horse racing, beautiful beaches, and an upscale village atmosphere with exceptional senior care services.",
    heroImageUrl: "/images/subareas/del-mar.jpg",
    funFacts: [
      "Del Mar Racetrack's famous slogan 'Where the Turf Meets the Surf' was coined by Bing Crosby",
      "The Del Mar Fairgrounds hosts the San Diego County Fair, California's largest annual event",
      "Torrey Pines State Beach Reserve is one of the last remaining coastal wetlands in Southern California",
      "The village has only about 4,300 residents but hosts millions of annual visitors",
      "Del Mar has some of the most expensive real estate in San Diego County",
    ],
    landmarks: [
      {
        name: "Del Mar Racetrack",
        description: "Historic horse racing venue opened in 1937 by Bing Crosby",
        imageUrl: "/images/landmarks/del-mar-racetrack.jpg",
        category: "entertainment",
      },
      {
        name: "Del Mar Beach",
        description: "Pristine beach with dog-friendly areas and stunning sunset views",
        imageUrl: "/images/landmarks/del-mar-beach.jpg",
        category: "beach",
      },
      {
        name: "Torrey Pines State Reserve",
        description: "Protected coastal wilderness with rare Torrey pine trees",
        imageUrl: "/images/landmarks/torrey-pines.jpg",
        category: "park",
      },
      {
        name: "Del Mar Plaza",
        description: "Upscale shopping and dining center with ocean views",
        imageUrl: "/images/landmarks/del-mar-plaza.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "The Track",
        meaning: "Del Mar Racetrack",
        usage: "It's racing season—let's go to the Track",
      },
      {
        term: "The Village",
        meaning: "Downtown Del Mar",
        usage: "We're having dinner in the Village tonight",
      },
      {
        term: "Dog Beach",
        meaning: "North Beach off-leash area",
        usage: "I take my dog to Dog Beach every morning",
      },
    ],
    weather: {
      averageTemp: "66°F year-round",
      climate: "Coastal Mediterranean, slightly cooler",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "More marine influence than inland areas. Morning fog common in spring. Afternoon sea breezes moderate temperatures. Perfect for year-round outdoor activities.",
    },
    whySpecial: {
      title: "Exclusive Coastal Care",
      description: "Del Mar's upscale atmosphere and natural beauty create an exceptional environment for seniors seeking premium care.",
      highlights: [
        "Close to Scripps Memorial Hospital Encinitas",
        "Beautiful coastal walking trails",
        "World-class dining and entertainment",
        "Safe, low-crime community",
        "Active senior social scene",
        "Natural beauty promotes wellness",
      ],
    },
    servicesContext: {
      title: "Del Mar Distinguished Care",
      description: "Our Del Mar caregivers understand the refined lifestyle of the village. We accompany seniors to the races, help them enjoy beach walks, and ensure they can participate in the community's cultural events.",
    },
    zipCodes: ["92014"],
    coordinates: { lat: 32.9595, lng: -117.2653 },
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    parentLocation: "encinitas",
    tagline: "Flower Power, Caring Hours",
    localNickname: "The Flower Capital",
    description: "Encinitas blends surf culture, botanical beauty, and wellness-focused living with exceptional home health care for active seniors.",
    heroImageUrl: "/images/subareas/encinitas.jpg",
    funFacts: [
      "Encinitas is called the 'Flower Capital of the World' for its flower-growing heritage",
      "The Self-Realization Fellowship Temple has overlooked Swami's Beach since 1937",
      "Moonlight Beach has had free summer concerts every Wednesday since 1985",
      "Leucadia's Highway 101 is lined with more than 100 towering eucalyptus trees",
      "Home to some of the best surf breaks in Southern California including Swami's",
    ],
    landmarks: [
      {
        name: "Self-Realization Fellowship",
        description: "Serene meditation gardens and temple overlooking Swami's Beach",
        imageUrl: "/images/landmarks/srf-encinitas.jpg",
        category: "historic",
      },
      {
        name: "Moonlight Beach",
        description: "Family-friendly beach with volleyball, playground, and summer concerts",
        imageUrl: "/images/landmarks/moonlight-beach.jpg",
        category: "beach",
      },
      {
        name: "San Diego Botanic Garden",
        description: "37-acre garden featuring plants from around the world",
        imageUrl: "/images/landmarks/botanic-garden.jpg",
        category: "park",
      },
      {
        name: "Downtown Encinitas",
        description: "Historic Highway 101 with unique shops, cafes, and galleries",
        imageUrl: "/images/landmarks/downtown-encinitas.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "Swami's",
        meaning: "Famous surf break near Self-Realization Fellowship",
        usage: "The waves are perfect at Swami's today",
      },
      {
        term: "Leucadia",
        meaning: "Northern Encinitas neighborhood",
        usage: "Leucadia has the best breakfast spots",
      },
      {
        term: "The 101",
        meaning: "Historic Coast Highway 101",
        usage: "Let's cruise the 101 this afternoon",
      },
    ],
    weather: {
      averageTemp: "65°F year-round",
      climate: "Coastal Mediterranean with flower-perfect conditions",
      bestMonths: ["March", "April", "May", "September", "October"],
      microclimate: "Excellent growing conditions created the flower industry. Morning marine layer nurtures plants. Moderate temperatures year-round. Slightly cooler than southern beaches.",
    },
    whySpecial: {
      title: "Wellness-Centered Care",
      description: "Encinitas's focus on wellness, yoga, and natural living creates a healing environment for seniors.",
      highlights: [
        "Scripps Memorial Hospital Encinitas nearby",
        "Strong wellness and yoga community",
        "Beautiful botanical gardens for therapy",
        "Peaceful meditation centers",
        "Farm-to-table dining options",
        "Active outdoor lifestyle opportunities",
      ],
    },
    servicesContext: {
      title: "Holistic Care Approach",
      description: "Our Encinitas caregivers embrace the wellness-focused lifestyle. We help seniors enjoy the botanic gardens, beach walks, and the mindfulness practices that make Encinitas special.",
    },
    zipCodes: ["92024"],
    coordinates: { lat: 33.0369, lng: -117.2920 },
  },
  {
    slug: "carlsbad",
    name: "Carlsbad",
    parentLocation: "carlsbad",
    tagline: "Village by the Sea, Care You Can Trust",
    localNickname: "The Village by the Sea",
    description: "Carlsbad offers small-town charm, beautiful beaches, and world-famous attractions with premium home health care for seniors.",
    heroImageUrl: "/images/subareas/carlsbad.jpg",
    funFacts: [
      "LEGOLAND California welcomes over 2 million visitors annually",
      "The Flower Fields display 50 acres of Giant Tecolote Ranunculus each spring",
      "Carlsbad was named after the famous spa city of Karlsbad in Bohemia",
      "The city has 7 miles of pristine beaches",
      "Carlsbad Premium Outlets is one of the largest outlet malls in Southern California",
    ],
    landmarks: [
      {
        name: "LEGOLAND California",
        description: "Theme park and resort built for families with children ages 2-12",
        imageUrl: "/images/landmarks/legoland.jpg",
        category: "entertainment",
      },
      {
        name: "The Flower Fields",
        description: "50 acres of spectacular ranunculus blooms each spring",
        imageUrl: "/images/landmarks/flower-fields.jpg",
        category: "park",
      },
      {
        name: "Carlsbad Village",
        description: "Charming downtown with antique shops, restaurants, and ocean views",
        imageUrl: "/images/landmarks/carlsbad-village.jpg",
        category: "shopping",
      },
      {
        name: "Carlsbad State Beach",
        description: "Scenic beach with warm water and excellent swimming conditions",
        imageUrl: "/images/landmarks/carlsbad-beach.jpg",
        category: "beach",
      },
    ],
    localSlang: [
      {
        term: "The Village",
        meaning: "Downtown Carlsbad",
        usage: "The Village has the best antique shops",
      },
      {
        term: "The Fields",
        meaning: "The Flower Fields at Carlsbad Ranch",
        usage: "We visit the Fields every spring",
      },
      {
        term: "South Carlsbad",
        meaning: "Southern portion near Poinsettia",
        usage: "I live in South Carlsbad near the beach",
      },
    ],
    weather: {
      averageTemp: "64°F year-round",
      climate: "Coastal Mediterranean, mild year-round",
      bestMonths: ["March", "April", "May", "September", "October"],
      microclimate: "Northern location means slightly cooler temperatures. Less fog than southern beaches. Perfect spring weather for flower viewing. Comfortable year-round.",
    },
    whySpecial: {
      title: "Small-Town Care Excellence",
      description: "Carlsbad's village atmosphere and family-friendly environment create an ideal setting for seniors who value community.",
      highlights: [
        "Tri-City Medical Center nearby",
        "Easy access to Scripps hospitals",
        "Walkable downtown village",
        "Strong senior community programs",
        "Beautiful parks and beaches",
        "Family-oriented atmosphere",
      ],
    },
    servicesContext: {
      title: "Village-Style Senior Care",
      description: "Our Carlsbad caregivers help seniors enjoy the village atmosphere, from antique shopping downtown to walks on the beach and springtime visits to the Flower Fields.",
    },
    zipCodes: ["92008", "92009", "92010", "92011"],
    coordinates: { lat: 33.1581, lng: -117.3506 },
  },
  {
    slug: "mission-hills",
    name: "Mission Hills",
    parentLocation: "san-diego",
    tagline: "Historic Charm, Modern Care",
    localNickname: "The Hills",
    description: "Mission Hills combines historic architecture, tree-lined streets, and stunning views with exceptional home health care for discerning seniors.",
    heroImageUrl: "/images/subareas/mission-hills.jpg",
    funFacts: [
      "Mission Hills has one of the largest collections of historic homes in San Diego",
      "Pioneer Park offers panoramic views from downtown to the ocean",
      "The neighborhood has been home to San Diego's elite since the early 1900s",
      "Fort Stockton Drive is lined with some of the city's most impressive historic mansions",
      "The area's name comes from its location between Old Town and Presidio Hill",
    ],
    landmarks: [
      {
        name: "Pioneer Park",
        description: "Hilltop park with 360-degree views of San Diego Bay and beyond",
        imageUrl: "/images/landmarks/pioneer-park.jpg",
        category: "park",
      },
      {
        name: "Presidio Park",
        description: "Historic park on the site of the first European settlement in California",
        imageUrl: "/images/landmarks/presidio-park.jpg",
        category: "historic",
      },
      {
        name: "Fort Stockton Drive",
        description: "Scenic road lined with historic mansions and spectacular views",
        imageUrl: "/images/landmarks/fort-stockton.jpg",
        category: "historic",
      },
      {
        name: "Washington Street",
        description: "Main commercial strip with local restaurants and cafes",
        imageUrl: "/images/landmarks/washington-st.jpg",
        category: "dining",
      },
    ],
    localSlang: [
      {
        term: "The Hills",
        meaning: "Mission Hills neighborhood",
        usage: "We moved to the Hills five years ago",
      },
      {
        term: "Uptown",
        meaning: "Greater area including Mission Hills, Hillcrest, Bankers Hill",
        usage: "I live in Uptown near the park",
      },
      {
        term: "The Nursery",
        meaning: "Mission Hills Nursery, a landmark garden center",
        usage: "Get your plants at the Nursery",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mediterranean with mild, dry summers",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Hillside location means excellent air circulation. Morning fog burns off by mid-morning. Cooler breezes in summer. Warmer than coastal areas.",
    },
    whySpecial: {
      title: "Historic Elegance with Quality Care",
      description: "Mission Hills' established neighborhood and historic character create a dignified setting for senior care.",
      highlights: [
        "Close to UCSD Medical Center Hillcrest",
        "Quiet, established residential streets",
        "Beautiful parks with panoramic views",
        "Strong neighborhood community",
        "Historic architecture and gardens",
        "Easy access to Balboa Park",
      ],
    },
    servicesContext: {
      title: "Distinguished Hill Country Care",
      description: "Our Mission Hills caregivers respect the neighborhood's heritage. We help seniors enjoy the historic architecture, beautiful gardens, and stunning views while providing expert medical and personal care.",
    },
    zipCodes: ["92103"],
    coordinates: { lat: 32.7553, lng: -117.1717 },
  },
  {
    slug: "bankers-hill",
    name: "Bankers Hill",
    parentLocation: "san-diego",
    tagline: "Urban Sophistication, Caring Excellence",
    localNickname: "Park West",
    description: "Bankers Hill offers sophisticated urban living adjacent to Balboa Park with premium home health care for active, cultured seniors.",
    heroImageUrl: "/images/subareas/bankers-hill.jpg",
    funFacts: [
      "Named for the bankers who built mansions here in the early 1900s",
      "The neighborhood sits directly on the western edge of Balboa Park",
      "Home to some of San Diego's finest restaurants and cafes",
      "The historic Spruce Street Suspension Bridge connects to Bankers Hill",
      "Many original Craftsman and Victorian homes have been beautifully preserved",
    ],
    landmarks: [
      {
        name: "Balboa Park",
        description: "1,200-acre cultural park with museums, gardens, and the San Diego Zoo",
        imageUrl: "/images/landmarks/balboa-park-bh.jpg",
        category: "park",
      },
      {
        name: "Spruce Street Suspension Bridge",
        description: "Historic 375-foot pedestrian bridge built in 1912",
        imageUrl: "/images/landmarks/spruce-bridge.jpg",
        category: "historic",
      },
      {
        name: "Fifth Avenue",
        description: "Restaurant row with upscale dining and coffee shops",
        imageUrl: "/images/landmarks/fifth-ave-bh.jpg",
        category: "dining",
      },
      {
        name: "Marston House",
        description: "Historic Arts and Crafts mansion and museum in Balboa Park",
        imageUrl: "/images/landmarks/marston-house.jpg",
        category: "historic",
      },
    ],
    localSlang: [
      {
        term: "Park West",
        meaning: "Alternative name for Bankers Hill",
        usage: "I prefer calling it Park West",
      },
      {
        term: "The Bridge",
        meaning: "Spruce Street Suspension Bridge",
        usage: "Let's walk across the Bridge this morning",
      },
      {
        term: "Restaurant Row",
        meaning: "Fifth Avenue dining district",
        usage: "So many options on Restaurant Row",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mediterranean urban microclimate",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Urban location near the bay provides moderate temperatures. Less fog than coastal areas. Balboa Park creates local cooling effect. Pleasant year-round.",
    },
    whySpecial: {
      title: "Urban Living with Park Access",
      description: "Bankers Hill's location next to Balboa Park and walkable urban amenities make it ideal for active seniors.",
      highlights: [
        "Direct access to Balboa Park trails and gardens",
        "Walking distance to world-class museums",
        "Close to Scripps Mercy Hospital",
        "Fine dining and cafes on every block",
        "Historic architecture and urban charm",
        "Easy downtown access via walkable streets",
      ],
    },
    servicesContext: {
      title: "Sophisticated Urban Care",
      description: "Our Bankers Hill caregivers help seniors make the most of urban living—from daily walks in Balboa Park to enjoying the neighborhood's excellent restaurants and cultural amenities.",
    },
    zipCodes: ["92103"],
    coordinates: { lat: 32.7319, lng: -117.1653 },
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
