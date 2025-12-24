export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  features: string[];
  image: string;
  priceRange: string;
  popular: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  productCount: number;
}

export const products: Product[] = [
  // Mobility Aids
  {
    id: "mob-001",
    name: "Adjustable Aluminum Cane",
    slug: "adjustable-aluminum-cane",
    category: "Mobility Aids",
    categorySlug: "mobility-aids",
    description: "Lightweight and durable aluminum cane with adjustable height settings. Features a comfortable ergonomic handle and non-slip rubber tip for enhanced stability and safety.",
    features: [
      "Height adjustable from 33\" to 37\"",
      "Supports up to 250 lbs",
      "Ergonomic soft-grip handle reduces hand fatigue",
      "Non-slip rubber tip for traction on various surfaces"
    ],
    image: "/images/supplies/cane.jpg",
    priceRange: "$25-45",
    popular: true
  },
  {
    id: "mob-002",
    name: "Folding Walking Stick with LED Light",
    slug: "folding-walking-stick-led",
    category: "Mobility Aids",
    categorySlug: "mobility-aids",
    description: "Portable folding walking stick with built-in LED light for enhanced visibility and safety during evening walks. Compact design folds to fit in a bag or purse.",
    features: [
      "Folds into 4 sections for easy portability",
      "Built-in LED light with long-lasting battery",
      "Anti-shock design reduces joint impact",
      "Wrist strap for added security"
    ],
    image: "/images/supplies/walking-stick.jpg",
    priceRange: "$35-55",
    popular: false
  },
  {
    id: "mob-003",
    name: "Heavy-Duty Quad Cane",
    slug: "heavy-duty-quad-cane",
    category: "Mobility Aids",
    categorySlug: "mobility-aids",
    description: "Extra-stable quad cane with four-point base providing superior balance and support. Ideal for those requiring additional stability during rehabilitation or daily activities.",
    features: [
      "Four-point base for maximum stability",
      "Supports up to 300 lbs",
      "Height adjustable with easy push-button mechanism",
      "Can stand upright on its own"
    ],
    image: "/images/supplies/quad-cane.jpg",
    priceRange: "$40-65",
    popular: true
  },

  // Walkers & Rollators
  {
    id: "walk-001",
    name: "Standard Folding Walker",
    slug: "standard-folding-walker",
    category: "Walkers & Rollators",
    categorySlug: "walkers-rollators",
    description: "Classic folding walker with sturdy aluminum frame construction. Provides reliable support for indoor and outdoor use with easy folding mechanism for transport and storage.",
    features: [
      "Lightweight aluminum frame (6 lbs)",
      "Folds flat for easy storage",
      "Height adjustable for users 5'4\" to 6'2\"",
      "Non-marring rubber tips protect floors"
    ],
    image: "/images/supplies/standard-walker.jpg",
    priceRange: "$60-95",
    popular: true
  },
  {
    id: "walk-002",
    name: "Deluxe Rollator with Padded Seat",
    slug: "deluxe-rollator-padded-seat",
    category: "Walkers & Rollators",
    categorySlug: "walkers-rollators",
    description: "Premium four-wheel rollator featuring a comfortable padded seat, backrest, and under-seat storage basket. Equipped with easy-to-use loop brakes for added safety and control.",
    features: [
      "Padded seat supports up to 300 lbs",
      "8\" wheels for smooth indoor/outdoor use",
      "Easy-pull loop brakes with locking mechanism",
      "Removable storage basket and backrest"
    ],
    image: "/images/supplies/rollator.jpg",
    priceRange: "$150-250",
    popular: true
  },
  {
    id: "walk-003",
    name: "Knee Walker Scooter",
    slug: "knee-walker-scooter",
    category: "Walkers & Rollators",
    categorySlug: "walkers-rollators",
    description: "Innovative knee walker designed for lower leg injuries, providing a comfortable alternative to crutches. Features steerable front wheel and hand brakes for easy maneuverability.",
    features: [
      "Contoured knee pad with memory foam",
      "Adjustable height for optimal comfort",
      "Dual hand brakes for precise control",
      "Folds for transport and storage"
    ],
    image: "/images/supplies/knee-walker.jpg",
    priceRange: "$120-200",
    popular: false
  },

  // Wheelchairs
  {
    id: "wheel-001",
    name: "Lightweight Manual Wheelchair",
    slug: "lightweight-manual-wheelchair",
    category: "Wheelchairs",
    categorySlug: "wheelchairs",
    description: "Durable yet lightweight manual wheelchair with comfortable padded armrests and footrests. Features quick-release wheels for easy transport and storage.",
    features: [
      "Aircraft-grade aluminum frame (only 36 lbs)",
      "Supports up to 300 lbs",
      "Quick-release 24\" rear wheels",
      "Desk-length padded armrests flip back"
    ],
    image: "/images/supplies/manual-wheelchair.jpg",
    priceRange: "$250-450",
    popular: true
  },
  {
    id: "wheel-002",
    name: "Transport Chair with Hand Brakes",
    slug: "transport-chair-hand-brakes",
    category: "Wheelchairs",
    categorySlug: "wheelchairs",
    description: "Compact transport wheelchair perfect for caregiver-assisted mobility. Lightweight design with companion hand brakes makes it ideal for medical appointments and outings.",
    features: [
      "Ultra-lightweight at 19 lbs",
      "12\" rear wheels for tight spaces",
      "Companion-controlled hand brakes",
      "Folds compactly for car storage"
    ],
    image: "/images/supplies/transport-chair.jpg",
    priceRange: "$180-280",
    popular: false
  },
  {
    id: "wheel-003",
    name: "Premium Power Wheelchair",
    slug: "premium-power-wheelchair",
    category: "Wheelchairs",
    categorySlug: "wheelchairs",
    description: "Advanced electric wheelchair with joystick control and long-lasting battery system. Offers superior comfort and independence with customizable seating and controls.",
    features: [
      "Up to 15 miles per charge",
      "360-degree joystick control",
      "Adjustable seat, armrests, and footrests",
      "Supports up to 350 lbs"
    ],
    image: "/images/supplies/electric-scooter.jpg",
    priceRange: "Call for pricing",
    popular: true
  },

  // Hospital Beds
  {
    id: "bed-001",
    name: "Semi-Electric Hospital Bed",
    slug: "semi-electric-hospital-bed",
    category: "Hospital Beds",
    categorySlug: "hospital-beds",
    description: "Semi-electric adjustable hospital bed with electric head and foot controls. Manual height adjustment provides cost-effective solution for home care needs.",
    features: [
      "Electric head and foot adjustment",
      "Manual height crank adjustment",
      "400 lb weight capacity",
      "Includes side rails and mattress"
    ],
    image: "/images/supplies/hospital-beds/manual-bed.jpg",
    priceRange: "$800-1,200",
    popular: true
  },
  {
    id: "bed-002",
    name: "Full-Electric Hospital Bed Package",
    slug: "full-electric-hospital-bed-package",
    category: "Hospital Beds",
    categorySlug: "hospital-beds",
    description: "Complete hospital bed system with full electric controls for head, foot, and height adjustment. Premium package includes pressure-relief mattress and full-length side rails.",
    features: [
      "Full electric adjustment with hand control",
      "Trendelenburg and reverse positioning",
      "Includes therapeutic foam mattress",
      "Tool-free assembly and breakdown"
    ],
    image: "/images/supplies/hospital-beds/electric-bed.jpg",
    priceRange: "$1,500-2,500",
    popular: true
  },
  {
    id: "bed-003",
    name: "Bed Rails and Safety Accessories Kit",
    slug: "bed-rails-safety-accessories-kit",
    category: "Hospital Beds",
    categorySlug: "hospital-beds",
    description: "Comprehensive safety accessory kit including adjustable bed rails, bed stick helper, and organizer pouch. Compatible with most hospital and home beds.",
    features: [
      "Adjustable height bed rails",
      "Bed stick assist handle",
      "Bedside organizer with pockets",
      "Easy installation without tools"
    ],
    image: "/images/supplies/hospital-beds/electric-bed.jpg",
    priceRange: "$120-220",
    popular: false
  },

  // Lift Chairs
  {
    id: "lift-001",
    name: "Power Lift Recliner with Heat and Massage",
    slug: "power-lift-recliner-heat-massage",
    category: "Lift Chairs",
    categorySlug: "lift-chairs",
    description: "Luxurious power lift recliner featuring built-in heat therapy and massage functions. Dual motor system allows independent back and footrest control for personalized comfort.",
    features: [
      "Dual motor infinite position control",
      "8 massage modes with heat therapy",
      "USB charging port and side pockets",
      "Supports up to 350 lbs"
    ],
    image: "/images/supplies/lift-chairs/power-lift-recliner.jpg",
    priceRange: "$800-1,400",
    popular: true
  },
  {
    id: "lift-002",
    name: "Zero Gravity Lift Chair",
    slug: "zero-gravity-lift-chair",
    category: "Lift Chairs",
    categorySlug: "lift-chairs",
    description: "Therapeutic zero gravity lift chair designed to reduce pressure on the spine and improve circulation. Features premium upholstery and smooth, quiet lifting mechanism.",
    features: [
      "Zero gravity positioning technology",
      "Whisper-quiet lift mechanism",
      "Premium breathable fabric",
      "Battery backup for power outages"
    ],
    image: "/images/supplies/lift-chairs/zero-gravity-chair.jpg",
    priceRange: "$1,200-1,800",
    popular: true
  },

  // Bathroom Safety
  {
    id: "bath-001",
    name: "Grab Bar Installation Kit",
    slug: "grab-bar-installation-kit",
    category: "Bathroom Safety",
    categorySlug: "bathroom-safety",
    description: "Professional-grade stainless steel grab bars with complete installation hardware. Available in multiple sizes for shower, bathtub, and toilet area installation.",
    features: [
      "Corrosion-resistant stainless steel",
      "Supports up to 500 lbs per bar",
      "Textured grip surface prevents slipping",
      "ADA compliant with all mounting hardware"
    ],
    image: "/images/supplies/bathroom-safety/grab-bars.jpg",
    priceRange: "$45-120",
    popular: true
  },
  {
    id: "bath-002",
    name: "Adjustable Shower Chair with Arms",
    slug: "adjustable-shower-chair-arms",
    category: "Bathroom Safety",
    categorySlug: "bathroom-safety",
    description: "Sturdy shower chair with padded armrests and non-slip feet for secure bathing. Tool-free height adjustment accommodates users of varying heights and mobility needs.",
    features: [
      "Padded armrests for added support",
      "6 height adjustment positions",
      "Drainage holes prevent water pooling",
      "300 lb weight capacity"
    ],
    image: "/images/supplies/bathroom-safety/shower-seat.jpg",
    priceRange: "$65-110",
    popular: true
  },
  {
    id: "bath-003",
    name: "3-in-1 Commode and Shower Chair",
    slug: "3-in-1-commode-shower-chair",
    category: "Bathroom Safety",
    categorySlug: "bathroom-safety",
    description: "Versatile 3-in-1 design functions as bedside commode, raised toilet seat, and shower chair. Includes splash guard, bucket with lid, and padded seat for comfort.",
    features: [
      "Multi-functional: commode, toilet riser, shower seat",
      "Removable bucket with lid and splash guard",
      "Padded seat and backrest",
      "Rust-resistant aluminum frame"
    ],
    image: "/images/supplies/bathroom-safety/raised-toilet-seat.jpg",
    priceRange: "$90-150",
    popular: false
  },

  // Hearing Aids
  {
    id: "hear-001",
    name: "Digital Behind-the-Ear Hearing Aid",
    slug: "digital-behind-ear-hearing-aid",
    category: "Hearing Aids",
    categorySlug: "hearing-aids",
    description: "Advanced digital hearing aid with noise reduction technology and multiple listening programs. Comfortable behind-the-ear design suitable for mild to severe hearing loss.",
    features: [
      "16-channel digital sound processing",
      "Automatic feedback cancellation",
      "4 listening programs for different environments",
      "Telecoil for phone compatibility"
    ],
    image: "/images/supplies/hearing-aids/behind-ear.jpg",
    priceRange: "$600-1,200 per pair",
    popular: true
  },
  {
    id: "hear-002",
    name: "Nearly Invisible In-the-Ear Hearing Aid",
    slug: "nearly-invisible-in-ear-hearing-aid",
    category: "Hearing Aids",
    categorySlug: "hearing-aids",
    description: "Discreet in-the-ear hearing aid custom-fitted to your ear canal. Digital technology provides clear sound amplification while remaining virtually invisible to others.",
    features: [
      "Custom-molded for perfect fit",
      "Digital noise reduction",
      "Long-lasting size 312 battery",
      "Suitable for mild to moderate hearing loss"
    ],
    image: "/images/supplies/hearing-aids/in-ear.jpg",
    priceRange: "$800-1,500 per pair",
    popular: true
  },
  {
    id: "hear-003",
    name: "Rechargeable Bluetooth Hearing Aid",
    slug: "rechargeable-bluetooth-hearing-aid",
    category: "Hearing Aids",
    categorySlug: "hearing-aids",
    description: "Modern rechargeable hearing aid with Bluetooth connectivity for direct audio streaming from smartphones and TVs. No battery replacement needed with convenient charging dock.",
    features: [
      "Bluetooth streaming from devices",
      "24-hour rechargeable battery",
      "Smartphone app for custom control",
      "Automatic environment adjustment"
    ],
    image: "/images/supplies/hearing-aids/rechargeable.jpg",
    priceRange: "$1,200-2,000 per pair",
    popular: true
  },

  // Oxygen Equipment
  {
    id: "oxy-001",
    name: "Portable Oxygen Concentrator",
    slug: "portable-oxygen-concentrator",
    category: "Oxygen Equipment",
    categorySlug: "oxygen-equipment",
    description: "Lightweight portable oxygen concentrator providing medical-grade oxygen on the go. FAA-approved for air travel with long-lasting battery and multiple flow settings.",
    features: [
      "FAA approved for air travel",
      "Up to 8 hours battery life",
      "5 pulse-dose flow settings",
      "Weighs only 4.8 lbs"
    ],
    image: "/images/supplies/oxygen/portable-concentrator.jpg",
    priceRange: "Call for pricing",
    popular: true
  },
  {
    id: "oxy-002",
    name: "Home Oxygen Tank System",
    slug: "home-oxygen-tank-system",
    category: "Oxygen Equipment",
    categorySlug: "oxygen-equipment",
    description: "Complete home oxygen system with large capacity tank and adjustable flow regulator. Includes nasal cannula, tubing, and all necessary accessories for home oxygen therapy.",
    features: [
      "High-capacity oxygen storage",
      "Adjustable flow rate 0-15 LPM",
      "Includes delivery service and refills",
      "Safety features and pressure gauge"
    ],
    image: "/images/supplies/oxygen/oxygen-tank.jpg",
    priceRange: "Call for pricing",
    popular: false
  },
  {
    id: "oxy-003",
    name: "Auto CPAP Machine with Humidifier",
    slug: "auto-cpap-machine-humidifier",
    category: "Oxygen Equipment",
    categorySlug: "oxygen-equipment",
    description: "Advanced auto-adjusting CPAP machine for sleep apnea treatment with integrated heated humidifier. Features data tracking and quiet operation for better sleep quality.",
    features: [
      "Auto-adjusting pressure technology",
      "Heated humidifier prevents dryness",
      "Sleep data tracking and reporting",
      "Whisper-quiet operation (26 dB)"
    ],
    image: "/images/supplies/oxygen/cpap-machine.jpg",
    priceRange: "$600-1,200",
    popular: true
  },

  // Daily Living Aids
  {
    id: "daily-001",
    name: "32-Inch Reacher Grabber Tool",
    slug: "32-inch-reacher-grabber-tool",
    category: "Daily Living Aids",
    categorySlug: "daily-living-aids",
    description: "Ergonomic reacher tool with rotating head and magnetic tip for picking up items without bending or stretching. Lightweight design with comfortable grip reduces strain on hands and back.",
    features: [
      "32-inch reach eliminates bending",
      "Jaw opens to 4 inches wide",
      "Magnetic tip for metal objects",
      "Rubberized grip for secure holding"
    ],
    image: "/images/supplies/daily-living/reacher-grabber.jpg",
    priceRange: "$15-30",
    popular: true
  },
  {
    id: "daily-002",
    name: "Weekly Medication Organizer System",
    slug: "weekly-medication-organizer-system",
    category: "Daily Living Aids",
    categorySlug: "daily-living-aids",
    description: "Large-capacity pill organizer with four daily compartments for morning, noon, evening, and bedtime doses. Clear lids and large print labels ensure proper medication management.",
    features: [
      "28 individual compartments (7 days x 4 times)",
      "Large compartments hold multiple pills",
      "BPA-free with secure snap closures",
      "Removable daily trays for on-the-go"
    ],
    image: "/images/supplies/daily-living/pill-organizer.jpg",
    priceRange: "$12-25",
    popular: true
  },
  {
    id: "daily-003",
    name: "LED Illuminated Magnifying Glass",
    slug: "led-illuminated-magnifying-glass",
    category: "Daily Living Aids",
    categorySlug: "daily-living-aids",
    description: "High-quality magnifying glass with bright LED lights for enhanced visibility when reading small print, labels, or doing detail work. Features both handheld and standing positions.",
    features: [
      "3X and 10X magnification options",
      "12 energy-efficient LED lights",
      "Converts to hands-free stand",
      "Perfect for reading, hobbies, and inspection"
    ],
    image: "/images/supplies/daily-living/magnifier.jpg",
    priceRange: "$25-45",
    popular: false
  }
];

