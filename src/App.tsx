import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Projects from './components/Projects';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import WhatsAppProof from './components/WhatsAppProof';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-textLight font-body selection:bg-chartreuse selection:text-black">
      {/* 1. Header Sticky with blur */}
      <Header />

      <main>
        {/* 2. Hero with Warren's portrait */}
        <Hero />

        {/* 3. Stats Bar */}
        <StatsBar />

        {/* 4. Réalisations with 3D Tilt Cards & Video Modal */}
        <Projects />

        {/* 6. Services */}
        <Services />

        {/* 7. Tarifs */}
        <Pricing />

        {/* 8. Témoignages */}
        <Testimonials />

        {/* 9. Preuve Sociale WhatsApp (3 Captures Réelles) */}
        <WhatsAppProof />

        {/* 10. À Propos (placé avant la FAQ) */}
        <About />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
