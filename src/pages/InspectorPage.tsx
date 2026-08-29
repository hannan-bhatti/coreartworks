import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { useNavigate } from 'react-router-dom';
import { Sliders, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-28 pb-20 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Sliders className="w-3.5 h-3.5 text-white" />
            <span>Interactive Art Inspector</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            PIPELINE EVOLUTION: <br />
            <span className="text-gradient-silver">SKETCH TO CINEMATIC MASTER</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Inspect the step-by-step transformation of Core Artworks assets. Drag the slider to compare raw conceptual thumbnails, pencil sketches, and vector line art against final rendered master illustrations, book covers, and branding suites.
          </p>
        </div>
      </div>

      {/* The Interactive Slider Component */}
      <BeforeAfterSlider />

      {/* Technical Workflow Breakdown Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/10 space-y-10 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                THE ITERATIVE ANATOMY OF EXCELLENCE
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
                Every visual asset delivered by Core Artworks undergoes a deterministic 4-phase quality control inspection before final handoff.
              </p>
            </div>
            <button
              onClick={() => navigate('/estimator')}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <span>Estimate Asset Cost</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Pipeline Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineStages.map((stage) => (
              <div key={stage.phase} className="space-y-3 p-5 rounded-2xl bg-zinc-900/60 border border-white/5">
                <div className="text-3xl font-display font-black text-white/20">
                  {stage.phase}
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {stage.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Standards Strip */}
          <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300 font-mono">
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
