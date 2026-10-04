import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PortfolioGallery } from '../components/PortfolioGallery';
import { ScrollReveal } from '../components/ScrollReveal';
import { Artwork } from '../types';

interface PortfolioPageProps {
  onSelectArtwork: (artwork: Artwork) => void;
  selectedCategoryFilter: string | null;
  onSelectCategoryFilter: (categoryId: string | null) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectArtwork,
  selectedCategoryFilter,
  onSelectCategoryFilter,
}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#070709] text-[#f6f6f4] min-h-screen">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 lg:pb-16 border-b border-white/[0.08]">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl space-y-6">
            <div>
              <span className="eyebrow-accent text-zinc-400">Complete Archive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-[1.05]">
              Master Portfolio <br />
              <span className="is-outline">&amp; Works</span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl pt-2">
              Explore our curated catalog of master digital art, serialized comics, character designs, book covers, and branding crafted for studios and creators worldwide.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Interactive Gallery */}
      <PortfolioGallery
        onSelectArtwork={onSelectArtwork}
        selectedCategoryFilter={selectedCategoryFilter}
        onSelectCategoryFilter={onSelectCategoryFilter}
        hideHeader={true}
      />

      {/* 3. Closing CTA */}
      <section className="py-24 lg:py-32 border-t border-white/[0.08] text-center bg-[#0a0a0b] relative overflow-hidden">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
            <div>
              <span className="eyebrow-accent text-zinc-400">Have A Project In Mind?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-[1.08]">
              Inspired by what you see? <br />
              <span className="is-outline">Let's craft your world.</span>
            </h2>

            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Tell us about your project, timeline, and goals. We'll get back to you with custom milestones and creative direction within 24 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary text-base px-8 py-4"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/#services')}
                className="btn-ghost text-base px-8 py-4"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
