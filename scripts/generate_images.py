#!/usr/bin/env python3
"""
San Diego Home Care - Image Generation Script
Uses Google Gemini Nano Banana Pro for image generation
"""

from google import genai
from google.genai import types
from pathlib import Path
import time
import sys

# Configuration
API_KEY = "AIzaSyBx0rtNo9cmVjyIWkpxWp7yiv7xPHfNSQA"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"
SUBAREAS_DIR = OUTPUT_DIR / "subareas"
LANDMARKS_DIR = OUTPUT_DIR / "landmarks"

# Ensure directories exist
SUBAREAS_DIR.mkdir(parents=True, exist_ok=True)
LANDMARKS_DIR.mkdir(parents=True, exist_ok=True)

# Initialize Gemini client
client = genai.Client(api_key=API_KEY)

# SOP Base specs to append to all prompts
SOP_SPECS = """
Shot on Sony FX9 with G Master 85mm f/1.4 at f/2.0, ISO 640, 1/250s, 8K resolution.
Natural light, shallow depth of field, subject sharp, background in soft creamy bokeh.
Graded in S-Log3 to warm trustworthy tones.
Style: authentic documentary photography, candid moments, emphasis on trust and care.
Photorealistic, cannot look AI-generated.
"""

# Subarea prompts - 20 San Diego neighborhoods
SUBAREA_PROMPTS = {
    "downtown-san-diego": """Warm documentary photograph of San Diego's Gaslamp Quarter at golden hour, mature couple in their late 60s walking hand-in-hand past historic Victorian buildings and ornate gas lamps, woman in elegant casual attire with pearl earrings, man in linen shirt, genuine smiles sharing a moment together. Gaslamp historic district architecture visible, outdoor cafe patios with diners, warm evening atmosphere suggesting vibrant community life.""",

    "hillcrest": """Vibrant documentary photograph of Hillcrest neighborhood farmers market scene, active senior woman in her early 70s with stylish silver hair examining fresh organic produce at colorful market stall, warm genuine smile connecting with local vendor, reusable shopping bags suggesting healthy active lifestyle. Hillcrest Farmers Market atmosphere: colorful produce displays, diverse community members shopping.""",

    "north-park": """Artistic documentary photograph of North Park's iconic neighborhood at dusk, distinguished senior man in his late 60s with reading glasses walking past local coffee shop with to-go cup, genuine content expression enjoying neighborhood stroll. North Park character: craft beer bars, vintage shops, murals on buildings, eclectic neighborhood vibe.""",

    "la-jolla-village": """Elegant documentary photograph of La Jolla Cove area at mid-morning, sophisticated senior couple in their late 60s seated at upscale outdoor cafe overlooking ocean, woman in tasteful coastal attire with sun hat, man in crisp polo, sharing genuine laughter over coffee. La Jolla Village character: Mediterranean architecture, boutique shops, ocean views.""",

    "la-jolla-shores": """Serene documentary photograph of La Jolla Shores beach at sunrise, fit senior woman in her early 70s in comfortable athletic wear completing morning beach walk, genuine peaceful expression, waves gently breaking in background, Scripps Pier visible in distance. Wide sandy beach, calm waters, family-friendly atmosphere.""",

    "pacific-beach": """Casual documentary photograph of Pacific Beach boardwalk scene, active senior couple in their mid-60s enjoying sunset walk along beachfront, casual beach attire, holding hands, genuine smiles. Crystal Pier visible in background, beach volleyball players, cyclists passing by suggesting active community.""",

    "ocean-beach": """Authentic documentary photograph of Ocean Beach pier area at late afternoon, laid-back senior man in his late 60s with dog on leash walking toward famous Dog Beach, relaxed genuine expression, colorful OB antique shops visible in background. Ocean Beach character: bohemian vibe, Dog Beach, OB Pier.""",

    "mission-beach": """Fun documentary photograph of Mission Beach Belmont Park area, energetic senior couple in their early 70s enjoying casual stroll past historic Giant Dipper roller coaster, genuine smiles suggesting youthful energy. Mission Beach boardwalk character: beachfront attractions, vintage amusement park.""",

    "point-loma": """Historic documentary photograph of Point Loma with Cabrillo National Monument views, distinguished senior man in his late 60s standing at scenic overlook enjoying panoramic San Diego Bay view, thoughtful content expression, well-dressed in smart casual coastal attire. Historic lighthouse, bay views.""",

    "coronado": """Elegant documentary photograph of Coronado with Hotel del Coronado in background, sophisticated senior couple in their late 60s walking along pristine beach, elegant casual beach attire, woman's sun hat and flowing dress suggesting coastal elegance. Iconic red-roofed Hotel del visible.""",

    "del-mar": """Upscale documentary photograph of Del Mar village area, refined senior couple in their early 70s browsing at charming local boutique on Camino Del Mar, sophisticated casual attire, genuine connection moment. Del Mar character: upscale village shops, Torrey Pines views.""",

    "solana-beach": """Artistic documentary photograph of Solana Beach Cedros Design District, creative senior woman in her late 60s with artistic style browsing design shop window, genuine appreciation expression, eclectic design district character visible. Fletcher Cove beach town charm.""",

    "encinitas": """Spiritual documentary photograph of downtown Encinitas near Self-Realization Fellowship, peaceful senior woman in her early 70s in comfortable yoga-inspired attire walking past iconic surf shops and wellness studios, serene genuine expression. Surf culture, spiritual community.""",

    "carlsbad": """Family documentary photograph of Carlsbad Village area near beach, warm senior couple in their late 60s walking with grandchildren, genuine joyful expressions, Carlsbad Village storefronts visible. Family-friendly village, LEGOLAND nearby, Flower Fields, beach town charm.""",

    "oceanside": """Coastal documentary photograph of Oceanside pier and harbor area, active senior man in his late 60s in casual fishing attire walking along harbor with fishing pier visible in background, content genuine expression. Historic pier, harbor, fishing community.""",

    "clairemont": """Neighborhood documentary photograph of Clairemont community park area, friendly senior woman in her early 70s enjoying morning walk on tree-lined path with neighbor, genuine conversation moment, established suburban neighborhood visible. Master-planned community, family neighborhoods.""",

    "university-city": """Academic documentary photograph of University City near UTC area, distinguished senior couple in their late 60s walking near UCSD campus, professional casual attire, intellectual genuine expressions. University City character: UCSD, UTC mall, research institutions.""",

    "kensington": """Charming documentary photograph of Kensington's iconic neighborhood sign and Adams Avenue, refined senior couple in their early 70s at classic neighborhood cafe, genuine warm conversation. Spanish Revival architecture, classic movie theater, walkable village.""",

    "mission-hills": """Elegant documentary photograph of Mission Hills historic district, sophisticated senior woman in her late 60s tending to garden in front of beautiful Craftsman home, genuine proud expression, Fort Stockton Drive character visible. Historic Craftsman homes, Presidio Park nearby.""",

    "bankers-hill": """Urban documentary photograph of Bankers Hill with Balboa Park edge, distinguished senior man in his late 60s walking along tree-lined street toward park entrance, professional casual attire, purposeful genuine expression. Urban walkability, Balboa Park access."""
}

