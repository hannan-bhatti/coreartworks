import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Artwork } from '../types';
import { X, ChevronLeft, ChevronRight, Sparkles, Copy, ArrowUpRight, Cpu, Bookmark, Search, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { useMoodboard } from '../context/MoodboardContext';

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
  onCommissionStyle,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loupeMode, setLoupeMode] = useState(false);
  const [loupePos, setLoupePos] = useState({ x: 0, y: 0, normX: 50, normY: 50 });
  const [isCursorOverImage, setIsCursorOverImage] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const { toggleMoodboard, isInMoodboard } = useMoodboard();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artwork) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'l' || e.key === 'L') setLoupeMode((prev) => !prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork]);

  const currentIndex = artwork ? PORTFOLIO_ARTWORKS.findIndex((a) => a.id === artwork.id) : 0;

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % PORTFOLIO_ARTWORKS.length;
    onSelectArtwork(PORTFOLIO_ARTWORKS[nextIndex]);
    setIsZoomed(false);
    setIsCursorOverImage(false);
  }, [currentIndex, onSelectArtwork]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + PORTFOLIO_ARTWORKS.length) % PORTFOLIO_ARTWORKS.length;
    onSelectArtwork(PORTFOLIO_ARTWORKS[prevIndex]);
    setIsZoomed(false);
    setIsCursorOverImage(false);
  }, [currentIndex, onSelectArtwork]);

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!loupeMode || !imageRef.current) return;

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
      setIsCursorOverImage(false);
      return;
    }

    setIsCursorOverImage(true);
    setLoupePos({
      x: e.clientX,
      y: e.clientY,
      normX: Math.max(0, Math.min(100, (x / rect.width) * 100)),
      normY: Math.max(0, Math.min(100, (y / rect.height) * 100)),
    });
  };

  if (!artwork) return null;

  const bookmarked = isInMoodboard(artwork.id);

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
        <div
          ref={viewportRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsCursorOverImage(false)}
          className="relative lg:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[360px] sm:min-h-[480px]"
        >
          <img
            ref={imageRef}
            src={artwork.image}
            alt={artwork.title}
            onClick={() => {
              if (!loupeMode) {
                setIsZoomed(!isZoomed);
              }
            }}
            className={`max-h-[85vh] w-full object-contain transition-transform duration-300 select-none ${
              loupeMode
                ? 'cursor-crosshair'
                : isZoomed
                ? 'scale-125 cursor-zoom-out'
                : 'scale-100 cursor-zoom-in'
            }`}
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/10 transition-all z-20"
            title="Previous Artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/10 transition-all z-20"
            title="Next Artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Inspection Mode Switcher Bar */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
            <button
              onClick={() => {
                setLoupeMode(false);
                setIsZoomed(!isZoomed);
              }}
              className={`px-3 py-1.5 rounded-full text-[10px] font-mono border backdrop-blur-md transition-all flex items-center gap-1.5 ${
                !loupeMode && isZoomed
                  ? 'bg-white text-black border-white'
                  : 'bg-black/70 text-zinc-300 border-white/15 hover:border-white/30'
              }`}
            >
              <ZoomIn className="w-3 h-3" />
              <span>{isZoomed && !loupeMode ? 'Reset Zoom' : '125% Zoom'}</span>
            </button>

            <button
              onClick={() => {
                setIsZoomed(false);
                setLoupeMode(!loupeMode);
              }}
              className={`px-3 py-1.5 rounded-full text-[10px] font-mono border backdrop-blur-md transition-all flex items-center gap-1.5 ${
                loupeMode
                  ? 'bg-white text-black border-white shadow-glow-sm'
                  : 'bg-black/70 text-zinc-300 border-white/15 hover:border-white/30'
              }`}
            >
              <Search className="w-3 h-3" />
              <span>{loupeMode ? 'Loupe Active (Press L)' : '3.0x UHD Loupe'}</span>
            </button>
          </div>

          {/* Floating High-Precision Inspection Loupe Lens */}
          {loupeMode && isCursorOverImage && (
            <div
              className="fixed pointer-events-none rounded-full overflow-hidden z-50 shadow-2xl"
              style={{
                left: `${loupePos.x - 95}px`,
                top: `${loupePos.y - 95}px`,
                width: '190px',
                height: '190px',
                border: '2px solid rgba(255, 255, 255, 0.85)',
                boxShadow:
                  '0 0 35px rgba(0, 0, 0, 0.85), 0 0 15px rgba(255, 255, 255, 0.25), inset 0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Magnified Image Background Layer */}
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${artwork.image})`,
                  backgroundPosition: `${loupePos.normX}% ${loupePos.normY}%`,
                  backgroundSize: '350% 350%',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* Precision Optical Crosshairs */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-glow-sm" />
                </div>
                <div className="absolute w-full h-[1px] bg-white/25" />
                <div className="absolute h-full w-[1px] bg-white/25" />
              </div>

              {/* Loupe Badge */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/25 text-[9px] font-mono text-white font-bold tracking-wider backdrop-blur-sm">
                3.0x UHD LOUPE
              </div>
            </div>
          )}
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
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  Commission Client
                </span>
                <span className="text-xs font-semibold text-white font-mono">
                  {artwork.client}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                  Release Year
                </span>
                <span className="text-xs font-semibold text-white font-mono">
                  {artwork.year}
                </span>
              </div>
            </div>

            {/* Production Tools List */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-white" />
                <span>Production Pipeline Tools:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {artwork.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Extracted Color Palette with Click-to-Copy */}
            {artwork.colorPalette && artwork.colorPalette.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  <span>Color Palette (Click to Copy):</span>
                  {copiedHex && (
                    <span className="text-white text-[10px] animate-fade-in font-bold">
                      Copied {copiedHex}!
                    </span>
                  )}
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
            <div className="flex items-center gap-2.5">
              {/* Bookmark to Moodboard */}
              <button
                type="button"
                onClick={() => toggleMoodboard(artwork)}
                className={`py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border flex-shrink-0 ${
                  bookmarked
                    ? 'bg-zinc-800 text-white border-white/40 shadow-glow-sm'
                    : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border-white/10'
                }`}
                title={bookmarked ? 'Remove from Curated Moodboard' : 'Add to Curated Moodboard'}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-white' : ''}`} />
                <span className="hidden sm:inline">{bookmarked ? 'Shortlisted' : 'Add to Moodboard'}</span>
              </button>

              {/* Commission in this style */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onCommissionStyle(artwork);
                }}
                className="flex-1 py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Commission Style</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Artwork ID: {artwork.id}</span>
              <span>
                {currentIndex + 1} of {PORTFOLIO_ARTWORKS.length} Assets
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
