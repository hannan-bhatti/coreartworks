import React from 'react';
import { ART_CATEGORIES } from '../data/portfolioData';
import {
  BookOpen,
  User,
  Disc,
  Sparkles,
  Shield,
  BookMarked,
  Monitor,
  Layout,
  Box,
  Palette,
  Zap,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface DisciplinesShowcaseProps {
  onSelectCategory: (categoryId: string) => void;
}

const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  BookOpen,
  User,
  Disc,
  Sparkles,
  Shield,
  BookMarked,
  Monitor,
  Layout,
  Box,
  Palette,
  Zap,
  Layers,
};

export const DisciplinesShowcase: React.FC<DisciplinesShowcaseProps> = ({ onSelectCategory }) => {
  return (
    <section id="disciplines" className="py-24 relative border-t border-white/5 bg-[#09090c]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-0.5 bg-white" />
              <span>Full-Spectrum Visual Production</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              CORE DISCIPLINES &amp; TAXONOMY
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary studio bridges book publishing, character development, music artwork, identity design, D&amp;D and fursona art, serialized comics, 8K wallpapers, and broadcast overlays.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            8 Core Disciplines &bull; Master Specializations
          </div>
        </div>

        {/* Categories Grid (8 Cards in 4x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ART_CATEGORIES.map((category) => {
            const IconComponent = ICONS_MAP[category.iconName] || Sparkles;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-zinc-950/80 border border-white/10 p-6 transition-all duration-500 hover:border-white/40 hover:bg-zinc-900/90 hover:shadow-glow-md flex flex-col justify-between"
              >
                {/* Background Artwork Vignette with Subtle Hover Zoom */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    src={category.coverImage}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Top Info */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/15 flex items-center justify-center text-white group-hover:border-white group-hover:scale-105 transition-all shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-white/10">
                      {category.subcategories.reduce((acc, s) => acc + s.itemCount, 0)} Works
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-zinc-200 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-wider line-clamp-1">
                      {category.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Subcategories Preview */}
                <div className="relative z-10 pt-5 mt-5 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {category.subcategories.map((sub) => (
                      <span
                        key={sub.id}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-white/5 font-medium group-hover:border-white/15 transition-colors"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-white group-hover:text-zinc-300">
                    <span>Explore Vault</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
