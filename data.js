// ============================================
// DATOS - MUNDIAL 2026
// ============================================

// ESTADIOS DEL MUNDIAL 2026
const STADIUMS = [
  {
    id: 1,
    name: "Estadio Azteca",
    city: "Ciudad de México",
    country: "México",
    capacity: 87506,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    founded: 1966,
    team: "Cruz Azul",
    surface: "Grass",
    coordinates: { lat: 19.3064, lng: -99.1611 }
  },
  {
    id: 2,
    name: "Estadio Akrón",
    city: "Guadalajara",
    country: "México",
    capacity: 46407,
    image: "https://images.unsplash.com/photo-1600297506203-80ae5a26e63e?w=500",
    founded: 2010,
    team: "Chivas",
    surface: "Grass",
    coordinates: { lat: 20.6842, lng: -103.3544 }
  },
  {
    id: 3,
    name: "Estadio BBVA",
    city: "Monterrey",
    country: "México",
    capacity: 72711,
    image: "https://images.unsplash.com/photo-1593077835486-aec62b8d4321?w=500",
    founded: 2007,
    team: "Monterrey",
    surface: "Grass",
    coordinates: { lat: 25.6814, lng: -100.3161 }
  },
  {
    id: 4,
    name: "MetLife Stadium",
    city: "East Rutherford, Nueva Jersey",
    country: "USA",
    capacity: 82500,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500",
    founded: 2010,
    team: "Giants, Jets",
    surface: "Artificial",
    coordinates: { lat: 40.8135, lng: -74.0745 }
  },
  {
    id: 5,
    name: "SoFi Stadium",
    city: "Inglewood, Los Ángeles",
    country: "USA",
    capacity: 70240,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    founded: 2020,
    team: "Rams, Chargers",
    surface: "Grass",
    coordinates: { lat: 33.9537, lng: -118.3383 }
  },
  {
    id: 6,
    name: "AT&T Stadium",
    city: "Arlington, Dallas",
    country: "USA",
    capacity: 80000,
    image: "https://images.unsplash.com/photo-1600297506203-80ae5a26e63e?w=500",
    founded: 2009,
    team: "Dallas Cowboys",
    surface: "Grass",
    coordinates: { lat: 32.8975, lng: -97.0081 }
  },
  {
    id: 7,
    name: "NRG Stadium",
    city: "Houston",
    country: "USA",
    capacity: 72220,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    founded: 2002,
    team: "Texans",
    surface: "Grass",
    coordinates: { lat: 29.6847, lng: -95.4107 }
  },
  {
    id: 8,
    name: "BMO Field",
    city: "Toronto",
    country: "Canadá",
    capacity: 30981,
    image: "https://images.unsplash.com/photo-1570366421903-6d1688de1526?w=500",
    founded: 1999,
    team: "Toronto FC",
    surface: "Grass",
    coordinates: { lat: 43.6325, lng: -79.4189 }
  },
  {
    id: 9,
    name: "BC Place",
    city: "Vancouver",
    country: "Canadá",
    capacity: 54500,
    image: "https://images.unsplash.com/photo-1600297506203-80ae5a26e63e?w=500",
    founded: 1983,
    team: "Whitecaps",
    surface: "Grass",
    coordinates: { lat: 49.2766, lng: -123.1113 }
  },
  {
    id: 10,
    name: "Levi's Stadium",
    city: "Santa Clara, San Francisco",
    country: "USA",
    capacity: 75000,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    founded: 2014,
    team: "49ers",
    surface: "Grass",
    coordinates: { lat: 37.4047, lng: -121.9714 }
  },
  {
    id: 11,
    name: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    capacity: 70000,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    founded: 2017,
    team: "Falcons",
    surface: "Grass",
    coordinates: { lat: 33.7551, lng: -84.4011 }
  },
  {
    id: 12,
    name: "Gillette Stadium",
    city: "Foxborough, Boston",
    country: "USA",
    capacity: 65878,
    image: "https://images.unsplash.com/photo-1600297506203-80ae5a26e63e?w=500",
    founded: 2002,
    team: "Patriots",
    surface: "Grass",
    coordinates: { lat: 42.0908, lng: -71.2643 }
  },
  {
    id: 13,
    name: "Lincoln Financial Field",
    city: "Filadelfia",
    country: "USA",
    capacity: 69596,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    founded: 2003,
    team: "Eagles",
    surface: "Grass",
    coordinates: { lat: 39.9012, lng: -75.1673 }
  },
  {
    id: 14,
    name: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    capacity: 76416,
    image: "https://images.unsplash.com/photo-1570366421903-6d1688de1526?w=500",
    founded: 1972,
    team: "Chiefs",
    surface: "Grass",
    coordinates: { lat: 39.0489, lng: -94.4835 }
  },
  {
    id: 15,
    name: "Lumen Field",
    city: "Seattle",
    country: "USA",
    capacity: 68798,
    image: "https://images.unsplash.com/photo-1600297506203-80ae5a26e63e?w=500",
    founded: 2002,
    team: "Seahawks",
    surface: "Grass",
    coordinates: { lat: 47.5952, lng: -122.3316 }
  },
  {
    id: 16,
    name: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    capacity: 65326,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500",
    founded: 1987,
    team: "Dolphins",
    surface: "Grass",
    coordinates: { lat: 25.9581, lng: -80.2389 }
  }
];

