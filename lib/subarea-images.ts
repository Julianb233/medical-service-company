/**
 * San Diego Subarea Image Sources & Guidelines
 *
 * This file documents copyright-free image sources for each San Diego subarea,
 * including Unsplash & Pexels search terms and AI generation prompts.
 *
 * Image Requirements (Professional SOP):
 * - Professional camera look: f/1.2 - f/1.4 aperture (shallow depth of field)
 * - Candid, editorial photography quality
 * - Real photography (NOT obviously AI-generated)
 * - 4K+ resolution preferred
 *
 * Last Updated: 2025-12-24
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ImageSource {
  unsplashTerms: string[];
  pexelsTerms: string[];
  aiPrompts: AIPrompt[];
}

export interface AIPrompt {
  midjourney: string;
  dalleThree: string;
}

export interface SubareaImages {
  name: string;
  description: string;
  hero: ImageSource;
  landmarks: {
    [key: string]: ImageSource;
  };
}

export interface AllSubareImagesMap {
  [key: string]: SubareaImages;
}

// ============================================================================
// HERO IMAGE SEARCH GUIDELINES
// ============================================================================

/**
 * Hero Image Best Practices:
 * - Wide establishing shots or iconic landmarks
 * - Golden hour or blue hour photography preferred
 * - Clear focal point with bokeh background
 * - Lifestyle or travel editorial tone
 */

const HERO_IMAGE_MODIFIERS = {
  unsplash: "professional photography, 50mm, shallow depth of field, golden hour",
  pexels: "lifestyle, professional, travel photography, candid",
};

// ============================================================================
// LA JOLLA
// ============================================================================

export const laJolla: SubareaImages = {
  name: "La Jolla",
  description:
    "Exclusive coastal village with pristine beaches, sea caves, and upscale shopping",
  hero: {
    unsplashTerms: [
      "La Jolla Cove beach",
      "coastal cliffs California",
      "rocky coastline ocean",
      "seaside village architecture",
    ],
    pexelsTerms: [
      "La Jolla beach cove",
      "Southern California coast",
      "luxury beach town",
      "ocean cliffs landscape",
    ],
    aiPrompts: [
      {
        midjourney:
          "dramatic coastal scene, La Jolla Cove with turquoise water, rocky cliffs, golden hour, sony A7R, 50mm f/1.4, shallow depth of field, professional travel photography",
        dalleThree:
          "professional luxury coastal photograph of La Jolla Cove at sunset, turquoise waters, rocky cliffs, golden light, shallow depth of field, editorial quality, shot on professional camera",
      },
    ],
  },
  landmarks: {
    "Children's Pool": {
      unsplashTerms: [
        "seal colony beach",
        "marine wildlife coast",
        "sunny beach animals",
        "San Diego sea life",
      ],
      pexelsTerms: ["seal beach", "marine wildlife", "ocean seals", "coast"],
      aiPrompts: [
        {
          midjourney:
            "Children's Pool La Jolla, sea lions resting on beach, sunny day, 35mm f/1.4, professional wildlife photography, candid moment, professional quality, natural lighting",
          dalleThree:
            "professional photograph of Children's Pool La Jolla with seals and sea lions on sandy beach, sunny Southern California morning, editorial travel photography, shallow depth of field",
        },
      ],
    },
    "Cave Store": {
      unsplashTerms: [
        "sea cave entrance",
        "cliff-side structure",
        "coastal architecture",
        "oceanside landmark",
      ],
      pexelsTerms: [
        "ocean cave",
        "sea cave entrance",
        "coastal structure",
        "beach landmark",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cave Store entrance La Jolla, carved into coastal cliff, ocean visible, professional photography, cinematic lighting, 50mm f/1.2, travel editorial tone",
          dalleThree:
            "professional photograph of historic Cave Store carved into La Jolla cliff, ocean view behind, professional camera work, natural afternoon light, editorial quality",
        },
      ],
    },
    "Birch Aquarium": {
      unsplashTerms: [
        "aquarium architecture modern",
        "science museum building",
        "coastal institution",
        "modern glass building ocean view",
      ],
      pexelsTerms: [
        "aquarium building",
        "museum architecture",
        "oceanview building",
        "modern structure",
      ],
      aiPrompts: [
        {
          midjourney:
            "Birch Aquarium La Jolla, modern architecture overlooking Pacific, professional building photography, 24mm f/2.8, bright daylight, clean lines, professional architectural photography",
          dalleThree:
            "professional architectural photograph of modern Birch Aquarium with ocean backdrop, clean contemporary design, professional lighting, editorial quality photography",
        },
      ],
    },
    "Windansea Beach": {
      unsplashTerms: [
        "surf beach rocky",
        "Southern California surfer",
        "wave action coastal",
        "beach lifestyle candid",
      ],
      pexelsTerms: [
        "surfing beach waves",
        "surfers California coast",
        "beach lifestyle",
        "ocean waves",
      ],
      aiPrompts: [
        {
          midjourney:
            "Windansea Beach surfers, waves crashing rocks, golden light, 70mm f/1.4, professional lifestyle photography, candid moment, professional quality surfer culture",
          dalleThree:
            "professional photograph of Windansea Beach with surfers catching waves, rocky shoreline, golden hour light, professional travel editorial photography",
        },
      ],
    },
    "Sunny Jim Sea Cave": {
      unsplashTerms: [
        "sea cave interior",
        "cave exploration",
        "underground ocean chamber",
        "geological formation",
      ],
      pexelsTerms: ["cave", "sea cave", "nature cave", "geological wonder"],
      aiPrompts: [
        {
          midjourney:
            "Sunny Jim Sea Cave interior, natural light from ocean entrance, dramatic rock formations, professional cave photography, 35mm f/2, moody atmospheric lighting",
          dalleThree:
            "professional photograph of natural sea cave interior with ocean visible through entrance, dramatic geological formations, natural light, professional cave photography",
        },
      ],
    },
    "Torrey Pines State Natural Reserve": {
      unsplashTerms: [
        "pine cliffs coastal",
        "scenic trail nature",
        "Southern California hiking",
        "dramatic cliff formation",
      ],
      pexelsTerms: [
        "state park nature",
        "hiking trail California",
        "cliff landscape",
        "nature reserve",
      ],
      aiPrompts: [
        {
          midjourney:
            "Torrey Pines Reserve, dramatic cliff edge with ocean view, golden hour, 50mm f/1.4, professional landscape photography, professional hiking editorial tone",
          dalleThree:
            "professional landscape photograph of Torrey Pines cliffs overlooking Pacific Ocean, golden hour lighting, dramatic terrain, professional nature photography",
        },
      ],
    },
  },
};

// ============================================================================
// DEL MAR
// ============================================================================

export const delMar: SubareaImages = {
  name: "Del Mar",
  description:
    "Charming beach town with Del Mar Racetrack, fine dining, and pristine sandy beaches",
  hero: {
    unsplashTerms: [
      "Del Mar beach California",
      "beach town pier sunset",
      "upscale coastal community",
      "Southern California horse racing",
    ],
    pexelsTerms: [
      "Del Mar beach",
      "California coastal town",
      "sandy beach upscale",
      "beach sunset pier",
    ],
    aiPrompts: [
      {
        midjourney:
          "Del Mar beach scene, wooden pier at sunset, golden light, upscale resort town, 50mm f/1.4, professional travel photography, cinematic quality, editorial tone",
        dalleThree:
          "professional photograph of Del Mar pier at golden hour, sandy beach, upscale coastal town atmosphere, shallow depth of field, professional editorial quality",
      },
    ],
  },
  landmarks: {
    "Del Mar Racetrack": {
      unsplashTerms: [
        "horse racing event",
        "racing track architecture",
        "sporting event crowd",
        "equestrian competition",
      ],
      pexelsTerms: [
        "horse racing",
        "racetrack",
        "sporting event",
        "horse event",
      ],
      aiPrompts: [
        {
          midjourney:
            "Del Mar Racetrack grandstand, horse race action, sunny day, professional sports photography, 70mm f/2, editorial event coverage, professional quality",
          dalleThree:
            "professional photograph of Del Mar Racetrack during race, horses and jockeys in action, grandstand architecture, professional sports photography",
        },
      ],
    },
    "Del Mar Beaches & Cliffs": {
      unsplashTerms: [
        "sandy beach cliffs",
        "California coastline",
        "beach landscape scenic",
        "coastal bluff view",
      ],
      pexelsTerms: [
        "beach cliffs California",
        "coastal landscape",
        "sandy beach",
        "scenic coast",
      ],
      aiPrompts: [
        {
          midjourney:
            "Del Mar beach and cliffs, wide sandy shoreline, golden light, 35mm f/1.4, landscape photography, professional travel tone, calm waves",
          dalleThree:
            "professional landscape photograph of Del Mar beach with coastal cliffs, golden hour light, wide sandy shoreline, professional photography",
        },
      ],
    },
    "Torrey Pines Golf Club": {
      unsplashTerms: [
        "golf course ocean view",
        "luxury golf course",
        "sports facility landscape",
        "coastal golf resort",
      ],
      pexelsTerms: ["golf course", "golf resort", "luxury sports", "landscape"],
      aiPrompts: [
        {
          midjourney:
            "Torrey Pines Golf Club, ocean view fairways, professional golf course photography, 24mm f/2.8, luxury resort aesthetic, professional architectural tone",
          dalleThree:
            "professional photograph of Torrey Pines Golf Club fairways with Pacific Ocean backdrop, professional course photography, luxury resort aesthetic",
        },
      ],
    },
    "Del Mar Village": {
      unsplashTerms: [
        "coastal town shopping district",
        "upscale retail street",
        "beach town main street",
        "architectural storefronts",
      ],
      pexelsTerms: [
        "shopping street",
        "retail district",
        "town square",
        "storefront architecture",
      ],
      aiPrompts: [
        {
          midjourney:
            "Del Mar Village shops and restaurants, Mediterranean architecture, upscale storefronts, 35mm f/1.4, professional architectural photography, afternoon light",
          dalleThree:
            "professional photograph of Del Mar Village shopping district, upscale storefronts, Mediterranean architecture, professional retail photography",
        },
      ],
    },
    "Powerhouse Park": {
      unsplashTerms: [
        "waterfront park landscape",
        "scenic overlook beach",
        "coastal park view",
        "recreational landscape",
      ],
      pexelsTerms: [
        "park landscape",
        "waterfront park",
        "beach park",
        "scenic park",
      ],
      aiPrompts: [
        {
          midjourney:
            "Powerhouse Park Del Mar, ocean overlook, park landscape, golden hour, 50mm f/1.4, professional nature photography, scenic view, editorial tone",
          dalleThree:
            "professional landscape photograph of Powerhouse Park with ocean view, golden hour light, peaceful park setting, professional nature photography",
        },
      ],
    },
    "Del Mar Fairgrounds": {
      unsplashTerms: [
        "fairground architecture event",
        "event venue landscape",
        "recreational facility",
        "cultural event space",
      ],
      pexelsTerms: [
        "fairground",
        "event venue",
        "fair architecture",
        "event space",
      ],
      aiPrompts: [
        {
          midjourney:
            "Del Mar Fairgrounds, event venue architecture, professional architectural photography, 24mm f/2.8, daytime exterior, professional tone, clear architecture",
          dalleThree:
            "professional photograph of Del Mar Fairgrounds event venue architecture, professional architectural photography, clear daytime exterior",
        },
      ],
    },
  },
};

