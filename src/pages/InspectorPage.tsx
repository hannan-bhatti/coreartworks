import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const InspectorPage: React.FC = () => {
  const navigate = useNavigate();

  const pipelineStages = [
    {
      phase: '01',
      name: 'Thumbnail & Value Sketch',
      description: 'Rapid conceptual thumbnails establishing strong focal arcs, chiaroscuro contrast, dynamic anatomy, and layout readability.'
    },
    {
      phase: '02',
      name: 'Line Art & Structural Inking',
      description: 'Clean vector linework, precise G-pen strokes, anatomical model turnarounds, and typographic placement.'
    },
    {
      phase: '03',
      name: 'Color Script & Shading Pass',
      description: 'Multi-layer cel shading, smooth painterly rendering, ambient occlusion, and lighting atmosphere.'
    },
    {
      phase: '04',
      name: 'Atmospheric Effects & Master Polish',
      description: 'Foil masks, particle bloom, color grading, print-ready 300/600 DPI masters, and high-DPI digital export.'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#0a0a0b]">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <div className="space-y-4 max-w-3xl">
          <div>
            <span className="eyebrow-accent text-zinc-400">Pipeline Inspector</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
            Sketch To <br />
            <span className="is-outline">Cinematic Master</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Inspect the step-by-step transformation of Core Artworks assets. Drag the slider to compare raw conceptual thumbnails, pencil sketches, and vector line art against final rendered master illustrations and branding suites.
          </p>
        </div>
      </div>

      {/* The Interactive Slider Component */}
      <BeforeAfterSlider />

      {/* Technical Workflow Breakdown Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#121214] border border-white/[0.08] space-y-10 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <span className="eyebrow-accent text-zinc-400">Quality Governance</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
                The Iterative Anatomy <span className="is-outline">Of Excellence</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Every visual asset delivered by Core Artworks undergoes a deterministic 4-phase quality control inspection before final handoff.
              </p>
            </div>
            <button
              onClick={() => navigate('/estimator')}
              className="btn-primary"
            >
              <span>Estimate Asset Cost</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Pipeline Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineStages.map((stage) => (
              <div key={stage.phase} className="space-y-3 p-6 rounded-2xl bg-[#0a0a0b] border border-white/[0.08]">
                <div className="text-3xl font-display font-bold text-white/20">
                  {stage.phase}
                </div>
                <h3 className="text-base font-bold text-white font-display uppercase tracking-tight">
                  {stage.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Standards Strip */}
          <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>300/600 DPI Print Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Layered PSDs &amp; Clean Vectors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Full Commercial IP Transfer</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
