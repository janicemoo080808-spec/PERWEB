import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { CONTENT_EN, CONTENT_CN, STRATEGIC_EXPERTISE_EN, STRATEGIC_EXPERTISE_CN } from './constants';
import { CategoryType, Language, Project } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import VideoModal from './components/VideoModal';
import AIChat from './components/AIChat';
import ResumeSection from './components/ResumeSection';
import { Music, X, Award, Mail, Phone, ExternalLink, VolumeX } from 'lucide-react';

const ExpertiseCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 rounded-3xl bg-[#0F0F11] border border-white/[0.05] hover:border-[#F63C0C]/30 transition-all group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
    <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-zinc-500 leading-relaxed text-sm font-light">{desc}</p>
  </motion.div>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('CN');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  const CONTACT_INFO = { email: "janicemo08@163.com", phone: "186 2156 8644" };
  const CONTENT = language === 'EN' ? CONTENT_EN : CONTENT_CN;
  const EXPERTISE = language === 'EN' ? STRATEGIC_EXPERTISE_EN : STRATEGIC_EXPERTISE_CN;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const filteredProjects = CONTENT.projects.filter(p => activeCategory === 'ALL' || p.category === activeCategory);

  const filterButtons = [
    { id: 'ALL', label: CONTENT.portfolio.filters.all },
    { id: 'ACTIVITY_VISUALS', label: CONTENT.portfolio.filters.activity },
    { id: 'BRAND_ECOSYSTEM', label: CONTENT.portfolio.filters.brand_ecosystem },
    { id: 'LUXURY_DESIGN', label: CONTENT.portfolio.filters.luxury },
    { id: 'AUTOMOTIVE_DESIGN', label: CONTENT.portfolio.filters.automotive },
    { id: 'FNB_COMMERCIAL', label: CONTENT.portfolio.filters.fnb },
    { id: 'AI_CREATIVE', label: CONTENT.portfolio.filters.ai_drama }
  ];

  return (
    <div className="min-h-screen bg-background text-white selection:bg-[#F63C0C]/20">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left" style={{ scaleX }} />

      {/* Music Player Popover */}
      <AnimatePresence>
        {showMusicPlayer && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed top-24 right-6 md:right-24 z-[70] p-4 glass rounded-3xl border border-white/10 shadow-3xl"
          >
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Soundtrack Active</span>
              <button onClick={() => setShowMusicPlayer(false)} className="text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-black/40">
              <iframe 
                frameBorder="0" 
                width={330} 
                height={86} 
                src="//music.163.com/outchain/player?type=2&id=2633715207&auto=1&height=66"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl h-[64px] glass rounded-full flex items-center justify-between px-10 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-10">
          <span className="text-lg font-display font-bold tracking-tighter text-white">JANICE MO</span>
          <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
             <a href="#projects" className="hover:text-white transition-colors">{CONTENT.nav.portfolios}</a>
             <a href="#journey" className="hover:text-white transition-colors">{CONTENT.nav.career}</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <button onClick={() => setLanguage('EN')} className={`px-3 py-1.5 rounded-full text-[9px] font-bold transition-all ${language === 'EN' ? 'bg-white text-black' : 'text-zinc-500'}`}>EN</button>
            <button onClick={() => setLanguage('CN')} className={`px-3 py-1.5 rounded-full text-[9px] font-bold transition-all ${language === 'CN' ? 'bg-white text-black' : 'text-zinc-500'}`}>中文</button>
          </div>
          <button 
            onClick={() => setShowMusicPlayer(!showMusicPlayer)} 
            className={`transition-all p-2 rounded-full hover:bg-white/5 ${showMusicPlayer ? 'text-primary' : 'text-zinc-500'}`}
          >
            <Music className={`w-4 h-4 ${showMusicPlayer ? 'animate-pulse' : ''}`} />
          </button>
          <a href={`mailto:${CONTACT_INFO.email}`} className="px-6 py-2.5 bg-primary text-white text-[10px] font-bold tracking-widest rounded-full hover:brightness-110 transition-all uppercase">Let's Talk</a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-32 overflow-hidden">
        <div className="max-w-7xl relative z-10 w-full mx-auto">
          {/* Hero Main Typography Group */}
          <div className="flex flex-col mb-20 md:mb-32">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.8] tracking-tighter text-white"
            >
              JANICE MO
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.15 }}
              className="flex items-center gap-4 md:gap-8 mt-6 md:mt-8"
            >
              <div className="bg-primary-gradient px-6 py-3 md:px-12 md:py-6 rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/40 flex items-center justify-center transform -rotate-1">
                 <span className="text-[9vw] md:text-[7.5vw] font-display font-bold leading-none text-white tracking-tighter">
                   {language === 'EN' ? 'STRATEGIC' : '战略'}
                 </span>
              </div>
              <span className="text-[12vw] md:text-[10vw] font-display font-bold leading-none text-white tracking-tighter">
                DESIGN
              </span>
            </motion.div>
          </div>

          {/* Hero Description & Stats Group - REFINED FONT SIZES */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-16 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4 }}
              className="max-w-xl flex gap-8 items-start"
            >
              <div className="w-[1px] h-20 bg-primary/40 flex-shrink-0 mt-1" />
              <p className="text-zinc-500 text-[11px] md:text-[13px] leading-relaxed font-light tracking-wide whitespace-pre-line py-0.5">
                {CONTENT.hero.subtitle}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.6 }}
              className="flex items-center gap-12 md:gap-24 pb-4"
            >
               <div className="text-right">
                  <div className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none">09+</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-bold mt-5">Vertical Expertise</div>
               </div>
               <div className="text-right">
                  <div className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none">INTL.</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-bold mt-5">Design Awards</div>
               </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Ambient Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </section>

      <section className="px-6 md:px-20 py-40 bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase mb-6">{CONTENT.resume.aboutTitle}</h2>
            <p className="text-zinc-500 max-w-2xl text-lg font-light leading-relaxed">{CONTENT.resume.aboutText}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE.map((exp, idx) => (
              <ExpertiseCard key={idx} title={exp.title} desc={exp.desc} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 md:px-20 py-40 scroll-mt-32 overflow-visible">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-12 mb-32">
             <div className="max-w-4xl">
               <h2 className="text-7xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-[0.8]">{language === 'EN' ? 'WORKS' : '项目体验集'}</h2>
               <span className="text-[10px] font-bold text-zinc-600 tracking-[0.5em] uppercase mt-6 block">{CONTENT.portfolio.subtitle}</span>
             </div>
             <div className="flex flex-wrap gap-2 p-2 glass rounded-[2rem] w-fit">
                {filterButtons.map(filter => (
                  <button 
                    key={filter.id} 
                    onClick={() => setActiveCategory(filter.id as CategoryType)}
                    className={`px-8 py-3.5 rounded-2xl text-[10px] font-bold tracking-widest uppercase transition-all ${activeCategory === filter.id ? 'bg-white text-black shadow-xl' : 'text-zinc-500 hover:text-white'}`}
                  >
                    {filter.label}
                  </button>
                ))}
             </div>
          </div>
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                 <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={() => setSelectedProject(project)}>
                   <ProjectCard project={project} onOpenVideo={(url) => setModalVideoUrl(url)} className="aspect-[16/9] orange-glow w-full" />
                 </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="px-6 md:px-20 py-40 bg-zinc-950/50 scroll-mt-32">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-10 mb-24">
                <h2 className="text-6xl md:text-9xl font-display font-bold tracking-tighter uppercase leading-none">{CONTENT.resume.experienceTitle}</h2>
                <div className="h-[2px] flex-1 bg-white/5" />
            </div>
            <ResumeSection content={CONTENT.resume} experience={CONTENT.experience as any} skills={CONTENT.skills} />
         </div>
      </section>

      <footer className="px-6 md:px-20 py-64 text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[14vw] md:text-[12vw] font-display font-bold tracking-tighter leading-none mb-40">
            LET'S <span className="text-primary-gradient">CREATE</span><br />LEGACY
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48 text-left">
            <a href={`mailto:${CONTACT_INFO.email}`} className="p-16 rounded-[2.5rem] bg-zinc-950/80 border border-white/5 hover:border-primary/30 transition-all flex flex-col justify-between h-80 group">
              <Mail className="w-12 h-12 text-zinc-700 group-hover:text-primary transition-all" />
              <div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-[0.4em] uppercase mb-4 block">Primary Contact</span>
                <p className="text-3xl font-display font-bold">{CONTACT_INFO.email}</p>
              </div>
            </a>
            <div className="p-16 rounded-[2.5rem] bg-zinc-950/80 border border-white/5 hover:border-[#FE812E]/30 transition-all flex flex-col justify-between h-80 group cursor-pointer">
              <Phone className="w-12 h-12 text-zinc-700 group-hover:text-[#FE812E] transition-all" />
              <div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-[0.4em] uppercase mb-4 block">Instant Messaging</span>
                <p className="text-3xl font-display font-bold">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </div>
          <p className="mt-40 text-[9px] text-zinc-800 uppercase tracking-[1.5em] font-bold">JANICE MO • VERTICAL ARCHIVE © 2025</p>
        </div>
      </footer>

      <AIChat context={CONTENT.aiContext} />
      <VideoModal isOpen={!!modalVideoUrl} videoUrl={modalVideoUrl} onClose={() => setModalVideoUrl(null)} />
      <AnimatePresence>
        {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;