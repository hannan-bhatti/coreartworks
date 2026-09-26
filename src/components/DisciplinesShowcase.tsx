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
    <section id="disciplines" className="py-28 lg:py-36 relative border-t border-white/[0.08] bg-[#0a0a0b]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div>
              <span className="eyebrow-accent text-zinc-400">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              Core Disciplines &amp; <span className="is-outline">Taxonomy</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every deliverable is crafted with obsessive intent across eight core specializations — from first thumbnail sketch to cinematic master render.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            08 Master Specializations
          </div>
        </div>

        {/* Categories Grid (8 Cards in 4x2 Grid with Minimal Index & Clean Spacing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ART_CATEGORIES.map((category, idx) => {
            const IconComponent = ICONS_MAP[category.iconName] || Sparkles;
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="group cursor-pointer relative rounded-2xl bg-[#121214] border border-white/[0.08] p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#16161a] flex flex-col justify-between"
              >
                {/* Top Info */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:border-white/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {indexStr}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Discipline Link */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                    {category.subcategories.reduce((acc, s) => acc + s.itemCount, 0)} Works
                  </span>
                  <span className="flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
