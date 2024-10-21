import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js";

const cities = [
    {
      name: "Paris",
      photo: "https://example.com/paris.jpg",
      country: "France",
      continent: "Europe",
      description: "The city of love, known for its iconic Eiffel Tower, art museums, and romantic atmosphere.",
      currency: "Euro",
      demonym: "Parisian",
      popularPlaces: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      climate: "Temperate"
    },
    {
      name: "New York City",
      photo: "https://example.com/nyc.jpg",
      country: "United States",
      continent: "North America",
      description: "The city that never sleeps, famous for its skyline, Broadway shows, and vibrant culture.",
      currency: "US Dollar",
      demonym: "New Yorker",
      popularPlaces: ["Times Square", "Central Park", "Statue of Liberty"],
      climate: "Humid Subtropical"
    },
    {
      name: "Tokyo",
      photo: "https://example.com/tokyo.jpg",
      country: "Japan",
      continent: "Asia",
      description: "A bustling metropolis blending traditional temples with futuristic skyscrapers.",
      currency: "Japanese Yen",
      demonym: "Tokyoite",
      popularPlaces: ["Shibuya Crossing", "Tokyo Tower", "Asakusa Temple"],
      climate: "Humid Subtropical"
    },
    {
      name: "Sydney",
      photo: "https://example.com/sydney.jpg",
      country: "Australia",
      continent: "Australia",
      description: "Famous for its Opera House, beautiful beaches, and laid-back coastal lifestyle.",
      currency: "Australian Dollar",
      demonym: "Sydneysider",
      popularPlaces: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
      climate: "Temperate"
    },
    {
      name: "Cape Town",
      photo: "https://example.com/capetown.jpg",
      country: "South Africa",
      continent: "Africa",
      description: "A vibrant city with stunning natural landscapes, including Table Mountain and beaches.",
      currency: "South African Rand",
      demonym: "Capetonian",
      popularPlaces: ["Table Mountain", "Robben Island", "V&A Waterfront"],
      climate: "Mediterranean"
    },
    {
      name: "Rio de Janeiro",
      photo: "https://example.com/rio.jpg",
      country: "Brazil",
      continent: "South America",
      description: "Known for its carnival, beautiful beaches, and the iconic Christ the Redeemer statue.",
      currency: "Brazilian Real",
      demonym: "Carioca",
      popularPlaces: ["Copacabana Beach", "Sugarloaf Mountain", "Christ the Redeemer"],
      climate: "Tropical"
    },
    {
      name: "London",
      photo: "https://example.com/london.jpg",
      country: "United Kingdom",
      continent: "Europe",
      description: "A historical city with famous landmarks like Big Ben, Buckingham Palace, and the British Museum.",
      currency: "British Pound",
      demonym: "Londoner",
      popularPlaces: ["Big Ben", "London Eye", "Buckingham Palace"],
      climate: "Oceanic"
    },
    {
      name: "Dubai",
      photo: "https://example.com/dubai.jpg",
      country: "United Arab Emirates",
      continent: "Asia",
      description: "A modern city known for its skyscrapers, luxury shopping, and desert safaris.",
      currency: "UAE Dirham",
      demonym: "Dubaiite",
      popularPlaces: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"],
      climate: "Desert"
    },
    {
      name: "Rome",
      photo: "https://example.com/rome.jpg",
      country: "Italy",
      continent: "Europe",
      description: "A historic city filled with ancient ruins, art, and iconic architecture like the Colosseum.",
      currency: "Euro",
      demonym: "Roman",
      popularPlaces: ["Colosseum", "Vatican City", "Trevi Fountain"],
      climate: "Mediterranean"
    },
    {
      name: "Bangkok",
      photo: "https://example.com/bangkok.jpg",
      country: "Thailand",
      continent: "Asia",
      description: "A city known for its vibrant street life, temples, and bustling markets.",
      currency: "Thai Baht",
      demonym: "Bangkokian",
      popularPlaces: ["Grand Palace", "Wat Arun", "Chatuchak Market"],
      climate: "Tropical"
    },
    {
      name: "Istanbul",
      photo: "https://example.com/istanbul.jpg",
      country: "Turkey",
      continent: "Europe/Asia",
      description: "A city bridging Europe and Asia, rich in history, culture, and stunning architecture.",
      currency: "Turkish Lira",
      demonym: "Istanbulite",
      popularPlaces: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
      climate: "Mediterranean"
    },
    {
      name: "Hong Kong",
      photo: "https://example.com/hongkong.jpg",
      country: "China",
      continent: "Asia",
      description: "A bustling metropolis known for its skyscrapers, vibrant nightlife, and food markets.",
      currency: "Hong Kong Dollar",
      demonym: "Hongkonger",
      popularPlaces: ["Victoria Peak", "Temple Street Night Market", "Lantau Island"],
      climate: "Subtropical"
    },
    {
      name: "Barcelona",
      photo: "https://example.com/barcelona.jpg",
      country: "Spain",
      continent: "Europe",
      description: "A city famous for its art and architecture, including Gaudí’s Sagrada Família.",
      currency: "Euro",
      demonym: "Barcelonian",
      popularPlaces: ["Sagrada Família", "Park Güell", "La Rambla"],
      climate: "Mediterranean"
    },
    {
      name: "Los Angeles",
      photo: "https://example.com/losangeles.jpg",
      country: "United States",
      continent: "North America",
      description: "The entertainment capital, known for Hollywood, beaches, and diverse culture.",
      currency: "US Dollar",
      demonym: "Angeleno",
      popularPlaces: ["Hollywood", "Santa Monica", "Griffith Observatory"],
      climate: "Mediterranean"
    },
    {
      name: "Mexico City",
      photo: "https://example.com/mexicocity.jpg",
      country: "Mexico",
      continent: "North America",
      description: "A bustling city with rich history, colonial architecture, and vibrant street life.",
      currency: "Mexican Peso",
      demonym: "Chilango",
      popularPlaces: ["Zócalo", "Chapultepec Park", "Frida Kahlo Museum"],
      climate: "Subtropical Highland"
    },
    {
      name: "Moscow",
      photo: "https://example.com/moscow.jpg",
      country: "Russia",
      continent: "Europe",
      description: "The capital of Russia, known for its Red Square, historic architecture, and vibrant culture.",
      currency: "Russian Ruble",
      demonym: "Muscovite",
      popularPlaces: ["Red Square", "Kremlin", "St. Basil's Cathedral"],
      climate: "Continental"
    }
  ];

  City.insertMany(cities)
  