// ============================================================================
// CORONADO
// ============================================================================

export const coronado: SubareaImages = {
  name: "Coronado",
  description:
    "Iconic San Diego neighborhood with Hotel del Coronado, pristine beaches, and historic charm",
  hero: {
    unsplashTerms: [
      "Hotel del Coronado sunset",
      "Coronado Island beach",
      "historic seaside resort",
      "San Diego iconic landmark",
    ],
    pexelsTerms: [
      "Hotel del Coronado",
      "Coronado beach California",
      "historic hotel resort",
      "seaside landmark",
    ],
    aiPrompts: [
      {
        midjourney:
          "Hotel del Coronado at sunset, turret architecture, beach in foreground, golden light, 50mm f/1.4, professional travel photography, iconic landmark, editorial quality",
        dalleThree:
          "professional photograph of iconic Hotel del Coronado at golden hour, Victorian architecture, beach in foreground, professional editorial quality photography",
      },
    ],
  },
  landmarks: {
    "Hotel del Coronado": {
      unsplashTerms: [
        "Victorian hotel architecture",
        "historic resort building",
        "luxury hotel exterior",
        "seaside Victorian architecture",
      ],
      pexelsTerms: [
        "historic hotel",
        "resort architecture",
        "luxury building",
        "Victorian structure",
      ],
      aiPrompts: [
        {
          midjourney:
            "Hotel del Coronado full facade, Victorian red-roofed turrets, pristine white building, professional architectural photography, 24mm f/2.8, bright daylight, editorial tone",
          dalleThree:
            "professional architectural photograph of Hotel del Coronado's iconic Victorian facade with turrets, red roof, pristine exterior, professional photography",
        },
      ],
    },
    "Coronado Beach": {
      unsplashTerms: [
        "wide sandy beach Southern California",
        "pristine beach scene",
        "peaceful beach landscape",
        "beach lifestyle candid",
      ],
      pexelsTerms: [
        "sandy beach California",
        "pristine beach",
        "beach landscape",
        "coastal beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Coronado Beach wide sandy shoreline, gentle waves, beachgoers, golden hour, 50mm f/1.4, professional lifestyle photography, peaceful scene, editorial tone",
          dalleThree:
            "professional photograph of Coronado Beach with wide sandy shoreline, beachgoers, golden light, peaceful beach lifestyle, professional editorial photography",
        },
      ],
    },
    "Coronado Bridge": {
      unsplashTerms: [
        "iconic bridge architecture",
        "engineering landmark",
        "blue water beneath bridge",
        "architectural highway span",
      ],
      pexelsTerms: [
        "bridge architecture",
        "San Diego bridge",
        "engineering structure",
        "iconic bridge",
      ],
      aiPrompts: [
        {
          midjourney:
            "Coronado Bridge, sweeping span architecture, blue water below, San Diego skyline, 35mm f/2, professional architectural photography, professional tone, clear architecture",
          dalleThree:
            "professional architectural photograph of Coronado Bridge spanning blue waters, San Diego skyline backdrop, professional engineering photography",
        },
      ],
    },
    "Centennial Park": {
      unsplashTerms: [
        "waterfront park landscape",
        "scenic park view",
        "coastal park recreation",
        "bay overlook park",
      ],
      pexelsTerms: [
        "waterfront park",
        "park landscape",
        "coastal park",
        "scenic overlook",
      ],
      aiPrompts: [
        {
          midjourney:
            "Centennial Park Coronado, waterfront view, park landscape, golden hour, 50mm f/1.4, professional nature photography, peaceful setting, editorial tone",
          dalleThree:
            "professional landscape photograph of Centennial Park with waterfront view, golden hour light, peaceful park setting, professional nature photography",
        },
      ],
    },
    "Orange Avenue": {
      unsplashTerms: [
        "coastal town main street",
        "retail storefronts",
        "architectural streetscape",
        "charming downtown street",
      ],
      pexelsTerms: [
        "main street",
        "retail street",
        "town shopping",
        "storefront architecture",
      ],
      aiPrompts: [
        {
          midjourney:
            "Orange Avenue Coronado, charming storefronts, tree-lined street, afternoon light, 35mm f/1.4, professional street photography, editorial tone, architecture",
          dalleThree:
            "professional photograph of Orange Avenue Coronado with charming storefronts and trees, professional street photography, afternoon light",
        },
      ],
    },
    "Glorietta Bay": {
      unsplashTerms: [
        "bay waterfront landscape",
        "peaceful water view",
        "sailboat harbor",
        "scenic bay landscape",
      ],
      pexelsTerms: [
        "bay landscape",
        "water view",
        "harbor scene",
        "sailboat water",
      ],
      aiPrompts: [
        {
          midjourney:
            "Glorietta Bay, sailboats on water, calm bay, golden hour, 50mm f/1.4, professional landscape photography, peaceful maritime scene, editorial tone",
          dalleThree:
            "professional landscape photograph of Glorietta Bay with sailboats, calm waters, golden light, peaceful maritime photography",
        },
      ],
    },
  },
};

// ============================================================================
// OCEAN BEACH
// ============================================================================

export const oceanBeach: SubareaImages = {
  name: "Ocean Beach",
  description:
    "Laid-back beach community with pier, surf culture, and bohemian charm",
  hero: {
    unsplashTerms: [
      "Ocean Beach pier sunset",
      "surfer culture beach town",
      "beach lifestyle candid",
      "bohemian coastal community",
    ],
    pexelsTerms: [
      "Ocean Beach pier",
      "surfer beach town",
      "beach lifestyle",
      "bohemian beach",
    ],
    aiPrompts: [
      {
        midjourney:
          "Ocean Beach pier at sunset, surfers in water, golden light, bohemian beach town atmosphere, 50mm f/1.4, professional lifestyle photography, candid editorial tone",
        dalleThree:
          "professional photograph of Ocean Beach with iconic pier at sunset, surfers, bohemian beach town atmosphere, professional editorial quality",
      },
    ],
  },
  landmarks: {
    "Ocean Beach Pier": {
      unsplashTerms: [
        "wooden pier structure ocean",
        "pier sunset landscape",
        "coastal pier architecture",
        "beach pier at sunset",
      ],
      pexelsTerms: [
        "beach pier",
        "wooden pier",
        "ocean pier",
        "pier sunset",
      ],
      aiPrompts: [
        {
          midjourney:
            "Ocean Beach Pier extending into ocean, sunset light, architectural pier structure, 24mm f/2.8, professional architectural photography, dramatic sky, editorial tone",
          dalleThree:
            "professional architectural photograph of Ocean Beach Pier at sunset, extended wooden structure, dramatic sky, professional photography",
        },
      ],
    },
    "Surfer Culture": {
      unsplashTerms: [
        "surfer lifestyle action",
        "wave riding candid",
        "beach surfers community",
        "wave action photography",
      ],
      pexelsTerms: [
        "surfers waves",
        "surfing lifestyle",
        "wave action",
        "beach surfers",
      ],
      aiPrompts: [
        {
          midjourney:
            "surfers catching waves Ocean Beach, wave action, professional lifestyle photography, 70mm f/1.4, candid moment, professional quality, editorial tone",
          dalleThree:
            "professional photograph of surfers catching waves at Ocean Beach, wave action, candid lifestyle moment, professional editorial quality",
        },
      ],
    },
    "Newport Avenue": {
      unsplashTerms: [
        "bohemian storefronts",
        "eclectic retail street",
        "quirky beach town shops",
        "artistic community street",
      ],
      pexelsTerms: [
        "bohemian street",
        "eclectic shops",
        "beach town retail",
        "artistic storefront",
      ],
      aiPrompts: [
        {
          midjourney:
            "Newport Avenue Ocean Beach, bohemian storefronts, eclectic shops, colorful street, 35mm f/1.4, professional street photography, artistic tone, afternoon light",
          dalleThree:
            "professional photograph of Newport Avenue with bohemian storefronts, eclectic artistic shops, professional street photography",
        },
      ],
    },
    "Sunset Cliffs": {
      unsplashTerms: [
        "coastal cliff sunset",
        "dramatic bluff landscape",
        "ocean cliff edge",
        "scenic overlook view",
      ],
      pexelsTerms: [
        "cliff landscape",
        "ocean cliff",
        "coastal bluff",
        "scenic view",
      ],
      aiPrompts: [
        {
          midjourney:
            "Sunset Cliffs Ocean Beach, dramatic cliff edge, golden hour, ocean beyond, 50mm f/1.4, professional landscape photography, cinematic light, editorial tone",
          dalleThree:
            "professional landscape photograph of Sunset Cliffs with dramatic golden hour light, ocean view, professional nature photography",
        },
      ],
    },
    "Dog Beach": {
      unsplashTerms: [
        "dogs beach candid",
        "pet-friendly beach lifestyle",
        "playful dogs water",
        "beach community animals",
      ],
      pexelsTerms: [
        "dogs beach",
        "pet beach",
        "dogs playing water",
        "beach pets",
      ],
      aiPrompts: [
        {
          midjourney:
            "Dog Beach scene, happy dogs in water and sand, owners playing, sunny day, 50mm f/1.4, professional lifestyle photography, candid joyful moment, editorial tone",
          dalleThree:
            "professional photograph of Dog Beach with happy dogs playing in water and sand, sunny day, joyful candid lifestyle moment, professional photography",
        },
      ],
    },
    "Recreational Beach Activities": {
      unsplashTerms: [
        "beach volleyball action",
        "beach recreational activities",
        "outdoor beach games",
        "summer beach lifestyle",
      ],
      pexelsTerms: [
        "beach volleyball",
        "beach games",
        "beach activities",
        "outdoor recreation",
      ],
      aiPrompts: [
        {
          midjourney:
            "beach volleyball game Ocean Beach, action moment, sunny day, players jumping, professional sports photography, 70mm f/1.4, professional quality, editorial tone",
          dalleThree:
            "professional photograph of beach volleyball game with action and movement, sunny day, professional sports lifestyle photography",
        },
      ],
    },
  },
};

