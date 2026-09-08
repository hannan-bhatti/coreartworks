import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AGENCY_METRICS } from '../data/agencyData';
import { Artwork } from '../types';
import { AnimatedCounter } from './AnimatedCounter';
import { Interactive3DCard } from './Interactive3DCard';

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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background radial spotlight with breathing pulse */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-white/[0.035] rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Agency Manifesto & Narrative */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/15 text-xs font-medium text-zinc-300 backdrop-blur-md shadow-inner-glow transition-all hover:border-white/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-zinc-400">Core Artworks Studio</span>
              <span className="text-zinc-600">|</span>
              <span className="text-white font-semibold flex items-center gap-1">
                Available for Q3/Q4 Production
              </span>
            </div>

            {/* Headline with animated liquid silver shimmer */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                ARCHITECTS OF <br />
                <span className="text-shimmer-silver font-black">DIGITAL VISIONS</span> &amp; WORLDS.
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                Core Artworks is a premier digital arts agency crafting bespoke book &amp; album covers, high-concept character sheets, dynamic logos, D&amp;D &amp; fursona art, serialized manga, and streaming broadcast packages for world-class creators.
              </p>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreGallery}
                className="relative px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2 shadow-glow-md group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Portfolio Matrix</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium text-sm tracking-wide border border-white/10 hover:border-white/25 transition-all duration-300 flex items-center gap-2 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-zinc-400 animate-pulse" />
                <span>Calculate Project Cost</span>
              </button>
            </div>

            {/* Trust & Discipline Badges with Animated Counter */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {AGENCY_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-0.5 group/stat">
                  <div className="text-xl sm:text-2xl font-bold font-display text-white group-hover/stat:text-zinc-200 transition-colors">
                    <AnimatedCounter value={metric.value} duration={2000} />
                  </div>
                  <div className="text-xs font-semibold text-zinc-400">
                    {metric.label}
                  </div>
                  <div className="text-[10px] text-zinc-500 hidden sm:block font-mono">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Hero Showcase Artwork with 3D Depth Card Tilt */}
          <div className="lg:col-span-5 relative animate-in fade-in slide-in-from-right-6 duration-700 delay-150">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Ambient Aura Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-white/5 to-transparent rounded-3xl blur-2xl opacity-50 animate-pulse-slow pointer-events-none" />

              {/* 3D Depth Card Container */}
              <Interactive3DCard
                maxTilt={8}
                scale={1.02}
                onClick={() => onSelectArtwork(featuredArtwork)}
                className="cursor-pointer relative rounded-2xl overflow-hidden bg-zinc-900/90 border border-white/15 p-2 shadow-2xl transition-all duration-300 hover:border-white/40 hover:shadow-glow-lg"
              >
                {/* Artwork Viewport */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                  <img
                    src={featuredArtwork.image}
                    alt={featuredArtwork.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/75 text-white border border-white/25 backdrop-blur-md shadow-sm">
                      Featured Milestone
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-300 backdrop-blur-md">
                      {featuredArtwork.client}
                    </span>
                  </div>

                  {/* Artwork Quick Details Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2 z-10">
                    <div className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      {featuredArtwork.categoryLabel} &bull; {featuredArtwork.year}
                    </div>
                    <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-zinc-200 transition-colors">
                      {featuredArtwork.title}
                    </h3>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-zinc-300">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Click to Inspect High-Res</span>
                      </div>
                      <span className="font-mono text-zinc-400">{featuredArtwork.stats?.views} views</span>
                    </div>
                  </div>
                </div>

                {/* Software Stack Strip */}
                <div className="mt-2.5 px-2 py-1.5 flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-zinc-500 font-mono">Stack:</span>
                    {featuredArtwork.tools.map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 font-mono text-[10px] border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="text-white font-medium group-hover:underline flex items-center gap-1">
                    <span>View Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Interactive3DCard>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white/[0.08] rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
