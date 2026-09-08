import { useState } from 'react';
import { skillCategories } from '../data/skills';
import { Layout, Server, Cpu, Database, Terminal, ArrowRight, Check } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface SkillsMatrixProps {
  soundEnabled: boolean;
  onFilterProjectsByTech: (techName: string) => void;
}

export const SkillsMatrix = ({ soundEnabled, onFilterProjectsByTech }: SkillsMatrixProps) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#d4ff3a]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#38bdf8]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#a78bfa]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#ff6036]" />;
      case 'Terminal':
      default:
        return <Terminal className="w-4 h-4 text-[#10b981]" />;
    }
  };

  const handleSkillClick = (skillName: string) => {
    playTactileSound('tick', soundEnabled);
    if (selectedSkill === skillName) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skillName);
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-6xl mx-auto text-left">
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            Technical Capabilities
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f8fafc] tracking-tight">
              Categorized Stack
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mt-2 leading-relaxed">
              Organized by engineering domain. No artificial percentage bars — click any technology to inspect its applied role across my projects.
            </p>
          </div>

          {selectedSkill && (
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#141720] border border-[#252b3d] animate-fadeIn">
              <span className="text-xs font-mono text-[#e2e8f0]">Selected: <strong>{selectedSkill}</strong></span>
              <button
                onClick={() => {
                  playTactileSound('pop', soundEnabled);
                  onFilterProjectsByTech(selectedSkill);
                  const elem = document.getElementById('projects');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-1 rounded-lg bg-[#d4ff3a] hover:bg-[#c2ed2e] text-[#090b10] text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
              >
                <span>Filter Projects</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.id}
            className="p-6 rounded-2xl bg-[#0d1017] border border-[#1e2433] hover:border-[#2b3547] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1a1f2c]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#141720] border border-[#252b3d]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#f8fafc]">
                    {category.name}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#64748b]">
                  {category.skills.length} tools
                </span>
              </div>

              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {category.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkill === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSkillClick(skill.name)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#d4ff3a] text-[#090b10] font-semibold ring-2 ring-[#d4ff3a]/30'
                          : skill.highlight
                          ? 'bg-[#141720] hover:bg-[#1f2636] text-[#e2e8f0] border border-[#2c374d]'
                          : 'bg-[#0f121a] hover:bg-[#171c26] text-[#94a3b8] border border-[#1b2230]'
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.projects.length > 0 && (
                        <span 
                          className={`text-[9px] px-1 py-0.2 rounded font-sans ${
                            isSelected ? 'bg-[#090b10]/30 text-[#090b10]' : 'bg-[#1e2433] text-[#64748b]'
                          }`}
                          title={`Used in ${skill.projects.length} project(s)`}
                        >
                          {skill.projects.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#181d29] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
              <span>Applied in real codebases</span>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
