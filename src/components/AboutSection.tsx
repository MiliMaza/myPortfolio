import { dualPerspectivePrinciples } from '../data/experience';
import { Eye, Clock, Repeat } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface AboutSectionProps {
  soundEnabled: boolean;
}

export const AboutSection = ({ soundEnabled }: AboutSectionProps) => {
  const iconMap = [
    <Eye className="w-5 h-5 text-[#d4ff3a]" key="eye" />,
    <Clock className="w-5 h-5 text-[#ff6036]" key="clock" />,
    <Repeat className="w-5 h-5 text-[#38bdf8]" key="repeat" />,
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto text-left">
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff6036]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff6036]">
            Background & Mindset
          </span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] tracking-tight">
          How an elite athletic path <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6036] via-[#f1f5f9] to-[#d4ff3a]">
            shapes the way I engineer code.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Authentic Human Narrative */}
        <div className="lg:col-span-6 space-y-6 text-[#94a3b8] leading-relaxed text-base font-sans">
          <div className="p-6 rounded-2xl bg-[#0e1117] border border-[#1e2433] space-y-7">
            <h3 className="font-display font-bold text-xl text-[#f1f5f9]">
              The unusual convergence
            </h3>
            <p>
              My background is not linear. I earned both my <strong className="text-[#f1f5f9]">Systems Analyst</strong> degree and my bachelor's degree in <strong className="text-[#f1f5f9]">Computer Science</strong> from 'Universidad Siglo 21' while competing year-round as a professional basketball player.
            </p>
            <p>
              Living in both worlds meant mastering two demanding disciplines simultaneously. On the hardwood, success demands split-second spatial reasoning, total tactical awareness, and relentless composure when the clock runs down. In computer science, it demands abstract modeling, algorithmic clarity, and architectural resilience.
            </p>
            <p>
              When I started to focus on software engineering and AI automation, these two worlds merged seamlessly. Software isn’t just lines in a file; it’s an active system where performance, state transitions, and user friction have to be read like a fast-break defense.
            </p>
          </div>
        </div>

        {/* Right Column: Tactical Principles */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-mono uppercase text-[#64748b] tracking-wider mb-2">
            Tactical Translations: Court to Codebase
          </div>

          {dualPerspectivePrinciples.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => playTactileSound('tick', soundEnabled)}
              className="p-5 rounded-2xl bg-[#0e1117] border border-[#1e2433] hover:border-[#2e394d] transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#141720] border border-[#252b3d] group-hover:scale-105 transition-transform">
                    {iconMap[idx]}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#cbd5e1] block">
                      {item.athleticPrinciple}
                    </span>
                    <span className="font-display font-bold text-base text-[#f8fafc]">
                      → {item.engineeringTranslation}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