// Helper function to get all unique categories
export function getAllCategories(): Category[] {
  const categoryMap = new Map<string, { name: string; products: Product[] }>();

  products.forEach(product => {
    if (!categoryMap.has(product.categorySlug)) {
      categoryMap.set(product.categorySlug, {
        name: product.category,
        products: []
      });
    }
    categoryMap.get(product.categorySlug)!.products.push(product);
  });

  return Array.from(categoryMap.entries()).map(([slug, data]) => {
    // Generate category descriptions
    const descriptions: Record<string, string> = {
      "mobility-aids": "Essential walking aids and canes to help maintain independence and mobility in daily life.",
      "walkers-rollators": "Stable walking support devices including standard walkers, rollators, and specialized knee walkers.",
      "wheelchairs": "Comfortable and reliable wheelchairs for both manual and powered mobility needs.",
      "hospital-beds": "Adjustable hospital beds and accessories designed for home care and recovery.",
      "lift-chairs": "Power lift recliners that assist with sitting and standing while providing therapeutic comfort.",
      "bathroom-safety": "Safety equipment to prevent falls and increase independence in the bathroom.",
      "hearing-aids": "Advanced hearing aid solutions for improved hearing and quality of life.",
      "oxygen-equipment": "Respiratory equipment including oxygen concentrators, tanks, and CPAP machines.",
      "daily-living-aids": "Helpful tools and devices that make everyday tasks easier and more manageable."
    };

    return {
      name: data.name,
      slug: slug,
      description: descriptions[slug] || "",
      productCount: data.products.length
    };
  });
}

// Helper function to get products by category
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(product => product.categorySlug === categorySlug);
}

// Helper function to get a single product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

// Helper function to get featured/popular products
export function getFeaturedProducts(limit?: number): Product[] {
  const featured = products.filter(product => product.popular);
  return limit ? featured.slice(0, limit) : featured;
}

// Helper function to search products by name or description
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}

// Helper function to get related products (same category, excluding current product)
export function getRelatedProducts(productSlug: string, limit: number = 3): Product[] {
  const currentProduct = getProductBySlug(productSlug);
  if (!currentProduct) return [];

  return products
    .filter(product =>
      product.categorySlug === currentProduct.categorySlug &&
      product.slug !== productSlug
    )
    .slice(0, limit);
}

// Export total counts for analytics
export const suppliesStats = {
  totalProducts: products.length,
  totalCategories: getAllCategories().length,
  featuredProducts: getFeaturedProducts().length
};
