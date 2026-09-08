import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Github, Linkedin, ArrowUpRight, Globe, Clock } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface ContactSectionProps {
  soundEnabled: boolean;
}

export const ContactSection = ({ soundEnabled }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'milagrosmazamm@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/milagrosmaza';
  const githubUrl = 'https://github.com/milimaza';

  const copyEmail = () => {
    playTactileSound('success', soundEnabled);
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-4xl mx-auto text-left">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0e121a] to-[#090b10] border border-[#222a3b] shadow-2xl relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4ff3a]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff6036]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff3a]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4ff3a]">
              Direct Connection
            </span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] tracking-tight">
              Start a conversation.
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-xl font-sans">
              Currently considering full-stack engineering roles, high-velocity technical teams, and selective product collaborations. No bloated forms — reach out directly.
            </p>
          </div>

          {/* Interactive Direct Email Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121622] border border-[#222b3d] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="p-3 rounded-xl bg-[#1a202d] text-[#d4ff3a] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[11px] font-mono text-[#64748b] block uppercase">Direct Inbox</span>
                <span className="text-sm sm:text-base font-mono font-medium text-[#f1f5f9] truncate block">
                  {emailAddress}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded-xl bg-[#1a202d] hover:bg-[#252d40] border border-[#2e374d] text-xs font-medium text-[#e2e8f0] transition-all flex items-center gap-1.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#94a3b8]" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <a
                href={`mailto:${emailAddress}?subject=Engineering%20Inquiry%20from%20mili.dev`}
                className="px-4 py-2.5 rounded-xl bg-[#d4ff3a] hover:bg-[#c2ed2e] text-[#090b10] font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Links & Location Telemetry */}
          <div className="pt-4 border-t border-[#1a202c] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors flex items-center gap-1.5 group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#64748b]">
              <Globe className="w-3.5 h-3.5 text-[#d4ff3a]" />
              <span>Available for Remote / Hybrid teams worldwide</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
