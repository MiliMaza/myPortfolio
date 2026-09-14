import { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Sparkles, Terminal, ChevronRight, ChevronLeft } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  allProjects: Project[];
  onSelectProject: (p: Project) => void;
  soundEnabled: boolean;
}

export const ProjectDetailModal = ({
  project,
  onClose,
  allProjects,
  onSelectProject,
  soundEnabled,
}: ProjectDetailModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playTactileSound('tick', soundEnabled);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, soundEnabled]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#06080c]/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl bg-[#0c0f16] border border-[#252b3d] shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1f2c] bg-[#11141c]/90 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
              {project.category} · {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Next / Prev Project switcher */}
            <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-[#252b3d] pr-3">
              <button
                onClick={() => {
                  playTactileSound('tick', soundEnabled);
                  onSelectProject(prevProject);
                }}
                className="p-1.5 rounded-lg bg-[#151a24] hover:bg-[#1e2535] text-[#94a3b8] hover:text-[#f8fafc] text-xs flex items-center gap-1 transition-colors"
                title={`Previous: ${prevProject.title}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="text-[11px]">Prev</span>
              </button>
              <button
                onClick={() => {
                  playTactileSound('tick', soundEnabled);
                  onSelectProject(nextProject);
                }}
                className="p-1.5 rounded-lg bg-[#151a24] hover:bg-[#1e2535] text-[#94a3b8] hover:text-[#f8fafc] text-xs flex items-center gap-1 transition-colors"
                title={`Next: ${nextProject.title}`}
              >
                <span className="text-[11px]">Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={() => {
                playTactileSound('tick', soundEnabled);
                onClose();
              }}
              className="p-2 rounded-xl bg-[#1a1f2c] hover:bg-[#252b3d] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#cbd5e1] font-sans">

          {/* Header Title & Tagline */}
          <div className="space-y-3">
            <h2 id="project-modal-title" className="font-display font-extrabold text-3xl sm:text-4xl text-[#f8fafc] tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed">
              {project.tagline}
            </p>

            {/* External Links Bar */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#d4ff3a] hover:bg-[#c4ee29] text-[#090b10] font-semibold text-xs flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Live App / Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#141720] hover:bg-[#1e2433] border border-[#252b3d] text-[#f1f5f9] font-medium text-xs flex items-center gap-2 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.links.demoNote && (
                <span className="text-xs font-mono text-[#64748b] pl-1">
                  ({project.links.demoNote})
                </span>
              )}
            </div>
          </div>

          {/* Metrics Spotlight Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#090b10] border border-[#1e2433]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-2">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-[#f8fafc]" style={{ color: project.accentColor }}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-[#64748b] tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#141720] border border-[#252b3d] text-xs font-mono text-[#e2e8f0]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Problem & Engineered Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-2">
              <span className="text-xs font-mono text-[#ff6036] uppercase tracking-wider block font-semibold">
                The Problem
              </span>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-2">
              <span className="text-xs font-mono text-[#d4ff3a] uppercase tracking-wider block font-semibold">
                The Solution
              </span>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Blueprint */}
          {project.architecture && (
            <div className="space-y-3">
              <h4 className="text-sm font-display font-bold text-[#f8fafc] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#d4ff3a]" />
                Architectural Overview
              </h4>
              <div className="p-4 rounded-xl bg-[#090b10] border border-[#1e2433] space-y-2 font-mono text-xs text-[#cbd5e1]">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#64748b] select-none font-bold">0{idx + 1}.</span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features Breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-display font-bold text-[#f8fafc] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4ff3a]" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-1.5">
                  <div className="text-sm font-semibold text-[#f1f5f9] flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4ff3a] shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Decisions & Tradeoffs */}
          {project.technicalDecisions && (
            <div className="space-y-3">
              <h4 className="text-sm font-display font-bold text-[#f8fafc] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#38bdf8]" />
                Technical Decisions
              </h4>
              <div className="space-y-2.5">
                {project.technicalDecisions.map((dec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-1">
                    <div className="text-xs font-mono font-semibold text-[#f1f5f9]">
                      Decision: {dec.title}
                    </div>
                    <div className="text-xs text-[#94a3b8] leading-relaxed">
                      <span className="text-[#64748b] font-mono">Why: </span>
                      {dec.reason}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Learnings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-2">
              <span className="text-xs font-mono text-[#cbd5e1] uppercase font-semibold">
                Challenges
              </span>
              <ul className="space-y-1.5 text-xs text-[#94a3b8] mt-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#ff6036] font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#10131b] border border-[#1e2433] space-y-2">
              <span className="text-xs font-mono text-[#cbd5e1] uppercase font-semibold">
                Learnings
              </span>
              <ul className="space-y-1.5 text-xs text-[#94a3b8] mt-2">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#d4ff3a] font-bold">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-[#1a1f2c] bg-[#11141c] flex items-center justify-between text-xs text-[#94a3b8]">
          <span className="font-mono">mili.dev/projects/{project.slug}</span>
          <button
            onClick={() => {
              playTactileSound('tick', soundEnabled);
              onClose();
            }}
            className="px-4 py-1.5 rounded-lg bg-[#1e2433] hover:bg-[#2e374d] text-[#f1f5f9] font-medium transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
