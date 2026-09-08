import React, { useState } from 'react';
import { useMoodboard } from '../context/MoodboardContext';
import { Artwork, CommissionBrief } from '../types';
import { useNavigate } from 'react-router-dom';
import { Bookmark, X, Trash2, ArrowRight, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';

interface MoodboardDrawerProps {
  onSelectArtwork: (artwork: Artwork) => void;
  onAttachBrief: (brief: CommissionBrief) => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  onSelectArtwork,
  onAttachBrief,
}) => {
  const { moodboard, removeFromMoodboard, clearMoodboard, isDrawerOpen, setIsDrawerOpen } =
    useMoodboard();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  if (moodboard.length === 0 && !isDrawerOpen) {
    return null;
  }

  const handleCopySummary = () => {
    const summary = moodboard
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.title} [${item.categoryLabel} / ${item.subcategoryLabel}] - ID: ${item.id}`
      )
      .join('\n');
    navigator.clipboard.writeText(`Core Artworks Shortlisted Benchmarks:\n\n${summary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAttachAndQuote = () => {
    const primary = moodboard[0];
    const generatedBrief: CommissionBrief = {
      clientName: '',
      email: '',
      discipline: primary.categoryLabel,
      subcategory: primary.subcategoryLabel,
      scope: `${moodboard.length} Custom Deliverable${moodboard.length > 1 ? 's' : ''}`,
      complexity: 'High Detail',
      timeline: 'Standard (3-4 wks)',
      commercialRights: true,
      budgetRange: '$3,500 - $7,500',
      briefDescription: `Curated project benchmarks (${moodboard.length} pieces):\n${moodboard
        .map(
          (m, i) =>
            `${i + 1}. "${m.title}" (${m.categoryLabel} / ${m.subcategoryLabel} - Tools: ${m.tools.join(', ')})`
        )
        .join('\n')}`,
      moodboardIds: moodboard.map((m) => m.id),
      moodboardItems: moodboard,
    };

    onAttachBrief(generatedBrief);
    setIsDrawerOpen(false);
    navigate('/contact', { state: { prefilledBrief: generatedBrief } });
  };

  return (
    <>
      {/* Persistent Floating Dock (When items exist in moodboard and drawer is closed) */}
      {!isDrawerOpen && moodboard.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="group flex items-center gap-3.5 pl-3 pr-5 py-2.5 rounded-2xl bg-zinc-950/95 border border-white/20 hover:border-white/40 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105"
          >
            {/* Overlapping Thumbnails Stack */}
            <div className="flex -space-x-2.5 overflow-hidden">
              {moodboard.slice(0, 3).map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  className="inline-block w-8 h-8 rounded-lg object-cover ring-2 ring-zinc-900"
                />
              ))}
            </div>

            {/* Label & Counter */}
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white font-display">
                <Bookmark className="w-3.5 h-3.5 fill-white text-white" />
                <span>Curated Moodboard</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                {moodboard.length} Visual Benchmark{moodboard.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold font-mono">
              {moodboard.length}
            </div>
          </button>
        </div>
      )}

      {/* Slide-over Drawer Backdrop & Panel */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsDrawerOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#09090c] border-l border-white/15 shadow-2xl flex flex-col justify-between">
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono uppercase tracking-wider text-zinc-300">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>Visual Benchmarks</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    CLIENT MOODBOARD ({moodboard.length})
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {moodboard.length > 0 && (
                    <button
                      onClick={clearMoodboard}
                      className="p-2 rounded-xl text-zinc-400 hover:text-red-400 hover:bg-white/5 transition-all"
                      title="Clear All Items"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Drawer Items List */}
              <div className="p-6 flex-1 overflow-y-auto space-y-4">
                {moodboard.length === 0 ? (
                  <div className="py-20 text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto text-zinc-500">
                      <Bookmark className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-display">
                      Your Moodboard is Empty
                    </h4>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                      Click the bookmark icon on any portfolio card or lightbox to assemble your custom visual reference deck.
                    </p>
                  </div>
                ) : (
                  moodboard.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/25 transition-all flex items-center gap-3.5 group"
                    >
                      {/* Thumbnail with Click to Inspect */}
                      <div
                        onClick={() => {
                          setIsDrawerOpen(false);
                          onSelectArtwork(item);
                        }}
                        className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5">
                            {item.subcategoryLabel}
                          </span>
                        </div>
                        <h4
                          onClick={() => {
                            setIsDrawerOpen(false);
                            onSelectArtwork(item);
                          }}
                          className="text-xs font-bold text-white truncate cursor-pointer hover:text-zinc-300"
                        >
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-zinc-500 font-mono">
                          ID: {item.id} &bull; {item.client}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromMoodboard(item.id)}
                        className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-white/5 transition-all"
                        title="Remove from shortlist"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer Actions */}
              {moodboard.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-zinc-950/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>Selected Benchmarks</span>
                    <span className="text-white font-bold">{moodboard.length} Assets</span>
                  </div>

                  <button
                    onClick={handleAttachAndQuote}
                    className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
                  >
                    <span>Attach to Brief &amp; Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleCopySummary}
                    className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs font-mono border border-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Specs to Clipboard!' : 'Copy Moodboard Summary'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
