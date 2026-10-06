import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { faqs } from '../data/faqs';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background visual highlight */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Clear Answers"
            badgeIcon={HelpCircle}
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Everything you need to know about pricing, timelines, our process, and after-launch support."
          />
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-dark-card border-brand-accent/50 dark:border-brand-accent/50 shadow-md'
                    : 'bg-white/80 dark:bg-dark-card/50 border-slate-200/90 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent min-h-[52px]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-heading font-semibold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-accent text-white rotate-180 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 mt-1"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Support Prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center p-6 rounded-2xl bg-white dark:bg-dark-card/40 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        >
          <div className="text-left">
            <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base">
              Have a question that is not answered here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Send a quick direct message on Instagram or email us directly.
            </p>
          </div>
          <Button
            href={siteConfig.socials.instagram.url}
            variant="instagram"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={MessageCircle}
          >
            Ask on Instagram
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default FaqSection;
