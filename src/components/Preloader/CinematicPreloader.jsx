import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Cinematic "Door of Light" Preloader
 * Features a glowing white vertical portal. When clicked, the user zooms
 * through the door, flooding the screen with white light before revealing the site.
 */
export const CinematicPreloader = ({ onComplete }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      const t = setTimeout(() => onComplete?.(), 250);
      return () => clearTimeout(t);
    }
    // Removed the automatic 4.5s safetyTimer. The preloader will now wait indefinitely 
    // until the user explicitly clicks the "Start to Begin" button to trigger the zoom.
  }, [reduceMotion, onComplete]);

  const handleTriggerZoom = () => {
    if (isZooming || isSkipped) return;
    setIsZooming(true);

    // Duration of the zoom through the door
    setTimeout(() => {
      onComplete?.();
    }, 850);
  };

  const handleSkip = (e) => {
    e?.stopPropagation();
    setIsSkipped(true);
    setTimeout(() => {
      onComplete?.();
    }, 100);
  };

  if (isSkipped) {
    return (
      <div className="fixed inset-0 z-[100] transition-opacity duration-300 opacity-0 pointer-events-none" />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto bg-[#05020c]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Floating Background Stars / Stardust */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <span className="absolute top-[15%] left-[48%] w-1 h-1 rounded-full bg-purple-200/80 animate-pulse" />
        <span className="absolute top-[34%] left-[38%] w-1 h-1 rounded-full bg-purple-300/60 animate-pulse" style={{ animationDuration: '3s' }} />
        <span className="absolute top-[67%] left-[22%] w-1 h-1 rounded-full bg-purple-400/70 animate-pulse" style={{ animationDuration: '4s' }} />
        <span className="absolute top-[53%] right-[12%] w-1 h-1 rounded-full bg-slate-300/60" />
        <span className="absolute top-[28%] right-[24%] w-1.5 h-1.5 rounded-full bg-purple-200/60" />
      </div>

      {/* Ambient Radial Violet Glow Behind the Door */}
      <motion.div
        className="absolute w-[340px] sm:w-[500px] h-[500px] sm:h-[640px] rounded-full bg-gradient-to-tr from-purple-700/20 via-violet-500/25 to-transparent blur-[85px] pointer-events-none z-0"
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* The Glowing White Door / Portal */}
      <motion.div
        className="absolute z-10 flex items-center justify-center origin-center cursor-pointer -translate-y-12 sm:-translate-y-20 md:-translate-y-24"
        onClick={handleTriggerZoom}
        animate={
          isZooming
            ? { scale: [1, 5, 25], opacity: [1, 1, 1] }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Tall vertical capsule of white light */}
        <div className="relative w-16 sm:w-20 md:w-24 h-64 sm:h-80 md:h-[400px] rounded-[9999px] bg-white shadow-[0_0_40px_#ffffff,0_0_80px_#c084fc] flex items-center justify-center overflow-hidden">
          {/* Intense inner core */}
          <div className="w-1/2 h-full bg-white shadow-[0_0_20px_#ffffff] z-10" />
        </div>
      </motion.div>

      {/* Dark Text-Protection Scrim (Ensures text is legible over the door on all screen sizes) */}
      <motion.div 
        className="absolute inset-0 bg-black/60 pointer-events-none z-15"
        animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Area (Text & Button pinned to the bottom of the screen) */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-end text-center px-4"
        animate={
          isZooming
            ? { opacity: 0, scale: 1.1, y: 30 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Institution Label */}
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.22em] text-purple-300 uppercase mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] [text-shadow:0_0_10px_black]">
          E-CELL, RAGHU ENGINEERING COLLEGE
        </span>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans max-w-3xl leading-[1.15] drop-shadow-[0_4px_10px_rgba(0,0,0,1)] [text-shadow:0_0_30px_black,0_0_60px_black]">
          Your First Step Towards <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent [text-shadow:none]">
            Entrepreneurship
          </span>
        </h1>

        {/* Action Button */}
        <button
          type="button"
          onClick={handleTriggerZoom}
          className="mt-6 sm:mt-8 px-8 py-3 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-slate-100 to-slate-300 hover:from-white hover:to-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          Start to Begin
        </button>
      </motion.div>

      {/* Top Right Minimal Skip Button */}
      <motion.button
        type="button"
        onClick={handleSkip}
        animate={isZooming ? { opacity: 0 } : { opacity: 1 }}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-purple-950/40 focus:outline-none"
      >
        Skip
      </motion.button>
    </motion.div>
  );
};

export default CinematicPreloader;
