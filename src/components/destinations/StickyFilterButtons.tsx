'use client';

import React from 'react';
import LcarsButton from '../lcars/LcarsButton';

interface StickyFilterButtonsProps {
  onClear: () => void;
  onApply: () => void;
}

export default function StickyFilterButtons({ onClear, onApply }: StickyFilterButtonsProps) {
  return (
    <div className="sticky top-0 z-10 flex justify-end space-x-4 mb-4 bg-black py-2">
      <LcarsButton
        type="button"
        onClick={onClear}
        color="secondary"
      >
        Clear Filters
      </LcarsButton>
      <LcarsButton
        type="button"
        onClick={onApply}
        color="primary"
      >
        Apply Filters
      </LcarsButton>
    </div>
  );
}
