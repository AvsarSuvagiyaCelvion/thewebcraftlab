import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Star,
  CheckCircle2,
  ArrowUpRight,
  Eye
} from 'lucide-react';
import Badge from '../common/Badge';

export const HeroVisual = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseProjects = [
    {
      id: "power-house-gym",
      title: "Power House Gym",
      category: "Fitness Web App",
      badge: "React 18 + Vite",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      liveDemo: "https://powerhousegym-seven.vercel.app/",
      metric: "99+ Speed",
      metricSub: "Ultra Fast",
      accent: "from-orange-500 to-amber-500"
    },
    {
      id: "luxury-perfume-store",
      title: "Rimzim Perfumes",
      category: "Shopify E-Commerce",
      badge: "Shopify Store",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      liveDemo: "https://therimzimperfume.com",
      metric: "Luxury",
      metricSub: "Conversion Funnel",
      accent: "from-amber-400 to-yellow-600"
    },
    {
      id: "taste-junction",
      title: "Taste Junction",
      category: "Restaurant & Dining",
      badge: "Full Stack",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      liveDemo: "https://taste-junction-iota.vercel.app/",
      metric: "+150%",
      metricSub: "Online Bookings",
      accent: "from-rose-500 to-pink-500"
    }
  ];

  // Auto-switch showcase tabs every 4 seconds for interactive animated feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [showcaseProjects.length]);

  const activeProject = showcaseProjects[activeTab];

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      
      {/* Dynamic Animated Ambient Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-brand-accent/30 to-brand-cyan/20 rounded-full blur-3xl pointer-events-none -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-tr from-brand-cyan/30 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      {/* Floating Pill Badge 1 - Top Left */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -left-4 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-bold"
      >
        <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
          <Zap className="w-3.5 h-3.5 fill-emerald-500" />
        </div>
        <div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">Lighthouse Score</div>
          <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">⚡ 99+ Blazing Fast</div>
        </div>
      </motion.div>

      {/* Floating Pill Badge 2 - Bottom Right */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md text-xs font-bold"
      >
        <div className="w-6 h-6 rounded-lg bg-brand-accent/15 text-brand-accent dark:text-brand-cyan flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">Client Growth</div>
          <div className="text-xs font-extrabold text-brand-accent dark:text-brand-cyan mt-0.5">+150% Inquiries</div>
        </div>
      </motion.div>

      {/* Main Browser Window Showcase Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
        
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100" />
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center gap-1 bg-white/80 dark:bg-slate-950/70 p-1 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs font-semibold">
            {showcaseProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1 rounded-lg text-xs transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {proj.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="hidden sm:inline">Live</span>
          </div>
        </div>

        {/* Dynamic Project Showcase Content */}
        <div className="relative p-3.5 sm:p-6 bg-slate-50/50 dark:bg-slate-900/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Project Preview Image with Interactive Overlay */}
              <div className="relative h-44 sm:h-64 w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md">
                    {activeProject.category}
                  </span>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-brand-accent text-white shadow-md">
                    {activeProject.badge}
                  </span>
                </div>

                {/* Bottom Details on Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-base sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                      {activeProject.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">
                      Designed & Crafted by The WebCraft Lab
                    </p>
                  </div>

                  <a
                    href={activeProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent/90 text-white shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center min-h-[36px] min-w-[36px] sm:min-h-[40px] sm:min-w-[40px]"
                    title="Visit live website"
                    aria-label={`Visit live website of ${activeProject.title}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-0.5">
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-center shadow-xs">
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Speed</div>
                  <div className="text-[11px] sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">&lt; 1.0s</div>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-center shadow-xs">
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Layout</div>
                  <div className="text-[11px] sm:text-sm font-extrabold text-brand-accent dark:text-brand-cyan mt-0.5">100% Mobile</div>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-center shadow-xs">
                  <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">SEO</div>
                  <div className="text-[11px] sm:text-sm font-extrabold text-purple-600 dark:text-purple-400 mt-0.5">Rank #1 Ready</div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Bar */}
        <div className="px-5 py-3 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Crafted with Precision & Speed</span>
          </div>
          <a
            href="#projects"
            className="font-bold text-brand-accent dark:text-brand-cyan hover:underline inline-flex items-center gap-1"
          >
            <span>See All Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default HeroVisual;
