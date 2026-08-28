import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Sliders, Eye } from 'lucide-react';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';

export const BeforeAfterSlider: React.FC = () => {
  // Select items that have beforeImage
  const comparisonItems = PORTFOLIO_ARTWORKS.filter((a) => a.beforeImage);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [mode, setMode] = useState<'slider' | 'toggle'>('slider');
  const [toggleState, setToggleState] = useState<'before' | 'after'>('after');

  const activeItem = comparisonItems[selectedIdx] || comparisonItems[0];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging && mode !== 'slider') return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="inspector" className="py-24 relative bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Interactive Pipeline Inspector</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              SKETCH &amp; CLAY &rarr; FINAL POLISH
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Experience the iterative evolution of Core Artworks assets. Drag the slider to inspect the transition from foundational silhouette to high-gloss cinematic master.
            </p>
          </div>

          {/* Mode Controls */}
          <div className="flex items-center gap-3 bg-zinc-950 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setMode('slider')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                mode === 'slider'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 inline mr-1.5" />
              Interactive Slider
            </button>
            <button
              onClick={() => setMode('toggle')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                mode === 'toggle'
                  ? 'bg-white text-black shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5 inline mr-1.5" />
              Instant A/B Flip
            </button>
          </div>
        </div>

        {/* Artwork Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {comparisonItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-300 border flex items-center gap-2 ${
                selectedIdx === idx
                  ? 'bg-zinc-800 text-white border-white/30 shadow-glow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="font-mono text-zinc-500">0{idx + 1}</span>
              <span className="font-semibold">{item.title}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5">
                {item.categoryLabel}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Viewport */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl">
          
          {mode === 'slider' ? (
            /* DRAGGABLE SLIDER MODE */
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/9] sm:aspect-[21/9] w-full select-none cursor-ew-resize overflow-hidden"
            >
              {/* Layer 2: Final Artwork (Underneath) */}
              <img
                src={activeItem.image}
                alt="Final Artwork"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Layer 1: Before / Sketch Artwork (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeItem.beforeImage || activeItem.image}
                  alt="Raw Sketch / Clay Render"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale contrast-125"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none',
                  }}
                />
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
                
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-2xl text-white">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>

              {/* Floating Labels on Left & Right */}
              <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/80 text-white border border-white/20 backdrop-blur-md shadow-lg">
                  {activeItem.beforeLabel || 'Phase 1: Raw Concept / Wireframe'}
                </span>
              </div>

              <div className="absolute top-6 right-6 z-10 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/90 text-black border border-white/40 backdrop-blur-md shadow-lg">
                  {activeItem.afterLabel || 'Phase 4: Final Master Render'}
                </span>
              </div>

              {/* Bottom Percentage Bar Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div className="px-4 py-1 rounded-full bg-black/75 border border-white/15 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                  Drag to Compare &bull; {Math.round(sliderPosition)}%
                </div>
              </div>
            </div>
          ) : (
            /* INSTANT A/B FLIP MODE */
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={toggleState === 'before' ? (activeItem.beforeImage || activeItem.image) : activeItem.image}
                alt={activeItem.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  toggleState === 'before' ? 'filter grayscale contrast-125' : ''
                }`}
              />

              {/* Floating Toggle Pill Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/85 p-1.5 rounded-2xl border border-white/20 backdrop-blur-md">
                <button
                  onClick={() => setToggleState('before')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    toggleState === 'before'
                      ? 'bg-white text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeItem.beforeLabel || 'Phase 1: Foundation'}
                </button>
                <button
                  onClick={() => setToggleState('after')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    toggleState === 'after'
                      ? 'bg-white text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeItem.afterLabel || 'Phase 4: Final Master'}
                </button>
              </div>
            </div>
          )}

          {/* Details Footer under comparison */}
          <div className="p-6 bg-zinc-950 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white font-display">
                {activeItem.title}
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Client: <span className="text-zinc-200">{activeItem.client}</span> &bull; Year: {activeItem.year} &bull; Tools:{' '}
                <span className="font-mono text-zinc-300">{activeItem.tools.join(', ')}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400 italic">
                "{activeItem.description}"
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
