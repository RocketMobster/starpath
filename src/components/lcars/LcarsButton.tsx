import React from 'react';

interface LcarsButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'warning' | 'danger';
  type?: 'button' | 'submit' | 'reset';
}

const LcarsButton: React.FC<LcarsButtonProps> = ({
  onClick,
  children,
  className = '',
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-lcars-orange hover:bg-lcars-orange-light',
    secondary: 'bg-lcars-blue hover:bg-lcars-blue-light',
    warning: 'bg-lcars-cream hover:bg-lcars-cream/90',
    danger: 'bg-lcars-red hover:bg-lcars-red-light',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-bold text-black transition-colors
        ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default LcarsButton;
