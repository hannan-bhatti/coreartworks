import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-28 lg:py-36 relative bg-[#0a0a0b] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div>
              <span className="eyebrow-accent text-zinc-400">Standard Operating Procedure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              The 4-Stage <span className="is-outline">Production Pipeline</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Our structured iterative workflow guarantees aesthetic excellence, zero scope drift, and predictable milestone delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Process Cards with Staggered Scroll-Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} delay={idx * 0.1} direction="up" className="h-full">
              <div className="relative rounded-2xl bg-[#121214] p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between group hover:border-white/25 transition-all duration-300 h-full shadow-xl">
                
                {/* Step number watermark and phase indicator */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-display font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {step.step}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                </div>

                <div className="space-y-2 mt-4 flex-1">
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Phase 0{idx + 1} of 04</span>
                  <span className="text-zinc-400">2 Iteration Passes</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* NDA & Security Banner with Scroll Reveal */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase tracking-tight">
                  Strict Confidentiality &amp; Air-Gapped Repositories
                </h4>
                <p className="text-xs text-zinc-400">We execute mutual NDAs prior to receiving any lore, scripts, or builds.</p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/[0.08] whitespace-nowrap">
              Enterprise Security Standard
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
