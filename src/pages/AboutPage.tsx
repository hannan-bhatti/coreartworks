import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';

interface SkillItem {
  label: string;
  percent: number;
}

const SKILLS_DATA: SkillItem[] = [
  { label: 'Digital Designing', percent: 96 },
  { label: 'Color Grading', percent: 90 },
  { label: 'Character Design', percent: 93 },
  { label: 'Animation', percent: 85 },
  { label: 'Web Development', percent: 80 },
];

const TIMELINE_STEPS = [
  { step: 'Step 01', title: 'Started designing as a hobby' },
  { step: 'Step 02', title: 'Landed our first paid client' },
  { step: 'Step 03', title: 'Crossed 50 cover artworks' },
  { step: 'Step 04', title: 'Started managing full channel thumbnails & posts' },
  { step: 'Step 05', title: 'Reached 200+ designs and 50+ clients' },
  { step: 'Step 06', title: 'Branched into character design, comic artworks & new art styles' },
  { step: 'Step 07', title: 'Reached 300+ projects and 100+ clients' },
];

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // Timeline scroll line fill
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  // Skill meters animation
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(SKILLS_DATA.map(() => 0));

  // Dynamic timeline line fill calculation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const start = viewportH * 0.82;
      const end = viewportH * 0.35;
      const total = rect.height + (start - end);
      const traveled = start - rect.top;
      let progress = traveled / total;
      progress = Math.max(0, Math.min(1, progress));
      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Skill meters count up when entering viewport
  useEffect(() => {
    const currentRef = skillsRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !skillsVisible) {
          setSkillsVisible(true);

          const duration = 1400;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = Math.min((now - startTime) / duration, 1);
            // Ease-out cubic formula
            const eased = 1 - Math.pow(1 - elapsed, 3);

            setAnimatedValues(
              SKILLS_DATA.map((item) => Math.round(item.percent * eased))
            );

            if (elapsed < 1) {
              requestAnimationFrame(step);
            } else {
              setAnimatedValues(SKILLS_DATA.map((item) => item.percent));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [skillsVisible]);

  return (
    <div className="pt-32 pb-24 space-y-24 sm:space-y-32 bg-[#0a0a0b]">
      
      {/* 1. PAGE HEADER matching core-artworks/about.html */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="space-y-4 max-w-3xl">
            <div>
              <span className="eyebrow-accent text-zinc-400">About Us</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
              Architects Of <br />
              <span className="is-outline">Digital Worlds</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl">
              A digital art and design studio built by artists, for people who need their vision realized properly — brands, gamers, and individuals alike.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* 2. NARRATIVE & PHILOSOPHY GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Aside: Orbital Celestial Mark & Facts */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="w-20 h-20 text-white/90">
              <svg className="w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="250" cy="250" r="42" fill="none" stroke="#ffffff" strokeWidth="1.2" />
                <circle cx="250" cy="250" r="10" fill="#ffffff" />
                <ellipse cx="250" cy="250" rx="170" ry="60" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" transform="rotate(28 250 250)" />
                <ellipse cx="250" cy="250" rx="170" ry="60" stroke="#ffffff" strokeWidth="0.8" opacity="0.5" transform="rotate(-32 250 250)" />
              </svg>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tight">
                Who We Are
              </h2>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                Studio Identity &bull; Since 2019
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-white/[0.08]">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                  <AnimatedCounter value="300+" duration={1800} />
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                  Projects Delivered
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                  <AnimatedCounter value="100+" duration={1800} />
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                  Happy Clients
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                  <AnimatedCounter value="5" duration={1800} />
                </span>
                <span className="text-xs uppercase tracking-wider text-zinc-400">
                  Years Of Craft
                </span>
              </div>
            </div>
          </aside>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-8 space-y-8 text-zinc-300">
            <ScrollReveal direction="up" delay={0.05}>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug">
                Core Artworks is a digital artists' company that specializes in providing top-quality design solutions to brands, gamers, and individuals at an affordable cost. We believe design isn't just about creating something that looks good — it's about creating something that communicates a message, evokes emotion, and drives action.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Our team consists of experienced and talented designers, comic artists, animators, and developers who are passionate about design and dedicated to delivering exceptional results. We take pride in our ability to understand our clients' needs and work closely with them to achieve their goals. Our team is highly adaptable and can handle a diverse range of design needs, from branding and logo design to full illustrated worlds.
                </p>

                <p>
                  At Core Artworks, we believe creativity has no boundaries. We constantly push ourselves to explore new techniques, software, and design trends to stay ahead of the curve. We are committed to providing our clients with innovative and customized design solutions that help them stand out in a competitive market.
                </p>

                <p>
                  We strive to provide our clients with a seamless, hassle-free experience — from the initial consultation to the final product delivery. Our clients' satisfaction is our top priority, and we go above and beyond to make sure they're happy with the results.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. JOURNEY TIMELINE (#journey) */}
      <section id="journey" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <div className="flex justify-center">
              <span className="eyebrow-accent">Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight">
              From A Hobby To A Studio
            </h2>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto pt-6 pb-4">
          {/* Background vertical track */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[1px] bg-white/[0.08]" />

          {/* Dynamic scroll progress fill line */}
          <div
            className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-white via-zinc-200 to-zinc-500 transition-all duration-150 ease-out"
            style={{ height: `${timelineProgress * 100}%` }}
          />

          <div className="space-y-12 sm:space-y-14">
            {TIMELINE_STEPS.map((item, index) => {
              const stepFraction = (index + 0.5) / TIMELINE_STEPS.length;
              const isPassed = timelineProgress >= stepFraction;
              const isOdd = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex items-start ${
                    isOdd
                      ? 'md:flex-row-reverse md:text-right'
                      : 'md:flex-row md:text-left'
                  } pl-12 md:pl-0`}
                >
                  {/* Glowing timeline node dot */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full z-10 transition-all duration-500 ${
                      isPassed
                        ? 'bg-white border-2 border-white shadow-[0_0_12px_rgba(255,255,255,0.7)] ring-4 ring-white/10'
                        : 'bg-[#0a0a0b] border border-white/20'
                    }`}
                  />

                  {/* Step Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isOdd ? 'md:pr-12' : 'md:pl-12'
                    } group`}
                  >
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#121214]/60 border border-white/[0.06] hover:border-white/[0.16] transition-all duration-300">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 block mb-2 font-medium">
                        {item.step}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-semibold text-white tracking-wide uppercase leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CORE SKILLS (#skills) */}
      <section id="skills" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div ref={skillsRef} className="max-w-4xl mx-auto space-y-10">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="space-y-3">
              <span className="eyebrow-accent">What We're Good At</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-tight">
                Core Skills
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-7 bg-[#121214]/50 p-6 sm:p-10 rounded-2xl border border-white/[0.08]">
            {SKILLS_DATA.map((skill, index) => {
              const currentPercent = animatedValues[index];

              return (
                <div key={skill.label} className="space-y-2.5">
                  <div className="flex items-baseline justify-between text-sm sm:text-base">
                    <span className="font-display font-medium text-white tracking-wide uppercase text-sm sm:text-base">
                      {skill.label}
                    </span>
                    <span className="font-mono text-zinc-400 font-semibold text-sm">
                      {currentPercent}%
                    </span>
                  </div>

                  {/* Progress Meter Track */}
                  <div className="h-2 w-full bg-white/[0.07] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-zinc-500 via-zinc-200 to-white rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: skillsVisible ? `${skill.percent}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER matching core-artworks/about.html */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="p-8 sm:p-16 rounded-2xl bg-[#121214] border border-white/[0.08] text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="eyebrow-accent text-zinc-400">Let's Work Together</span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
                Contact us today to bring <br className="hidden sm:inline" />
                <span className="is-outline">your vision to life.</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pt-2">
                From initial consultation to final delivery, we make the process seamless — and your satisfaction is always the priority.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const el = document.getElementById('portfolio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="btn-ghost"
              >
                <span>See Our Work</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};
