import React from 'react';
import { 
  MessageSquareText, 
  LayoutDashboard, 
  Code2, 
  Rocket, 
  CheckCircle, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { processSteps } from '../data/process';
import SectionHeading from '../components/common/SectionHeading';
import GlowCard from '../components/common/GlowCard';
import Badge from '../components/common/Badge';

const processIcons = {
  MessageSquareText,
  LayoutDashboard,
  Code2,
  Rocket
};

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-dark-bg/50">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Simple 4-Step Journey"
          badgeIcon={Clock}
          title="From Concept to"
          highlight="Live Launch"
          subtitle="A transparent, collaborative, and battle-tested workflow that ensures your website is delivered on-time, bug-free, and built to convert."
        />

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {processSteps.map((item, index) => {
            const IconComponent = processIcons[item.icon] || Sparkles;

            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-dark-card/90 border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-brand-accent/40 dark:hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Step Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-cyan text-white font-heading font-extrabold text-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <Badge variant="cyan" size="xs">
                      {item.duration}
                    </Badge>
                  </div>

                  {/* Step Title & Nickname */}
                  <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-accent dark:text-brand-cyan">
                      Step {index + 1}: {item.name}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                    What You Get
                  </h4>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
