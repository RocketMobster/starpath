import React from 'react';

interface LcarsButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
  className?: string;
}

const LcarsButton: React.FC<LcarsButtonProps> = ({
  onClick,
  children,
  color = 'primary',
  className = '',
}) => {
  const colorClasses = {
    primary: 'bg-[#F1DF6F] text-black',
    secondary: 'bg-[#FF9C00] text-black',
    warning: 'bg-[#FF7C00] text-black',
    danger: 'bg-[#FF0000] text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-tl-2xl rounded-br-2xl font-bold transition-all
        hover:opacity-80 active:scale-95 ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default LcarsButton;
