import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Mail, 
  Instagram, 
  Sparkles, 
  Code2, 
  FileCode, 
  Palette, 
  Globe, 
  Cpu, 
  Server, 
  GitBranch, 
  Layers, 
  Smartphone,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { skills, developerBio } from '../data/skills';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import GlowCard from '../components/common/GlowCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const skillIcons = {
  Code2,
  FileCode,
  Palette,
  Globe,
  Sparkles,
  Cpu,
  Server,
  GitBranch,
  Layers,
  Smartphone
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-dark-bg/50">
      {/* Glow behind section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="About The Craft"
            badgeIcon={User}
            title="The Developer Behind"
            highlight="The WebCraft Lab"
            subtitle="A dedicated freelance developer in Surat, Gujarat helping businesses modernise their web presence."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Core Values */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-5">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 p-0.5 border border-brand-accent/40 shadow-lg flex items-center justify-center">
                  <img
                    src="/brand/logo.jpg"
                    alt="The WebCraft Lab Logo"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {developerBio.brand}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-brand-accent dark:text-brand-cyan font-semibold mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{developerBio.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio paragraphs */}
              {developerBio.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Quick Contact Badges */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-accent dark:hover:text-brand-cyan transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-accent" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@thewebcraftlab</span>
                </a>
              </div>

            </div>

            {/* Core Values */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Our Non-Negotiable Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {developerBio.coreValues.map((val, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800/80 shadow-xs"
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                      {val.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                      {val.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Skills & Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800/80 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    Tech Stack & Arsenal
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Modern tools selected for performance, maintainability, and visual fidelity.
                  </p>
                </div>
                <Badge variant="cyan" size="xs">
                  Modern Tools
                </Badge>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {skills.map((skill, idx) => {
                  const IconComp = skillIcons[skill.icon] || Sparkles;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-brand-accent/40 transition-all flex items-center justify-between group shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white dark:bg-dark-card text-brand-accent dark:text-brand-cyan shadow-xs group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            {skill.category}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-accent/10 text-brand-accent dark:text-brand-cyan">
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Assurance */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Clean Code & Maintainability</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Guaranteed</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
