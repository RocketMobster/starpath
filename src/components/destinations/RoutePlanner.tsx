import React, { useState, useRef } from 'react';
import { Destination, SearchFilters } from '@/types/destination';
import { calculateWarpTravelTime, formatTravelTime } from '@/utils/warpCalculations';
import { calculateDistance } from '@/utils/coordinates';
import LcarsButton from '../lcars/LcarsButton';
import LcarsPanel from '../lcars/LcarsPanel';
import { destinations, searchDestinations } from '@/data/destinations';
import DestinationSearch from './DestinationSearch';

interface RoutePlannerProps {
  defaultDestination?: Destination;
}

export default function RoutePlanner({ defaultDestination }: RoutePlannerProps) {
  const [origin, setOrigin] = useState<Destination | null>(null);
  const [destination, setDestination] = useState<Destination | null>(defaultDestination || null);
  const [warpFactor, setWarpFactor] = useState(5);
  const [originSearchResults, setOriginSearchResults] = useState<Destination[]>([]);
  const [destinationSearchResults, setDestinationSearchResults] = useState<Destination[]>([]);
  
  // Refs to control filter visibility
  const originFiltersRef = useRef<(show: boolean) => void>(() => {});
  const destinationFiltersRef = useRef<(show: boolean) => void>(() => {});

  const handleOriginSearch = (query: string, filters: SearchFilters) => {
    if (filters._skipSearch) {
      // If _skipSearch is true, just clear the results without searching
      setOriginSearchResults([]);
      return;
    }
    
    const results = searchDestinations(query, filters);
    setOriginSearchResults(results);
  };

  const handleDestinationSearch = (query: string, filters: SearchFilters) => {
    if (filters._skipSearch) {
      // If _skipSearch is true, just clear the results without searching
      setDestinationSearchResults([]);
      return;
    }
    
    const results = searchDestinations(query, filters);
    setDestinationSearchResults(results);
  };

  const handleOriginSelect = (selected: Destination) => {
    // Prevent selecting same location as destination
    if (destination && selected.id === destination.id) {
      return;
    }
    setOrigin(selected);
    setOriginSearchResults([]);
    
    // Close origin filters after selection
    originFiltersRef.current(false);
  };

  const handleDestinationSelect = (selected: Destination) => {
    // Prevent selecting same location as origin
    if (origin && selected.id === origin.id) {
      return;
    }
    setDestination(selected);
    setDestinationSearchResults([]);
    
    // Close destination filters after selection
    destinationFiltersRef.current(false);
  };

  const handleWarpFactorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // Enforce warp speed limits
    if (value >= 1 && value <= 9.99) {
      setWarpFactor(value);
    }
  };

  const handleSwapLocations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const calculateRoute = () => {
    if (!origin || !destination) return null;
    if (origin.id === destination.id) return null; // Redundant check

    // Calculate the actual distance between points
    const distance = calculateDistance(origin, destination);
    const travelTime = calculateWarpTravelTime(distance, warpFactor);
    
    return {
      distance,
      travelTime,
      waypoints: [] // We'll add waypoint calculation later
    };
  };

  return (
    <LcarsPanel className="space-y-6">
      <h2 className="text-2xl font-bold text-lcars-orange">Route Planner</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Origin Selection */}
        <div className="space-y-4">
          <h3 className="text-lg text-lcars-blue">Origin</h3>
          <DestinationSearch 
            onSearch={handleOriginSearch}
            onDestinationSelect={handleOriginSelect}
            placeholder="Search for origin..."
            showFiltersRef={originFiltersRef}
          />
          {origin && (
            <div className="bg-black/30 p-4 rounded-lg border border-lcars-orange/30">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lcars-orange">{origin.name}</h4>
                  <p className="text-lcars-cream text-sm">{origin.sector} • {origin.quadrant}</p>
                </div>
                <LcarsButton 
                  onClick={() => setOrigin(null)} 
                  color="danger" 
                  className="!px-3"
                >
                  ×
                </LcarsButton>
              </div>
            </div>
          )}
          {originSearchResults.length > 0 && !origin && (
            <div className="bg-black/30 border border-lcars-orange/30 rounded-lg">
              <div className="max-h-60 overflow-y-auto lcars-scrollbar">
                {originSearchResults.map(result => (
                  <div
                    key={result.id}
                    onClick={() => handleOriginSelect(result)}
                    className="p-3 hover:bg-lcars-orange/20 cursor-pointer transition-colors border-b border-lcars-orange/30 last:border-b-0"
                  >
                    <h4 className="text-lcars-orange">{result.name}</h4>
                    <p className="text-sm text-lcars-cream">{result.sector} • {result.quadrant}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Swap Button - Fixed position that doesn't move with filter toggles */}
        <button
          onClick={handleSwapLocations}
          className="absolute left-1/2 md:top-20 -translate-x-1/2 md:block hidden bg-lcars-orange/20 hover:bg-lcars-orange/30 text-lcars-orange p-2 rounded-full border border-lcars-orange/50 transition-colors"
          title="Swap origin and destination"
        >
          ⇄
        </button>

        {/* Destination Selection */}
        <div className="space-y-4">
          <h3 className="text-lg text-lcars-blue">Destination</h3>
          <DestinationSearch 
            onSearch={handleDestinationSearch}
            onDestinationSelect={handleDestinationSelect}
            placeholder="Search for destination..."
            showFiltersRef={destinationFiltersRef}
          />
          {destination && (
            <div className="bg-black/30 p-4 rounded-lg border border-lcars-orange/30">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lcars-orange">{destination.name}</h4>
                  <p className="text-lcars-cream text-sm">{destination.sector} • {destination.quadrant}</p>
                </div>
                <LcarsButton 
                  onClick={() => setDestination(null)} 
                  color="danger" 
                  className="!px-3"
                >
                  ×
                </LcarsButton>
              </div>
            </div>
          )}
          {destinationSearchResults.length > 0 && !destination && (
            <div className="bg-black/30 border border-lcars-orange/30 rounded-lg">
              <div className="max-h-60 overflow-y-auto lcars-scrollbar">
                {destinationSearchResults.map(result => (
                  <div
                    key={result.id}
                    onClick={() => handleDestinationSelect(result)}
                    className="p-3 hover:bg-lcars-orange/20 cursor-pointer transition-colors border-b border-lcars-orange/30 last:border-b-0"
                  >
                    <h4 className="text-lcars-orange">{result.name}</h4>
                    <p className="text-sm text-lcars-cream">{result.sector} • {result.quadrant}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warp Factor Selection */}
      <div className="space-y-2">
        <label className="block text-lcars-blue">
          Warp Factor
          <input
            type="number"
            value={warpFactor}
            onChange={handleWarpFactorChange}
            min="1"
            max="9.99"
            step="0.1"
            className="ml-4 bg-black border border-lcars-orange/50 text-lcars-cream p-2 rounded w-24"
          />
        </label>
      </div>

      {/* Route Summary */}
      {origin && destination && (
        <div className="bg-black/30 p-4 rounded-lg border border-lcars-orange/30">
          <h3 className="text-lg text-lcars-orange mb-4">Route Summary</h3>
          <div className="space-y-2 text-lcars-cream">
            <p>Origin: {origin.name}</p>
            <p>Destination: {destination.name}</p>
            <p>Distance: {calculateRoute()?.distance} light years</p>
            <p>Travel Time: {formatTravelTime(calculateRoute()?.travelTime!)}</p>
          </div>
        </div>
      )}
    </LcarsPanel>
  );
}
