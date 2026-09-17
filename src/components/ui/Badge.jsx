import React from 'react';

/**
 * Reusable Badge Component for statuses, categories, and tags
 */
export const Badge = ({
  children,
  variant = 'purple',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  const variantStyles = {
    purple: 'bg-purple-950/70 border-purple-500/40 text-purple-300',
    amber: 'bg-amber-950/50 border-amber-500/50 text-amber-300',
    emerald: 'bg-emerald-950/50 border-emerald-500/50 text-emerald-300',
    slate: 'bg-slate-900/80 border-slate-700/60 text-slate-300',
    rose: 'bg-rose-950/50 border-rose-500/50 text-rose-300',
  };

  const dotColors = {
    purple: 'bg-purple-400',
    amber: 'bg-amber-400 animate-ping',
    emerald: 'bg-emerald-400',
    slate: 'bg-slate-400',
    rose: 'bg-rose-400',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 font-semibold rounded-full border tracking-wide uppercase
        ${sizeStyles[size] || sizeStyles.md}
        ${variantStyles[variant] || variantStyles.purple}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[variant] || 'bg-purple-400'}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
