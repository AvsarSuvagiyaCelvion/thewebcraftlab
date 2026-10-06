import React from 'react';
import { 
  Zap, 
  Smartphone, 
  SearchCheck, 
  BadgeIndianRupee, 
  Clock, 
  Headphones, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { whyChooseUs } from '../data/whyChooseUs';
import SectionHeading from '../components/common/SectionHeading';
import GlowCard from '../components/common/GlowCard';
import Badge from '../components/common/Badge';

const benefitIcons = {
  Zap,
  Smartphone,
  SearchCheck,
  BadgeIndianRupee,
  Clock,
  Headphones
};

export const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Why The WebCraft Lab"
          badgeIcon={ShieldCheck}
          title="Engineered For Results,"
          highlight="Not Just Aesthetics"
          subtitle="We focus on what truly drives client revenue: lightning-fast speeds, flawless mobile usability, and zero technical headaches."
        />

        {/* 6 Reasons Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((benefit, index) => {
            const IconComponent = benefitIcons[benefit.icon] || Sparkles;

            return (
              <GlowCard
                key={benefit.title}
                className="flex flex-col justify-between"
                glowColor={index % 2 === 0 ? 'purple' : 'cyan'}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent dark:text-brand-cyan flex items-center justify-center border border-brand-accent/30 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="cyan" size="xs">
                      {benefit.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed in every project</span>
                </div>
              </GlowCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
