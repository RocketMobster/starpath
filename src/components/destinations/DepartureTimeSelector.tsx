import React, { useState } from 'react';
import { dateToStardate, formatStardate } from '@/utils/stardate';
import LcarsButton from '../lcars/LcarsButton';
import LcarsInfoModal from '../lcars/LcarsInfoModal';

interface DepartureTimeSelectorProps {
  onStardateChange: (stardate: number) => void;
}

export default function DepartureTimeSelector({ onStardateChange }: DepartureTimeSelectorProps) {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    // Default to stardate 47634.44 (circa 2370)
    const defaultDate = new Date(2370, 7, 15, 12, 0); // August 15, 2370 12:00
    return defaultDate.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
  });
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    const earthDate = new Date(newDate);
    const stardate = dateToStardate(earthDate);
    onStardateChange(stardate);
  };

  // Call onStardateChange with initial date
  React.useEffect(() => {
    const initialDate = new Date(selectedDate);
    const stardate = dateToStardate(initialDate);
    onStardateChange(stardate);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-lcars-blue">Departure Time</span>
        <LcarsButton
          onClick={() => setIsInfoOpen(true)}
          color="info"
          className="!px-3"
        >
          i
        </LcarsButton>
      </div>
      <div className="flex items-center space-x-4 mt-1">
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateChange}
          min="2323-01-01T00:00"
          max="2423-12-31T23:59"
          className="bg-black border border-lcars-orange/50 text-lcars-cream p-2 rounded"
        />
        <span className="text-lcars-orange">
          Stardate: {formatStardate(dateToStardate(new Date(selectedDate)))}
        </span>
      </div>

      <LcarsInfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        title="Understanding Stardates"
      >
        <div className="space-y-4">
          <p>
            Stardates in Star Trek: The Next Generation era (2323-2423) use the format [YYXXX.XX]:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-lcars-orange">YY</span> represents the year in the 24th century 
              (e.g., 47 = 2370)
            </li>
            <li>
              <span className="text-lcars-orange">XXX.XX</span> represents the day of the year as 
              a fraction of 1000 (e.g., 634.44 ≈ mid-August)
            </li>
          </ul>
          <p>
            For example, Stardate 47634.44 corresponds to approximately August 15, 2370. This 
            standardized system helps coordinate activities across vast interstellar distances 
            where relativistic effects can complicate time measurement.
          </p>
          <p className="text-sm text-lcars-blue">
            Note: While various Star Trek series have used different stardate systems, StarPath 
            uses the TNG-era convention as it provides the most consistent mathematical basis 
            for interstellar journey calculations.
          </p>
        </div>
      </LcarsInfoModal>
    </div>
  );
}
