import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { Star } from 'lucide-react';

const stats = [
  { id: 'projects', value: '300', suffix: '+', label: 'Projects Delivered' },
  { id: 'clients',  value: '100', suffix: '+', label: 'Happy Clients' },
  { id: 'experience', value: '5', suffix: 'yrs', label: 'Industry Experience' },
  { id: 'rating',  value: '4.9', suffix: '/5', label: 'Average Client Rating' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="border-y border-white/[0.08] py-14 bg-[#0a0a0b] relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/[0.08]">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 md:px-8 first:md:pl-0 last:md:pr-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1">
                {stat.id === 'rating' ? (
                  <span>4.9</span>
                ) : (
                  <AnimatedCounter value={stat.value} duration={2000} />
                )}
                <span className="text-xl sm:text-2xl text-zinc-400 font-normal">
                  {stat.suffix}
                </span>
                {stat.id === 'rating' && (
                  <div className="flex items-center gap-0.5 ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-zinc-400 fill-zinc-400" />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.08em] text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
