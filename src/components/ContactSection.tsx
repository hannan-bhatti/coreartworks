import { useState, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CommissionBrief } from '../types';
import { ART_CATEGORIES } from '../data/portfolioData';

interface ContactSectionProps {
  initialBrief?: CommissionBrief | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialBrief }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    discipline: 'Book Cover design',
    budget: '$5,000 - $10,000',
    timeline: 'Standard (3-4 weeks)',
    message: '',
    ndaRequired: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If initialBrief is provided by the Commission Estimator, pre-fill form
  useEffect(() => {
    if (initialBrief) {
      setFormData((prev) => ({
        ...prev,
        discipline: initialBrief.discipline,
        budget: initialBrief.budgetRange,
        timeline: initialBrief.timeline,
        message: `${initialBrief.briefDescription}\n\nScope: ${initialBrief.scope}\nDetail Tier: ${initialBrief.complexity}\nLicensing: ${initialBrief.commercialRights ? 'Exclusive Commercial IP' : 'Personal Use'}`,
      }));
    }
  }, [initialBrief]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger subtle celebration confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ffffff', '#a1a1aa', '#52525b', '#e4e4e7'],
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Studio Intake Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Project Intake &amp; Commissioning</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              LET'S CRAFT YOUR NEXT <br />
              <span className="text-gradient-silver">VISUAL MASTERPIECE</span>.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Whether you require an iconic book or album cover, full-body character sheets, dynamic esports branding, custom D&amp;D/fursona commissions, or a full streaming suite, our artists are prepared to align on scope.
            </p>

            {/* Direct Studio Contact Cards */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Direct Creative Inquiries
                  </span>
                  <span className="text-sm font-semibold text-white font-mono">
                    commissions@coreartworks.com
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">Reply &lt; 12 hrs</span>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Studio Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Los Angeles &bull; London &bull; Tokyo (Remote Hub)
                  </span>
                </div>
                <span className="text-xs text-zinc-400 font-mono">Global Timezones</span>
              </div>
            </div>

            {/* NDA badge */}
            <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 flex items-center gap-3 text-xs text-zinc-400">
              <Shield className="w-5 h-5 text-zinc-300 flex-shrink-0" />
              <span>All submissions protected by our default bilateral Non-Disclosure Agreement.</span>
            </div>
          </div>

          {/* Right Column: Creative Brief Form */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-16 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Creative Brief Received
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our Lead Art Director has received your project parameters and will contact you at <strong className="text-zinc-200">{formData.email}</strong> with a detailed production roadmap.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        discipline: 'Book Cover designs',
                        budget: '$5,000 - $10,000',
                        timeline: 'Standard (3-4 weeks)',
                        message: '',
                        ndaRequired: true,
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-white border border-white/10"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Creative Brief Submission Form
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    Step 1 of 1
                  </span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                    />
                  </div>
                </div>

                {/* Company & Discipline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Studio / Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Interactive"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Primary Discipline *
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                    >
                      {ART_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Estimated Budget Range
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $3,500 - $8,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                    >
                      <option value="Rush (1-2 weeks)">Rush Sprint (1-2 weeks)</option>
                      <option value="Standard (3-4 weeks)">Standard Milestone (3-4 weeks)</option>
                      <option value="Flexible (6+ weeks)">Flexible / Long Term (6+ weeks)</option>
                    </select>
                  </div>
                </div>

                {/* Message / Brief Details */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Project Brief &amp; Lore / Reference Notes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the world, character specs, polygon requirements, visual references, or deliverables required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 resize-none font-sans leading-relaxed"
                  />
                </div>

                {/* Checkbox for NDA */}
                <label className="flex items-center gap-3 cursor-pointer select-none text-xs text-zinc-400">
                  <input
                    type="checkbox"
                    checked={formData.ndaRequired}
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    className="w-4 h-4 rounded bg-zinc-900 border-white/20 text-white focus:ring-0 accent-white"
                  />
                  <span>Execute mutual Non-Disclosure Agreement (NDA) prior to detailed asset review</span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-glow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Encrypting &amp; Dispatching Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Creative Brief to Art Directors</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
