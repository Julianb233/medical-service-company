/**
 * San Diego Subarea Data
 * Rich, unique content for 15 distinct San Diego neighborhoods and communities
 */

export interface Landmark {
  name: string;
  description: string;
  type?: 'natural' | 'cultural' | 'historic' | 'entertainment' | 'dining' | 'recreation';
}

export interface Subarea {
  slug: string;
  name: string;
  parentLocation: string;
  tagline: string;
  nickname: string;
  vibe: string;
  funFacts: string[];
  landmarks: Landmark[];
  localTips: string[];
  weatherQuirk: string;
  bestForBadges: string[];
  localSlang: string[];
  seoKeywords: {
    traditional: string[];
    aiSeo: string[];
  };
}

export const subareas: Subarea[] = [
  {
    slug: 'la-jolla',
    name: 'La Jolla',
    parentLocation: 'San Diego, CA',
    tagline: 'Where sea lions sunbathe on million-dollar real estate and seals judge your wetsuit',
    nickname: 'The Jewel',
    vibe: 'Old money meets marine biology in this coastal enclave where the sea lions at Children\'s Pool have better waterfront property than most humans. It\'s the only place where you\'ll find Ferraris parked outside oceanography institutes and where "casual Friday" still means a $400 Vineyard Vines shirt. The beaches are pristine, the sunsets are free, but everything else will cost you.',
    funFacts: [
      'The Children\'s Pool sea lions have their own 24/7 webcam with more viewers than some cable news shows',
      'Dr. Seuss wrote "Green Eggs and Ham" overlooking La Jolla Cove—the actual cove inspired the wavy illustrations',
      'La Jolla\'s sea caves are only accessible by kayak or swimming, making them San Diego\'s most exclusive "clubs"'
    ],
    landmarks: [
      {
        name: 'La Jolla Cove',
        description: 'Postcard-perfect beach where snorkeling with leopard sharks is the norm and sea lions photobomb every tourist selfie',
        type: 'natural'
      },
      {
        name: 'Torrey Pines State Reserve',
        description: 'The last stand of the world\'s rarest pine tree—these ancient trees only grow here and on Santa Rosa Island',
        type: 'natural'
      },
      {
        name: 'Birch Aquarium',
        description: 'Scripps Institution\'s public face, where seahorses breed and kids learn that climate change is real (sorry, jellyfish)',
        type: 'cultural'
      },
      {
        name: 'Sunny Jim Sea Cave',
        description: 'The only sea cave in California accessible by land via a 145-step tunnel carved in 1902—because stairs are character-building',
        type: 'historic'
      },
      {
        name: 'The Cave Store',
        description: 'Been selling seashells by the seashore since 1902, proving that tourist traps can become beloved institutions',
        type: 'cultural'
      }
    ],
    localTips: [
      'Park at the top of the hill and walk down—finding parking at La Jolla Cove is harder than spotting a leopard shark',
      'The sea lions are loudest during pupping season (May-June), so bring earplugs if you\'re noise-sensitive',
      'Hit Torrey Pines trails before 9am or after 4pm to avoid both crowds and the brutal sun on those exposed cliff paths',
      'The Thursday Farmer\'s Market behind the library has better people-watching than the beaches'
    ],
    weatherQuirk: 'The marine layer here is so reliable you can set your watch by it—June Gloom rolls in at 8am and burns off by noon like clockwork',
    bestForBadges: [
      'Affluent retirees',
      'Marine biology enthusiasts',
      'Serious hikers',
      'Photography lovers',
      'Science-minded families'
    ],
    localSlang: [
      'The Cove = La Jolla Cove (never "La Jolla Beach")',
      'The Gliderport = Torrey Pines Gliderport',
      'The Village = Downtown La Jolla shopping district',
      'Seal Rock = The rock outcropping where sea lions congregate (yes, they\'re sea lions, not seals)'
    ],
    seoKeywords: {
      traditional: [
        'La Jolla senior living',
        'La Jolla retirement communities',
        'coastal retirement San Diego',
        'La Jolla healthcare',
        'luxury senior housing La Jolla'
      ],
      aiSeo: [
        'where do wealthy retirees live in San Diego',
        'best neighborhood for active seniors near the ocean',
        'safest coastal community for retirees in California',
        'walkable beach town for seniors in San Diego',
        'La Jolla vs Del Mar for retirement'
      ]
    }
  },
  {
    slug: 'del-mar',
    name: 'Del Mar',
    parentLocation: 'San Diego County, CA',
    tagline: 'Where the turf meets the surf and horse racing meets happy hour since 1937',
    nickname: 'The Surf Meets Turf',
    vibe: 'Bing Crosby founded the racetrack, and his "where the turf meets the surf" slogan still defines this ritzy beach village where thoroughbreds and tech money collide. It\'s equal parts Southern California beach culture and Kentucky Derby sophistication—flip-flops at brunch, fascinators at the track. The village maintains strict low-rise building codes, so the views stay unobstructed and the vibe stays 1950s charming (with 2020s prices).',
    funFacts: [
      'Del Mar Racetrack was co-founded by Bing Crosby, who\'d sing the national anthem on opening day while sipping a mint julep',
      'The city has a "no chain restaurant" ordinance in the village—you won\'t find a Starbucks within city limits',
      'Del Mar\'s Powerhouse community center was the actual electric powerhouse for the city from 1928-1976, now it hosts yoga classes'
    ],
    landmarks: [
      {
        name: 'Del Mar Racetrack',
        description: 'Where the Pacific Ocean provides the backdrop for the Sport of Kings—opening day (July) is San Diego\'s unofficial summer kickoff',
        type: 'entertainment'
      },
      {
        name: 'Torrey Pines State Beach',
        description: 'Arguably San Diego\'s most beautiful beach—wide, sandy, backed by cliffs, and just far enough from parking to keep crowds manageable',
        type: 'natural'
      },
      {
        name: 'Del Mar Plaza',
        description: 'Tiered outdoor shopping with killer ocean views from every restaurant patio—where "retail therapy" meets "ocean therapy"',
        type: 'cultural'
      },
      {
        name: 'Seagrove Park',
        description: 'Clifftop park perfect for watching sunsets, dolphins, and the occasional proposal (bring tissues)',
        type: 'recreation'
      }
    ],
    localTips: [
      'Racing season (July-September) transforms the town—book restaurants weeks in advance or eat at 5pm like a Floridian',
      'The free summer concerts at Powerhouse Park fill up fast; locals bring wine, cheese, and low beach chairs',
      'Parking is a blood sport during summer—arrive before 9am or resign yourself to the paid lots',
      'Jake\'s Del Mar has the best ocean-view brunch, but the wait is biblical on weekends—put your name in and walk the beach'
    ],
    weatherQuirk: 'The "Torrey Pines marine layer" is denser than La Jolla\'s—expect coastal fog until 11am even when it\'s 80° two miles inland',
    bestForBadges: [
      'Equestrian enthusiasts',
      'Golf-loving retirees',
      'Upscale dining aficionados',
      'Beach walkers',
      'Small-town atmosphere seekers'
    ],
    localSlang: [
      'The Track = Del Mar Racetrack',
      'The Village = Downtown Del Mar',
      'Going down the hill = Heading to the beach from the bluffs',
      'The Plaza = Del Mar Plaza shopping center'
    ],
    seoKeywords: {
      traditional: [
        'Del Mar retirement living',
        'Del Mar senior communities',
        'upscale retirement San Diego North County',
        'Del Mar assisted living',
        'horse racing retirement community'
      ],
      aiSeo: [
        'quietest beach town near San Diego for retirees',
        'where do rich people retire in San Diego',
        'best walkable beach community for seniors',
        'Del Mar vs La Jolla which is better for retirement',
        'small town feel near San Diego for retirees'
      ]
    }
  },
  {
    slug: 'coronado',
    name: 'Coronado',
    parentLocation: 'San Diego, CA',
    tagline: 'The island that isn\'t an island, where Oz was filmed and Navy SEALs run past millionaires\' mansions',
    nickname: 'Crown City',
    vibe: 'Technically a tied island (connected by the Silver Strand sandbar), Coronado feels worlds away from San Diego despite being a 2-minute bridge ride. The Hotel del Coronado\'s red turrets dominate the skyline like a Victorian fever dream—L. Frank Baum stayed there and supposedly based the Emerald City on it. Navy presence is everywhere (SEALs train on the beaches), but so is small-town charm: locals bike everywhere, the downtown village has an ice cream parlor from 1948, and everyone waves.',
    funFacts: [
      'Some Like It Hot filmed at the Hotel del Coronado, and Marilyn Monroe\'s ghost allegedly haunts room 3327 (the hotel neither confirms nor denies)',
      'Coronado is technically a tied island, not a true island—the Silver Strand connects it to Imperial Beach like a natural bridge',
      'The Wizard of Oz connection: author L. Frank Baum vacationed at Hotel del Coronado and the building\'s turrets inspired the Emerald City architecture'
    ],
    landmarks: [
      {
        name: 'Hotel del Coronado',
        description: 'Built in 1888, this Victorian beach resort hosted 14 U.S. presidents and claims Thomas Edison personally installed the electric lighting',
        type: 'historic'
      },
      {
        name: 'Coronado Bridge',
        description: '2.1-mile architectural marvel with a 90-degree curve—the curve was intentional to give drivers maximum bay views (and prevent sea sickness)',
        type: 'historic'
      },
      {
        name: 'Silver Strand State Beach',
        description: 'One beach, two bodies of water—the Pacific on one side, San Diego Bay on the other, perfect for wind-sensitive beach days',
        type: 'natural'
      },
      {
        name: 'Coronado Ferry Landing',
        description: 'The old ferry terminal turned boutique shopping village with unbeatable views of the San Diego skyline',
        type: 'cultural'
      },
      {
        name: 'Naval Air Station North Island',
        description: 'Birthplace of naval aviation and home to multiple aircraft carriers—the "wall of gray" in the bay is always impressive',
        type: 'historic'
      }
    ],
    localTips: [
      'Rent a bike—the whole island is flat and bike-friendly, plus parking is a nightmare during summer',
      'Moo Time Creamery (since 1948) has better ice cream than any chain and the mint chip is legendary among locals',
      'The Tuesday afternoon farmers market in front of the library is tiny but mighty—get there early for the tamale lady',
      'Avoid driving over the bridge during rush hour (4-6pm)—the backup can stretch for miles; take the ferry instead'
    ],
    weatherQuirk: 'Coronado averages 5°F cooler than downtown San Diego due to constant ocean breeze—locals call it "natural air conditioning"',
    bestForBadges: [
      'Military families',
      'Beach cruiser enthusiasts',
      'History buffs',
      'Small-town seekers',
      'Golf and tennis players'
    ],
    localSlang: [
      'The Del = Hotel del Coronado',
      'North Island = Naval Air Station',
      'The Village = Downtown Coronado shopping district',
      'The Strand = Silver Strand beach/road'
    ],
    seoKeywords: {
      traditional: [
        'Coronado senior living',
        'Coronado retirement community',
        'island living San Diego seniors',
        'Coronado assisted living',
        'military retiree housing Coronado'
      ],
      aiSeo: [
        'is Coronado good for retirees',
        'safest neighborhood in San Diego for seniors',
        'small island community near San Diego',
        'bike-friendly retirement towns California',
        'where do Navy retirees live in San Diego'
      ]
    }
  },
  {
    slug: 'ocean-beach',
    name: 'Ocean Beach',
    parentLocation: 'San Diego, CA',
    tagline: 'The last true beach town where hippies, surfers, and crusty locals keep it weird since 1887',
    nickname: 'OB',
    vibe: 'If Pacific Beach is San Diego\'s spring break, Ocean Beach is its aging hippie uncle who never left the \'70s. Tie-dye shops, vintage surf shacks, and a "locals only" attitude that\'s more protective than aggressive. The Wednesday farmers market is an institution (arrive early or miss the organic strawberries), and the main drag feels frozen in time—in the best way. Dogs rule here; OB Dog Beach is the original off-leash paradise where retrievers and pit bulls play together while their owners talk sunsets.',
    funFacts: [
      'OB has the longest concrete pier on the West Coast at 1,971 feet—locals fish off it at midnight and watch the sunrise from the end',
      'The OB Street Fair and Chili Cook-Off (June) draws 100,000+ people and the chili competition is hilariously intense',
      'Ocean Beach was once connected to Point Loma by a continuous beach until the military built the channel for subs in WWII'
    ],
    landmarks: [
      {
        name: 'Ocean Beach Pier',
        description: 'The longest pier on the West Coast, where fishing is free, the cafe serves killer burgers, and pelicans perch like they own the place',
        type: 'recreation'
      },
      {
        name: 'Dog Beach',
        description: 'The original off-leash dog beach (established 1972) where every dog knows every other dog and humans are just there to throw balls',
        type: 'recreation'
      },
      {
        name: 'Newport Avenue',
        description: 'Main drag loaded with surf shops, vintage stores, and dive bars that haven\'t changed since the Carter administration',
        type: 'cultural'
      },
      {
        name: 'Sunset Cliffs Natural Park',
        description: '68 acres of dramatic coastal bluffs perfect for sunset watching, tide pooling, and pretending you\'re in a Corona commercial',
        type: 'natural'
      },
      {
        name: 'The OB Farmers Market',
        description: 'Wednesday afternoon institution since 2000—locals plan their week around it and tourists wonder why everyone has dogs and kombucha',
        type: 'cultural'
      }
    ],
    localTips: [
      'Parking is cash-only at meters and they\'re enforced until 10pm—download ParkMobile or bring quarters',
      'Hodad\'s burger line looks scary but moves fast; locals hit it at 2pm on weekdays to avoid the wait',
      'Sunset Cliffs sunsets draw crowds—stake your spot by 6pm in summer or you\'ll be watching from behind 50 iPhones',
      'The OB Pier Cafe opens at 7am and has the best cheap breakfast with ocean views in all of San Diego'
    ],
    weatherQuirk: 'OB gets more wind than other beach neighborhoods due to the Point Loma channel—great for kite flying, brutal for beach umbrellas',
    bestForBadges: [
      'Dog lovers',
      'Surfers',
      'Bohemian retirees',
      'Budget-conscious seniors',
      'Community-oriented folks'
    ],
    localSlang: [
      'OB = Ocean Beach (never say the full name)',
      'The Point = Sunset Cliffs Point',
      'OBPF = Ocean Beach Planning Board (they run this town)',
      'Dirty Birds = Nickname for the many wild parrots in the palms'
    ],
    seoKeywords: {
      traditional: [
        'Ocean Beach senior living',
        'affordable San Diego beach retirement',
        'OB retirement community',
        'pet-friendly senior housing San Diego',
        'bohemian retirement California'
      ],
      aiSeo: [
        'most affordable beach town in San Diego for retirees',
        'dog-friendly retirement communities near beach',
        'hippie beach towns California for seniors',
        'laid-back beach neighborhood San Diego',
        'where do surfers retire in San Diego'
      ]
    }
  },
  {
    slug: 'pacific-beach',
    name: 'Pacific Beach',
    parentLocation: 'San Diego, CA',
    tagline: 'Eternal spring break meets beach volleyball, where boardwalk bars and sunrise yoga coexist in beautiful chaos',
    nickname: 'PB',
    vibe: 'If every day is Saturday in San Diego, it\'s always Saturday night in PB. This is where the party lives: beach bars, volleyball courts, and a boardwalk scene that transitions from yoga moms at 7am to beer pong tournaments by 7pm. Garnet Avenue is bar-lined chaos on weekends, but the beach itself is gorgeous—wide, sandy, and perfect for everything from surfing to boogie boarding to people-watching. It\'s loud, young, and unapologetically fun.',
    funFacts: [
      'Crystal Pier Hotel rooms literally sit over the ocean—you can fish from your balcony and hear waves under the floorboards',
      'PB has more bars per square mile than any other San Diego neighborhood (18 on Garnet Ave alone)',
      'The PB Shore Club was the first Taco Bell in San Diego County (1964), though it\'s now condos worth millions'
    ],
    landmarks: [
      {
        name: 'Crystal Pier',
        description: 'Iconic 1927 pier with a hotel built right over the water—rooms book out months in advance for good reason',
        type: 'historic'
      },
      {
        name: 'Pacific Beach Boardwalk',
        description: '3.2-mile concrete path connecting PB to Mission Beach—primo people-watching, skating, and biking territory',
        type: 'recreation'
      },
      {
        name: 'Garnet Avenue',
        description: 'The main artery of PB nightlife, where every third building is a bar and Uber drivers know the address by heart',
        type: 'entertainment'
      },
      {
        name: 'Tourmaline Surf Park',
        description: 'The mellow surf spot where longboarders reign and beginners won\'t get yelled at (much)',
        type: 'recreation'
      },
      {
        name: 'Kate Sessions Park',
        description: 'Hilltop park with panoramic bay views—named for the "Mother of Balboa Park" who also planted trees all over PB',
        type: 'natural'
      }
    ],
    localTips: [
      'Avoid Garnet Avenue after 9pm on weekends unless you enjoy drunk 22-year-olds and Uber surge pricing',
      'The Taco Stand on Garnet has the best fish tacos in PB and a line to prove it—go at 2pm to avoid the crush',
      'Crystal Pier is free to walk until 9pm, but fishing requires a license and nerves of steel (waves crash underneath)',
      'Rent bikes at the boardwalk instead of driving—parking is a nightmare and you\'ll burn off the fish tacos'
    ],
    weatherQuirk: 'PB gets less marine layer than La Jolla due to the bay effect—it burns off 30-45 minutes earlier, making mornings sunnier',
    bestForBadges: [
      'Active seniors',
      'Social butterflies',
      'Beach volleyball players',
      'Morning walkers',
      'Extroverted retirees'
    ],
    localSlang: [
      'PB = Pacific Beach (locals never say the full name)',
      'Tourmo = Tourmaline Surf Park',
      'The Wall = Low wall along boardwalk where everyone sits',
      'Garnet = Garnet Avenue (the party street)'
    ],
    seoKeywords: {
      traditional: [
        'Pacific Beach senior living',
        'active retirement PB San Diego',
        'beachfront retirement Pacific Beach',
        'social retirement community San Diego',
        'walkable beach neighborhood seniors'
      ],
      aiSeo: [
        'best beach town for active seniors San Diego',
        'lively beach neighborhood for retirees',
        'walkable beach community with nightlife',
        'Pacific Beach vs Ocean Beach for retirement',
        'where do active retirees live in San Diego'
      ]
    }
  },
  {
    slug: 'mission-beach',
    name: 'Mission Beach',
    parentLocation: 'San Diego, CA',
    tagline: 'Where Belmont Park\'s roller coaster screams meet ocean waves—the beach with a permanent carnival',
    nickname: 'Mission',
    vibe: 'Squeezed onto a narrow sandbar between the ocean and Mission Bay, this beach town is pure Americana: a vintage wooden roller coaster, arcade games, beach volleyball, and enough bikinis to stock a swimwear museum. Belmont Park has been the anchor since 1925, and the Giant Dipper coaster still creaks and groans like it\'s auditioning for a horror film. It\'s spring break energy with a nostalgic twist—where grandparents remember riding the same rides they now watch their grandkids scream on.',
    funFacts: [
      'The Giant Dipper roller coaster (1925) is a National Historic Landmark and still operates with its original cars—ride at your own risk',
      'Mission Beach is only 2 blocks wide at its narrowest point—you can literally see both the ocean and the bay from some houses',
      'The Wavehouse at Belmont Park has a standing wave machine where you can "surf" year-round without a wetsuit or shark concern'
    ],
    landmarks: [
      {
        name: 'Belmont Park',
        description: 'Old-school amusement park since 1925 featuring the Giant Dipper coaster, arcade games, and enough funnel cake to power a small city',
        type: 'entertainment'
      },
      {
        name: 'The Giant Dipper',
        description: '1925 wooden roller coaster that\'s somehow still running—creaky, loud, and thrilling in ways modern coasters can\'t match',
        type: 'historic'
      },
      {
        name: 'Mission Bay Park',
        description: '4,600-acre aquatic playground perfect for kayaking, paddleboarding, sailing, and watching teenagers try wakeboarding',
        type: 'recreation'
      },
      {
        name: 'The Wave House',
        description: 'FlowRider wave machines where aspiring surfers practice without ocean variables (sharks, currents, actual talent)',
        type: 'entertainment'
      },
      {
        name: 'South Mission Beach Jetty',
        description: 'Rock jetty where locals fish, tourists walk, and seabirds judge both groups equally',
        type: 'natural'
      }
    ],
    localTips: [
      'Park at Belmont Park ($20 flat rate) or risk endlessly circling for street parking that doesn\'t exist',
      'The boardwalk connects to PB and is perfect for sunrise walks before the beach bros wake up',
      'Draft Republic at Belmont Park has killer fish tacos and a rooftop deck—lunch there beats any chain restaurant',
      'Mission Bay side is calmer and warmer than the ocean side—perfect for stand-up paddleboarding beginners'
    ],
    weatherQuirk: 'Mission Beach gets wind-tunnel effect from the narrow sandbar—afternoon winds can hit 20mph, making umbrellas lethal projectiles',
    bestForBadges: [
      'Families with grandkids',
      'Nostalgia lovers',
      'Water sports enthusiasts',
      'Boardwalk walkers',
      'Carnival atmosphere fans'
    ],
    localSlang: [
      'The Dipper = Giant Dipper roller coaster',
      'The Park = Belmont Park',
      'Bay side vs Ocean side = Mission Bay vs Pacific Ocean',
      'The Jetty = South Mission Beach rock jetty'
    ],
    seoKeywords: {
      traditional: [
        'Mission Beach senior living',
        'Mission Beach retirement',
        'water activities retirement San Diego',
        'beachfront senior housing Mission Beach',
        'family-friendly retirement San Diego'
      ],
      aiSeo: [
        'best beach for grandparents near San Diego',
        'retirement community near amusement park',
        'calm water beach for seniors San Diego',
        'walkable beach with activities for all ages',
        'Mission Beach vs Pacific Beach for retirees'
      ]
    }
  },
  {
    slug: 'hillcrest',
    name: 'Hillcrest',
    parentLocation: 'San Diego, CA',
    tagline: 'The rainbow-flagged heart of San Diego where brunch is a lifestyle and Pride never really ends',
    nickname: 'The Pride of San Diego',
    vibe: 'Hillcrest wears its rainbow flag with pride—literally. This is San Diego\'s LGBTQ+ epicenter, a walkable urban neighborhood where vintage shops, trendy restaurants, and historic theaters create a village vibe in the middle of the city. Brunch here is a competitive sport (wait times at Snooze can hit 90 minutes), and the farmers market on Sundays is where the whole neighborhood catches up on gossip. It\'s progressive, inclusive, and unapologetically vibrant.',
    funFacts: [
      'Hillcrest installed the first rainbow crosswalk in San Diego (2012), and it\'s been repainted so many times from foot traffic it\'s become a maintenance budget line item',
      'The Hillcrest sign (the giant one on University Ave) was donated by neighbors in 1940 and is now a protected landmark',
      'San Diego Pride Parade started in Hillcrest in 1974 with 200 marchers; now it draws 250,000+ people every July'
    ],
    landmarks: [
      {
        name: 'The Hillcrest Sign',
        description: 'Iconic neighborhood gateway since 1940—every local has a photo in front of it, and tourists flock for Instagram ops',
        type: 'cultural'
      },
      {
        name: 'Balboa Park',
        description: 'Technically shared with multiple neighborhoods, but Hillcrest claims the north entrance—1,200 acres of museums, gardens, and the San Diego Zoo',
        type: 'cultural'
      },
      {
        name: 'The Hillcrest Farmers Market',
        description: 'Sunday mornings under the DMV parking structure—organic produce, fresh flowers, and the best people-watching in San Diego',
        type: 'cultural'
      },
      {
        name: 'The Lafayette Hotel',
        description: 'Historic 1946 hotel with a pool scene straight out of a 1950s postcard—Sunday Fundays here are legendary',
        type: 'historic'
      },
      {
        name: 'Whole Foods Hillcrest',
        description: 'Not just a grocery store—it\'s the unofficial Hillcrest social hub where running into neighbors is guaranteed',
        type: 'cultural'
      }
    ],
    localTips: [
      'Park in the Whole Foods garage and validate—street parking in Hillcrest is like finding a unicorn',
      'The Sunday farmers market starts at 9am but the good stuff is gone by 10:30am—set an alarm',
      'Brunch waits are real—put your name in at Hash House A Go Go and walk around; they\'ll text when your table\'s ready',
      'University Avenue is the main drag but the real gems are on side streets like Fifth and Robinson'
    ],
    weatherQuirk: 'Hillcrest sits on a hill (shocking, we know) and gets 5-10°F warmer than coastal neighborhoods—the marine layer burns off by 9am',
    bestForBadges: [
      'LGBTQ+ seniors',
      'Urban walkers',
      'Culture enthusiasts',
      'Foodies',
      'Car-free retirees'
    ],
    localSlang: [
      'The Crest = Hillcrest',
      'Uni Ave = University Avenue',
      'The DMV Market = Hillcrest Farmers Market (it\'s under the DMV parking structure)',
      'Balboa = Balboa Park'
    ],
    seoKeywords: {
      traditional: [
        'Hillcrest senior living',
        'LGBTQ+ friendly retirement San Diego',
        'urban retirement Hillcrest',
        'walkable neighborhood San Diego seniors',
        'Hillcrest assisted living'
      ],
      aiSeo: [
        'most LGBTQ friendly retirement community San Diego',
        'walkable urban neighborhood for retirees',
        'best brunch neighborhood San Diego seniors',
        'car-free retirement San Diego',
        'progressive retirement communities California'
      ]
    }
  },
  {
    slug: 'north-park',
    name: 'North Park',
    parentLocation: 'San Diego, CA',
    tagline: 'Craft everything headquarters—if it\'s artisanal, locally sourced, or served in a Mason jar, it\'s here',
    nickname: 'Craft Everything HQ',
    vibe: 'North Park is what happens when hipsters, craft beer nerds, and coffee snobs create a neighborhood—and it\'s glorious. Every third building is either a brewery, a coffee roaster, or a vintage shop where everything costs three times what it should. The Thursday night art walks on Ray Street pack the galleries, and the Thursday farmers market on 30th Street is where you overpay for heirloom tomatoes and feel good about it. It\'s Brooklyn transplanted to San Diego, complete with handlebar mustaches and fixie bikes.',
    funFacts: [
      'North Park has the highest concentration of craft breweries per capita in San Diego—and San Diego has the most breweries per capita in the U.S.',
      'The North Park sign was erected in 2012 and immediately became the neighborhood\'s most Instagrammed landmark (sorry, breweries)',
      'The historic North Park Theatre (1928) was restored in 2005 and now shows independent films while serving craft beer—because of course it does'
    ],
    landmarks: [
      {
        name: 'North Park Sign',
        description: 'The towering neon sign on University Avenue—obligatory photo stop for anyone who wants to prove they visited',
        type: 'cultural'
      },
      {
        name: 'North Park Theatre',
        description: 'Restored 1928 movie palace showing indie films with craft beer in the cup holders—peak North Park energy',
        type: 'cultural'
      },
      {
        name: '30th Street',
        description: 'The main drag packed with breweries, restaurants, and shops—walk it north to south and you\'ll need a nap',
        type: 'cultural'
      },
      {
        name: 'The Observatory North Park',
        description: 'Converted vaudeville theater turned concert venue—every touring indie band stops here',
        type: 'entertainment'
      },
      {
        name: 'Ray Street Art District',
        description: 'Cluster of galleries that hosts epic art walks on the second Saturday of every month',
        type: 'cultural'
      },
      {
        name: 'North Park Farmers Market',
        description: 'Thursday afternoons on 30th Street—organic everything, fresh flowers, and prepared food that\'s better than most restaurants',
        type: 'cultural'
      }
    ],
    localTips: [
      'Park in the residential streets east of 30th and walk west—meters on 30th are expensive and enforced zealously',
      'Modern Times brewery has the best beer garden and the only vegan food truck that non-vegans actually like',
      'The Thursday farmers market gets PACKED—arrive by 4pm or you\'ll be shoulder-to-shoulder with strollers',
      'Skip the weekend brunch crowds and go on weekday mornings—same food, half the wait, better parking'
    ],
    weatherQuirk: 'North Park is inland enough to skip most marine layer but still gets coastal breeze—it\'s the Goldilocks zone of San Diego weather',
    bestForBadges: [
      'Foodies',
      'Craft beer enthusiasts',
      'Art lovers',
      'Urban hikers',
      'Social seniors'
    ],
    localSlang: [
      'NoPa = North Park (trying to make it happen)',
      'The Park = North Park (not to be confused with Balboa Park)',
      '30th Street = The main commercial corridor',
      'Ray Street = Ray Street Art District'
    ],
    seoKeywords: {
      traditional: [
        'North Park senior living',
        'urban retirement North Park San Diego',
        'walkable retirement community',
        'craft beer retirement San Diego',
        'arts district retirement'
      ],
      aiSeo: [
        'best neighborhood for foodies retiring in San Diego',
        'walkable arts district for seniors',
        'hipster retirement communities California',
        'North Park vs Hillcrest for retirees',
        'car-free urban retirement San Diego'
      ]
    }
  },
  {
    slug: 'little-italy',
    name: 'Little Italy',
    parentLocation: 'San Diego, CA',
    tagline: 'From piazza to Pacific in six blocks—where Italian heritage meets waterfront cool',
    nickname: 'Little Italy',
    vibe: 'Little Italy shrank from its original size over the decades but kept all the good stuff: authentic Italian bakeries, family-run red sauce joints, and a Saturday farmers market that rivals anything in California. The neighborhood has gentrified into high-rise condos and trendy restaurants, but old-timers still gather at Filippi\'s for Sunday gravy, and the annual Festa brings out Italian flags and mariachi bands (it\'s San Diego, it\'s complicated). Walk from the piazza to the waterfront and you\'ll pass three generations of Italian-American history.',
    funFacts: [
      'The Little Italy Mercato (Saturday farmers market) is the largest in San Diego with 200+ vendors—arrive early or you won\'t find parking until 2030',
      'Little Italy was built by Italian tuna fishermen who settled here in the 1920s—the tuna industry died, but the restaurants lived on',
      'The neighborhood has more than 30 restaurants in a 6-block area, making it the most restaurant-dense neighborhood in San Diego'
    ],
    landmarks: [
      {
        name: 'Little Italy Mercato',
        description: 'Saturday morning farmers market that takes over the entire neighborhood—200+ vendors selling everything from organic kale to handmade pasta',
        type: 'cultural'
      },
      {
        name: 'Waterfront Park',
        description: 'Modern 12-acre park with interactive fountains, picnic areas, and unbeatable views of San Diego Bay and aircraft carriers',
        type: 'recreation'
      },
      {
        name: 'Filippi\'s Pizza Grotto',
        description: 'Old-school red sauce joint since 1950 where you walk through the Italian grocery to reach the dining room—cash only, BYOB, and worth it',
        type: 'dining'
      },
      {
        name: 'Piazza della Famiglia',
        description: 'The neighborhood\'s piazza complete with bocce ball courts, outdoor seating, and the Little Italy sign for obligatory photos',
        type: 'cultural'
      },
      {
        name: 'Our Lady of the Rosary',
        description: 'Historic Catholic church (1925) that\'s the spiritual heart of the Italian community—the Festa celebration centers here',
        type: 'historic'
      }
    ],
    localTips: [
      'Mercato Saturdays mean zero street parking from 7am-3pm—park in the County Administration Center garage and walk over',
      'Filippi\'s doesn\'t take reservations and the wait can hit 2 hours on weekends—go for lunch on Tuesday',
      'The waterfront trolley station makes Little Italy the most public-transit-accessible neighborhood in San Diego',
      'Mona Lisa Italian Foods has the best deli sandwiches and fresh pasta—locals stock up here before dinner parties'
    ],
    weatherQuirk: 'Little Italy is protected from wind by downtown skyscrapers but still gets bay breeze—outdoor dining is comfortable year-round',
    bestForBadges: [
      'Food lovers',
      'Urban dwellers',
      'Public transit users',
      'Culture enthusiasts',
      'Waterfront walkers'
    ],
    localSlang: [
      'The Mercato = Saturday farmers market',
      'The Piazza = Piazza della Famiglia',
      'India Street = Main commercial street',
      'The Waterfront = Waterfront Park along the bay'
    ],
    seoKeywords: {
      traditional: [
        'Little Italy senior living San Diego',
        'waterfront retirement downtown',
        'Italian neighborhood retirement',
        'urban retirement Little Italy',
        'walkable downtown San Diego seniors'
      ],
      aiSeo: [
        'best urban waterfront retirement San Diego',
        'Italian neighborhood for retirees California',
        'walkable food-centric retirement community',
        'downtown San Diego vs Little Italy for seniors',
        'public transit accessible retirement San Diego'
      ]
    }
  },
  {
    slug: 'gaslamp-quarter',
    name: 'Gaslamp Quarter',
    parentLocation: 'San Diego, CA',
    tagline: 'Where Victorian architecture meets rooftop nightclubs and history collides with happy hour',
    nickname: 'The Gaslamp',
    vibe: 'By day, the Gaslamp is a National Historic District with Victorian-era buildings and sidewalk cafes where tourists sip lattes and admire 19th-century architecture. By night, it transforms into San Diego\'s nightlife nucleus—rooftop bars, dance clubs, and bachelorette parties as far as the eye can see. It\'s a weird, wonderful mashup of preservation and partying, where you can tour a building from 1887 and then watch someone get thrown out of a club next door. History and hedonism, together at last.',
    funFacts: [
      'The Gaslamp was San Diego\'s red-light district in the late 1800s—Wyatt Earp ran gambling halls here before heading to Tombstone',
      'The neighborhood has 94 historic buildings, most built between 1873-1930, making it one of the largest Victorian-era districts in the U.S.',
      'Comic-Con takes over the Gaslamp every July, turning it into a cosplay wonderland where Stormtroopers outnumber tourists'
    ],
    landmarks: [
      {
        name: 'Horton Plaza Park',
        description: 'The original public square dating to 1850—now a small park surrounded by skyscrapers, perfect for lunch breaks and people-watching',
        type: 'historic'
      },
      {
        name: 'The Yuma Building',
        description: '1882 building that survived multiple fires and now houses a whiskey bar—San Diego\'s second-oldest surviving structure',
        type: 'historic'
      },
      {
        name: 'Fifth Avenue',
        description: 'The main Gaslamp drag where Victorian buildings meet modern nightclubs—history majors drink next to birthday parties',
        type: 'cultural'
      },
      {
        name: 'Petco Park',
        description: 'Home of the San Diego Padres since 2004, perfectly integrated into the Gaslamp grid—you can see inside from some sidewalks',
        type: 'entertainment'
      },
      {
        name: 'The New Children\'s Museum',
        description: 'Interactive art museum for kids designed by renowned architect Rob Quigley—parents love it, kids tolerate it',
        type: 'cultural'
      }
    ],
    localTips: [
      'Avoid Friday/Saturday nights unless you enjoy cover charges, long lines, and drunk 25-year-olds',
      'Park at Horton Plaza garage ($10 flat rate evenings) and walk—street parking is metered until midnight',
      'Padres game days mean surge pricing at restaurants and bars—make reservations or eat before/after the game',
      'The Gaslamp Foundation offers historic walking tours on Saturdays—they\'re free and actually interesting'
    ],
    weatherQuirk: 'Downtown\'s urban heat island effect means the Gaslamp is 5-8°F warmer than the beaches—dress lighter than you think',
    bestForBadges: [
      'Culture seekers',
      'History buffs',
      'Sports fans',
      'Urban explorers',
      'Restaurant hoppers'
    ],
    localSlang: [
      'The Quarter = Gaslamp Quarter',
      'Fifth = Fifth Avenue (main nightlife street)',
      'The Park = Petco Park (not to be confused with Balboa Park)',
      'East Village = Neighborhood east of the Gaslamp (technically separate but often lumped together)'
    ],
    seoKeywords: {
      traditional: [
        'Gaslamp Quarter senior living',
        'downtown San Diego retirement',
        'urban retirement historic district',
        'walkable downtown retirement',
        'Gaslamp senior apartments'
      ],
      aiSeo: [
        'best downtown neighborhood for retirees San Diego',
        'historic district retirement communities',
        'walkable urban retirement near Petco Park',
        'downtown vs suburbs for San Diego retirees',
        'nightlife-adjacent quiet retirement downtown'
      ]
    }
  },
  {
    slug: 'point-loma',
    name: 'Point Loma',
    parentLocation: 'San Diego, CA',
    tagline: 'Where Cabrillo landed in 1542 and tidepools still reveal the secrets of the sea',
    nickname: 'The Point',
    vibe: 'Point Loma is a peninsula jutting into the Pacific, blessed with some of the best sunset views in San Diego and enough military history to fill a museum (which it does—the Naval Heritage Center is here). Cabrillo National Monument marks where Spanish explorer Juan Rodriguez Cabrillo first landed in California in 1542, and the tidepools at the base of the cliffs are a marine biology classroom disguised as nature. It\'s quieter and more residential than the beach towns, with a maritime vibe and killer fish tacos.',
    funFacts: [
      'Point Loma is home to the largest sport fishing fleet on the West Coast—if you\'ve eaten yellowtail in California, it probably came from here',
      'The Old Point Loma Lighthouse (1855) never worked properly because it was built too high—fog obscured the light, so they built a new one lower down',
      'Point Loma tidepools are among the best in Southern California, with over 200 species of marine life visible at low tide'
    ],
    landmarks: [
      {
        name: 'Cabrillo National Monument',
        description: 'Commemorates the 1542 landing of Juan Rodriguez Cabrillo—come for history, stay for whale watching and tidepools',
        type: 'historic'
      },
      {
        name: 'Sunset Cliffs Natural Park',
        description: 'Dramatic coastal bluffs with trails, arches, and caves—sunsets here are so good they feel like showing off',
        type: 'natural'
      },
      {
        name: 'Point Loma Tidepools',
        description: 'Rocky intertidal zone teeming with sea stars, anemones, crabs, and the occasional octopus—low tide is showtime',
        type: 'natural'
      },
      {
        name: 'Liberty Station',
        description: 'Former Naval Training Center converted into shops, restaurants, and the Arts District—brunch here is competitive',
        type: 'cultural'
      },
      {
        name: 'Shelter Island',
        description: 'Man-made island with marinas, waterfront dining, and unbeatable skyline views—popular for weddings and yacht-watching',
        type: 'recreation'
      }
    ],
    localTips: [
      'Visit Cabrillo Monument in the morning before tour buses arrive—parking is limited and crowds ruin the zen',
      'Low tide is the only time to see tidepools properly—check tide charts and aim for tides below 1.0 feet',
      'Sunset Cliffs gets crowded at sunset (shocker)—arrive 30 minutes early to stake out a good spot',
      'Point Loma Seafoods near the docks has the freshest fish sandwiches in San Diego—cash only, outdoor seating, pure magic'
    ],
    weatherQuirk: 'Point Loma gets more wind than inland areas due to the peninsula effect—perfect for kite flying, brutal for beach umbrellas',
    bestForBadges: [
      'History enthusiasts',
      'Nature lovers',
      'Tide pool explorers',
      'Sunset chasers',
      'Nautical retirees'
    ],
    localSlang: [
      'The Point = Point Loma',
      'Cabrillo = Cabrillo National Monument',
      'The Cliffs = Sunset Cliffs',
      'Liberty = Liberty Station'
    ],
    seoKeywords: {
      traditional: [
        'Point Loma senior living',
        'Point Loma retirement community',
        'coastal retirement San Diego',
        'maritime retirement California',
        'Point Loma assisted living'
      ],
      aiSeo: [
        'best neighborhood for nature-loving retirees San Diego',
        'quiet coastal community near downtown',
        'historic peninsula retirement San Diego',
        'Point Loma vs Ocean Beach for seniors',
        'where do Navy retirees live in San Diego'
      ]
    }
  },
  {
    slug: 'encinitas',
    name: 'Encinitas',
    parentLocation: 'San Diego County, CA',
    tagline: 'Where Paramahansa Yogananda built his Self-Realization temple and surfers found enlightenment (or at least good waves)',
    nickname: 'Yoga Capital of the U.S.',
    vibe: 'Encinitas is equal parts surf town and spiritual retreat—Swami\'s Beach is named after the Self-Realization Fellowship temple perched on the bluff above it, and you\'re as likely to see meditation groups as surf contests. The town has a mellow, New Age energy with excellent coffee shops, farm-to-table restaurants, and enough yoga studios to stretch the entire population simultaneously. It\'s expensive, gorgeous, and unabashedly California dreaming.',
    funFacts: [
      'Paramahansa Yogananda wrote "Autobiography of a Yogi" at the Self-Realization Fellowship in Encinitas—Steve Jobs had it downloaded on his iPad when he died',
      'Swami\'s Beach is one of the most consistent surf breaks in California—locals have been riding it since the 1920s',
      'Encinitas has banned all chain restaurants and fast food within city limits—no McDonald\'s golden arches here'
    ],
    landmarks: [
      {
        name: 'Self-Realization Fellowship',
        description: 'Iconic meditation gardens and temple founded by Paramahansa Yogananda in 1937—spiritual pilgrims flock here, surfers name beaches after it',
        type: 'cultural'
      },
      {
        name: 'Swami\'s Beach',
        description: 'World-class surf break with a killer reef—named after the temple above it, and locals guard it fiercely',
        type: 'recreation'
      },
      {
        name: 'San Elijo State Beach',
        description: 'Clifftop campground with beach access—waking up to ocean views for $50/night is San Diego\'s best budget luxury',
        type: 'natural'
      },
      {
        name: 'Leucadia',
        description: 'Encinitas\' funkier neighborhood with surf shops, dive bars, and the famous "Leucadia" roadside sign everyone photographs',
        type: 'cultural'
      },
      {
        name: 'The Meditation Gardens',
        description: 'Part of Self-Realization Fellowship, open to the public Tuesday-Saturday—koi ponds, ocean views, and mandatory silence',
        type: 'cultural'
      }
    ],
    localTips: [
      'Park at the top of the Swami\'s stairs and walk down—the lot fills by 8am on weekends',
      'Sunday farmers market at the Community Center is small but mighty—get there early for the strawberry guy',
      'Meditation Gardens require silence—leave your phone in the car or risk the wrath of deeply centered people',
      'Leucadia Pizza has a cult following and only takes cash—the ATM next door is not a coincidence'
    ],
    weatherQuirk: 'Encinitas gets persistent morning fog in spring (May-June) that often lingers until 11am—locals call it "May Gray" and "June Gloom"',
    bestForBadges: [
      'Spiritual seekers',
      'Surfers',
      'Yoga enthusiasts',
      'Organic food lovers',
      'Quiet beach retirees'
    ],
    localSlang: [
      'Swami\'s = Swami\'s Beach',
      'The Gardens = Meditation Gardens',
      'Leucadia = The funkier part of Encinitas',
      'Coast Highway 101 = The main drag through town'
    ],
    seoKeywords: {
      traditional: [
        'Encinitas senior living',
        'Encinitas retirement community',
        'yoga retirement California',
        'spiritual retirement Encinitas',
        'coastal North County retirement'
      ],
      aiSeo: [
        'best spiritual retirement communities California',
        'yoga-friendly towns for retirees',
        'quiet surf town retirement San Diego',
        'Encinitas vs Del Mar for retirement',
        'where do wellness-focused seniors retire'
      ]
    }
  },
  {
    slug: 'cardiff-by-the-sea',
    name: 'Cardiff-by-the-Sea',
    parentLocation: 'San Diego County, CA',
    tagline: 'Home of the Magic Carpet Ride surf spot and the world\'s most photographed surfboard statue',
    nickname: 'Cardiff',
    vibe: 'Cardiff is Encinitas\' quieter, funkier sibling—a tiny beach community with killer surf, the famous "Cardiff Kook" statue, and VG Donut & Bakery, which has been fueling surfers since 1969. The town embraces its quirks: the Kook statue gets "dressed up" by locals in costumes that change weekly, and the Cardiff Reef surf break is mellow enough for beginners but good enough to keep experts happy. It\'s low-key, locals-first, and refreshingly unpretentious.',
    funFacts: [
      'The "Cardiff Kook" statue (officially "Magic Carpet Ride") is routinely dressed in costumes by locals—past outfits include astronaut, princess, and Donald Trump',
      'VG Donut & Bakery has been run by the same family since 1969—the maple bars are so good they have their own fan club',
      'Cardiff Reef is a beginner-friendly surf break that\'s also where pro surfers like Rob Machado learned to surf'
    ],
    landmarks: [
      {
        name: 'The Cardiff Kook',
        description: 'Officially named "Magic Carpet Ride," this surf statue is Cardiff\'s most beloved joke—locals costume it constantly',
        type: 'cultural'
      },
      {
        name: 'Cardiff State Beach',
        description: 'Mile-long beach with the Cardiff Reef surf break—mellow waves, sandy bottom, perfect for learning to surf',
        type: 'natural'
      },
      {
        name: 'VG Donut & Bakery',
        description: 'Family-run donut shop since 1969—the maple bars are legendary, the line moves fast, and everything sells out by 10am',
        type: 'dining'
      },
      {
        name: 'San Elijo Lagoon',
        description: '1,000-acre ecological reserve with 7 miles of trails—birdwatchers bring binoculars, everyone else brings dogs',
        type: 'natural'
      },
      {
        name: 'Seaside Market',
        description: 'Local grocery with a legendary deli—the tri-tip sandwiches are worth the 20-minute wait',
        type: 'dining'
      }
    ],
    localTips: [
      'Check the Kook\'s costume before visiting—locals update it constantly and it\'s always worth a photo',
      'VG Donuts sells out by 10am on weekends—get there at 8am or prepare for disappointment',
      'Cardiff Reef is perfect for beginner surfers—rent a board at Seaside Surf Shop and paddle out before 9am',
      'The Chart House restaurant has killer sunset views but tourist prices—locals go for drinks only'
    ],
    weatherQuirk: 'Cardiff gets a sea breeze most afternoons that makes beach temps 10°F cooler than parking lot temps—bring layers',
    bestForBadges: [
      'Surfers',
      'Quirky humor lovers',
      'Bird watchers',
      'Laid-back retirees',
      'Beach walkers'
    ],
    localSlang: [
      'The Kook = Cardiff Kook statue',
      'VG\'s = VG Donut & Bakery',
      'The Reef = Cardiff Reef surf break',
      'Seaside = Seaside Market'
    ],
    seoKeywords: {
      traditional: [
        'Cardiff-by-the-Sea senior living',
        'Cardiff retirement community',
        'small beach town retirement San Diego',
        'surf town retirement California',
        'Cardiff assisted living'
      ],
      aiSeo: [
        'quietest beach town in San Diego County',
        'best small surf town for retirees',
        'Cardiff vs Encinitas for retirement',
        'quirky beach communities California',
        'where do surfers retire in San Diego'
      ]
    }
  },
  {
    slug: 'solana-beach',
    name: 'Solana Beach',
    parentLocation: 'San Diego County, CA',
    tagline: 'Where the Cedros Design District meets dramatic coastal bluffs—antiques, art, and ocean views',
    nickname: 'Solana',
    vibe: 'Solana Beach is small, upscale, and artsy—the Cedros Design District alone has 85+ shops selling everything from mid-century furniture to custom surfboards. The beaches are gorgeous (Fletcher Cove is a local favorite), the bluffs are dramatic, and the train runs right through town, making it one of the few North County beach communities accessible by Coaster. It\'s quieter than Del Mar, less touristy than Encinitas, and perfect for people who want coastal living without the chaos.',
    funFacts: [
      'The Cedros Design District was originally a tomato-packing district in the 1920s—now it\'s where interior designers shop and tourists overpay for vintage finds',
      'Belly Up Tavern has hosted everyone from Bob Dylan to Snoop Dogg in a 600-person venue—Rolling Stone called it one of the best small clubs in America',
      'Solana Beach has some of the most dramatic coastal erosion in California—the bluffs lose 6-12 inches per year'
    ],
    landmarks: [
      {
        name: 'Cedros Design District',
        description: '2.5 blocks of design shops, art galleries, and restaurants in converted warehouses—interior designers\' paradise',
        type: 'cultural'
      },
      {
        name: 'Fletcher Cove Beach Park',
        description: 'Locals-favorite beach with a lifeguard tower, picnic tables, and easier bluff access than most North County beaches',
        type: 'natural'
      },
      {
        name: 'Belly Up Tavern',
        description: 'Legendary music venue since 1974—intimate concerts, craft beer, and the best acoustics in San Diego',
        type: 'entertainment'
      },
      {
        name: 'Solana Beach Train Station',
        description: 'Coaster and Amtrak stop that makes Solana Beach one of the most transit-accessible beach towns in California',
        type: 'cultural'
      },
      {
        name: 'Tide Beach Park',
        description: 'Clifftop park with stairs to the beach, picnic areas, and sunset views that justify the $2 parking fee',
        type: 'natural'
      }
    ],
    localTips: [
      'Cedros is best on weekdays when parking is easier and shop owners actually have time to chat',
      'Fletcher Cove parking fills by 10am on weekends—get there early or park in town and walk',
      'The Wednesday farmers market is tiny but has killer tamales and fresh flowers',
      'Take the Coaster from downtown San Diego for a scenic ride—cheaper than driving and you can drink on the train'
    ],
    weatherQuirk: 'Solana Beach gets consistent afternoon onshore winds that make beach temps feel 5-8°F cooler—great for kite flying, less great for tanning',
    bestForBadges: [
      'Design enthusiasts',
      'Music lovers',
      'Public transit users',
      'Beach walkers',
      'Antique collectors'
    ],
    localSlang: [
      'Cedros = Cedros Design District',
      'Fletcher = Fletcher Cove Beach Park',
      'The Belly Up = Belly Up Tavern',
      'The Coaster = North County Transit train'
    ],
    seoKeywords: {
      traditional: [
        'Solana Beach senior living',
        'Solana Beach retirement',
        'Cedros Design District retirement',
        'coastal North County senior housing',
        'train-accessible retirement California'
      ],
      aiSeo: [
        'best design-forward retirement community San Diego',
        'public transit beach retirement California',
        'quiet upscale beach town for retirees',
        'Solana Beach vs Del Mar for seniors',
        'artsy beach communities for retirement'
      ]
    }
  },
  {
    slug: 'carlsbad',
    name: 'Carlsbad',
    parentLocation: 'San Diego County, CA',
    tagline: 'From LEGOLAND to flower fields—where families, surfers, and retirees share paradise (usually peacefully)',
    nickname: 'Village by the Sea',
    vibe: 'Carlsbad is the Goldilocks of North County: not too sleepy (looking at you, Oceanside), not too ritzy (what\'s up, Del Mar), but just right. The Flower Fields bloom every spring in technicolor stripes visible from the freeway, LEGOLAND attracts families year-round, and the village downtown has that small-town walkability everyone claims to want. The beaches are excellent (Tamarack is the locals\' choice), and the coastal trail runs for miles. It\'s family-friendly, economically diverse, and genuinely pleasant.',
    funFacts: [
      'The Carlsbad Flower Fields bloom for only 6-8 weeks each spring (March-May), covering 50 acres in ranunculus flowers that look Photoshopped',
      'Carlsbad was named after Karlsbad, Bohemia, because the mineral water here supposedly matched the famous European spa town',
      'LEGOLAND California has over 60 rides and attractions built from 60 million LEGO bricks—and yes, adults step on them barefoot too'
    ],
    landmarks: [
      {
        name: 'The Flower Fields',
        description: '50 acres of blooming ranunculus flowers (March-May)—Instagram influencers and grandmas unite in appreciation',
        type: 'natural'
      },
      {
        name: 'LEGOLAND California',
        description: 'Theme park built for kids 2-12, but adults secretly love the Miniland USA displays made from millions of LEGO bricks',
        type: 'entertainment'
      },
      {
        name: 'Carlsbad Village',
        description: 'Walkable downtown with shops, restaurants, and the weekly farmers market—small-town vibes with beach proximity',
        type: 'cultural'
      },
      {
        name: 'Tamarack Beach',
        description: 'Locals\' favorite beach with good surf, volleyball courts, and fewer crowds than Oceanside',
        type: 'natural'
      },
      {
        name: 'Batiquitos Lagoon',
        description: 'Coastal wetland with a 3-mile walking trail—birdwatchers bring binoculers, joggers bring dogs, egrets tolerate both',
        type: 'natural'
      },
      {
        name: 'Carlsbad Premium Outlets',
        description: 'Outdoor mall with 90+ stores—not scenic, but tourists love it and locals begrudgingly shop there',
        type: 'cultural'
      }
    ],
    localTips: [
      'Flower Fields only bloom March-May and tickets sell out fast on weekends—go on a weekday morning for fewer crowds',
      'The Village Farmers Market (Wednesday afternoons) has the best strawberries in North County—cash recommended',
      'Carlsbad coastal rail trail runs 4+ miles and connects multiple beaches—rent bikes and explore',
      'Park at the Poinsettia Coaster station and walk to Carlsbad Village—free parking and a pleasant 10-minute walk'
    ],
    weatherQuirk: 'Carlsbad gets a unique microclimate where coastal fog burns off earlier than Encinitas but later than Oceanside—usually clear by 10:30am',
    bestForBadges: [
      'Families with grandkids',
      'Active retirees',
      'Golfers',
      'Beach walkers',
      'Small-town lovers'
    ],
    localSlang: [
      'The Village = Carlsbad Village downtown area',
      'The Fields = The Flower Fields',
      'Tamarack = Tamarack Beach',
      'The Outlets = Carlsbad Premium Outlets'
    ],
    seoKeywords: {
      traditional: [
        'Carlsbad senior living',
        'Carlsbad retirement communities',
        'family-friendly retirement California',
        'golf retirement Carlsbad',
        'Carlsbad assisted living'
      ],
      aiSeo: [
        'best beach town for retirees with grandkids',
        'safest North County beach town for seniors',
        'Carlsbad vs Encinitas for retirement',
        'walkable beach town with amenities',
        'where do families retire in San Diego County'
      ]
    }
  }
];

