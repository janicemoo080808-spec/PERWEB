
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, ChevronLeft } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, videoUrl, onClose }) => {
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) setError(false);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl aspect-video bg-zinc-950 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Action Bar */}
            <div className="absolute top-0 left-0 right-0 h-16 px-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
              <button 
                onClick={onClose}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Back to Portfolio</span>
              </button>
              
              <button
                onClick={onClose}
                className="flex items-center gap-3 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all group border border-white/5"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase mr-2 hidden sm:block">Close Player</span>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {error ? (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 gap-4">
                <AlertCircle className="w-12 h-12 text-primary" />
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400">Media Stream Interrupted</p>
                <button 
                  onClick={onClose}
                  className="mt-4 px-10 py-3 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors"
                >
                  Return
                </button>
              </div>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
                onError={() => setError(true)}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
