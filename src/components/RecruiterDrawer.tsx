import { useState, useEffect } from 'react';
import { X, Check, Copy, ExternalLink, Mail, Github, Linkedin, Briefcase, GraduationCap, Sparkles, Terminal } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
  onSelectProjectSlug: (slug: string) => void;
}

export const RecruiterDrawer = ({
  isOpen,
  onClose,
  soundEnabled,
  onSelectProjectSlug,
}: RecruiterDrawerProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const emailAddress = 'milagrosmazamm@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/milagrosmaza';
  const githubUrl = 'https://github.com/milimaza';

  const copyEmailToClipboard = () => {
    playTactileSound('success', soundEnabled);
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-[#05070a]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-drawer-title"
    >
      <div 
        className="w-full max-w-2xl h-full bg-[#0c0f16] border-l border-[#252b3d] shadow-2xl flex flex-col justify-between overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#1a1f2c] bg-[#11141c]/90 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#141720] border border-[#252b3d] text-[#d4ff3a]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 id="recruiter-drawer-title" className="font-display font-bold text-xl text-[#f8fafc]">
                Recruiter 30-Second Fast Track
              </h2>
              <p className="text-xs font-mono text-[#94a3b8]">
                High-signal summary answering the 7 core hiring questions
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playTactileSound('tick', soundEnabled);
              onClose();
            }}
            className="p-2 rounded-xl bg-[#1a1f2c] hover:bg-[#252b3d] text-[#94a3b8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close recruiter brief"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-6 sm:p-8 space-y-8 text-sm text-[#cbd5e1] overflow-y-auto">
          
          {/* Status & Availability */}
          <div className="p-4 rounded-xl bg-[#121622] border border-[#d4ff3a]/30 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#d4ff3a] uppercase font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#d4ff3a] animate-ping" />
                Active Job Search Status
              </span>
              <div className="text-xs text-[#f1f5f9]">
                Open to Full-Stack Developer roles (Remote / Hybrid), high-velocity startups, and technical product teams.
              </div>
            </div>
            <button
              onClick={copyEmailToClipboard}
              className="px-3 py-1.5 rounded-lg bg-[#d4ff3a] hover:bg-[#c2ed2e] text-[#090b10] font-semibold text-xs transition-all shrink-0 flex items-center gap-1 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* 1. Who I Am */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#64748b] block font-bold">1. Candidate Identity</span>
            <div className="text-base text-[#f8fafc] font-semibold">
              Mili (Milagros Maza) — Full-Stack Developer & Computer Science Graduate
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
              Educated in Argentina (Licenciada en Informática) with years of concurrent professional basketball experience as a point guard. Blends disciplined athletic work ethic, composure under tight deadlines, and systems analysis to build clean digital products.
            </p>
          </div>

          {/* 2. What I Can Build & Core Specialties */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#64748b] block font-bold">2. What I Build</span>
            <ul className="space-y-1 text-xs sm:text-sm text-[#94a3b8]">
              <li className="flex items-start gap-2">
                <span className="text-[#d4ff3a] font-bold">•</span>
                <span><strong>AI Workflows & LLM Tools:</strong> Conversational compilers, n8n automation graphs, structured Zod schemas, Vercel AI SDK integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] font-bold">•</span>
                <span><strong>Modern Full-Stack Web Apps:</strong> React, Next.js, Node.js, Express, TypeScript, Tailwind CSS, high-FPS data visualizations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#a78bfa] font-bold">•</span>
                <span><strong>Secure Persistence & APIs:</strong> PostgreSQL, Supabase, Turso (libSQL), Row-Level Security, role-based authorization.</span>
              </li>
            </ul>
          </div>

          {/* 3. Education & Credentials */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#64748b] block font-bold">3. Educational Degrees Conferred</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-[#141720] border border-[#252b3d]">
                <div className="text-xs font-bold text-[#f1f5f9]">Licenciada en Informática</div>
                <div className="text-[11px] text-[#d4ff3a] font-mono">Universidad Siglo 21</div>
                <div className="text-[10px] text-[#94a3b8] mt-1">Computer Science degree (Advanced Systems, Algorithms, Security)</div>
              </div>
              <div className="p-3 rounded-lg bg-[#141720] border border-[#252b3d]">
                <div className="text-xs font-bold text-[#f1f5f9]">Analista de Sistemas</div>
                <div className="text-[11px] text-[#38bdf8] font-mono">Universidad Siglo 21</div>
                <div className="text-[10px] text-[#94a3b8] mt-1">Systems Analysis (Business Process Flow, Architecture, QA)</div>
              </div>
            </div>
          </div>

          {/* 4. Three Flagship Projects */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-[#64748b] block font-bold">4. Key Projects to Evaluate</span>
            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  onSelectProjectSlug('aska-flow');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-[#f8fafc] group-hover:text-[#d4ff3a]">
                    ASKA FLOW — AI Automation Compiler
                  </div>
                  <div className="text-[11px] text-[#94a3b8]">
                    Natural language prompt to validated n8n node topologies. React, AI SDK, Supabase.
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
              </button>

              <button
                onClick={() => {
                  onSelectProjectSlug('the-archive');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-[#f8fafc] group-hover:text-[#ff6036]">
                    THE ARCHIVE — Interactive Career Timeline
                  </div>
                  <div className="text-[11px] text-[#94a3b8]">
                    D3/SVG vector basketball shot heatmaps & Turso edge database.
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
              </button>

              <button
                onClick={() => {
                  onSelectProjectSlug('med-vault');
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] flex items-center justify-between transition-colors group cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-[#f8fafc] group-hover:text-[#38bdf8]">
                    MED VAULT — Clinical Healthcare Platform
                  </div>
                  <div className="text-[11px] text-[#94a3b8]">
                    PostgreSQL RLS security, role access, and zero-knowledge patient masking.
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* 5. How to Contact */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase text-[#64748b] block font-bold">5. Immediate Contact Channels</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] text-center flex flex-col items-center gap-1 group transition-colors"
              >
                <Mail className="w-4 h-4 text-[#d4ff3a]" />
                <span className="text-xs font-medium text-[#f1f5f9]">Email Directly</span>
                <span className="text-[10px] text-[#94a3b8] truncate max-w-[130px]">{emailAddress}</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] text-center flex flex-col items-center gap-1 group transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                <span className="text-xs font-medium text-[#f1f5f9]">LinkedIn Profile</span>
                <span className="text-[10px] text-[#94a3b8]">/in/milagrosmaza</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#141720] hover:bg-[#1a202d] border border-[#252b3d] text-center flex flex-col items-center gap-1 group transition-colors"
              >
                <Github className="w-4 h-4 text-[#cbd5e1]" />
                <span className="text-xs font-medium text-[#f1f5f9]">GitHub Repos</span>
                <span className="text-[10px] text-[#94a3b8]">/milimaza</span>
              </a>
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#1a1f2c] bg-[#11141c] flex items-center justify-between text-xs text-[#94a3b8]">
          <span className="font-mono">mili.dev · Verified Profile</span>
          <button
            onClick={copyEmailToClipboard}
            className="text-[#d4ff3a] hover:underline font-mono text-xs cursor-pointer"
          >
            {copiedEmail ? 'Email Copied to Clipboard ✓' : 'Copy Email Address'}
          </button>
        </div>
      </div>
    </div>
  );
};
