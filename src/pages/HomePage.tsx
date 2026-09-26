import React from 'react';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { DisciplinesShowcase } from '../components/DisciplinesShowcase';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { FAQSection } from '../components/FAQSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { PORTFOLIO_ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      {/* 1. Minimalist Hero Section */}
      <Hero
        featuredArtwork={featuredArtwork}
        onSelectArtwork={onSelectArtwork}
        onOpenEstimator={() => navigate('/estimator')}
        onExploreGallery={handleExploreGallery}
      />

      {/* 2. Full-Width Stats Divider matching Core Artworks */}
      <ScrollReveal direction="up" delay={0.05}>
        <StatsSection />
      </ScrollReveal>

      {/* 3. Core Disciplines Overview (#disciplines) */}
      <ScrollReveal direction="up" delay={0.05}>
        <DisciplinesShowcase onSelectCategory={handleSelectCategoryFromDiscipline} />
      </ScrollReveal>

      {/* 4. Selected Work Archive (#portfolio) */}
      <ScrollReveal direction="up" delay={0.05}>
        <PortfolioGallery
          onSelectArtwork={onSelectArtwork}
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={onSelectCategoryFilter}
          onPreloadEstimatorWithDiscipline={handlePreloadEstimator}
        />
      </ScrollReveal>

      {/* 5. Client Words / Testimonials matching Core Artworks */}
      <ScrollReveal direction="up" delay={0.05}>
        <TestimonialsSection />
      </ScrollReveal>

      {/* 6. Infinite Sliding Brands Marquee */}
      <MarqueeTicker />

      {/* 6. Frequently Asked Questions Section (#faq) */}
      <ScrollReveal direction="up" delay={0.05}>
        <FAQSection onOpenContact={() => navigate('/contact')} />
      </ScrollReveal>

      {/* 7. Minimalist Closing CTA Banner matching Core Artworks */}
      <ScrollReveal direction="up" delay={0.05}>
        <section className="py-28 lg:py-36 bg-[#0a0a0b] border-t border-white/[0.08] relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-6 relative z-10">
            <div>
              <span className="eyebrow-accent text-zinc-400">Let's Build Something</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              Have a vision? <br />
              <span className="is-outline">Let's give it a world to live in.</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Tell us about your project and we'll get back to you with milestone pricing and creative direction within one business day.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleExploreGallery}
                className="btn-ghost"
              >
                <span>See Our Work</span>
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
