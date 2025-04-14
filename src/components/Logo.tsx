import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center neumorph-btn rounded-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-[#E6E7EE] dark:bg-gray-800">
        <img 
          src="/images/logo.png" 
          alt="Sadatpour Logo" 
          className="w-9 h-9 md:w-11 md:h-11 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error("Logo image failed to load");
          }}
        />
      </div>
    </div>
  );
};

export default Logo; 