// ============================================================================
// PACIFIC BEACH
// ============================================================================

export const pacificBeach: SubareaImages = {
  name: "Pacific Beach",
  description:
    "Vibrant beach neighborhood with pier, waterfront dining, and active beach culture",
  hero: {
    unsplashTerms: [
      "Pacific Beach pier California",
      "beach town waterfront dining",
      "active beach culture",
      "sandy beach pier sunset",
    ],
    pexelsTerms: [
      "Pacific Beach pier",
      "beach waterfront",
      "vibrant beach town",
      "beach dining",
    ],
    aiPrompts: [
      {
        midjourney:
          "Pacific Beach pier at golden hour, waterfront restaurants, beach culture, 50mm f/1.4, professional travel photography, vibrant atmosphere, editorial quality",
        dalleThree:
          "professional photograph of Pacific Beach pier at golden hour, waterfront activity, vibrant beach culture, professional editorial quality",
      },
    ],
  },
  landmarks: {
    "Pacific Beach Pier": {
      unsplashTerms: [
        "wooden beach pier structure",
        "pier fishing sunset",
        "coastal architecture pier",
        "beach landmark pier",
      ],
      pexelsTerms: [
        "beach pier",
        "pier fishing",
        "wooden pier",
        "coastal pier",
      ],
      aiPrompts: [
        {
          midjourney:
            "Pacific Beach Pier, wooden structure extending into ocean, sunset light, fishers, 24mm f/2.8, professional architectural photography, editorial tone",
          dalleThree:
            "professional architectural photograph of Pacific Beach Pier at sunset, wooden structure, fishing activity, professional photography",
        },
      ],
    },
    "Crystal Pier": {
      unsplashTerms: [
        "historic pier bungalows",
        "vintage pier structure",
        "oceanfront cottage",
        "unique pier architecture",
      ],
      pexelsTerms: [
        "historic pier",
        "vintage pier",
        "pier bungalows",
        "oceanfront structure",
      ],
      aiPrompts: [
        {
          midjourney:
            "Crystal Pier Pacific Beach, vintage bungalows over ocean, historic architecture, afternoon light, 35mm f/1.4, professional architectural photography, editorial tone",
          dalleThree:
            "professional architectural photograph of Crystal Pier with historic oceanfront bungalows, professional photography, vintage charm",
        },
      ],
    },
    "Grand Avenue": {
      unsplashTerms: [
        "beach town main avenue",
        "waterfront retail storefronts",
        "coastal shopping district",
        "architectural streetscape",
      ],
      pexelsTerms: [
        "main avenue shopping",
        "retail storefronts",
        "beach town street",
        "waterfront avenue",
      ],
      aiPrompts: [
        {
          midjourney:
            "Grand Avenue Pacific Beach, waterfront storefronts, beach town architecture, afternoon light, 35mm f/1.4, professional street photography, editorial tone",
          dalleThree:
            "professional photograph of Grand Avenue with waterfront storefronts and beach town architecture, professional street photography",
        },
      ],
    },
    "Tourmaline Surfing Park": {
      unsplashTerms: [
        "surfer waves beach",
        "wave action landscape",
        "surf spot photography",
        "beach surfer culture",
      ],
      pexelsTerms: [
        "surfing waves",
        "surfers beach",
        "surf landscape",
        "beach waves",
      ],
      aiPrompts: [
        {
          midjourney:
            "Tourmaline Surfing Park, surfers catching waves, wave action, professional lifestyle photography, 70mm f/1.4, candid moment, professional quality, editorial tone",
          dalleThree:
            "professional photograph of surfers at Tourmaline Surfing Park catching waves, candid action moment, professional lifestyle photography",
        },
      ],
    },
    "Waterfront Park": {
      unsplashTerms: [
        "beachfront park landscape",
        "scenic overlook park",
        "waterfront recreation area",
        "beach park view",
      ],
      pexelsTerms: [
        "waterfront park",
        "beach park",
        "scenic park",
        "park landscape",
      ],
      aiPrompts: [
        {
          midjourney:
            "Pacific Beach Waterfront Park, ocean view, park landscape, golden hour, 50mm f/1.4, professional nature photography, peaceful setting, editorial tone",
          dalleThree:
            "professional landscape photograph of Waterfront Park with ocean view, golden hour light, peaceful park setting, professional photography",
        },
      ],
    },
    "Beach Culture & Lifestyle": {
      unsplashTerms: [
        "beach lifestyle candid",
        "waterfront dining sunset",
        "beach community activities",
        "vibrant beach social scene",
      ],
      pexelsTerms: [
        "beach lifestyle",
        "waterfront dining",
        "beach community",
        "social gathering beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Pacific Beach vibrant scene, waterfront restaurants, beachgoers, golden sunset, professional lifestyle photography, 50mm f/1.4, candid moment, editorial tone",
          dalleThree:
            "professional photograph of Pacific Beach vibrant waterfront scene with dining and beachgoers, golden light, candid lifestyle moment, professional photography",
        },
      ],
    },
  },
};

// ============================================================================
// MISSION BEACH
// ============================================================================

export const missionBeach: SubareaImages = {
  name: "Mission Beach",
  description:
    "Energetic beach community with Belmont Park amusement park, vibrant boardwalk",
  hero: {
    unsplashTerms: [
      "Belmont Park roller coaster",
      "beach boardwalk amusement park",
      "vibrant beach amusement rides",
      "retro beach amusement architecture",
    ],
    pexelsTerms: [
      "Belmont Park",
      "amusement park rides",
      "beach boardwalk",
      "carnival rides",
    ],
    aiPrompts: [
      {
        midjourney:
          "Belmont Park Mission Beach, roller coaster at sunset, amusement park lights, vibrant energy, 50mm f/1.4, professional travel photography, editorial quality, cinematic light",
        dalleThree:
          "professional photograph of Belmont Park at sunset with roller coaster and amusement rides lit up, vibrant energy, professional editorial photography",
      },
    ],
  },
  landmarks: {
    "Belmont Park": {
      unsplashTerms: [
        "roller coaster amusement park",
        "retro amusement park architecture",
        "carnival rides action",
        "wooden roller coaster",
      ],
      pexelsTerms: [
        "roller coaster",
        "amusement park",
        "carnival rides",
        "theme park",
      ],
      aiPrompts: [
        {
          midjourney:
            "Belmont Park roller coaster, wooden structure, amusement park action, bright daylight, 70mm f/2, professional action photography, editorial tone",
          dalleThree:
            "professional photograph of Belmont Park roller coaster with riders and action, bright daylight, professional amusement park photography",
        },
      ],
    },
    "Giant Dipper": {
      unsplashTerms: [
        "classic roller coaster",
        "wooden coaster structure",
        "retro amusement architecture",
        "iconic amusement ride",
      ],
      pexelsTerms: [
        "wooden roller coaster",
        "classic coaster",
        "amusement ride",
        "retro architecture",
      ],
      aiPrompts: [
        {
          midjourney:
            "Giant Dipper roller coaster Mission Beach, iconic wooden structure, detailed architecture, bright daylight, 35mm f/2, professional architectural photography, editorial tone",
          dalleThree:
            "professional architectural photograph of Giant Dipper roller coaster structure, iconic wooden design, professional amusement park photography",
        },
      ],
    },
    "Mission Beach Boardwalk": {
      unsplashTerms: [
        "beach boardwalk activity",
        "boardwalk lifestyle candid",
        "beach community gathering",
        "summer beach culture",
      ],
      pexelsTerms: [
        "boardwalk people",
        "beach boardwalk",
        "boardwalk activity",
        "summer beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Mission Beach Boardwalk, bustling scene, families and tourists, golden light, professional lifestyle photography, 50mm f/1.4, candid moment, editorial tone",
          dalleThree:
            "professional photograph of Mission Beach Boardwalk with vibrant activity and beachgoers, golden hour light, candid lifestyle photography",
        },
      ],
    },
    "Beach Amusement Culture": {
      unsplashTerms: [
        "amusement park attractions",
        "carnival atmosphere",
        "beach entertainment rides",
        "family amusement activities",
      ],
      pexelsTerms: [
        "amusement attractions",
        "carnival games",
        "park rides",
        "entertainment",
      ],
      aiPrompts: [
        {
          midjourney:
            "Mission Beach amusement attractions, vintage carnival games, colorful structures, bright daylight, 35mm f/1.4, professional editorial photography, fun atmosphere",
          dalleThree:
            "professional photograph of Mission Beach amusement attractions and carnival games, bright daylight, colorful vibrant atmosphere, professional photography",
        },
      ],
    },
    "Mission Bay": {
      unsplashTerms: [
        "bay water landscape",
        "sailboat recreation",
        "water sports activity",
        "scenic bay view",
      ],
      pexelsTerms: [
        "bay landscape",
        "water sports",
        "sailboats",
        "recreational water",
      ],
      aiPrompts: [
        {
          midjourney:
            "Mission Bay scene, sailboats on water, recreation activity, golden hour, 50mm f/1.4, professional nature photography, peaceful yet active, editorial tone",
          dalleThree:
            "professional landscape photograph of Mission Bay with sailboats and water recreation activity, golden light, professional nature photography",
        },
      ],
    },
    "Roller Skate Culture": {
      unsplashTerms: [
        "roller skating boardwalk",
        "vintage roller skates action",
        "beach roller skating lifestyle",
        "recreational skating",
      ],
      pexelsTerms: [
        "roller skating",
        "skating beach",
        "recreational skating",
        "boardwalk skating",
      ],
      aiPrompts: [
        {
          midjourney:
            "roller skaters on Mission Beach Boardwalk, action moment, sunny day, professional lifestyle photography, 50mm f/1.4, candid movement, editorial tone",
          dalleThree:
            "professional photograph of roller skaters on Mission Beach Boardwalk with action and movement, sunny day, candid lifestyle photography",
        },
      ],
    },
  },
};

