import React from 'react';

export const HoneycombIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#e59828"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Left Hexagon */}
      <polygon points="10,2 17,6 17,14 10,18 3,14 3,6" />
      {/* Top Right Hexagon */}
      <polygon points="22,2 29,6 29,14 22,18 15,14 15,6" />
      {/* Bottom Center Hexagon */}
      <polygon points="16,14 23,18 23,26 16,30 9,26 9,18" />
    </svg>
  );
};

