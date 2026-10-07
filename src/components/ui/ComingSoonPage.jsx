import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Rocket, 
  Instagram, 
  Mail, 
  Lock, 
  Unlock, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Eye
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

export const ComingSoonPage = ({ onUnlockPreview }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate target launch date (Upcoming Sunday midnight/morning)
  useEffect(() => {
    const getNextSunday = () => {
      const now = new Date();
      const nextSunday = new Date();
      const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(10, 0, 0, 0); // 10:00 AM Sunday
      return nextSunday;
    };

    const targetDate = getNextSunday();

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex flex-col justify-between p-4 sm:p-8 select-none">
      
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-brand-accent/20 via-pink-500/15 to-brand-cyan/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-900 border border-brand-accent/40 p-0.5 shadow-lg flex items-center justify-center">
            <img
              src="/brand/logo.jpg"
              alt="The WebCraft Lab Logo"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white">
            The WebCraft <span className="text-gradient">Lab</span>
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/15 border border-brand-accent/30 text-brand-cyan shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Official Launch This Sunday</span>
        </div>
      </header>

      {/* Main Center Content */}
      <main className="max-w-3xl mx-auto w-full text-center py-8 sm:py-12 space-y-6 sm:space-y-8 my-auto">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-accent/20 to-brand-cyan/20 border border-brand-cyan/30 text-white shadow-lg backdrop-blur-md"
        >
          <Rocket className="w-4 h-4 text-brand-cyan animate-bounce" />
          <span>Crafting Something Extraordinary</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight"
        >
          Our New Studio is <br />
          <span className="text-gradient">Launching This Sunday!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed"
        >
          We are putting final touches on our bespoke web design agency website. Ultra-fast, high-converting digital experiences tailored for modern businesses.
        </motion.p>

        {/* Countdown Timer Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto pt-2"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md text-center"
            >
              <div className="text-2xl sm:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-brand-cyan uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Direct Instagram Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={siteConfig.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-pink-600/25 hover:shadow-pink-600/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Connect on Instagram @thewebcraftlab</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-sm hover:scale-105 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4 text-brand-accent" />
            <span>{siteConfig.email}</span>
          </a>
        </motion.div>

      </main>

      {/* Footer with Secret Admin Preview Unlock */}
      <footer className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 py-4 border-t border-slate-900">
        <p>© {new Date().getFullYear()} The WebCraft Lab. All rights reserved.</p>
        
        {/* Secret Button to Preview Full Site for You */}
        <button
          onClick={onUnlockPreview}
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs px-2.5 py-1 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
          title="Owner Preview Mode"
        >
          <Eye className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Preview Full Website (Owner Access)</span>
        </button>
      </footer>

    </div>
  );
};

export default ComingSoonPage;
