import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-slate-900/90 dark:bg-dark-card/90 text-white border border-slate-700/80 hover:border-brand-accent shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent min-h-[44px] min-w-[44px] flex items-center justify-center group"
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-brand-cyan group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};

export default ScrollToTop;
