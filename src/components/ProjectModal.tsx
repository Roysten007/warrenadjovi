import React, { useState } from 'react';
import { FaXmark, FaVolumeHigh, FaVolumeXmark, FaCheck, FaArrowRight, FaWhatsapp } from 'react-icons/fa6';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);

  React.useEffect(() => {
    setVideoError(false);
    setIsMuted(false);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#09090b] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/60 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 text-[#84cc16] text-[11px] font-mono font-bold">
              {project.platform || 'Format Vertical'}
            </span>
            <h3 className="font-display font-bold text-sm text-white truncate max-w-xs">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <FaXmark className="text-sm" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-4">
          
          {/* Vertical Video Player Box */}
          <div className="relative aspect-[9/16] max-h-[62vh] mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center group">
            {project.videoUrl && !videoError ? (
              <video
                src={project.videoUrl}
                autoPlay
                controls
                loop
                muted={isMuted}
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Quick Audio Toggle Floating Pill */}
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#84cc16] hover:text-white transition-colors text-xs flex items-center gap-1.5 shadow-lg"
              >
                {isMuted ? <FaVolumeXmark className="text-xs" /> : <FaVolumeHigh className="text-xs" />}
                <span className="text-[10px] font-mono">{isMuted ? 'Muet' : 'Son activé'}</span>
              </button>
            </div>
          </div>

          {/* Quick CTA inside Modal */}
          <div className="pt-2">
            <a
              href={`https://wa.me/22900000000?text=${encodeURIComponent(`Bonjour Warren, j'ai vu votre vidéo "${project.title}" et j'aimerais un rendu similaire pour mon projet.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="text-base" />
              <span>Demander un montage similaire</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
