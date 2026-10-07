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
    <div className={`mb-6 sm:mb-10 md:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-4 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent dark:text-brand-cyan shadow-sm backdrop-blur-sm ${isCenter ? 'mx-auto' : ''}`}>
          {BadgeIcon && <BadgeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-2.5 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
