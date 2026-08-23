import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'À propos', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', 'realisations', 'services', 'tarifs', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#84cc16] transition-colors">
            Warren Adjovi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-xs sm:text-sm transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-[#84cc16]/15 text-[#84cc16] border border-[#84cc16]/40 font-extrabold shadow-[0_0_15px_rgba(132,204,22,0.25)]'
                    : 'text-[#a1a1aa] hover:text-white hover:bg-white/5 font-medium'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Green CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-extrabold text-xs tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all duration-300 hover:scale-105"
          >
            <span>Démarrer un projet</span>
            <FaArrowRight className="text-[10px]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#84cc16] transition-colors"
          aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
        >
          {mobileMenuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base rounded-xl transition-all min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-[#84cc16]/15 text-[#84cc16] border border-[#84cc16]/40 font-extrabold'
                      : 'text-[#a1a1aa] hover:text-white font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#84cc16] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(132,204,22,0.4)] min-h-[44px]"
            >
              <span>Démarrer un projet</span>
              <FaArrowRight />
            </a>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/2290162569665"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:text-[#84cc16] text-xl"
                aria-label="Contacter Warren sur WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