// GRUPOS Y PARTIDOS
const MUNDIAL_DATA = {
  groups: {
    A: {
      name: "Grupo A",
      teams: ["México", "Sudáfrica", "Corea del Sur", "República Checa"],
      matches: [
        { id: 1, home: "México", away: "Sudáfrica", stadium: "Estadio Azteca", city: "Ciudad de México", country: "México", date: "2026-06-11", time: "15:00" },
        { id: 2, home: "Corea del Sur", away: "República Checa", stadium: "Estadio Akrón", city: "Guadalajara", country: "México", date: "2026-06-11", time: "22:00" },
        { id: 3, home: "República Checa", away: "Sudáfrica", stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", date: "2026-06-18", time: "17:00" },
        { id: 4, home: "México", away: "Corea del Sur", stadium: "Estadio Akrón", city: "Guadalajara", country: "México", date: "2026-06-18", time: "21:00" },
        { id: 5, home: "República Checa", away: "México", stadium: "Estadio Azteca", city: "Ciudad de México", country: "México", date: "2026-06-24", time: "21:00" },
        { id: 6, home: "Sudáfrica", away: "Corea del Sur", stadium: "Estadio BBVA", city: "Monterrey", country: "México", date: "2026-06-24", time: "21:00" }
      ]
    },
    B: {
      name: "Grupo B",
      teams: ["Canadá", "Bosnia y Herzegovina", "Qatar", "Suiza"],
      matches: [
        { id: 7, home: "Canadá", away: "Bosnia y Herzegovina", stadium: "BMO Field", city: "Toronto", country: "Canadá", date: "2026-06-12", time: "19:00" },
        { id: 8, home: "Qatar", away: "Suiza", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-13", time: "18:00" },
        { id: 9, home: "Suiza", away: "Bosnia y Herzegovina", stadium: "SoFi Stadium", city: "Los Ángeles", country: "USA", date: "2026-06-18", time: "18:00" },
        { id: 10, home: "Canadá", away: "Qatar", stadium: "BC Place", city: "Vancouver", country: "Canadá", date: "2026-06-18", time: "21:00" },
        { id: 11, home: "Suiza", away: "Canadá", stadium: "BC Place", city: "Vancouver", country: "Canadá", date: "2026-06-24", time: "18:00" },
        { id: 12, home: "Bosnia y Herzegovina", away: "Qatar", stadium: "Lumen Field", city: "Seattle", country: "USA", date: "2026-06-24", time: "20:00" }
      ]
    },
    C: {
      name: "Grupo C",
      teams: ["Brasil", "Marruecos", "Haití", "Escocia"],
      matches: [
        { id: 13, home: "Brasil", away: "Marruecos", stadium: "MetLife Stadium", city: "Nueva Jersey", country: "USA", date: "2026-06-13", time: "19:00" },
        { id: 14, home: "Haití", away: "Escocia", stadium: "Gillette Stadium", city: "Boston", country: "USA", date: "2026-06-13", time: "21:00" },
        { id: 15, home: "Escocia", away: "Marruecos", stadium: "Gillette Stadium", city: "Boston", country: "USA", date: "2026-06-19", time: "19:00" },
        { id: 16, home: "Brasil", away: "Haití", stadium: "Lincoln Financial Field", city: "Filadelfia", country: "USA", date: "2026-06-19", time: "21:00" },
        { id: 17, home: "Escocia", away: "Brasil", stadium: "Hard Rock Stadium", city: "Miami", country: "USA", date: "2026-06-24", time: "19:00" },
        { id: 18, home: "Marruecos", away: "Haití", stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", date: "2026-06-24", time: "19:00" }
      ]
    },
    D: {
      name: "Grupo D",
      teams: ["Estados Unidos", "Paraguay", "Australia", "Turquía"],
      matches: [
        { id: 19, home: "Estados Unidos", away: "Paraguay", stadium: "SoFi Stadium", city: "Los Ángeles", country: "USA", date: "2026-06-12", time: "21:00" },
        { id: 20, home: "Australia", away: "Turquía", stadium: "BC Place", city: "Vancouver", country: "Canadá", date: "2026-06-13", time: "00:00" },
        { id: 21, home: "Turquía", away: "Paraguay", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-19", time: "08:00" },
        { id: 22, home: "Estados Unidos", away: "Australia", stadium: "Lumen Field", city: "Seattle", country: "USA", date: "2026-06-19", time: "18:00" },
        { id: 23, home: "Turquía", away: "Estados Unidos", stadium: "SoFi Stadium", city: "Los Ángeles", country: "USA", date: "2026-06-25", time: "22:00" },
        { id: 24, home: "Paraguay", away: "Australia", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-25", time: "22:00" }
      ]
    },
    E: {
      name: "Grupo E",
      teams: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
      matches: [
        { id: 25, home: "Alemania", away: "Curazao", stadium: "NRG Stadium", city: "Houston", country: "USA", date: "2026-06-14", time: "18:00" },
        { id: 26, home: "Costa de Marfil", away: "Ecuador", stadium: "Lincoln Financial Field", city: "Filadelfia", country: "USA", date: "2026-06-14", time: "20:00" },
        { id: 27, home: "Alemania", away: "Costa de Marfil", stadium: "BMO Field", city: "Toronto", country: "Canadá", date: "2026-06-20", time: "19:00" },
        { id: 28, home: "Ecuador", away: "Curazao", stadium: "Arrowhead Stadium", city: "Kansas City", country: "USA", date: "2026-06-20", time: "20:00" },
        { id: 29, home: "Ecuador", away: "Alemania", stadium: "MetLife Stadium", city: "Nueva Jersey", country: "USA", date: "2026-06-25", time: "19:00" },
        { id: 30, home: "Curazao", away: "Costa de Marfil", stadium: "Lincoln Financial Field", city: "Filadelfia", country: "USA", date: "2026-06-25", time: "19:00" }
      ]
    },
    F: {
      name: "Grupo F",
      teams: ["Países Bajos", "Japón", "Suecia", "Túnez"],
      matches: [
        { id: 31, home: "Países Bajos", away: "Japón", stadium: "AT&T Stadium", city: "Dallas", country: "USA", date: "2026-06-14", time: "17:00" },
        { id: 32, home: "Suecia", away: "Túnez", stadium: "Estadio BBVA", city: "Monterrey", country: "México", date: "2026-06-14", time: "22:00" },
        { id: 33, home: "Países Bajos", away: "Suecia", stadium: "NRG Stadium", city: "Houston", country: "USA", date: "2026-06-20", time: "18:00" },
        { id: 34, home: "Japón", away: "Túnez", stadium: "AT&T Stadium", city: "Dallas", country: "USA", date: "2026-06-20", time: "20:00" },
        { id: 35, home: "Suecia", away: "Japón", stadium: "NRG Stadium", city: "Houston", country: "USA", date: "2026-06-26", time: "18:00" },
        { id: 36, home: "Túnez", away: "Países Bajos", stadium: "AT&T Stadium", city: "Dallas", country: "USA", date: "2026-06-26", time: "20:00" }
      ]
    },
    G: {
      name: "Grupo G",
      teams: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
      matches: [
        { id: 37, home: "Bélgica", away: "Egipto", stadium: "Snapdragon Stadium", city: "San Diego", country: "USA", date: "2026-06-15", time: "17:00" },
        { id: 38, home: "Irán", away: "Nueva Zelanda", stadium: "Empower Field", city: "Denver", country: "USA", date: "2026-06-15", time: "21:00" },
        { id: 39, home: "Bélgica", away: "Irán", stadium: "Caesars Superdome", city: "Nueva Orleans", country: "USA", date: "2026-06-21", time: "19:00" },
        { id: 40, home: "Egipto", away: "Nueva Zelanda", stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", date: "2026-06-21", time: "21:00" },
        { id: 41, home: "Nueva Zelanda", away: "Bélgica", stadium: "Snapdragon Stadium", city: "San Diego", country: "USA", date: "2026-06-26", time: "17:00" },
        { id: 42, home: "Egipto", away: "Irán", stadium: "Empower Field", city: "Denver", country: "USA", date: "2026-06-26", time: "21:00" }
      ]
    },
    H: {
      name: "Grupo H",
      teams: ["España", "Cabo Verde", "Arabia Saudita", "Uruguay"],
      matches: [
        { id: 43, home: "España", away: "Cabo Verde", stadium: "Empower Field", city: "Denver", country: "USA", date: "2026-06-15", time: "19:00" },
        { id: 44, home: "Arabia Saudita", away: "Uruguay", stadium: "Snapdragon Stadium", city: "San Diego", country: "USA", date: "2026-06-16", time: "17:00" },
        { id: 45, home: "Arabia Saudita", away: "Cabo Verde", stadium: "Snapdragon Stadium", city: "San Diego", country: "USA", date: "2026-06-21", time: "17:00" },
        { id: 46, home: "España", away: "Uruguay", stadium: "Caesars Superdome", city: "Nueva Orleans", country: "USA", date: "2026-06-22", time: "19:00" },
        { id: 47, home: "Uruguay", away: "España", stadium: "Empower Field", city: "Denver", country: "USA", date: "2026-06-27", time: "19:00" },
        { id: 48, home: "Cabo Verde", away: "Arabia Saudita", stadium: "Snapdragon Stadium", city: "San Diego", country: "USA", date: "2026-06-27", time: "21:00" }
      ]
    },
    I: {
      name: "Grupo I",
      teams: ["Francia", "Senegal", "Irak", "Noruega"],
      matches: [
        { id: 49, home: "Francia", away: "Senegal", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-16", time: "19:00" },
        { id: 50, home: "Irak", away: "Noruega", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-17", time: "22:00" },
        { id: 51, home: "Irak", away: "Senegal", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-23", time: "18:00" },
        { id: 52, home: "Francia", away: "Noruega", stadium: "Caesars Superdome", city: "Nueva Orleans", country: "USA", date: "2026-06-23", time: "20:00" },
        { id: 53, home: "Noruega", away: "Senegal", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-28", time: "18:00" },
        { id: 54, home: "Senegal", away: "Francia", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-28", time: "20:00" }
      ]
    },
    J: {
      name: "Grupo J",
      teams: ["Argentina", "Argelia", "Austria", "Jordania"],
      matches: [
        { id: 55, home: "Argentina", away: "Argelia", stadium: "Levi's Stadium", city: "San Francisco", country: "USA", date: "2026-06-16", time: "21:00" },
        { id: 56, home: "Austria", away: "Jordania", stadium: "Arrowhead Stadium", city: "Kansas City", country: "USA", date: "2026-06-17", time: "20:00" },
        { id: 57, home: "Argentina", away: "Austria", stadium: "Estadio Azteca", city: "Ciudad de México", country: "México", date: "2026-06-22", time: "21:00" },
        { id: 58, home: "Jordania", away: "Argelia", stadium: "Empower Field", city: "Denver", country: "USA", date: "2026-06-22", time: "21:00" },
        { id: 59, home: "Argelia", away: "Austria", stadium: "Arrowhead Stadium", city: "Kansas City", country: "USA", date: "2026-06-27", time: "20:00" },
        { id: 60, home: "Jordania", away: "Argentina", stadium: "AT&T Stadium", city: "Dallas", country: "USA", date: "2026-06-27", time: "20:00" }
      ]
    },
    K: {
      name: "Grupo K",
      teams: ["Portugal", "RD Congo", "Uzbekistán", "Colombia"],
      matches: [
        { id: 61, home: "Portugal", away: "RD Congo", stadium: "NRG Stadium", city: "Houston", country: "USA", date: "2026-06-17", time: "18:00" },
        { id: 62, home: "Uzbekistán", away: "Colombia", stadium: "Estadio Azteca", city: "Ciudad de México", country: "México", date: "2026-06-17", time: "20:00" },
        { id: 63, home: "Portugal", away: "Uzbekistán", stadium: "NRG Stadium", city: "Houston", country: "USA", date: "2026-06-23", time: "18:00" },
        { id: 64, home: "RD Congo", away: "Colombia", stadium: "Estadio Akrón", city: "Guadalajara", country: "México", date: "2026-06-23", time: "20:00" },
        { id: 65, home: "Colombia", away: "Portugal", stadium: "Hard Rock Stadium", city: "Miami", country: "USA", date: "2026-06-27", time: "19:00" },
        { id: 66, home: "RD Congo", away: "Uzbekistán", stadium: "Mercedes-Benz Stadium", city: "Atlanta", country: "USA", date: "2026-06-27", time: "19:00" }
      ]
    },
    L: {
      name: "Grupo L",
      teams: ["Inglaterra", "Croacia", "Ghana", "Panamá"],
      matches: [
        { id: 67, home: "Inglaterra", away: "Croacia", stadium: "AT&T Stadium", city: "Dallas", country: "USA", date: "2026-06-17", time: "17:00" },
        { id: 68, home: "Ghana", away: "Panamá", stadium: "BMO Field", city: "Toronto", country: "Canadá", date: "2026-06-17", time: "19:00" },
        { id: 69, home: "Inglaterra", away: "Ghana", stadium: "Gillette Stadium", city: "Boston", country: "USA", date: "2026-06-23", time: "19:00" },
        { id: 70, home: "Panamá", away: "Croacia", stadium: "BMO Field", city: "Toronto", country: "Canadá", date: "2026-06-23", time: "19:00" },
        { id: 71, home: "Panamá", away: "Inglaterra", stadium: "MetLife Stadium", city: "Nueva Jersey", country: "USA", date: "2026-06-27", time: "18:00" },
        { id: 72, home: "Croacia", away: "Ghana", stadium: "Lincoln Financial Field", city: "Filadelfia", country: "USA", date: "2026-06-27", time: "18:00" }
      ]
    }
  },
  knockout: {
    ro16: {
      name: "16vos de Final",
      matches: Array.from({ length: 8 }, (_, i) => ({
        id: 73 + i,
        home: "TBD",
        away: "TBD",
        stadium: "TBD",
        city: "TBD",
        country: "USA",
        date: "2026-06-28 a 2026-07-01"
      }))
    },
    quarters: {
      name: "Cuartos de Final",
      matches: Array.from({ length: 4 }, (_, i) => ({
        id: 81 + i,
        home: "TBD",
        away: "TBD",
        stadium: "TBD",
        city: "TBD",
        country: "USA",
        date: "2026-07-04 a 2026-07-05"
      }))
    },
    semis: {
      name: "Semifinales",
      matches: Array.from({ length: 2 }, (_, i) => ({
        id: 85 + i,
        home: "TBD",
        away: "TBD",
        stadium: "TBD",
        city: "TBD",
        country: "USA",
        date: "2026-07-08 a 2026-07-09"
      }))
    },
    final: {
      name: "Final",
      matches: [
        {
          id: 87,
          home: "TBD",
          away: "TBD",
          stadium: "MetLife Stadium",
          city: "Nueva Jersey",
          country: "USA",
          date: "2026-07-19"
        }
      ]
    },
    "3rd": {
      name: "Tercer Lugar",
      matches: [
        {
          id: 88,
          home: "TBD",
          away: "TBD",
          stadium: "Hard Rock Stadium",
          city: "Miami",
          country: "USA",
          date: "2026-07-18"
        }
      ]
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STADIUMS, MUNDIAL_DATA };
}
