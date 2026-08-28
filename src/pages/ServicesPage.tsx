import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, HardDrive, FileCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectDiscipline = (category: string) => {
    navigate('/estimator', { state: { disciplineId: category } });
  };

  const deliverableFormats = [
    { title: '3D & Sculpting Packages', formats: ['.FBX (Rigged & Clean UVs)', '.OBJ', '.ZTL / .ZPR (ZBrush High Poly)', '.SPP (Substance Painter)'] },
    { title: 'Game Engine Assets', formats: ['Unreal Engine 5 (.uasset Nanite Ready)', 'Unity Prefabs', 'PBR 4K/8K Texture Sets (OpenGL/DirectX)'] },
    { title: '2D & Concept Master Files', formats: ['Layered 16-Bit Master PSDs', '8K High-DPI Print Files', 'Foil & Spot UV Masks', 'Color Scripts'] },
    { title: 'Motion & VFX Deliverables', formats: ['ProRes 4444 (Alpha Channel)', 'Unreal Niagara Emitters', 'Spine 2D Animations', 'After Effects Projects'] },
  ];

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Page Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Enterprise Production Services</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            FULL-SPECTRUM <br />
            <span className="text-gradient-silver">DIGITAL VISUAL CAPABILITIES</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From initial pitch keyframes to production-ready game engine assets, Core Artworks operates as an integrated visual department for top gaming, film, and virtual production studios.
          </p>
        </div>
      </div>

      {/* Services List Section */}
      <ServicesSection onSelectServiceDiscipline={handleSelectDiscipline} />

      {/* Production Pipeline SOP */}
      <ProcessSection />

      {/* Technical File Formats & Deliverables Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/10 space-y-8 shadow-2xl">
          <div className="space-y-2 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <HardDrive className="w-4 h-4 text-white" />
              <span>Format Specifications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              INDUSTRY-STANDARD MASTER DELIVERABLES
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              All files are rigorously tested for clean hierarchies, naming conventions, and instant engine drag-and-drop compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverableFormats.map((group) => (
              <div key={group.title} className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-3">
                <h3 className="text-sm font-bold text-white font-display">
                  {group.title}
                </h3>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {group.formats.map((fmt) => (
                    <li key={fmt} className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span>{fmt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <FileCheck className="w-4 h-4 text-zinc-300" />
              <span>Have a custom proprietary pipeline or engine format? We adapt to your studio repo.</span>
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Discuss Custom Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
