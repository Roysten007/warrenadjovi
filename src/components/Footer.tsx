import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa6';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-[#9ca3af] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-[#84cc16] transition-colors">
                Warren Adjovi
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#9ca3af] max-w-sm leading-relaxed">
              Monteur vidéo, Sound Designer & Motion Designer basé à Cotonou, Bénin 🇧🇯. Création de contenus dynamiques et mémorables pour créateurs et marques d'envergure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#84cc16] transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-[#84cc16] transition-colors">Réalisations & Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#84cc16] transition-colors">Offres & Services</a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-[#84cc16] transition-colors">Grille Tarifaire</a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-[#84cc16] transition-colors">Témoignages & Preuves</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#84cc16] transition-colors">À propos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#84cc16] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Email */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase font-bold text-white tracking-wider">
              Contact
            </h4>
            <p className="text-xs text-[#a1a1aa]">
              Email : <a href="mailto:Warrenmontage28@gmail.com" className="text-[#84cc16] hover:underline font-semibold">Warrenmontage28@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Warren ADJOVI. Tous droits réservés.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-textMuted">Design & Production Créative Haut de Gamme</span>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#161619] border border-white/10 hover:border-[#84cc16] flex items-center justify-center text-[#a1a1aa] hover:text-[#84cc16] transition-colors cursor-pointer"
              aria-label="Retourner en haut de la page"
            >
              <FaArrowUp className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