// ============================================================================
// HILLCREST
// ============================================================================

export const hillcrest: SubareaImages = {
  name: "Hillcrest",
  description:
    "Urban neighborhood with LGBTQ+ cultural hub, diverse dining, galleries, and upscale shops",
  hero: {
    unsplashTerms: [
      "urban neighborhood street",
      "diverse community gathering",
      "city cultural district",
      "upscale urban retail",
    ],
    pexelsTerms: [
      "urban neighborhood",
      "city street culture",
      "diverse community",
      "cultural district",
    ],
    aiPrompts: [
      {
        midjourney:
          "Hillcrest neighborhood street, diverse community, shops and galleries, afternoon light, 35mm f/1.4, professional urban photography, vibrant cultural tone, editorial quality",
        dalleThree:
          "professional photograph of Hillcrest urban neighborhood street with shops, galleries, and diverse community, professional urban photography, vibrant atmosphere",
      },
    ],
  },
  landmarks: {
    "Fifth Avenue": {
      unsplashTerms: [
        "urban main street retail",
        "diverse storefronts architecture",
        "city retail avenue",
        "architectural streetscape",
      ],
      pexelsTerms: [
        "main street shops",
        "urban retail",
        "city storefronts",
        "street architecture",
      ],
      aiPrompts: [
        {
          midjourney:
            "Fifth Avenue Hillcrest, diverse storefronts and restaurants, pedestrians, afternoon light, 35mm f/1.4, professional street photography, urban culture, editorial tone",
          dalleThree:
            "professional photograph of Fifth Avenue in Hillcrest with diverse storefronts and urban activity, professional street photography",
        },
      ],
    },
    "Rainbow Flag": {
      unsplashTerms: [
        "pride flag symbol",
        "LGBTQ+ community landmark",
        "cultural symbol street",
        "inclusive community gathering",
      ],
      pexelsTerms: [
        "pride flag",
        "community flag",
        "cultural symbol",
        "LGBTQ+ community",
      ],
      aiPrompts: [
        {
          midjourney:
            "iconic rainbow flag Hillcrest, street intersection, bright daylight, professional documentary photography, cultural landmark, 35mm f/2, professional quality, editorial tone",
          dalleThree:
            "professional documentary photograph of iconic Hillcrest rainbow flag at street intersection, professional urban photography, cultural landmark",
        },
      ],
    },
    "Art & Gallery Culture": {
      unsplashTerms: [
        "art gallery storefront",
        "cultural gallery exterior",
        "artistic community space",
        "gallery window display",
      ],
      pexelsTerms: [
        "art gallery",
        "cultural space",
        "gallery window",
        "artistic storefront",
      ],
      aiPrompts: [
        {
          midjourney:
            "Hillcrest art gallery storefront, contemporary art display, gallery window, afternoon light, 50mm f/1.4, professional architectural photography, artistic tone, editorial quality",
          dalleThree:
            "professional photograph of contemporary art gallery storefront in Hillcrest, professional architectural photography, artistic atmosphere",
        },
      ],
    },
    "Cafes & Dining Scene": {
      unsplashTerms: [
        "sidewalk cafe urban",
        "restaurant outdoor seating",
        "urban dining culture",
        "community cafe gathering",
      ],
      pexelsTerms: [
        "sidewalk cafe",
        "outdoor restaurant",
        "cafe culture",
        "urban dining",
      ],
      aiPrompts: [
        {
          midjourney:
            "Hillcrest cafe with outdoor seating, diners and pedestrians, golden light, professional lifestyle photography, 50mm f/1.4, urban culture, candid moment, editorial tone",
          dalleThree:
            "professional photograph of Hillcrest sidewalk cafe with outdoor dining and vibrant urban activity, candid lifestyle photography",
        },
      ],
    },
    "Botanical Building Park": {
      unsplashTerms: [
        "botanical building architecture",
        "park building landmark",
        "landscaped gardens structure",
        "cultural building exterior",
      ],
      pexelsTerms: [
        "botanical building",
        "park architecture",
        "cultural landmark",
        "garden structure",
      ],
      aiPrompts: [
        {
          midjourney:
            "Botanical Building in Balboa Park, architectural landmark, botanical gardens, golden hour, 24mm f/2.8, professional architectural photography, editorial tone, detailed structure",
          dalleThree:
            "professional architectural photograph of Botanical Building with botanical gardens, professional architecture photography, detailed exterior",
        },
      ],
    },
    "Lesbian History Month Celebrations": {
      unsplashTerms: [
        "pride celebration community",
        "cultural festival gathering",
        "community parade event",
        "celebration street scene",
      ],
      pexelsTerms: [
        "pride celebration",
        "community festival",
        "celebration parade",
        "gathering event",
      ],
      aiPrompts: [
        {
          midjourney:
            "Hillcrest pride celebration or festival, vibrant community gathering, street event, colorful atmosphere, professional event photography, 50mm f/1.4, candid moments, editorial tone",
          dalleThree:
            "professional photograph of Hillcrest community celebration or street festival with vibrant gathering, candid moment, professional event photography",
        },
      ],
    },
  },
};

// ============================================================================
// NORTH PARK
// ============================================================================

export const northPark: SubareaImages = {
  name: "North Park",
  description:
    "Hip urban village with craft breweries, vintage shops, galleries, and creative culture",
  hero: {
    unsplashTerms: [
      "urban neighborhood hipster",
      "craft brewery culture",
      "vintage shops district",
      "creative urban village",
    ],
    pexelsTerms: [
      "urban hipster neighborhood",
      "brewery culture",
      "vintage shops",
      "creative district",
    ],
    aiPrompts: [
      {
        midjourney:
          "North Park neighborhood street, craft brewery storefronts, hipster culture, golden light, 35mm f/1.4, professional urban photography, creative atmosphere, editorial quality",
        dalleThree:
          "professional photograph of North Park urban village with craft brewery storefronts and creative culture, professional urban photography, trendy atmosphere",
      },
    ],
  },
  landmarks: {
    "North Park Farmer's Market": {
      unsplashTerms: [
        "farmers market outdoor",
        "community market gathering",
        "produce market activity",
        "street vendor scene",
      ],
      pexelsTerms: [
        "farmers market",
        "market gathering",
        "outdoor market",
        "community market",
      ],
      aiPrompts: [
        {
          midjourney:
            "North Park Farmer's Market, vendor stalls, fresh produce, community shoppers, golden light, professional lifestyle photography, 50mm f/1.4, candid moment, editorial tone",
          dalleThree:
            "professional photograph of North Park Farmer's Market with vendors and shoppers, vibrant community gathering, candid lifestyle photography",
        },
      ],
    },
    "Craft Breweries": {
      unsplashTerms: [
        "craft brewery interior",
        "beer bar taproom",
        "brewery culture gathering",
        "craft beverage scene",
      ],
      pexelsTerms: [
        "brewery bar",
        "taproom culture",
        "craft beer",
        "brewery gathering",
      ],
      aiPrompts: [
        {
          midjourney:
            "craft brewery taproom North Park, beer taps and patrons, industrial interior, warm lighting, professional lifestyle photography, 35mm f/1.4, social atmosphere, editorial tone",
          dalleThree:
            "professional photograph of craft brewery taproom with patrons and beer culture, warm interior lighting, professional lifestyle photography",
        },
      ],
    },
    "Vintage & Antique Shops": {
      unsplashTerms: [
        "vintage shop storefront",
        "antique collectibles display",
        "retro retail window",
        "curated vintage goods",
      ],
      pexelsTerms: [
        "vintage shop",
        "antique store",
        "retro storefront",
        "vintage goods",
      ],
      aiPrompts: [
        {
          midjourney:
            "vintage shop storefront North Park, curated window display, retro goods, afternoon light, 50mm f/1.4, professional architectural photography, artistic tone, editorial quality",
          dalleThree:
            "professional photograph of vintage shop storefront with curated window display, professional retail photography, artistic vintage aesthetic",
        },
      ],
    },
    "Street Art & Murals": {
      unsplashTerms: [
        "mural street art graffiti",
        "artistic wall painting",
        "colorful mural landscape",
        "community street art",
      ],
      pexelsTerms: [
        "street art",
        "mural painting",
        "graffiti art",
        "wall art",
      ],
      aiPrompts: [
        {
          midjourney:
            "colorful street mural North Park, artistic graffiti wall, bright daylight, professional urban art photography, 35mm f/1.4, vibrant colors, editorial tone, professional quality",
          dalleThree:
            "professional photograph of colorful street mural in North Park, vibrant artistic graffiti, bright daylight, professional urban art photography",
        },
      ],
    },
    "Park & Recreation": {
      unsplashTerms: [
        "urban park green space",
        "community park gathering",
        "recreational park landscape",
        "neighborhood park scene",
      ],
      pexelsTerms: [
        "urban park",
        "community park",
        "green space",
        "recreation park",
      ],
      aiPrompts: [
        {
          midjourney:
            "North Park neighborhood park, green trees, community gathering, golden hour, 50mm f/1.4, professional nature photography, peaceful urban setting, editorial tone",
          dalleThree:
            "professional landscape photograph of North Park community green space with gathering, golden hour light, peaceful urban nature photography",
        },
      ],
    },
    "Retail & Restaurant District": {
      unsplashTerms: [
        "retail storefront row",
        "restaurant exterior",
        "dining and shopping district",
        "street-level business fronts",
      ],
      pexelsTerms: [
        "retail storefronts",
        "restaurant row",
        "business district",
        "street shops",
      ],
      aiPrompts: [
        {
          midjourney:
            "North Park retail and restaurant row, diverse storefronts, pedestrians, afternoon light, 35mm f/1.4, professional street photography, urban culture, editorial tone",
          dalleThree:
            "professional photograph of North Park retail and restaurant district storefronts with pedestrian activity, professional street photography",
        },
      ],
    },
  },
};

