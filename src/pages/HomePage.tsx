import React from 'react';
import { Hero } from '../components/Hero';
import { DisciplinesShowcase } from '../components/DisciplinesShowcase';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { FAQSection } from '../components/FAQSection';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Sliders, Shield } from 'lucide-react';

interface HomePageProps {
  onSelectArtwork: (artwork: Artwork) => void;
  selectedCategoryFilter: string | null;
  onSelectCategoryFilter: (categoryId: string | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectArtwork,
  selectedCategoryFilter,
  onSelectCategoryFilter,
}) => {
  const navigate = useNavigate();
  const featuredArtwork = PORTFOLIO_ARTWORKS.find((a) => a.featured) || PORTFOLIO_ARTWORKS[0];

  const handleExploreGallery = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategoryFromDiscipline = (categoryId: string) => {
    onSelectCategoryFilter(categoryId);
    handleExploreGallery();
  };

  const handlePreloadEstimator = (disciplineId: string) => {
    navigate('/estimator', { state: { disciplineId } });
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        featuredArtwork={featuredArtwork}
        onSelectArtwork={onSelectArtwork}
        onOpenEstimator={() => navigate('/estimator')}
        onExploreGallery={handleExploreGallery}
      />

      {/* 2. Core Disciplines Overview (#disciplines) */}
      <DisciplinesShowcase onSelectCategory={handleSelectCategoryFromDiscipline} />

      {/* 3. Interactive Feature Highlights */}
      <section className="py-12 border-y border-white/5 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div
              onClick={() => navigate('/inspector')}
              className="group cursor-pointer p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-zinc-200">
                    Pipeline Inspector &rarr;
                  </h4>
                  <p className="text-xs text-zinc-400">Sketch vs. Render Slider</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate('/services')}
              className="group cursor-pointer p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-zinc-200">
                    Studio Services &rarr;
                  </h4>
                  <p className="text-xs text-zinc-400">4-Stage Production SOP</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => navigate('/estimator')}
              className="group cursor-pointer p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-zinc-200">
                    Cost Estimator &rarr;
                  </h4>
                  <p className="text-xs text-zinc-400">Instant Milestone Pricing</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Deep Interactive Portfolio Matrix (#portfolio) */}
      <PortfolioGallery
        onSelectArtwork={onSelectArtwork}
        selectedCategoryFilter={selectedCategoryFilter}
        onSelectCategoryFilter={onSelectCategoryFilter}
        onPreloadEstimatorWithDiscipline={handlePreloadEstimator}
      />

      {/* 5. Frequently Asked Questions Section (#faq) */}
      <FAQSection onOpenContact={() => navigate('/contact')} />

      {/* 6. Streamlined Bottom CTA Banner */}
      <section className="py-20 bg-[#070709] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Ready for Q3/Q4 Production Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            COMMISSION YOUR PROJECT WITH CORE ARTWORKS
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Calculate your production costs in real-time or submit your creative brief directly to our art directors under mutual NDA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-glow-sm"
            >
              <span>Submit Creative Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/estimator')}
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 transition-all"
            >
              Calculate Project Cost
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
