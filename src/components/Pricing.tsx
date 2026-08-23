import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaCheck, FaVideo, FaWandMagicSparkles } from 'react-icons/fa6';

interface QuantityPack {
  count: number;
  label: string;
  price: number;
  badge?: string;
}

interface FormatConfig {
  id: 'short' | 'motion';
  label: string;
  subtitle: string;
  unitPrice: number;
  packs: QuantityPack[];
}

interface AddonOption {
  id: string;
  label: string;
  price: number;
  perVideo: boolean;
}

const PRICING_CONFIG = {
  phone: '2290162569665',
  formats: [
    {
      id: 'short',
      label: 'Vidéo courte',
      subtitle: 'Reels / Shorts / TikTok',
      unitPrice: 25,
      packs: [
        { count: 1, label: '1 vidéo', price: 25, badge: '' },
        { count: 3, label: '3 vidéos', price: 70, badge: 'Pack créateur' },
        { count: 5, label: '5 vidéos', price: 110, badge: 'Idéal créateur actif' },
        { count: 10, label: '10 vidéos', price: 200, badge: 'Pack le plus rentable' },
      ],
    },
    {
      id: 'motion',
      label: 'Montage Motion Design',
      subtitle: 'Vidéo 30 secondes',
      unitPrice: 35,
      packs: [
        { count: 1, label: '1 vidéo (30s)', price: 35, badge: '' },
        { count: 3, label: '3 vidéos (30s)', price: 100, badge: 'Pack créateur' },
        { count: 5, label: '5 vidéos (30s)', price: 160, badge: 'Idéal créateur actif' },
        { count: 10, label: '10 vidéos (30s)', price: 300, badge: 'Pack le plus rentable' },
      ],
    },
  ] as FormatConfig[],
  addonOptions: [
    { id: 'subtitles', label: 'Sous-titres animés', price: 5, perVideo: true },
    { id: 'effects', label: 'Animations ou effets supplémentaires', price: 10, perVideo: true },
    { id: 'fast_delivery', label: 'Livraison rapide (24h)', price: 10, perVideo: false },
    { id: 'extra_revision', label: 'Révision supplémentaire', price: 5, perVideo: false },
  ] as AddonOption[],
};

