import React from 'react';
import { motion } from 'framer-motion';

export const PixelBee: React.FC<{ className?: string }> = ({ className = "w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72" }) => {
  return (
    <motion.div
      animate={{
        y: [-6, 6, -6],
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`inline-block select-none ${className}`}
    >
      <svg
        viewBox="0 0 34 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
        shapeRendering="crispEdges"
      >
        {/* === WINGS (Top) === */}
        {/* Left Wing Outline */}
        <rect x="10" y="3" width="7" height="1" fill="#2e1e0f" />
        <rect x="9" y="4" width="1" height="7" fill="#2e1e0f" />
        <rect x="17" y="4" width="1" height="6" fill="#2e1e0f" />
        {/* Left Wing Fill */}
        <rect x="10" y="4" width="7" height="6" fill="#d6e5ea" />
        <rect x="11" y="4" width="3" height="2" fill="#ffffff" />
        <rect x="10" y="9" width="7" height="1" fill="#b4c7cd" />

        {/* Right Wing Outline */}
        <rect x="18" y="3" width="8" height="1" fill="#2e1e0f" />
        <rect x="17" y="4" width="1" height="6" fill="#2e1e0f" />
        <rect x="26" y="4" width="1" height="6" fill="#2e1e0f" />
        {/* Right Wing Fill */}
        <rect x="18" y="4" width="8" height="6" fill="#d6e5ea" />
        <rect x="19" y="4" width="4" height="2" fill="#ffffff" />
        <rect x="18" y="9" width="8" height="1" fill="#b4c7cd" />

        {/* Wing base connection */}
        <rect x="10" y="10" width="16" height="1" fill="#2e1e0f" />

        {/* === BEE BODY OUTLINE === */}
        {/* Top border */}
        <rect x="8" y="10" width="18" height="1" fill="#2e1e0f" />
        {/* Left curve (head) */}
        <rect x="6" y="11" width="2" height="1" fill="#2e1e0f" />
        <rect x="5" y="12" width="1" height="2" fill="#2e1e0f" />
        <rect x="4" y="14" width="1" height="4" fill="#2e1e0f" />
        <rect x="5" y="18" width="1" height="2" fill="#2e1e0f" />
        <rect x="6" y="20" width="2" height="1" fill="#2e1e0f" />
        {/* Bottom border */}
        <rect x="8" y="21" width="18" height="1" fill="#2e1e0f" />
        {/* Right curve (back) */}
        <rect x="26" y="11" width="2" height="1" fill="#2e1e0f" />
        <rect x="28" y="12" width="1" height="2" fill="#2e1e0f" />
        <rect x="29" y="14" width="1" height="4" fill="#2e1e0f" />
        <rect x="28" y="18" width="1" height="2" fill="#2e1e0f" />
        <rect x="26" y="20" width="2" height="1" fill="#2e1e0f" />

        {/* Stinger */}
        <rect x="30" y="15" width="2" height="2" fill="#2e1e0f" />

        {/* === YELLOW BODY SEGMENT 1 (Head / Face) === */}
        <rect x="6" y="12" width="5" height="8" fill="#f5a623" />
        <rect x="5" y="14" width="1" height="4" fill="#f5a623" />
        {/* Highlight top of head */}
        <rect x="7" y="11" width="4" height="2" fill="#ffd358" />
        {/* Shading bottom of head */}
        <rect x="6" y="19" width="5" height="1" fill="#d97d0c" />
        {/* Eye */}
        <rect x="9" y="14" width="2" height="4" fill="#2e1e0f" />

        {/* === BLACK STRIPE 1 === */}
        <rect x="11" y="11" width="2" height="10" fill="#2e1e0f" />

        {/* === YELLOW BODY SEGMENT 2 (Middle) === */}
        <rect x="13" y="11" width="4" height="10" fill="#f5a623" />
        <rect x="13" y="11" width="4" height="2" fill="#ffd358" />
        <rect x="13" y="19" width="4" height="2" fill="#d97d0c" />

        {/* === BLACK STRIPE 2 === */}
        <rect x="17" y="11" width="2" height="10" fill="#2e1e0f" />

        {/* === YELLOW BODY SEGMENT 3 (Back) === */}
        <rect x="19" y="11" width="4" height="10" fill="#f5a623" />
        <rect x="19" y="11" width="4" height="2" fill="#ffd358" />
        <rect x="19" y="19" width="4" height="2" fill="#d97d0c" />

        {/* === BLACK STRIPE 3 === */}
        <rect x="23" y="11" width="2" height="10" fill="#2e1e0f" />

        {/* === YELLOW BODY SEGMENT 4 (Tail) === */}
        <rect x="25" y="12" width="3" height="8" fill="#f5a623" />
        <rect x="25" y="11" width="2" height="2" fill="#ffd358" />
        <rect x="25" y="19" width="2" height="2" fill="#d97d0c" />

        {/* === LEGS (Underneath) === */}
        <rect x="8" y="22" width="2" height="3" fill="#2e1e0f" />
        <rect x="13" y="22" width="2" height="4" fill="#2e1e0f" />
        <rect x="18" y="22" width="2" height="4" fill="#2e1e0f" />
        <rect x="23" y="22" width="2" height="3" fill="#2e1e0f" />
      </svg>
    </motion.div>
  );
};

