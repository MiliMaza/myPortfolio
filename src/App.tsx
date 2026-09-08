import { useState, useEffect } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { ProjectExhibition } from './components/ProjectExhibition';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutSection } from './components/AboutSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceEducation } from './components/ExperienceEducation';
import { ContactSection } from './components/ContactSection';
import { RecruiterDrawer } from './components/RecruiterDrawer';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { projectsData } from './data/projects';
import { Project } from './types';
import { playTactileSound } from './utils/audio';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isRecruiterBriefOpen, setIsRecruiterBriefOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  // Synchronize with URL hash for deep linking (e.g. #aska-flow or #recruiter-brief)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'recruiter' || hash === 'recruiter-brief') {
        setIsRecruiterBriefOpen(true);
      } else if (hash.startsWith('project-')) {
        const slug = hash.replace('project-', '');
        const found = projectsData.find((p) => p.slug === slug || p.id === slug);
        if (found) setSelectedProject(found);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when project changes
  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project-${project.slug}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleSelectProjectBySlug = (slug: string) => {
    const found = projectsData.find((p) => p.slug === slug || p.id === slug);
    if (found) {
      handleSelectProject(found);
    }
  };

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playTactileSound('pop', soundEnabled);
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled]);

  // Section Observer for active scroll navigation
  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const handleFilterProjectsByTech = (techName: string) => {
    setSelectedTechFilter(techName);
  };

  const handleClearTechFilter = () => {
    setSelectedTechFilter(null);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] font-sans selection:bg-[#d4ff3a] selection:text-[#08090d] relative overflow-x-hidden">
      
      {/* Top Floating Navigation */}
      <HeaderNav
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section */}
        <Hero
          soundEnabled={soundEnabled}
          onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        />

        {/* Curated Projects Exhibition */}
        <ProjectExhibition
          projects={projectsData}
          onSelectProject={handleSelectProject}
          soundEnabled={soundEnabled}
          selectedTechFilter={selectedTechFilter}
          onClearTechFilter={handleClearTechFilter}
        />

        {/* About & Mindset (Intersection of Athletics & Systems Engineering) */}
        <AboutSection soundEnabled={soundEnabled} />

        {/* Categorized Skills Matrix */}
        <SkillsMatrix
          soundEnabled={soundEnabled}
          onFilterProjectsByTech={handleFilterProjectsByTech}
        />

        {/* Dual-Track Experience & Formal CS Education */}
        <ExperienceEducation soundEnabled={soundEnabled} />

        {/* Direct Contact Section */}
        <ContactSection soundEnabled={soundEnabled} />
      </main>

      {/* Minimalistic & Playful Footer */}
      <Footer soundEnabled={soundEnabled} />

      {/* Dedicated Project Deep Dive Modal / View */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
        allProjects={projectsData}
        onSelectProject={handleSelectProject}
        soundEnabled={soundEnabled}
      />

      {/* Recruiter 30-Second Fast-Track Drawer */}
      <RecruiterDrawer
        isOpen={isRecruiterBriefOpen}
        onClose={() => setIsRecruiterBriefOpen(false)}
        soundEnabled={soundEnabled}
        onSelectProjectSlug={handleSelectProjectBySlug}
      />

      {/* Cmd + K Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        projects={projectsData}
        onSelectProject={handleSelectProject}
        onOpenRecruiterBrief={() => setIsRecruiterBriefOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

    </div>
  );
}
