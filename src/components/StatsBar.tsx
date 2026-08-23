import React from 'react';
import { FaFilm, FaUsers, FaLayerGroup, FaStar, FaScissors } from 'react-icons/fa6';
import { STATS_DATA } from '../data/content';

export default function StatsBar() {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFilm':
        return <FaFilm className="text-sm text-[#84cc16]" />;
      case 'FaUsers':
        return <FaUsers className="text-sm text-[#84cc16]" />;
      case 'FaStar':
        return <FaStar className="text-sm text-[#84cc16]" />;
      default:
        return <FaScissors className="text-sm text-[#84cc16]" />;
    }
  };

  return (
    <section className="bg-black border-y border-white/5 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-3xl bg-[#09090b]/80 backdrop-blur-xl border border-white/10 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Minimalist Refined Icon Container */}
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#84cc16]/50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110">
                {getStatIcon(stat.iconName)}
              </div>

              {/* Number display */}
              <div className="flex items-baseline gap-0.5 font-display font-black text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight">
                {stat.prefix && <span className="text-[#84cc16] font-black">{stat.prefix}</span>}
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className={`text-[#84cc16] font-black ${stat.suffix.includes('%') ? 'text-2xl sm:text-3xl' : 'text-base sm:text-xl font-bold ml-1'}`}>
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-white font-bold">
                {stat.label}
              </p>

              {/* Sublabel */}
              <p className="mt-0.5 text-xs text-[#9ca3af]">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
