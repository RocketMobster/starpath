import React, { useState } from 'react';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';
import LcarsInfoModal from '../lcars/LcarsInfoModal';
import DepartureTimeSelector from './DepartureTimeSelector';
import { calculateWarpTravelTime, formatTravelTime } from '@/utils/warpCalculations';
import { formatStardate } from '@/utils/stardate';

const C = 299792.458; // Speed of light in km/s

interface WarpCalculatorProps {
  distanceInLightYears: number;
  destinationName: string;
}

export default function WarpCalculator({ distanceInLightYears, destinationName }: WarpCalculatorProps) {
  const [warpFactor, setWarpFactor] = useState(5);
  const [departureStardate, setDepartureStardate] = useState<number | undefined>();
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleWarpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (value >= 1 && value <= 9.99) {
      setWarpFactor(value);
    }
  };

  const handleDepartureChange = (stardate: number) => {
    setDepartureStardate(stardate);
  };

  const travelTime = calculateWarpTravelTime(distanceInLightYears, warpFactor, departureStardate);
  const formattedTime = formatTravelTime(travelTime);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <h3 className="text-lcars-orange text-xl">Travel Time Calculator</h3>
        <LcarsButton
          onClick={() => setIsInfoOpen(true)}
          color="info"
          className="!px-3"
        >
          i
        </LcarsButton>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-lcars-cream">
            Warp Factor:
            <input
              type="number"
              value={warpFactor}
              onChange={handleWarpChange}
              min="1"
              max="9.99"
              step="0.1"
              className="ml-2 bg-black border border-lcars-orange/50 text-lcars-cream p-2 rounded w-24"
            />
          </label>
          <span className="text-lcars-cream">
            ({(travelTime.coefficient * C).toFixed(0)} km/s)
          </span>
        </div>

        <DepartureTimeSelector onStardateChange={handleDepartureChange} />

        <div className="bg-black/30 p-4 rounded-lg border border-lcars-orange/30">
          <h4 className="text-lcars-orange mb-2">Journey Summary</h4>
          <div className="space-y-2 text-lcars-cream">
            <p>Distance: {distanceInLightYears.toFixed(2)} light years</p>
            <p>Travel time: {formattedTime}</p>
            {departureStardate && travelTime.arrivalStardate && (
              <>
                <p>Departure: Stardate {formatStardate(departureStardate)}</p>
                <p>Arrival: Stardate {formatStardate(travelTime.arrivalStardate)}</p>
                <p className="text-sm text-lcars-blue">
                  Arrival (Earth Calendar): {travelTime.arrivalEarthDate?.toLocaleDateString()} {travelTime.arrivalEarthDate?.toLocaleTimeString()}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <LcarsInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Warp Speed Calculator"
      >
        <div className="space-y-4">
          <p>
            This calculator uses the TNG-era warp scale formula to determine travel times
            to {destinationName}. The formula accounts for the exponential nature of warp
            travel, where velocity = warp_factor^(10/3) * c.
          </p>
          <p>
            Enter a warp factor between 1 and 9.99 to calculate your travel time. Higher
            warp factors dramatically reduce travel time but require substantially more
            power.
          </p>
          <p>
            Optional: Set a departure time to calculate your estimated time of arrival
            in both Earth calendar and Stardate formats.
          </p>
        </div>
      </LcarsInfoModal>
    </div>
  );
}
