import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ShieldCheck, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-[#070709] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <ScrollReveal direction="up">
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
        </ScrollReveal>

        {/* 4 Process Cards with Staggered Scroll-Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 0.1} direction="up" className="h-full">
              <div className="relative rounded-2xl bg-zinc-950 p-6 border border-white/10 flex flex-col justify-between group hover:border-white/35 transition-all duration-300 h-full hover:shadow-glow-sm">
                
                {/* Step number watermark and phase indicator */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-display font-black text-white/15 group-hover:text-white/30 transition-colors">
                    {step.step}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white group-hover:animate-ping transition-all" />
                </div>

                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-zinc-200 transition-colors">
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
            </ScrollReveal>
          ))}
        </div>

        {/* NDA & Security Banner with Scroll Reveal */}
        <ScrollReveal delay={0.2} direction="up">
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
        </ScrollReveal>

      </div>
    </section>
  );
};
