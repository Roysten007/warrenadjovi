import React from 'react';
import { FaCheck, FaArrowRight, FaStar, FaClock } from 'react-icons/fa6';
import { SERVICES_DATA } from '../data/content';

export default function Services() {
  const handleViewPricing = (serviceId: string) => {
    const targetFormat = serviceId.includes('short') ? 'short' : 'motion';
    window.dispatchEvent(new CustomEvent('selectPricingFormat', { detail: targetFormat }));
    const pricingSection = document.getElementById('tarifs');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>OFFRES & SERVICES</span>
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Des services conçus pour{' '}
            <span className="text-[#84cc16] font-extrabold">performer</span>.
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
            Chaque seconde de vos vidéos joue un rôle précis. Choisissez le service adapté à vos objectifs de croissance.
          </p>
        </div>

        {/* 2 Luxurious Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-[#09090b] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#84cc16]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              {/* Top Banner Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96] group-hover:brightness-100"
                  />
                )}

                {/* Promo Badge */}
                {service.promoTag && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-white font-mono text-[11px] font-black uppercase tracking-wider shadow-lg border border-red-500/40">
                      {service.promoTag}
                    </span>
                  </div>
                )}

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category Pill */}
                  <div className="mb-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Author Byline */}
                  <p className="text-xs font-mono text-[#84cc16]/90 font-semibold">
                    {service.author || 'Par Warren Adjovi'}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => handleViewPricing(service.id)}
                    className="w-full py-4 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-display font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(132,204,22,0.35)] hover:shadow-[0_0_35px_rgba(132,204,22,0.6)] transition-all duration-300 group-hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>Voir les tarifs</span>
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
