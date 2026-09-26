import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Artwork } from '../types';

interface HeroProps {
  featuredArtwork: Artwork;
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenEstimator: () => void;
  onExploreGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  featuredArtwork,
  onSelectArtwork,
  onOpenEstimator,
  onExploreGallery,
}) => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background soft ambient radial spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-white/[0.025] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Minimalist Typography & Narrative matching Core Artworks */}
          <div className="lg:col-span-7 space-y-7 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Headline with Clean Solid Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white uppercase leading-[0.96]">
                <span>Core</span> <br />
                <span>Artworks.</span>
              </h1>
              <p className="text-base sm:text-lg font-medium tracking-[0.06em] uppercase text-zinc-300">
                Architects of Digital Visions &amp; Worlds
              </p>
              <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-normal">
                Digital Art &amp; Design Agency
              </p>
            </div>

            {/* Clean Pill CTAs */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreGallery}
                  className="btn-primary"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEstimator}
                  className="btn-ghost"
                >
                  <span>Calculate Project Cost</span>
                </button>
              </div>
              <p className="text-xs text-zinc-500 font-mono tracking-wider pt-1">
                300+ projects shipped worldwide &bull; Q3/Q4 Production Open
              </p>
            </div>

            {/* Minimalist Scroll Indicator */}
            <div className="hidden lg:inline-flex items-center gap-3 pt-4 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span>Scroll</span>
              <span className="w-px h-10 bg-zinc-800 relative overflow-hidden inline-block rounded-full">
                <span className="absolute inset-0 bg-white animate-scroll-drip" />
              </span>
            </div>
          </div>

          {/* Right Column: Clean Artwork Showcase Framed by Celestial Orbital Mark */}
          <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-6 duration-700 delay-150">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Celestial Orbital Core Mark */}
              <div className="absolute -inset-16 pointer-events-none opacity-40 z-0 flex items-center justify-center">
                <svg className="w-[540px] h-[540px] max-w-none" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="core-orbit-slow" opacity="0.4">
                    <ellipse cx="250" cy="250" rx="210" ry="210" stroke="#ffffff" strokeWidth="0.6" />
                    <circle cx="460" cy="250" r="3" fill="#ffffff" />
                  </g>
                  <g className="core-orbit-mid" opacity="0.6">
                    <ellipse cx="250" cy="250" rx="175" ry="65" stroke="#ffffff" strokeWidth="0.8" transform="rotate(28 250 250)" />
                    <circle cx="415" cy="185" r="3.4" fill="#ffffff" transform="rotate(28 250 250)" />
                  </g>
                  <g className="core-orbit-rev" opacity="0.5">
                    <ellipse cx="250" cy="250" rx="185" ry="75" stroke="#ffffff" strokeWidth="0.7" transform="rotate(-35 250 250)" />
                    <circle cx="75" cy="315" r="3" fill="#ffffff" transform="rotate(-35 250 250)" />
                  </g>
                </svg>
              </div>

              {/* Minimalist Artwork Card */}
              <div
                onClick={() => onSelectArtwork(featuredArtwork)}
                className="group cursor-pointer relative z-10 rounded-2xl overflow-hidden bg-[#121214] border border-white/[0.1] shadow-2xl transition-all duration-300 hover:border-white/30"
              >
                {/* Artwork Viewport */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={featuredArtwork.image}
                    alt={featuredArtwork.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Clean Bottom Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-1.5 z-10">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                      {featuredArtwork.categoryLabel} &bull; {featuredArtwork.year}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight group-hover:text-zinc-200 transition-colors">
                      {featuredArtwork.title}
                    </h3>
                    <div className="pt-2 text-xs font-medium text-zinc-400 flex items-center justify-between">
                      <span className="group-hover:text-white transition-colors flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Inspect High-Res Artwork</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
