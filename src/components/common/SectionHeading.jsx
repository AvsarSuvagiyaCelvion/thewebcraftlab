import React from 'react';

export const SectionHeading = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent dark:text-brand-cyan shadow-sm backdrop-blur-sm ${isCenter ? 'mx-auto' : ''}`}>
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
