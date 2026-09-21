import React from 'react';

export const WatercolorBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Watercolor blur and turbulence filters */}
          <filter id="watercolorNoise" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          <linearGradient id="skyWash" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9fcbe8" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#c5e1f4" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#e8f3fb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f3f8ee" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="hillFar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#87aa5c" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#a3c472" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8eb061" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="hillMidLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94b563" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7a9b4d" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="hillMidRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9cc06a" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#85a854" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="meadowForeground" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9abf68" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#81a54f" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Sky Base */}
        <rect width="100%" height="100%" fill="#FAF8F2" />
        <rect width="100%" height="450" fill="url(#skyWash)" filter="url(#watercolorNoise)" />

        {/* Left background sea/lake horizon wash */}
        <path
          d="M0,220 C180,240 280,210 380,230 L380,360 L0,360 Z"
          fill="#5a90ad"
          opacity="0.55"
          filter="url(#watercolorNoise)"
        />

        {/* Distant Hills */}
        <path
          d="M-50,280 Q250,180 600,270 T1200,230 Q1350,250 1500,290 L1500,900 L-50,900 Z"
          fill="url(#hillFar)"
          filter="url(#watercolorNoise)"
        />

        {/* Midground Rolling Hills Left */}
        <path
          d="M-40,380 Q180,330 420,440 L420,900 L-40,900 Z"
          fill="url(#hillMidLeft)"
          filter="url(#watercolorNoise)"
        />

        {/* Midground Rolling Hills Right */}
        <path
          d="M1000,420 Q1220,330 1480,370 L1480,900 L1000,900 Z"
          fill="url(#hillMidRight)"
          filter="url(#watercolorNoise)"
        />

        {/* Foreground Meadow Base */}
        <path
          d="M-20,700 Q360,670 720,710 T1460,680 L1460,920 L-20,920 Z"
          fill="url(#meadowForeground)"
          filter="url(#watercolorNoise)"
        />

        {/* Wildflower Dots & Watercolor Splatters in Meadow */}
        <g opacity="0.85">
          {/* Orange/Red Flowers */}
          <circle cx="950" cy="810" r="7" fill="#e8613c" />
          <circle cx="1020" cy="800" r="8" fill="#e8764b" />
          <circle cx="1120" cy="820" r="9" fill="#df5337" />
          <circle cx="1320" cy="790" r="8" fill="#e8613c" />
          <circle cx="680" cy="850" r="6" fill="#e8764b" />
          <circle cx="780" cy="840" r="7" fill="#df5337" />
          <circle cx="830" cy="860" r="8" fill="#e8613c" />

          {/* Yellow/Honey Flowers */}
          <circle cx="1060" cy="830" r="7" fill="#f4b83f" />
          <circle cx="1180" cy="810" r="8" fill="#f4c653" />
          <circle cx="730" cy="870" r="6" fill="#f4b83f" />
          <circle cx="890" cy="840" r="7" fill="#f4c653" />

          {/* White Daisy Flowers */}
          <circle cx="980" cy="860" r="6" fill="#ffffff" />
          <circle cx="1250" cy="830" r="7" fill="#ffffff" />
          <circle cx="1380" cy="770" r="7" fill="#ffffff" />
          <circle cx="640" cy="880" r="5" fill="#ffffff" />
          <circle cx="800" cy="880" r="6" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
};