// ============================================================================
// LITTLE ITALY
// ============================================================================

export const littleItaly: SubareaImages = {
  name: "Little Italy",
  description:
    "Historic Italian neighborhood with restaurants, galleries, cobblestone streets, and cultural charm",
  hero: {
    unsplashTerms: [
      "Italian neighborhood historic",
      "cobblestone street European",
      "traditional Italian district",
      "cultural historic neighborhood",
    ],
    pexelsTerms: [
      "Italian neighborhood",
      "European cobblestone street",
      "historic district",
      "cultural quarter",
    ],
    aiPrompts: [
      {
        midjourney:
          "Little Italy San Diego, historic cobblestone street, Italian architecture, golden hour, 35mm f/1.4, professional travel photography, European charm, editorial quality",
        dalleThree:
          "professional photograph of Little Italy historic cobblestone street with Italian architecture, professional travel photography, European cultural charm",
      },
    ],
  },
  landmarks: {
    "Piazza Caraguata": {
      unsplashTerms: [
        "Italian plaza gathering",
        "public square architecture",
        "cultural plaza landmark",
        "community gathering space",
      ],
      pexelsTerms: [
        "plaza architecture",
        "public square",
        "gathering space",
        "community plaza",
      ],
      aiPrompts: [
        {
          midjourney:
            "Piazza Caraguata Little Italy, public plaza, Italian architecture, golden light, professional architectural photography, 24mm f/2.8, cultural landmark, editorial tone",
          dalleThree:
            "professional architectural photograph of Piazza Caraguata with Italian design, golden hour light, professional urban photography",
        },
      ],
    },
    "Waterfront Historic Area": {
      unsplashTerms: [
        "waterfront historic buildings",
        "bay-facing architecture",
        "historic waterfront district",
        "heritage maritime structures",
      ],
      pexelsTerms: [
        "waterfront historic",
        "bay buildings",
        "heritage architecture",
        "maritime historic",
      ],
      aiPrompts: [
        {
          midjourney:
            "Little Italy waterfront historic buildings, bay view, sunset light, 50mm f/1.4, professional architectural photography, heritage preservation, editorial quality",
          dalleThree:
            "professional architectural photograph of Little Italy waterfront historic buildings with bay view, professional heritage photography",
        },
      ],
    },
    "Italian Restaurants & Cafes": {
      unsplashTerms: [
        "Italian restaurant exterior",
        "sidewalk dining European",
        "restaurant storefront",
        "cafe outdoor seating",
      ],
      pexelsTerms: [
        "Italian restaurant",
        "sidewalk cafe",
        "European dining",
        "restaurant exterior",
      ],
      aiPrompts: [
        {
          midjourney:
            "Italian restaurant Little Italy, outdoor sidewalk dining, warm interior light spilling out, golden hour, professional lifestyle photography, 50mm f/1.4, editorial tone, authentic atmosphere",
          dalleThree:
            "professional photograph of Italian restaurant in Little Italy with outdoor dining, warm ambiance, professional restaurant photography",
        },
      ],
    },
    "Art Galleries": {
      unsplashTerms: [
        "contemporary art gallery",
        "gallery storefront",
        "art exhibition space",
        "cultural gallery exterior",
      ],
      pexelsTerms: [
        "art gallery",
        "gallery space",
        "exhibition hall",
        "cultural gallery",
      ],
      aiPrompts: [
        {
          midjourney:
            "contemporary art gallery Little Italy, gallery storefront with art display, afternoon light, 35mm f/1.4, professional architectural photography, artistic tone, editorial quality",
          dalleThree:
            "professional photograph of contemporary art gallery storefront in Little Italy, professional architectural photography, artistic atmosphere",
        },
      ],
    },
    "Historic Streets & Alleyways": {
      unsplashTerms: [
        "narrow European alley",
        "historic cobblestone alley",
        "charming street architecture",
        "intimate historic pathway",
      ],
      pexelsTerms: [
        "alley architecture",
        "cobblestone street",
        "historic pathway",
        "narrow street",
      ],
      aiPrompts: [
        {
          midjourney:
            "Little Italy narrow cobblestone alley, historic buildings close together, European charm, golden hour, 35mm f/1.4, professional travel photography, intimate setting, editorial tone",
          dalleThree:
            "professional photograph of Little Italy narrow historic alley with European architecture, golden light, professional travel photography",
        },
      ],
    },
    "Cultural Festivals & Events": {
      unsplashTerms: [
        "street festival gathering",
        "cultural celebration event",
        "community street festival",
        "cultural parade event",
      ],
      pexelsTerms: [
        "cultural festival",
        "street celebration",
        "community gathering",
        "event parade",
      ],
      aiPrompts: [
        {
          midjourney:
            "Little Italy cultural festival or street event, community gathering, vibrant atmosphere, professional event photography, 50mm f/1.4, candid moments, editorial tone",
          dalleThree:
            "professional photograph of Little Italy cultural festival or street celebration with community gathering, vibrant atmosphere, candid event photography",
        },
      ],
    },
  },
};

// ============================================================================
// GASLAMP QUARTER
// ============================================================================

