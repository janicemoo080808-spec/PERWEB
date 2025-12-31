
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { X, Smartphone, ShieldCheck, ImageOff, Sparkles, Layers, Globe, FileText, Hexagon, Twitter, BookOpen, Zap, Award, Camera, Utensils, Heart, ArrowRight, ChevronLeft, TrendingUp, Target, Cpu, Rocket, BarChart3, Users, Fingerprint, Map, PlayCircle } from 'lucide-react';
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

const VideoWithFallback: React.FC<{ 
  src: string; poster?: string; className?: string;
}> = ({ src, poster, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-950 ${className}`} style={{ transform: 'translateZ(0)' }}>
      {!isLoaded && poster && (
        <img src={poster} alt="Poster" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110" />
      )}
      <video
        src={src}
        muted
        autoPlay
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none' }}
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-800 bg-zinc-900">
           <PlayCircle className="w-10 h-10 mb-4 opacity-20" />
           <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Video Stream Unavailable</p>
        </div>
      )}
      <div className="absolute top-8 right-8 z-10">
         <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] font-bold text-white/60 tracking-widest uppercase">Cinematic Stream</span>
         </div>
      </div>
    </div>
  );
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
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Asset Failed</p>
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
  <div className="flex items-center gap-8 mb-8">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group flex-shrink-0">
      <div className="absolute inset-0 bg-primary-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex flex-col gap-0.5">
      <h4 className="text-xl md:text-3xl font-display font-bold text-white tracking-tight leading-tight">{section.title}</h4>
      <span className="text-[9px] font-bold text-zinc-600 tracking-[0.4em] uppercase">{section.label}</span>
    </div>
  </div>
);

const LuxuryCard: React.FC<{ src: string; index: number; total: number }> = ({ src, index, total }) => {
  return (
    <motion.div className="flex-shrink-0 w-[92vw] md:w-[85vw] lg:w-[75vw] aspect-video snap-center relative group perspective-1000">
      <div className="absolute -top-12 -left-12 text-[12vw] font-display font-black text-white/[0.02] select-none pointer-events-none z-0">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] relative z-10 backdrop-blur-sm">
        <ImageWithFallback src={src} alt={`Slide-${index}`} mode="contain" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  const isAIProject = project.category === 'AI_CREATIVE';

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#050507] overflow-y-auto overflow-x-hidden no-scrollbar selection:bg-primary/30"
    >
      <nav className="fixed top-0 left-0 right-0 h-20 px-6 md:px-12 flex items-center justify-between z-[110] bg-background/20 backdrop-blur-3xl border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="text-[9px] font-bold tracking-[0.15em] text-white uppercase hidden sm:block">Archive</span>
          </button>
          <div className="w-[1px] h-5 bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[7px] font-bold tracking-[0.4em] text-primary uppercase mb-0.5">{project.category.replace('_', ' ')}</span>
            <h2 className="text-[10px] md:text-xs font-display font-bold text-white tracking-tight truncate max-w-[120px] md:max-w-none">{project.title}</h2>
          </div>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group">
          <X className="w-4 h-4 text-gray-400 group-hover:text-white" />
        </button>
      </nav>

      <div className="pt-0 pb-40">
        <div className={`relative w-full ${isAIProject ? 'h-[70vh] md:h-[95vh]' : 'h-[60vh] md:h-[85vh]'} overflow-hidden bg-zinc-950`}>
          {project.videoUrl && isAIProject ? (
            <VideoWithFallback src={project.videoUrl} poster={project.imageUrl} className="w-full h-full" />
          ) : (
            <ImageWithFallback src={project.imageUrl} alt={project.title} priority={true} className="w-full h-full opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent z-10" />
          <div className="absolute bottom-20 left-8 md:left-24 max-w-5xl z-20">
             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <div className="flex items-center gap-3 mb-5">
                   <div className="w-8 h-[1px] bg-primary" />
                   <span className="text-[9px] font-bold tracking-[0.4em] text-primary uppercase">Project Narrative</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white tracking-tight mb-8 leading-[1.2] max-w-4xl">
                  {project.description}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                   {project.tags.map(t => (
                     <span key={t} className="text-[8px] font-bold tracking-widest text-white/50 border border-white/5 px-6 py-2.5 rounded-full uppercase bg-white/5 backdrop-blur-sm">
                       {t}
                     </span>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>

        <div className="mt-20 space-y-32 md:space-y-48">
           {project.sections?.map((section, idx) => {
             const Icon = ICON_MAP[section.icon] || Layers;
             const hasVideo = !!section.videoUrl;
             const hasPoints = section.points && section.points.length > 0;
             
             return (
               <motion.div 
                 key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                 className="flex flex-col w-full"
               >
                  <div className="px-8 md:px-24 max-w-7xl mx-auto w-full">
                    <SectionHeader section={section} Icon={Icon} />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start mb-10">
                      <div className={hasPoints ? "lg:col-span-5" : "lg:col-span-12 max-w-4xl"}>
                         {section.description && (
                           <p className="text-base md:text-lg text-zinc-300 font-display font-light leading-relaxed tracking-normal border-l-[3px] border-primary pl-6 md:pl-8">
                             {section.description}
                           </p>
                         )}
                      </div>
                      
                      {hasPoints && (
                        <div className="lg:col-span-7">
                          <div className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-900/20 border border-white/5 overflow-hidden group">
                             <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
                             <div className="flex flex-col gap-10">
                                {section.points?.map((pt, pIdx) => {
                                   const parts = pt.split(/[:：|]/);
                                   const label = parts.length > 1 ? parts[0] : null;
                                   const content = parts.length > 1 ? parts.slice(1).join(':') : pt;
                                   
                                   return (
                                     <div key={pIdx} className="relative pl-10">
                                        {pIdx < (section.points?.length || 0) - 1 && (
                                          <div className="absolute left-[5px] top-4 bottom-[-40px] w-[1px] bg-white/10" />
                                        )}
                                        <div className="absolute left-0 top-1 w-[9px] h-[9px] rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                                           <div className="w-1 h-1 rounded-full bg-primary" />
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                           {label ? (
                                             <div className="space-y-1.5">
                                                <h5 className="text-base font-bold text-white tracking-tight">{label}</h5>
                                                <p className="text-xs text-zinc-500 leading-relaxed font-light whitespace-pre-line">{content}</p>
                                             </div>
                                           ) : (
                                             <p className="text-sm text-zinc-400 leading-relaxed font-light whitespace-pre-line">{content}</p>
                                           )}
                                        </div>
                                     </div>
                                   );
                                })}
                             </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {hasVideo && (
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-950 shadow-2xl mt-8 mx-auto max-w-[92vw]">
                      <VideoWithFallback src={section.videoUrl!} poster={project.imageUrl} className="w-full h-full" />
                    </div>
                  )}

                  {section.images && section.images.length > 0 && (
                    section.isSlider ? (
                      <div className="flex items-center overflow-x-auto gap-8 md:gap-12 px-6 md:px-12 pb-16 pt-8 no-scrollbar snap-x w-full">
                        {section.images.map((img: string, i: number) => (
                           <LuxuryCard key={i} src={img} index={i} total={section.images.length} />
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-12 mt-12 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
                        {section.images.map((img: string, i: number) => (
                          <div key={i} className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-950 shadow-2xl w-full">
                             <ImageWithFallback src={img} alt={`${section.title}-${i}`} className="w-full h-full" />
                          </div>
                        ))}
                      </div>
                    )
                  )}
               </motion.div>
             );
           })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
