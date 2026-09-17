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
        {/* The 'i' with Animated Fire Flame */}
        <div className="relative flex flex-col items-center justify-end mr-0.5 sm:mr-1">
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
                  ? 'w-7 h-12 sm:w-11 sm:h-20 md:w-13 md:h-24'
                  : isNav
                  ? 'w-3.5 h-6 sm:w-4 sm:h-7'
                  : 'w-5 h-9 sm:w-6 sm:h-10'
              } overflow-visible`}
              viewBox="0 0 32 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Outer Flame Gradient (Electric Purple to Radiant Violet) */}
                <linearGradient id="fireOuterGrad" x1="16" y1="0" x2="16" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="35%" stopColor="#a855f7" />
                  <stop offset="70%" stopColor="#7e22ce" />
                  <stop offset="100%" stopColor="#581c87" />
                </linearGradient>

                {/* Mid Flame Gradient (Fiery Amber-Gold to Violet) */}
                <linearGradient id="fireMidGrad" x1="16" y1="10" x2="16" y2="45" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="25%" stopColor="#f59e0b" />
                  <stop offset="65%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>

                {/* Inner Core Gradient (White Heat) */}
                <linearGradient id="fireCoreGrad" x1="16" y1="18" x2="16" y2="42" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>

                {/* Bulb Base Coil Gradient */}
                <linearGradient id="bulbCoilGrad" x1="8" y1="46" x2="24" y2="54" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>

              {/* Ascending Fire Spark Ember 1 */}
              <motion.circle
                cx="16"
                cy="6"
                r="1.2"
                fill="#fef08a"
                animate={{
                  cy: [8, -6],
                  cx: [16, 14],
                  opacity: [1, 0],
                  scale: [1, 0.3],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />

              {/* Ascending Fire Spark Ember 2 */}
              <motion.circle
                cx="20"
                cy="14"
                r="0.9"
                fill="#c084fc"
                animate={{
                  cy: [14, -2],
                  cx: [20, 23],
                  opacity: [0.9, 0],
                }}
                transition={{
                  duration: 2.1,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.6,
                }}
              />

              {/* Outer Curving Flame Blade */}
              <path
                d="M16 2C16 2 24 12 24 25C24 34 20 42 16 46C12 42 8 34 8 25C8 12 16 2 16 2Z"
                fill="url(#fireOuterGrad)"
              />

              {/* Organic S-Curve Left Flame Tongue */}
              <path
                d="M16 2C13 10 7 17 9 27C10 32 13 38 16 43C13 36 13 28 16 21C18 17 18 8 16 2Z"
                fill="#c084fc"
                opacity="0.8"
              />

              {/* Mid Layer Fire Tongue (Warm Glow) */}
              <motion.path
                d="M16 12C16 12 21 19 21 28C21 34 18 40 16 43C14 40 11 34 11 28C11 19 16 12 16 12Z"
                fill="url(#fireMidGrad)"
                animate={{
                  scaleY: [1, 1.1, 0.95, 1.06, 1],
                  opacity: [0.9, 1, 0.85, 1, 0.9],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Inner White-Hot Core */}
              <path
                d="M16 20C16 20 18.5 25 18.5 30C18.5 35 17.5 39 16 41C14.5 39 13.5 35 13.5 30C13.5 25 16 20 16 20Z"
                fill="url(#fireCoreGrad)"
                opacity="0.95"
              />

              {/* Bulb Base Screws (from the official brand mark) */}
              <rect x="11" y="47" width="10" height="2.5" rx="1.25" fill="url(#bulbCoilGrad)" />
              <rect x="12.5" y="50.5" width="7" height="2" rx="1" fill="#a855f7" />
            </svg>
          </motion.div>
        </div>

        {/* Letters "llum" */}
        <span
          className={`font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent ${
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
            className={`rotate-45 bg-gradient-to-tr from-purple-500 to-violet-400 shadow-glow-sm ${
              isHero
                ? 'w-2 h-2 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 mb-1 sm:mb-1.5'
                : isNav
                ? 'w-1 h-1 sm:w-1.5 sm:h-1.5 mb-0.5'
                : 'w-1.5 h-1.5 mb-1'
            }`}
          />
          {/* Lower Stem */}
          <span
            className={`font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent ${
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
          className={`font-black tracking-tight leading-none bg-gradient-to-b from-white via-slate-100 to-slate-200 bg-clip-text text-transparent ${
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
