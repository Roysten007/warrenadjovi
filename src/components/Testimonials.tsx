import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { TESTIMONIALS_DATA } from '../data/content';

export default function Testimonials() {
  // Duplicate array for seamless infinite looping
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="temoignages" className="py-24 bg-black relative overflow-hidden">
      {/* Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#84cc16]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>RETOURS D'EXPÉRIENCE</span>
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ce que disent mes{' '}
            <span className="text-[#84cc16] font-extrabold">clients</span>.
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
            La satisfaction et les résultats concrets de mes partenaires sont ma plus grande fierté.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

        {/* Marquee Inner Container */}
        <div className="animate-marquee flex gap-6 px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[400px] rounded-3xl bg-[#09090b] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#84cc16]/60 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex-shrink-0 select-none group"
            >
              <div>
                {/* Stars Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} className="text-[#84cc16] text-xs" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-white/10 text-xl group-hover:text-[#84cc16]/30 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-[#e4e4e7] text-sm leading-relaxed mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 flex items-center justify-center font-display font-extrabold text-[#84cc16] text-xs flex-shrink-0">
                  {item.avatarText}
                </div>

                <div>
                  <h4 className="font-display font-bold text-sm text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#a1a1aa] mt-0.5">
                    {item.role} · <span className="text-[#84cc16] font-medium">{item.channelOrBrand}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
