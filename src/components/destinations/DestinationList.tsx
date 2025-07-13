import { Destination } from '@/types/destination';
import { calculateDistance } from '@/data/destinations';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';

interface DestinationListProps {
  destinations: Destination[];
  onSelect: (destination: Destination) => void;
}

export default function DestinationList({ destinations, onSelect }: DestinationListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.map((destination) => (
        <LcarsPanel 
          key={destination.id}
          className="hover:border hover:border-[#F1DF6F] transition-all cursor-pointer"
          onClick={() => onSelect(destination)}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-[#FF9C00]">{destination.name}</h3>
              <span className="text-sm text-[#F1DF6F]">
                {Math.round(calculateDistance(destination.coordinates, {
                  x: 0, y: 0, z: 0, sector: 'Sector 001', quadrant: 'Alpha'
                })) + ' ly'}
              </span>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-full bg-gray-800 text-xs text-[#F1DF6F]">
                {destination.type}
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-800 text-xs text-[#F1DF6F]">
                {destination.climate}
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-800 text-xs text-[#F1DF6F]">
                {destination.federationStatus}
              </span>
            </div>

            <p className="text-sm text-gray-400 line-clamp-2">{destination.description}</p>

            {destination.warnings && destination.warnings.length > 0 && (
              <div className="mt-2">
                <LcarsButton color="warning" className="text-xs">
                  {destination.warnings.length} Warning{destination.warnings.length > 1 ? 's' : ''}
                </LcarsButton>
              </div>
            )}
          </div>
        </LcarsPanel>
      ))}
    </div>
  );
}
