import React, { useState } from 'react';
import { Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingInstagram = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Tooltip bubble */}
      <div className="hidden sm:block absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        💬 Chat on Instagram DM
        <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-slate-900" />
      </div>

      <a
        href={siteConfig.socials.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white shadow-lg shadow-pink-600/30 hover:shadow-pink-600/60 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 min-h-[44px] min-w-[44px]"
        aria-label="Message The WebCraft Lab on Instagram"
      >
        {/* Pulsing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-75 blur-sm animate-pulse-slow -z-10 group-hover:opacity-100" />
        
        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />

        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingInstagram;
