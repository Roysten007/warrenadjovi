import React, { useState } from 'react';
import { FaMicrophone, FaXmark } from 'react-icons/fa6';

interface ScreenshotProof {
  id: string;
  image: string;
  alt: string;
}

const SCREENSHOTS: ScreenshotProof[] = [
  {
    id: 'shot-1',
    image: '/Video/Avis/IMG-20260823-WA0006.jpg',
    alt: 'Capture WhatsApp Alis France'
  },
  {
    id: 'shot-2',
    image: '/Video/Avis/IMG-20260823-WA0007.jpg',
    alt: 'Capture WhatsApp Martial'
  },
  {
    id: 'shot-3',
    image: '/Video/Avis/IMG-20260823-WA0008.jpg',
    alt: 'Capture WhatsApp Gaétan Dossou'
  }
];

export default function WhatsAppProof() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>PREUVES SOCIALES AUTHENTIQUES</span>
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Les retours directs de{' '}
            <span className="text-[#84cc16] font-extrabold">mes clients</span> sur WhatsApp.
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
            Captures d'écran authentiques de nos livraisons et retours d'expérience.
          </p>
        </div>

        {/* 4-Item Row: 3 Direct Screenshots + 1 Vocal Review Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start max-w-7xl mx-auto">
          {/* Screenshot 1 */}
          <div
            onClick={() => setActiveImage(SCREENSHOTS[0].image)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#84cc16]/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-2xl bg-[#09090b]"
          >
            <img
              src={SCREENSHOTS[0].image}
              alt={SCREENSHOTS[0].alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#84cc16] text-xs font-mono font-bold border border-[#84cc16]/50 shadow-lg">
                🔍 Agrandir
              </span>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div
            onClick={() => setActiveImage(SCREENSHOTS[1].image)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#84cc16]/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-2xl bg-[#09090b]"
          >
            <img
              src={SCREENSHOTS[1].image}
              alt={SCREENSHOTS[1].alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#84cc16] text-xs font-mono font-bold border border-[#84cc16]/50 shadow-lg">
                🔍 Agrandir
              </span>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div
            onClick={() => setActiveImage(SCREENSHOTS[2].image)}
            className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#84cc16]/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-2xl bg-[#09090b]"
          >
            <img
              src={SCREENSHOTS[2].image}
              alt={SCREENSHOTS[2].alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[#84cc16] text-xs font-mono font-bold border border-[#84cc16]/50 shadow-lg">
                🔍 Agrandir
              </span>
            </div>
          </div>

          {/* Item 4: Vocal Review Card */}
          <div className="rounded-3xl bg-[#09090b] border border-white/10 overflow-hidden shadow-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:border-[#84cc16]/50 transition-all duration-300">
            {/* Video / Audio Player */}
            <div className="rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video flex items-center justify-center">
              <video
                src="/Video/Avis/VID-20260823-WA0009.mp4"
                controls
                playsInline
                preload="none"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Vocal Note Information */}
            <div className="p-2 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <FaMicrophone className="text-[#84cc16] text-base" />
                <h3 className="font-display font-bold text-base text-white">
                  Retour vocal d'un client
                </h3>
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Écoutez ce que disent mes clients de leur expérience et de la qualité des montages livrés.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#09090b] border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/80">
              <span className="font-mono text-xs text-[#84cc16] font-bold uppercase tracking-wider">
                Capture d'écran authentique
              </span>
              <button
                onClick={() => setActiveImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:text-[#84cc16] transition-colors cursor-pointer"
                aria-label="Fermer l'image de la capture"
              >
                <FaXmark className="text-sm font-bold" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="overflow-y-auto p-3 flex items-center justify-center bg-black">
              <img
                src={activeImage}
                alt="Capture WhatsApp Agrandie"
                loading="lazy"
                className="w-full h-auto max-h-[78vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
