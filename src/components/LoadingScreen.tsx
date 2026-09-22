import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoaded?: () => void;
  minDuration?: number; // milliseconds
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoaded,
  minDuration = 2000,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(100, Math.round((elapsed / minDuration) * 100));
      setProgress(calculated);

      if (calculated >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onLoaded) {
            setTimeout(onLoaded, 700);
          }
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [minDuration, onLoaded]);

  // Center hexagon geometry:
  // Points: 100,40 (top) -> 152,70 (top-right) -> 152,130 (bottom-right) -> 100,160 (bottom) -> 48,130 (bottom-left) -> 48,70 (top-left)
  // Height = 160 - 40 = 120
  const normalizedProgress = progress / 100;
  const liquidY = 160 - normalizedProgress * 120;
  const liquidHeight = normalizedProgress * 120;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="honeycomb-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none font-serif"
        >
          {/* Main Visual Container */}
          <div className="relative flex flex-col items-center">
            {/* Honeycomb SVG Graphics - Solo una celda */}
            <div className="relative w-60 h-60 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full overflow-visible drop-shadow-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Clip path shaped strictly as the single honeycomb cell */}
                  <clipPath id="center-honeycomb-clip">
                    <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" />
                  </clipPath>

                  {/* Golden Honey Liquid Gradient */}
                  <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f7e199" />
                    <stop offset="35%" stopColor="#e59828" />
                    <stop offset="100%" stopColor="#bf8414" />
                  </linearGradient>

                  {/* Surface Shimmer Gradient */}
                  <linearGradient id="surfaceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fff3b0" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#fff3b0" stopOpacity="0.8" />
                  </linearGradient>

                  {/* Glow filter for honey */}
                  <filter id="honeyGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#e59828" floodOpacity="0.3" />
                  </filter>
                </defs>

                {/* Main Central Cell Base (Cream interior) */}
                <polygon
                  points="100,40 152,70 152,130 100,160 48,130 48,70"
                  fill="#FAF8F2"
                  stroke="#85984e"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />

                {/* 3. Liquid Honey Filling Animation inside the Cell */}
                <g clipPath="url(#center-honeycomb-clip)">
                  {/* Honey Body */}
                  <rect
                    x="40"
                    y={liquidY}
                    width="120"
                    height={liquidHeight + 10}
                    fill="url(#honeyGradient)"
                    filter="url(#honeyGlow)"
                    className="transition-all duration-75 ease-out"
                  />

                  {/* Honey Wave Surface */}
                  {progress > 2 && progress < 99 && (
                    <ellipse
                      cx="100"
                      cy={liquidY}
                      rx="48"
                      ry="4.5"
                      fill="url(#surfaceGradient)"
                      className="transition-all duration-75 ease-out"
                    />
                  )}

                  {/* Golden Honey Bubbles Rising */}
                  {progress > 15 && (
                    <>
                      <circle cx="85" cy={liquidY + 25} r="2.5" fill="#ffffff" opacity="0.6">
                        <animate
                          attributeName="cy"
                          values={`${liquidY + 40};${liquidY + 5}`}
                          dur="1.2s"
                          repeatCount="indefinite"
                        />
                        <animate attributeName="opacity" values="0.7;0" dur="1.2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="115" cy={liquidY + 35} r="2" fill="#ffffff" opacity="0.6">
                        <animate
                          attributeName="cy"
                          values={`${liquidY + 45};${liquidY + 8}`}
                          dur="1.6s"
                          repeatCount="indefinite"
                        />
                        <animate attributeName="opacity" values="0.7;0" dur="1.6s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                </g>

                {/* 4. Honeycomb Cell Golden Borders & Highlights */}
                <polygon
                  points="100,40 152,70 152,130 100,160 48,130 48,70"
                  fill="none"
                  stroke="#85984e"
                  strokeWidth="4"
                  strokeLinejoin="round"
                  className="drop-shadow-xs"
                />

                {/* Inner subtle outline for depth */}
                <polygon
                  points="100,45 147,72 147,128 100,155 53,128 53,72"
                  fill="none"
                  stroke="#e59828"
                  strokeWidth="1.2"
                  opacity="0.4"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Progress Percentage Display in Center of Hexagon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span
                  className={`text-lg sm:text-xl font-bold font-serif transition-colors duration-200 ${
                    progress > 55 ? 'text-white drop-shadow-md' : 'text-[#323e11]'
                  }`}
                >
                  {progress}%
                </span>
              </div>
            </div>

            {/* Brand Title & Loading Status */}
            <div className="mt-4 flex flex-col items-center space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-[#6c7c39] font-serif">
                MerlyDev
              </h2>

              <p className="text-xs sm:text-sm text-[#85984e] font-sans font-semibold tracking-wide">
                Cargando ideas...
              </p>

              {/* Discreet progress track */}
              <div className="w-36 h-1.5 bg-[#cbd99e]/30 rounded-full overflow-hidden mt-1 p-0.5 border border-[#85984e]/20">
                <div
                  className="h-full bg-gradient-to-r from-[#85984e] to-[#e59828] rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
