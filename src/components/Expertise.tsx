import React from 'react';
import { FaScissors, FaWaveSquare, FaWandMagicSparkles, FaArrowRight, FaCheck } from 'react-icons/fa6';
import { EXPERTISES_DATA } from '../data/content';

export default function Expertise() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaScissors':
        return <FaScissors className="text-2xl text-chartreuse" />;
      case 'FaWaveSquare':
        return <FaWaveSquare className="text-2xl text-chartreuse" />;
      case 'FaWandMagicSparkles':
        return <FaWandMagicSparkles className="text-2xl text-chartreuse" />;
      default:
        return <FaScissors className="text-2xl text-chartreuse" />;
    }
  };

  return (
    <section id="expertises" className="py-24 bg-charcoal-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-chartreuse font-bold">
            <span className="w-4 h-[2px] bg-chartreuse inline-block"></span>
            <span>LES 3 PILIERS DE MON TRAVAIL</span>
            <span className="w-4 h-[2px] bg-chartreuse inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-textLight tracking-tight">
            Une triple expertise pour des vidéos{' '}
            <span className="italic text-chartreuse font-extrabold">incomparables</span>.
          </h2>
          <p className="text-textMuted text-base sm:text-lg">
            La plupart des monteurs font uniquement du cut. J'associe le rythme narratif, la puissance sonore et l'élégance graphique pour un résultat clé en main.
          </p>
        </div>

        {/* 3 Horizontal equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTISES_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-charcoal-card border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-chartreuse/50 hover:shadow-glow-card"
            >
              <div>
                
                {/* Icon Container with Chartreuse Halo */}
                <div className="relative mb-6">
                  {/* Blurred Radial Gradient Halo behind the icon */}
                  <div className="absolute -inset-2 bg-chartreuse/25 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Circle */}
                  <div className="relative w-16 h-16 rounded-2xl bg-charcoal-800 border border-white/15 group-hover:border-chartreuse flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                {/* Subtitle / Eyebrow */}
                <span className="font-mono text-xs text-chartreuse uppercase tracking-wider font-semibold">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-textLight mt-1 mb-4 group-hover:text-white">
                  {item.title}
                </h3>

                {/* Main description */}
                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Skills Bullet points */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {item.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-textLight">
                      <span className="w-1.5 h-1.5 rounded-full bg-chartreuse flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer / Highlight */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-chartreuse/90 italic">
                  {item.highlight}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
