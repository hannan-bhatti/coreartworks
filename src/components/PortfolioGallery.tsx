import React, { useState, useMemo } from 'react';
import { ART_CATEGORIES, PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types';
import { Search, Eye, ArrowUpRight, X } from 'lucide-react';

interface PortfolioGalleryProps {
  onSelectArtwork: (artwork: Artwork) => void;
  selectedCategoryFilter?: string | null;
  onSelectCategoryFilter: (categoryId: string | null) => void;
  onPreloadEstimatorWithDiscipline: (disciplineId: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectArtwork,
  selectedCategoryFilter,
  onSelectCategoryFilter,
  onPreloadEstimatorWithDiscipline
}) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'views'>('featured');

  // Extract all unique tags across artworks
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    PORTFOLIO_ARTWORKS.forEach((a) => a.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

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
      // Tag filter
      if (selectedTag && !art.tags.includes(selectedTag)) {
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
  }, [selectedCategoryFilter, selectedSubcategory, selectedTag, searchQuery, sortBy]);

  return (
    <section id="portfolio" className="py-24 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Production Vault</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              INTERACTIVE PORTFOLIO MATRIX
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore curated deliverables categorized across visual development, 3D digital sculpts, key splash art, visual effects, and game UI systems.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
              Showing <strong className="text-white">{filteredArtworks.length}</strong> of {PORTFOLIO_ARTWORKS.length} Works
            </span>
          </div>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-white/10">
          <button
            onClick={() => {
              onSelectCategoryFilter(null);
              setSelectedSubcategory(null);
            }}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
              selectedCategoryFilter === null
                ? 'bg-white text-black shadow-glow-sm'
                : 'bg-zinc-950/60 text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
            }`}
          >
            <span>All Disciplines</span>
            <span className="text-[10px] opacity-70">({PORTFOLIO_ARTWORKS.length})</span>
          </button>

          {ART_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategoryFilter(cat.id);
                setSelectedSubcategory(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                selectedCategoryFilter === cat.id
                  ? 'bg-white text-black shadow-glow-sm'
                  : 'bg-zinc-950/60 text-zinc-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              <span>{cat.name}</span>
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

        {/* Search, Filter Bar & Sort Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-8 p-3 rounded-2xl bg-zinc-950 border border-white/10">
          
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, client, software (ZBrush, Unreal, Photoshop)..."
              className="w-full bg-zinc-900/80 border border-white/5 rounded-xl pl-10 pr-10 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Tag Selector */}
          <div className="sm:col-span-3">
            <select
              value={selectedTag || ''}
              onChange={(e) => setSelectedTag(e.target.value || null)}
              className="w-full bg-zinc-900/80 border border-white/5 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-white/30"
            >
              <option value="">Filter by Art Style Tag (All)</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  #{tag}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-zinc-900/80 border border-white/5 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-white/30"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="newest">Sort: Latest Additions</option>
              <option value="views">Sort: Most Popular</option>
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
                setSelectedTag(null);
                setSelectedSubcategory(null);
                onSelectCategoryFilter(null);
              }}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArtwork(art)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-white/35 transition-all duration-500 hover:shadow-glow-md flex flex-col justify-between"
              >
                {/* Artwork Image Viewport */}
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  
                  {/* Category Pill on top left */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/80 text-zinc-200 border border-white/10 backdrop-blur-md">
                      {art.subcategoryLabel}
                    </span>
                    {art.beforeImage && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-800/90 text-white border border-white/15">
                        A/B Inspectable
                      </span>
                    )}
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Artwork Specs</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 space-y-3 bg-zinc-950 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span>{art.client}</span>
                      <span>{art.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-zinc-200 transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {art.description}
                    </p>
                  </div>

                  {/* Software Tags & Commission Link */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {art.tools.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 text-[10px] font-mono border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPreloadEstimatorWithDiscipline(art.category);
                      }}
                      className="text-[11px] font-semibold text-zinc-300 hover:text-white flex items-center gap-1 group/btn"
                      title="Calculate estimate for this art style"
                    >
                      <span>Quote Style</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
