import React from 'react';

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  const base = "inline-flex items-center font-medium rounded-md transition-colors";
  
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[11px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variants = {
    default: "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60",
    accent: "bg-brand-accent/10 text-brand-accent dark:text-brand-300 border border-brand-accent/20",
    cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20",
    gradient: "bg-gradient-to-r from-brand-accent/10 to-brand-cyan/10 text-slate-900 dark:text-white border border-brand-accent/20",
  };

  return (
    <span className={`${base} ${sizeStyles[size]} ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
