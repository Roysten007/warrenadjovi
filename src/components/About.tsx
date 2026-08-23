import React from 'react';
import { FaCheck } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#84cc16]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Clean Card */}
        <div className="max-w-4xl mx-auto rounded-[32px] bg-[#09090b] border border-white/10 p-8 sm:p-12 text-center space-y-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-6 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>À PROPOS DE MOI</span>
            <span className="w-6 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>

          {/* Main Section Title */}
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase max-w-3xl mx-auto leading-tight">
            JE SUIS DISPONIBLE POUR VOS PROJETS DE{' '}
            <span className="text-[#84cc16] font-black">MONTAGE VIDÉO</span>
          </h2>

          {/* Text Description */}
          <div className="space-y-4 text-[#d4d4d8] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Je suis Warren ADJOVI, monteur vidéo spécialisé dans la création de contenus qui retiennent l'attention et convertissent. Mon approche : allier storytelling dynamique et techniques modernes pour que chaque seconde de vos vidéos joue un rôle précis. Pas des vidéos jolies mais vides. Des vidéos qui performent.
            </p>
          </div>

          {/* Checklist highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white bg-[#161619]/60 border border-white/5 p-3.5 rounded-2xl">
              <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                <FaCheck />
              </div>
              <span>Storytelling narratif & Pacing chirurgical</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white bg-[#161619]/60 border border-white/5 p-3.5 rounded-2xl">
              <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                <FaCheck />
              </div>
              <span>Sound Design texturé & SFX immersifs</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white bg-[#161619]/60 border border-white/5 p-3.5 rounded-2xl">
              <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                <FaCheck />
              </div>
              <span>Motion Design & Rétention maximale</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white bg-[#161619]/60 border border-white/5 p-3.5 rounded-2xl">
              <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                <FaCheck />
              </div>
              <span>Livraison ultra-rapide 24h - 48h</span>
            </div>
          </div>

          {/* Action link */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all hover:scale-105"
            >
              <span>Démarrer une collaboration</span>
              <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
