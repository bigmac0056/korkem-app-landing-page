
import React from 'react';

const KazakhPattern = () => {
  return (
    <svg 
      className="w-full h-full" 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Traditional Kazakh ornamental patterns */}
      <defs>
        <pattern id="kazakhPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Central diamond */}
          <path 
            d="M60 20 L80 40 L60 60 L40 40 Z" 
            fill="currentColor" 
            opacity="0.1"
          />
          
          {/* Corner elements */}
          <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="20" cy="100" r="3" fill="currentColor" opacity="0.1" />
          <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.1" />
          
          {/* Traditional curves */}
          <path 
            d="M30 60 Q40 50 50 60 Q40 70 30 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            opacity="0.1"
          />
          <path 
            d="M70 60 Q80 50 90 60 Q80 70 70 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            opacity="0.1"
          />
          
          {/* Central star */}
          <polygon 
            points="60,35 62,41 68,41 63,45 65,51 60,47 55,51 57,45 52,41 58,41" 
            fill="currentColor" 
            opacity="0.1"
          />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#kazakhPattern)" className="text-indigo-600" />
      
      {/* Decorative elements */}
      <g className="text-blue-600" opacity="0.1">
        <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="150" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
      
      <g className="text-indigo-500" opacity="0.1">
        <circle cx="1000" cy="600" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="1000" cy="600" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="1000" cy="600" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
      </g>
      
      {/* Traditional Kazakh geometric patterns */}
      <g className="text-blue-500" opacity="0.08">
        <path d="M800 100 L820 120 L800 140 L780 120 Z" fill="currentColor" />
        <path d="M810 110 L815 120 L810 130 L805 120 Z" fill="currentColor" />
      </g>
      
      <g className="text-indigo-400" opacity="0.08">
        <path d="M400 650 L420 670 L400 690 L380 670 Z" fill="currentColor" />
        <path d="M410 660 L415 670 L410 680 L405 670 Z" fill="currentColor" />
      </g>
    </svg>
  );
};

export default KazakhPattern;
