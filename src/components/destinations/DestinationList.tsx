import { Destination } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';

interface DestinationListProps {
  destinations: Destination[];
  onSelect: (destination: Destination) => void;
}

export default function DestinationList({ destinations, onSelect }: DestinationListProps) {
  return (
    <LcarsPanel className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            onClick={() => onSelect(destination)}
            className="bg-black p-4 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors"
          >
            <h3 className="text-lcars-orange text-lg font-bold mb-2">
              {destination.name}
            </h3>
            <p className="text-lcars-blue mb-2">
              {destination.type} • {destination.quadrant}
            </p>
            <p className="text-lcars-cream text-sm line-clamp-2">
              {destination.description}
            </p>
          </div>
        ))}
      </div>
    </LcarsPanel>
  );
}
