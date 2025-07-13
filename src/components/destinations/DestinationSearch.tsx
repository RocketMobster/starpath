'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Destination, SearchFilters } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';
import LcarsScrollIndicator from '../lcars/LcarsScrollIndicator';

interface DestinationSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  onDestinationSelect?: (destination: Destination) => void;
  placeholder?: string;
  showFiltersRef?: React.MutableRefObject<(show: boolean) => void>;
}

const DESTINATION_TYPES = ['planet', 'station', 'starbase', 'colony', 'outpost'];
const CLIMATES = ['temperate', 'desert', 'tropical', 'arctic', 'volcanic', 'terraformed'];
const CLEARANCE_LEVELS = ['none', 'restricted', 'classified', 'top secret'];
const QUADRANTS = ['Alpha', 'Beta', 'Gamma', 'Delta'];

export default function DestinationSearch({ 
  onSearch, 
  onDestinationSelect,
  placeholder = "Search destinations...",
  showFiltersRef
}: DestinationSearchProps) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    type: '',
    climate: '',
    clearanceLevel: '',
    quadrant: ''
  });
  
  // Ref for the filters container element
  const filtersContainerRef = useRef<HTMLDivElement>(null);
  
  // Expose a function to control filter visibility from parent component
  useEffect(() => {
    if (showFiltersRef) {
      showFiltersRef.current = setShowFilters;
    }
  }, [showFiltersRef]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, filters);
  };

  // Handle search button click
  const handleSearchClick = () => {
    onSearch(query, filters);
  };

  // Handle clear filters
  const handleClearFilters = () => {
    const clearedFilters = { type: '', climate: '', clearanceLevel: '', quadrant: '' };
    setFilters(clearedFilters);
    
    // Only search if there's a query or we had results before
    if (query.trim() !== '') {
      onSearch(query, clearedFilters);
    } else {
      // Just clear the results without searching
      onSearch('', { ...clearedFilters, _skipSearch: true });
    }
  };

  // Handle apply filters
  const handleApplyFilters = () => {
    onSearch(query, filters);
  };

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = {
      ...filters,
      [key]: filters[key] === value ? '' : value
    };
    setFilters(newFilters);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <LcarsPanel className="p-4 space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-black border-2 border-lcars-orange rounded-lg px-4 py-2 text-white placeholder-lcars-orange/50 focus:outline-none focus:border-lcars-orange-light"
            placeholder={placeholder}
          />
          <LcarsButton 
            type="submit"
            onClick={handleSearchClick}
            color="primary"
          >
            Search
          </LcarsButton>
          <LcarsButton 
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            color="secondary"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </LcarsButton>
        </div>

        {showFilters && (
          <div className="filter-container mt-4">
            {/* Sticky filter buttons at the top */}
            <div className="filter-controls">
              <LcarsButton
                type="button"
                onClick={handleClearFilters}
                color="secondary"
              >
                Clear Filters
              </LcarsButton>
              <LcarsButton
                type="button"
                onClick={handleApplyFilters}
                color="primary"
              >
                Apply Filters
              </LcarsButton>
            </div>
            
            {/* Scrollable filter options */}
            <div 
              className="filter-scroll-area grid grid-cols-1 md:grid-cols-3 gap-4 max-h-80 lcars-scrollbar" 
              ref={filtersContainerRef}
            >
              <div className="space-y-2">
                <h3 className="text-lcars-orange font-bold">Type</h3>
                <div className="space-y-1">
                  {DESTINATION_TYPES.map(type => (
                    <label
                      key={type}
                      className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-lcars-orange/10 ${
                        filters.type === type ? 'bg-lcars-orange/20' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        checked={filters.type === type}
                        onChange={() => handleFilterChange('type', type)}
                        className="w-4 h-4 accent-lcars-orange"
                      />
                      <span className="text-lcars-orange">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lcars-orange font-bold">Climate</h3>
                <div className="space-y-1">
                  {CLIMATES.map(climate => (
                    <label
                      key={climate}
                      className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-lcars-orange/10 ${
                        filters.climate === climate ? 'bg-lcars-orange/20' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="climate"
                        checked={filters.climate === climate}
                        onChange={() => handleFilterChange('climate', climate)}
                        className="w-4 h-4 accent-lcars-orange"
                      />
                      <span className="text-lcars-orange">{climate}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lcars-orange font-bold">Clearance Level</h3>
                <div className="space-y-1">
                  {CLEARANCE_LEVELS.map(level => (
                    <label
                      key={level}
                      className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-lcars-orange/10 ${
                        filters.clearanceLevel === level ? 'bg-lcars-orange/20' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="clearanceLevel"
                        checked={filters.clearanceLevel === level}
                        onChange={() => handleFilterChange('clearanceLevel', level)}
                        className="w-4 h-4 accent-lcars-orange"
                      />
                      <span className="text-lcars-orange">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lcars-orange font-bold">Quadrant</h3>
                <div className="space-y-1">
                  {QUADRANTS.map(quadrant => (
                    <label
                      key={quadrant}
                      className={`flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-lcars-orange/10 ${
                        filters.quadrant === quadrant ? 'bg-lcars-orange/20' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="quadrant"
                        checked={filters.quadrant === quadrant}
                        onChange={() => handleFilterChange('quadrant', quadrant)}
                        className="w-4 h-4 accent-lcars-orange"
                      />
                      <span className="text-lcars-orange">{quadrant} Quadrant</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {showFilters && <LcarsScrollIndicator targetRef={filtersContainerRef} />}
      </LcarsPanel>
    </form>
  );
}