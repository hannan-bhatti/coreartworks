import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface PortfolioGlimpseProps {
  onSelectArtwork?: (artwork: Artwork) => void;
}

interface PreviewCardItem {
  artwork: Artwork;
  category: string;
}

const FEATURED_PREVIEWS: PreviewCardItem[] = [
  {
    artwork: PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-bc-01') || PORTFOLIO_ARTWORKS[0],
    category: 'Covers',
  },
  {
    artwork: PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-cd-01') || PORTFOLIO_ARTWORKS[1],
    category: 'Characters',
  },
  {
    artwork: PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-ac-02') || PORTFOLIO_ARTWORKS[2],
    category: 'Albums',
  },
  {
    artwork: PORTFOLIO_ARTWORKS.find((a) => a.id === 'art-df-01') || PORTFOLIO_ARTWORKS[3],
    category: 'Fantasy',
  },
];

export const PortfolioGlimpse: React.FC<PortfolioGlimpseProps> = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio-glimpse" className="py-24 lg:py-32 relative bg-[#070709] border-t border-white/[0.08] overflow-hidden text-[#f6f6f4]">
      {/* Soft atmospheric background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* 1. Section Header with Explore CTA */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
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

            {/* Action Button to Full Portfolio */}
            <div className="flex items-center">
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

        {/* 2. Minimalist 4-Card Portfolio Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED_PREVIEWS.map((item, idx) => (
            <ScrollReveal key={item.artwork.id} direction="up" delay={idx * 0.08}>
              <div
                onClick={() => navigate('/portfolio')}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#121214] border border-white/[0.08] hover:border-white/30 transition-all duration-500 cursor-pointer shadow-xl hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Artwork Thumbnail with Zoom Effect */}
                <img
                  src={item.artwork.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  loading="lazy"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-75 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none" />

                {/* Minimal Single Word Category Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-black/75 backdrop-blur-md text-zinc-300 border border-white/15 group-hover:border-white/35 group-hover:text-white transition-all">
                    {item.category}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
