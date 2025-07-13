'use client';

import { useState } from 'react';
import LcarsHeader from "@/components/lcars/LcarsHeader";
import LcarsPanel from "@/components/lcars/LcarsPanel";
import LcarsButton from "@/components/lcars/LcarsButton";
import DestinationSearch from "@/components/destinations/DestinationSearch";
import DestinationList from "@/components/destinations/DestinationList";
import { searchDestinations } from "@/data/destinations";
import { Destination, SearchFilters } from "@/types/destination";

export default function Home() {
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleSearch = (query: string, filters: SearchFilters) => {
    const results = searchDestinations(query, filters);
    setSearchResults(results);
  };

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
    // TODO: Navigate to detailed view
  };

  return (
    <div className="space-y-8 container mx-auto p-4">
      <LcarsHeader
        title="StarPath"
        subtitle="LCARS Travel Planning System"
      />

      <DestinationSearch onSearch={handleSearch} />

      {searchResults.length > 0 ? (
        <DestinationList
          destinations={searchResults}
          onSelect={handleDestinationSelect}
        />
      ) : (
        <div className="text-center text-gray-400">
          Start your journey by searching for a destination
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LcarsPanel className="space-y-4">
          <h2 className="text-2xl font-bold">Destination Planning</h2>
          <div className="space-y-2">
            <LcarsButton color="primary">Search Destinations</LcarsButton>
            <LcarsButton color="secondary">View Star Charts</LcarsButton>
          </div>
        </LcarsPanel>

        <LcarsPanel className="space-y-4">
          <h2 className="text-2xl font-bold">Trip Management</h2>
          <div className="space-y-2">
            <LcarsButton color="warning">Create Itinerary</LcarsButton>
            <LcarsButton color="danger">Emergency Protocols</LcarsButton>
          </div>
        </LcarsPanel>
      </div>

      <LcarsPanel className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Risa", "Vulcan", "Earth"].map((destination) => (
            <div
              key={destination}
              className="bg-gray-900 p-4 rounded-tl-2xl rounded-br-2xl border border-[#F1DF6F]"
            >
              <h3 className="text-xl font-bold text-[#FF9C00]">{destination}</h3>
              <p className="text-gray-400">Last visited: Stardate 47634.44</p>
            </div>
          ))}
        </div>
      </LcarsPanel>
    </div>
  );
}
