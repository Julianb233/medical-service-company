// Service data
export const services = [
  {
    slug: "home-care",
    title: "Home Care",
    shortDescription:
      "Whether you need a companion or personal care a few times a week or 24 hours a day, let us be your home care solution.",
    fullDescription:
      "Seniors sometimes require extra assistance with day-to-day activities, and nonmedical home care can offer that help. At-home care allows them to remain comfortable in their own environment, helping seniors age in place for longer. With the flexibility of Home Care, complex medical management plans and lifestyle routines can be catered to the senior's ideals. Categories include companionship services, bathing and dressing support, meal preparation, incontinence management, activities of daily living (ADL), and more.",
    icon: "home",
    features: [
      "Bathing and dressing assistance",
      "Incontinence care",
      "Constant safety monitoring",
      "Meal preparation",
      "Light housekeeping",
      "Errands and transportation",
    ],
  },
  {
    slug: "personal-care",
    title: "24-Hour Home Care",
    shortDescription:
      "24-hour home care for those recovering from illness, with Alzheimer's or dementia, or limited mobility, providing safety and comfort.",
    fullDescription:
      "24-hour home care often makes the most sense for recovering from an illness, those with Alzheimer's or dementia, or those with limited mobility, providing safety and comfort around the clock. Our team offers hourly caregiver and nursing rates, as well as 24-hour care available at a reduced daily rate. We ensure continuous, compassionate care that allows your loved one to remain in the familiar surroundings of home.",
    icon: "heart",
    features: [
      "Round-the-clock supervision",
      "Overnight care available",
      "Fall prevention and safety",
      "Medication reminders",
      "Personal care assistance",
      "Companionship and engagement",
    ],
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    shortDescription:
      "Temporary relief for family caregivers to rest and recharge while your loved one receives quality care.",
    fullDescription:
      "Respite care provides temporary relief for primary caregivers. Whether you need a few hours, days, or weeks, our professional caregivers step in to ensure your loved one receives continuous, quality care while you take a well-deserved break. We understand the demands of caregiving and are here to support both you and your family member.",
    icon: "clock",
    features: [
      "Flexible scheduling options",
      "Short-term or long-term relief",
      "Overnight and weekend care",
      "Emergency respite available",
      "Seamless transition support",
      "Consistent caregiver matching",
    ],
  },
  {
    slug: "hospice-support",
    title: "Hospice Support",
    shortDescription:
      "We offer hospice care supplemental to home health and nurse visits, providing hourly, overnight, and 24-hour support.",
    fullDescription:
      "We offer hospice care in San Diego supplemental to home health and nurse visits. We offer hourly, overnight, and 24-hour in home care when around-the-clock support is needed. Our compassionate caregivers focus on comfort, dignity, and emotional support for both patients and their families during this difficult time.",
    icon: "hand-holding-heart",
    features: [
      "Comfort and pain management support",
      "Emotional and spiritual support",
      "Family respite care",
      "24/7 availability",
      "Coordination with hospice teams",
      "Bereavement support",
    ],
  },
  {
    slug: "skilled-nursing",
    title: "Skilled Nursing",
    shortDescription:
      "Our nurses are passionate about providing the highest quality of care, complementing our non-medical care services.",
    fullDescription:
      "Our nurses are passionate about providing the highest quality of care. Skilled nursing care complements our non-medical care services, helping to ensure the highest quality of life. Our registered nurses and licensed vocational nurses assist with case management, medication administration, wound care, feeding tubes, injections, and more.",
    icon: "stethoscope",
    features: [
      "RN care management",
      "Medication administration",
      "Wound care and dressing changes",
      "IV therapy and infusions",
      "Feeding tube management",
      "Post-surgical care",
    ],
  },
  {
    slug: "specialty-services",
    title: "Specialty Services",
    shortDescription:
      "Specialized care for Alzheimer's, dementia, Parkinson's, stroke recovery, and VA community support.",
    fullDescription:
      "Happy Home Care specializes in providing Alzheimer's care, dementia care, and more in the familiar surroundings and comfort of your loved one's own home. We also offer Parkinson's disease support, stroke rehabilitation, geriatric care management, and are proud to serve our nation's veterans as a credentialed member of the VA Community Care Network (CCN).",
    icon: "brain",
    features: [
      "Alzheimer's and dementia certified care",
      "Parkinson's disease support",
      "Stroke rehabilitation",
      "Geriatric care management",
      "VA community support",
      "Fall reduction programs",
    ],
  },
];

