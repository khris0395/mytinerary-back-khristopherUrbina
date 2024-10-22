import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js";

const cities = [
    {
      name: "Paris",
      photo: "https://cdn.pixabay.com/photo/2018/12/17/18/53/paris-3881047_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2019/07/21/07/12/new-york-4352072_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2019/04/20/11/39/japan-4141579_960_720.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2019/03/24/21/52/sydney-4078776_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2018/07/18/09/23/cape-town-city-bowl-3545921_960_720.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2019/07/19/05/40/rio-4348017_960_720.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2017/10/18/14/54/london-eye-2864410_960_720.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045035_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2016/11/05/08/31/rome-1799670_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2010/11/29/thailand-422_960_720.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2013/11/23/18/40/hagia-sophia-216471_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2018/12/02/14/53/hong-kong-3851342_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2016/03/24/07/31/spain-1276209_1280.jpg",
      country: "Spain",
      continent: "Europe",
      description: "A city famous for its art and architecture, including Gaudí's Sagrada Família.",
      currency: "Euro",
      demonym: "Barcelonian",
      popularPlaces: ["Sagrada Família", "Park Güell", "La Rambla"],
      climate: "Mediterranean"
    },
    {
      name: "Los Angeles",
      photo: "https://cdn.pixabay.com/photo/2014/10/22/17/34/los-angeles-498285_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2020/03/11/06/39/statue-4921193_1280.jpg",
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
      photo: "https://cdn.pixabay.com/photo/2020/02/09/17/21/moscow-4833906_1280.jpg",
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
  