export default function Pricing() {
  const [selectedFormatId, setSelectedFormatId] = useState<'short' | 'motion'>('short');
  const [selectedQuantityCount, setSelectedQuantityCount] = useState<number>(1);
  const [activeOptionIds, setActiveOptionIds] = useState<string[]>([]);
  const [displayedTotal, setDisplayedTotal] = useState<number>(25);

  useEffect(() => {
    const handleFormatSelect = (e: CustomEvent<string>) => {
      if (e.detail === 'short' || e.detail === 'motion') {
        setSelectedFormatId(e.detail);
      }
    };
    window.addEventListener('selectPricingFormat' as any, handleFormatSelect);
    return () => {
      window.removeEventListener('selectPricingFormat' as any, handleFormatSelect);
    };
  }, []);

  // Active Format & Pack
  const currentFormat = PRICING_CONFIG.formats.find((f) => f.id === selectedFormatId)!;
  const currentPack = currentFormat.packs.find((p) => p.count === selectedQuantityCount) || currentFormat.packs[0];

  // Calculate target total
  const basePrice = currentPack.price;
  const optionsTotal = activeOptionIds.reduce((sum, optId) => {
    const opt = PRICING_CONFIG.addonOptions.find((o) => o.id === optId);
    if (!opt) return sum;
    return sum + (opt.perVideo ? opt.price * selectedQuantityCount : opt.price);
  }, 0);
  const targetTotal = basePrice + optionsTotal;

  // Smooth Count Animation
  const animRef = useRef<number | null>(null);
  const prevTotalRef = useRef<number>(displayedTotal);

  useEffect(() => {
    const startVal = prevTotalRef.current;
    const endVal = targetTotal;
    if (startVal === endVal) return;

    const duration = 450;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startVal + (endVal - startVal) * ease);
      
      setDisplayedTotal(currentVal);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        prevTotalRef.current = endVal;
      }
    };

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [targetTotal]);

  // Toggle Option
  const toggleOption = (id: string) => {
    setActiveOptionIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Unit Price calculation
  const equivalentUnitPrice = Math.round(basePrice / selectedQuantityCount);

  // Dynamic WhatsApp Link
  const selectedAddonsText = activeOptionIds
    .map((id) => PRICING_CONFIG.addonOptions.find((o) => o.id === id)?.label)
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Bonjour Warren, je suis intéressé par : ${currentFormat.label} - ${currentPack.label}${
    selectedAddonsText ? ` + [${selectedAddonsText}]` : ''
  } = ${displayedTotal}€. On en discute ?`;

  const whatsappUrl = `https://wa.me/${PRICING_CONFIG.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="tarifs" className="py-24 relative bg-black overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#84cc16]/5 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#84cc16] font-bold">
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
            <span>GRILLE TARIFAIRE</span>
            <span className="w-4 h-[2px] bg-[#84cc16] inline-block"></span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Des tarifs clairs,{' '}
            <span className="text-[#84cc16] font-black">sans surprise</span>.
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
            Configurez votre format, le nombre de vidéos et vos options sur-mesure en temps réel.
          </p>
        </div>

        {/* LANDSCAPE CONFIGURATOR CONTAINER (2-COLUMN GRID) */}
        <div className="max-w-5xl mx-auto relative rounded-[36px] bg-[#09090b] border border-white/10 p-6 sm:p-9 lg:p-11 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: SELECTORS (7 COLS) */}
            <div className="lg:col-span-7 space-y-7 flex flex-col justify-between">
              
              {/* 2. FORMAT SELECTOR */}
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a1a1aa] block">
                  1. Choisissez votre format
                </span>
                <div className="flex p-1.5 rounded-full bg-[#161619] border border-white/10 gap-1.5 shadow-inner">
                  {PRICING_CONFIG.formats.map((fmt) => {
                    const isActive = selectedFormatId === fmt.id;
                    return (
                      <button
                        key={fmt.id}
                        onClick={() => setSelectedFormatId(fmt.id as 'short' | 'motion')}
                        className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-2 ${
                          isActive
                            ? 'bg-[#84cc16] text-black shadow-[0_0_20px_rgba(132,204,22,0.4)] scale-[1.02]'
                            : 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {fmt.id === 'motion' ? <FaWandMagicSparkles className="text-xs" /> : <FaVideo className="text-xs" />}
                        <span>{fmt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. QUANTITY SELECTOR */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a1a1aa] block">
                  2. Nombre de vidéos
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {currentFormat.packs.map((pack) => {
                    const isActive = selectedQuantityCount === pack.count;
                    return (
                      <button
                        key={pack.count}
                        onClick={() => setSelectedQuantityCount(pack.count)}
                        className={`py-3 px-2.5 rounded-2xl text-xs font-extrabold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 border ${
                          isActive
                            ? 'bg-[#84cc16] text-black border-[#84cc16] shadow-[0_0_20px_rgba(132,204,22,0.35)] scale-[1.02]'
                            : 'bg-[#161619] text-[#a1a1aa] hover:text-white border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span className="text-sm font-black">{pack.count} {pack.count > 1 ? 'vidéos' : 'vidéo'}</span>
                        {pack.count > 1 && (
                          <span className={`text-[10px] font-mono ${isActive ? 'text-black/80 font-bold' : 'text-[#71717a]'}`}>
                            {Math.round(pack.price / pack.count)}€ / vid
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. OPTIONS SUPPLÉMENTAIRES */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#a1a1aa] block">
                  3. Options supplémentaires
                </span>
                <div className="space-y-2">
                  {PRICING_CONFIG.addonOptions.map((opt) => {
                    const isActive = activeOptionIds.includes(opt.id);
                    const optionPrice = opt.perVideo ? opt.price * selectedQuantityCount : opt.price;

                    return (
                      <div
                        key={opt.id}
                        onClick={() => toggleOption(opt.id)}
                        className={`cursor-pointer group flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? 'bg-[#84cc16]/10 border-[#84cc16]/50 shadow-[0_0_15px_rgba(132,204,22,0.15)]'
                            : 'bg-[#161619]/60 border-white/10 hover:border-white/20 hover:bg-[#161619]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Switch */}
                          <div
                            className={`w-10 h-5.5 rounded-full transition-colors relative flex-shrink-0 flex items-center p-0.5 ${
                              isActive
                                ? 'bg-[#84cc16] shadow-[0_0_12px_rgba(132,204,22,0.5)]'
                                : 'bg-[#27272a]'
                            }`}
                          >
                            <div
                              className={`w-4.5 h-4.5 rounded-full bg-white shadow-md transition-transform transform ${
                                isActive ? 'translate-x-4.5' : 'translate-x-0'
                              }`}
                            />
                          </div>

                          <span className={`text-xs sm:text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-[#d4d4d8]'}`}>
                            {opt.label}
                          </span>
                        </div>

                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#84cc16]' : 'text-[#71717a]'}`}>
                          +{optionPrice}€ {opt.perVideo && selectedQuantityCount > 1 ? `(${opt.price}€/v)` : ''}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: PRICE SUMMARY & BIG CTA BUTTON (5 COLS) */}
            <div className="lg:col-span-5 rounded-3xl bg-[#161619]/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-inner relative overflow-hidden">
              
              {/* Top Glow Halo */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                
                {/* Header Info */}
                <div className="pb-4 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-[#a1a1aa] block tracking-wider">
                      FORMAT SÉLECTIONNÉ
                    </span>
                    <h3 className="font-display font-extrabold text-base text-white mt-0.5">
                      {currentFormat.label}
                    </h3>
                  </div>
                  {currentPack.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#84cc16]/15 border border-[#84cc16]/40 text-[#84cc16] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                      {currentPack.badge}
                    </span>
                  )}
                </div>

                {/* Selected Breakdown */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#a1a1aa]">
                    <span>Volume :</span>
                    <strong className="text-white font-mono">{currentPack.label}</strong>
                  </div>

                  {selectedQuantityCount > 1 && (
                    <div className="flex justify-between text-[#a1a1aa]">
                      <span>Tarif unitaire :</span>
                      <strong className="text-[#84cc16] font-mono">{equivalentUnitPrice}€ / vidéo</strong>
                    </div>
                  )}

                  {activeOptionIds.length > 0 && (
                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <span className="text-[#a1a1aa] block text-[11px] font-mono">Options incluses :</span>
                      {activeOptionIds.map((optId) => {
                        const opt = PRICING_CONFIG.addonOptions.find((o) => o.id === optId)!;
                        const optPrice = opt.perVideo ? opt.price * selectedQuantityCount : opt.price;
                        return (
                          <div key={optId} className="flex justify-between text-white font-medium text-[11px]">
                            <span>✓ {opt.label}</span>
                            <span className="font-mono text-[#84cc16]">+{optPrice}€</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Big Animated Total */}
                <div className="pt-4 border-t border-white/10 text-center lg:text-left space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#a1a1aa] font-bold block">
                    TOTAL ESTIMÉ
                  </span>
                  <div className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight">
                    {displayedTotal}<span className="text-[#84cc16]">€</span>
                  </div>
                </div>

              </div>

              {/* WHATSAPP CTA BUTTON */}
              <div className="pt-2 relative z-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-[#84cc16] hover:bg-[#99f116] text-black font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.65)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center"
                >
                  <FaWhatsapp className="text-lg flex-shrink-0" />
                  <span>COMMANDER CE FORMAT</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
