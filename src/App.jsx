import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingInstagram from './components/layout/FloatingInstagram';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import InfiniteMarquee from './components/common/InfiniteMarquee';
import ComingSoonPage from './components/ui/ComingSoonPage';
import { Eye, Lock } from 'lucide-react';

import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ProcessSection from './sections/ProcessSection';
import WhyChooseSection from './sections/WhyChooseSection';
import AboutSection from './sections/AboutSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';

// 🚀 Toggle this to FALSE on Sunday to launch for everyone!
const IS_COMING_SOON_ACTIVE = true;

function App() {
  const [isPreviewUnlocked, setIsPreviewUnlocked] = useState(false);

  useEffect(() => {
    // Check if ?preview=true is in URL or saved in localStorage
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'true' || localStorage.getItem('thewebcraftlab_preview') === 'true') {
      setIsPreviewUnlocked(true);
    }
  }, []);

  const handleUnlockPreview = () => {
    setIsPreviewUnlocked(true);
    localStorage.setItem('thewebcraftlab_preview', 'true');
  };

  const handleLockPreview = () => {
    setIsPreviewUnlocked(false);
    localStorage.removeItem('thewebcraftlab_preview');
    // clean url
    if (window.location.search) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  // If Coming Soon is active and owner hasn't unlocked preview:
  if (IS_COMING_SOON_ACTIVE && !isPreviewUnlocked) {
    return (
      <ThemeProvider>
        <ComingSoonPage onUnlockPreview={handleUnlockPreview} />
        <Analytics />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-accent/20 selection:text-brand-accent">
        
        {/* Secret Preview Notice Bar for You (Owner) */}
        {IS_COMING_SOON_ACTIVE && isPreviewUnlocked && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-[11px] sm:text-xs font-bold py-1 px-4 flex items-center justify-between shadow-lg">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" />
              <span>Owner Preview Mode Active (Normal visitors see Coming Soon until Sunday)</span>
            </span>
            <button
              onClick={handleLockPreview}
              className="underline hover:text-slate-200 cursor-pointer text-[10px] sm:text-xs"
            >
              Back to Coming Soon
            </button>
          </div>
        )}

        {/* Animated Scroll Progress Bar at Top */}
        <ScrollProgressBar />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className={`flex-grow ${IS_COMING_SOON_ACTIVE && isPreviewUnlocked ? 'pt-6' : ''}`}>
          <HeroSection />
          <InfiniteMarquee />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <WhyChooseSection />
          <AboutSection />
          <FaqSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Utilities */}
        <FloatingInstagram />
        <ScrollToTop />

        {/* Real-time Website Traffic & Analytics */}
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
