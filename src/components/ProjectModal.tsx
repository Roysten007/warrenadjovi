import React, { useState, useRef, useEffect } from 'react';
import { FaXmark, FaVolumeHigh, FaVolumeXmark, FaWhatsapp, FaGaugeHigh, FaSpinner } from 'react-icons/fa6';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setVideoError(false);
    setIsMuted(false);
    setIsLoadingVideo(true);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn overflow-y-auto"
    >
      {/* Backdrop overlay (click to close) */}
      <div
        className="fixed inset-0 bg-black/90 -z-10"
        onClick={onClose}
        aria-label="Fermer le lecteur vidéo en cliquant en dehors"
      />

      {/* Floating Outer Close Button (Top-Right) */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100] w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black border-2 border-black flex items-center justify-center text-2xl font-black shadow-[0_0_30px_rgba(132,204,22,0.8)] transition-all hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Fermer la vidéo"
        title="Fermer la vidéo (Échap)"
      >
        <FaXmark />
      </button>

      {/* Modal Container */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#09090b] border-2 border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.98)] z-10 flex flex-col max-h-[92vh] my-auto">
        
        {/* Modal Header Bar with Explicit Close Button */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-white/10 bg-black/90 gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/30 text-[#84cc16] text-[11px] font-mono font-bold flex-shrink-0">
              {project.platform || 'Format Vertical'}
            </span>
            <h3 id="modal-video-title" className="font-display font-bold text-xs sm:text-sm text-white truncate">
              {project.title}
            </h3>
          </div>

          {/* Primary Header Close Button (Unmissable) */}
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(132,204,22,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0 min-h-[36px]"
            aria-label="Fermer la fenêtre de la vidéo"
          >
            <FaXmark className="text-sm font-black" />
            <span>Fermer</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-5 space-y-4 bg-black">
          
          {/* Vertical Video Player Box */}
          <div className="relative aspect-[9/16] max-h-[55vh] sm:max-h-[60vh] mx-auto rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl flex items-center justify-center group">
            {project.videoUrl && !videoError ? (
              <>
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  autoPlay
                  controls
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onCanPlay={() => setIsLoadingVideo(false)}
                  onWaiting={() => setIsLoadingVideo(true)}
                  onError={() => {
                    setVideoError(true);
                    setIsLoadingVideo(false);
                  }}
                  className="w-full h-full object-contain bg-black"
                />

                {/* Loading Spinner Overlay when video is buffering */}
                {isLoadingVideo && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center gap-2 pointer-events-none z-10">
                    <FaSpinner className="text-3xl text-[#84cc16] animate-spin" />
                    <span className="text-xs font-mono text-[#84cc16] font-bold">
                      Chargement vidéo...
                    </span>
                  </div>
                )}
              </>
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Floating Mute/Unmute Control */}
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3.5 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[#84cc16] hover:text-white transition-colors text-xs flex items-center gap-1.5 shadow-lg min-h-[36px] cursor-pointer"
                aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
              >
                {isMuted ? <FaVolumeXmark className="text-xs" /> : <FaVolumeHigh className="text-xs" />}
                <span className="text-[11px] font-mono font-bold">{isMuted ? 'Muet' : 'Son activé'}</span>
              </button>
            </div>
          </div>

          {/* Playback Speed Controls */}
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
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all min-h-[36px] cursor-pointer ${
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

          {/* Quick WhatsApp CTA & Bottom Close Action */}
          <div className="space-y-2 pt-1">
            <a
              href={`https://wa.me/2290162569665?text=${encodeURIComponent(`Bonjour Warren, j'ai vu votre vidéo "${project.title}" et j'aimerais un rendu similaire pour mon projet.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(132,204,22,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center min-h-[44px]"
            >
              <FaWhatsapp className="text-lg flex-shrink-0" />
              <span>Demander un montage similaire</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 text-center text-xs text-[#a1a1aa] hover:text-white font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <FaXmark className="text-xs text-[#84cc16]" />
              <span>Fermer le lecteur vidéo</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