// San Diego County locations for SEO
export const locations = [
  {
    slug: "san-diego",
    name: "San Diego",
    region: "Central San Diego",
    description: "Serving the heart of San Diego with comprehensive home health care services.",
    zipCodes: ["92101", "92102", "92103", "92104", "92105", "92108", "92110", "92111", "92115", "92116", "92120"],
    neighborhoods: ["Downtown", "Hillcrest", "North Park", "Mission Hills", "Normal Heights", "Kensington"],
    coordinates: { lat: 32.7157, lng: -117.1611 },
  },
  {
    slug: "la-jolla",
    name: "La Jolla",
    region: "Coastal North County",
    description: "Premium home health care services for the La Jolla community.",
    zipCodes: ["92037", "92038", "92039"],
    neighborhoods: ["La Jolla Village", "La Jolla Shores", "Bird Rock", "Windansea", "Upper Hermosa"],
    coordinates: { lat: 32.8328, lng: -117.2713 },
  },
  {
    slug: "del-mar",
    name: "Del Mar",
    region: "Coastal North County",
    description: "Compassionate home care serving the Del Mar community.",
    zipCodes: ["92014"],
    neighborhoods: ["Del Mar Village", "Del Mar Heights", "Carmel Valley"],
    coordinates: { lat: 32.9595, lng: -117.2653 },
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    region: "Coastal North County",
    description: "Expert home health care for Encinitas residents and families.",
    zipCodes: ["92007", "92023", "92024"],
    neighborhoods: ["Leucadia", "Cardiff-by-the-Sea", "Olivenhain", "New Encinitas"],
    coordinates: { lat: 33.0369, lng: -117.2920 },
  },
  {
    slug: "carlsbad",
    name: "Carlsbad",
    region: "Coastal North County",
    description: "Quality home health services throughout Carlsbad.",
    zipCodes: ["92008", "92009", "92010", "92011"],
    neighborhoods: ["Carlsbad Village", "La Costa", "Aviara", "Bressi Ranch"],
    coordinates: { lat: 33.1581, lng: -117.3506 },
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    region: "Coastal North County",
    description: "Dedicated home care providers serving Oceanside families.",
    zipCodes: ["92049", "92051", "92052", "92054", "92056", "92057", "92058"],
    neighborhoods: ["Downtown Oceanside", "San Luis Rey", "Fire Mountain", "South Oceanside"],
    coordinates: { lat: 33.1959, lng: -117.3795 },
  },
  {
    slug: "escondido",
    name: "Escondido",
    region: "Inland North County",
    description: "Trusted home health care services for Escondido residents.",
    zipCodes: ["92025", "92026", "92027", "92029", "92030", "92046"],
    neighborhoods: ["Downtown Escondido", "Rancho San Pasqual", "Hidden Meadows", "Felicita"],
    coordinates: { lat: 33.1192, lng: -117.0864 },
  },
  {
    slug: "poway",
    name: "Poway",
    region: "Inland San Diego",
    description: "Professional home care services for the Poway community.",
    zipCodes: ["92064", "92074"],
    neighborhoods: ["Old Poway", "South Poway", "Green Valley"],
    coordinates: { lat: 32.9628, lng: -117.0359 },
  },
  {
    slug: "chula-vista",
    name: "Chula Vista",
    region: "South Bay",
    description: "Comprehensive home health care serving Chula Vista.",
    zipCodes: ["91909", "91910", "91911", "91912", "91913", "91914", "91915"],
    neighborhoods: ["Eastlake", "Otay Ranch", "Rolling Hills Ranch", "Bonita"],
    coordinates: { lat: 32.6401, lng: -117.0842 },
  },
  {
    slug: "coronado",
    name: "Coronado",
    region: "Coastal San Diego",
    description: "Elite home health care for Coronado Island residents.",
    zipCodes: ["92118", "92178"],
    neighborhoods: ["Coronado Village", "Coronado Cays", "Silver Strand"],
    coordinates: { lat: 32.6859, lng: -117.1831 },
  },
  {
    slug: "rancho-bernardo",
    name: "Rancho Bernardo",
    region: "Inland North County",
    description: "Quality home care services for Rancho Bernardo seniors.",
    zipCodes: ["92127", "92128"],
    neighborhoods: ["Westwood", "High Country", "Oaks North"],
    coordinates: { lat: 33.0174, lng: -117.0731 },
  },
  {
    slug: "rancho-santa-fe",
    name: "Rancho Santa Fe",
    region: "Inland North County",
    description: "Exclusive home health care for Rancho Santa Fe families.",
    zipCodes: ["92067", "92091"],
    neighborhoods: ["The Covenant", "Fairbanks Ranch", "Cielo"],
    coordinates: { lat: 33.0192, lng: -117.2019 },
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    region: "Inland North County",
    description: "Reliable home health services in San Marcos.",
    zipCodes: ["92069", "92078", "92079", "92096"],
    neighborhoods: ["Discovery Hills", "Lake San Marcos", "San Elijo Hills"],
    coordinates: { lat: 33.1434, lng: -117.1661 },
  },
  {
    slug: "vista",
    name: "Vista",
    region: "Inland North County",
    description: "Caring home health providers serving Vista.",
    zipCodes: ["92081", "92083", "92084", "92085"],
    neighborhoods: ["Shadowridge", "Buena Creek", "Vista Village"],
    coordinates: { lat: 33.2000, lng: -117.2425 },
  },
  {
    slug: "solana-beach",
    name: "Solana Beach",
    region: "Coastal North County",
    description: "Premium home care services in Solana Beach.",
    zipCodes: ["92075"],
    neighborhoods: ["Cedros Design District", "Via de la Valle", "Eden Gardens"],
    coordinates: { lat: 32.9912, lng: -117.2712 },
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "As a veteran, I'm grateful for the excellent care through the VA Community Care Network. The caregivers understand my needs and treat me with the respect I earned serving our country.",
    author: "James T.",
    role: "Veteran",
    location: "Oceanside",
    rating: 5,
  },
  {
    id: 2,
    quote: "The specialized Alzheimer's care has been life-changing for our family. The caregivers are specially trained in dementia care and handle Mom's difficult moments with such patience and understanding.",
    author: "Margaret K.",
    role: "Family Member",
    location: "Carlsbad",
    rating: 5,
  },
  {
    id: 3,
    quote: "After my hip surgery, the post-surgical care team was exceptional. They managed my medications, helped with wound care, and got me back on my feet faster than I expected.",
    author: "Robert J.",
    role: "Patient",
    location: "Del Mar",
    rating: 5,
  },
  {
    id: 4,
    quote: "The RN care management has been invaluable for coordinating Dad's complex medical needs. Our nurse coordinates with all his doctors and keeps everything organized.",
    author: "Jennifer L.",
    role: "Family Caregiver",
    location: "Encinitas",
    rating: 5,
  },
  {
    id: 5,
    quote: "Finding reliable respite care seemed impossible until we found Happy Home Care. Now I can take breaks knowing Dad is in good hands.",
    author: "Sarah M.",
    role: "Family Caregiver",
    location: "La Jolla",
    rating: 5,
  },
  {
    id: 6,
    quote: "Professional, compassionate, and reliable. The 24-hour care has allowed my mother to stay in her own home safely. I recommend Happy Home Care to everyone.",
    author: "David P.",
    role: "Family Member",
    location: "San Diego",
    rating: 5,
  },
];

// Company stats
export const stats = [
  { number: "24/7", label: "On-Call Support" },
  { number: "100%", label: "Licensed & Insured" },
  { number: "Free", label: "In-Home Assessments" },
  { number: "15+", label: "San Diego Locations" },
];

// Contact information
export const contactInfo = {
  phone: "(619) 555-0100",
  email: "info@happyhomecare.com",
  address: {
    street: "123 Healthcare Drive",
    suite: "Suite 200",
    city: "San Diego",
    state: "CA",
    zip: "92101",
  },
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    weekend: "Saturday - Sunday: 9:00 AM - 5:00 PM",
    emergency: "24/7 On-Call Support Available",
  },
};

// Navigation items
export const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: services.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
  },
  {
    name: "Locations",
    href: "/locations",
    children: locations.slice(0, 8).map((l) => ({ name: l.name, href: `/locations/${l.slug}` })),
  },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];
