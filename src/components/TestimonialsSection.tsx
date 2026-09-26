import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/agencyData';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 lg:py-36 relative bg-[#0a0a0b] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div>
              <span className="eyebrow-accent text-zinc-400">Client Words</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              Trusted By Teams Who <span className="is-outline">Care About Craft</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              What art directors, studio founders, and indie publishers say about partnering with Core Artworks.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#121214] px-4 py-2 rounded-full border border-white/[0.08] text-xs text-zinc-300">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9 / 5.0</span>
            <span className="text-zinc-500 font-mono">(100+ Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#121214] border border-white/[0.08] flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-white">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-black/50 text-zinc-400 border border-white/[0.08]">
                    {t.highlightTag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info & Project Type */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-white/10 filter grayscale"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-display uppercase tracking-tight">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {t.role}, <span className="text-zinc-200 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Commission:
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {t.projectType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
