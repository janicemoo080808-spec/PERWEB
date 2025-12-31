
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { CONTENT_EN, CONTENT_CN, BACKGROUND_MUSIC_URL, STRATEGIC_EXPERTISE_EN, STRATEGIC_EXPERTISE_CN } from './constants';
import { CategoryType, Language, Project } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import VideoModal from './components/VideoModal';
import AIChat from './components/AIChat';
import ResumeSection from './components/ResumeSection';
import { VolumeX, Award, Mail, Phone } from 'lucide-react';

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
  const [language, setLanguage] = useState<Language>('CN'); // Default to CN for localized requests
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const CONTACT_INFO = { email: "janicemo08@163.com", phone: "186 2156 8644" };
  const CONTENT = language === 'EN' ? CONTENT_EN : CONTENT_CN;
  const EXPERTISE = language === 'EN' ? STRATEGIC_EXPERTISE_EN : STRATEGIC_EXPERTISE_CN;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    audioRef.current = new Audio(BACKGROUND_MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play().catch(() => {});
    setIsPlaying(!isPlaying);
  };

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
          <button onClick={toggleAudio} className="text-zinc-500 hover:text-white transition-colors">
            {isPlaying ? <div className="flex gap-1 h-3 items-end">
              {[1,2,3].map(i => <motion.div key={i} animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5, delay: i*0.1 }} className="w-0.5 bg-[#FE812E]" />)}
            </div> : <VolumeX className="w-4 h-4" />}
          </button>
          <a href={`mailto:${CONTACT_INFO.email}`} className="px-6 py-2.5 bg-primary text-white text-[10px] font-bold tracking-widest rounded-full hover:brightness-110 transition-all uppercase">Let's Talk</a>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-32 overflow-hidden">
        <div className="max-w-7xl relative z-10">
          <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter mb-16">
            JANICE MO<br />
            <span className="text-primary-gradient">{language === 'EN' ? 'STRATEGIC' : '战略'}</span> DESIGN
          </motion.h1>
          <div className="flex flex-col md:flex-row items-end justify-between gap-16">
            <p className="max-w-xl text-zinc-500 text-sm md:text-base leading-relaxed font-light border-l border-[#F63C0C]/40 pl-10 whitespace-pre-line">
              {CONTENT.hero.subtitle}
            </p>
            <div className="flex items-center gap-12">
               <div className="text-right">
                  <div className="text-4xl font-display font-bold">09+</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold mt-2">Vertical Expertise</div>
               </div>
               <div className="text-right">
                  <div className="text-4xl font-display font-bold">INTL.</div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold mt-2">Design Awards</div>
               </div>
            </div>
          </div>
        </div>
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

      <section id="projects" className="px-6 md:px-20 py-40 scroll-mt-32">
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
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
               <motion.div layout key={project.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={() => setSelectedProject(project)}>
                 <ProjectCard project={project} onOpenVideo={(url) => setModalVideoUrl(url)} className="aspect-[16/10] orange-glow" />
               </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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