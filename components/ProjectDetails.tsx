
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { X, Smartphone, ShieldCheck, ImageOff, Sparkles, Layers, Globe, FileText, Hexagon, Twitter, BookOpen, Zap, Award, Camera, Utensils, Heart, ArrowRight, ChevronLeft, TrendingUp, Target, Cpu, Rocket, BarChart3, Users, Fingerprint, Map } from 'lucide-react';
import { Project, ProjectSection } from '../types';

const ICON_MAP: Record<string, any> = {
  Hexagon, BookOpen, Globe, Smartphone, FileText, Sparkles, Twitter, ShieldCheck, Layers, Zap, Award, Camera, Utensils, Heart, TrendingUp, Target, Cpu, Rocket, BarChart3, Users, Fingerprint, Map
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

const StrategyCard: React.FC<{ point: string; index: number }> = ({ point, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const parts = point.split(/[:：|]/);
  const label = parts.length > 1 ? parts[0] : null;
  const content = parts.length > 1 ? parts.slice(1).join(':') : point;

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="relative p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col gap-4 overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-4xl font-display font-black">{(index + 1).toString().padStart(2, '0')}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[9px] font-bold tracking-[0.4em] text-zinc-600 uppercase">Strategic Insight</span>
      </div>

      {label ? (
        <div className="space-y-3">
          <h5 className="text-sm font-bold text-white tracking-tight">{label}</h5>
          <p className="text-xs text-zinc-400 leading-relaxed font-light">{content}</p>
        </div>
      ) : (
        <p className="text-xs text-zinc-300 leading-relaxed font-medium">{content}</p>
      )}

      <div className="absolute bottom-0 left-0 h-[2px] bg-primary-gradient transition-all duration-700" style={{ width: isHovered ? '100%' : '0%' }} />
    </motion.div>
  );
};

const SectionHeader: React.FC<{ section: any; Icon: any }> = ({ section, Icon }) => (
  <div className="flex items-center gap-10 mb-8">
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-zinc-900/80 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group flex-shrink-0">
      <div className="absolute inset-0 bg-primary-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <div className="w-8 h-[1px] bg-primary/30" />
        <span className="text-[8px] md:text-[9px] font-bold text-primary tracking-[0.5em] uppercase">{section.label}</span>
      </div>
      <h4 className="text-2xl md:text-5xl font-display font-bold text-white tracking-tighter leading-none">{section.title}</h4>
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
           <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">CHAPTER {(index + 1).toString().padStart(2, '0')}</span>
           </div>
           <p className="text-[9px] text-zinc-400 uppercase tracking-widest mt-3 font-medium">Strategic Design Standard // Global Narrative Strategy</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050507] overflow-y-auto overflow-x-hidden no-scrollbar selection:bg-primary/30"
    >
      <nav className="fixed top-0 left-0 right-0 h-24 px-6 md:px-12 flex items-center justify-between z-[110] bg-background/20 backdrop-blur-3xl border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={onClose}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <ChevronLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase hidden sm:block">Back to Lab</span>
          </button>
          
          <div className="w-[1px] h-6 bg-white/10" />
          
          <div className="flex flex-col">
            <span className="text-[8px] font-bold tracking-[0.5em] text-primary uppercase mb-0.5">{project.category.replace('_', ' ')}</span>
            <h2 className="text-xs md:text-sm font-display font-bold text-white tracking-tight truncate max-w-[150px] md:max-w-none">{project.title}</h2>
          </div>
        </div>
        
        <button onClick={onClose} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
          <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
        </button>
      </nav>

      <div className="pt-0 pb-40">
        <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-zinc-950">
          <ImageWithFallback src={project.imageUrl} alt={project.title} priority={true} className="w-full h-full opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent z-10" />
          <div className="absolute bottom-24 left-8 md:left-24 max-w-5xl z-20">
             <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h3 className="text-xl md:text-3xl font-display font-bold text-white tracking-tighter mb-10 leading-[1.2] max-w-4xl">
                  {project.description}
                </h3>
                <div className="flex flex-wrap gap-3">
                   {project.tags.map(t => (
                     <span key={t} className="text-[9px] font-bold tracking-widest text-white/40 border border-white/5 px-8 py-3 rounded-full uppercase bg-white/5 hover:bg-primary/20 hover:text-white transition-all cursor-default">
                       {t}
                     </span>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>

        <div className="mt-12 space-y-24 md:space-y-32">
           {project.sections?.map((section, idx) => {
             // Handle Big Section Divider Header
             if (section.isHeader) {
               return (
                 <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, y: 30 }} 
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="px-8 md:px-24 pt-32 pb-12"
                 >
                   <div className="flex flex-col gap-6">
                     <h2 className="text-6xl md:text-[12vw] font-display font-bold tracking-tighter text-white/15 uppercase leading-none select-none">
                       {section.title}
                     </h2>
                     <div className="w-24 h-2 bg-primary mt-4" />
                   </div>
                 </motion.div>
               );
             }

             const Icon = ICON_MAP[section.icon] || Layers;
             const hasImages = section.images && section.images.length > 0;
             const hasPoints = section.points && section.points.length > 0;
             
             return (
               <motion.div 
                 key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                 className={`flex flex-col ${section.isSlider ? 'px-0' : 'px-8 md:px-24'} max-w-8xl mx-auto w-full`}
               >
                  <div className={`${section.isSlider ? 'px-8 md:px-24' : ''}`}>
                    <SectionHeader section={section} Icon={Icon} />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start mb-8 md:mb-12">
                      <div className="lg:col-span-4 flex flex-col gap-4">
                         {section.description && (
                           <p className="text-xl md:text-2xl text-zinc-100 font-display font-medium leading-relaxed tracking-tight border-l-4 border-primary pl-6 md:pl-10 py-1">
                             {section.description}
                           </p>
                         )}
                         {hasPoints && (
                            <div className="flex items-center gap-4 text-[9px] font-bold text-zinc-600 tracking-[0.4em] uppercase mt-2">
                              <div className="w-6 md:w-8 h-[1px] bg-zinc-800" />
                              Strategic Breakdown
                            </div>
                         )}
                      </div>

                      {hasPoints && (
                        <div className="lg:col-span-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                              {section.points?.map((pt, pIdx) => (
                                <StrategyCard key={pIdx} point={pt} index={pIdx} />
                              ))}
                           </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {hasImages && (
                    section.isSlider ? (
                      <div className="relative group overflow-visible mt-6 md:mt-10">
                        <div className="flex items-center overflow-x-auto gap-8 md:gap-12 px-8 md:px-24 pb-20 md:pb-32 pt-4 snap-x snap-mandatory no-scrollbar scroll-smooth">
                          {section.images.map((img: string, i: number) => (
                             <LuxuryCard key={i} src={img} index={i} total={section.images.length} />
                          ))}
                          <div className="flex-shrink-0 w-8 md:w-64" />
                        </div>
                        <div className="absolute bottom-10 md:bottom-16 left-8 md:left-24 flex items-center gap-6">
                           <div className="flex items-center gap-2">
                             <span className="text-[10px] font-bold text-primary">01</span>
                             <div className="w-32 md:w-48 h-[1px] bg-white/5 relative">
                                <motion.div className="absolute inset-y-0 left-0 bg-primary/40 w-1/3" />
                             </div>
                             <span className="text-[10px] font-bold text-zinc-600">{(section.images.length).toString().padStart(2, '0')}</span>
                           </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-12 md:gap-24 mt-6 md:mt-10 px-8 md:px-24">
                        {section.images.map((img: string, i: number) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] group"
                          >
                             <ImageWithFallback src={img} alt={`${section.title}-${i}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[3s] ease-out" />
                             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
                          </motion.div>
                        ))}
                      </div>
                    )
                  )}
               </motion.div>
             );
           })}
        </div>

        <section className="px-8 md:px-24 py-32 md:py-64 border-t border-white/5 mt-32 md:mt-64 bg-zinc-950/30">
           <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-10">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">Ready for the Next Chapter?</h4>
              <p className="text-zinc-500 mb-16 text-lg max-w-2xl font-light">The integration of high-end industrial aesthetics and vertical industry logic defines every strategic movement in this case study.</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="group relative inline-flex items-center gap-6 px-16 md:px-20 py-6 md:py-8 rounded-full bg-white text-black font-display font-bold text-lg md:text-xl transition-all shadow-2xl hover:shadow-primary/20"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                Close Archive
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-offset-8 group-hover:ring-offset-black/50 transition-all" />
              </motion.button>
           </div>
        </section>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .max-w-8xl { max-w: 1440px; }
      `}</style>
    </motion.div>
  );
};

export default ProjectDetails;
