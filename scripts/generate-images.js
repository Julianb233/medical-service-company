#!/usr/bin/env node
/**
 * San Diego Subarea Image Generator
 * Uses Google Gemini Imagen 3 to generate professional camera-quality photos
 * of San Diego neighborhoods and landmarks
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const API_KEY = process.env.GEMINI_API_KEY;
const BASE_URL = 'generativelanguage.googleapis.com';

// Hero images for subareas (35 total)
const heroImages = {
  'downtown-sd': 'Downtown San Diego skyline with harbor and modern high-rise buildings at golden hour',
  'hillcrest': 'Hillcrest neighborhood San Diego with rainbow crosswalk and vibrant urban street scene',
  'north-park': 'North Park San Diego neighborhood with iconic neon sign and craft brewery scene',
  'la-jolla-village': 'La Jolla Village California coastal cliffs overlooking Pacific Ocean at sunset',
  'la-jolla-shores': 'La Jolla Shores beach with Scripps Pier in background, sunny San Diego day',
  'pacific-beach': 'Pacific Beach San Diego with Crystal Pier at sunset, surfers in water',
  'ocean-beach': 'Ocean Beach San Diego pier extending into Pacific, bohemian beach town vibe',
  'mission-beach': 'Mission Beach San Diego boardwalk with Belmont Park roller coaster in background',
  'point-loma': 'Point Loma San Diego lighthouse with panoramic ocean views and coastal cliffs',
  'coronado': 'Hotel del Coronado historic beachfront with red turrets and pristine beach',
  'del-mar': 'Del Mar California beach town with bluffs overlooking Pacific Ocean',
  'encinitas': 'Encinitas California coastal Highway 101 with Self-Realization Fellowship golden domes',
  'carlsbad': 'Carlsbad California flower fields in bloom with Pacific Ocean in background',
  'mission-hills': 'Mission Hills San Diego historic craftsman homes with canyon views',
  'bankers-hill': 'Bankers Hill San Diego historic architecture with Balboa Park bridge view',
  'clairemont': 'Clairemont San Diego suburban neighborhood with Tecolote Canyon nature preserve',
  'university-city': 'University City San Diego with UCSD campus Geisel Library landmark',
  'kensington': 'Kensington San Diego charming neighborhood with historic Ken Cinema marquee',
  'normal-heights': 'Normal Heights San Diego Adams Avenue arts district with murals and cafes',
  'bay-park': 'Bay Park San Diego neighborhood overlooking Mission Bay at golden hour',
  'linda-vista': 'Linda Vista San Diego diverse neighborhood with University of San Diego views',
  'scripps-ranch': 'Scripps Ranch San Diego eucalyptus-lined streets with upscale homes',
  'rancho-penasquitos': 'Rancho Penasquitos San Diego master-planned community with canyon preserve',
  'mira-mesa': 'Mira Mesa San Diego suburban neighborhood with tech corridor buildings',
  'tierrasanta': 'Tierrasanta San Diego "Island in the Hills" with Mission Trails views',
  'serra-mesa': 'Serra Mesa San Diego residential area near Sharp Memorial Hospital',
  'allied-gardens': 'Allied Gardens San Diego quiet neighborhood with Cowles Mountain backdrop',
  'university-heights': 'University Heights San Diego trendy urban neighborhood with cafe culture',
  'south-park': 'South Park San Diego hipster neighborhood with boutique shops and restaurants',
  'golden-hill': 'Golden Hill San Diego historic Victorian homes with downtown skyline views',
  'old-town': 'Old Town San Diego historic plaza with Spanish colonial architecture',
  'solana-beach': 'Solana Beach California Cedros Design District with coastal town charm',
  'oceanside': 'Oceanside California pier at sunset with surf culture beach town vibes',
  'leucadia': 'Leucadia Encinitas funky Highway 101 corridor with surf shops and palm trees',
  'cardiff': 'Cardiff-by-the-Sea California beach community with Cardiff Kook surfer statue'
};

// Landmark images (144 total)
const landmarkImages = {
  // Downtown San Diego
  'gaslamp': 'Gaslamp Quarter San Diego historic Victorian buildings and gas lamp street lights at night',
  'midway': 'USS Midway aircraft carrier museum San Diego harbor with jets on deck',
  'petco-park': 'Petco Park baseball stadium San Diego downtown skyline view',
  'seaport-village': 'Seaport Village San Diego waterfront shopping with marina views',
  'balboa-theatre': 'Balboa Theatre San Diego historic ornate movie palace facade',
  'embarcadero': 'Embarcadero San Diego waterfront promenade with sailboats and palm trees',

  // Hillcrest
  'balboa-park': 'Balboa Park San Diego Spanish Colonial Revival architecture and gardens',
  'hillcrest-farmers-market': 'Hillcrest Farmers Market San Diego Sunday market with local vendors',
  'university-ave': 'University Avenue Hillcrest San Diego vibrant urban street with shops',
  'landmark-theatre': 'Landmark Hillcrest Theatre San Diego iconic cinema marquee at night',

  // North Park
  'observatory': 'Observatory North Park San Diego iconic music venue art deco building',
  'ray-street': 'Ray Street Arts District North Park San Diego galleries and murals',
  'north-park-sign': 'North Park neon sign San Diego iconic neighborhood landmark at night',
  '30th-street': '30th Street North Park San Diego craft beer corridor with brewery patios',

  // La Jolla Village
  'la-jolla-cove': 'La Jolla Cove San Diego crystal clear water with sea lions on rocks',
  'prospect-street': 'Prospect Street La Jolla upscale shopping and art galleries',
  'scripps-park': 'Scripps Park La Jolla oceanfront green space with coastal views',
  'birch-aquarium': 'Birch Aquarium at Scripps Institution of Oceanography La Jolla',
  'playhouse': 'La Jolla Playhouse theater building on UCSD campus',
  'childrens-pool': 'Children\'s Pool La Jolla protected beach with harbor seals',

  // La Jolla Shores
  'shores-beach': 'La Jolla Shores Beach wide sandy beach with gentle waves for families',
  'scripps-pier': 'Scripps Pier La Jolla iconic research pier at sunset',
  'kellogg-park': 'Kellogg Park La Jolla Shores grassy oceanfront park with palm trees',
  'tide-pools': 'La Jolla tide pools marine life exploration rocky intertidal zone',

  // Pacific Beach
  'crystal-pier': 'Crystal Pier Pacific Beach San Diego pier with vacation cottages at sunset',
  'garnet-ave': 'Garnet Avenue Pacific Beach San Diego busy nightlife street scene',
  'pb-boardwalk': 'Pacific Beach boardwalk San Diego beach path with cyclists and joggers',
  'tourmaline': 'Tourmaline Surfing Park San Diego surfers riding waves',

  // Ocean Beach
  'ob-pier': 'Ocean Beach Pier San Diego longest concrete pier on West Coast',
  'dog-beach': 'Dog Beach Ocean Beach San Diego dogs playing on beach off-leash',
  'newport-ave': 'Newport Avenue Ocean Beach San Diego antique shops and surf culture',
  'sunset-cliffs': 'Sunset Cliffs Natural Park San Diego dramatic coastal cliffs at sunset',

  // Mission Beach
  'belmont-park': 'Belmont Park San Diego historic Giant Dipper roller coaster beach amusement',
  'mb-boardwalk': 'Mission Beach boardwalk San Diego beach path with beachgoers',
  'mission-bay': 'Mission Bay San Diego aquatic park with sailboats and watercraft',
  'the-plunge': 'The Plunge pool Mission Beach historic swimming facility',

  // Point Loma
  'cabrillo': 'Cabrillo National Monument Point Loma San Diego with statue and ocean views',
  'liberty-station': 'Liberty Station San Diego former naval training center with shops and restaurants',
  'pl-lighthouse': 'Old Point Loma Lighthouse historic landmark with panoramic views',
  'shelter-island': 'Shelter Island San Diego marina with yacht harbor and bay views',

  // Coronado
  'hotel-del': 'Hotel del Coronado San Diego historic Victorian beach resort red roof',
  'coronado-beach': 'Coronado Beach San Diego pristine white sand beach',
  'orange-ave': 'Orange Avenue Coronado California charming main street shops',
  'ferry-landing': 'Coronado Ferry Landing marketplace with San Diego skyline views',

  // Del Mar
  'del-mar-racetrack': 'Del Mar Racetrack thoroughbred horse racing "Where the Turf Meets the Surf"',
  'del-mar-beach': 'Del Mar Beach California wide sandy beach with families',
  'torrey-pines': 'Torrey Pines State Reserve coastal bluffs and rare pine trees',
  'del-mar-plaza': 'Del Mar Plaza shopping center ocean view terrace',

  // Encinitas
  'srf-encinitas': 'Self-Realization Fellowship Encinitas golden lotus domes and meditation gardens',
  'moonlight-beach': 'Moonlight Beach Encinitas California popular family beach with fire pits',
  'botanic-garden': 'San Diego Botanic Garden Encinitas lush tropical plants',
  'downtown-encinitas': 'Downtown Encinitas Coast Highway 101 surf shops and restaurants',

  // Carlsbad
  'legoland': 'Legoland California Carlsbad theme park with LEGO sculptures',
  'flower-fields': 'The Flower Fields Carlsbad California ranunculus blooms colorful hillside',
  'carlsbad-village': 'Carlsbad Village California charming downtown coastal shops',
  'carlsbad-beach': 'Carlsbad State Beach California coastline with surfers',

  // Mission Hills
  'pioneer-park': 'Pioneer Park Mission Hills San Diego historic neighborhood park',
  'presidio-park': 'Presidio Park Mission Hills San Diego Junipero Serra Museum views',
  'fort-stockton': 'Fort Stockton Drive Mission Hills San Diego historic homes canyon views',
  'washington-st': 'Washington Street Mission Hills San Diego antique shops and restaurants',

  // Bankers Hill
  'balboa-park-bh': 'Balboa Park from Bankers Hill San Diego Spanish architecture gardens',
  'spruce-bridge': 'Spruce Street Suspension Bridge Bankers Hill San Diego pedestrian bridge',
  'fifth-ave-bh': 'Fifth Avenue Bankers Hill San Diego urban neighborhood street',
  'marston-house': 'Marston House Museum Bankers Hill San Diego historic craftsman mansion',

  // Clairemont
  'tecolote-canyon': 'Tecolote Canyon Natural Park San Diego native sage scrub hiking',
  'clairemont-square': 'Clairemont Town Square shopping center San Diego',
  'mission-bay-claire': 'Mission Bay view from Clairemont San Diego water recreation',
  'clairemont-park': 'Clairemont Park San Diego community recreation green space',

  // University City
  'ucsd-campus': 'UCSD campus La Jolla Geisel Library iconic brutalist architecture',
  'westfield-utc': 'Westfield UTC shopping mall San Diego outdoor luxury retail',
  'ucsd-medical': 'UC San Diego Medical Center Hillcrest campus modern healthcare',
  'rose-canyon': 'Rose Canyon Open Space San Diego nature preserve urban hiking',

  // Kensington
  'kensington-sign': 'Kensington neighborhood sign San Diego historic gateway arch',
  'ken-cinema': 'Ken Cinema Kensington San Diego vintage movie theater marquee',
  'adams-ave-ken': 'Adams Avenue Kensington San Diego walkable shopping and dining',
  'kensington-park': 'Kensington Park San Diego community green space',

  // Normal Heights
  'adams-ave-nh': 'Adams Avenue Normal Heights San Diego arts and entertainment district',
  'ward-canyon': 'Ward Canyon neighborhood park Normal Heights San Diego',
  'nh-sign': 'Normal Heights neon sign San Diego neighborhood landmark',
  'lestats': 'Lestat\'s Coffee House Normal Heights San Diego local cafe culture',

  // Bay Park
  'mission-bay-bp': 'Mission Bay from Bay Park San Diego water views recreation',
  'morena-blvd': 'Morena Boulevard Bay Park San Diego dining and shopping',
  'bay-park-views': 'Bay Park neighborhood San Diego panoramic bay views',
  'bay-park-comm': 'Bay Park community center San Diego recreational facilities',

  // Linda Vista
  'usd-campus': 'University of San Diego campus Linda Vista Spanish Renaissance architecture',
  'convoy-district': 'Convoy District Linda Vista San Diego Asian cuisine restaurants',
  'tecolote-lv': 'Tecolote Nature Center Linda Vista San Diego canyon preserve',
  'lv-park': 'Linda Vista Community Park San Diego recreation green space',

  // Scripps Ranch
  'scripps-ranch-blvd': 'Scripps Ranch Boulevard San Diego eucalyptus-lined street upscale homes',
  'lake-miramar': 'Lake Miramar San Diego reservoir hiking trail scenic views',
  'scripps-community-park': 'Scripps Ranch Community Park San Diego suburban recreation',
  'mission-trails': 'Mission Trails Regional Park Scripps Ranch San Diego hiking',

  // Rancho Penasquitos
  'penasquitos-canyon': 'Los Penasquitos Canyon Preserve San Diego hiking waterfall trail',
  'pq-town-center': 'Rancho Penasquitos Town Center shopping and dining',
  'penasquitos-mm': 'Penasquitos community mountain backdrop San Diego suburban',
  'black-mountain': 'Black Mountain Open Space Park Rancho Penasquitos hiking views',

  // Mira Mesa
  'mira-mesa-blvd': 'Mira Mesa Boulevard San Diego tech corridor shopping dining',
  'mm-community-park': 'Mira Mesa Community Park San Diego recreational facilities',
  'hoyt-park': 'Hoyt Park Mira Mesa San Diego community green space',
  'camino-ruiz': 'Camino Ruiz corridor Mira Mesa San Diego suburban commercial',

  // Tierrasanta
  'mission-trails-ag': 'Mission Trails from Tierrasanta San Diego park hiking views',
  'tierrasanta-town': 'Tierrasanta Town Center San Diego suburban shopping',
  'old-mission-dam': 'Old Mission Dam Tierrasanta San Diego historic landmark',
  'canyonside-rec': 'Canyonside Recreation Center Tierrasanta San Diego',

  // Serra Mesa
  'sharp-memorial': 'Sharp Memorial Hospital Serra Mesa San Diego medical center',
  'serra-mesa-rec': 'Serra Mesa Recreation Center community facilities',
  'mission-valley': 'Mission Valley view from Serra Mesa San Diego',
  'rady-childrens': 'Rady Children\'s Hospital San Diego Serra Mesa pediatric care',

  // Allied Gardens
  'cowles-mountain': 'Cowles Mountain summit trail Allied Gardens San Diego highest point',
  'mission-trails-ag': 'Mission Trails Regional Park Allied Gardens access point',
  'navajo-road': 'Navajo Road Allied Gardens San Diego community shopping',
  'allied-rec': 'Allied Gardens Recreation Center community facilities',
  'grantville-trolley': 'Grantville Trolley Station near Allied Gardens San Diego transit',

  // University Heights
  'uh-sign': 'University Heights neon sign San Diego neighborhood landmark',
  'trolley-barn': 'Trolley Barn Park University Heights San Diego historic site',
  'park-blvd': 'Park Boulevard University Heights San Diego urban neighborhood',
  'uh-library': 'University Heights Library San Diego community resource',

  // South Park
  'south-park-sign': 'South Park neighborhood sign San Diego artisan district',
  'fern-street': 'Fern Street Circus South Park San Diego community arts',
  'grape-street': 'Grape Street South Park San Diego walkable neighborhood',
  'sp-garden': 'South Park community garden urban farming San Diego',

  // Golden Hill
  'golden-hill-park': 'Golden Hill Park San Diego canyon views downtown skyline',
  'grape-dog-park': 'Grape Street Dog Park Golden Hill San Diego off-leash area',
  'gh-victorians': 'Victorian homes Golden Hill San Diego historic architecture',
  '25th-street': '25th Street Golden Hill San Diego neighborhood main corridor',

  // Old Town
  'old-town-shp': 'Old Town San Diego State Historic Park Spanish colonial buildings',
  'heritage-park': 'Heritage Park Old Town San Diego Victorian house museum',
  'presidio-park-ot': 'Presidio Park Old Town San Diego historic hilltop',
  'ot-transit': 'Old Town Transit Center San Diego transportation hub',
  'mission-slr': 'Mission San Luis Rey near Old Town historic California mission',

  // Solana Beach
  'cedros-design': 'Cedros Avenue Design District Solana Beach shopping galleries',
  'fletcher-cove': 'Fletcher Cove Beach Park Solana Beach California coast',
  'solana-train': 'Solana Beach train station Coaster transit',
  'san-elijo-lagoon': 'San Elijo Lagoon Ecological Reserve Solana Beach nature',

  // Oceanside
  'oceanside-pier': 'Oceanside Pier California wooden pier Pacific Ocean sunset',
  'oside-strand': 'The Strand Oceanside California beach promenade',
  'downtown-oside': 'Downtown Oceanside California coastal shops and restaurants',
  'mission-slr': 'Mission San Luis Rey Oceanside historic Spanish mission',

  // Leucadia
  'leucadia-101': 'Highway 101 Leucadia California funky surf town corridor',
  'beacons-beach': 'Beacon\'s Beach Leucadia surf spot coastal access trail',
  'leucadia-park': 'Leucadia Roadside Park community green space',
  'leucadia-market': 'Leucadia Farmers Market local produce and crafts',

  // Cardiff-by-the-Sea
  'cardiff-kook': 'Cardiff Kook Magic Carpet Ride surfer statue landmark',
  'cardiff-beach': 'Cardiff State Beach California reef break surfing',
  'cardiff-center': 'Cardiff Town Center small beach community shops',
  'san-elijo-lagoon': 'San Elijo Lagoon Nature Center Cardiff coastal wetlands'
};

async function generateImage(prompt, outputPath) {
  return new Promise((resolve, reject) => {
    const fullPrompt = `Generate a photorealistic professional photograph of ${prompt}. Shot with a Sony A7R IV camera, 24-70mm lens, golden hour natural lighting. Sharp focus, vibrant colors, high resolution, National Geographic travel magazine quality. Located in San Diego, California.`;

    const requestData = JSON.stringify({
      contents: [{
        parts: [{ text: fullPrompt }]
      }],
      generationConfig: {
        responseModalities: ['IMAGE', 'TEXT']
      }
    });

    const options = {
      hostname: BASE_URL,
      port: 443,
      path: `/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.candidates && response.candidates[0]?.content?.parts) {
            const imagePart = response.candidates[0].content.parts.find(p => p.inlineData);
            if (imagePart) {
              const imageBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
              // Convert PNG to JPG with sharp
              sharp(imageBuffer)
                .jpeg({ quality: 85 })
                .resize(1920, 1080, { fit: 'cover' })
                .toFile(outputPath)
                .then((info) => {
                  console.log(`✓ Generated: ${outputPath} (${Math.round(info.size/1024)}KB)`);
                  resolve(true);
                })
                .catch((err) => {
                  console.log(`✗ Sharp error for: ${outputPath}`, err.message);
                  resolve(false);
                });
              return;
            } else {
              console.log(`✗ No image in response for: ${outputPath}`);
              resolve(false);
            }
          } else if (response.error) {
            console.log(`✗ API error for: ${outputPath}`, response.error.message);
            resolve(false);
          } else {
            console.log(`✗ Unexpected response for: ${outputPath}`);
            resolve(false);
          }
        } catch (e) {
          console.log(`✗ Parse error for: ${outputPath}`, e.message);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.log(`✗ Request error for: ${outputPath}`, e.message);
      resolve(false);
    });

    req.write(requestData);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🎨 San Diego Subarea Image Generator');
  console.log('====================================\n');

  const publicDir = path.join(__dirname, '..', 'public');
  const subareasDir = path.join(publicDir, 'images', 'subareas');
  const landmarksDir = path.join(publicDir, 'images', 'landmarks');

  // Ensure directories exist
  fs.mkdirSync(subareasDir, { recursive: true });
  fs.mkdirSync(landmarksDir, { recursive: true });

  let generated = 0;
  let failed = 0;

  // Generate hero images
  console.log('📸 Generating Hero Images (35 total)...\n');
  for (const [slug, prompt] of Object.entries(heroImages)) {
    const outputPath = path.join(subareasDir, `${slug}.jpg`);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭ Skipping (exists): ${outputPath}`);
      continue;
    }

    const success = await generateImage(prompt, outputPath);
    if (success) generated++;
    else failed++;

    // Rate limiting - increased delay to avoid quota issues
    await sleep(2000);
  }

  console.log('\n📸 Generating Landmark Images (144 total)...\n');
  for (const [slug, prompt] of Object.entries(landmarkImages)) {
    const outputPath = path.join(landmarksDir, `${slug}.jpg`);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭ Skipping (exists): ${outputPath}`);
      continue;
    }

    const success = await generateImage(prompt, outputPath);
    if (success) generated++;
    else failed++;

    // Rate limiting - increased delay to avoid quota issues
    await sleep(2000);
  }

  console.log('\n====================================');
  console.log(`✅ Generated: ${generated} images`);
  console.log(`❌ Failed: ${failed} images`);
  console.log('====================================\n');
}

main().catch(console.error);