export const gaslampQuarter: SubareaImages = {
  name: "Gaslamp Quarter",
  description:
    "Historic downtown district with Victorian architecture, restaurants, nightlife, and cultural heritage",
  hero: {
    unsplashTerms: [
      "historic Victorian district downtown",
      "gaslamp lighting architecture",
      "heritage downtown street",
      "historic district nightlife",
    ],
    pexelsTerms: [
      "historic downtown",
      "Victorian architecture",
      "heritage district",
      "downtown street",
    ],
    aiPrompts: [
      {
        midjourney:
          "Gaslamp Quarter historic street at dusk, Victorian architecture with gaslamp lights, golden evening light, 35mm f/1.4, professional travel photography, historic charm, editorial quality",
        dalleThree:
          "professional photograph of Gaslamp Quarter historic street at dusk with Victorian architecture and gaslamp lights, professional travel photography, historic atmosphere",
      },
    ],
  },
  landmarks: {
    "Davis-Horton House": {
      unsplashTerms: [
        "Victorian mansion architecture",
        "historic building facade",
        "heritage architecture detail",
        "landmark building exterior",
      ],
      pexelsTerms: [
        "Victorian building",
        "historic mansion",
        "heritage building",
        "landmark architecture",
      ],
      aiPrompts: [
        {
          midjourney:
            "Davis-Horton House Gaslamp Quarter, Victorian facade detail, historic architecture, afternoon light, 24mm f/2.8, professional architectural photography, heritage focus, editorial quality",
          dalleThree:
            "professional architectural photograph of Davis-Horton House with Victorian details, professional heritage photography, detailed architecture",
        },
      ],
    },
    "Historic Street Lamps": {
      unsplashTerms: [
        "gaslamp street light historic",
        "Victorian lamp post",
        "heritage street lighting",
        "historic lighting architecture",
      ],
      pexelsTerms: [
        "street lamp historic",
        "Victorian lamp",
        "heritage light",
        "historic lighting",
      ],
      aiPrompts: [
        {
          midjourney:
            "Gaslamp historic street lamp, Victorian design detail, evening dusk light, golden glow, 50mm f/1.4, professional detail photography, historic focus, editorial tone",
          dalleThree:
            "professional detail photograph of historic Gaslamp street lamp with Victorian design, evening dusk light, professional heritage photography",
        },
      ],
    },
    "Historic Restaurants & Bars": {
      unsplashTerms: [
        "historic restaurant interior",
        "heritage bar interior",
        "Victorian-era dining",
        "historic saloon atmosphere",
      ],
      pexelsTerms: [
        "historic restaurant",
        "bar interior",
        "heritage dining",
        "historic saloon",
      ],
      aiPrompts: [
        {
          midjourney:
            "historic Gaslamp Quarter restaurant or bar interior, Victorian decor, warm interior lighting, professional lifestyle photography, 35mm f/1.4, atmospheric dining, editorial tone",
          dalleThree:
            "professional photograph of historic Gaslamp Quarter restaurant interior with Victorian decor, warm ambiance, professional heritage photography",
        },
      ],
    },
    "Downtown Street Evening": {
      unsplashTerms: [
        "downtown street evening light",
        "urban district dusk",
        "city street nightlife",
        "historic downtown nighttime",
      ],
      pexelsTerms: [
        "downtown evening",
        "street dusk",
        "urban nighttime",
        "city night",
      ],
      aiPrompts: [
        {
          midjourney:
            "Gaslamp Quarter downtown street evening, historic buildings lit at dusk, street activity, professional urban photography, 50mm f/1.4, evening light, editorial tone, atmospheric",
          dalleThree:
            "professional photograph of Gaslamp Quarter street at evening dusk with historic buildings and street activity, professional urban photography",
        },
      ],
    },
    "Cultural & Heritage Museums": {
      unsplashTerms: [
        "museum building exterior",
        "cultural institution facade",
        "heritage museum architecture",
        "historic building landmark",
      ],
      pexelsTerms: [
        "museum building",
        "cultural institution",
        "heritage museum",
        "landmark building",
      ],
      aiPrompts: [
        {
          midjourney:
            "Gaslamp Quarter museum or cultural heritage building, historic architecture, afternoon light, 24mm f/2.8, professional architectural photography, cultural heritage focus, editorial quality",
          dalleThree:
            "professional architectural photograph of Gaslamp Quarter cultural heritage museum building, professional architecture photography, heritage institution",
        },
      ],
    },
    "Historic District Streetscape": {
      unsplashTerms: [
        "historic streetscape architecture",
        "district street scene",
        "pedestrian historic street",
        "preserved historic district",
      ],
      pexelsTerms: [
        "historic street",
        "district streetscape",
        "pedestrian street",
        "preserved area",
      ],
      aiPrompts: [
        {
          midjourney:
            "Gaslamp Quarter historic streetscape, Victorian facades, pedestrians, afternoon light, 35mm f/1.4, professional street photography, historic atmosphere, editorial tone",
          dalleThree:
            "professional photograph of Gaslamp Quarter historic district streetscape with Victorian architecture and pedestrians, professional street photography",
        },
      ],
    },
  },
};

// ============================================================================
// POINT LOMA
// ============================================================================

export const pointLoma: SubareaImages = {
  name: "Point Loma",
  description:
    "Coastal peninsula with Cabrillo National Monument, harbor views, and maritime heritage",
  hero: {
    unsplashTerms: [
      "coastal peninsula cliff view",
      "harbor panoramic landscape",
      "lighthouse coastal monument",
      "maritime heritage landscape",
    ],
    pexelsTerms: [
      "coastal peninsula",
      "harbor landscape",
      "monument view",
      "maritime coast",
    ],
    aiPrompts: [
      {
        midjourney:
          "Point Loma peninsula dramatic cliff, harbor view below, golden hour, 50mm f/1.4, professional landscape photography, cinematic light, editorial quality, scenic vista",
        dalleThree:
          "professional landscape photograph of Point Loma peninsula with dramatic cliffs and harbor view, golden hour light, professional scenic photography",
      },
    ],
  },
  landmarks: {
    "Cabrillo National Monument": {
      unsplashTerms: [
        "monument landmark building",
        "historic site architecture",
        "cultural monument exterior",
        "heritage landmark structure",
      ],
      pexelsTerms: [
        "monument landmark",
        "historic site",
        "cultural landmark",
        "heritage structure",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cabrillo National Monument building, historic site architecture, cliff-top location, afternoon light, 24mm f/2.8, professional architectural photography, heritage focus, editorial tone",
          dalleThree:
            "professional architectural photograph of Cabrillo National Monument on cliff-top, professional heritage and architectural photography",
        },
      ],
    },
    "Lighthouse & Beacon": {
      unsplashTerms: [
        "lighthouse coastal structure",
        "beacon tower architecture",
        "maritime lighthouse landmark",
        "coastal beacon structure",
      ],
      pexelsTerms: [
        "lighthouse",
        "beacon tower",
        "maritime lighthouse",
        "coastal beacon",
      ],
      aiPrompts: [
        {
          midjourney:
            "Point Loma lighthouse beacon, maritime architecture, coastal setting, golden hour, 35mm f/1.4, professional architectural photography, maritime heritage, editorial quality",
          dalleThree:
            "professional architectural photograph of Point Loma lighthouse with maritime heritage context, golden light, professional coast photography",
        },
      ],
    },
    "Harbor & Bay Views": {
      unsplashTerms: [
        "harbor panoramic view",
        "bay landscape vista",
        "maritime harbor scene",
        "waterfront panorama",
      ],
      pexelsTerms: [
        "harbor view",
        "bay landscape",
        "maritime scene",
        "waterfront vista",
      ],
      aiPrompts: [
        {
          midjourney:
            "Point Loma harbor view from cliff, San Diego Bay panorama, sailboats on water, golden hour, 50mm f/1.4, professional landscape photography, scenic vista, editorial tone",
          dalleThree:
            "professional landscape photograph of Point Loma harbor view with sailboats and San Diego Bay panorama, golden light, professional scenic photography",
        },
      ],
    },
    "Coastal Trails & Cliffs": {
      unsplashTerms: [
        "coastal hiking trail",
        "cliff-edge pathway",
        "scenic trail landscape",
        "dramatic coastal terrain",
      ],
      pexelsTerms: [
        "coastal trail",
        "hiking path",
        "cliff landscape",
        "coastal terrain",
      ],
      aiPrompts: [
        {
          midjourney:
            "Point Loma coastal hiking trail, dramatic cliff edge, ocean vista, golden hour, 35mm f/1.4, professional nature photography, scenic trail, editorial tone",
          dalleThree:
            "professional landscape photograph of Point Loma coastal hiking trail with dramatic cliffs and ocean view, golden light, professional nature photography",
        },
      ],
    },
    "Maritime Heritage Sites": {
      unsplashTerms: [
        "maritime museum exterior",
        "ship heritage display",
        "naval history landmark",
        "maritime cultural site",
      ],
      pexelsTerms: [
        "maritime museum",
        "ship display",
        "naval heritage",
        "maritime site",
      ],
      aiPrompts: [
        {
          midjourney:
            "Point Loma maritime heritage site, historic ship or maritime museum, afternoon light, 24mm f/2.8, professional architectural photography, maritime heritage focus, editorial quality",
          dalleThree:
            "professional photograph of Point Loma maritime heritage site with historic ship or museum, professional maritime heritage photography",
        },
      ],
    },
    "Sunset Panorama": {
      unsplashTerms: [
        "sunset panoramic view",
        "golden hour sky",
        "dramatic sunset landscape",
        "twilight coastal scene",
      ],
      pexelsTerms: [
        "sunset view",
        "panoramic sky",
        "golden hour",
        "sunset landscape",
      ],
      aiPrompts: [
        {
          midjourney:
            "Point Loma sunset panorama, dramatic sky colors, ocean and bay view, 50mm f/1.4, professional landscape photography, cinematic sunset, editorial quality, atmospheric",
          dalleThree:
            "professional landscape photograph of Point Loma sunset panorama with dramatic sky colors and bay view, professional nature photography, cinematic quality",
        },
      ],
    },
  },
};

// ============================================================================
// ENCINITAS
// ============================================================================

