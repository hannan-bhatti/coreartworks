import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ShieldCheck, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Standard Operating Procedure</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            THE 4-STAGE PRODUCTION PIPELINE
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our structured iterative workflow guarantees aesthetic excellence, zero scope drift, and predictable milestone delivery for major game &amp; film studios.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-zinc-950 p-6 border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-all duration-300"
            >
              {/* Step number watermark */}
              <div className="text-4xl font-display font-black text-white/10 group-hover:text-white/20 transition-colors">
                {step.step}
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="text-lg font-bold font-display text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Phase 0{idx + 1} of 04</span>
                <span className="text-zinc-400">2 Iteration Passes</span>
              </div>
            </div>
          ))}
        </div>

        {/* NDA & Security Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Strict Confidentiality &amp; Air-Gapped Repositories</h4>
              <p className="text-xs text-zinc-400">We sign mutual NDAs prior to receiving any lore, scripts, or game builds.</p>
            </div>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5">
            Enterprise Security Standard
          </span>
        </div>

      </div>
    </section>
  );
};
