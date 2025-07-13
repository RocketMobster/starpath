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
  type: DestinationType;
  climate: Climate;
  population: number;
  federationStatus: FederationStatus;
  coordinates: Coordinates;
  description: string;
  amenities: string[];
  warnings?: string[];
  lastVisited?: string; // Stardate
  image?: string; // URL to destination image
}

export interface SearchFilters {
  type?: DestinationType[];
  climate?: Climate[];
  federationStatus?: FederationStatus[];
  quadrant?: Coordinates['quadrant'][];
  maxDistance?: number; // in light years
  hasWarnings?: boolean;
}
