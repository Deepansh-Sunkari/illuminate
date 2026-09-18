import React from 'react';
import { motion } from 'framer-motion';

/**
 * Clean plain typographic Illuminate brand logo with animated fire flame on the 'i'
 * Faithfully matches the brand mark with pure SVG vectors and crisp modern typography.
 */
export const IlluminateLogo = ({ size = 'hero', showTagline = true, showYear = true, className = '' }) => {
  const isHero = size === 'hero';
  const isNav = size === 'nav';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Main Logo Lockup */}
      <div className="inline-flex items-end justify-center font-sans tracking-tight leading-none">
        {/* The 'i' with Animated Fire Flame (Slanted to match italic text) */}
        <div className="relative flex flex-col items-center justify-end -mr-3 sm:-mr-4 md:-mr-5 lg:-mr-6 mb-2 sm:mb-4 md:mb-5 -skew-x-12 z-10">
          {/* Ambient Fire Aura Glow */}
          <motion.div
            className="absolute -top-3 sm:-top-5 w-8 sm:w-12 h-10 sm:h-16 rounded-full bg-gradient-to-t from-purple-600/40 via-amber-500/30 to-amber-300/20 blur-md pointer-events-none"
            animate={{
              opacity: [0.6, 0.95, 0.7, 1, 0.6],
              scale: [0.95, 1.08, 0.98, 1.05, 0.95],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Animated Dancing Flame Vector */}
          <motion.div
            className="relative origin-bottom z-10"
            animate={{
              scaleY: [1, 1.08, 0.96, 1.05, 1],
              scaleX: [1, 0.96, 1.02, 0.97, 1],
              rotate: [0, -2, 2, -1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              className={`${
                isHero
                  ? 'w-9 h-16 sm:w-14 sm:h-24 md:w-16 md:h-28' // Made significantly larger
                  : isNav
                  ? 'w-4.5 h-8 sm:w-5 sm:h-9'
                  : 'w-6 h-11 sm:w-7 sm:h-12'
              } overflow-visible drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]`}
              viewBox="0 0 32 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Candle Stick Gradient */}
                <linearGradient id="candleStemGrad" x1="16" y1="20" x2="16" y2="54" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#7e22ce" />
                </linearGradient>

                {/* Outer Flame Gradient */}
                <linearGradient id="fireOuterGrad" x1="16" y1="0" x2="16" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>

                {/* Inner Core Gradient */}
                <linearGradient id="fireCoreGrad" x1="16" y1="8" x2="16" y2="18" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#fef08a" />
                </linearGradient>
              </defs>

              {/* The Stem of the 'i' (Candle Body) */}
              <rect x="13.5" y="22" width="5" height="32" rx="2.5" fill="url(#candleStemGrad)" />

              {/* The Dot of the 'i' (Animated Flame) */}
              <motion.g
                originX="16"
                originY="20"
                animate={{
                  scaleY: [1, 1.1, 0.95, 1.05, 1],
                  rotate: [0, -3, 3, -1, 0],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Outer Flame */}
                <path
                  d="M16 2C13 8 10 13 10 17C10 21 13 22 16 22C19 22 22 21 22 17C22 13 19 8 16 2Z"
                  fill="url(#fireOuterGrad)"
                />
                
                {/* Inner White-Hot Core */}
                <path
                  d="M16 8C14.5 12 13 15 13 17.5C13 19 14.5 20 16 20C17.5 20 19 19 19 17.5C19 15 17.5 12 16 8Z"
                  fill="url(#fireCoreGrad)"
                />
              </motion.g>

              {/* Floating Sparkles */}
              <motion.circle
                cx="16"
                cy="0"
                r="1"
                fill="#fef08a"
                animate={{
                  cy: [2, -6],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Letters "llum" */}
        <span
          className={`font-black italic tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${
            isHero
              ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
              : isNav
              ? 'text-xl sm:text-2xl'
              : 'text-2xl sm:text-3xl'
          }`}
        >
          llum
        </span>

        {/* The second 'i' with Brand Diamond Dot */}
        <div className="relative inline-flex flex-col items-center justify-end">
          {/* Diamond Dot */}
          <div
            className={`rotate-45 bg-gradient-to-tr from-purple-500 to-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.6)] ${
              isHero
                ? 'w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 mb-1 sm:mb-1.5'
                : isNav
                ? 'w-1 h-1 sm:w-1.5 sm:h-1.5 mb-0.5'
                : 'w-1.5 h-1.5 mb-1'
            }`}
          />
          {/* Lower Stem */}
          <span
            className={`font-black italic tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${
              isHero
                ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
                : isNav
                ? 'text-xl sm:text-2xl'
                : 'text-2xl sm:text-3xl'
            }`}
          >
            i
          </span>
        </div>

        {/* Letters "nate" */}
        <span
          className={`font-black italic tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${
            isHero
              ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl'
              : isNav
              ? 'text-xl sm:text-2xl'
              : 'text-2xl sm:text-3xl'
          }`}
        >
          nate
        </span>

        {/* Year Badge (Hero only) */}
        {isHero && showYear && (
          <span className="font-mono font-bold text-xs sm:text-sm md:text-base tracking-widest text-amber-300 px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 ml-2 sm:ml-3 self-center mb-1">
            2026
          </span>
        )}
      </div>

      {/* Official Tagline (Hero only) */}
      {isHero && showTagline && (
        <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase text-purple-300/80 font-mono text-center">
          Empowering The Next Generation of{' '}
          <span className="text-amber-300 font-bold">Changemakers</span>
        </p>
      )}
    </div>
  );
};

export default IlluminateLogo;
