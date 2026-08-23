import React, { useState, useRef, useEffect } from 'react';
import { FaXmark, FaVolumeHigh, FaVolumeXmark, FaWhatsapp, FaGaugeHigh } from 'react-icons/fa6';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideoError(false);
    setIsMuted(false);
    setPlaybackSpeed(1);
  }, [project?.id]);

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn"
    >
      {/* Click outside backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Fermer le lecteur vidéo en cliquant en dehors"
      />

      {/* Prominent Floating Close Button Top-Right for Mobile & Desktop */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black border-2 border-black flex items-center justify-center text-xl font-black shadow-[0_0_25px_rgba(132,204,22,0.7)] transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Fermer la vidéo"
      >
        <FaXmark />
      </button>

      {/* Modal Container */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#09090b] border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 flex flex-col max-h-[94vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-black/80">
          <div className="flex items-center gap-2.5 min-w-0 pr-8">
            <span className="px-2.5 py-0.5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 text-[#84cc16] text-[11px] font-mono font-bold flex-shrink-0">
              {project.platform || 'Format Vertical'}
            </span>
            <h3 id="modal-video-title" className="font-display font-bold text-sm text-white truncate">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-4 bg-black">
          
          {/* Vertical Video Player Box */}
          <div className="relative aspect-[9/16] max-h-[58vh] sm:max-h-[62vh] mx-auto rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center group">
            {project.videoUrl && !videoError ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                autoPlay
                controls
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            )}

            {/* Floating Mute/Unmute Control */}
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3.5 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#84cc16] hover:text-white transition-colors text-xs flex items-center gap-1.5 shadow-lg min-h-[36px]"
                aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
              >
                {isMuted ? <FaVolumeXmark className="text-xs" /> : <FaVolumeHigh className="text-xs" />}
                <span className="text-[11px] font-mono font-bold">{isMuted ? 'Muet' : 'Son activé'}</span>
              </button>
            </div>
          </div>

          {/* Playback Speed Controls (Vitesse de Lecture) */}
          <div className="p-3 rounded-2xl bg-[#161619] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-[#a1a1aa] text-xs font-mono">
              <FaGaugeHigh className="text-[#84cc16] text-sm" />
              <span>Vitesse de lecture :</span>
            </div>

            <div className="flex items-center gap-1.5">
              {[1, 1.25, 1.5, 2].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleSpeedChange(speed)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all min-h-[36px] ${
                    playbackSpeed === speed
                      ? 'bg-[#84cc16] text-black shadow-[0_0_12px_rgba(132,204,22,0.4)] scale-105'
                      : 'bg-white/5 text-[#a1a1aa] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                  aria-label={`Régler la vitesse à ${speed}x`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Quick WhatsApp CTA */}
          <div className="pt-1">
            <a
              href={`https://wa.me/2290162569665?text=${encodeURIComponent(`Bonjour Warren, j'ai vu votre vidéo "${project.title}" et j'aimerais un rendu similaire pour mon projet.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center min-h-[48px]"
            >
              <FaWhatsapp className="text-lg flex-shrink-0" />
              <span>Demander un montage similaire</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
