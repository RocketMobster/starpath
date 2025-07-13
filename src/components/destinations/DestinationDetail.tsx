import React from 'react';
import { Destination } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';
import WarpCalculator from './WarpCalculator';

interface DestinationDetailProps {
  destination: Destination;
  onClose: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden border border-lcars-orange/50">
        <LcarsPanel className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-lcars-orange mb-2">
                {destination.name}
              </h2>
              <p className="text-lcars-blue">
                {destination.type} • {destination.quadrant}
              </p>
            </div>
            <LcarsButton onClick={onClose} color="danger">
              Close
            </LcarsButton>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lcars-orange text-lg mb-2">Location Details</h3>
                <div className="space-y-2 text-lcars-cream">
                  <p>
                    <span className="text-lcars-blue">Sector:</span> {destination.sector}
                  </p>
                  <p>
                    <span className="text-lcars-blue">System:</span> {destination.system}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Distance:</span> {destination.distance}{' '}
                    light years
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lcars-orange text-lg mb-2">Population & Government</h3>
                <div className="space-y-2 text-lcars-cream">
                  <p>
                    <span className="text-lcars-blue">Population:</span> {destination.population}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Species:</span>{' '}
                    {destination.species.join(', ')}
                  </p>
                  <p>
                    <span className="text-lcars-blue">Government:</span>{' '}
                    {destination.government}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-lcars-orange/20 pt-4">
              <WarpCalculator
                distanceInLightYears={destination.distance}
                destinationName={destination.name}
              />
            </div>

            <div className="border-t border-lcars-orange/20 pt-4">
              <h3 className="text-lcars-orange text-lg mb-2">About</h3>
              <p className="text-lcars-cream">{destination.description}</p>
            </div>

            {destination.attractions && (
              <div className="border-t border-lcars-orange/20 pt-4">
                <h3 className="text-lcars-orange text-lg mb-2">Notable Attractions</h3>
                <ul className="list-disc list-inside text-lcars-cream">
                  {destination.attractions.map((attraction) => (
                    <li key={attraction}>{attraction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </LcarsPanel>
      </div>
    </div>
  );
};

export default DestinationDetail;
