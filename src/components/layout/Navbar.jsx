import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles, Send, ArrowRight, Code2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../common/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section for scrollspy
      const sections = siteConfig.navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        // Only if not clicking hamburger toggle button
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        if (!toggleBtn || !toggleBtn.contains(event.target)) {
          setMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-dark-bg/85 backdrop-blur-md shadow-md border-b border-slate-200/60 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1"
            aria-label="The WebCraft Lab Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 p-0.5 border border-brand-accent/40 shadow-md shadow-brand-accent/20 group-hover:shadow-brand-accent/40 group-hover:border-brand-cyan/60 transition-all duration-300 flex items-center justify-center">
              <img
                src="/brand/logo.jpg"
                alt="The WebCraft Lab Logo"
                className="w-full h-full object-cover rounded-[8px] group-hover:scale-110 transition-transform duration-300"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                The WebCraft <span className="text-gradient">Lab</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-dark-surface/60 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-inner">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-accent text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={Send}
              iconPosition="right"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-brand-accent min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={mobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down / Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-slate-950/70 backdrop-blur-md z-30 animate-fade-in">
          <div
            ref={menuRef}
            className="w-full bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-accent/15 text-brand-accent dark:text-brand-cyan font-bold border border-brand-accent/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
                icon={Send}
                iconPosition="right"
              >
                Hire Me / Get Quote
              </Button>
              <Button
                href={siteConfig.socials.instagram.url}
                variant="instagram"
                size="md"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on Instagram DM
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