export const encinitas: SubareaImages = {
  name: "Encinitas",
  description:
    "Coastal North County community with beach culture, surfing, botanical gardens, and relaxed vibe",
  hero: {
    unsplashTerms: [
      "beach town Southern California",
      "surfer culture lifestyle",
      "botanical gardens coastal",
      "relaxed beach village",
    ],
    pexelsTerms: [
      "Encinitas beach",
      "California surfer town",
      "coastal gardens",
      "beach village",
    ],
    aiPrompts: [
      {
        midjourney:
          "Encinitas beach town scene, surfers, botanical gardens visible, golden hour, 50mm f/1.4, professional lifestyle photography, relaxed beach culture, editorial quality",
        dalleThree:
          "professional photograph of Encinitas coastal community with beach culture and botanical gardens, professional lifestyle photography, relaxed vibe",
      },
    ],
  },
  landmarks: {
    "Encinitas Beach & Coastline": {
      unsplashTerms: [
        "sandy beach coastal view",
        "beach landscape California",
        "surfer beach scene",
        "peaceful coastal beach",
      ],
      pexelsTerms: [
        "beach landscape",
        "California coast",
        "surfer beach",
        "coastal beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Encinitas beach sandy shoreline, golden hour light, surfers in background, peaceful atmosphere, 50mm f/1.4, professional lifestyle photography, editorial tone",
          dalleThree:
            "professional photograph of Encinitas beach with golden hour light and surfer activity, professional lifestyle photography, peaceful beach scene",
        },
      ],
    },
    "Leucadia Botanical Gardens": {
      unsplashTerms: [
        "botanical garden landscape",
        "cultivated garden flowers",
        "exotic plant garden",
        "garden scenery peaceful",
      ],
      pexelsTerms: [
        "botanical garden",
        "plant garden",
        "cultivated flowers",
        "garden landscape",
      ],
      aiPrompts: [
        {
          midjourney:
            "Leucadia Botanical Gardens, cultivated exotic plants and flowers, garden pathway, golden light, 50mm f/1.4, professional nature photography, serene garden, editorial quality",
          dalleThree:
            "professional landscape photograph of Leucadia Botanical Gardens with exotic plants and flowers, professional garden photography, peaceful setting",
        },
      ],
    },
    "Swami's Beach & Park": {
      unsplashTerms: [
        "park ocean overlook",
        "beach park landscape",
        "scenic park view",
        "recreational beach park",
      ],
      pexelsTerms: [
        "beach park",
        "ocean overlook park",
        "scenic park",
        "recreational area",
      ],
      aiPrompts: [
        {
          midjourney:
            "Swami's Park Encinitas, ocean overlook, park landscape, golden hour, 50mm f/1.4, professional nature photography, scenic view, editorial tone, peaceful setting",
          dalleThree:
            "professional landscape photograph of Swami's Park with ocean overlook, golden light, peaceful park setting, professional nature photography",
        },
      ],
    },
    "Surfing Culture": {
      unsplashTerms: [
        "surfers in water waves",
        "wave action surfing",
        "surfer lifestyle candid",
        "beach surfer community",
      ],
      pexelsTerms: [
        "surfing waves",
        "surfers in water",
        "wave action",
        "beach surfers",
      ],
      aiPrompts: [
        {
          midjourney:
            "Encinitas surfers catching waves, wave action, professional lifestyle photography, 70mm f/1.4, candid action moment, professional quality, editorial tone",
          dalleThree:
            "professional photograph of Encinitas surfers catching waves with action and movement, candid lifestyle photography, professional editorial quality",
        },
      ],
    },
    "Main Street & Village": {
      unsplashTerms: [
        "small town main street",
        "coastal village storefronts",
        "beach town retail",
        "village architecture street",
      ],
      pexelsTerms: [
        "main street village",
        "small town shops",
        "coastal village",
        "village street",
      ],
      aiPrompts: [
        {
          midjourney:
            "Encinitas main street village, storefronts and pedestrians, afternoon light, 35mm f/1.4, professional street photography, small town charm, editorial tone",
          dalleThree:
            "professional photograph of Encinitas main street village with storefronts and pedestrian activity, professional street photography, charming atmosphere",
        },
      ],
    },
    "Coastal Dining & Cafes": {
      unsplashTerms: [
        "beach cafe outdoor seating",
        "seaside restaurant view",
        "coastal dining outdoor",
        "waterfront restaurant scene",
      ],
      pexelsTerms: [
        "beach cafe",
        "coastal restaurant",
        "seaside dining",
        "waterfront cafe",
      ],
      aiPrompts: [
        {
          midjourney:
            "Encinitas coastal restaurant or cafe, ocean view, outdoor dining area, golden hour, professional lifestyle photography, 50mm f/1.4, relaxed beach dining, editorial tone",
          dalleThree:
            "professional photograph of Encinitas coastal cafe or restaurant with ocean view and outdoor dining, professional lifestyle photography, relaxed atmosphere",
        },
      ],
    },
  },
};

// ============================================================================
// CARDIFF-BY-THE-SEA
// ============================================================================

export const cardiffByTheSea: SubareaImages = {
  name: "Cardiff-by-the-Sea",
  description:
    "Charming coastal village with lagoon, reef access, surfer culture, and small-town beach charm",
  hero: {
    unsplashTerms: [
      "coastal village charm",
      "beach lagoon landscape",
      "small beach town",
      "surfer village vibe",
    ],
    pexelsTerms: [
      "Cardiff beach",
      "coastal village",
      "beach lagoon",
      "beach town charm",
    ],
    aiPrompts: [
      {
        midjourney:
          "Cardiff-by-the-Sea charming coastal village, beach lagoon view, small-town architecture, golden hour, 50mm f/1.4, professional travel photography, cozy beach charm, editorial quality",
        dalleThree:
          "professional photograph of Cardiff-by-the-Sea coastal village with beach lagoon, professional travel photography, charming small-town atmosphere",
      },
    ],
  },
  landmarks: {
    "Cardiff State Beach": {
      unsplashTerms: [
        "sandy beach coastal view",
        "beach landscape quiet",
        "peaceful beach scene",
        "beach reef area",
      ],
      pexelsTerms: [
        "beach landscape",
        "coastal beach",
        "quiet beach",
        "reef beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff State Beach sandy shoreline, peaceful beach scene, golden hour light, 50mm f/1.4, professional nature photography, tranquil setting, editorial tone",
          dalleThree:
            "professional landscape photograph of Cardiff State Beach with peaceful sandy shoreline, golden light, professional nature photography",
        },
      ],
    },
    "Cardiff Lagoon": {
      unsplashTerms: [
        "lagoon water landscape",
        "coastal lagoon ecosystem",
        "peaceful water scene",
        "wetland landscape",
      ],
      pexelsTerms: [
        "lagoon landscape",
        "coastal water",
        "lagoon ecosystem",
        "wetland water",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff Lagoon landscape, peaceful water reflection, coastal lagoon, golden hour, 50mm f/1.4, professional nature photography, serene ecosystem, editorial quality",
          dalleThree:
            "professional landscape photograph of Cardiff Lagoon with peaceful water reflection, golden light, professional nature photography, serene setting",
        },
      ],
    },
    "Reef Break & Surfing": {
      unsplashTerms: [
        "surfer wave action reef",
        "reef break surfing",
        "surfer lifestyle water",
        "wave action coastal",
      ],
      pexelsTerms: [
        "surfing reef",
        "surfer waves",
        "reef break",
        "wave action",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff reef break surfers, wave action, professional lifestyle photography, 70mm f/1.4, candid action moment, professional quality, editorial tone",
          dalleThree:
            "professional photograph of surfers at Cardiff reef break catching waves, candid action photography, professional lifestyle editorial quality",
        },
      ],
    },
    "Village Architecture & Shops": {
      unsplashTerms: [
        "small village storefronts",
        "coastal shop architecture",
        "charming village street",
        "quiet village retail",
      ],
      pexelsTerms: [
        "village shops",
        "coastal storefronts",
        "village street",
        "small town shops",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff village storefronts and shops, charming architecture, afternoon light, 35mm f/1.4, professional street photography, small-town charm, editorial tone",
          dalleThree:
            "professional photograph of Cardiff village storefronts with charming coastal architecture, professional street photography, quaint atmosphere",
        },
      ],
    },
    "Coastal Trail & Cliffs": {
      unsplashTerms: [
        "coastal cliff trail",
        "ocean overlook path",
        "scenic coastal trail",
        "cliff-edge landscape",
      ],
      pexelsTerms: [
        "coastal trail",
        "cliff landscape",
        "ocean overlook",
        "scenic trail",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff coastal trail along cliffs, ocean view, scenic path, golden hour, 35mm f/1.4, professional nature photography, scenic vista, editorial tone",
          dalleThree:
            "professional landscape photograph of Cardiff coastal trail with ocean view and cliff landscape, golden light, professional nature photography",
        },
      ],
    },
    "Seaside Dining & Gathering": {
      unsplashTerms: [
        "beach cafe outdoor seating",
        "seaside dining scene",
        "waterfront restaurant view",
        "relaxed beach dining",
      ],
      pexelsTerms: [
        "beach cafe",
        "seaside dining",
        "coastal restaurant",
        "beach gathering",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cardiff seaside cafe or restaurant with outdoor seating, ocean view, relaxed dining atmosphere, golden hour, professional lifestyle photography, 50mm f/1.4, editorial tone",
          dalleThree:
            "professional photograph of Cardiff seaside restaurant or cafe with ocean view and outdoor seating, professional lifestyle photography, relaxed atmosphere",
        },
      ],
    },
  },
};

// ============================================================================
// SOLANA BEACH
// ============================================================================

