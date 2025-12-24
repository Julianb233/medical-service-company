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
  // ===== PRIORITY BATCH 2 - DECEMBER 24, 2025 =====
  {
    slug: "clairemont",
    name: "Clairemont",
    parentLocation: "san-diego",
    tagline: "Family Values, Caring Hearts",
    localNickname: "Claire",
    description: "Clairemont's family-friendly neighborhoods and convenient location provide an ideal setting for seniors who value community and accessibility.",
    heroImageUrl: "/images/subareas/clairemont.jpg",
    funFacts: [
      "One of San Diego's first master-planned communities, developed in the 1950s",
      "Tecolote Canyon Natural Park offers 6 miles of hiking trails",
      "Home to the beloved Clairemont Town Square shopping center since 1957",
      "The neighborhood has over 80,000 residents, making it one of San Diego's largest",
      "Bay Park area provides stunning Mission Bay views",
    ],
    landmarks: [
      {
        name: "Tecolote Canyon Natural Park",
        description: "900-acre urban canyon with hiking trails and native wildlife",
        imageUrl: "/images/landmarks/tecolote-canyon.jpg",
        category: "park",
      },
      {
        name: "Clairemont Town Square",
        description: "Classic community shopping center with local favorites since 1957",
        imageUrl: "/images/landmarks/clairemont-square.jpg",
        category: "shopping",
      },
      {
        name: "Mission Bay",
        description: "Beautiful bay views and recreation just minutes away",
        imageUrl: "/images/landmarks/mission-bay-claire.jpg",
        category: "beach",
      },
      {
        name: "Clairemont Community Park",
        description: "Large neighborhood park with sports facilities and gathering spaces",
        imageUrl: "/images/landmarks/clairemont-park.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "Claire",
        meaning: "Shortened nickname for Clairemont",
        usage: "I grew up in Claire back in the 70s",
      },
      {
        term: "The Square",
        meaning: "Clairemont Town Square shopping center",
        usage: "Let's grab lunch at the Square",
      },
      {
        term: "Tecolote",
        meaning: "Tecolote Canyon area",
        usage: "Great hiking in Tecolote this morning",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mild Mediterranean with bay influence",
      bestMonths: ["March", "April", "May", "September", "October"],
      microclimate: "Mesa location provides good air circulation. Less fog than coastal areas but cooler than inland. Consistent temperatures year-round.",
    },
    whySpecial: {
      title: "Family-Centered Community Care",
      description: "Clairemont's established neighborhoods and multi-generational families create a supportive environment for seniors.",
      highlights: [
        "Close to Sharp Memorial Hospital and Kaiser Clairemont",
        "Excellent public transportation connections",
        "Multiple pharmacies and medical offices nearby",
        "Strong neighborhood watch programs",
        "Affordable compared to coastal areas",
        "Easy freeway access for family visits",
      ],
    },
    servicesContext: {
      title: "Neighborhood-Focused Care",
      description: "Our Clairemont caregivers are part of the community. We help seniors stay connected with neighbors, enjoy Tecolote Canyon walks, and access the convenient local shopping and medical services.",
    },
    zipCodes: ["92117"],
    coordinates: { lat: 32.8284, lng: -117.2036 },
  },
  {
    slug: "university-city",
    name: "University City",
    parentLocation: "san-diego",
    tagline: "Academic Excellence, Exceptional Care",
    localNickname: "UC",
    description: "University City combines world-class education and research institutions with exceptional senior care near UCSD and the vibrant UTC area.",
    heroImageUrl: "/images/subareas/university-city.jpg",
    funFacts: [
      "Home to UC San Diego, one of the top research universities in the world",
      "Westfield UTC is one of San Diego's premier shopping destinations",
      "The neighborhood was developed in the 1960s around the new UC San Diego campus",
      "UCSD Medical Center provides cutting-edge healthcare right in the neighborhood",
      "Costa Verde and University Towne Centre areas offer urban village living",
    ],
    landmarks: [
      {
        name: "UC San Diego",
        description: "World-renowned research university with beautiful campus and cultural venues",
        imageUrl: "/images/landmarks/ucsd-campus.jpg",
        category: "historic",
      },
      {
        name: "Westfield UTC",
        description: "Premier open-air shopping center with luxury retailers and dining",
        imageUrl: "/images/landmarks/westfield-utc.jpg",
        category: "shopping",
      },
      {
        name: "UCSD Medical Center",
        description: "Top-ranked academic medical center with specialized care",
        imageUrl: "/images/landmarks/ucsd-medical.jpg",
        category: "historic",
      },
      {
        name: "Rose Canyon Open Space",
        description: "Natural preserve with hiking trails and wildlife viewing",
        imageUrl: "/images/landmarks/rose-canyon.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "UC",
        meaning: "University City neighborhood",
        usage: "We live in UC near the campus",
      },
      {
        term: "UTC",
        meaning: "University Towne Centre area",
        usage: "Let's meet at UTC for dinner",
      },
      {
        term: "The Campus",
        meaning: "UCSD campus area",
        usage: "I attend lectures at the Campus regularly",
      },
    ],
    weather: {
      averageTemp: "67°F year-round",
      climate: "Coastal influenced Mediterranean",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Higher elevation mesa with ocean breezes. Morning marine layer common. Cooler than inland valleys. Pleasant year-round temperatures.",
    },
    whySpecial: {
      title: "Academic Medical Excellence",
      description: "University City's proximity to UCSD Medical Center and research facilities provides unparalleled healthcare access.",
      highlights: [
        "Walking distance to UCSD Medical Center",
        "Access to clinical trials and cutting-edge treatments",
        "Highly educated, health-conscious community",
        "Excellent public transportation including trolley",
        "World-class dining and shopping at UTC",
        "Beautiful campus for therapeutic walks",
      ],
    },
    servicesContext: {
      title: "Research-Informed Care",
      description: "Our University City caregivers understand the academic community. We coordinate with UCSD specialists, help seniors access clinical programs, and ensure they enjoy the neighborhood's excellent amenities.",
    },
    zipCodes: ["92122"],
    coordinates: { lat: 32.8656, lng: -117.2215 },
  },
  {
    slug: "kensington",
    name: "Kensington",
    parentLocation: "san-diego",
    tagline: "Village Charm, Caring Community",
    localNickname: "Ken",
    description: "Kensington's historic village atmosphere, walkable streets, and tight-knit community create the perfect environment for seniors who value charm and connection.",
    heroImageUrl: "/images/subareas/kensington.jpg",
    funFacts: [
      "One of San Diego's most walkable neighborhoods with a Walk Score of 89",
      "The Kensington sign is a beloved neighborhood landmark since 1953",
      "Adams Avenue hosts one of San Diego's best antique districts",
      "The neighborhood was developed in the 1910s with Craftsman-style homes",
      "Ken Cinema is one of the oldest continuously running movie theaters in San Diego",
    ],
    landmarks: [
      {
        name: "Kensington Sign",
        description: "Iconic neighborhood gateway marking the heart of the village",
        imageUrl: "/images/landmarks/kensington-sign.jpg",
        category: "historic",
      },
      {
        name: "Ken Cinema",
        description: "Historic 1946 single-screen theater showing independent films",
        imageUrl: "/images/landmarks/ken-cinema.jpg",
        category: "entertainment",
      },
      {
        name: "Adams Avenue",
        description: "Main street with antiques, cafes, and local businesses",
        imageUrl: "/images/landmarks/adams-ave-ken.jpg",
        category: "shopping",
      },
      {
        name: "Kensington Park",
        description: "Community park with playground and gathering spaces",
        imageUrl: "/images/landmarks/kensington-park.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "Ken",
        meaning: "Kensington neighborhood",
        usage: "Ken has the best coffee shops",
      },
      {
        term: "The Sign",
        meaning: "The iconic Kensington gateway sign",
        usage: "Meet me by the Sign this afternoon",
      },
      {
        term: "Adams",
        meaning: "Adams Avenue commercial district",
        usage: "I found that antique on Adams",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Mild inland Mediterranean",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Slightly warmer than coastal areas. Morning fog rare. Pleasant breezes from canyon. Comfortable walking weather year-round.",
    },
    whySpecial: {
      title: "Village Living with Modern Care",
      description: "Kensington's walkable village and historic character create an ideal environment for independent seniors.",
      highlights: [
        "Highly walkable with flat sidewalks",
        "Close to Kaiser Permanente and Alvarado Hospital",
        "Strong neighborhood association and events",
        "Historic architecture and tree-lined streets",
        "Excellent local dining and shopping",
        "Active community of long-term residents",
      ],
    },
    servicesContext: {
      title: "Village-Style Senior Care",
      description: "Our Kensington caregivers embrace the neighborhood's walkable charm. We help seniors enjoy daily strolls to local cafes, attend Ken Cinema screenings, and stay connected with the tight-knit community.",
    },
    zipCodes: ["92116"],
    coordinates: { lat: 32.7618, lng: -117.1034 },
  },
  {
    slug: "normal-heights",
    name: "Normal Heights",
    parentLocation: "san-diego",
    tagline: "Artsy Soul, Caring Spirit",
    localNickname: "NoHo",
    description: "Normal Heights' artistic community and Adams Avenue culture corridor provide a vibrant setting for creative seniors who value authenticity.",
    heroImageUrl: "/images/subareas/normal-heights.jpg",
    funFacts: [
      "Named after the San Diego Normal School (now San Diego State University)",
      "Adams Avenue is home to the annual Adams Avenue Street Fair, San Diego's largest free music festival",
      "The neighborhood has one of the highest concentrations of independent coffee shops in San Diego",
      "Ward Canyon preserves a natural creek habitat in the heart of the neighborhood",
      "Normal Heights was one of San Diego's first streetcar suburbs in the early 1900s",
    ],
    landmarks: [
      {
        name: "Adams Avenue",
        description: "Eclectic main street with indie shops, restaurants, and live music venues",
        imageUrl: "/images/landmarks/adams-ave-nh.jpg",
        category: "entertainment",
      },
      {
        name: "Ward Canyon Neighborhood Park",
        description: "Natural canyon preserve with walking trails",
        imageUrl: "/images/landmarks/ward-canyon.jpg",
        category: "park",
      },
      {
        name: "Normal Heights Sign",
        description: "Classic neighborhood gateway sign on Adams Avenue",
        imageUrl: "/images/landmarks/nh-sign.jpg",
        category: "historic",
      },
      {
        name: "Lestat's Coffee House",
        description: "Iconic 24-hour coffeehouse and live music venue",
        imageUrl: "/images/landmarks/lestats.jpg",
        category: "dining",
      },
    ],
    localSlang: [
      {
        term: "NoHo",
        meaning: "Normal Heights neighborhood",
        usage: "NoHo has the best live music scene",
      },
      {
        term: "Adams",
        meaning: "Adams Avenue corridor",
        usage: "Everything's happening on Adams tonight",
      },
      {
        term: "The Street Fair",
        meaning: "Adams Avenue Street Fair",
        usage: "The Street Fair is the best weekend of the year",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Mild inland Mediterranean",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Canyon locations are slightly cooler. Less marine influence than coastal areas. Warm summer afternoons. Excellent fall and spring weather.",
    },
    whySpecial: {
      title: "Creative Community Care",
      description: "Normal Heights' artistic spirit and diverse community welcome seniors who value culture and creativity.",
      highlights: [
        "Active arts and music scene",
        "Close to Alvarado Hospital",
        "Diverse dining options on Adams Avenue",
        "Strong community events and festivals",
        "Natural canyon parks for walks",
        "Affordable housing compared to coastal areas",
      ],
    },
    servicesContext: {
      title: "Artsy Neighborhood Care",
      description: "Our Normal Heights caregivers appreciate the neighborhood's creative energy. We help seniors attend live music events, explore Adams Avenue shops, and stay engaged with the vibrant local arts scene.",
    },
    zipCodes: ["92116"],
    coordinates: { lat: 32.7622, lng: -117.1167 },
  },
  {
    slug: "bay-park",
    name: "Bay Park",
    parentLocation: "san-diego",
    tagline: "Bay Views, Caring Crew",
    localNickname: "Bay Park",
    description: "Bay Park's stunning Mission Bay views and family-friendly atmosphere create an ideal environment for seniors who love the water and outdoor activities.",
    heroImageUrl: "/images/subareas/bay-park.jpg",
    funFacts: [
      "Offers some of the best views of Mission Bay in all of San Diego",
      "The neighborhood sits on a mesa overlooking both Mission Bay and the ocean",
      "Home to many longtime San Diego families with multi-generational roots",
      "Close to both SeaWorld and Mission Bay water activities",
      "Developed primarily in the 1950s and 60s with mid-century modern homes",
    ],
    landmarks: [
      {
        name: "Mission Bay Views",
        description: "Panoramic overlooks of Mission Bay and Pacific Ocean",
        imageUrl: "/images/landmarks/bay-park-views.jpg",
        category: "park",
      },
      {
        name: "Mission Bay Park",
        description: "Largest man-made aquatic park in the country just below the neighborhood",
        imageUrl: "/images/landmarks/mission-bay-bp.jpg",
        category: "park",
      },
      {
        name: "Morena Boulevard",
        description: "Main commercial corridor with local shops and restaurants",
        imageUrl: "/images/landmarks/morena-blvd.jpg",
        category: "shopping",
      },
      {
        name: "Bay Park Community Park",
        description: "Neighborhood park with stunning bay views",
        imageUrl: "/images/landmarks/bay-park-comm.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "The Mesa",
        meaning: "Bay Park's elevated location",
        usage: "We love the views from the Mesa",
      },
      {
        term: "Morena",
        meaning: "Morena Boulevard commercial area",
        usage: "I'm picking up groceries on Morena",
      },
      {
        term: "The Bay",
        meaning: "Mission Bay",
        usage: "We kayak on the Bay every weekend",
      },
    ],
    weather: {
      averageTemp: "67°F year-round",
      climate: "Coastal Mediterranean with bay influence",
      bestMonths: ["April", "May", "June", "September", "October"],
      microclimate: "Mesa elevation catches ocean breezes. Spectacular sunset views. Moderate temperatures year-round. Less fog than beach level.",
    },
    whySpecial: {
      title: "Bay-Side Senior Living",
      description: "Bay Park's combination of stunning views, family atmosphere, and outdoor access makes it perfect for active seniors.",
      highlights: [
        "Close to Mission Bay water activities",
        "Easy access to SeaWorld and attractions",
        "Family-oriented neighborhood",
        "Beautiful walking paths with views",
        "Near multiple hospitals and medical facilities",
        "Strong community of longtime residents",
      ],
    },
    servicesContext: {
      title: "Bay-Focused Care",
      description: "Our Bay Park caregivers help seniors enjoy the spectacular bay views and water activities. From scenic drives to accessible bay paths, we ensure clients can experience all the neighborhood offers.",
    },
    zipCodes: ["92110"],
    coordinates: { lat: 32.7901, lng: -117.2089 },
  },
  {
    slug: "linda-vista",
    name: "Linda Vista",
    parentLocation: "san-diego",
    tagline: "Diverse Community, Unified Care",
    localNickname: "LV",
    description: "Linda Vista's rich cultural diversity and strong community bonds create a welcoming environment for seniors from all backgrounds.",
    heroImageUrl: "/images/subareas/linda-vista.jpg",
    funFacts: [
      "One of San Diego's most ethnically diverse neighborhoods",
      "Home to the University of San Diego, a beautiful hilltop campus",
      "Linda Vista means 'beautiful view' in Spanish—and the views are stunning",
      "The neighborhood's Convoy District is famous for Asian cuisine",
      "Originally developed as worker housing during World War II",
    ],
    landmarks: [
      {
        name: "University of San Diego",
        description: "Beautiful Spanish Renaissance campus overlooking Mission Bay",
        imageUrl: "/images/landmarks/usd-campus.jpg",
        category: "historic",
      },
      {
        name: "Convoy District",
        description: "Vibrant Asian dining and shopping district",
        imageUrl: "/images/landmarks/convoy-district.jpg",
        category: "dining",
      },
      {
        name: "Linda Vista Community Park",
        description: "Large neighborhood park with recreation facilities",
        imageUrl: "/images/landmarks/lv-park.jpg",
        category: "park",
      },
      {
        name: "Tecolote Canyon",
        description: "Natural canyon with hiking trails bordering the neighborhood",
        imageUrl: "/images/landmarks/tecolote-lv.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "LV",
        meaning: "Linda Vista neighborhood",
        usage: "LV has the best pho in San Diego",
      },
      {
        term: "Convoy",
        meaning: "Convoy Street Asian district",
        usage: "We're getting dim sum on Convoy",
      },
      {
        term: "USD",
        meaning: "University of San Diego",
        usage: "The USD campus is beautiful",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mild Mediterranean with mesa elevation",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Elevated location provides good air flow. Slightly warmer than coastal areas. Views extend to bay and ocean. Pleasant year-round.",
    },
    whySpecial: {
      title: "Culturally Rich Care",
      description: "Linda Vista's diversity means we provide culturally sensitive care that respects each senior's background and traditions.",
      highlights: [
        "Culturally diverse caregivers available",
        "Multiple language capabilities",
        "Close to Sharp Memorial Hospital",
        "Excellent Asian dining options",
        "Strong community organizations",
        "Beautiful USD campus nearby",
      ],
    },
    servicesContext: {
      title: "Multicultural Senior Care",
      description: "Our Linda Vista caregivers reflect the neighborhood's diversity. We provide culturally competent care, help seniors enjoy Convoy District cuisine, and connect them with community resources in their preferred language.",
    },
    zipCodes: ["92111"],
    coordinates: { lat: 32.7927, lng: -117.1687 },
  },
  // ===== PRIORITY 2: INLAND COMMUNITIES =====
  {
    slug: "scripps-ranch",
    name: "Scripps Ranch",
    parentLocation: "san-diego",
    tagline: "Upscale Living, Exceptional Care",
    localNickname: "Scripps",
    description: "Scripps Ranch's tree-lined streets, excellent schools, and family-oriented community provide an ideal environment for seniors seeking premium care in an upscale setting.",
    heroImageUrl: "/images/subareas/scripps-ranch.jpg",
    funFacts: [
      "Named after newspaper magnate E.W. Scripps who owned a ranch here in the early 1900s",
      "Home to Lake Miramar, a popular destination for hiking and fishing",
      "Known for its eucalyptus-lined streets and master-planned neighborhoods",
      "The community has some of San Diego's top-rated schools",
      "Scripps Ranch was largely rebuilt after the devastating 2003 Cedar Fire",
    ],
    landmarks: [
      {
        name: "Lake Miramar",
        description: "Scenic reservoir with 5-mile walking trail and fishing",
        imageUrl: "/images/landmarks/lake-miramar.jpg",
        category: "park",
      },
      {
        name: "Scripps Ranch Community Park",
        description: "Large neighborhood park with sports facilities and gathering areas",
        imageUrl: "/images/landmarks/scripps-community-park.jpg",
        category: "park",
      },
      {
        name: "Scripps Ranch Boulevard",
        description: "Main thoroughfare with shopping, dining, and services",
        imageUrl: "/images/landmarks/scripps-ranch-blvd.jpg",
        category: "shopping",
      },
      {
        name: "Hoyt Park",
        description: "Community park with beautiful eucalyptus groves",
        imageUrl: "/images/landmarks/hoyt-park.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "Scripps",
        meaning: "Scripps Ranch neighborhood",
        usage: "We moved to Scripps for the schools",
      },
      {
        term: "The Lake",
        meaning: "Lake Miramar",
        usage: "I walk the Lake every morning",
      },
      {
        term: "The Ranch",
        meaning: "Scripps Ranch community",
        usage: "The Ranch has a great community spirit",
      },
    ],
    weather: {
      averageTemp: "70°F year-round",
      climate: "Inland Mediterranean, warmer than coast",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Inland location means warmer summers and cooler winters. Less marine influence. Beautiful fall and spring weather. Can reach 90s in summer.",
    },
    whySpecial: {
      title: "Upscale Community Care",
      description: "Scripps Ranch's affluent, family-oriented atmosphere provides excellent resources for senior care.",
      highlights: [
        "Close to Scripps Memorial Hospital La Jolla",
        "Beautiful walking trails around Lake Miramar",
        "Excellent local medical offices and pharmacies",
        "Strong community support networks",
        "Safe, quiet residential streets",
        "High-quality local services",
      ],
    },
    servicesContext: {
      title: "Premium Ranch Care",
      description: "Our Scripps Ranch caregivers understand the community's standards. We provide exceptional care that matches the neighborhood's quality, helping seniors enjoy Lake Miramar walks and the area's excellent amenities.",
    },
    zipCodes: ["92131"],
    coordinates: { lat: 32.9027, lng: -117.1025 },
  },
  {
    slug: "rancho-penasquitos",
    name: "Rancho Penasquitos",
    parentLocation: "san-diego",
    tagline: "Family Community, Caring Neighbors",
    localNickname: "PQ",
    description: "Rancho Penasquitos' master-planned neighborhoods, natural open spaces, and strong family values create an ideal setting for seniors who want to stay close to loved ones.",
    heroImageUrl: "/images/subareas/rancho-penasquitos.jpg",
    funFacts: [
      "One of San Diego's largest master-planned communities with over 50,000 residents",
      "Los Penasquitos Canyon Preserve offers 12 miles of trails through pristine wilderness",
      "The name means 'Ranch of the Little Cliffs' in Spanish",
      "Home to one of San Diego's oldest adobe structures from the 1820s",
      "Developed in the 1980s with a focus on family-friendly amenities",
    ],
    landmarks: [
      {
        name: "Los Penasquitos Canyon Preserve",
        description: "3,700-acre wilderness preserve with waterfall and historic adobe",
        imageUrl: "/images/landmarks/penasquitos-canyon.jpg",
        category: "park",
      },
      {
        name: "Rancho Penasquitos Town Center",
        description: "Community shopping center with essential services",
        imageUrl: "/images/landmarks/pq-town-center.jpg",
        category: "shopping",
      },
      {
        name: "Black Mountain Open Space",
        description: "1,554-acre preserve with hiking and stunning views",
        imageUrl: "/images/landmarks/black-mountain.jpg",
        category: "park",
      },
      {
        name: "Canyonside Recreation Center",
        description: "Community center with senior programs and activities",
        imageUrl: "/images/landmarks/canyonside-rec.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "PQ",
        meaning: "Rancho Penasquitos",
        usage: "PQ has great trails and parks",
      },
      {
        term: "The Canyon",
        meaning: "Los Penasquitos Canyon Preserve",
        usage: "We hike the Canyon every weekend",
      },
      {
        term: "Rancho P",
        meaning: "Rancho Penasquitos",
        usage: "Rancho P is perfect for families",
      },
    ],
    weather: {
      averageTemp: "71°F year-round",
      climate: "Inland valley Mediterranean",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Inland location means warmer days and cooler nights. Protected from coastal fog. Hot summer afternoons possible. Beautiful springs and falls.",
    },
    whySpecial: {
      title: "Family-Focused Senior Care",
      description: "PQ's strong family communities mean seniors stay connected to loved ones while receiving excellent care.",
      highlights: [
        "Multi-generational neighborhoods",
        "Excellent community parks and recreation",
        "Close to Poway and Scripps hospitals",
        "Natural trails for therapeutic walks",
        "Strong neighborhood associations",
        "Active senior community programs",
      ],
    },
    servicesContext: {
      title: "Community-Centered Care",
      description: "Our PQ caregivers help seniors stay connected with family and community. We facilitate visits, accompany clients on canyon walks, and ensure they enjoy the neighborhood's excellent parks and services.",
    },
    zipCodes: ["92129"],
    coordinates: { lat: 32.9595, lng: -117.1143 },
  },
  {
    slug: "mira-mesa",
    name: "Mira Mesa",
    parentLocation: "san-diego",
    tagline: "Tech Hub, Caring Community",
    localNickname: "MM",
    description: "Mira Mesa's diverse community, tech industry presence, and modern amenities create a dynamic environment for seniors who value convenience and connectivity.",
    heroImageUrl: "/images/subareas/mira-mesa.jpg",
    funFacts: [
      "One of San Diego's most ethnically diverse neighborhoods",
      "Home to major tech companies including Qualcomm's headquarters",
      "Mira Mesa Boulevard has one of the highest concentrations of restaurants in San Diego",
      "The neighborhood hosts the annual Mira Mesa Street Fair, San Diego's second largest",
      "Known for excellent Asian cuisine, especially Filipino and Vietnamese restaurants",
    ],
    landmarks: [
      {
        name: "Mira Mesa Boulevard",
        description: "Main commercial corridor with diverse dining and shopping",
        imageUrl: "/images/landmarks/mira-mesa-blvd.jpg",
        category: "shopping",
      },
      {
        name: "Los Penasquitos Canyon",
        description: "Natural preserve at the neighborhood's edge with hiking trails",
        imageUrl: "/images/landmarks/penasquitos-mm.jpg",
        category: "park",
      },
      {
        name: "Mira Mesa Community Park",
        description: "Large park with sports facilities and recreation center",
        imageUrl: "/images/landmarks/mm-community-park.jpg",
        category: "park",
      },
      {
        name: "Camino Ruiz Plaza",
        description: "Shopping center with diverse retail and services",
        imageUrl: "/images/landmarks/camino-ruiz.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "MM",
        meaning: "Mira Mesa neighborhood",
        usage: "MM has the best Filipino food",
      },
      {
        term: "The Boulevard",
        meaning: "Mira Mesa Boulevard",
        usage: "Everything you need is on the Boulevard",
      },
      {
        term: "Mesa",
        meaning: "Mira Mesa area",
        usage: "I've lived on the Mesa for years",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Inland Mediterranean, warmer than coast",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Mesa location provides good air circulation. Warmer than coastal areas but cooler than valleys. Comfortable year-round with warm summers.",
    },
    whySpecial: {
      title: "Modern Community Care",
      description: "Mira Mesa's diversity and modern amenities provide excellent resources for seniors from all backgrounds.",
      highlights: [
        "Culturally diverse caregivers available",
        "Close to Scripps and Kaiser hospitals",
        "Excellent international dining options",
        "Strong community programs",
        "Modern shopping and services",
        "Easy freeway access to medical facilities",
      ],
    },
    servicesContext: {
      title: "Diverse Community Care",
      description: "Our Mira Mesa caregivers represent the neighborhood's diversity. We provide culturally sensitive care, help seniors enjoy the diverse dining scene, and ensure access to the area's modern amenities.",
    },
    zipCodes: ["92126"],
    coordinates: { lat: 32.9156, lng: -117.1430 },
  },
  {
    slug: "tierrasanta",
    name: "Tierrasanta",
    parentLocation: "san-diego",
    tagline: "Island in the Hills, Caring at Heart",
    localNickname: "T-Santa",
    description: "Tierrasanta's scenic hilltop location, tight-knit community, and natural surroundings create a peaceful environment for seniors seeking quality care.",
    heroImageUrl: "/images/subareas/tierrasanta.jpg",
    funFacts: [
      "Known as 'The Island in the Hills' for its isolated hilltop location",
      "Completely surrounded by Mission Trails Regional Park",
      "Home to Cowles Mountain, the highest point in the city of San Diego",
      "The community was built on land from the former Camp Elliott military base",
      "Has only two main entrances, creating a secure, community feel",
    ],
    landmarks: [
      {
        name: "Mission Trails Regional Park",
        description: "7,220-acre natural park surrounding the community with hiking trails",
        imageUrl: "/images/landmarks/mission-trails.jpg",
        category: "park",
      },
      {
        name: "Cowles Mountain",
        description: "San Diego's highest peak with panoramic city views",
        imageUrl: "/images/landmarks/cowles-mountain.jpg",
        category: "park",
      },
      {
        name: "Tierrasanta Town Center",
        description: "Community shopping center with local services",
        imageUrl: "/images/landmarks/tierrasanta-town.jpg",
        category: "shopping",
      },
      {
        name: "Old Mission Dam",
        description: "Historic 1816 dam, the oldest in the western U.S.",
        imageUrl: "/images/landmarks/old-mission-dam.jpg",
        category: "historic",
      },
    ],
    localSlang: [
      {
        term: "T-Santa",
        meaning: "Tierrasanta neighborhood",
        usage: "T-Santa is the best-kept secret in San Diego",
      },
      {
        term: "The Island",
        meaning: "Tierrasanta (the island in the hills)",
        usage: "Life on the Island is peaceful",
      },
      {
        term: "Cowles",
        meaning: "Cowles Mountain",
        usage: "I hike Cowles every weekend",
      },
    ],
    weather: {
      averageTemp: "70°F year-round",
      climate: "Inland Mediterranean with canyon influence",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Hilltop location provides excellent air flow. Warmer than coastal areas. Beautiful views on clear days. Cool canyon breezes in evenings.",
    },
    whySpecial: {
      title: "Secluded Community Care",
      description: "Tierrasanta's tight-knit community and natural surroundings offer a peaceful, secure environment for seniors.",
      highlights: [
        "Surrounded by natural open space",
        "Very low crime, close-knit community",
        "Scenic walking trails everywhere",
        "Close to Alvarado Hospital",
        "Strong neighborhood associations",
        "Peaceful, quiet atmosphere",
      ],
    },
    servicesContext: {
      title: "Hilltop Haven Care",
      description: "Our Tierrasanta caregivers appreciate the neighborhood's peaceful character. We help seniors enjoy the natural surroundings, maintain connections in this close-knit community, and access medical services.",
    },
    zipCodes: ["92124"],
    coordinates: { lat: 32.8231, lng: -117.0992 },
  },
  {
    slug: "serra-mesa",
    name: "Serra Mesa",
    parentLocation: "san-diego",
    tagline: "Central Location, Caring Station",
    localNickname: "Serra",
    description: "Serra Mesa's central location, proximity to major hospitals, and established neighborhoods make it ideal for seniors who need convenient healthcare access.",
    heroImageUrl: "/images/subareas/serra-mesa.jpg",
    funFacts: [
      "Home to Rady Children's Hospital and Sharp Memorial Hospital complex",
      "Named after Father Junipero Serra, founder of California's missions",
      "One of San Diego's most centrally located neighborhoods",
      "Adjacent to Mission Valley shopping and entertainment",
      "Features a mix of single-family homes and senior living communities",
    ],
    landmarks: [
      {
        name: "Sharp Memorial Hospital",
        description: "Major regional hospital with comprehensive medical services",
        imageUrl: "/images/landmarks/sharp-memorial.jpg",
        category: "historic",
      },
      {
        name: "Rady Children's Hospital",
        description: "Top-ranked children's hospital, often visited by grandparents",
        imageUrl: "/images/landmarks/rady-childrens.jpg",
        category: "historic",
      },
      {
        name: "Serra Mesa Recreation Center",
        description: "Community center with senior programs and activities",
        imageUrl: "/images/landmarks/serra-mesa-rec.jpg",
        category: "park",
      },
      {
        name: "Mission Valley Mall",
        description: "Major shopping destination just minutes away",
        imageUrl: "/images/landmarks/mission-valley.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "Serra",
        meaning: "Serra Mesa neighborhood",
        usage: "Serra is so convenient to everything",
      },
      {
        term: "Hospital Row",
        meaning: "The medical facility corridor",
        usage: "All the best doctors are on Hospital Row",
      },
      {
        term: "The Mesa",
        meaning: "Serra Mesa area",
        usage: "We're up on the Mesa near Sharp",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Inland Mediterranean, moderate",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Central location means moderate temperatures. Protected from strong coastal winds. Pleasant year-round. Slightly warmer than beach areas.",
    },
    whySpecial: {
      title: "Medical Convenience Care",
      description: "Serra Mesa's proximity to major hospitals makes it the ideal location for seniors with healthcare needs.",
      highlights: [
        "Adjacent to Sharp Memorial Hospital",
        "Minutes from Rady Children's (for family visits)",
        "Multiple specialist offices nearby",
        "Easy access to Mission Valley amenities",
        "Strong senior living community",
        "Central location for family visits",
      ],
    },
    servicesContext: {
      title: "Hospital-Adjacent Care",
      description: "Our Serra Mesa caregivers coordinate seamlessly with nearby hospitals. We help seniors manage appointments, access specialists, and enjoy the convenience of living near San Diego's premier medical facilities.",
    },
    zipCodes: ["92123"],
    coordinates: { lat: 32.7998, lng: -117.1280 },
  },
  {
    slug: "allied-gardens",
    name: "Allied Gardens",
    parentLocation: "san-diego",
    tagline: "Quiet Community, Quality Care",
    localNickname: "Allied",
    description: "Allied Gardens' peaceful residential streets, proximity to nature, and established community provide a tranquil setting for seniors seeking quality home care.",
    heroImageUrl: "/images/subareas/allied-gardens.jpg",
    funFacts: [
      "Named for the Allied Building Company that developed the area in the 1950s",
      "Adjacent to Mission Trails Regional Park with miles of hiking trails",
      "One of San Diego's most stable, established neighborhoods",
      "Home to SDSU's Campanile, visible from many vantage points",
      "Features tree-lined streets with well-maintained mid-century homes",
    ],
    landmarks: [
      {
        name: "Mission Trails Regional Park",
        description: "Massive natural park with trails just steps from homes",
        imageUrl: "/images/landmarks/mission-trails-ag.jpg",
        category: "park",
      },
      {
        name: "Navajo Road",
        description: "Main commercial street with local shops and services",
        imageUrl: "/images/landmarks/navajo-road.jpg",
        category: "shopping",
      },
      {
        name: "Allied Gardens Recreation Center",
        description: "Community center with senior activities and programs",
        imageUrl: "/images/landmarks/allied-rec.jpg",
        category: "park",
      },
      {
        name: "Grantville Trolley Station",
        description: "Light rail access to downtown and Mission Valley",
        imageUrl: "/images/landmarks/grantville-trolley.jpg",
        category: "historic",
      },
    ],
    localSlang: [
      {
        term: "Allied",
        meaning: "Allied Gardens neighborhood",
        usage: "Allied is such a quiet, peaceful area",
      },
      {
        term: "The Trails",
        meaning: "Mission Trails Regional Park",
        usage: "I walk the Trails every day",
      },
      {
        term: "Navajo",
        meaning: "Navajo Road commercial area",
        usage: "Everything I need is on Navajo",
      },
    ],
    weather: {
      averageTemp: "70°F year-round",
      climate: "Inland Mediterranean with canyon breezes",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Near canyons means cooler morning air. Warmer afternoons than coast. Beautiful fall weather. Cool evening breezes from Mission Trails.",
    },
    whySpecial: {
      title: "Peaceful Neighborhood Care",
      description: "Allied Gardens' quiet streets and natural beauty create a healing environment for seniors.",
      highlights: [
        "Steps from Mission Trails hiking",
        "Close to Alvarado Hospital",
        "Quiet, established residential streets",
        "Strong community of long-term residents",
        "Trolley access to medical facilities",
        "Safe, peaceful atmosphere",
      ],
    },
    servicesContext: {
      title: "Tranquil Community Care",
      description: "Our Allied Gardens caregivers appreciate the neighborhood's peaceful character. We help seniors enjoy nature walks in Mission Trails, maintain community connections, and access medical care via trolley.",
    },
    zipCodes: ["92120"],
    coordinates: { lat: 32.7745, lng: -117.0768 },
  },
  // ===== PRIORITY 3: URBAN/HISTORIC NEIGHBORHOODS =====
  {
    slug: "university-heights",
    name: "University Heights",
    parentLocation: "san-diego",
    tagline: "Urban Village, Caring Neighbors",
    localNickname: "UH",
    description: "University Heights' walkable streets, trendy cafes, and strong community spirit create an ideal urban village environment for seniors who love city life.",
    heroImageUrl: "/images/subareas/university-heights.jpg",
    funFacts: [
      "Named for the San Diego Normal School (now SDSU) that was located here until 1931",
      "Home to the historic University Heights sign on Park Boulevard",
      "Park Boulevard features one of San Diego's best cafe and restaurant scenes",
      "The neighborhood has a Walk Score of 88, one of San Diego's most walkable",
      "Trolley Barn Park commemorates the streetcar system that built the neighborhood",
    ],
    landmarks: [
      {
        name: "University Heights Sign",
        description: "Historic neighborhood gateway on Park Boulevard",
        imageUrl: "/images/landmarks/uh-sign.jpg",
        category: "historic",
      },
      {
        name: "Park Boulevard",
        description: "Trendy main street with cafes, restaurants, and boutiques",
        imageUrl: "/images/landmarks/park-blvd.jpg",
        category: "dining",
      },
      {
        name: "Trolley Barn Park",
        description: "Historic park on the site of the original streetcar barn",
        imageUrl: "/images/landmarks/trolley-barn.jpg",
        category: "park",
      },
      {
        name: "North Park/University Heights Library",
        description: "Community library serving both neighborhoods",
        imageUrl: "/images/landmarks/uh-library.jpg",
        category: "historic",
      },
    ],
    localSlang: [
      {
        term: "UH",
        meaning: "University Heights",
        usage: "UH has the best coffee in town",
      },
      {
        term: "Park Blvd",
        meaning: "Park Boulevard commercial strip",
        usage: "Let's meet on Park Blvd for brunch",
      },
      {
        term: "Uptown",
        meaning: "Greater area including UH, Hillcrest, North Park",
        usage: "We live in Uptown near the library",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Mild Mediterranean, slightly inland",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Between coast and inland, UH enjoys moderate temperatures. Less fog than Hillcrest. Pleasant year-round with comfortable walking weather.",
    },
    whySpecial: {
      title: "Urban Village Care",
      description: "University Heights' walkable streets and tight-knit community create the perfect environment for independent seniors.",
      highlights: [
        "Extremely walkable to shops and cafes",
        "Close to Hillcrest medical facilities",
        "Strong neighborhood association",
        "Excellent local dining options",
        "Active community events",
        "Easy trolley access to hospitals",
      ],
    },
    servicesContext: {
      title: "Neighborhood Cafe Care",
      description: "Our UH caregivers help seniors enjoy the neighborhood's walkable lifestyle—morning coffee on Park Boulevard, community events at Trolley Barn Park, and easy access to nearby medical services.",
    },
    zipCodes: ["92104"],
    coordinates: { lat: 32.7655, lng: -117.1385 },
  },
  {
    slug: "south-park",
    name: "South Park",
    parentLocation: "san-diego",
    tagline: "Hip Neighborhood, Heartfelt Care",
    localNickname: "SoPa",
    description: "South Park's artsy vibe, farm-to-table dining, and creative community offer a unique setting for seniors who appreciate culture and authenticity.",
    heroImageUrl: "/images/subareas/south-park.jpg",
    funFacts: [
      "South Park is one of San Diego's oldest residential neighborhoods, dating to 1906",
      "Fern Street is known for its beautiful Craftsman homes and tree-lined streets",
      "The neighborhood hosts the annual South Park Walkabout showcasing local businesses",
      "Home to some of San Diego's best farm-to-table restaurants",
      "The South Park sign on Grape Street is a beloved neighborhood landmark",
    ],
    landmarks: [
      {
        name: "Grape Street",
        description: "Main street with boutiques, cafes, and local restaurants",
        imageUrl: "/images/landmarks/grape-street.jpg",
        category: "shopping",
      },
      {
        name: "South Park Sign",
        description: "Classic neighborhood marker welcoming visitors",
        imageUrl: "/images/landmarks/south-park-sign.jpg",
        category: "historic",
      },
      {
        name: "Fern Street",
        description: "Historic residential street with beautiful Craftsman homes",
        imageUrl: "/images/landmarks/fern-street.jpg",
        category: "historic",
      },
      {
        name: "South Park Community Garden",
        description: "Community garden bringing neighbors together",
        imageUrl: "/images/landmarks/sp-garden.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "SoPa",
        meaning: "South Park neighborhood",
        usage: "SoPa has the best brunch spots",
      },
      {
        term: "The Walkabout",
        meaning: "South Park Walkabout event",
        usage: "Don't miss the Walkabout this month",
      },
      {
        term: "Grape Street",
        meaning: "Main commercial area",
        usage: "Everything good is on Grape Street",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Mild Mediterranean with slight inland influence",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Slightly warmer than coastal areas. Pleasant walking weather most days. Beautiful spring and fall seasons.",
    },
    whySpecial: {
      title: "Artsy Community Care",
      description: "South Park's creative community and local character make it perfect for seniors who appreciate authenticity.",
      highlights: [
        "Walkable to shops and restaurants",
        "Strong creative community",
        "Close to Balboa Park",
        "Farm-to-table dining options",
        "Active neighborhood events",
        "Near Hillcrest medical facilities",
      ],
    },
    servicesContext: {
      title: "Creative Community Care",
      description: "Our South Park caregivers embrace the neighborhood's artsy spirit. We help seniors enjoy local cafes, attend Walkabout events, and stay connected to this creative community.",
    },
    zipCodes: ["92102"],
    coordinates: { lat: 32.7210, lng: -117.1317 },
  },
  {
    slug: "golden-hill",
    name: "Golden Hill",
    parentLocation: "san-diego",
    tagline: "Historic Heights, Caring Hearts",
    localNickname: "Golden Hill",
    description: "Golden Hill's Victorian homes, canyon views, and historic character provide a distinctive setting for seniors who appreciate architecture and community.",
    heroImageUrl: "/images/subareas/golden-hill.jpg",
    funFacts: [
      "Home to some of San Diego's best-preserved Victorian architecture",
      "The neighborhood overlooks the spectacular views of downtown and the bay",
      "Golden Hill Park features tennis courts and beautiful city views",
      "Many buildings date to the 1880s-1910s housing boom",
      "The 25th Street corridor is experiencing a renaissance with new restaurants and shops",
    ],
    landmarks: [
      {
        name: "Golden Hill Park",
        description: "Hilltop park with tennis courts and panoramic views",
        imageUrl: "/images/landmarks/golden-hill-park.jpg",
        category: "park",
      },
      {
        name: "25th Street",
        description: "Emerging commercial corridor with cafes and shops",
        imageUrl: "/images/landmarks/25th-street.jpg",
        category: "shopping",
      },
      {
        name: "Victorian Homes",
        description: "Historic residential streets with beautifully preserved Victorian architecture",
        imageUrl: "/images/landmarks/gh-victorians.jpg",
        category: "historic",
      },
      {
        name: "Grape Street Dog Park",
        description: "Popular community gathering spot for dog owners",
        imageUrl: "/images/landmarks/grape-dog-park.jpg",
        category: "park",
      },
    ],
    localSlang: [
      {
        term: "The Hill",
        meaning: "Golden Hill neighborhood",
        usage: "Views from the Hill are amazing",
      },
      {
        term: "25th",
        meaning: "25th Street commercial area",
        usage: "That new cafe on 25th is great",
      },
      {
        term: "Victorian Row",
        meaning: "Streets with historic Victorian homes",
        usage: "I love walking Victorian Row",
      },
    ],
    weather: {
      averageTemp: "69°F year-round",
      climate: "Mild Mediterranean with views",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Hilltop location provides good air circulation. Clear views on most days. Slightly warmer than coastal areas. Beautiful sunsets.",
    },
    whySpecial: {
      title: "Historic Heights Care",
      description: "Golden Hill's architectural beauty and community renaissance make it a special place for seniors.",
      highlights: [
        "Beautiful historic architecture",
        "Stunning views of downtown and bay",
        "Emerging local dining scene",
        "Close to downtown medical facilities",
        "Active neighborhood association",
        "Strong sense of community",
      ],
    },
    servicesContext: {
      title: "Historic Community Care",
      description: "Our Golden Hill caregivers appreciate the neighborhood's historic character. We help seniors enjoy the architecture, stunning views, and the community's vibrant local scene.",
    },
    zipCodes: ["92102"],
    coordinates: { lat: 32.7135, lng: -117.1284 },
  },
  {
    slug: "old-town",
    name: "Old Town",
    parentLocation: "san-diego",
    tagline: "Historic Heart, Modern Care",
    localNickname: "Old Town",
    description: "Old Town's rich history, cultural attractions, and central location make it a unique setting for seniors who love San Diego's heritage.",
    heroImageUrl: "/images/subareas/old-town.jpg",
    funFacts: [
      "Old Town is the site of the first European settlement on the West Coast (1769)",
      "Old Town San Diego State Historic Park preserves buildings from the Mexican and early American periods",
      "Home to San Diego's famous Mexican restaurants and mariachi performances",
      "The trolley station provides easy access throughout San Diego",
      "Heritage Park preserves Victorian homes moved from other locations",
    ],
    landmarks: [
      {
        name: "Old Town State Historic Park",
        description: "Living history park with preserved buildings and museums",
        imageUrl: "/images/landmarks/old-town-shp.jpg",
        category: "historic",
      },
      {
        name: "Heritage Park",
        description: "Collection of Victorian homes preserved as a county park",
        imageUrl: "/images/landmarks/heritage-park.jpg",
        category: "historic",
      },
      {
        name: "Presidio Park",
        description: "Site of the first Spanish fort with Junipero Serra Museum",
        imageUrl: "/images/landmarks/presidio-park-ot.jpg",
        category: "historic",
      },
      {
        name: "Old Town Transit Center",
        description: "Major transportation hub with trolley and bus connections",
        imageUrl: "/images/landmarks/ot-transit.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "The Park",
        meaning: "Old Town State Historic Park",
        usage: "Let's have lunch in the Park",
      },
      {
        term: "Heritage",
        meaning: "Heritage Park Victorian buildings",
        usage: "The Heritage homes are beautiful",
      },
      {
        term: "The Bazaar",
        meaning: "Old Town shopping district",
        usage: "I found great gifts at the Bazaar",
      },
    ],
    weather: {
      averageTemp: "68°F year-round",
      climate: "Mild Mediterranean with bay influence",
      bestMonths: ["March", "April", "May", "October", "November"],
      microclimate: "Near the bay means moderate temperatures. Pleasant for walking most days. Slightly cooler than inland areas.",
    },
    whySpecial: {
      title: "Historic Living Care",
      description: "Old Town's central location and cultural attractions make it ideal for seniors who love history and convenience.",
      highlights: [
        "Easy trolley access to hospitals",
        "Rich cultural attractions",
        "Excellent Mexican dining",
        "Central location for family visits",
        "Living history experiences",
        "Strong tourist economy means good services",
      ],
    },
    servicesContext: {
      title: "Heritage Care",
      description: "Our Old Town caregivers help seniors enjoy the neighborhood's rich history. We facilitate visits to historic sites, enjoy authentic Mexican cuisine, and ensure easy trolley access to medical appointments.",
    },
    zipCodes: ["92110"],
    coordinates: { lat: 32.7546, lng: -117.1967 },
  },
  // ===== PRIORITY 4: NORTH COUNTY COASTAL =====
  {
    slug: "solana-beach",
    name: "Solana Beach",
    parentLocation: "solana-beach",
    tagline: "Coastal Charm, Quality Care",
    localNickname: "Solana",
    description: "Solana Beach's charming Cedros Design District, beautiful beaches, and artistic community create an ideal coastal setting for discerning seniors.",
    heroImageUrl: "/images/subareas/solana-beach.jpg",
    funFacts: [
      "The Cedros Design District is one of Southern California's premier design destinations",
      "Fletcher Cove Beach is the community's beloved gathering spot",
      "Solana Beach is home to the Belly Up Tavern, a legendary live music venue",
      "The city has just 13,000 residents but hosts visitors from around the world",
      "The Coaster train provides direct service to downtown San Diego",
    ],
    landmarks: [
      {
        name: "Cedros Design District",
        description: "Premier shopping destination with 85+ design, furnishing, and art stores",
        imageUrl: "/images/landmarks/cedros-design.jpg",
        category: "shopping",
      },
      {
        name: "Fletcher Cove",
        description: "Community beach park with playground and picnic areas",
        imageUrl: "/images/landmarks/fletcher-cove.jpg",
        category: "beach",
      },
      {
        name: "Belly Up Tavern",
        description: "Legendary music venue hosting national and international acts",
        imageUrl: "/images/landmarks/belly-up.jpg",
        category: "entertainment",
      },
      {
        name: "Solana Beach Train Station",
        description: "Coaster stop providing easy access to San Diego",
        imageUrl: "/images/landmarks/solana-train.jpg",
        category: "historic",
      },
    ],
    localSlang: [
      {
        term: "Cedros",
        meaning: "Cedros Design District",
        usage: "I found the perfect lamp on Cedros",
      },
      {
        term: "Fletcher's",
        meaning: "Fletcher Cove Beach",
        usage: "Let's watch sunset at Fletcher's",
      },
      {
        term: "The Belly Up",
        meaning: "Belly Up Tavern",
        usage: "Great show at the Belly Up last night",
      },
    ],
    weather: {
      averageTemp: "66°F year-round",
      climate: "Perfect coastal Mediterranean",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Coastal location means mild temperatures year-round. Marine layer common in morning. Perfect afternoon weather. Cooler than inland areas.",
    },
    whySpecial: {
      title: "Coastal Design District Care",
      description: "Solana Beach's artistic community and small-town feel create an ideal environment for creative seniors.",
      highlights: [
        "Close to Scripps Memorial Encinitas",
        "World-class shopping on Cedros",
        "Beautiful beach access",
        "Easy Coaster access to hospitals",
        "Small-town atmosphere",
        "Active arts community",
      ],
    },
    servicesContext: {
      title: "Design District Care",
      description: "Our Solana Beach caregivers help seniors enjoy the Cedros District shopping, beach walks at Fletcher Cove, and the area's excellent dining while ensuring access to quality healthcare.",
    },
    zipCodes: ["92075"],
    coordinates: { lat: 32.9912, lng: -117.2714 },
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    parentLocation: "oceanside",
    tagline: "Beach Town Spirit, Caring Community",
    localNickname: "O'Side",
    description: "Oceanside's classic beach town atmosphere, military heritage, and revitalized downtown create a welcoming environment for seniors who love coastal living.",
    heroImageUrl: "/images/subareas/oceanside.jpg",
    funFacts: [
      "Oceanside Pier is the longest wooden pier on the West Coast at 1,942 feet",
      "Home to Camp Pendleton, the largest Marine Corps base on the West Coast",
      "The California Surf Museum chronicles the history of surfing",
      "Historic Mission San Luis Rey is the largest of California's 21 missions",
      "Downtown Oceanside has undergone a remarkable revitalization with craft breweries and restaurants",
    ],
    landmarks: [
      {
        name: "Oceanside Pier",
        description: "Iconic 1,942-foot wooden pier with restaurant at the end",
        imageUrl: "/images/landmarks/oceanside-pier.jpg",
        category: "historic",
      },
      {
        name: "Mission San Luis Rey",
        description: "Largest of California's historic missions, founded in 1798",
        imageUrl: "/images/landmarks/mission-slr.jpg",
        category: "historic",
      },
      {
        name: "Downtown Oceanside",
        description: "Revitalized downtown with craft breweries and restaurants",
        imageUrl: "/images/landmarks/downtown-oside.jpg",
        category: "dining",
      },
      {
        name: "The Strand",
        description: "Beachfront promenade perfect for walking and biking",
        imageUrl: "/images/landmarks/oside-strand.jpg",
        category: "beach",
      },
    ],
    localSlang: [
      {
        term: "O'Side",
        meaning: "Oceanside",
        usage: "O'Side has changed so much—it's great now",
      },
      {
        term: "The Pier",
        meaning: "Oceanside Pier",
        usage: "Let's walk the Pier at sunset",
      },
      {
        term: "Downtown",
        meaning: "Downtown Oceanside",
        usage: "Downtown has awesome new restaurants",
      },
    ],
    weather: {
      averageTemp: "65°F year-round",
      climate: "Classic Southern California coastal",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Northernmost San Diego County beach community. Slightly cooler than southern beaches. Morning marine layer common. Pleasant year-round.",
    },
    whySpecial: {
      title: "Beach Town Care",
      description: "Oceanside's revitalized downtown and beach access make it perfect for seniors who love classic California coastal living.",
      highlights: [
        "Tri-City Medical Center nearby",
        "Affordable compared to southern beaches",
        "Strong military and veteran community",
        "Excellent beach access",
        "Coaster train to San Diego",
        "Revitalized downtown dining",
      ],
    },
    servicesContext: {
      title: "Coastal Community Care",
      description: "Our Oceanside caregivers help seniors enjoy beach walks on the Strand, explore the revitalized downtown, and access the area's medical facilities while embracing the laid-back beach town atmosphere.",
    },
    zipCodes: ["92054", "92056", "92057"],
    coordinates: { lat: 33.1959, lng: -117.3795 },
  },
  {
    slug: "leucadia",
    name: "Leucadia",
    parentLocation: "encinitas",
    tagline: "Funky Beach Town, Caring Vibes",
    localNickname: "Leucadia by the Sea",
    description: "Leucadia's laid-back surf culture, eucalyptus-lined Highway 101, and quirky character create a unique coastal setting for seniors who value authenticity.",
    heroImageUrl: "/images/subareas/leucadia.jpg",
    funFacts: [
      "Leucadia means 'sheltered place' in Greek, named by English spiritualists in 1885",
      "Highway 101 is lined with over 100 towering eucalyptus trees",
      "Known for its 'Keep Leucadia Funky' motto celebrating its quirky character",
      "Home to Beacons Beach, a popular surf spot accessible by steep stairs",
      "The community has successfully resisted chain stores to maintain local character",
    ],
    landmarks: [
      {
        name: "Coast Highway 101",
        description: "Historic highway lined with eucalyptus trees and local shops",
        imageUrl: "/images/landmarks/leucadia-101.jpg",
        category: "shopping",
      },
      {
        name: "Beacons Beach",
        description: "Popular surf beach accessed by steep stairway",
        imageUrl: "/images/landmarks/beacons-beach.jpg",
        category: "beach",
      },
      {
        name: "Leucadia Roadside Park",
        description: "Linear park along Highway 101 with coastal rail trail",
        imageUrl: "/images/landmarks/leucadia-park.jpg",
        category: "park",
      },
      {
        name: "Leucadia Farmers Market",
        description: "Sunday market with local produce and artisans",
        imageUrl: "/images/landmarks/leucadia-market.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "Keep Leucadia Funky",
        meaning: "The community's unofficial motto",
        usage: "That new shop really keeps Leucadia funky",
      },
      {
        term: "The 101",
        meaning: "Coast Highway 101",
        usage: "All the best spots are on the 101",
      },
      {
        term: "Beacons",
        meaning: "Beacons Beach",
        usage: "The surf at Beacons was epic today",
      },
    ],
    weather: {
      averageTemp: "65°F year-round",
      climate: "Coastal Mediterranean, mild",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Classic coastal weather with morning marine layer. Eucalyptus trees provide shade and character. Cooler than inland. Perfect surf weather.",
    },
    whySpecial: {
      title: "Funky Beach Care",
      description: "Leucadia's laid-back atmosphere and local character make it perfect for seniors who appreciate authenticity and beach culture.",
      highlights: [
        "Close to Scripps Memorial Encinitas",
        "Unique local shops and restaurants",
        "Beautiful coastal walking paths",
        "Strong community character",
        "Farmers market and local events",
        "Relaxed beach town atmosphere",
      ],
    },
    servicesContext: {
      title: "Keep It Funky Care",
      description: "Our Leucadia caregivers embrace the community's funky spirit. We help seniors enjoy Highway 101 cafes, Sunday farmers markets, and the laid-back beach town lifestyle.",
    },
    zipCodes: ["92024"],
    coordinates: { lat: 33.0676, lng: -117.3059 },
  },
  {
    slug: "cardiff-by-the-sea",
    name: "Cardiff-by-the-Sea",
    parentLocation: "encinitas",
    tagline: "Seaside Village, Quality Care",
    localNickname: "Cardiff",
    description: "Cardiff-by-the-Sea's charming village atmosphere, famous beach, and tight-knit community create an ideal coastal setting for seniors who love the ocean.",
    heroImageUrl: "/images/subareas/cardiff.jpg",
    funFacts: [
      "Named after the capital city of Wales by early developer J. Frank Cullen",
      "Cardiff State Beach is famous for its reef break surf spot",
      "The Cardiff Kook statue is a beloved (and frequently dressed up) local landmark",
      "Home to the VG Donut & Bakery, a legendary local institution since 1969",
      "The San Elijo Lagoon Ecological Reserve provides miles of nature trails",
    ],
    landmarks: [
      {
        name: "Cardiff State Beach",
        description: "Popular beach with reef break surf and tide pools",
        imageUrl: "/images/landmarks/cardiff-beach.jpg",
        category: "beach",
      },
      {
        name: "Cardiff Kook",
        description: "Beloved surfer statue frequently dressed in costumes by locals",
        imageUrl: "/images/landmarks/cardiff-kook.jpg",
        category: "historic",
      },
      {
        name: "San Elijo Lagoon",
        description: "Nature preserve with hiking trails and bird watching",
        imageUrl: "/images/landmarks/san-elijo-lagoon.jpg",
        category: "park",
      },
      {
        name: "Cardiff Town Center",
        description: "Village center with local shops and restaurants",
        imageUrl: "/images/landmarks/cardiff-center.jpg",
        category: "shopping",
      },
    ],
    localSlang: [
      {
        term: "Cardiff",
        meaning: "Cardiff-by-the-Sea",
        usage: "Cardiff has the best breakfast spots",
      },
      {
        term: "The Kook",
        meaning: "The Cardiff Kook statue",
        usage: "Did you see what they dressed the Kook in today?",
      },
      {
        term: "The Reef",
        meaning: "Cardiff Reef surf break",
        usage: "The Reef is firing today",
      },
    ],
    weather: {
      averageTemp: "65°F year-round",
      climate: "Perfect coastal Mediterranean",
      bestMonths: ["April", "May", "September", "October"],
      microclimate: "Classic coastal weather with marine layer mornings. Lagoon nearby moderates temperatures. Beautiful sunset views. Comfortable year-round.",
    },
    whySpecial: {
      title: "Seaside Village Care",
      description: "Cardiff's village atmosphere and natural beauty make it perfect for seniors who love the ocean and community.",
      highlights: [
        "Close to Scripps Memorial Encinitas",
        "Beautiful beach access",
        "San Elijo Lagoon trails",
        "Tight-knit village community",
        "Excellent local dining",
        "Peaceful, natural setting",
      ],
    },
    servicesContext: {
      title: "Coastal Village Care",
      description: "Our Cardiff caregivers help seniors enjoy beach walks, lagoon trails, and the village's excellent restaurants while ensuring access to quality healthcare nearby.",
    },
    zipCodes: ["92007"],
    coordinates: { lat: 33.0206, lng: -117.2783 },
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
