import React from 'react';

export const WatercolorBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#FAF8F2]">
      <img
        src="/images/page/background.webp"
        alt="Fondo Acuarela"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};
