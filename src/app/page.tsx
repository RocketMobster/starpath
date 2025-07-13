'use client';

import { useState } from 'react';
import LcarsHeader from "@/components/lcars/LcarsHeader";
import LcarsPanel from "@/components/lcars/LcarsPanel";
import LcarsButton from "@/components/lcars/LcarsButton";
import DestinationSearch from "@/components/destinations/DestinationSearch";
import DestinationList from "@/components/destinations/DestinationList";
import DestinationDetail from "@/components/destinations/DestinationDetail";
import RoutePlanner from "@/components/destinations/RoutePlanner";
import { searchDestinations, getRecentDestinations } from "@/data/destinations";
import { Destination, SearchFilters } from "@/types/destination";

export default function Home() {
  const [searchResults, setSearchResults] = useState<Destination[]>([]);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [showRoutePlanner, setShowRoutePlanner] = useState(false);
  const recentDestinations = getRecentDestinations();

  const handleSearch = (query: string, filters: SearchFilters) => {
    const results = searchDestinations(query, filters);
    setSearchResults(results);
  };

  const handleDestinationSelect = (destination: Destination) => {
    if (showRoutePlanner) {
      setShowRoutePlanner(false);
    }
    setSelectedDestination(destination);
  };

  const handleCloseDetail = () => {
    setSelectedDestination(null);
  };

  const handlePlanRoute = () => {
    setShowRoutePlanner(true);
    setSelectedDestination(null);
  };

  return (
    <div className="space-y-8 container mx-auto p-4">
      <LcarsHeader 
        title="StarPath"
        subtitle="LCARS Travel Planning System"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LcarsPanel className="space-y-4">
          <h2 className="text-2xl font-bold text-lcars-orange">Destination Planning</h2>
          <div className="space-y-2">
            <LcarsButton color="primary" onClick={() => setShowRoutePlanner(!showRoutePlanner)}>
              {showRoutePlanner ? 'Search Destinations' : 'Plan Route'}
            </LcarsButton>
            <LcarsButton color="secondary">View Star Charts</LcarsButton>
          </div>
        </LcarsPanel>

        <LcarsPanel className="space-y-4">
          <h2 className="text-2xl font-bold text-lcars-orange">Trip Management</h2>
          <div className="space-y-2">
            <LcarsButton color="warning">Create Itinerary</LcarsButton>
            <LcarsButton color="danger">Emergency Protocols</LcarsButton>
          </div>
        </LcarsPanel>
      </div>

      {showRoutePlanner ? (
        <RoutePlanner defaultDestination={selectedDestination || undefined} />
      ) : (
        <>
          <DestinationSearch onSearch={handleSearch} />
          
          {searchResults.length > 0 ? (
            <DestinationList 
              destinations={searchResults}
              onSelect={handleDestinationSelect}
            />
          ) : (
            <LcarsPanel>
              <div className="text-center text-lcars-cream p-8">
                Start your journey by searching for a destination
              </div>
            </LcarsPanel>
          )}
        </>
      )}

      {selectedDestination && (
        <DestinationDetail
          destination={selectedDestination}
          onClose={handleCloseDetail}
        />
      )}

      <LcarsPanel className="mt-6">
        <h2 className="text-2xl font-bold text-lcars-orange mb-4">Recent Destinations</h2>
        <DestinationList 
          destinations={recentDestinations}
          onSelect={handleDestinationSelect}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        />
      </LcarsPanel>
    </div>
  );
}
