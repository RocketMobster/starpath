import React, { useState } from 'react';
import LcarsPanel from '../lcars/LcarsPanel';
import LcarsButton from '../lcars/LcarsButton';
import LcarsInfoModal from '../lcars/LcarsInfoModal';
import { calculateWarpTravelTime, formatTravelTime } from '@/utils/warpCalculations';

const C = 299792.458; // Speed of light in km/s

interface WarpCalculatorProps {
  distanceInLightYears: number;
  destinationName: string;
}

export default function WarpCalculator({ distanceInLightYears, destinationName }: WarpCalculatorProps) {
  const [warpFactor, setWarpFactor] = useState(5);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleWarpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (value >= 1 && value <= 9.99) {
      setWarpFactor(value);
    }
  };

  const travelTime = calculateWarpTravelTime(distanceInLightYears, warpFactor);
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
            className="ml-2 bg-black border-2 border-lcars-orange rounded px-2 py-1 w-24 text-lcars-orange"
          />
        </label>
        <div className="text-lcars-cream">
          Estimated travel time to <span className="text-lcars-orange">{destinationName}</span>:{' '}
          <span className="text-lcars-blue">{formattedTime}</span>
        </div>
      </div>

      <LcarsInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Warp Speed Technical Information"
      >
        <div className="space-y-4">
          <p>
            The TNG Warp Scale, developed for Star Trek: The Next Generation,
            uses a modified formula to calculate faster-than-light travel speeds:
          </p>
          
          <div className="bg-black/50 p-4 rounded-lg font-mono">
            v = w^(10/3) * c
          </div>
          
          <p>Where:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>v = velocity</li>
            <li>w = warp factor</li>
            <li>c = speed of light (299,792.458 km/s)</li>
          </ul>

          <p>
            This formula creates a more gradual acceleration curve than the
            Original Series&apos; cubic formula, making high-warp travel more
            realistic within the Star Trek universe.
          </p>

          <div className="bg-black/50 p-4 rounded-lg">
            <p className="text-lcars-orange">Current Calculations:</p>
            <ul className="list-none space-y-1 text-lcars-blue">
              <li>Warp Factor: {warpFactor}</li>
              <li>Velocity: {(travelTime.velocity / C).toFixed(2)}c</li>
              <li>Warp Coefficient: {travelTime.coefficient.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </LcarsInfoModal>
    </div>
  );
}
