import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Zap, Smartphone } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 shadow-2xl z-10">
        {/* Header Image / Hero */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-black/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title on Image */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="cyan">{project.category}</Badge>
              {project.featured && <Badge variant="accent">Featured Project</Badge>}
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {project.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Metrics Grid */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200 dark:border-slate-800/80">
              {Object.entries(project.stats).map(([key, val]) => (
                <div key={key} className="text-center">
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">
                    {key}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-brand-accent dark:text-brand-cyan mt-0.5">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="default" size="md">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <Button
              href={project.liveDemo}
              variant="primary"
              size="md"
              icon={ExternalLink}
              iconPosition="right"
            >
              Launch Live Demo
            </Button>
            <Button
              href={project.sourceCode}
              variant="secondary"
              size="md"
              icon={Github}
            >
              View Source Code
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              size="md"
              className="ml-auto"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
