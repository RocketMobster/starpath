import React from 'react';

interface LcarsPanelProps {
  children: React.ReactNode;
  className?: string;
}

const LcarsPanel: React.FC<LcarsPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-black text-[#F1DF6F] p-4 rounded-tl-3xl rounded-br-3xl ${className}`}>
      {children}
    </div>
  );
};

export default LcarsPanel;
