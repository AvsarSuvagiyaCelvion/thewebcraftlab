import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ExternalLink, Eye, Layers, Filter } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import GlowCard from '../components/common/GlowCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ProjectModal from '../components/ui/ProjectModal';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    const cat = selectedCategory.toLowerCase();
    return projects.filter(
      (project) =>
        project.category.toLowerCase() === cat ||
        (project.secondaryCategory && project.secondaryCategory.toLowerCase() === cat)
    );
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            badge="Featured Portfolio"
            badgeIcon={Layers}
            title="Recent Work &"
            highlight="Digital Craft"
            subtitle="Explore our live client projects and applications built with React, Shopify, and modern full-stack architectures."
          />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center flex-wrap gap-2 mb-12"
        >
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                  isActive
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25 scale-105'
                    : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs'
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group rounded-2xl bg-white dark:bg-dark-card/90 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl ${
                  project.isComingSoon
                    ? 'border-purple-500/40 dark:border-purple-500/50 hover:border-purple-500'
                    : 'border-slate-200/90 dark:border-slate-800/80 hover:border-brand-accent/50 dark:hover:border-brand-accent/50'
                }`}
              >
                {/* Card Image Container */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Category & Coming Soon overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant="cyan" size="xs">
                      {project.category}
                    </Badge>
                    {project.isComingSoon ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30 animate-pulse-slow">
                        <Sparkles className="w-3 h-3" />
                        Coming Soon
                      </span>
                    ) : project.featured ? (
                      <Badge variant="accent" size="xs">
                        Featured
                      </Badge>
                    ) : null}
                  </div>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-white text-slate-900 hover:scale-110 shadow-lg transition-transform"
                      title="View project details"
                      aria-label={`View details of ${project.title}`}
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-brand-accent text-white hover:scale-110 shadow-lg transition-transform"
                      title={project.isComingSoon ? "Preview Store Link" : "Open live demo"}
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.isComingSoon ? (
                      <Button
                        href={project.liveDemo}
                        variant="instagram"
                        size="sm"
                        className="flex-1"
                        icon={Sparkles}
                        iconPosition="left"
                      >
                        Coming Soon
                      </Button>
                    ) : (
                      <Button
                        href={project.liveDemo}
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        icon={ExternalLink}
                        iconPosition="right"
                      >
                        Live Demo
                      </Button>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-slate-500 hover:text-brand-accent dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal display when project is clicked */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
