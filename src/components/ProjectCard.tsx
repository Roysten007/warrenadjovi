import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
      className="group relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d10] border border-white/10 hover:border-[#84cc16]/60 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_12px_35px_rgba(0,0,0,0.85)] hover:-translate-y-1.5"
    >
      {/* Video Element */}
      {project.videoUrl ? (
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.95] group-hover:brightness-100"
        />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
        />
      )}

      {/* Subtle Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

      {/* Center Glass Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#84cc16] shadow-2xl transition-all duration-300 ${
            isHovered
              ? 'scale-110 bg-[#84cc16] text-black border-[#84cc16] shadow-[0_0_25px_rgba(132,204,22,0.6)]'
              : 'scale-90 opacity-70 group-hover:opacity-100'
          }`}
        >
          <FaPlay className="text-sm sm:text-base ml-1" />
        </div>
      </div>

      {/* Discreet Category Pill at bottom left */}
      <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
          {project.categoryLabel}
        </span>
      </div>
    </div>
  );
}
