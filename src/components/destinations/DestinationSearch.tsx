import { useState } from 'react';
import { SearchFilters, Climate, FederationStatus, DestinationType } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';

interface DestinationSearchProps {
  onSearch: (query: string, filters: SearchFilters) => void;
}

export default function DestinationSearch({ onSearch }: DestinationSearchProps) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [showFilters, setShowFilters] = useState(false);

  const climates: Climate[] = ['temperate', 'desert', 'tropical', 'arctic', 'volcanic', 'terraformed'];
  const statuses: FederationStatus[] = ['member', 'ally', 'neutral', 'hostile', 'restricted'];
  const types: DestinationType[] = ['planet', 'station', 'starbase', 'colony', 'outpost'];
  const quadrants = ['Alpha', 'Beta', 'Gamma', 'Delta'];

  const handleSearch = () => {
    onSearch(query, filters);
  };

  return (
    <LcarsPanel className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-gray-900 text-[#F1DF6F] border border-[#F1DF6F] rounded-tl-2xl rounded-br-2xl px-4 py-2"
          placeholder="Search destinations..."
        />
        <LcarsButton onClick={handleSearch} color="primary">Search</LcarsButton>
        <LcarsButton 
          onClick={() => setShowFilters(!showFilters)} 
          color="secondary"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </LcarsButton>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h3 className="text-[#FF9C00] font-bold">Type</h3>
            {types.map(type => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.type?.includes(type)}
                  onChange={(e) => {
                    const newTypes = e.target.checked
                      ? [...(filters.type || []), type]
                      : (filters.type || []).filter(t => t !== type);
                    setFilters({ ...filters, type: newTypes });
                  }}
                  className="accent-[#F1DF6F]"
                />
                <span className="text-white">{type}</span>
              </label>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-[#FF9C00] font-bold">Climate</h3>
            {climates.map(climate => (
              <label key={climate} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.climate?.includes(climate)}
                  onChange={(e) => {
                    const newClimates = e.target.checked
                      ? [...(filters.climate || []), climate]
                      : (filters.climate || []).filter(c => c !== climate);
                    setFilters({ ...filters, climate: newClimates });
                  }}
                  className="accent-[#F1DF6F]"
                />
                <span className="text-white">{climate}</span>
              </label>
            ))}
          </div>

          <div className="space-y-2">
            <h3 className="text-[#FF9C00] font-bold">Federation Status</h3>
            {statuses.map(status => (
              <label key={status} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.federationStatus?.includes(status)}
                  onChange={(e) => {
                    const newStatuses = e.target.checked
                      ? [...(filters.federationStatus || []), status]
                      : (filters.federationStatus || []).filter(s => s !== status);
                    setFilters({ ...filters, federationStatus: newStatuses });
                  }}
                  className="accent-[#F1DF6F]"
                />
                <span className="text-white">{status}</span>
              </label>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-[#FF9C00] font-bold mb-2">Max Distance (ly)</h3>
              <input
                type="number"
                value={filters.maxDistance || ''}
                onChange={(e) => setFilters({ 
                  ...filters, 
                  maxDistance: e.target.value ? Number(e.target.value) : undefined 
                })}
                className="w-full bg-gray-900 text-[#F1DF6F] border border-[#F1DF6F] rounded-tl-2xl rounded-br-2xl px-4 py-2"
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-[#FF9C00] font-bold">Quadrant</h3>
              {quadrants.map(quadrant => (
                <label key={quadrant} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.quadrant?.includes(quadrant as any)}
                    onChange={(e) => {
                      const newQuadrants = e.target.checked
                        ? [...(filters.quadrant || []), quadrant as any]
                        : (filters.quadrant || []).filter(q => q !== quadrant);
                      setFilters({ ...filters, quadrant: newQuadrants });
                    }}
                    className="accent-[#F1DF6F]"
                  />
                  <span className="text-white">{quadrant}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </LcarsPanel>
  );
}
