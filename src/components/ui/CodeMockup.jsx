import React, { useState } from 'react';
import { Terminal, Sparkles, Check, Copy, ExternalLink, Code2, Cpu } from 'lucide-react';

export const CodeMockup = () => {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    react: `// TheWebCraftLab.jsx
import { createFastWebsite } from '@webcraft/core';

export const ClientGrowthEngine = () => {
  const website = createFastWebsite({
    brand: "Your Business & Brand",
    location: "Remote & Worldwide Digital Studio",
    features: [
      "Ultra-Fast Vite + React",
      "Tailwind Pixel-Perfect UI",
      "SEO #1 Google Visibility",
      "Instant Lead Capture Forms"
    ],
    conversionGoal: "Turn Visitors into Paying Clients"
  });

  return website.launch();
};`,
    tailwind: `/* Modern Performance Stack */
.client-website {
  display: grid;
  speed: 0.8s;
  bounce-rate: -42%;
  inquiries: +150%;
  mobile-optimized: true;
  crafted-by: "The WebCraft Lab";
}`,
    metrics: `// Live Core Web Vitals
{
  "Performance": 100,
  "Accessibility": 100,
  "BestPractices": 100,
  "SEO": 100,
  "FCP": "0.5s (Lightning)",
  "LCP": "0.9s (Instant)",
  "CLS": 0.00
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Badge 1 */}
      <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white border border-emerald-500/40 shadow-xl backdrop-blur-md text-xs font-semibold animate-float">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>⚡ 99+ Lighthouse Score</span>
      </div>

      {/* Floating Badge 2 */}
      <div className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white border border-brand-cyan/40 shadow-xl backdrop-blur-md text-xs font-semibold animate-float" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
        <span>🚀 100% Client Satisfaction</span>
      </div>

      {/* Code Card Terminal */}
      <div className="rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100" />
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">TheWebCraftLab.app</span>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab('react')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === 'react' ? 'bg-brand-accent/20 text-brand-cyan font-medium border border-brand-accent/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              App.jsx
            </button>
            <button
              onClick={() => setActiveTab('tailwind')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === 'tailwind' ? 'bg-brand-accent/20 text-brand-cyan font-medium border border-brand-accent/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Styles.css
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeTab === 'metrics' ? 'bg-brand-accent/20 text-brand-cyan font-medium border border-brand-accent/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Vitals.json
            </button>
          </div>

          {/* Copy Action */}
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-white p-1.5 rounded hover:bg-slate-800 transition-colors"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300 max-h-[380px]">
          <pre className="selection:bg-brand-accent/30 selection:text-white">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Terminal Footer Status Bar */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Ready for Production</span>
          </div>
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>React 18</span>
            <span>Tailwind 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeMockup;
