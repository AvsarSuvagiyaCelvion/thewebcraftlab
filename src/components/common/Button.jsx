import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  target,
  rel,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px]";
  
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5",
    icon: "p-2.5 text-sm aspect-square",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-brand-accent via-purple-600 to-brand-cyan text-white shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:scale-[1.02] active:scale-[0.98] border border-white/20",
    secondary: "bg-white dark:bg-dark-card text-slate-800 dark:text-slate-100 hover:text-brand-accent dark:hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-brand-accent/50 dark:hover:border-brand-cyan/50 hover:bg-slate-50 dark:hover:bg-dark-surface shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
    outline: "bg-transparent text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-brand-accent hover:text-brand-accent dark:hover:text-brand-cyan hover:bg-brand-accent/5",
    ghost: "bg-transparent text-slate-700 dark:text-slate-300 hover:text-brand-accent dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60",
    glow: "bg-gradient-to-r from-brand-cyan via-teal-500 to-brand-accent text-white shadow-lg shadow-brand-cyan/30 hover:shadow-brand-cyan/50 hover:scale-[1.02] active:scale-[0.98]",
    instagram: "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] border border-white/20",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};

export default Button;
