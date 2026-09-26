import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Instagram, Youtube, Check } from 'lucide-react';
import { CommissionBrief } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';

interface ContactPageProps {
  initialBrief?: CommissionBrief | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialBrief }) => {
  const location = useLocation();
  const briefFromState = location.state?.prefilledBrief || initialBrief;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Digital Arts & Cover Design',
    budget: '$250 – $750',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (briefFromState) {
      setFormData((prev) => ({
        ...prev,
        projectType: briefFromState.discipline || prev.projectType,
        budget: briefFromState.budgetRange || prev.budget,
        message: briefFromState.briefDescription
          ? `${briefFromState.briefDescription}\n\nScope: ${briefFromState.scope || ''}`
          : prev.message,
      }));
    }
  }, [briefFromState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 space-y-16 bg-[#0a0a0b] min-h-screen">
      
      {/* 1. PAGE HEADER matching core-artworks/contact.html */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="space-y-4 max-w-3xl">
            <div>
              <span className="eyebrow-accent text-zinc-400">Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
              Let's Start <br />
              <span className="is-outline">Your Project</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl">
              Have a design or project in mind? Reach out and tell us about it — we'd love to help bring it to life.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. CONTACT GRID matching core-artworks/contact.html */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Aside: We'd Love To Hear From You */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-tight leading-tight">
                  We'd Love To Hear <br className="hidden sm:inline" />From You
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  Whether it's a single cover illustration or a full brand world, tell us what you're building and we'll get back to you within one business day.
                </p>
              </div>

              {/* Direct Email Item */}
              <div className="pt-8 border-t border-white/[0.08] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/[0.15] bg-[#121214] flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:coreartworks@gmail.com"
                      className="text-base sm:text-lg font-medium text-white hover:text-zinc-300 transition-colors underline-offset-4 hover:underline"
                    >
                      coreartworks@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://instagram.com/coreartworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/[0.15] bg-[#121214] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-white hover:-translate-y-1 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com/@coreartworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-white/[0.15] bg-[#121214] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-white hover:-translate-y-1 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </aside>

          {/* Right Column: Clean Form matching core-artworks/contact.html */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="p-7 sm:p-10 lg:p-12 rounded-2xl bg-[#121214] border border-white/[0.08] shadow-2xl relative">
                
                {submitted ? (
                  <div className="p-6 sm:p-8 rounded-xl bg-[#16161a] border border-white/[0.16] flex items-center gap-4 text-left transition-all animate-in fade-in duration-300">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 font-bold">
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-white text-base font-semibold">
                        Message received.
                      </p>
                      <p className="text-zinc-400 text-sm">
                        Thanks for reaching out — we'll get back to you shortly at <span className="text-zinc-200">{formData.email || 'your email'}</span>.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="cf-name"
                          className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block"
                        >
                          Name
                        </label>
                        <input
                          id="cf-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full bg-[#16161a] border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:bg-[#121214] focus:ring-4 focus:ring-white/[0.08] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="cf-email"
                          className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block"
                        >
                          Email
                        </label>
                        <input
                          id="cf-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@email.com"
                          className="w-full bg-[#16161a] border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:bg-[#121214] focus:ring-4 focus:ring-white/[0.08] transition-all"
                        />
                      </div>
                    </div>

                    {/* Project Type & Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="cf-type"
                          className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block"
                        >
                          Project Type
                        </label>
                        <select
                          id="cf-type"
                          required
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#16161a] border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:bg-[#121214] focus:ring-4 focus:ring-white/[0.08] transition-all appearance-none cursor-pointer"
                        >
                          <option value="Digital Arts & Cover Design">Digital Arts &amp; Cover Design</option>
                          <option value="Comic & Manga Production">Comic &amp; Manga Production</option>
                          <option value="Animation & Motion">Animation &amp; Motion</option>
                          <option value="Web & App Development">Web &amp; App Development</option>
                          <option value="Something Else">Something Else</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="cf-budget"
                          className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block"
                        >
                          Budget
                        </label>
                        <select
                          id="cf-budget"
                          required
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#16161a] border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:bg-[#121214] focus:ring-4 focus:ring-white/[0.08] transition-all appearance-none cursor-pointer"
                        >
                          <option value="Under $250">Under $250</option>
                          <option value="$250 – $750">$250 – $750</option>
                          <option value="$750 – $2,000">$750 – $2,000</option>
                          <option value="$2,000+">$2,000+</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="cf-message"
                        className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block"
                      >
                        Message
                      </label>
                      <textarea
                        id="cf-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us a bit about your project..."
                        className="w-full bg-[#16161a] border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white focus:bg-[#121214] focus:ring-4 focus:ring-white/[0.08] transition-all resize-y min-h-[140px] leading-relaxed"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-4 rounded-xl text-sm font-semibold tracking-wide"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 19L19 5M19 5H8M19 5V16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      <p className="text-xs text-zinc-400 text-center">
                        We typically reply within one business day.
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
};
