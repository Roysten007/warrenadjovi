import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaXmark, FaBolt, FaArrowRight } from 'react-icons/fa6';

export default function BottomPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup after scrolling 150px or after 2.5s delay
    const handleScroll = () => {
      if (window.scrollY > 200 && !isDismissed) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 2500);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  return (
    <aside aria-label="Disponibilité et contact rapide" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-xl animate-fade-up">
      {/* Glassmorphic floating container */}
      <div className="relative rounded-full bg-[#09090b]/85 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)] p-2 sm:p-2.5 pl-4 sm:pl-5 flex items-center justify-between gap-3 hover:border-[#84cc16]/40 transition-all duration-300">
        
        {/* Ambient Backlight Glow inside Pill */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#84cc16]/20 to-transparent rounded-full blur-sm -z-10 pointer-events-none" />

        {/* Left Side: Status & Availability */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative flex h-3 w-3 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#84cc16]"></span>
          </div>
          
          <div className="truncate">
            <p className="text-xs sm:text-sm font-extrabold text-white truncate flex items-center gap-1.5">
              <span>Projets ouverts</span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#84cc16] bg-[#84cc16]/15 px-2 py-0.5 rounded-full font-bold">
                Livraison 24-48h
              </span>
            </p>
            <p className="text-[11px] text-[#9ca3af] hidden sm:block truncate">
              Réponse garantie sous 2h · Devis gratuit
            </p>
          </div>
        </div>

        {/* Right Side: Quick Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href="https://wa.me/2290162569665?text=Bonjour%20Warren,%20j'ai%20un%20projet%20vid%C3%A9o%20%C3%A0%20vous%20confier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="text-sm" />
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="xs:hidden">Contact</span>
          </a>

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Fermer la notification de disponibilité"
          >
            <FaXmark className="text-base" />
          </button>
        </div>

      </div>
    </aside>
  );
}
