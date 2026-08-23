import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Services', href: '#services' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'À propos', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
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
          className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#84cc16] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaXmark className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-textMuted hover:text-chartreuse transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-chartreuse text-charcoal-900 font-bold text-sm uppercase tracking-wider shadow-glow-cta"
            >
              <span>Démarrer un projet</span>
              <FaArrowRight />
            </a>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/2290162569665"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a1a1aa] hover:text-[#84cc16] text-xl"
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
