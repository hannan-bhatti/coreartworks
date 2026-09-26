import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const brands = [
    'Nova Skincare',
    'Aether Games',
    'Lumen Studios',
    'Vera & Co.',
    'Orbit Media',
    'Halo Group',
    'Northpeak',
    'Atlas Digital',
    'Chronos Realm',
    'Arcane Forge',
  ];

  // Duplicate for seamless infinite marquee loop
  const brandsLoop = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 sm:py-20 bg-[#0a0a0b] border-y border-white/[0.08] overflow-hidden text-center select-none">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 mb-8">
        Trusted by brands &amp; creators we've collaborated with
      </p>

      <div className="relative overflow-hidden">
        {/* Edge Gradient Masks for cinematic fade */}
        <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {brandsLoop.map((brand, idx) => (
            <div
              key={`brand-${idx}`}
              className="flex items-center gap-12 sm:gap-16 group"
            >
              <span className="font-display text-lg sm:text-2xl font-semibold tracking-wider uppercase text-zinc-500 group-hover:text-white transition-colors duration-300">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