export const solanaBench: SubareaImages = {
  name: "Solana Beach",
  description:
    "Upscale coastal community with sandy beaches, Cedros Avenue shopping, and sophisticated beach lifestyle",
  hero: {
    unsplashTerms: [
      "upscale beach community",
      "sandy beach resort atmosphere",
      "sophisticated beach town",
      "coastal luxury lifestyle",
    ],
    pexelsTerms: [
      "Solana Beach",
      "upscale beach",
      "resort beach",
      "luxury beach lifestyle",
    ],
    aiPrompts: [
      {
        midjourney:
          "Solana Beach upscale coastal community, sandy beach, sophisticated atmosphere, golden hour, 50mm f/1.4, professional lifestyle photography, luxury beach vibe, editorial quality",
        dalleThree:
          "professional photograph of Solana Beach upscale coastal community with sandy beach, professional lifestyle photography, sophisticated beach atmosphere",
      },
    ],
  },
  landmarks: {
    "Solana Beach Sandy Shores": {
      unsplashTerms: [
        "wide sandy beach",
        "peaceful beach landscape",
        "upscale beach scene",
        "resort beach setting",
      ],
      pexelsTerms: [
        "sandy beach",
        "beach landscape",
        "peaceful beach",
        "resort beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Solana Beach wide sandy shoreline, peaceful beach scene, golden hour light, 50mm f/1.4, professional lifestyle photography, upscale beach vibe, editorial tone",
          dalleThree:
            "professional photograph of Solana Beach sandy shoreline with peaceful beach scene, golden light, professional lifestyle photography",
        },
      ],
    },
    "Cedros Avenue": {
      unsplashTerms: [
        "upscale shopping avenue",
        "designer boutique storefronts",
        "sophisticated retail district",
        "beach town luxury shopping",
      ],
      pexelsTerms: [
        "shopping avenue",
        "boutique shops",
        "upscale retail",
        "shopping district",
      ],
      aiPrompts: [
        {
          midjourney:
            "Cedros Avenue Solana Beach, upscale designer storefronts, sophisticated retail architecture, afternoon light, 35mm f/1.4, professional architectural photography, luxury shopping, editorial tone",
          dalleThree:
            "professional photograph of Cedros Avenue with upscale designer storefronts, professional architectural photography, sophisticated shopping district",
        },
      ],
    },
    "Beach Park & Recreation": {
      unsplashTerms: [
        "beachfront park landscape",
        "recreation area park",
        "scenic beach park",
        "coastal park amenities",
      ],
      pexelsTerms: [
        "beach park",
        "recreation park",
        "coastal park",
        "park landscape",
      ],
      aiPrompts: [
        {
          midjourney:
            "Solana Beach park and recreation area, beach access, park landscape, golden hour, 50mm f/1.4, professional nature photography, peaceful setting, editorial tone",
          dalleThree:
            "professional landscape photograph of Solana Beach park with beach access and recreation amenities, golden light, professional nature photography",
        },
      ],
    },
    "Upscale Dining & Restaurants": {
      unsplashTerms: [
        "upscale restaurant exterior",
        "fine dining establishment",
        "sophisticated restaurant design",
        "coastal fine dining",
      ],
      pexelsTerms: [
        "upscale restaurant",
        "fine dining",
        "restaurant exterior",
        "dining establishment",
      ],
      aiPrompts: [
        {
          midjourney:
            "Solana Beach upscale restaurant or fine dining establishment, sophisticated design, ocean view setting, afternoon light, 35mm f/1.4, professional architectural photography, luxury dining, editorial quality",
          dalleThree:
            "professional architectural photograph of Solana Beach upscale restaurant, sophisticated design, professional restaurant photography, luxury ambiance",
        },
      ],
    },
    "Coastal Lifestyle Activities": {
      unsplashTerms: [
        "beach lifestyle candid",
        "waterfront activity scene",
        "beach recreation gathering",
        "upscale beach community",
      ],
      pexelsTerms: [
        "beach lifestyle",
        "waterfront activity",
        "recreation gathering",
        "beach community",
      ],
      aiPrompts: [
        {
          midjourney:
            "Solana Beach lifestyle scene, beachgoers, waterfront activity, golden hour, professional lifestyle photography, 50mm f/1.4, candid moment, sophisticated vibe, editorial tone",
          dalleThree:
            "professional photograph of Solana Beach with beachgoers and waterfront activity, golden light, candid lifestyle moment, professional photography",
        },
      ],
    },
    "Coastal Bluff & Water Views": {
      unsplashTerms: [
        "coastal bluff view",
        "ocean vista landscape",
        "scenic water overlook",
        "coastal cliff setting",
      ],
      pexelsTerms: [
        "coastal view",
        "ocean vista",
        "bluff landscape",
        "water overlook",
      ],
      aiPrompts: [
        {
          midjourney:
            "Solana Beach coastal bluff, ocean vista view, scenic overlook, golden hour, 50mm f/1.4, professional landscape photography, dramatic setting, editorial tone",
          dalleThree:
            "professional landscape photograph of Solana Beach coastal bluff with ocean vista view, golden light, professional scenic photography",
        },
      ],
    },
  },
};

// ============================================================================
// CARLSBAD
// ============================================================================

export const carlsbad: SubareaImages = {
  name: "Carlsbad",
  description:
    "Charming North County coastal city with Legoland, flower fields, upscale shopping, and pristine beaches",
  hero: {
    unsplashTerms: [
      "Carlsbad beach California",
      "coastal town upscale",
      "flower fields landscape",
      "beach village charm",
    ],
    pexelsTerms: [
      "Carlsbad beach",
      "Carlsbad California",
      "beach town",
      "flower fields",
    ],
    aiPrompts: [
      {
        midjourney:
          "Carlsbad beach town scene, upscale coastal community, flower fields visible inland, golden hour, 50mm f/1.4, professional travel photography, charming coastal atmosphere, editorial quality",
        dalleThree:
          "professional photograph of Carlsbad coastal community with beach and upscale atmosphere, professional travel photography, charming beach town character",
      },
    ],
  },
  landmarks: {
    "Carlsbad Village": {
      unsplashTerms: [
        "coastal village storefronts",
        "upscale retail district",
        "beach town main street",
        "village architecture shopping",
      ],
      pexelsTerms: [
        "village storefronts",
        "upscale shopping",
        "main street",
        "village retail",
      ],
      aiPrompts: [
        {
          midjourney:
            "Carlsbad Village storefronts and shops, upscale retail architecture, pedestrians, afternoon light, 35mm f/1.4, professional street photography, charming village, editorial tone",
          dalleThree:
            "professional photograph of Carlsbad Village with upscale storefronts, professional street photography, charming coastal shopping atmosphere",
        },
      ],
    },
    "Carlsbad Flower Fields": {
      unsplashTerms: [
        "flower field landscape colorful",
        "cultivated flower rows",
        "seasonal flower bloom",
        "agricultural landscape flowers",
      ],
      pexelsTerms: [
        "flower fields",
        "flower landscape",
        "colorful flowers",
        "field flowers",
      ],
      aiPrompts: [
        {
          midjourney:
            "Carlsbad Flower Fields colorful blooming flowers, row perspective, golden hour light, professional landscape photography, 50mm f/1.4, vibrant colors, editorial quality, seasonal beauty",
          dalleThree:
            "professional landscape photograph of Carlsbad Flower Fields with blooming colorful flowers, golden light, professional agricultural landscape photography",
        },
      ],
    },
    "Legoland California": {
      unsplashTerms: [
        "amusement park attractions",
        "theme park rides architecture",
        "family amusement entertainment",
        "colorful amusement park",
      ],
      pexelsTerms: [
        "amusement park",
        "theme park",
        "attractions rides",
        "family entertainment",
      ],
      aiPrompts: [
        {
          midjourney:
            "Legoland California park entrance and attractions, colorful structures, family activities, bright daylight, professional entertainment photography, 35mm f/1.4, vibrant family atmosphere, editorial tone",
          dalleThree:
            "professional photograph of Legoland California with colorful attractions, bright daylight, family activities, professional entertainment park photography",
        },
      ],
    },
    "Carlsbad Beach & Coastline": {
      unsplashTerms: [
        "sandy beach coastal view",
        "peaceful beach landscape",
        "upscale beach scene",
        "coastal beach pristine",
      ],
      pexelsTerms: [
        "beach landscape",
        "coastal beach",
        "sandy beach",
        "pristine beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "Carlsbad beach sandy shoreline, pristine peaceful beach scene, golden hour light, 50mm f/1.4, professional lifestyle photography, upscale beach vibe, editorial tone",
          dalleThree:
            "professional photograph of Carlsbad beach with pristine sandy shoreline, golden hour light, professional lifestyle photography, upscale atmosphere",
        },
      ],
    },
    "South Carlsbad State Beach": {
      unsplashTerms: [
        "state beach landscape",
        "beach park scenic view",
        "coastal state park",
        "protected beach area",
      ],
      pexelsTerms: [
        "state beach",
        "beach park",
        "coastal state park",
        "protected beach",
      ],
      aiPrompts: [
        {
          midjourney:
            "South Carlsbad State Beach landscape, scenic coastal view, golden hour, 50mm f/1.4, professional nature photography, pristine beach setting, editorial quality",
          dalleThree:
            "professional landscape photograph of South Carlsbad State Beach with scenic coastal view, golden light, professional nature photography",
        },
      ],
    },
    "Upscale Waterfront Dining": {
      unsplashTerms: [
        "upscale restaurant waterfront",
        "coastal fine dining",
        "beachfront restaurant view",
        "sophisticated dining establishment",
      ],
      pexelsTerms: [
        "upscale restaurant",
        "waterfront dining",
        "coastal restaurant",
        "fine dining",
      ],
      aiPrompts: [
        {
          midjourney:
            "Carlsbad upscale waterfront restaurant or fine dining, ocean view, sophisticated design, golden hour, professional lifestyle photography, 50mm f/1.4, luxury dining atmosphere, editorial tone",
          dalleThree:
            "professional photograph of Carlsbad upscale waterfront restaurant with ocean view, sophisticated design, professional luxury dining photography",
        },
      ],
    },
  },
};

// ============================================================================
// MASTER MAP OF ALL SUBAREAS
// ============================================================================

export const allSubareImages: AllSubareImagesMap = {
  "La Jolla": laJolla,
  "Del Mar": delMar,
  Coronado: coronado,
  "Ocean Beach": oceanBeach,
  "Pacific Beach": pacificBeach,
  "Mission Beach": missionBeach,
  Hillcrest: hillcrest,
  "North Park": northPark,
  "Little Italy": littleItaly,
  "Gaslamp Quarter": gaslampQuarter,
  "Point Loma": pointLoma,
  Encinitas: encinitas,
  "Cardiff-by-the-Sea": cardiffByTheSea,
  "Solana Beach": solanaBench,
  Carlsbad: carlsbad,
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get subarea by name
 */
export function getSubarea(name: string): SubareaImages | undefined {
  return allSubareImages[name];
}

/**
 * Get all subarea names
 */
export function getAllSubareaNames(): string[] {
  return Object.keys(allSubareImages);
}

/**
 * Get all landmark names for a specific subarea
 */
export function getLandmarkNames(subareaName: string): string[] {
  const subarea = allSubareImages[subareaName];
  return subarea ? Object.keys(subarea.landmarks) : [];
}

/**
 * Get landmark image sources
 */
export function getLandmarkImageSources(
  subareaName: string,
  landmarkName: string
): ImageSource | undefined {
  const subarea = allSubareImages[subareaName];
  return subarea ? subarea.landmarks[landmarkName] : undefined;
}

export default allSubareImages;
