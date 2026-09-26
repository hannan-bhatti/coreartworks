import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ServiceItem {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    index: '01',
    title: 'Digital Arts & Cover Design',
    category: 'Book Covers',
    description:
      'Music and book cover artwork, immersive backgrounds, and original character designs — plus scroll-stopping promotional visuals for your releases and campaigns.',
    tags: ['Music Covers', 'Book Covers', 'Backgrounds', 'Character Design', 'Thumbnails'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-white">
        <rect x="5" y="7" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="15" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 27L11 21L17 26L25 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="17" y="15" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      </svg>
    ),
  },
  {
    index: '02',
    title: 'Comic & Manga Production',
    category: 'Comics & Manga',
    description:
      'Full comic projects for writers who need an artist, plus complete manga chapter design with cinematic paneling, pacing, and line work from script to final page.',
    tags: ['Comic Illustration', 'Manga Chapters', 'Panel Layout', 'Inking & Lettering'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-white">
        <rect x="5" y="8" width="30" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 28V32L21 28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 14H22M12 19H28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Animation & Motion',
    category: 'Banners & Overlays',
    description:
      'Animation work that gives your art movement, professional video editing, and motion cover art that turns a static release into something alive on screen.',
    tags: ['Animation', 'Video Editing', 'Motion Cover Art', 'Stinger Loops'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-white">
        <polygon points="16,13 28,20 16,27" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Web & App Development',
    category: 'Logo Designs',
    description:
      'We design and build complete websites and digital applications for your business or portfolio — including full e-commerce platforms — from wireframe to launch.',
    tags: ['Business Websites', 'Portfolio Sites', 'App Design', 'E-Commerce'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-white">
        <rect x="5" y="8" width="30" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 14H35" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="11" r="0.9" fill="currentColor" />
        <circle cx="12.5" cy="11" r="0.9" fill="currentColor" />
        <path d="M14 23L18 19L14 25M22 19L26 23L22 27" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartService = (service: ServiceItem) => {
    navigate('/contact', { state: { disciplineId: service.category } });
  };

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0b] text-[#f6f6f4]">
      {/* 1. Page Header matching Core Artworks reference */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 lg:pb-24 border-b border-white/[0.08]">
        <div className="max-w-3xl space-y-6">
          <div>
            <span className="eyebrow-accent text-zinc-400">What We Offer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-[1.05]">
            Services Built <br />
            <span className="is-outline">For Every Vision</span>
          </h1>

          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl pt-2">
            From a single cover illustration to a full production pipeline — here's everywhere Core Artworks can help bring your project to life.
          </p>
        </div>
      </section>

      {/* 2. Services Grid — Clean 2-column spacious layout, large readable text */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.index} direction="up" delay={idx * 0.1}>
                <div className="group rounded-[24px] bg-[#121214] border border-white/[0.08] p-8 sm:p-12 flex flex-col justify-between h-full transition-all duration-500 hover:border-white/20 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)]">
                  <div>
                    {/* Top Row: Icon + Index */}
                    <div className="flex items-center justify-between pb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <span className="font-display text-lg sm:text-xl text-zinc-500 font-medium tracking-wider">
                        {service.index}
                      </span>
                    </div>

                    {/* Service Title — Large and easy to read */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white uppercase leading-[1.1] mb-5 group-hover:text-white transition-colors">
                      {service.title}
                    </h2>

                    {/* Description — Generous size, spacious line-height */}
                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Tag Chips — Clean rounded pills with readable font */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 text-sm font-medium transition-all duration-300 group-hover:border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => handleStartService(service)}
                      className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-zinc-300 transition-colors group/btn"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Production Steps — Clean & minimal linear sequence */}
      <section className="py-20 border-t border-white/[0.08] bg-[#070709]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-14 space-y-4">
            <span className="eyebrow-accent text-zinc-400">Our Process</span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase leading-[1.08]">
              How We <span className="is-outline">Execute</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Every project follows an established production pipeline designed for clarity, regular client feedback, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Brief', desc: 'We review your goals, creative references, technical specs, and target audience.' },
              { step: '02', title: 'Concept & Roughs', desc: 'Initial compositional thumbnails, silhouettes, and color keys submitted for your review.' },
              { step: '03', title: 'Detailing & Polish', desc: 'Full render pass with lighting, high-frequency textures, typography, and effects.' },
              { step: '04', title: 'Master Delivery', desc: 'Organized layered files, print-ready PDFs, high-res PNGs, and engine-ready assets.' },
            ].map((p) => (
              <div key={p.step} className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#121214]/60 border border-white/[0.06]">
                <span className="font-display text-2xl font-bold text-zinc-500">
                  {p.step}
                </span>
                <h3 className="text-xl font-display font-semibold text-white uppercase">
                  {p.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA matching Core Artworks template */}
      <section className="py-24 lg:py-32 border-t border-white/[0.08] text-center bg-[#0a0a0b] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
          <div>
            <span className="eyebrow-accent text-zinc-400">Let's Build Something</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-[1.08]">
            Not sure which service fits? <br />
            <span className="is-outline">Let's talk it through.</span>
          </h2>

          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Tell us what you're working on and we'll point you to the right service — or blend a few together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary text-base px-8 py-4"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-ghost text-base px-8 py-4"
            >
              <span>See Our Work</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
