import React from 'react';

interface LcarsHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const LcarsHeader: React.FC<LcarsHeaderProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <header className={`flex items-center gap-4 ${className}`}>
      <div className="bg-[#F1DF6F] h-16 w-32 rounded-tr-3xl" />
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#F1DF6F]">{title}</h1>
        {subtitle && <p className="text-[#FF9C00]">{subtitle}</p>}
      </div>
      <div className="bg-[#FF9C00] h-8 w-16 rounded-bl-2xl" />
    </header>
  );
};

export default LcarsHeader;
