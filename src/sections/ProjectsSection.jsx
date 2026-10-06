import React, { useState, useMemo } from 'react';
import { Sparkles, ExternalLink, Github, Eye, Layers, Filter } from 'lucide-react';
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
    return projects.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Featured Portfolio"
          badgeIcon={Layers}
          title="Recent Work &"
          highlight="Digital Craft"
          subtitle="Explore our curated collection of high-performance websites, client portals, and e-commerce storefronts designed to turn clicks into clients."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[40px] ${
                  isActive
                    ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20 scale-105'
                    : 'bg-slate-100 dark:bg-dark-card text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-dark-card/90 border border-slate-200/90 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-accent/40 dark:hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between"
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

                {/* Category & Badge overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <Badge variant="cyan" size="xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent" size="xs">
                      Featured
                    </Badge>
                  )}
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
                    title="Open live demo"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
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
                  <Button
                    href={project.sourceCode}
                    variant="secondary"
                    size="sm"
                    className="px-3"
                    icon={Github}
                    ariaLabel="View source code on GitHub"
                  />
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-slate-500 hover:text-brand-accent dark:hover:text-white px-2 py-2"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

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
