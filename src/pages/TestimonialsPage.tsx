import React from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
import { Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { AGENCY_METRICS } from '../data/agencyData';

export const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();

  const studioHighlights = [
    { studio: 'Apex Cyberware Interactive', country: 'United States', genre: 'AAA Cyberpunk RPG', role: 'Art Direction & VisDev' },
    { studio: 'Mythic Forge Studios', country: 'United Kingdom', genre: 'Dark Fantasy ARPG', role: '3D High-Poly Sculpting' },
    { studio: 'Astral TCG Publishing', country: 'Japan & US', genre: 'Trading Card Game', role: 'Foil Key Illustrations' },
    { studio: 'Nexus Interactive Tech', country: 'Canada', genre: 'Sci-Fi Shooter', role: 'Diegetic HUD & Game UI' },
    { studio: 'Starbound Studios', country: 'Germany', genre: 'Space Exploration Sim', role: 'Unreal Engine 5 VFX' },
    { studio: 'Hyperion Cinematic Entertainment', country: 'France', genre: 'Animated Feature', role: 'Cinematic Keyframe Art' }
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Studio Trust &amp; Case Validation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            PROVEN TRACK RECORD <br />
            <span className="text-gradient-silver">WITH WORLD-CLASS STUDIOS</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Read verified reviews from art directors, lead game producers, and franchise managers who rely on Core Artworks for mission-critical visual production.
          </p>
        </div>
      </div>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 rounded-3xl bg-zinc-950 border border-white/10">
          {AGENCY_METRICS.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white text-gradient-silver">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300">
                {m.label}
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                {m.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid Component */}
      <TestimonialsSection />

      {/* Studio Partner Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/10 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">
                FEATURED PRODUCTION ENGAGEMENTS
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                A selection of published titles and production pipelines powered by Core Artworks.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">Global Studio Roster</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioHighlights.map((s) => (
              <div key={s.studio} className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{s.country}</span>
                  <span className="text-white">{s.genre}</span>
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  {s.studio}
                </h4>
                <p className="text-xs text-zinc-400">
                  Engagement: <span className="text-zinc-300 font-medium">{s.role}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Many major franchise titles are subject to active NDA embargoes until official studio trailers.</span>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
