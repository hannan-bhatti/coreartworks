import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedCounter } from './AnimatedCounter';
import { Star, Sparkles, Globe, Clock } from 'lucide-react';

interface StatItem {
  id: string;
  value: string;
  numericVal: number;
  suffix: string;
  label: string;
  caption: string;
  badge: string;
  icon: React.ReactNode;
  actionText: string;
  action: () => void;
}

export const StatsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats: StatItem[] = [
    {
      id: 'projects',
      value: '300',
      numericVal: 300,
      suffix: '+',
      label: 'Projects Delivered',
      caption: 'From indie book covers to brand IP',
      badge: '100% Shipped',
      icon: <Sparkles className="w-3.5 h-3.5" />,
      actionText: 'Explore Archive',
      action: () => handleScrollTo('portfolio'),
    },
    {
      id: 'clients',
      value: '100',
      numericVal: 100,
      suffix: '+',
      label: 'Happy Clients',
      caption: 'Authors, streamers & game studios',
      badge: '24+ Countries',
      icon: <Globe className="w-3.5 h-3.5" />,
      actionText: 'View Roster',
      action: () => handleScrollTo('testimonials'),
    },
    {
      id: 'experience',
      value: '5',
      numericVal: 5,
      suffix: 'yrs',
      label: 'Industry Experience',
      caption: 'Crafting digital worlds since 2019',
      badge: 'Full Pipeline',
      icon: <Clock className="w-3.5 h-3.5" />,
      actionText: 'Our Story',
      action: () => navigate('/about'),
    },
    {
      id: 'rating',
      value: '4.9',
      numericVal: 4.9,
      suffix: '/5',
      label: 'Average Client Rating',
      caption: 'Over 85+ verified five-star ratings',
      badge: 'Top Rated',
      icon: <Star className="w-3.5 h-3.5 fill-current" />,
      actionText: 'Read Reviews',
      action: () => handleScrollTo('testimonials'),
    },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => {
        setIsMouseInside(false);
        setHoveredIndex(null);
      }}
      className="border-y border-white/[0.08] py-10 sm:py-14 bg-[#0a0a0b] relative z-10 overflow-hidden transition-colors duration-500"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isMouseInside ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.05), transparent 75%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
          {stats.map((stat, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={stat.id}
                onClick={stat.action}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group cursor-pointer relative p-6 sm:p-7 rounded-2xl lg:rounded-none transition-all duration-300 select-none ${
                  isHovered
                    ? 'bg-white/[0.03] lg:bg-white/[0.02] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] -translate-y-1'
                    : 'hover:bg-white/[0.015]'
                }`}
              >


                {/* Main Stat Number */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-white flex items-baseline gap-1 tracking-tight">
                    <span
                      className={`transition-all duration-300 ${
                        isHovered
                          ? 'drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]'
                          : ''
                      }`}
                    >
                      {stat.id === 'rating' ? (
                        <span>4.9</span>
                      ) : (
                        <AnimatedCounter value={stat.value} duration={1800} />
                      )}
                    </span>
                    <span
                      className={`text-xl sm:text-2xl font-normal transition-colors duration-300 ${
                        isHovered ? 'text-white font-medium' : 'text-zinc-400'
                      }`}
                    >
                      {stat.suffix}
                    </span>

                    {/* Glowing Stars for Rating on Hover */}
                    {stat.id === 'rating' && (
                      <div className="flex items-center gap-0.5 ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 transition-all duration-300 ${
                              isHovered
                                ? 'text-white fill-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                                : 'text-zinc-600 fill-zinc-600'
                            }`}
                            style={{ transitionDelay: `${i * 40}ms` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Primary Label */}
                  <p
                    className={`text-xs font-mono uppercase tracking-[0.1em] transition-colors duration-300 ${
                      isHovered ? 'text-white font-semibold' : 'text-zinc-400'
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>



                {/* Animated Accent Line that expands on card hover */}
                <div className="pt-4">
                  <div className="h-[2px] w-full bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ease-out ${
                        isHovered
                          ? 'w-full bg-gradient-to-r from-zinc-300 via-white to-zinc-400 shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                          : 'w-8 bg-white/20'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
