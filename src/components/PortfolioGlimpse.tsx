import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ARTWORKS, ART_CATEGORIES } from '../data/portfolioData';
import { Artwork } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface PortfolioGlimpseProps {
  onSelectArtwork: (artwork: Artwork) => void;
}

// 4 distinct master artworks representing the studio's range
const FEATURED_PREVIEWS: Artwork[] = [
  PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-bc-01') || PORTFOLIO_ARTWORKS[0],
  PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-cd-01') || PORTFOLIO_ARTWORKS[1],
  PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-ac-02') || PORTFOLIO_ARTWORKS[2],
  PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-df-01') || PORTFOLIO_ARTWORKS[3],
];

export const PortfolioGlimpse: React.FC<PortfolioGlimpseProps> = ({ onSelectArtwork }) => {
  const navigate = useNavigate();

  return (
    <section id="portfolio-glimpse" className="py-28 lg:py-36 relative bg-[#070709] border-t border-white/[0.08] overflow-hidden text-[#f6f6f4]">
      {/* Soft atmospheric background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* 1. Section Header with Explore CTA */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Selected Works • Archive Preview</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-[1.04]">
                A Glimpse Into <br />
                <span className="is-outline">Our Archive</span>
              </h2>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                A handpicked snapshot of our production pipeline — from comic variant covers and 3D visual albums to full-body cybernetics and high fantasy.
              </p>
            </div>

            {/* Quick Action Button to Full Portfolio */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => navigate('/portfolio')}
                className="btn-primary group !py-3.5 !px-6"
              >
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. Curated 4-Card Portfolio Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {FEATURED_PREVIEWS.map((artwork, idx) => (
            <ScrollReveal key={artwork.id} direction="up" delay={idx * 0.08}>
              <div
                onClick={() => onSelectArtwork(artwork)}
                className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-white/[0.08] hover:border-white/30 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Artwork Thumbnail with Zoom Effect */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Floating Badge: Category & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 text-zinc-300 border border-white/15 backdrop-blur-md">
                      {artwork.subcategoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                      {artwork.year}
                    </span>
                  </div>

                  {/* Quick Inspect Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect High-Res</span>
                    </span>
                  </div>

                  {/* Bottom Metadata in Image Frame */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1 z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                      {artwork.client}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white uppercase leading-snug group-hover:text-zinc-200 transition-colors line-clamp-2">
                      {artwork.title}
                    </h3>
                  </div>
                </div>

                {/* Card Sub-bar: Category link to Portfolio page */}
                <div className="p-4 bg-[#0e0e10] border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {artwork.tools[0]} • {artwork.tools[1] || 'Digital'}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/portfolio');
                    }}
                    className="inline-flex items-center gap-1 text-white hover:text-zinc-300 font-medium transition-colors group/btn"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3. Creative Interactive Discovery Strip */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-2xl bg-[#0f0f12] border border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-white">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase">
                  Browse by Discipline
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Jump straight to our catalog of Book Covers, Comics, Character Art, and Logos.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
              {ART_CATEGORIES.slice(0, 4).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => navigate('/portfolio')}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-white/[0.03] hover:bg-white hover:text-black border border-white/10 transition-all duration-300"
                >
                  {cat.name}
                </button>
              ))}

              <button
                onClick={() => navigate('/portfolio')}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors ml-2"
              >
                <span>All Disciplines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
