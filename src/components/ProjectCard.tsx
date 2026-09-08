import React, { useState, MouseEvent } from 'react';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, Play, Activity, Sparkles, Layers, Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

export interface ProjectCardProps {
  key?: string;
  project: Project;
  onSelectProject: (project: Project) => void;
  soundEnabled: boolean;
  featuredLayout?: 'large' | 'split-left' | 'split-right' | 'compact';
}

export const ProjectCard = ({
  project,
  onSelectProject,
  soundEnabled,
  featuredLayout = 'compact',
}: ProjectCardProps) => {
  // Local interactive state for card previews
  const [interactiveRunState, setInteractiveRunState] = useState<string>('idle');
  const [phiDecrypted, setPhiDecrypted] = useState(false);
  const [shotFilter, setShotFilter] = useState<'all' | 'clutch' | 'threePt'>('all');

  const handleOpenDetail = () => {
    playTactileSound('pop', soundEnabled);
    onSelectProject(project);
  };

  const handleInteractiveAction = (e: MouseEvent) => {
    e.stopPropagation();
    playTactileSound('node', soundEnabled);
    
    if (project.id === 'aska-flow') {
      setInteractiveRunState('compiling');
      setTimeout(() => {
        setInteractiveRunState('success');
        playTactileSound('success', soundEnabled);
        setTimeout(() => setInteractiveRunState('idle'), 2500);
      }, 700);
    } else if (project.id === 'med-vault') {
      setPhiDecrypted(!phiDecrypted);
    }
  };

  return (
    <div
      onClick={handleOpenDetail}
      style={{
        borderTopColor: project.accentColor,
      }}
      className={`group relative rounded-2xl bg-[#0d1017] border border-[#1e2433] hover:border-[#334155] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between ${
        featuredLayout === 'large'
          ? 'lg:col-span-12 p-6 sm:p-8'
          : featuredLayout === 'split-left' || featuredLayout === 'split-right'
          ? 'lg:col-span-6 p-6 sm:p-7'
          : 'lg:col-span-6 p-5 sm:p-6'
      }`}
    >
      {/* Subtle top indicator border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px]" 
        style={{ backgroundColor: project.accentColor }} 
      />

      {/* Top Metadata Row */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span 
              className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[#141720] border border-[#252b3d]"
              style={{ color: project.accentColor }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#64748b]">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#94a3b8] px-2 py-0.5 rounded-full bg-[#141720]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
              {project.status}
            </span>
            <span className="p-1.5 rounded-lg bg-[#141720] group-hover:bg-[#252b3d] text-[#cbd5e1] group-hover:text-white transition-colors">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f8fafc] group-hover:text-[#ffffff] transition-colors flex items-center gap-3">
            <span>{project.title}</span>
            {project.featured && (
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#1c2230] text-[#cbd5e1] border border-[#2e384d]">
                Featured
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Specific Interactive Exhibition Canvas / Widget */}
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="mt-4 rounded-xl bg-[#080a0f] border border-[#1a1f2c] p-4 text-xs font-mono overflow-hidden"
        >
          {/* ASKA FLOW Interactive Micro-Builder */}
          {project.id === 'aska-flow' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#94a3b8] pb-1 border-b border-[#1a1f2c]">
                <span className="flex items-center gap-1.5 text-[#d4ff3a]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Workflow Compiler Sandbox
                </span>
                <button
                  onClick={handleInteractiveAction}
                  disabled={interactiveRunState === 'compiling'}
                  className="px-2.5 py-1 rounded bg-[#141720] hover:bg-[#252b3d] text-[#f1f5f9] border border-[#2e384d] flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Play className="w-3 h-3 text-[#d4ff3a]" />
                  {interactiveRunState === 'compiling' ? 'Synthesizing...' : interactiveRunState === 'success' ? 'Deployed!' : 'Test Compile'}
                </button>
              </div>

              {/* Node graph visual representation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 items-center">
                <div className="p-2.5 rounded-lg bg-[#121620] border border-[#1f2738] text-center">
                  <div className="text-[10px] text-[#64748b]">Trigger</div>
                  <div className="text-[#cbd5e1] font-semibold text-xs mt-0.5">Stripe Webhook</div>
                  <div className="text-[9px] text-[#94a3b8]">charge.refunded</div>
                </div>
                
                <div className="text-center relative">
                  <span className="hidden sm:inline-block text-[#64748b]">→</span>
                  <div className={`p-2 rounded-lg border transition-all ${
                    interactiveRunState === 'compiling'
                      ? 'bg-[#d4ff3a]/10 border-[#d4ff3a] text-[#d4ff3a] animate-pulse'
                      : interactiveRunState === 'success'
                      ? 'bg-emerald-950/40 border-emerald-500 text-emerald-400'
                      : 'bg-[#121620] border-[#1f2738] text-[#cbd5e1]'
                  }`}>
                    <div className="text-[10px] text-[#64748b]">LLM Logic Engine</div>
                    <div className="font-semibold text-xs mt-0.5">Zod Schema DAG</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#121620] border border-[#1f2738] text-center">
                  <div className="text-[10px] text-[#64748b]">Execution</div>
                  <div className="text-[#cbd5e1] font-semibold text-xs mt-0.5">n8n Auto-Pipe</div>
                  <div className="text-[9px] text-[#94a3b8]">Postgres + Slack Alert</div>
                </div>
              </div>

              <div className="text-[11px] text-[#64748b] flex items-center justify-between pt-1">
                <span>Direct compilation from plain text to production-ready n8n nodes</span>
                <span className="text-[#d4ff3a]">{project.metrics?.[0]?.value || '< 2.4s'} latency</span>
              </div>
            </div>
          )}

          {/* THE ARCHIVE Interactive Court & Timeline Widget */}
          {project.id === 'the-archive' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#94a3b8] pb-1 border-b border-[#1a1f2c]">
                <span className="flex items-center gap-1.5 text-[#ff6036]">
                  <Activity className="w-3.5 h-3.5" />
                  Spatial Shot Heatmap & Decision Engine
                </span>
                <div className="flex items-center gap-1 text-[10px]">
                  <button
                    onClick={() => {
                      playTactileSound('tick', soundEnabled);
                      setShotFilter('all');
                    }}
                    className={`px-2 py-0.5 rounded transition-all ${shotFilter === 'all' ? 'bg-[#ff6036] text-black font-semibold' : 'bg-[#141720] text-[#94a3b8]'}`}
                  >
                    All Plays
                  </button>
                  <button
                    onClick={() => {
                      playTactileSound('tick', soundEnabled);
                      setShotFilter('clutch');
                    }}
                    className={`px-2 py-0.5 rounded transition-all ${shotFilter === 'clutch' ? 'bg-[#ff6036] text-black font-semibold' : 'bg-[#141720] text-[#94a3b8]'}`}
                  >
                    Q4 Clutch
                  </button>
                </div>
              </div>

              {/* Vector half-court visual simulator */}
              <div className="relative h-28 w-full rounded-lg bg-[#0c0f16] border border-[#1a202c] p-2 flex items-center justify-center overflow-hidden">
                {/* Court Arc Lines */}
                <div className="absolute inset-x-8 top-0 bottom-0 border border-[#2d3748]/50 rounded-b-full pointer-events-none" />
                <div className="absolute top-0 w-16 h-12 border border-[#2d3748]/60 border-t-0 rounded-b pointer-events-none" />
                <div className="absolute top-2 w-4 h-4 rounded-full border border-[#ff6036]/60 pointer-events-none" />

                {/* Simulated Shot Cluster Points */}
                <div className="relative w-full h-full">
                  <span className="absolute left-[20%] top-[40%] w-2.5 h-2.5 rounded-full bg-[#ff6036] ring-2 ring-[#ff6036]/30 animate-pulse" title="Corner 3-Pointer: 44%" />
                  <span className={`absolute left-[50%] top-[65%] w-2.5 h-2.5 rounded-full transition-all ${shotFilter === 'threePt' ? 'scale-125' : ''} bg-[#ff6036]`} title="Top of Key: 41%" />
                  <span className="absolute right-[22%] top-[42%] w-2.5 h-2.5 rounded-full bg-[#ff6036]" title="Wing 3-Pointer: 39%" />
                  <span className="absolute left-[48%] top-[25%] w-2.5 h-2.5 rounded-full bg-[#d4ff3a]" title="Drive & Kickout Assist" />
                  {shotFilter === 'clutch' && (
                    <span className="absolute left-[35%] top-[50%] w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-400/40 animate-bounce" title="Game Winning Floater" />
                  )}
                </div>

                <div className="absolute bottom-1 right-2 text-[10px] text-[#94a3b8] font-mono">
                  {shotFilter === 'clutch' ? 'Filtered: 4th Quarter Possessions' : '180+ Career Matches Indexed'}
                </div>
              </div>

              <div className="text-[11px] text-[#64748b] flex items-center justify-between pt-1">
                <span>Vector SVG court projections synced to relational match database</span>
                <span className="text-[#ff6036]">Turso edge libSQL</span>
              </div>
            </div>
          )}

          {/* MED VAULT Interactive Security & Audit Widget */}
          {project.id === 'med-vault' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#94a3b8] pb-1 border-b border-[#1a1f2c]">
                <span className="flex items-center gap-1.5 text-[#38bdf8]">
                  <Shield className="w-3.5 h-3.5" />
                  Cryptographic Field Masking & RBAC
                </span>
                <button
                  onClick={handleInteractiveAction}
                  className="px-2 py-0.5 rounded bg-[#141720] hover:bg-[#252b3d] text-[#38bdf8] border border-[#252b3d] flex items-center gap-1 transition-all cursor-pointer"
                >
                  {phiDecrypted ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  {phiDecrypted ? 'Mask PHI' : 'Authorize Clinician Key'}
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0e121a] border border-[#1f2738] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#94a3b8]">Record ID #8842-PT</span>
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" /> Row-Level Policy Active
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-1.5 rounded bg-[#151a24]">
                    <span className="text-[#64748b] block text-[9px]">PATIENT IDENTIFIER</span>
                    <span className="font-mono text-[#cbd5e1]">
                      {phiDecrypted ? 'E. Ramirez (DOB 1989)' : '•••• •••••••• [ENCRYPTED]'}
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-[#151a24]">
                    <span className="text-[#64748b] block text-[9px]">VITAL TELEMETRY</span>
                    <span className="font-mono text-[#38bdf8]">HR 72 bpm / SpO2 99%</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#64748b] flex items-center justify-between pt-1">
                <span>PostgreSQL RLS enforcement + zero-knowledge client decryption</span>
                <span className="text-[#38bdf8]">WCAG AA / AAA</span>
              </div>
            </div>
          )}

          {/* MILI.DEV Meta Project preview */}
          {project.id === 'mili-dev' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#94a3b8] pb-1 border-b border-[#1a1f2c]">
                <span className="text-[#d4ff3a]">Live Architecture Telemetry</span>
                <span className="text-[#cbd5e1]">React 19 + Tailwind v4</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                <div className="p-2 rounded bg-[#141720] border border-[#1f2636]">
                  <span className="text-[#64748b] block">Bundle Size</span>
                  <span className="text-[#d4ff3a] font-semibold text-xs">&lt; 95kb</span>
                </div>
                <div className="p-2 rounded bg-[#141720] border border-[#1f2636]">
                  <span className="text-[#64748b] block">Accessibility</span>
                  <span className="text-[#f1f5f9] font-semibold text-xs">100 / 100</span>
                </div>
                <div className="p-2 rounded bg-[#141720] border border-[#1f2636]">
                  <span className="text-[#64748b] block">Frame Rate</span>
                  <span className="text-emerald-400 font-semibold text-xs">60 FPS</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row: Technologies & Deep Dive Action */}
      <div className="mt-5 pt-4 border-t border-[#1a202c] flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 flex-wrap">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#141720] text-[#cbd5e1] border border-[#202738]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono text-[#64748b]">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <button
          onClick={handleOpenDetail}
          className="text-xs font-medium text-[#f1f5f9] group-hover:text-[#d4ff3a] transition-colors flex items-center gap-1 shrink-0"
        >
          <span>Read Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
