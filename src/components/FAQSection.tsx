import React, { useState, useMemo } from 'react';
import { FAQ_ITEMS } from '../data/agencyData';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Licensing & IP', 'Process & Pipeline', 'Pricing & Turnaround', 'Deliverables & Specs'];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="faq" className="py-28 lg:py-36 relative bg-[#0a0a0b] border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="space-y-4 mb-16 text-center">
          <div>
            <span className="eyebrow-accent text-zinc-400">Transparency &amp; FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight uppercase leading-[1.05]">
            Frequently Asked <span className="is-outline">Questions</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Clarity on licensing, NDA protocols, milestone pacing, and technical deliverables.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="space-y-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white bg-[#121214] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. NDA, milestones, PSD files)..."
              className="w-full bg-[#121214] border border-white/[0.08] rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/25 transition-colors"
            />
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-zinc-500 text-xs">
              No matching questions found. Ask us directly below!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#121214] border border-white/[0.08] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-zinc-400 border border-white/[0.08]">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-white font-display uppercase tracking-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/[0.06] bg-black/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#121214] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase tracking-tight">
              Have a specific question or custom NDA requirement?
            </h4>
            <p className="text-xs text-zinc-400">Our creative directors review briefs within one business day.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="btn-primary !py-2.5 !px-5 text-xs whitespace-nowrap flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask Us Directly</span>
          </button>
        </div>

      </div>
    </section>
  );
};
