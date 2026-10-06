import React from 'react';

export const GlowCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'indigo',
  as: Component = 'div',
  ...props
}) => {
  const glowGradients = {
    indigo: 'from-indigo-500/20 via-purple-500/10 to-cyan-500/20',
    cyan: 'from-cyan-500/20 via-teal-500/10 to-indigo-500/20',
    purple: 'from-purple-500/20 via-pink-500/10 to-indigo-500/20',
  };

  return (
    <Component
      className={`relative group rounded-2xl bg-white dark:bg-dark-card/80 border border-slate-200/80 dark:border-slate-800/80 p-6 transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none ${
        hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 hover:border-brand-accent/40 dark:hover:border-brand-accent/50' : ''
      } ${className}`}
      {...props}
    >
      {hoverEffect && (
        <div
          className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${glowGradients[glowColor] || glowGradients.indigo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 pointer-events-none`}
        />
      )}
      {children}
    </Component>
  );
};

export default GlowCard;
