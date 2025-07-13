import { Destination, SearchFilters } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    climate: 'temperate',
    population: 9000000000,
    federationStatus: 'member',
    coordinates: {
      x: 0,
      y: 0,
      z: 0,
      sector: 'Sector 001',
      quadrant: 'Alpha'
    },
    description: 'Federation headquarters and humanity\'s homeworld. A diverse Class M planet with significant historical importance.',
    amenities: ['Starfleet Academy', 'Federation Council', 'Various Historical Sites'],
    lastVisited: '47634.44'
  },
  {
    id: 'vulcan',
    name: 'Vulcan',
    type: 'planet',
    climate: 'desert',
    population: 6000000000,
    federationStatus: 'member',
    coordinates: {
      x: 16.5,
      y: 3.2,
      z: -2.1,
      sector: 'Sector 002',
      quadrant: 'Alpha'
    },
    description: 'Homeworld of the Vulcan species. Known for its harsh desert climate and logical inhabitants.',
    amenities: ['Vulcan Science Academy', 'Mount Seleya', 'ShiKahr City'],
    lastVisited: '47612.33'
  },
  {
    id: 'ds9',
    name: 'Deep Space Nine',
    type: 'station',
    climate: 'terraformed',
    population: 300000,
    federationStatus: 'member',
    coordinates: {
      x: -55.2,
      y: 28.7,
      z: 15.3,
      sector: 'Bajoran Sector',
      quadrant: 'Alpha'
    },
    description: 'Former Cardassian station, now a vital Federation outpost near the Bajoran wormhole.',
    amenities: ['Promenade', 'Quark\'s Bar', 'Bajoran Temple'],
    warnings: ['Proximity to Bajoran Wormhole may cause temporal anomalies'],
    lastVisited: '47623.15'
  },
  {
    id: 'risa',
    name: 'Risa',
    type: 'planet',
    climate: 'tropical',
    population: 2000000000,
    federationStatus: 'member',
    coordinates: {
      x: 83.2,
      y: -12.8,
      z: 5.4,
      sector: 'Risan Sector',
      quadrant: 'Alpha'
    },
    description: 'Known throughout the galaxy as a pleasure planet with perfect weather control.',
    amenities: ['Weather Control Network', 'Tropical Resorts', 'Suraya Bay', 'Temtibi Lagoon'],
    lastVisited: '47589.21'
  },
  {
    id: 'qonos',
    name: 'Qo\'noS',
    type: 'planet',
    climate: 'temperate',
    population: 7000000000,
    federationStatus: 'ally',
    coordinates: {
      x: -95.3,
      y: 43.7,
      z: -22.1,
      sector: 'Klingon Sector',
      quadrant: 'Beta'
    },
    description: 'Homeworld of the Klingon Empire. Features rugged terrain and industrial cities.',
    amenities: ['Great Hall', 'First City', 'Klingon Defense Force Academy'],
    warnings: ['Political tensions may affect travel'],
    lastVisited: '47601.78'
  },
  {
    id: 'starbase1',
    name: 'Starbase 1',
    type: 'starbase',
    climate: 'terraformed',
    population: 150000,
    federationStatus: 'member',
    coordinates: {
      x: 2.1,
      y: 1.4,
      z: -0.8,
      sector: 'Sector 001',
      quadrant: 'Alpha'
    },
    description: 'Primary starbase in Earth orbit. Serves as a major command center and spacedock facility.',
    amenities: ['Command Operations', 'Spacedock', 'Officer Training Facilities'],
    lastVisited: '47633.12'
  },
  {
    id: 'starbase375',
    name: 'Starbase 375',
    type: 'starbase',
    climate: 'terraformed',
    population: 85000,
    federationStatus: 'member',
    coordinates: {
      x: -42.3,
      y: 15.7,
      z: 8.9,
      sector: 'Sector 375',
      quadrant: 'Alpha'
    },
    description: 'Strategic command post during the Dominion War. Features extensive defensive capabilities.',
    amenities: ['Fleet Operations Center', 'Defense Command', 'Medical Facilities'],
    warnings: ['High Security Clearance Required'],
    lastVisited: '47612.88'
  },
  {
    id: 'jupiterstation',
    name: 'Jupiter Station',
    type: 'station',
    climate: 'terraformed',
    population: 25000,
    federationStatus: 'member',
    coordinates: {
      x: 0.5,
      y: 0.2,
      z: -0.1,
      sector: 'Sector 001',
      quadrant: 'Alpha'
    },
    description: 'Research and development facility in Jupiter orbit. Home to advanced holographic research.',
    amenities: ['Holographic Research Lab', 'Spacecraft Design Center', 'Training Facilities'],
    lastVisited: '47621.54'
  },
  {
    id: 'utopia_planitia',
    name: 'Utopia Planitia Fleet Yards',
    type: 'station',
    climate: 'terraformed',
    population: 75000,
    federationStatus: 'member',
    coordinates: {
      x: 0.3,
      y: 0.1,
      z: 0.2,
      sector: 'Sector 001',
      quadrant: 'Alpha'
    },
    description: 'Primary shipbuilding facility of Starfleet, located in Mars orbit.',
    amenities: ['Shipyards', 'Engineering Labs', 'Crew Training Center'],
    lastVisited: '47599.33'
  },
  {
    id: 'regula1',
    name: 'Regula 1',
    type: 'station',
    climate: 'terraformed',
    population: 5000,
    federationStatus: 'member',
    coordinates: {
      x: 12.4,
      y: -8.9,
      z: 3.2,
      sector: 'Mutara Sector',
      quadrant: 'Alpha'
    },
    description: 'Scientific research station known for Genesis Project developments.',
    amenities: ['Research Labs', 'Living Quarters', 'Genesis Cave Museum'],
    warnings: ['Historical Site - Limited Access'],
    lastVisited: '47602.21'
  },
  {
    id: 'k7',
    name: 'Deep Space Station K-7',
    type: 'station',
    climate: 'terraformed',
    population: 15000,
    federationStatus: 'member',
    coordinates: {
      x: -85.6,
      y: 32.1,
      z: -12.4,
      sector: 'Sherman\'s Planet Sector',
      quadrant: 'Beta'
    },
    description: 'Commercial space station near Sherman\'s Planet. Famous for the tribble incident.',
    amenities: ['Trading Post', 'Diplomatic Offices', 'Historical Museum'],
    warnings: ['Tribble containment protocols in effect'],
    lastVisited: '47588.67'
  },
  {
    id: 'starbase11',
    name: 'Starbase 11',
    type: 'starbase',
    climate: 'terraformed',
    population: 95000,
    federationStatus: 'member',
    coordinates: {
      x: 28.7,
      y: -15.3,
      z: 6.8,
      sector: 'Sector 011',
      quadrant: 'Alpha'
    },
    description: 'Major repair and maintenance facility. Houses important legal offices and detention facilities.',
    amenities: ['Starship Repair Facilities', 'Legal Offices', 'Medical Center'],
    lastVisited: '47615.99'
  },
  {
    id: 'yorktown',
    name: 'Starbase Yorktown',
    type: 'starbase',
    climate: 'terraformed',
    population: 1000000,
    federationStatus: 'member',
    coordinates: {
      x: -145.2,
      y: 78.9,
      z: -34.6,
      sector: 'Yorktown Sector',
      quadrant: 'Alpha'
    },
    description: 'Most advanced Federation starbase. Massive snowglobe-like structure with artificial gravity throughout.',
    amenities: ['Central Plaza', 'Diplomatic Quarter', 'Advanced Medical Facilities', 'Recreation Deck'],
    lastVisited: '47644.21'
  },
  {
    id: 'mckinely',
    name: 'McKinley Station',
    type: 'station',
    climate: 'terraformed',
    population: 45000,
    federationStatus: 'member',
    coordinates: {
      x: 0.2,
      y: 0.3,
      z: 0.1,
      sector: 'Sector 001',
      quadrant: 'Alpha'
    },
    description: 'Earth orbital facility specializing in starship maintenance and repairs.',
    amenities: ['Repair Docks', 'Engineering Labs', 'Crew Recreation Facilities'],
    lastVisited: '47631.78'
  },

  // Additional Federation Worlds
  {
    id: 'andoria',
    name: 'Andoria',
    type: 'planet',
    climate: 'arctic',
    population: 4000000000,
    federationStatus: 'member',
    coordinates: {
      x: 25.4,
      y: -12.8,
      z: 7.9,
      sector: 'Andorian Sector',
      quadrant: 'Beta'
    },
    description: 'Icy homeworld of the Andorian species. Located in a binary star system.',
    amenities: ['Underground Cities', 'Imperial Guard Academy', 'Ice Caves'],
    lastVisited: '47589.33'
  },
  {
    id: 'betazed',
    name: 'Betazed',
    type: 'planet',
    climate: 'temperate',
    population: 5200000000,
    federationStatus: 'member',
    coordinates: {
      x: 52.7,
      y: -28.3,
      z: 15.6,
      sector: 'Betazed Sector',
      quadrant: 'Alpha'
    },
    description: 'Homeworld of the telepathic Betazoid species. Known for its beautiful landscapes and peaceful society.',
    amenities: ['University of Betazed', 'Sacred Chalice Museum', 'Meditation Centers'],
    lastVisited: '47601.45'
  },
  {
    id: 'trill',
    name: 'Trill',
    type: 'planet',
    climate: 'temperate',
    population: 4800000000,
    federationStatus: 'member',
    coordinates: {
      x: 38.9,
      y: -15.7,
      z: 8.3,
      sector: 'Trill Sector',
      quadrant: 'Alpha'
    },
    description: 'Homeworld of the joined Trill species. Center of symbiont research and joining ceremonies.',
    amenities: ['Symbiosis Commission', 'Caves of Mak\'ala', 'Historical Archives'],
    lastVisited: '47622.88'
  },
  
  // Non-Federation Major Powers
  {
    id: 'romulus',
    name: 'Romulus',
    type: 'planet',
    climate: 'temperate',
    population: 8500000000,
    federationStatus: 'neutral',
    coordinates: {
      x: -178.3,
      y: 85.6,
      z: -42.1,
      sector: 'Romulan Star Empire',
      quadrant: 'Beta'
    },
    description: 'Capital of the Romulan Star Empire. High security and restricted access.',
    amenities: ['Senate Buildings', 'Imperial War Museum', 'Diplomatic Quarter'],
    warnings: ['Restricted Access - Diplomatic Clearance Required'],
    lastVisited: '47599.67'
  },
  {
    id: 'ferenginar',
    name: 'Ferenginar',
    type: 'planet',
    climate: 'tropical',
    population: 3800000000,
    federationStatus: 'ally',
    coordinates: {
      x: -85.4,
      y: 42.3,
      z: -18.9,
      sector: 'Ferengi Alliance',
      quadrant: 'Alpha'
    },
    description: 'Homeworld of the Ferengi Alliance. Known for constant rain and commercial activities.',
    amenities: ['Grand Marketplace', 'Tower of Commerce', 'Divine Treasury'],
    warnings: ['Verify all transactions in writing'],
    lastVisited: '47634.12'
  },

  // Strategic Starbases
  {
    id: 'starbase12',
    name: 'Starbase 12',
    type: 'starbase',
    climate: 'terraformed',
    population: 120000,
    federationStatus: 'member',
    coordinates: {
      x: 45.6,
      y: -23.8,
      z: 12.4,
      sector: 'Gamma 400 Sector',
      quadrant: 'Alpha'
    },
    description: 'Major supply and repair facility near the Romulan Neutral Zone.',
    amenities: ['Fleet Maintenance', 'Intelligence Office', 'Trade Center'],
    lastVisited: '47612.55'
  },
  {
    id: 'starbase24',
    name: 'Starbase 24',
    type: 'starbase',
    climate: 'terraformed',
    population: 95000,
    federationStatus: 'member',
    coordinates: {
      x: -112.7,
      y: 54.3,
      z: -25.8,
      sector: 'Sector 24',
      quadrant: 'Beta'
    },
    description: 'Strategic installation monitoring Klingon border activity.',
    amenities: ['Defense Command', 'Cultural Exchange Center', 'Medical Facilities'],
    lastVisited: '47628.91'
  },

  // Notable Colonies
  {
    id: 'cestus3',
    name: 'Cestus III',
    type: 'colony',
    climate: 'temperate',
    population: 250000,
    federationStatus: 'member',
    coordinates: {
      x: 132.4,
      y: -65.8,
      z: 28.9,
      sector: 'Cestus Sector',
      quadrant: 'Alpha'
    },
    description: 'Federation colony famous for baseball and site of historic Gorn contact.',
    amenities: ['Pike City', 'Baseball Fields', 'First Contact Monument'],
    lastVisited: '47592.33'
  },
  {
    id: 'tarsus4',
    name: 'Tarsus IV',
    type: 'colony',
    climate: 'temperate',
    population: 150000,
    federationStatus: 'member',
    coordinates: {
      x: 89.5,
      y: -43.2,
      z: 19.8,
      sector: 'Tarsus Sector',
      quadrant: 'Beta'
    },
    description: 'Recovery colony with historical significance. Site of Kodos governorship.',
    amenities: ['Memorial Gardens', 'Agricultural Center', 'Historical Museum'],
    warnings: ['Historical site - restricted areas'],
    lastVisited: '47615.77'
  },

  // Research Outposts
  {
    id: 'alpha_centauri',
    name: 'Alpha Centauri Research Station',
    type: 'outpost',
    climate: 'terraformed',
    population: 35000,
    federationStatus: 'member',
    coordinates: {
      x: 4.3,
      y: -1.2,
      z: 0.8,
      sector: 'Sector 002',
      quadrant: 'Alpha'
    },
    description: 'Primary research facility in Earth\'s nearest stellar neighbor.',
    amenities: ['Warp Research Labs', 'Cultural Studies Center', 'Deep Space Observatory'],
    lastVisited: '47642.11'
  },
  {
    id: 'qualor2',
    name: 'Qualor II Surplus Depot',
    type: 'outpost',
    climate: 'terraformed',
    population: 5000,
    federationStatus: 'member',
    coordinates: {
      x: 67.8,
      y: -32.4,
      z: 15.9,
      sector: 'Qualor Sector',
      quadrant: 'Alpha'
    },
    description: 'Starship salvage yard and surplus storage facility.',
    amenities: ['Salvage Processing', 'Parts Database', 'Maintenance Docks'],
    warnings: ['Restricted Access - Authorization Required'],
    lastVisited: '47608.44'
  },

  // Special Locations
  {
    id: 'wolf359',
    name: 'Wolf 359 Memorial Station',
    type: 'station',
    climate: 'terraformed',
    population: 1000,
    federationStatus: 'member',
    coordinates: {
      x: 7.8,
      y: -3.9,
      z: 1.2,
      sector: 'Sector 004',
      quadrant: 'Alpha'
    },
    description: 'Memorial station marking the site of the Battle of Wolf 359.',
    amenities: ['Memorial Hall', 'Historical Archives', 'Observatory'],
    warnings: ['Debris field present'],
    lastVisited: '47591.23'
  },
  {
    id: 'antares_fleet_yard',
    name: 'Antares Fleet Yards',
    type: 'station',
    climate: 'terraformed',
    population: 65000,
    federationStatus: 'member',
    coordinates: {
      x: 34.5,
      y: -16.8,
      z: 8.9,
      sector: 'Antares Sector',
      quadrant: 'Alpha'
    },
    description: 'Major shipbuilding and repair facility.',
    amenities: ['Construction Docks', 'Engineering School', 'R&D Centers'],
    lastVisited: '47637.89'
  }
];

