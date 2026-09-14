import { useState, useEffect } from 'react';
import { BrandMark } from './BrandMark';
import { Volume2, VolumeX, Briefcase, Command, Menu, X } from 'lucide-react';
import { playTactileSound } from '../utils/audio';
import { projectsData } from '../data/projects';

interface HeaderNavProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenRecruiterBrief: () => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const HeaderNav = ({
  soundEnabled,
  onToggleSound,
  onOpenRecruiterBrief,
  onOpenCommandPalette,
  activeSection,
}: HeaderNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'projects', label: 'Projects', count: projectsData.length.toString() },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Path' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    playTactileSound('tick', soundEnabled);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 ${scrolled
          ? 'bg-[#0e1117]/85 backdrop-blur-sm border border-[#252b3d] shadow-2xl py-2.5 px-4 sm:px-5'
          : 'bg-[#0e1117]/40 backdrop-blur-xl border border-[#1a1f2c] py-3.5 px-4 sm:px-6'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo and Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              playTactileSound('pop', soundEnabled);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff3a] rounded-lg p-1"
          >
            <BrandMark size={32} interactive />
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm tracking-tight text-[#f1f5f9] group-hover:text-[#d4ff3a] transition-colors flex items-center gap-1.5">
                mili.dev
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4ff3a] animate-pulse" />
              </span>
              <span className="text-[11px] text-[#94a3b8] font-mono tracking-wider">
                full-stack / ai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#141720]/70 border border-[#252b3d] p-1.5 rounded-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${isActive
                    ? 'text-[#090b10] bg-[#d4ff3a] shadow-sm font-semibold'
                    : 'text-[#94a3b8] hover:text-[#f8fafc] hover:bg-[#1a1f2c]'
                    }`}
                >
                  {link.label}
                  {link.count && (
                    <span
                      className={`text-[10px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-[#090b10]/20 text-[#090b10]' : 'bg-[#252b3d] text-[#cbd5e1]'
                        }`}
                    >
                      {link.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Utility Tools: Recruiter Fast-Track & Interactive Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              onClick={() => {
                playTactileSound('pop', soundEnabled);
                onOpenCommandPalette();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141720] hover:bg-[#1a1f2c] border border-[#252b3d] text-xs font-mono text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
              title="Open Command Palette (Cmd + K / Ctrl + K)"
            >
              <Command className="w-3 h-3 text-[#94a3b8]" />
              <span className="text-[11px]">K</span>
            </button>

            {/* Recruiter Quick Sheet CTA */}
            <button
              onClick={() => {
                playTactileSound('pop', soundEnabled);
                onOpenRecruiterBrief();
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#1c2230] to-[#141720] hover:from-[#252b3d] hover:to-[#1a1f2c] border border-[#d4ff3a]/40 hover:border-[#d4ff3a] text-xs font-medium text-[#f1f5f9] transition-all shadow-sm group cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#d4ff3a] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Recruiter</span> Brief
            </button>

            {/* Subtle Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                playTactileSound('pop', !soundEnabled);
              }}
              className="p-2 rounded-xl bg-[#141720] hover:bg-[#1a1f2c] border border-[#252b3d] text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
              title={soundEnabled ? 'Disable micro-interaction audio' : 'Enable subtle micro-interaction audio'}
              aria-label={soundEnabled ? 'Disable micro-interaction audio' : 'Enable subtle micro-interaction audio'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#d4ff3a]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#64748b]" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                playTactileSound('tick', soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-[#141720] border border-[#252b3d] text-[#94a3b8] hover:text-[#e2e8f0]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[#1e2433] mt-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${activeSection === link.id
                  ? 'bg-[#d4ff3a] text-[#090b10] font-semibold'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#141720]'
                  }`}
              >
                <span>{link.label}</span>
                {link.count && (
                  <span className="text-xs px-2 py-0.5 rounded bg-[#090b10]/20 font-mono">
                    {link.count} items
                  </span>
                )}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterBrief();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#141720] border border-[#d4ff3a]/40 text-[#d4ff3a] text-sm font-medium flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Open Recruiter Summary
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
