import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="process" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden bg-slate-50/70 dark:bg-dark-bg/50">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Simple 4-Step Journey"
            badgeIcon={Clock}
            title="From Concept to"
            highlight="Live Launch"
            subtitle="A transparent, collaborative, and battle-tested workflow that ensures your website is delivered on-time, bug-free, and built to convert."
          />
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          
          {processSteps.map((item, index) => {
            const IconComponent = processIcons[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between p-4 sm:p-7 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-brand-accent/50 dark:hover:border-brand-accent/50 transition-all duration-300 group"
              >
                {/* Step Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-brand-accent to-brand-cyan text-white font-heading font-extrabold text-base sm:text-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <Badge variant="cyan" size="xs">
                      {item.duration}
                    </Badge>
                  </div>

                  {/* Step Title & Nickname */}
                  <div className="mb-2 sm:mb-3">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-accent dark:text-brand-cyan">
                      Step {index + 1}: {item.name}
                    </span>
                    <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900 dark:text-white mt-0.5 sm:mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                    What You Get
                  </h4>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {item.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
