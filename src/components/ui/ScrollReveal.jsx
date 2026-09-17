import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal Component
 * High-performance GPU-accelerated viewport entrance with zero repaint stutter.
 */
export function ScrollReveal({
  children,
  delay = 0,
  distance = 22,
  className = '',
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: distance }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -5% 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
