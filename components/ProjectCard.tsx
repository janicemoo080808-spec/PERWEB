
import React, { useRef, MouseEvent, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, Plus, ImageOff, MonitorPlay } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenVideo: (url: string) => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenVideo, className = "" }) => {
  const isVideo = !!project.videoUrl && project.videoUrl !== 'YOUR_VIDEO_URL_HERE.mp4';
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-6deg", "6deg"]);

  useEffect(() => {
    const img = new Image();
    img.src = project.imageUrl;
    if (img.complete) setIsLoaded(true);
  }, [project.imageUrl]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden bg-zinc-950 cursor-pointer rounded-[2.5rem] ${className}`}
    >
      {/* Video Indicator Badge */}
      {isVideo && (
        <div className="absolute top-8 left-8 z-30 flex items-center gap-2 bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-xl">
           <MonitorPlay className="w-3 h-3 text-white" />
           <span className="text-[9px] font-bold text-white uppercase tracking-widest">Video Case</span>
        </div>
      )}

      {/* Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-900">
        <div className={`absolute inset-0 shimmer transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-20'}`} />
        
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <ImageOff className="w-8 h-8 text-zinc-800" />
          </div>
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            onError={() => setImgError(true)}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 ${isLoaded ? 'opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-110'}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between" style={{ transform: "translateZ(60px)" }}>
        <div className="flex justify-between items-start">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-3">{project.category.replace('_', ' ')}</span>
              <div className="h-[2px] w-10 bg-primary/60" />
           </div>
           
           <motion.div 
              onClick={(e) => { e.stopPropagation(); if (isVideo) onOpenVideo(project.videoUrl!); }} 
              className={`w-14 h-14 rounded-full glass flex items-center justify-center ${isVideo ? 'opacity-100 bg-primary/20' : 'opacity-0'} group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-white shadow-2xl`}
           >
              {isVideo ? <Play className="w-4 h-4 fill-current ml-1" /> : <Plus className="w-6 h-6" />}
           </motion.div>
        </div>

        <div className="relative">
           <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter leading-[1.1] mb-6">{project.title}</h3>
           <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] text-white/60 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full font-bold bg-white/5 backdrop-blur-md">
                  {tag}
                </span>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
