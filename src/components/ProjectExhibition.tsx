import { useState } from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Filter, Code2, PlusCircle } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface ProjectExhibitionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  soundEnabled: boolean;
  selectedTechFilter: string | null;
  onClearTechFilter: () => void;
}

export const ProjectExhibition = ({
  projects,
  onSelectProject,
  soundEnabled,
  selectedTechFilter,
  onClearTechFilter,
}: ProjectExhibitionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'data-story', label: 'Data & Interactive' },
    { id: 'fullstack', label: 'Healthcare & Full-Stack' },
  ];

  const filteredProjects = projects.filter((project) => {
    // If a tech filter was clicked from the Skills section
    if (selectedTechFilter) {
      const hasTech = project.technologies.some(
        (t) => t.toLowerCase() === selectedTechFilter.toLowerCase()
      );
      if (!hasTech) return false;
    }

    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return project.category.includes('AI') || project.category.includes('Automation');
    if (activeCategory === 'data-story') return project.category.includes('Data') || project.category.includes('Archive');
    if (activeCategory === 'fullstack') return project.category.includes('Healthcare') || project.category.includes('Full-Stack');
    return true;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto text-left">
      {/* Section Header */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff3a]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff3a]">
            Curated Exhibition
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] tracking-tight">
              Selected Works
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mt-2 leading-relaxed">
              Every project is an exploration in systems architecture, algorithmic efficiency, and visual storytelling. Click any card to inspect the full case study.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#10131c] border border-[#1e2433] flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playTactileSound('tick', soundEnabled);
                  setActiveCategory(cat.id);
                  if (selectedTechFilter) onClearTechFilter();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id && !selectedTechFilter
                    ? 'bg-[#d4ff3a] text-[#090b10] font-semibold'
                    : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#151a24]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Cross-Filter Notification */}
        {selectedTechFilter && (
          <div className="p-3 rounded-xl bg-[#141720] border border-[#d4ff3a]/40 flex items-center justify-between text-xs">
            <span className="text-[#cbd5e1] font-mono">
              Filtered by technology: <strong className="text-[#d4ff3a]">{selectedTechFilter}</strong> ({filteredProjects.length} matching)
            </span>
            <button
              onClick={onClearTechFilter}
              className="text-[#94a3b8] hover:text-white underline font-mono text-[11px]"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>

      {/* Asymmetrical Exhibition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project, index) => {
          let layout: 'large' | 'split-left' | 'split-right' | 'compact' = 'compact';
          if (project.id === 'aska-flow') layout = 'large';
          else if (project.id === 'the-archive') layout = 'split-left';
          else if (project.id === 'med-vault') layout = 'split-right';

          return (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              soundEnabled={soundEnabled}
              featuredLayout={layout}
            />
          );
        })}
      </div>

      {/* Extensible Project Pipeline Notice */}
      <div className="mt-8 p-4 rounded-xl bg-[#0b0e14] border border-[#1a1f2c] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748b]">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-[#d4ff3a]" />
          <span>Architecture Notice: Additional projects load dynamically from <code className="text-[#94a3b8] font-mono">/data/projects.ts</code> without component refactoring.</span>
        </div>
        <span className="font-mono text-[11px] text-[#94a3b8]">
          {projects.length} Total Projects Loaded
        </span>
      </div>
    </section>
  );
};
