import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/agencyData';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-[#09090c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-0.5 bg-white" />
              <span>Industry Validation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              TESTIMONIALS FROM ART DIRECTORS &amp; PRODUCERS
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Trusted by veteran developers, indie publishers, and entertainment franchises across the globe.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-zinc-950 px-4 py-2 rounded-xl border border-white/10 text-xs text-zinc-300">
            <div className="flex text-white">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 / 5.0</span>
            <span className="text-zinc-500 font-mono">(120+ Studio Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-zinc-950 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/25 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-white">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-zinc-900 text-zinc-300 border border-white/10">
                    {t.highlightTag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info & Project Type */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-white/20 filter grayscale"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-display">
                      {t.clientName}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {t.role}, <span className="text-zinc-200 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Commissioned Work:
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
