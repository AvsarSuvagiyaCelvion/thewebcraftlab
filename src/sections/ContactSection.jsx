import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    budgetRange: '₹2000 - ₹4000',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief message about your project (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    try {
      if (formspreeId && formspreeId !== 'your_formspree_form_id') {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Submission failed');
        }
      } else {
        // Simulated smooth submission when Formspree endpoint is not configured
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setIsSubmitted(true);
      setToastMessage({
        text: 'Thank you! Your project inquiry has been received. We will get back to you within 24 hours.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'Business Website',
        budgetRange: '₹2000 - ₹4000',
        message: ''
      });
    } catch (err) {
      setToastMessage({
        text: 'Oops! Could not send message directly. Please email us at thewebcraftlab@gmail.com or DM on Instagram.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setToastMessage({
      text: 'Email address copied to clipboard: thewebcraftlab@gmail.com',
      type: 'info'
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-dark-bg/50">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Let's Build Something Great"
            badgeIcon={Send}
            title="Get a Free Project"
            highlight="Quote & Proposal"
            subtitle="Ready to transform your online presence? Fill out the brief form below or connect directly via Instagram DM or Email."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card/90 border border-slate-200/90 dark:border-slate-800/80 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  We respond to all project inquiries within 24 hours.
                </p>
              </div>

              {/* Contact Methods Cards */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-accent/10 text-brand-accent dark:text-brand-cyan">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Official Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-brand-accent dark:hover:text-brand-cyan transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* Instagram DM Card */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-600 dark:text-pink-400">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Fastest Response on Instagram
                      </div>
                      <a
                        href={siteConfig.socials.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1"
                      >
                        <span>{siteConfig.socials.instagram.handle}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Location & Craft Base
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {siteConfig.location.display}
                    </div>
                  </div>
                </div>

              </div>

              {/* Instagram CTA Button */}
              <Button
                href={siteConfig.socials.instagram.url}
                variant="instagram"
                size="lg"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                icon={Instagram}
              >
                Message on Instagram DM
              </Button>

              {/* Trust Badge */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Privacy guaranteed. Zero spam, ever.</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Quote Request Form */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800/80 shadow-sm relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to The WebCraft Lab. We've received your project details and will review them and send you a proposal within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-bg border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                        required
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@business.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-bg border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800'
                        }`}
                        required
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Project Type */}
                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      >
                        <option value="Business Website">Business Website (Multi-Page)</option>
                        <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                        <option value="Portfolio Website">Portfolio / Personal Branding</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                        <option value="Website Redesign">Website Redesign & Revamp</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                        <option value="Other Custom Project">Other Custom Project</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label htmlFor="contact-budget" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="contact-budget"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                      >
                        <option value="₹1000 - ₹2000">₹1000 - ₹2000</option>
                        <option value="₹2000 - ₹4000">₹2000 - ₹4000</option>
                        <option value="₹4000 - ₹8000">₹4000 - ₹8000</option>
                        <option value="₹8000 - ₹10000">₹8000 - ₹10000</option>
                        <option value="₹10000+">₹10000+</option>
                        <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                      </select>
                    </div>

                  </div>

                  {/* Project Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Project Details & Goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business, target audience, timeline, or any reference websites you like..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-bg border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-y ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-800'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={Send}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Submitting Your Inquiry...' : 'Send Inquiry & Get Proposal'}
                  </Button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
                    No hidden fees. We will send a customized proposal and project roadmap.
                  </p>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage.text}
          type={toastMessage.type}
          onClose={() => setToastMessage(null)}
        />
      )}
    </section>
  );
};

export default ContactSection;
