import React from 'react';
import { FaWhatsapp, FaArrowRight, FaCalendarCheck, FaBolt } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

export default function FinalCTA() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C3D809', '#FFFFFF', '#1a191b', '#d4ea15']
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Highlight Card */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#09090b]/90 backdrop-blur-2xl border border-[#84cc16]/40 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#84cc16]/12 rounded-full blur-[140px] pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#84cc16]/10 border border-[#84cc16]/40 text-[#84cc16] font-mono text-xs uppercase font-bold tracking-widest mb-6">
            <FaBolt className="text-xs" />
            <span>DISPONIBLE DÈS AUJOURD'HUI</span>
          </div>

          {/* Giant Title */}
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white max-w-4xl mx-auto leading-tight tracking-tight mb-6">
            Votre prochaine vidéo mérite un montage qui{' '}
            <span className="text-[#84cc16] font-extrabold">
              marque
            </span>
            .
          </h2>

          {/* Subtitle */}
          <p className="text-[#a1a1aa] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ne laissez pas vos rushs dormir ou vos vidéos se perdre dans la masse. Donnez-leur le dynamisme, le son et le style qu'elles méritent.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="https://wa.me/2290162569665?text=Bonjour%20Warren,%20j%27ai%20un%20projet%20vid%C3%A9o%20et%20j%27aimerais%20collaborer%20avec%20toi%20!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerConfetti}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:shadow-[0_0_35px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FaWhatsapp className="text-xl" />
              <span>Démarrer sur WhatsApp</span>
            </a>

            <a
              href="mailto:Warrenmontage28@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-sm transition-all hover:scale-105 backdrop-blur-sm"
            >
              <span>Me contacter par email</span>
              <FaArrowRight className="text-xs text-white/70" />
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-textMuted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-chartreuse" />
              <span>Réponse garantie sous 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-chartreuse" />
              <span>Devis gratuit & sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-chartreuse" />
              <span>Paiement sécurisé</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
