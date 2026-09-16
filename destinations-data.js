// Shared destination data used by destination.html (grid + filters)
// and destination-detail.html (individual destination pages)

const destinations = [
  {
    id: "paris",
    name: "Paris, France",
    region: "europe",
    activity: "culture",
    budget: "luxury",
    rating: 4.8,
    price: 1450,
    image: "images/paris.jpg",
    teaser: "Discover the romance of Paris. Visit the Eiffel Tower, stroll along the Seine, explore the Louvre, and enjoy world-class cafés.",
    description: "Paris is one of the world's most visited cities, offering a unique mix of history, culture, and modern elegance. Explore the Eiffel Tower, Notre Dame, and the Louvre Museum, home to the Mona Lisa. Stroll along the Seine, shop on the Champs-Élysées, and enjoy world-class dining and pastries. A city of romance, art, and inspiration — Paris leaves every traveler enchanted.",
    gallery: ["images/paris.jpg", "images/paris.jpg", "images/paris.jpg"],
    mapQuery: "Paris, France",
    itinerary: [
      { day: 1, title: "Arrival & Eiffel Tower", desc: "Settle in, then head straight to the Eiffel Tower for sunset views over the city." },
      { day: 2, title: "Louvre & Seine Cruise", desc: "Spend the morning at the Louvre, then take an evening river cruise along the Seine." },
      { day: 3, title: "Montmartre & Départ", desc: "Wander the artist streets of Montmartre before your departure." }
    ],
    reviews: [
      { name: "Amaka O.", rating: 5, text: "Paris exceeded every expectation — the itinerary balanced sightseeing and relaxation perfectly." },
      { name: "David K.", rating: 4, text: "Beautiful city, well organized trip. Would have liked more free time on day 2." }
    ]
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    region: "asia",
    activity: "relaxation",
    budget: "mid-range",
    rating: 4.9,
    price: 980,
    image: "images/bali.jpg",
    teaser: "Bali – An island paradise where golden beaches meet lush rice terraces and sacred temples whisper stories of peace and spirituality.",
    description: "Bali is a tropical haven that blends natural beauty with rich culture. Relax on stunning beaches, trek through green rice terraces, and dive into vibrant coral reefs. Visit ancient temples like Tanah Lot, join colorful festivals, and experience traditional dance. Bali is also a wellness hub, offering yoga retreats and spas surrounded by serene landscapes. Whether adventure or relaxation, Bali offers the perfect escape.",
    gallery: ["images/bali.jpg", "images/bali.jpg", "images/bali.jpg"],
    mapQuery: "Bali, Indonesia",
    itinerary: [
      { day: 1, title: "Arrival & Ubud Rice Terraces", desc: "Check in, then explore the Tegallalang rice terraces at golden hour." },
      { day: 2, title: "Temples & Spa Day", desc: "Visit Tanah Lot temple in the morning, unwind with a traditional Balinese spa in the afternoon." },
      { day: 3, title: "Beach & Snorkeling", desc: "Spend the day snorkeling the coral reefs off Nusa Dua." }
    ],
    reviews: [
      { name: "Chiamaka R.", rating: 5, text: "The most relaxing trip I've ever taken. The rice terraces were breathtaking." },
      { name: "Femi A.", rating: 5, text: "Perfect mix of culture and beach time. Highly recommend the spa day." }
    ]
  },
  {
    id: "new-york",
    name: "New York City, USA",
    region: "north-america",
    activity: "city",
    budget: "luxury",
    rating: 4.6,
    price: 1600,
    image: "images/new.jpg",
    teaser: "New York – The city that never sleeps, where skyscrapers touch the clouds and every street tells a story of ambition, dreams, and culture.",
    description: "New York City is a vibrant metropolis known for its energy, diversity, and iconic landmarks. Marvel at the Statue of Liberty, stroll through Central Park, and stand in awe at Times Square. Explore world-class museums, Broadway shows, and a food scene that reflects cultures from around the globe. From the Empire State Building to Brooklyn's trendy neighborhoods, New York promises unforgettable experiences for every traveler.",
    gallery: ["images/new.jpg", "images/new.jpg", "images/new.jpg"],
    mapQuery: "New York City, USA",
    itinerary: [
      { day: 1, title: "Times Square & Broadway", desc: "Arrive, explore Times Square, and catch an evening Broadway show." },
      { day: 2, title: "Central Park & Museums", desc: "Morning walk through Central Park, afternoon at the Met." },
      { day: 3, title: "Statue of Liberty & Departure", desc: "Ferry out to Liberty Island before heading to the airport." }
    ],
    reviews: [
      { name: "Ngozi E.", rating: 5, text: "So much packed into 3 days. The Broadway show was the highlight." },
      { name: "Tariq M.", rating: 4, text: "Great trip, though NYC is expensive — budget extra for food." }
    ]
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    region: "middle-east",
    activity: "adventure",
    budget: "luxury",
    rating: 4.7,
    price: 1750,
    image: "images/dubai.jpg",
    teaser: "Dubai – A futuristic desert oasis where modern marvels rise beside golden sands, offering luxury, adventure, and unforgettable experiences.",
    description: "Dubai blends tradition with innovation, making it one of the world's most exciting destinations. See the world's tallest building, the Burj Khalifa, shop in extravagant malls, and enjoy desert safaris under starry skies. Relax on pristine beaches, explore cultural heritage in old Dubai, and experience a nightlife that never stops. From luxury hotels to thrilling theme parks, Dubai offers something for everyone.",
    gallery: ["images/dubai.jpg", "images/dubai.jpg", "images/dubai.jpg"],
    mapQuery: "Dubai, UAE",
    itinerary: [
      { day: 1, title: "Burj Khalifa & Downtown", desc: "Visit the observation deck, then explore the Dubai Fountain at night." },
      { day: 2, title: "Desert Safari", desc: "Dune bashing, camel rides, and a BBQ dinner under the stars." },
      { day: 3, title: "Old Dubai & Souks", desc: "Explore the gold and spice souks before departure." }
    ],
    reviews: [
      { name: "Yusuf B.", rating: 5, text: "The desert safari was unforgettable. Dubai is pure luxury." },
      { name: "Grace I.", rating: 4, text: "Loved it, though it can get very hot — plan accordingly." }
    ]
  },
  {
    id: "cairo",
    name: "Cairo, Egypt",
    region: "africa",
    activity: "history",
    budget: "budget",
    rating: 4.5,
    price: 720,
    image: "images/cairo.jpg",
    teaser: "Cairo – A gateway to the ancient world, where bustling streets meet the timeless wonders of the Pyramids and the Nile.",
    description: "Cairo is Egypt's vibrant capital, rich in history and tradition. Explore the Great Pyramids of Giza and the Sphinx, cruise the Nile River, and discover treasures in the Egyptian Museum. Wander through lively bazaars like Khan El Khalili and savor authentic Egyptian cuisine. Cairo is a city where ancient wonders stand alongside modern life, offering travelers a journey through time.",
    gallery: ["images/cairo.jpg", "images/cairo.jpg", "images/cairo.jpg"],
    mapQuery: "Cairo, Egypt",
    itinerary: [
      { day: 1, title: "Pyramids of Giza & Sphinx", desc: "A full day exploring the Giza plateau." },
      { day: 2, title: "Egyptian Museum & Nile Cruise", desc: "Morning at the museum, evening dinner cruise on the Nile." },
      { day: 3, title: "Khan El Khalili Bazaar", desc: "Shop and eat your way through Cairo's oldest market before departure." }
    ],
    reviews: [
      { name: "Ibrahim S.", rating: 5, text: "Standing in front of the Pyramids was surreal. Incredible value for the price." },
      { name: "Halima N.", rating: 4, text: "Rich history everywhere you look. Bring comfortable shoes!" }
    ]
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    region: "asia",
    activity: "city",
    budget: "mid-range",
    rating: 4.9,
    price: 1350,
    image: "images/tokyo.jpg",
    teaser: "Tokyo – A dazzling fusion of tradition and technology, where neon lights meet tranquil temples and cherry blossoms.",
    description: "Tokyo is Japan's vibrant capital, full of contrasts and experiences. Explore historic shrines like Meiji Jingu, witness the famous Shibuya Crossing, and shop in Harajuku or Akihabara. Taste fresh sushi, see futuristic tech, and relax in traditional gardens. Tokyo is a city where past and future exist side by side.",
    gallery: ["images/tokyo.jpg", "images/tokyo.jpg", "images/tokyo.jpg"],
    mapQuery: "Tokyo, Japan",
    itinerary: [
      { day: 1, title: "Shibuya & Harajuku", desc: "Experience the famous crossing, then explore Harajuku's fashion streets." },
      { day: 2, title: "Meiji Shrine & Akihabara", desc: "Peaceful morning at the shrine, electric afternoon in Akihabara." },
      { day: 3, title: "Tsukiji Market & Departure", desc: "Fresh sushi breakfast before heading to the airport." }
    ],
    reviews: [
      { name: "Kelechi U.", rating: 5, text: "Tokyo is unreal — so clean, so much to see. The sushi was worth the trip alone." },
      { name: "Ahmed T.", rating: 5, text: "Perfectly organized, loved the mix of tradition and tech." }
    ]
  },
  {
    id: "rome",
    name: "Rome, Italy",
    region: "europe",
    activity: "history",
    budget: "mid-range",
    rating: 4.7,
    price: 1150,
    image: "images/rome.jpg",
    teaser: "Rome – The Eternal City, where every street is a museum and history lives in stone, art, and culture.",
    description: "Rome is a city of timeless beauty and heritage. Explore the Colosseum, the Roman Forum, and the Pantheon. Visit Vatican City to see St. Peter's Basilica and the Sistine Chapel. Enjoy authentic pasta, gelato, and espresso in charming piazzas. Rome is a journey through centuries of history and romance.",
    gallery: ["images/rome.jpg", "images/rome.jpg", "images/rome.jpg"],
    mapQuery: "Rome, Italy",
    itinerary: [
      { day: 1, title: "Colosseum & Roman Forum", desc: "Step into ancient Rome with a guided tour of the Colosseum and Forum." },
      { day: 2, title: "Vatican City", desc: "Explore St. Peter's Basilica and the Sistine Chapel." },
      { day: 3, title: "Trastevere & Departure", desc: "Wander the charming streets of Trastevere before departure." }
    ],
    reviews: [
      { name: "Oluwaseun D.", rating: 5, text: "History comes alive in Rome. The Colosseum tour was incredible." },
      { name: "Maria P.", rating: 4, text: "So much to see in so little time — could easily spend a week here." }
    ]
  },
  {
    id: "santorini",
    name: "Santorini, Greece",
    region: "europe",
    activity: "relaxation",
    budget: "luxury",
    rating: 4.9,
    price: 1550,
    image: "images/santorini.jpg",
    teaser: "Santorini – A postcard-perfect island of blue domes, white cliffs, and golden sunsets over the Aegean Sea.",
    description: "Santorini is one of Greece's most beautiful islands. Wander through whitewashed villages like Oia, admire stunning cliffside views, and relax on unique volcanic beaches. Enjoy Mediterranean cuisine, local wines, and breathtaking sunsets. Santorini is the perfect destination for romance, relaxation, and photography lovers.",
    gallery: ["images/santorini.jpg", "images/santorini.jpg", "images/santorini.jpg"],
    mapQuery: "Santorini, Greece",
    itinerary: [
      { day: 1, title: "Oia & Sunset Views", desc: "Settle in and catch the famous Oia sunset in the evening." },
      { day: 2, title: "Volcanic Beaches & Wine Tasting", desc: "Relax on Red Beach, then sample local wines at a clifftop vineyard." },
      { day: 3, title: "Fira & Departure", desc: "Explore the capital's shops and cafés before departure." }
    ],
    reviews: [
      { name: "Aisha F.", rating: 5, text: "The sunsets are even better in person. Best honeymoon spot ever." },
      { name: "Chukwuemeka O.", rating: 5, text: "Worth every penny. Wine tasting with a view was unforgettable." }
    ]
  },
  {
    id: "cape-town",
    name: "Cape Town, South Africa",
    region: "africa",
    activity: "adventure",
    budget: "mid-range",
    rating: 4.8,
    price: 1050,
    image: "images/cape-town.jpg",
    teaser: "Cape Town – Where ocean meets mountain, a city of adventure, wildlife, and breathtaking beauty.",
    description: "Cape Town offers a mix of nature, culture, and history. Hike Table Mountain for panoramic views, visit Robben Island, and explore the Cape of Good Hope. Relax on beautiful beaches and see penguins at Boulders Beach. With vineyards, safaris, and vibrant neighborhoods, Cape Town is a destination full of adventure and charm.",
    gallery: ["images/cape-town.jpg", "images/cape-town.jpg", "images/cape-town.jpg"],
    mapQuery: "Cape Town, South Africa",
    itinerary: [
      { day: 1, title: "Table Mountain", desc: "Cable car up Table Mountain for panoramic views of the city." },
      { day: 2, title: "Cape Point & Boulders Beach", desc: "Drive down to the Cape of Good Hope and see the penguin colony." },
      { day: 3, title: "Robben Island & Departure", desc: "Ferry to Robben Island before heading to the airport." }
    ],
    reviews: [
      { name: "Zainab L.", rating: 5, text: "Table Mountain views were unreal. The penguins were an unexpected highlight." },
      { name: "Kwame B.", rating: 4, text: "Great adventure destination, pack layers — weather changes fast." }
    ]
  },
  {
    id: "london",
    name: "London, UK",
    region: "europe",
    activity: "city",
    budget: "luxury",
    rating: 4.6,
    price: 1400,
    image: "images/london.jpg",
    teaser: "London – A city of history and style, where royal traditions meet modern trends and global culture.",
    description: "London is one of the world's most iconic capitals. Visit Buckingham Palace, Big Ben, and the London Eye. Explore world-class museums, stroll along the Thames, and shop in Covent Garden. With its rich theater scene, diverse food, and famous landmarks, London offers something for everyone.",
    gallery: ["images/london.jpg", "images/london.jpg", "images/london.jpg"],
    mapQuery: "London, UK",
    itinerary: [
      { day: 1, title: "Buckingham Palace & Big Ben", desc: "Catch the Changing of the Guard, then walk to Big Ben and Westminster." },
      { day: 2, title: "Museums & Covent Garden", desc: "Free entry to the British Museum, then shopping in Covent Garden." },
      { day: 3, title: "London Eye & Departure", desc: "Ride the London Eye for skyline views before departure." }
    ],
    reviews: [
      { name: "Folake A.", rating: 4, text: "Classic London experience, well organized. Weather was hit or miss." },
      { name: "James O.", rating: 5, text: "Loved the museums — all free and world class." }
    ]
  },
  {
    id: "maldives",
    name: "Maldives",
    region: "asia",
    activity: "relaxation",
    budget: "luxury",
    rating: 5.0,
    price: 2100,
    image: "images/maldives.jpg",
    teaser: "Maldives – A paradise of turquoise waters, white sands, and luxury escapes in the heart of the Indian Ocean.",
    description: "The Maldives is a dream destination for relaxation and romance. Stay in overwater bungalows, snorkel through coral reefs, and dive into crystal-clear lagoons. Enjoy private beaches, world-class spas, and sunsets over the ocean. Perfect for honeymoons and getaways, the Maldives is pure tropical bliss.",
    gallery: ["images/maldives.jpg", "images/maldives.jpg", "images/maldives.jpg"],
    mapQuery: "Maldives",
    itinerary: [
      { day: 1, title: "Arrival & Overwater Bungalow", desc: "Speedboat transfer to your resort, evening at leisure." },
      { day: 2, title: "Snorkeling & Spa", desc: "Morning snorkel trip to the reef, afternoon spa treatment." },
      { day: 3, title: "Sunset Cruise & Departure", desc: "Dolphin-watching sunset cruise before departure." }
    ],
    reviews: [
      { name: "Fatima R.", rating: 5, text: "Absolute paradise. Worth saving up for — best trip of my life." },
      { name: "Michael C.", rating: 5, text: "The overwater bungalow was a dream. Perfect honeymoon." }
    ]
  },
  {
    id: "lagos",
    name: "Lagos, Nigeria",
    region: "africa",
    activity: "city",
    budget: "budget",
    rating: 4.4,
    price: 550,
    image: "images/lagos.jpg",
    teaser: "Lagos – Nigeria's vibrant heartbeat, where culture, music, and endless energy meet golden beaches and modern city life.",
    description: "Lagos is Nigeria's largest city and a hub of art, music, and business. Explore lively markets like Balogun, relax at beaches such as Tarkwa Bay and Elegushi, and enjoy the nightlife that keeps the city alive till dawn. Visit the National Museum, Lekki Conservation Centre, and Victoria Island for a taste of both tradition and modern living. Known for Afrobeats, fashion, and its unstoppable energy, Lagos is a city that never slows down.",
    gallery: ["images/lagos.jpg", "images/lagos.jpg", "images/lagos.jpg"],
    mapQuery: "Lagos, Nigeria",
    itinerary: [
      { day: 1, title: "Lekki Conservation Centre", desc: "Canopy walk and nature trail in the morning." },
      { day: 2, title: "Balogun Market & Victoria Island", desc: "Shop the markets, then explore Victoria Island in the evening." },
      { day: 3, title: "Tarkwa Bay Beach & Departure", desc: "Boat ride to Tarkwa Bay before your flight." }
    ],
    reviews: [
      { name: "Bisi T.", rating: 5, text: "Lagos energy is unmatched. The nightlife and food scene are incredible." },
      { name: "Emeka N.", rating: 4, text: "Great value trip, loved the beaches and the music culture." }
    ]
  }
];
