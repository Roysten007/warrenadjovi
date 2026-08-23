import React from 'react';
import { FaPaperPlane, FaArrowRight } from 'react-icons/fa6';
import warrenImg from '../assets/warren.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-black">
      {/* Ambient Radial Neon Green Halos */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#84cc16]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Direct 2-Column Split Grid on canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge with Live Neon Green Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#162907] border border-[#3b660a] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84cc16]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#84cc16]">
                MONTEUR VIDÉO & MOTION DESIGNER
              </span>
            </div>

            {/* Impactful Headline in Satoshi Font */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] text-white leading-[1.12] tracking-tight">
              Je transforme{' '}
              <span className="text-[#84cc16] font-black">votre marque</span> <br />
              en contenu{' '}
              <span className="text-[#84cc16] font-black">qui convertit.</span>
            </h1>

            {/* Subtitle Description in Inter Tight */}
            <p className="text-[#a1a1aa] text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              J'accompagne créateurs, marques et entrepreneurs dans la construction d'une identité vidéo percutante, mémorable et calibrée pour retenir l'attention et convertir leur audience.
            </p>

            {/* Bold CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:shadow-[0_0_35px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaPaperPlane className="text-xs" />
                <span>Démarrer un projet</span>
              </a>

              <a
                href="#realisations"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/35 text-white font-medium text-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <FaArrowRight className="text-xs text-white/70" />
                <span>Voir mes réalisations</span>
              </a>
            </div>

            {/* Micro Trust Indicators Row */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#71717a] font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
                <span className="text-[#a1a1aa]">Délais 24h - 48h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
                <span className="text-[#a1a1aa]">Exports 4K Master</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
                <span className="text-[#a1a1aa]">Retouches incluses</span>
              </div>
            </div>

          </div>

          {/* Right Column: Warren's Studio Visual without floating chips (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
            
            {/* Visual Portrait Container directly on page */}
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#0d0d10] group">
              
              {/* Backlight Glow inside Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-[#84cc16]/20 z-10 pointer-events-none" />

              {/* Warren Portrait Image */}
              <img
                src={warrenImg}
                alt="Warren ADJOVI - Monteur Vidéo & Motion Designer"
                className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[0.94] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient at the Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

              {/* Bottom Centered Profile Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0d0d10]/90 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-4 text-center shadow-lg">
                <p className="text-sm font-black text-white uppercase tracking-wider">
                  Warren ADJOVI
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
