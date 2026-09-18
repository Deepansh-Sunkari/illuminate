import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

/**
 * Animated Stat Counter with IntersectionObserver and Number Rolling
 */
export const StatCard = ({ value, label, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const count = useMotionValue(0);

  // Parse target number and suffix (e.g. "100K+" -> 100, "K+")
  const numStr = String(value).replace(/[^0-9.]/g, '');
  const suffix = String(value).replace(/[0-9.]/g, '');
  const targetNumber = parseFloat(numStr) || 0;

  // Format the rolling number back to an integer string with the suffix
  const displayValue = useTransform(count, (latest) => {
    return Math.floor(latest) + suffix;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        animate(count, targetNumber, {
          duration: 2,
          ease: "easeOut"
        });
      }, delay);
    }
  }, [isVisible, targetNumber, delay, count]);

  return (
    <div
      ref={cardRef}
      className={`glass-panel glass-panel-interactive p-5 sm:p-6 rounded-2xl border-purple-500/20 text-center flex flex-col justify-center items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <motion.div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-violet-300 to-electric-neon tracking-tight drop-shadow-md">
        {displayValue}
      </motion.div>
      <div className="text-xs sm:text-sm text-purple-300/90 mt-2 uppercase font-semibold tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const StatsCounter = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
      {stats.map((stat, idx) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          delay={idx * 120}
        />
      ))}
    </div>
  );
};

export default StatsCounter;
