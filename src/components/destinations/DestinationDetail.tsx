import React from 'react';
import { Destination } from '@/types/destination';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';

interface DestinationDetailProps {
  destination: Destination;
  onClose: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-black w-full max-w-4xl rounded-lg overflow-hidden">
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
            <LcarsButton onClick={onClose} variant="danger">
              Close
            </LcarsButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lcars-purple text-lg mb-2">Location Details</h3>
              <div className="space-y-2">
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
              <h3 className="text-lcars-purple text-lg mb-2">Civilization</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-lcars-blue">Population:</span> {destination.population}
                </p>
                <p>
                  <span className="text-lcars-blue">Species:</span>{' '}
                  {destination.species.join(', ')}
                </p>
                <p>
                  <span className="text-lcars-blue">Government:</span> {destination.government}
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lcars-purple text-lg mb-2">Notable Features</h3>
              <p className="text-lcars-cream">{destination.description}</p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lcars-purple text-lg mb-2">Travel Advisory</h3>
              <div className="space-y-2">
                <p>
                  <span className="text-lcars-blue">Climate:</span> {destination.climate}
                </p>
                <p>
                  <span className="text-lcars-blue">Hazards:</span> {destination.hazards}
                </p>
                <p>
                  <span className="text-lcars-blue">Required Clearance:</span>{' '}
                  {destination.clearanceLevel}
                </p>
              </div>
            </div>

            {destination.attractions && (
              <div className="md:col-span-2">
                <h3 className="text-lcars-purple text-lg mb-2">Points of Interest</h3>
                <ul className="list-disc list-inside space-y-1 text-lcars-cream">
                  {destination.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
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
