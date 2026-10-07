import React from 'react';
import { Sparkles, Zap, ShieldCheck, Smartphone, TrendingUp, CheckCircle2, Rocket } from 'lucide-react';

export const InfiniteMarquee = () => {
  const items = [
    { icon: Zap, text: "99+ Blazing Fast Lighthouse Speed" },
    { icon: Smartphone, text: "100% Mobile Responsive Layout" },
    { icon: Rocket, text: "Built with React 18 & Tailwind CSS" },
    { icon: TrendingUp, text: "High-Converting Sales Landing Pages" },
    { icon: ShieldCheck, text: "Zero Slow WordPress Templates" },
    { icon: Sparkles, text: "Interactive Smooth Animations" },
    { icon: CheckCircle2, text: "SEO & Google Discovery Optimized" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-3 sm:py-4 bg-slate-900 dark:bg-slate-950 text-white border-y border-slate-800 select-none">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling ticker */}
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-10">
        {[...items, ...items, ...items].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <div className="p-1 rounded-md bg-brand-accent/20 text-brand-cyan">
                <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="tracking-wide whitespace-nowrap">{item.text}</span>
              <span className="text-slate-600 dark:text-slate-700 ml-3">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
