import React from 'react';
import LcarsPanel from './LcarsPanel';
import LcarsButton from './LcarsButton';

interface LcarsInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function LcarsInfoModal({ isOpen, onClose, title, children }: LcarsInfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/80">
      <LcarsPanel className="w-full max-w-2xl">
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-lcars-orange">{title}</h2>
            <LcarsButton onClick={onClose} color="secondary">Close</LcarsButton>
          </div>
          <div className="text-lcars-cream space-y-4">
            {children}
          </div>
        </div>
      </LcarsPanel>
    </div>
  );
}
