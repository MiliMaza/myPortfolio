import { experienceTimeline, educationData } from '../data/experience';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface ExperienceEducationProps {
  soundEnabled: boolean;
}

export const ExperienceEducation = ({ soundEnabled }: ExperienceEducationProps) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto text-left">

      {/* EXPERIENCE SECTION */}
      <div className="space-y-4 mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#10b981]">
            Complete Journey
          </span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] tracking-tight">
          Experience Path
        </h2>
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-full leading-relaxed">
          "Everybody in the world should learn how to program a computer, because it teaches you how to think"
          <span className="text-xs font-mono text-[#94a3b8]"> - Steve Jobs</span>
        </p>
      </div>

      {/* Interactive Dual-Track Sequence */}
      <div className="relative pl-6 sm:pl-8 border-l border-[#1e2433] space-y-10 mb-24">
        {experienceTimeline.map((item) => {
          const isAthletic = item.type === 'athletics';
          const isEngineering = item.type === 'engineering';

          return (
            <div
              key={item.id}
              onMouseEnter={() => playTactileSound('tick', soundEnabled)}
              className="relative group space-y-3"
            >
              {/* Timeline Pin/Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${isEngineering
                  ? 'bg-[#090b10] border-[#d4ff3a]'
                  : isAthletic
                    ? 'bg-[#090b10] border-[#ff6036]'
                    : 'bg-[#090b10] border-[#38bdf8]'
                  }`}
              />

              <div className="p-6 rounded-2xl bg-[#0e1117] border border-[#1e2433] hover:border-[#2b3547] transition-all space-y-4">

                {/* Header Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181d29] pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono px-2 py-0.5 rounded ${isEngineering
                          ? 'bg-[#d4ff3a]/10 text-[#d4ff3a]'
                          : isAthletic
                            ? 'bg-[#ff6036]/10 text-[#ff6036]'
                            : 'bg-[#38bdf8]/10 text-[#38bdf8]'
                          }`}
                      >
                        {item.roleOrField}
                      </span>
                      <span className="text-xs font-mono text-[#64748b]">{item.period}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#f8fafc] mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-[#94a3b8] sm:text-right">
                    <div>{item.organization}</div>
                    {item.location && (
                      <div className="text-[#64748b] flex items-center sm:justify-end gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm text-[#94a3b8] leading-relaxed">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#d4ff3a] font-bold text-base leading-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Takeaways / Synthesis */}
                {item.takeaways && (
                  <div className="pt-2 border-t border-[#181d29] text-xs text-[#cbd5e1] italic flex items-start gap-2 font-mono">
                    <span className="text-[#d4ff3a] not-italic">Synthesis:</span>
                    <span>{item.takeaways}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* EDUCATION SECTION */}
      <div id="education" className="scroll-mt-24 space-y-4 mb-10 pt-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#a78bfa]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#a78bfa]">
            Academic Foundation
          </span>
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#f8fafc] tracking-tight">
          University Degrees
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0d1017] border border-[#1e2433] hover:border-[#303c52] transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="p-2.5 rounded-xl bg-[#141720] border border-[#252b3d] text-[#a78bfa]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {edu.status}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#f8fafc]">
                  {edu.degree}
                </h3>
                <div className="text-sm text-[#d4ff3a] font-mono mt-0.5">
                  {edu.institution}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {edu.focus}
              </p>
            </div>

            <div className="pt-4 border-t border-[#181d29] space-y-2">
              <span className="text-[11px] font-mono uppercase text-[#64748b] block">Core Competencies:</span>
              <div className="flex flex-wrap gap-1.5">
                {edu.skillsAcquired.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#131620] text-[#cbd5e1] border border-[#1f2636]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
