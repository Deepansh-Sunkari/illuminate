import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Ultra-Smooth High Performance Animated Cosmic Background
 * Uses pure CSS GPU compositor animations for glowing auroras and
 * an optimized lightweight HTML5 canvas for stardust particles.
 */
export const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Debounced Resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Highly optimized particle count: 24 for mobile, 42 for desktop
    const particleCount = width < 768 ? 24 : 42;
    const particles = [];

    const colors = [
      'rgba(192, 132, 252, ', // purple-400
      'rgba(168, 85, 247, ',  // purple-500
      'rgba(129, 140, 248, ', // indigo-400
      'rgba(251, 191, 36, ',  // amber-400
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.4 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    let time = 0;
    const maxDist = 90;
    const maxDistSq = maxDist * maxDist;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Fast single-pass constellation lines (using distSq to avoid expensive Math.sqrt)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw stardust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Twinkle
        const alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.2;
        const clampedAlpha = Math.max(0.1, Math.min(0.9, alpha));

        ctx.fillStyle = `${p.colorBase}${clampedAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when tab is not visible to preserve 100% device battery/CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reduceMotion]);

  return (
    <div
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none bg-[#05020c]"
      aria-hidden="true"
    >
      {/* Aurora Orb 1: Upper Violet Aurora (Smooth CSS GPU float) */}
      <div
        className="absolute -top-32 left-1/4 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-br from-purple-700/20 via-violet-600/12 to-transparent blur-[110px] animate-aurora-slow pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Aurora Orb 2: Right Indigo Wave */}
      <div
        className="absolute top-1/3 -right-32 w-[400px] sm:w-[620px] h-[400px] sm:h-[620px] rounded-full bg-gradient-to-tl from-indigo-700/18 via-purple-900/15 to-transparent blur-[120px] animate-aurora-mid pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Aurora Orb 3: Lower Left Amber/Rose Whisper */}
      <div
        className="absolute bottom-1/4 -left-28 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] rounded-full bg-gradient-to-tr from-amber-500/08 via-purple-600/08 to-transparent blur-[110px] animate-aurora-reverse pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(0,0,0)' }}
      />

      {/* Cyber Perspective Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #a855f7 1px, transparent 1px),
            linear-gradient(to bottom, #a855f7 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 40%, black 20%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 20%, transparent 85%)',
        }}
      />

      {/* 60 FPS Lightweight Constellation Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65"
      />

      {/* Vignette Edge Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05020c]/60 via-transparent to-[#05020c]/80" />
    </div>
  );
};

export default AnimatedBackground;
