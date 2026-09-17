import React from 'react';

/**
 * Lightweight hardware-accelerated hero ambient spotlight
 * Optimized to complement the global AnimatedBackground without redundant blurs
 */
export const BackgroundGlow = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* Central Upper Ambient Violet Glow (Focused behind Hero Headline) */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[280px] sm:h-[400px] bg-gradient-to-b from-purple-600/18 via-violet-600/08 to-transparent rounded-full blur-[80px] pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(-50%, 0, 0)' }}
      />
    </div>
  );
};

export default BackgroundGlow;
