import React, { useState, useEffect } from 'react';
import { Artwork } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles, Copy, ArrowUpRight, Cpu } from 'lucide-react';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';

interface ArtworkLightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onCommissionStyle: (artwork: Artwork) => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({
  artwork,
  onClose,
  onSelectArtwork,
  onCommissionStyle
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artwork) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork]);

  if (!artwork) return null;

  const currentIndex = PORTFOLIO_ARTWORKS.findIndex((a) => a.id === artwork.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ARTWORKS.length;
    onSelectArtwork(PORTFOLIO_ARTWORKS[nextIndex]);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ARTWORKS.length) % PORTFOLIO_ARTWORKS.length;
    onSelectArtwork(PORTFOLIO_ARTWORKS[prevIndex]);
    setIsZoomed(false);
  };

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Box */}
      <div className="relative z-10 w-full max-w-6xl max-h-[95vh] rounded-3xl bg-[#0a0a0d] border border-white/15 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/70 hover:bg-white text-zinc-400 hover:text-black border border-white/20 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left / Top: High-Res Image Viewport */}
        <div className="relative lg:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[480px]">
          <img
            src={artwork.image}
            alt={artwork.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`max-h-[85vh] w-full object-contain cursor-zoom-in transition-transform duration-300 ${
              isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100'
            }`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/10 transition-all"
            title="Previous Artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/10 transition-all"
            title="Next Artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Zoom hint badge */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-zinc-400 backdrop-blur-md">
            {isZoomed ? 'Click to Reset Zoom' : 'Click to Zoom (125%)'}
          </div>
        </div>

        {/* Right / Bottom: Detailed Specs & Commission Actions */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] border-t lg:border-t-0 lg:border-l border-white/10 space-y-6">
          
          <div className="space-y-6">
            
            {/* Header / Taxonomy */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white border border-white/10 font-semibold">
                  {artwork.categoryLabel}
                </span>
                <span className="text-xs text-zinc-500">&bull;</span>
                <span className="text-xs font-mono text-zinc-400">
                  {artwork.subcategoryLabel}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {artwork.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {artwork.description}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Studio Client
                </span>
                <span className="text-xs font-semibold text-white mt-0.5 block">
                  {artwork.client}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Release Year
                </span>
                <span className="text-xs font-mono text-white mt-0.5 block">
                  {artwork.year}
                </span>
              </div>
            </div>

            {/* Production Software Stack */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                <span>Production Software Stack:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {artwork.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 text-xs font-mono border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Extracted Color Palette Swatches */}
            {artwork.colorPalette && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  <span>Color Palette (Click to Copy):</span>
                  {copiedHex && <span className="text-white text-[10px] animate-fade-in font-bold">Copied {copiedHex}!</span>}
                </div>
                <div className="flex items-center gap-2">
                  {artwork.colorPalette.map((hex) => (
                    <button
                      key={hex}
                      onClick={() => copyColor(hex)}
                      className="group relative flex-1 h-9 rounded-lg border border-white/20 transition-transform hover:scale-105 hover:border-white"
                      style={{ backgroundColor: hex }}
                      title={`Copy ${hex}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 rounded-lg text-white">
                        <Copy className="w-3 h-3" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] text-zinc-400 bg-zinc-900/60 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                onClose();
                onCommissionStyle(artwork);
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Commission Artwork in this Style</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Artwork ID: {artwork.id}</span>
              <span>{currentIndex + 1} of {PORTFOLIO_ARTWORKS.length} Assets</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
