import { useState, useEffect } from 'react';
import { BrandMark } from './BrandMark';
import { ArrowUp, Sparkles } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface FooterProps {
  soundEnabled: boolean;
}

export const Footer = ({ soundEnabled }: FooterProps) => {
  const [clickCount, setClickCount] = useState(0);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Italy / UTC+2 local time string
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Europe/Rome',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePlayfulClick = () => {
    playTactileSound('pop', soundEnabled);
    setClickCount((prev) => prev + 1);
  };

  const scrollToTop = () => {
    playTactileSound('tick', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#1a1f2c] bg-[#07080c] py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-[#64748b] text-left">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: Brand Identity & Copyright */}
        <div className="flex items-center gap-3">
          <BrandMark size={28} />
          <div>
            <div className="font-display font-bold text-sm text-[#f1f5f9] flex items-center gap-1.5">
              mili.dev
              <span className="text-[#64748b] font-normal">/ Milagros Maza</span>
            </div>
            <div className="text-[11px] text-[#94a3b8] mt-0.5">
              Computer Science · Professional Athlete · Full-Stack & AI
            </div>
          </div>
        </div>

        {/* Center: Live Timezone & Counter Interaction */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="px-2.5 py-1 rounded-md bg-[#0e1117] border border-[#1e2433] text-[#94a3b8] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff3a] animate-pulse" />
            <span>IT (UTC+2): {localTime || 'LIVE'}</span>
          </div>

          <button
            onClick={handlePlayfulClick}
            className="px-2.5 py-1 rounded-md bg-[#0e1117] hover:bg-[#151a24] border border-[#1e2433] hover:border-[#2e374d] text-[#cbd5e1] flex items-center gap-1.5 transition-all cursor-pointer"
            title="Click to pass the digital ball"
          >
            <Sparkles className="w-3 h-3 text-[#ff6036]" />
            <span>{clickCount > 0 ? `${clickCount} ball passes` : 'pass ball'}</span>
          </button>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-[#0e1117] hover:bg-[#151a24] border border-[#1e2433] text-[#94a3b8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            title="Return to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
