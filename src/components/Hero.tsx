import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDownRight, Sparkles, Terminal, Trophy, GraduationCap } from 'lucide-react';
import { playTactileSound } from '../utils/audio';

interface HeroProps {
  soundEnabled: boolean;
  onOpenRecruiterBrief: () => void;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  isOrigin?: boolean;
}

export const Hero = ({ soundEnabled, onOpenRecruiterBrief }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pulseCount, setPulseCount] = useState(0);

  // Canvas interactive kinetic simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Initialize simulation nodes
    const nodeCount = Math.min(Math.floor(width / 32), 34);
    const nodes: Node[] = [];
    const colors = ['#d4ff3a', '#ff6036', '#38bdf8', '#94a3b8'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.8,
        color: colors[i % colors.length],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      playTactileSound('pop', soundEnabled);
      setPulseCount((prev) => prev + 1);

      // Add temporary impulse to surrounding nodes
      for (const node of nodes) {
        const dx = node.x - clickX;
        const dy = node.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) / 30;
          node.vx += (dx / dist) * force;
          node.vy += (dy / dist) * force;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleCanvasClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle court grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const step = 48;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Friction
        node.vx *= 0.985;
        node.vy *= 0.985;

        // Keep slight ambient drift
        if (Math.abs(node.vx) < 0.15) node.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(node.vy) < 0.15) node.vy += (Math.random() - 0.5) * 0.1;

        // Bounce
        if (node.x < 10) {
          node.x = 10;
          node.vx *= -1;
        }
        if (node.x > width - 10) {
          node.x = width - 10;
          node.vx *= -1;
        }
        if (node.y < 10) {
          node.y = 10;
          node.vy *= -1;
        }
        if (node.y > height - 10) {
          node.y = height - 10;
          node.vy *= -1;
        }

        // Mouse avoidance/attraction
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const force = (140 - mdist) / 140;
          node.vx -= (mdx / mdist) * force * 0.6;
          node.vy -= (mdy / mdist) * force * 0.6;
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.25;
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }

        // Draw node dot
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [soundEnabled]);

  const scrollToSection = useCallback((id: string) => {
    playTactileSound('tick', soundEnabled);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [soundEnabled]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[92vh] flex flex-col justify-center"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4ff3a]/[0.025] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#ff6036]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Core Narrative & Identification */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Status & Unconventional Identity Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-[#141720] border border-[#252b3d] text-xs">
              <span className="flex items-center gap-1.5 text-[#d4ff3a] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#d4ff3a] animate-ping" />
                <span className='pl-2'>AVAILABLE TO WORK</span>
              </span>
              <span className="text-[#475569]">/</span>
              <span className="text-[#94a3b8] font-mono">FULL-STACK & AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#f8fafc] tracking-tight leading-[1.08]">
                Systems built with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff3a] via-[#f1f5f9] to-[#ff6036]">
                  precision.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#94a3b8] font-sans leading-relaxed max-w-2xl">
                I'm <strong className="text-[#f1f5f9] font-semibold">Mili</strong> — a Full-Stack Developer with a degree in Computer Science and a background as a professional basketball player.
                <br />I love finding efficient ways to solve complex problems, whether it's on the court or in the code.
              </p>
            </div>

            {/* Quick Dual-Background Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0e1117] border border-[#1e2433] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#141720] border border-[#252b3d] text-[#d4ff3a] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f1f5f9]">Computer Science Degree</div>
                  <div className="text-[11px] text-[#94a3b8] font-mono">Universidad Siglo 21 - Argentina</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e1117] border border-[#1e2433] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#141720] border border-[#252b3d] text-[#ff6036] shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#f1f5f9]">Pro Basketball Player</div>
                  <div className="text-[11px] text-[#94a3b8] font-mono">Trieste, Italy - A2</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-xl bg-[#d4ff3a] hover:bg-[#c2ed2e] text-[#090b10] font-semibold text-sm transition-all shadow-lg hover:shadow-[#d4ff3a]/20 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Curated Projects</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => {
                  playTactileSound('pop', soundEnabled);
                  onOpenRecruiterBrief();
                }}
                className="px-5 py-3 rounded-xl bg-[#141720] hover:bg-[#1a1f2c] border border-[#252b3d] hover:border-[#94a3b8] text-[#f1f5f9] font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#d4ff3a]" />
                <span>Recruiter 30-Sec Brief</span>
              </button>
            </div>

            {/* Quick Stack Bar */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#64748b] flex-wrap">
              <span className="text-[#94a3b8]">Primary Toolkit:</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">JavaScript</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">React</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">Next.js</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">HTML + CSS</span>
              <span className="px-2 py-0.5 rounded bg-[#141720] border border-[#252b3d] text-[#cbd5e1]">Node.js</span>
            </div>

          </div>

          {/* Right Column: Digital Playground Kinetic Simulation Canvas */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0e1117] border border-[#1e2433] p-1 shadow-2xl overflow-hidden group">

              {/* Canvas Header Controls */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#141720] rounded-t-xl border-b border-[#1e2433] text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                  </div>
                  <span className="text-[#94a3b8] font-mono text-[11px] pl-2">
                    playground://
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#64748b]">
                    {pulseCount > 0 ? `${pulseCount} impulses` : 'click to pulse'}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#d4ff3a] animate-pulse" />
                </div>
              </div>

              {/* Interactive Canvas */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-[#090b10] cursor-crosshair overflow-hidden">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full block"
                />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none">
                  <div className="px-2.5 py-1 rounded-md bg-[#141720]/90 backdrop-blur-sm border border-[#252b3d] text-[#94a3b8] flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-[#d4ff3a]" />
                    <span>Hover/click to warp</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#0e1117] border-t border-[#1e2433] flex items-center justify-between text-xs text-[#94a3b8]">
                <span className="italic">"A different point of view."</span>
                <span className="font-mono text-[10px] text-[#64748b]">mili.dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
