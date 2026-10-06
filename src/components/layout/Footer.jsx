import React from 'react';
import { Code2, Mail, MapPin, Instagram, ArrowUp, Heart } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-850">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 p-0.5 border border-brand-accent/40 shadow-md shadow-brand-accent/20 group-hover:shadow-brand-accent/40 group-hover:border-brand-cyan/60 transition-all duration-300 flex items-center justify-center">
                <img
                  src="/brand/logo.jpg"
                  alt="The WebCraft Lab Logo"
                  className="w-full h-full object-cover rounded-[8px] group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                The WebCraft <span className="text-gradient">Lab</span>
              </span>
            </a>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.tagline} Freelance web design and modern frontend development for small businesses, startups, and local brands.
            </p>

            <div className="space-y-2 pt-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>{siteConfig.location.display}</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-brand-accent dark:hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-pink-500 hover:scale-110 transition-all border border-slate-300 dark:border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2.5 rounded-xl bg-slate-200 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:text-brand-accent hover:scale-110 transition-all border border-slate-300 dark:border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Send Email Inquiry"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#hero" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Work & Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">How We Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Contact / Get Quote</a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Business Websites</a></li>
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Portfolio Sites</a></li>
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">High-ROI Landing Pages</a></li>
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">E-commerce Stores</a></li>
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Speed & UI Redesign</a></li>
              <li><a href="#services" className="hover:text-brand-accent dark:hover:text-brand-cyan transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <p className="text-xs">
                Need a new website or a quick redesign? Drop an email or message on Instagram.
              </p>
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>DM @thewebcraftlab</span>
              </a>
              <p className="text-xs text-slate-500">
                Response time: Within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} {siteConfig.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with passion in</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
