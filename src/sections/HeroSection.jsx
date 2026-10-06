import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Send, ShieldCheck, Zap, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import Button from '../components/common/Button';
import HeroVisual from '../components/ui/HeroVisual';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-radial-grid"
    >
      {/* Dynamic Animated Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[350px] bg-hero-glow rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-cyan/10 dark:bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content with Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            
            {/* Top Pill / Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-accent/10 border border-brand-accent/25 text-brand-accent dark:text-brand-cyan shadow-sm backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                Available for New Projects in <strong className="font-bold">Surat & Global</strong>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              We craft <span className="text-gradient">fast, modern websites</span> that bring you clients.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              High-converting websites handcrafted with React & Tailwind CSS for small businesses, startups, and local brands. No slow templates. Just ultra-fast, client-generating digital craft.
            </motion.p>

            {/* 2 Primary CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40"
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={Send}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Get a Free Quote
              </Button>
            </motion.div>

            {/* Trust Indicator Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 text-left"
            >
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Interactive Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
