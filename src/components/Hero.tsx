import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PixelBee } from './PixelBee';

export const Hero: React.FC = () => {
  const commandFull = "> MerlyDev.init()";
  const titleFull = "Descubriendo\nbit a bit...";

  const [command, setCommand] = useState("");
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState<'command' | 'title' | 'done'>('command');

  useEffect(() => {
    let timer: number;

    if (phase === 'command') {
      if (command.length < commandFull.length) {
        timer = window.setTimeout(() => {
          setCommand(commandFull.slice(0, command.length + 1));
        }, 65);
      } else {
        timer = window.setTimeout(() => {
          setPhase('title');
        }, 400);
      }
    } else if (phase === 'title') {
      if (title.length < titleFull.length) {
        timer = window.setTimeout(() => {
          setTitle(titleFull.slice(0, title.length + 1));
        }, 80);
      } else {
        setPhase('done');
      }
    }

    return () => clearTimeout(timer);
  }, [command, title, phase]);

  const scrollToNext = () => {
    const target = document.getElementById('sobre-mi') || document.getElementById('proyectos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-14 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto">
        {/* The Exact Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#cbd99e] rounded-[32px] sm:rounded-[40px] shadow-xl shadow-[#6c7c39]/10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
        >
          {/* Left Column: Pixel Art Bee 🐝 */}
          <div className="flex-1 flex items-center justify-center py-4">
            <PixelBee className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72" />
          </div>

          {/* Right Column: Console Typewriter Title & Action Button */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Line 1: Console command */}
            <div className="text-lg sm:text-2xl font-serif font-bold text-[#323e11] tracking-wide flex items-center min-h-[32px]">
              <span>{command}</span>
              {phase === 'command' && (
                <span className="inline-block w-2.5 sm:w-3 h-5 sm:h-6 bg-[#323e11] ml-1 animate-pulse" />
              )}
            </div>

            {/* Line 2: Main Headline with typewriter effect */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-bold tracking-tight text-[#6c7c39] leading-[1.08] select-none min-h-[110px] sm:min-h-[160px] whitespace-pre-line">
              {title}
              {phase !== 'command' && (
                <span className="inline-block w-3 sm:w-4 h-9 sm:h-14 bg-[#6c7c39] ml-1.5 align-middle animate-pulse" />
              )}
            </h1>

            {/* Button: "¿Qué más?" */}
            <div className="w-full flex justify-center md:justify-start pt-2">
              <button
                onClick={scrollToNext}
                className="px-9 py-3 rounded-full bg-[#323e11] hover:bg-[#455417] text-white font-serif font-bold text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                ¿Qué más?
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
