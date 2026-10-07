import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Target, 
  Palette, 
  ShoppingBag, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { services } from '../data/services';
import SectionHeading from '../components/common/SectionHeading';
import GlowCard from '../components/common/GlowCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

// Icon mapper
const serviceIcons = {
  Briefcase,
  Target,
  Palette,
  ShoppingBag,
  RefreshCw,
  ShieldCheck
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden bg-slate-50/70 dark:bg-dark-bg/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Tailored Solutions"
            badgeIcon={Sparkles}
            title="Services Engineered for"
            highlight="Maximum Impact"
            subtitle="From bespoke business portals to high-converting sales landing pages, we build web solutions designed to solve business problems and generate real revenue."
          />
        </motion.div>

        {/* Services Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <GlowCard
                  className="p-4 sm:p-7 flex flex-col justify-between relative overflow-hidden group h-full shadow-sm hover:shadow-xl bg-white dark:bg-dark-card"
                  glowColor={index % 2 === 0 ? 'indigo' : 'cyan'}
                >
                  {/* Popular Pill */}
                  {service.popular && (
                    <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
                      <Badge variant="accent" size="xs">
                        {service.tag}
                      </Badge>
                    </div>
                  )}
                  {!service.popular && service.tag && (
                    <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
                      <Badge variant="default" size="xs">
                        {service.tag}
                      </Badge>
                    </div>
                  )}

                  <div>
                    {/* Icon Container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent dark:text-brand-cyan mb-3.5 sm:mb-5 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2.5 group-hover:text-brand-accent dark:group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-3.5 sm:pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent dark:text-brand-cyan hover:underline group-hover:gap-2 transition-all"
                    >
                      <span>Request this service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-14 p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-accent/10 via-purple-500/10 to-brand-cyan/10 border border-brand-accent/20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left shadow-sm"
        >
          <div>
            <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 dark:text-white">
              Need a custom solution not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              We also build custom dashboards, API integrations, and tailored web applications.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0 w-full sm:w-auto"
          >
            Discuss Custom Project
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
