
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { X, Smartphone, ShieldCheck, ImageOff, Sparkles, Layers, Globe, FileText, Hexagon, Twitter, BookOpen, Zap, Award, Camera, Utensils, Heart, ArrowRight, ChevronLeft } from 'lucide-react';
import { Project, ProjectSection } from '../types';

const ICON_MAP: Record<string, any> = {
  Hexagon, BookOpen, Globe, Smartphone, FileText, Sparkles, Twitter, ShieldCheck, Layers, Zap, Award, Camera, Utensils, Heart
};

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const optimizeImageUrl = (url: string, width: number = 1920) => {
  if (url.includes('unsplash.com')) return url.split('?')[0] + `?q=80&fm=webp&w=${width}&fit=crop`;
  return url;
};

const ImageWithFallback: React.FC<{ 
  src: string; alt: string; className?: string; priority?: boolean; mode?: "cover" | "contain";
}> = ({ src, alt, className, priority = false, mode = "cover" }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const optimizedSrc = optimizeImageUrl(src);

  return (
    <div className={`relative overflow-hidden bg-zinc-950 ${className}`}>
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 bg-zinc-900 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', filter: 'blur(30px) brightness(0.5)', transform: 'scale(1.1)' }}
      />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 p-12 text-center">
          <ImageOff className="w-8 h-8 mb-4 opacity-20" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Asset Delivery Failed</p>
        </div>
      ) : (
        <img
          src={optimizedSrc} alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading={priority ? "eager" : "lazy"}
          className={`w-full h-full ${mode === 'cover' ? 'object-cover' : 'object-contain'} transition-all duration-[800ms] ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      )}
    </div>
  );
};

const SectionHeader: React.FC<{ section: any; Icon: any }> = ({ section, Icon }) => (
  <div className="flex items-center gap-8 mb-16">
    <div className="w-20 h-20 rounded-2xl bg-zinc-900/50 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors relative z-10" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-zinc-500 tracking-[0.5em] uppercase mb-2 block">{section.label}</span>
      <h4 className="text-4xl font-display font-bold text-white tracking-tight leading-none">{section.title}</h4>
    </div>
  </div>
);

const LuxuryCard: React.FC<{ src: string; index: number; total: number }> = ({ src, index, total }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 30);
    y.set((e.clientY - centerY) / 30);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 w-[90vw] md:w-[75vw] lg:w-[60vw] aspect-video snap-center relative group perspective-1000"
    >
      <motion.div 
        style={{ x: useTransform(x, v => v * -1.2), y: useTransform(y, v => v * -1.2) }}
        className="absolute -top-12 -left-12 text-[12vw] font-display font-black text-white/[0.02] select-none pointer-events-none z-0"
      >
        {(index + 1).toString().padStart(2, '0')}
      </motion.div>

      <motion.div 
        style={{ rotateX: useTransform(y, v => v * -0.8), rotateY: useTransform(x, v => v * 0.8) }}
        className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/50 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] relative z-10 backdrop-blur-sm"
      >
        <ImageWithFallback 
          src={src} 
          alt={`Editorial-${index}`} 
          mode="contain" 
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
           <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">CHAPTER {(index + 1).toString().padStart(2, '0')}</span>
           </div>
           <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-3 font-medium">LVMH Design Standard // Global Narrative Strategy</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const isLuxury = project.category === 'LUXURY_DESIGN';

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050507] overflow-y-auto overflow-x-hidden no-scrollbar"
    >
      {/* Enhanced Header Nav with Back Button */}
      <nav className="fixed top-0 left-0 right-0 h-24 px-6 md:px-12 flex items-center justify-between z-[110] bg-background/20 backdrop-blur-3xl border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <ChevronLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase hidden sm:block">Back</span>
          </button>
          
          <div className="w-[1px] h-6 bg-white/10" />
          
          <div className="flex flex-col">
            <span className="text-[8px] font-bold tracking-[0.4em] text-primary uppercase mb-0.5">{project.category.replace('_', ' ')}</span>
            <h2 className="text-xs md:text-sm font-display font-bold text-white tracking-tight truncate max-w-[150px] md:max-w-none">{project.title}</h2>
          </div>
        </div>
        
        <button onClick={onClose} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
          <X className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white" />
        </button>
      </nav>

      <div className="pt-0 pb-20">
        {/* Hero Banner */}
        <div className="relative w-full h-[70vh] md:h-[95vh] overflow-hidden bg-zinc-950">
          <ImageWithFallback src={project.imageUrl} alt={project.title} priority={true} className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent z-10" />
          <div className="absolute bottom-24 left-8 md:left-24 max-w-5xl z-20">
             <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="text-2xl md:text-5xl font-display font-bold text-white tracking-tight mb-8 leading-tight max-w-3xl drop-shadow-2xl">
                  {project.description}
                </h3>
                <div className="flex flex-wrap gap-3">
                   {project.tags.map(t => (
                     <span key={t} className="text-[9px] font-bold tracking-widest text-white/40 border border-white/5 px-8 py-3 rounded-full uppercase bg-white/5 hover:bg-white/10 transition-colors cursor-default">
                       {t}
                     </span>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>

        {/* Dynamic Context Sections */}
        <div className={`${isLuxury ? 'mt-0' : 'mt-40'} space-y-64`}>
           {project.sections?.map((section, idx) => {
             const Icon = ICON_MAP[section.icon] || Layers;
             
             return (
               <motion.div 
                 key={idx} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                 className={`flex flex-col ${section.isSlider ? 'px-0' : 'px-8 md:px-24'}`}
               >
                  <div className={`${section.isSlider ? 'px-8 md:px-24' : ''} ${isLuxury ? 'pt-32 mb-6' : ''}`}>
                    <SectionHeader section={section} Icon={Icon} />
                  </div>

                  {section.isSlider ? (
                    <div className="relative group overflow-visible">
                      <div className="flex items-center overflow-x-auto gap-12 px-8 md:px-24 pb-32 pt-16 snap-x snap-mandatory no-scrollbar scroll-smooth">
                        {section.images.map((img: string, i: number) => (
                           <LuxuryCard key={i} src={img} index={i} total={section.images.length} />
                        ))}
                        <div className="flex-shrink-0 w-8 md:w-64" />
                      </div>
                      
                      <div className="absolute bottom-16 left-8 md:left-24 flex items-center gap-6">
                         <div className="flex items-center gap-2">
                           <span className="text-[10px] font-bold text-primary">01</span>
                           <div className="w-48 h-[1px] bg-white/5 relative">
                              <motion.div className="absolute inset-y-0 left-0 bg-primary/40 w-1/3" />
                           </div>
                           <span className="text-[10px] font-bold text-zinc-600">{(section.images.length).toString().padStart(2, '0')}</span>
                         </div>
                         <div className="flex items-center gap-4 text-zinc-600 opacity-60">
                            <span className="text-[9px] font-bold tracking-widest uppercase">Explore Visual Narrative</span>
                            <ArrowRight className="w-4 h-4 animate-bounce-x" />
                         </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-24 max-w-7xl mx-auto w-full">
                      {section.images.map((img: string, i: number) => (
                        <div key={i} className="relative w-full rounded-3xl overflow-hidden border border-white/5 bg-zinc-950 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] group">
                           <ImageWithFallback src={img} alt={`${section.title}-${i}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[5s] ease-out" />
                           <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  )}
               </motion.div>
             );
           })}
        </div>

        {/* Footer Back Button Section */}
        <section className="px-8 md:px-24 py-40 border-t border-white/5 mt-40">
           <div className="max-w-4xl mx-auto text-center">
              <span className="text-[10px] font-bold text-zinc-600 tracking-[0.5em] uppercase mb-10 block">End of Narrative</span>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="group relative inline-flex items-center gap-6 px-16 py-8 rounded-[2.5rem] bg-white text-black font-display font-bold text-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                Return to Portfolios
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20 group-hover:ring-offset-4 group-hover:ring-offset-black/50 transition-all" />
              </motion.button>
              <p className="mt-12 text-zinc-500 text-[10px] tracking-widest font-bold uppercase">Back to Main Archive</p>
           </div>
        </section>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetails;
