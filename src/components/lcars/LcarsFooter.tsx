import React from 'react';
import { getVersion } from '@/utils/version';

const LcarsFooter = () => {
  return (
    <footer className="mt-8 p-4 border-t border-[#F1DF6F]/20">
      <div className="container mx-auto flex justify-between items-center text-[#F1DF6F]">
        <div>StarPath {getVersion()}</div>
        <div>
          Developed by{' '}
          <a
            href="https://github.com/RocketMobster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF9C00] hover:text-[#F1DF6F] transition-colors"
          >
            @RocketMobster
          </a>
        </div>
      </div>
    </footer>
  );
};

export default LcarsFooter;
