import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Smartphone, 
  SearchCheck, 
  BadgeDollarSign, 
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
  BadgeDollarSign,
  Clock,
  Headphones
};

export const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Why The WebCraft Lab"
            badgeIcon={ShieldCheck}
            title="Engineered For Results,"
            highlight="Not Just Aesthetics"
            subtitle="We focus on what truly drives client revenue: lightning-fast speeds, flawless mobile usability, and zero technical headaches."
          />
        </motion.div>

        {/* 6 Reasons Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {whyChooseUs.map((benefit, index) => {
            const IconComponent = benefitIcons[benefit.icon] || Sparkles;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <GlowCard
                  className="p-4 sm:p-7 flex flex-col justify-between h-full bg-white dark:bg-dark-card shadow-sm hover:shadow-xl"
                  glowColor={index % 2 === 0 ? 'purple' : 'cyan'}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent dark:text-brand-cyan flex items-center justify-center border border-brand-accent/30 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <Badge variant="cyan" size="xs">
                        {benefit.badge}
                      </Badge>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2.5 group-hover:text-brand-accent dark:group-hover:text-brand-cyan transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Guaranteed in every project</span>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
