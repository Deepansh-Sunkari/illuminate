import React from 'react';

/**
 * Reusable accessible Button with touch-target optimization
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none select-none active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'min-h-[40px] px-3.5 py-1.5 text-xs',
    md: 'min-h-[48px] px-5 py-2.5 text-sm',
    lg: 'min-h-[54px] px-7 py-3.5 text-base',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-glow-sm hover:shadow-glow-md hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30',
    secondary: 'bg-[#160e38] text-purple-200 border border-purple-500/30 hover:bg-[#201550] hover:border-purple-400/60 hover:text-white',
    outline: 'bg-transparent text-slate-200 border border-purple-500/40 hover:bg-purple-950/40 hover:text-white hover:border-purple-400',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-purple-900/20',
    amber: 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold shadow-glow-amber hover:from-amber-400 hover:to-amber-500',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${sizeStyles[size] || sizeStyles.md}
        ${variantStyles[variant] || variantStyles.primary}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : Icon ? (
        <Icon className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </button>
  );
};

export default Button;
