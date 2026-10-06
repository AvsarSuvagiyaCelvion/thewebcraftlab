import React from 'react';
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
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/50 dark:bg-dark-bg/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Tailored Solutions"
          badgeIcon={Sparkles}
          title="Services Engineered for"
          highlight="Maximum Impact"
          subtitle="From bespoke business portals to high-converting sales landing pages, we build web solutions designed to solve business problems and generate real revenue."
        />

        {/* Services Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.icon] || Sparkles;

            return (
              <GlowCard
                key={service.id}
                className="flex flex-col justify-between relative overflow-hidden group"
                glowColor={index % 2 === 0 ? 'indigo' : 'cyan'}
              >
                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="accent" size="xs">
                      {service.tag}
                    </Badge>
                  </div>
                )}
                {!service.popular && service.tag && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" size="xs">
                      {service.tag}
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent dark:text-brand-cyan mb-5 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent dark:text-brand-cyan hover:underline group-hover:gap-2 transition-all"
                  >
                    <span>Request this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-accent/10 via-purple-500/10 to-brand-cyan/10 border border-brand-accent/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
              Need a custom solution not listed here?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              We also build custom dashboards, API integrations, and tailored web applications.
            </p>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="shrink-0"
          >
            Discuss Custom Project
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
