
import React from 'react';

const CustomGlucoseChart = () => {
  return (
    <div className="w-full h-32 relative">
      <svg viewBox="0 0 300 120" className="w-full h-full">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Y-axis labels */}
        <text x="10" y="20" fontSize="8" fill="#666" textAnchor="end">180</text>
        <text x="10" y="40" fontSize="8" fill="#666" textAnchor="end">150</text>
        <text x="10" y="60" fontSize="8" fill="#666" textAnchor="end">120</text>
        <text x="10" y="80" fontSize="8" fill="#666" textAnchor="end">90</text>
        <text x="10" y="100" fontSize="8" fill="#666" textAnchor="end">70</text>
        
        {/* X-axis labels */}
        <text x="50" y="115" fontSize="8" fill="#666" textAnchor="middle">0h</text>
        <text x="125" y="115" fontSize="8" fill="#666" textAnchor="middle">1h</text>
        <text x="200" y="115" fontSize="8" fill="#666" textAnchor="middle">2h</text>
        <text x="275" y="115" fontSize="8" fill="#666" textAnchor="middle">3h</text>
        
        {/* Normal range area */}
        <path
          d="M 15 70 L 290 70 L 290 85 L 15 85 Z"
          fill="#22c55e"
          fillOpacity="0.1"
        />
        
        {/* Glucose curve */}
        <path
          d="M 15 85 Q 80 85 100 45 Q 120 25 140 30 Q 180 40 220 55 Q 250 65 275 75"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Peak point */}
        <circle cx="140" cy="30" r="4" fill="#ef4444" />
        
        {/* Peak label */}
        <text x="140" y="20" fontSize="8" fill="#ef4444" textAnchor="middle" fontWeight="bold">Peak: 165</text>
        
        {/* Target range indicator */}
        <text x="290" y="75" fontSize="6" fill="#22c55e" textAnchor="end">Target Range</text>
        <text x="290" y="83" fontSize="6" fill="#22c55e" textAnchor="end">70-140 mg/dL</text>
      </svg>
    </div>
  );
};

export default CustomGlucoseChart;