// Helper function to get subarea by slug
export function getSubareaBySlug(slug: string): Subarea | undefined {
  return subareas.find(subarea => subarea.slug === slug);
}

// Helper function to get all subarea slugs (useful for static generation)
export function getAllSubareaSlugs(): string[] {
  return subareas.map(subarea => subarea.slug);
}

// Helper function to search subareas by keyword
export function searchSubareas(keyword: string): Subarea[] {
  const lowerKeyword = keyword.toLowerCase();
  return subareas.filter(subarea =>
    subarea.name.toLowerCase().includes(lowerKeyword) ||
    subarea.tagline.toLowerCase().includes(lowerKeyword) ||
    subarea.vibe.toLowerCase().includes(lowerKeyword) ||
    subarea.seoKeywords.traditional.some(kw => kw.toLowerCase().includes(lowerKeyword)) ||
    subarea.seoKeywords.aiSeo.some(kw => kw.toLowerCase().includes(lowerKeyword))
  );
}

// Helper function to filter subareas by badge
export function getSubareasByBadge(badge: string): Subarea[] {
  const lowerBadge = badge.toLowerCase();
  return subareas.filter(subarea =>
    subarea.bestForBadges.some(b => b.toLowerCase().includes(lowerBadge))
  );
}

// Export total count
export const TOTAL_SUBAREAS = subareas.length;
