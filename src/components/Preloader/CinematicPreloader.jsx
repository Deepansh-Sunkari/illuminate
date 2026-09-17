import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Cinematic "Door of Light" Portal Preloader
 * Features the vertical illuminated capsule door, ambient cosmic aura,
 * and the silky smooth "Zoom into the Door" dive-through transition.
 */
export const CinematicPreloader = ({ onComplete }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, skip heavy zoom animation
    if (reduceMotion) {
      const t = setTimeout(() => onComplete?.(), 250);
      return () => clearTimeout(t);
    }

    // Safety fallback timeout (never block indefinitely)
    const safetyTimer = setTimeout(() => {
      handleTriggerZoom();
    }, 4500);

    return () => clearTimeout(safetyTimer);
  }, [reduceMotion]);

  const handleTriggerZoom = () => {
    if (isZooming || isSkipped) return;
    setIsZooming(true);

    // Zoom duration is ~750ms, then handoff to homepage with smooth fade
    setTimeout(() => {
      onComplete?.();
    }, 750);
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
      <div className="fixed inset-0 z-50 bg-[#05020c] transition-opacity duration-300 opacity-0 pointer-events-none" />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05020c] overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top Right Minimal Skip Button */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-purple-950/40 focus:outline-none"
      >
        Skip
      </button>

      {/* Floating Background Stars / Stardust */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute top-[15%] left-[48%] w-1 h-1 rounded-full bg-purple-200/80 animate-pulse" />
        <span className="absolute top-[34%] left-[38%] w-1 h-1 rounded-full bg-purple-300/60 animate-pulse" style={{ animationDuration: '3s' }} />
        <span className="absolute top-[52%] left-[8%] w-1.5 h-1.5 rounded-full bg-slate-400/50" />
        <span className="absolute top-[67%] left-[22%] w-1 h-1 rounded-full bg-purple-400/70 animate-pulse" style={{ animationDuration: '4s' }} />
        <span className="absolute top-[53%] right-[12%] w-1 h-1 rounded-full bg-slate-300/60" />
        <span className="absolute top-[28%] right-[24%] w-1.5 h-1.5 rounded-full bg-purple-200/60" />
      </div>

      {/* Ambient Radial Violet Glow Behind Portal */}
      <motion.div
        className="absolute w-[340px] sm:w-[500px] h-[500px] sm:h-[640px] rounded-full bg-gradient-to-tr from-purple-700/25 via-violet-500/35 to-transparent blur-[95px] pointer-events-none"
        animate={{
          scale: isZooming ? [1, 3.5] : [0.95, 1.05, 0.95],
          opacity: isZooming ? [0.6, 1] : [0.5, 0.7, 0.5],
        }}
        transition={{
          scale: isZooming ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: isZooming ? { duration: 0.8 } : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Portal & Door Assembly (The Zoom Target) */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer my-auto"
        onClick={handleTriggerZoom}
        animate={
          isZooming
            ? {
                scale: [1, 20],
                opacity: [1, 0.9, 0],
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Dark Oval Wings Frame (Backdrop Panel) */}
        <div className="w-56 sm:w-72 md:w-80 h-72 sm:h-96 md:h-[400px] rounded-full bg-[#0a0518] border border-purple-900/30 flex items-center justify-center relative shadow-2xl overflow-hidden">
          {/* Dark Inner Shadow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

          {/* Vertical Capsule "Door" of Light */}
          <div className="relative w-20 sm:w-24 md:w-28 h-64 sm:h-80 md:h-[350px] rounded-[9999px] bg-[#12082b] border border-purple-500/50 flex items-center justify-center shadow-[0_0_35px_rgba(147,51,234,0.4)] overflow-hidden">
            {/* Radiating Light Aura Spread */}
            <div className="absolute inset-y-0 w-16 sm:w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-md" />

            {/* Intense Center Neon Beam */}
            <div className="w-1 sm:w-1.5 h-full bg-white shadow-[0_0_15px_#ffffff,0_0_30px_#c084fc,0_0_60px_#a855f7] z-10" />

            {/* Upper & Lower Light Flairs */}
            <div className="absolute top-0 w-10 h-10 bg-white/40 rounded-full blur-sm" />
            <div className="absolute bottom-0 w-10 h-10 bg-white/40 rounded-full blur-sm" />
          </div>
        </div>
      </motion.div>

      {/* Text & Button Area (Fades Out on Zoom) */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-4 pb-12 sm:pb-16"
        animate={
          isZooming
            ? { opacity: 0, y: 30 }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.35 }}
      >
        {/* Institution Label */}
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.22em] text-amber-400 uppercase">
          E-CELL, RAGHU ENGINEERING COLLEGE
        </span>

        {/* Event Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-1.5 font-sans">
          ILLUMINATE
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium tracking-wide">
          Step Through. Build What&apos;s Next.
        </p>

        {/* Golden "Explore Illuminate" Action Button */}
        <button
          type="button"
          onClick={handleTriggerZoom}
          className="mt-6 px-7 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:shadow-[0_0_35px_rgba(245,158,11,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Explore Illuminate
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CinematicPreloader;
