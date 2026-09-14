import { useState, useEffect } from 'react';
import { Search, X, FolderKanban, Cpu, Briefcase, GraduationCap, Mail, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { playTactileSound } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenRecruiterBrief: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const CommandPalette = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
  onOpenRecruiterBrief,
  soundEnabled,
  onToggleSound,
}: CommandPaletteProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playTactileSound('pop', soundEnabled);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, soundEnabled]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'Projects', icon: <FolderKanban className="w-4 h-4 text-[#d4ff3a]" />, action: () => scrollToId('projects') },
    { label: 'Recruiter Summary', icon: <Briefcase className="w-4 h-4 text-[#38bdf8]" />, action: () => { onClose(); onOpenRecruiterBrief(); } },
    { label: 'Technical Skills', icon: <Cpu className="w-4 h-4 text-[#a78bfa]" />, action: () => scrollToId('skills') },
    { label: 'Academic Education', icon: <GraduationCap className="w-4 h-4 text-emerald-400" />, action: () => scrollToId('education') },
    { label: 'Contact', icon: <Mail className="w-4 h-4 text-[#ff6036]" />, action: () => scrollToId('contact') },
  ];

  const scrollToId = (id: string) => {
    playTactileSound('tick', soundEnabled);
    onClose();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const matchingProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#05070a]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#0c0f16] border border-[#252b3d] shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1a1f2c] bg-[#11141c]">
          <Search className="w-4 h-4 text-[#94a3b8] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, technologies (e.g. React, Typescript)..."
            className="w-full bg-transparent text-sm text-[#f1f5f9] placeholder-[#64748b] focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#1a1f2c] text-[#94a3b8] hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1 text-xs">

          {/* Projects Results */}
          <div className="px-3 py-1.5 text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
            Projects
          </div>
          {matchingProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                playTactileSound('pop', soundEnabled);
                onClose();
                onSelectProject(p);
              }}
              className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#151a24] flex items-center justify-between text-[#cbd5e1] hover:text-white transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.accentColor }} />
                <span className="font-semibold text-sm">{p.title}</span>
                <span className="text-[11px] text-[#64748b] font-mono">({p.category})</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          ))}

          {/* Quick Navigation */}
          <div className="px-3 py-1.5 text-[10px] font-mono text-[#64748b] uppercase tracking-wider pt-2">
            Navigation
          </div>
          {quickNav.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="w-full text-left px-3 py-2 rounded-xl hover:bg-[#151a24] flex items-center justify-between text-[#cbd5e1] hover:text-white transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                {item.icon}
                <span>{item.label}</span>
              </div>
              <span className="text-[10px] font-mono text-[#64748b] group-hover:text-[#94a3b8]">jump</span>
            </button>
          ))}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-[#1a1f2c] bg-[#090b10] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
          <span>Use <strong>Esc</strong> to close</span>
          <span>mili.dev</span>
        </div>
      </div>
    </div>
  );
};
