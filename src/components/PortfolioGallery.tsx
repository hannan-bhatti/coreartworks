import React, { useState, useMemo } from 'react';
import { ART_CATEGORIES, PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types';
import { Search, Eye, ArrowUpRight, X, Bookmark } from 'lucide-react';
import { useMoodboard } from '../context/MoodboardContext';

interface PortfolioGalleryProps {
  onSelectArtwork: (artwork: Artwork) => void;
  selectedCategoryFilter?: string | null;
  onSelectCategoryFilter: (categoryId: string | null) => void;
  onPreloadEstimatorWithDiscipline?: (disciplineId: string) => void;
  hideHeader?: boolean;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectArtwork,
  selectedCategoryFilter,
  onSelectCategoryFilter,
  hideHeader = false,
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'views'>('featured');
  const { toggleMoodboard, isInMoodboard } = useMoodboard();

  // Available subcategories based on current active category
  const activeCategoryObj = useMemo(() => {
    if (!selectedCategoryFilter) return null;
    return ART_CATEGORIES.find((c) => c.id === selectedCategoryFilter);
  }, [selectedCategoryFilter]);

  // Filtered artworks
  const filteredArtworks = useMemo(() => {
    return PORTFOLIO_ARTWORKS.filter((art) => {
      // Category filter
      if (selectedCategoryFilter && art.category !== selectedCategoryFilter) {
        return false;
      }
      // Subcategory filter
      if (selectedSubcategory && art.subcategory !== selectedSubcategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesClient = art.client.toLowerCase().includes(q);
        const matchesDesc = art.description.toLowerCase().includes(q);
        const matchesTools = art.tools.some((t) => t.toLowerCase().includes(q));
        const matchesTags = art.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesClient && !matchesDesc && !matchesTools && !matchesTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.year - a.year;
      if (sortBy === 'views') {
        const viewsA = parseFloat(a.stats?.views || '0');
        const viewsB = parseFloat(b.stats?.views || '0');
        return viewsB - viewsA;
      }
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategoryFilter, selectedSubcategory, searchQuery, sortBy]);

  return (
    <section id="portfolio" className={`${hideHeader ? 'py-10 lg:py-14' : 'py-28 lg:py-36 border-t border-white/[0.08]'} relative bg-[#070709]`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        {!hideHeader ? (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div>
                <span className="eyebrow-accent text-zinc-400">Selected Work Archive</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
                A Glimpse Into <span className="is-outline">The Archive</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Curated master artworks across book covers, comic &amp; manga, character design, and brand identities. Click any work to inspect high-resolution details.
              </p>
            </div>

            {/* Work Count Indicator */}
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {filteredArtworks.length} of {PORTFOLIO_ARTWORKS.length} Selected Projects
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between pb-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>Filter Projects by Discipline</span>
            <span>{filteredArtworks.length} of {PORTFOLIO_ARTWORKS.length} Projects</span>
          </div>
        )}

        {/* Minimalist Category Tabs matching Core Artworks */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 scrollbar-none border-b border-white/[0.08]">
          <button
            onClick={() => {
              onSelectCategoryFilter(null);
              setSelectedSubcategory(null);
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
              selectedCategoryFilter === null
                ? 'bg-white text-black shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            All Works
          </button>

          {ART_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategoryFilter(cat.id);
                setSelectedSubcategory(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedCategoryFilter === cat.id
                  ? 'bg-white text-black shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Subcategory Pills (When a category is active or for general discovery) */}
        {activeCategoryObj && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 animate-in fade-in duration-300">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mr-2">
              Sub-disciplines:
            </span>
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedSubcategory === null
                  ? 'bg-zinc-800 text-white border border-white/20'
                  : 'text-zinc-400 bg-zinc-900/60 hover:text-white border border-white/5'
              }`}
            >
              All Subcategories
            </button>
            {activeCategoryObj.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(selectedSubcategory === sub.id ? null : sub.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedSubcategory === sub.id
                    ? 'bg-zinc-800 text-white border border-white/20'
                    : 'text-zinc-400 bg-zinc-900/60 hover:text-white border border-white/5'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        {/* Minimalist Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-[#121214] border border-white/[0.08] rounded-full pl-9 pr-9 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/25 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#121214] border border-white/[0.08] rounded-full px-4 py-2 text-xs text-zinc-400 focus:outline-none focus:border-white/25 transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="newest">Latest Additions</option>
              <option value="views">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredArtworks.length === 0 ? (
          <div className="py-20 text-center space-y-4 rounded-2xl bg-zinc-950 border border-dashed border-zinc-800">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mx-auto text-zinc-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No Artworks Found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Try clearing your active search filters or selecting a different discipline category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubcategory(null);
                onSelectCategoryFilter(null);
              }}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((art) => {
              const bookmarked = isInMoodboard(art.id);
              return (
                <div
                  key={art.id}
                  onClick={() => onSelectArtwork(art)}
                  className="group cursor-pointer relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#121214] border border-white/[0.08] hover:border-white/30 transition-all duration-500 shadow-xl"
                >
                  {/* Artwork Media with Smooth Hover Zoom */}
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Bar: Minimal Subcategory Pill & Bookmark */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/75 text-zinc-300 border border-white/15 backdrop-blur-md">
                      {art.subcategoryLabel}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMoodboard(art);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center ${
                        bookmarked
                          ? 'bg-white text-black shadow-sm'
                          : 'bg-black/60 hover:bg-black text-zinc-400 hover:text-white border border-white/10'
                      }`}
                      title={bookmarked ? 'Remove from Curated Moodboard' : 'Add to Curated Moodboard'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-black' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom Minimal Details Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 space-y-1.5 z-10">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      {art.client} &bull; {art.year}
                    </div>

                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight group-hover:text-zinc-200 transition-colors">
                      {art.title}
                    </h3>

                    <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Inspect Artwork</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
