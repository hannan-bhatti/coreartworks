import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

export const StatsSection: React.FC = () => {
  return (
    <section className="border-y border-white/[0.08] py-14 bg-[#0a0a0b]/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          
          <div className="space-y-2 md:border-r border-white/[0.08] md:pr-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1">
              <AnimatedCounter value="300" duration={2000} />
              <span className="text-xl sm:text-2xl text-zinc-400 font-normal">+</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.08em] text-zinc-400">
              Projects Delivered
            </p>
          </div>

          <div className="space-y-2 md:border-r border-white/[0.08] md:px-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1">
              <AnimatedCounter value="100" duration={2000} />
              <span className="text-xl sm:text-2xl text-zinc-400 font-normal">+</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.08em] text-zinc-400">
              Happy Clients
            </p>
          </div>

          <div className="space-y-2 md:border-r border-white/[0.08] md:px-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1">
              <AnimatedCounter value="5" duration={2000} />
              <span className="text-xl sm:text-2xl text-zinc-400 font-normal">yrs</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.08em] text-zinc-400">
              Industry Experience
            </p>
          </div>

          <div className="space-y-2 md:pl-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1">
              <span>4.9</span>
              <span className="text-xl sm:text-2xl text-zinc-400 font-normal">/5</span>
            </div>
            <p className="text-xs font-mono uppercase tracking-[0.08em] text-zinc-400">
              Average Client Rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
