import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import warrenAboutImg from '../assets/warren-about.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column: Warren's Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Outer Card Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-[#09090b] border border-white/10 p-4 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={warrenAboutImg}
                    alt="Warren ADJOVI - Monteur vidéo"
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                {/* Bottom Centered Profile Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-4 text-center shadow-lg">
                  <p className="text-sm font-black text-white uppercase tracking-wider">
                    Warren ADJOVI
                  </p>
                </div>

              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#84cc16]/10 rounded-full blur-3xl -z-10" />

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
              <span className="w-6 h-[2px] bg-[#84cc16] inline-block"></span>
              <span>À PROPOS</span>
            </div>

            {/* Main Section Title */}
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] text-white tracking-tight leading-[1.18] uppercase">
              JE SUIS DISPONIBLE POUR VOS PROJETS DE{' '}
              <span className="text-[#84cc16] font-black">MONTAGE VIDÉO</span>
            </h2>

            {/* Text Description */}
            <div className="space-y-4 text-[#d4d4d8] text-base sm:text-lg leading-relaxed">
              <p>
                Je suis Warren ADJOVI, monteur vidéo spécialisé dans la création de contenus qui retiennent l'attention et convertissent. Mon approche : allier storytelling dynamique et techniques modernes pour que chaque seconde de vos vidéos joue un rôle précis. Pas des vidéos jolies mais vides. Des vidéos qui performent.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                  <FaCheck />
                </div>
                <span>Storytelling narratif & Pacing chirurgical</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                  <FaCheck />
                </div>
                <span>Sound Design texturé & SFX immersifs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                  <FaCheck />
                </div>
                <span>Motion Design & Rétention maximale</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
                <div className="w-5 h-5 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center text-[#84cc16] text-[10px] flex-shrink-0">
                  <FaCheck />
                </div>
                <span>Livraison ultra-rapide 24h - 48h</span>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all hover:scale-105"
              >
                <span>Démarrer une collaboration</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
