export type Climate = 'temperate' | 'desert' | 'tropical' | 'arctic' | 'volcanic' | 'terraformed';
export type FederationStatus = 'member' | 'ally' | 'neutral' | 'hostile' | 'restricted';
export type DestinationType = 'planet' | 'station' | 'starbase' | 'colony' | 'outpost';

export interface Coordinates {
  x: number; // Light years from Earth (Sol)
  y: number;
  z: number;
  sector: string;
  quadrant: 'Alpha' | 'Beta' | 'Gamma' | 'Delta';
}

export interface Destination {
  id: string;
  name: string;
  type: string;
  quadrant: string;
  sector: string;
  system: string;
  distance: number;
  population: string;
  species: string[];
  government: string;
  description: string;
  climate: string;
  hazards: string;
  clearanceLevel: string;
  attractions?: string[];
}

export interface SearchFilters {
  type: string;
  climate: string;
  clearanceLevel: string;
}
