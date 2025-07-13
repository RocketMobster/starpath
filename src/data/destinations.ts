import { Destination, SearchFilters } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: "earth",
    name: "Earth",
    type: "planet",
    quadrant: "Alpha",
    sector: "Sector 001",
    system: "Sol System",
    distance: 0,
    population: "9 billion",
    species: ["Human", "Various Federation Species"],
    government: "United Federation of Planets",
    description: "Homeworld of humanity and capital of the United Federation of Planets. Features diverse ecosystems and the prestigious Starfleet Academy.",
    climate: "temperate",
    hazards: "None significant",
    clearanceLevel: "none",
    attractions: [
      "Starfleet Academy",
      "Golden Gate Bridge",
      "United Federation of Planets Headquarters",
      "Eiffel Tower",
      "Great Wall of China"
    ]
  },
  {
    id: "vulcan",
    name: "Vulcan",
    type: "planet",
    quadrant: "Alpha",
    sector: "Sector 004",
    system: "40 Eridani",
    distance: 16.5,
    population: "6 billion",
    species: ["Vulcan"],
    government: "Vulcan High Command",
    description: "Hot, desert world home to the logical Vulcan species. Known for its advanced science academy and ancient spiritual sites.",
    climate: "desert",
    hazards: "Extreme heat, thin atmosphere",
    clearanceLevel: "restricted",
    attractions: [
      "Vulcan Science Academy",
      "Mount Seleya",
      "Forge",
      "T'Karath Sanctuary"
    ]
  },
  {
    id: "risa",
    name: "Risa",
    type: "planet",
    quadrant: "Alpha",
    sector: "Sector 018",
    system: "Risa System",
    distance: 90,
    population: "1.3 billion",
    species: ["Risian"],
    government: "Risian Hospitality Association",
    description: "Famous pleasure planet known for its tropical climate and hospitality. Features artificial weather control and advanced leisure facilities.",
    climate: "tropical",
    hazards: "Occasional weather control malfunctions",
    clearanceLevel: "none",
    attractions: [
      "Suraya Bay",
      "Temtibi Lagoon",
      "Galartha",
      "Risian Pleasure Domes"
    ]
  },
  {
    id: "deep-space-nine",
    name: "Deep Space Nine",
    type: "station",
    quadrant: "Alpha",
    sector: "Bajoran Sector",
    system: "Bajoran System",
    distance: 52.8,
    population: "7,000",
    species: ["Various"],
    government: "Starfleet/Bajoran Joint Administration",
    description: "Strategic space station located near the Bajoran wormhole. Features a vibrant promenade and diverse cultural attractions.",
    climate: "terraformed",
    hazards: "Periodic wormhole activity",
    clearanceLevel: "restricted",
    attractions: [
      "Quark's Bar",
      "Promenade",
      "Bajoran Temple",
      "Holosuites"
    ]
  }
];

export function searchDestinations(query: string, filters: SearchFilters): Destination[] {
  return destinations.filter(dest => {
    const matchesQuery = query === '' || 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase());

    const matchesType = !filters.type || dest.type.toLowerCase() === filters.type.toLowerCase();
    const matchesClimate = !filters.climate || dest.climate.toLowerCase() === filters.climate.toLowerCase();
    const matchesClearance = !filters.clearanceLevel || dest.clearanceLevel.toLowerCase() === filters.clearanceLevel.toLowerCase();

    return matchesQuery && matchesType && matchesClimate && matchesClearance;
  });
}
