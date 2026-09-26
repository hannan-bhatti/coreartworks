import React from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import {
  Sparkles,
  Box,
  Palette,
  Zap,
  Layers,
  BookOpen,
  User,
  Disc,
  Shield,
  BookMarked,
  Monitor,
  Layout,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceDiscipline: (category: string) => void;
}

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Box,
  Palette,
  Zap,
  Layers,
  BookOpen,
  User,
  Disc,
  Shield,
  BookMarked,
  Monitor,
  Layout,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceDiscipline }) => {
  return (
    <section id="services" className="py-28 lg:py-36 relative bg-[#0a0a0b] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div>
              <span className="eyebrow-accent text-zinc-400">Studio Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
              Specialized <span className="is-outline">Art Services</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Every deliverable is crafted with strict adherence to industry polygon budgets, PBR texture standards, high-DPI print readiness, and engine integration specifications.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            End-to-End Production Pipeline
          </div>
        </div>

        {/* Services List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENCY_SERVICES.map((service) => {
            const IconComponent = ICONS[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#121214] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 px-3 py-1 rounded-full bg-black/40 border border-white/[0.08]">
                      Starts at {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-zinc-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                      Core Deliverables:
                    </span>
                    <div className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Software Stack */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                      Engine &amp; Software Tools:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {service.software.map((sw) => (
                        <span
                          key={sw}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-white/5"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{service.turnaround}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceDiscipline(service.category)}
                    className="text-xs font-semibold text-white hover:text-zinc-300 flex items-center gap-1 group/link"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
