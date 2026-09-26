import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectDiscipline = (category: string) => {
    navigate('/estimator', { state: { disciplineId: category } });
  };

  const deliverableFormats = [
    { title: 'Book Cover & Print Masters', formats: ['Layered 300/600 DPI Master PSDs', 'Amazon KDP & IngramSpark Print PDFs', 'Foil & Spot UV Masks', 'High-DPI E-Book Formats'] },
    { title: 'Character Design & Ref Sheets', formats: ['3-Angle High-Res Turnaround PNGs', 'Clean Vector Line Art (.SVG / .EPS)', 'Layered Lighting Adjustment PSDs', 'High-Res Digital Character Tokens'] },
    { title: 'Logo & Brand Assets', formats: ['Vector Master Files (.AI, .EPS, .SVG)', 'Transparent High-Res PNGs', 'Monochrome & Inverted Variations', 'Brand Guidelines Sheet'] },
    { title: 'Stream & Motion Packages', formats: ['OBS / Streamlabs Scene Packages', 'Transparent Animated .WebM Loops', 'High-FPS Intermission Stinger Files', 'Twitch Emotes & Sub Badges'] },
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#0a0a0b]">
      
      {/* Page Hero matching Core Artworks page-header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <div className="space-y-4 max-w-3xl">
          <div>
            <span className="eyebrow-accent text-zinc-400">What We Offer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
            Services Built <br />
            <span className="is-outline">For Every Vision</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            From a single cover illustration to an end-to-end production pipeline — here's everywhere Core Artworks brings your project to life with obsessive craft.
          </p>
        </div>
      </div>

      {/* Services List Section */}
      <ServicesSection onSelectServiceDiscipline={handleSelectDiscipline} />

      {/* Production Pipeline SOP */}
      <ProcessSection />

      {/* Technical File Formats & Deliverables Table */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-white/[0.08] space-y-8 shadow-2xl">
          <div className="space-y-2 pb-6 border-b border-white/[0.08]">
            <span className="eyebrow-accent text-zinc-400">Format Specifications</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              Industry-Standard <span className="is-outline">Master Deliverables</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              All files are rigorously tested for clean hierarchies, naming conventions, and instant engine drag-and-drop compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverableFormats.map((group) => (
              <div key={group.title} className="p-6 rounded-2xl bg-[#0a0a0b] border border-white/[0.08] space-y-3">
                <h3 className="text-sm font-bold text-white font-display uppercase tracking-tight">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {group.formats.map((fmt) => (
                    <li key={fmt} className="flex items-center gap-2 font-mono text-[11px] text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>{fmt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <FileCheck className="w-4 h-4 text-zinc-300" />
              <span>Have a custom proprietary pipeline or engine format? We adapt to your studio repo.</span>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="btn-primary"
            >
              <span>Discuss Custom Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