# Landmark prompts
LANDMARK_PROMPTS = {
    "balboa-park": """Magnificent documentary photograph of Balboa Park's Spanish Colonial architecture, elegant senior couple in their late 60s strolling through botanical gardens near Casa de Balboa, genuine wonder expressions admiring architecture, lush gardens and ornate buildings framing them. 1915 Exposition buildings, museums, gardens, cultural heart of San Diego.""",

    "gaslamp-quarter": """Historic documentary photograph of San Diego Gaslamp Quarter street scene, distinguished senior man in his late 60s in smart evening attire walking past ornate Victorian gas lamp, genuine enjoyment of evening atmosphere. Restored Victorian buildings, historic gas lamps, entertainment district, downtown vitality.""",

    "la-jolla-cove": """Stunning documentary photograph of La Jolla Cove at golden hour, peaceful senior woman in her early 70s sitting on bench overlooking cove, genuine contemplative expression enjoying ocean view, seals visible on rocks below, palm trees framing scene. Protected marine sanctuary, dramatic cliffs.""",

    "crystal-pier": """Iconic documentary photograph of Pacific Beach Crystal Pier at sunset, active senior couple in their mid-60s walking toward pier cottages, casual beach attire, genuine romantic moment. Historic pier with vacation cottages, PB landmark, surfer culture.""",

    "hotel-del-coronado": """Grand documentary photograph of Hotel del Coronado's iconic Victorian architecture, elegant senior couple in their late 60s walking along the hotel's beachfront veranda at sunset, formal evening attire, genuine sophisticated moment. National Historic Landmark, red turrets, white wooden architecture.""",

    "old-town-san-diego": """Cultural documentary photograph of Old Town San Diego State Historic Park, senior couple in their early 70s exploring historic adobe buildings, genuine curious expressions, colorful Mexican marketplace visible in background. Birthplace of California, historic adobes, cultural heritage.""",

    "seaport-village": """Charming documentary photograph of Seaport Village waterfront, friendly senior woman in her late 60s browsing local artisan shops with harbor views, genuine content expression, carousel and sailboats visible in background. Waterfront shopping village, bay views, local charm.""",

    "torrey-pines": """Natural documentary photograph of Torrey Pines State Natural Reserve, active senior couple in their late 60s hiking along coastal trail, casual outdoor attire, genuine appreciation of dramatic ocean cliff views. Rare Torrey pine trees, stunning bluff-top ocean vistas.""",

    "san-diego-zoo": """Joyful documentary photograph near San Diego Zoo entrance in Balboa Park, grandparent in their late 60s with grandchild viewing animals, genuine delight and wonder expressions, iconic zoo architecture visible. World-famous zoo, conservation, family memories.""",

    "mission-bay": """Active documentary photograph of Mission Bay Park, fit senior couple in their mid-60s walking along bayside path with paddleboarders and kayakers in background, casual active attire, genuine healthy lifestyle moment. Largest aquatic park, watersports, San Diego sunshine."""
}


