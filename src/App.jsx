import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingInstagram from './components/layout/FloatingInstagram';
import ScrollToTop from './components/layout/ScrollToTop';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import InfiniteMarquee from './components/common/InfiniteMarquee';

import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ProcessSection from './sections/ProcessSection';
import WhyChooseSection from './sections/WhyChooseSection';
import AboutSection from './sections/AboutSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 relative selection:bg-brand-accent/20 selection:text-brand-accent">
        
        {/* Animated Scroll Progress Bar at Top */}
        <ScrollProgressBar />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
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