export const calculateDistance = (coord1: Destination['coordinates'], coord2: Destination['coordinates']): number => {
  const dx = coord2.x - coord1.x;
  const dy = coord2.y - coord1.y;
  const dz = coord2.z - coord1.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

export const getDestinationById = (id: string): Destination | undefined => {
  return destinations.find(dest => dest.id === id);
};

export const searchDestinations = (
  query: string,
  filters?: SearchFilters
): Destination[] => {
  return destinations.filter(dest => {
    const matchesQuery = dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase());

    if (!matchesQuery) return false;
    if (!filters) return true;

    const matchesType = !filters.type?.length || filters.type.includes(dest.type);
    const matchesClimate = !filters.climate?.length || filters.climate.includes(dest.climate);
    const matchesStatus = !filters.federationStatus?.length || 
      filters.federationStatus.includes(dest.federationStatus);
    const matchesQuadrant = !filters.quadrant?.length || 
      filters.quadrant.includes(dest.coordinates.quadrant);
    const matchesWarnings = filters.hasWarnings === undefined || 
      (filters.hasWarnings === !!dest.warnings?.length);

    const matchesDistance = !filters.maxDistance || 
      calculateDistance(dest.coordinates, {x: 0, y: 0, z: 0, sector: 'Sector 001', quadrant: 'Alpha'}) <= 
      filters.maxDistance;

    return matchesType && matchesClimate && matchesStatus && 
      matchesQuadrant && matchesWarnings && matchesDistance;
  });
};