def generate_image(prompt: str, output_path: Path, retries: int = 3) -> bool:
    """Generate an image using Gemini Nano Banana Pro and save to disk."""
    full_prompt = f"Generate an image: {prompt}\n\n{SOP_SPECS}"

    for attempt in range(retries):
        try:
            # Use Gemini 2.5 Flash Image (Nano Banana) with generate_content
            response = client.models.generate_content(
                model='gemini-2.5-flash-image',
                contents=full_prompt,
                config=types.GenerateContentConfig(
                    response_modalities=['IMAGE', 'TEXT']
                )
            )

            if hasattr(response, 'candidates') and response.candidates:
                for part in response.candidates[0].content.parts:
                    if hasattr(part, 'inline_data') and part.inline_data:
                        with open(output_path, 'wb') as f:
                            f.write(part.inline_data.data)
                        print(f"  [OK] Generated: {output_path.name} ({len(part.inline_data.data):,} bytes)")
                        return True

            print(f"  [WARN] No image returned for {output_path.name}")

        except Exception as e:
            error_msg = str(e)
            if "429" in error_msg or "RESOURCE_EXHAUSTED" in error_msg:
                # Rate limited - wait longer
                wait_time = 60 * (attempt + 1)
                print(f"  [RATE] Rate limited, waiting {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"  [ERROR] Attempt {attempt + 1}/{retries}: {error_msg[:100]}")
                if attempt < retries - 1:
                    time.sleep(5 * (attempt + 1))

    return False


def generate_all_subareas():
    """Generate all subarea hero images."""
    print("\n" + "=" * 60)
    print("GENERATING SUBAREA HERO IMAGES")
    print("=" * 60)

    total = len(SUBAREA_PROMPTS)
    success = 0

    for i, (slug, prompt) in enumerate(SUBAREA_PROMPTS.items(), 1):
        output_path = SUBAREAS_DIR / f"{slug}.jpg"

        # Skip if already exists
        if output_path.exists():
            print(f"[{i}/{total}] Skipping {slug} (already exists)")
            success += 1
            continue

        print(f"[{i}/{total}] Generating {slug}...")
        if generate_image(prompt, output_path):
            success += 1

        # Rate limiting - be gentle with the API (15 seconds between requests)
        time.sleep(15)

    print(f"\nSubarea images: {success}/{total} successful")
    return success, total


def generate_all_landmarks():
    """Generate all landmark images."""
    print("\n" + "=" * 60)
    print("GENERATING LANDMARK IMAGES")
    print("=" * 60)

    total = len(LANDMARK_PROMPTS)
    success = 0

    for i, (slug, prompt) in enumerate(LANDMARK_PROMPTS.items(), 1):
        output_path = LANDMARKS_DIR / f"{slug}.jpg"

        # Skip if already exists
        if output_path.exists():
            print(f"[{i}/{total}] Skipping {slug} (already exists)")
            success += 1
            continue

        print(f"[{i}/{total}] Generating {slug}...")
        if generate_image(prompt, output_path):
            success += 1

        # Rate limiting
        time.sleep(15)

    print(f"\nLandmark images: {success}/{total} successful")
    return success, total


def main():
    """Main entry point."""
    print("=" * 60)
    print("SAN DIEGO HOME CARE - IMAGE GENERATION")
    print("Using Google Gemini Nano Banana Pro")
    print("=" * 60)

    # Generate images
    if len(sys.argv) > 1:
        if sys.argv[1] == "subareas":
            generate_all_subareas()
        elif sys.argv[1] == "landmarks":
            generate_all_landmarks()
        elif sys.argv[1] == "test":
            # Generate just one test image
            test_prompt = SUBAREA_PROMPTS["downtown-san-diego"]
            test_path = SUBAREAS_DIR / "test-downtown.jpg"
            print("\nGenerating test image...")
            generate_image(test_prompt, test_path)
        else:
            print(f"Unknown argument: {sys.argv[1]}")
            print("Usage: python generate_images.py [subareas|landmarks|test]")
    else:
        # Generate all
        sub_success, sub_total = generate_all_subareas()
        land_success, land_total = generate_all_landmarks()

        print("\n" + "=" * 60)
        print("GENERATION COMPLETE")
        print("=" * 60)
        print(f"Subareas: {sub_success}/{sub_total}")
        print(f"Landmarks: {land_success}/{land_total}")
        print(f"Total: {sub_success + land_success}/{sub_total + land_total}")


if __name__ == "__main__":
    main()
