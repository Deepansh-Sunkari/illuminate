import React, { useEffect, useState, useRef } from 'react';

/**
 * Premium Interactive Ambient Mouse Cursor
 * Smooth dual-element cursor: instant tracking inner dot + fluid lerp trailing halo ring.
 * Automatically expands over interactive links and buttons.
 * Touch-safe (disabled on touch devices via pointer: fine check).
 */
export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Position tracking refs
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only run on devices with a fine pointer (desktop mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instantly position the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over an interactive element
      const target = e.target;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, select, textarea, [role="button"], [role="link"], .cursor-pointer, .glass-panel-interactive'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the outer trailing halo ring
    const render = () => {
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // If invisible or on mobile, don't render DOM
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Trailing Ambient Halo Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-14 h-14 border border-purple-400/80 bg-purple-500/15 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-[1px]'
            : isClicked
            ? 'w-8 h-8 border-2 border-amber-400/90 bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
            : 'w-9 h-9 border border-purple-400/50 bg-purple-500/5 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
        }`}
      />

      {/* Instant Central Electric Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform duration-100 ease-out will-change-transform ${
          isHovered
            ? 'w-2 h-2 bg-amber-300 shadow-[0_0_10px_#f59e0b]'
            : isClicked
            ? 'w-3 h-3 bg-white shadow-[0_0_12px_#ffffff]'
            : 'w-2 h-2 bg-purple-300 shadow-[0_0_8px_#c084fc]'
        }`}
      />
    </div>
  );
};

export default CustomCursor;
