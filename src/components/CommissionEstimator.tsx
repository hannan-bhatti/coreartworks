import React, { useState, useMemo } from 'react';
import { ART_CATEGORIES } from '../data/portfolioData';
import { Calculator, Check, ArrowRight, Shield, Copy } from 'lucide-react';
import { CommissionBrief } from '../types';

interface CommissionEstimatorProps {
  initialDiscipline?: string;
  onSendBriefToContact: (brief: CommissionBrief) => void;
}

export const CommissionEstimator: React.FC<CommissionEstimatorProps> = ({
  initialDiscipline = 'book-cover',
  onSendBriefToContact
}) => {
  const [discipline, setDiscipline] = useState<string>(initialDiscipline);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [complexity, setComplexity] = useState<'Standard' | 'High Detail' | 'Cinematic Masterpiece'>('High Detail');
  const [timeline, setTimeline] = useState<'Rush (1-2 wks)' | 'Standard (3-4 wks)' | 'Flexible (6+ wks)'>('Standard (3-4 wks)');
  const [commercialRights, setCommercialRights] = useState<boolean>(true);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Active Category Object
  const currentCategory = useMemo(() => {
    return ART_CATEGORIES.find((c) => c.id === discipline) || ART_CATEGORIES[0];
  }, [discipline]);

  // Subcategories for active category
  const availableSubcategories = currentCategory.subcategories;

  // Base pricing matrix per discipline
  const baseRates: Record<string, number> = {
    'book-cover': 1200,
    'character-design': 1500,
    'album-cover': 1100,
    'logo-design': 800,
    'dnd-fursona': 950,
    'comic-manga': 1400,
    'wallpapers': 650,
    'banners-overlays': 750,
  };

  // Complexity multipliers
  const complexityMultipliers = {
    'Standard': 1.0,
    'High Detail': 1.35,
    'Cinematic Masterpiece': 1.85,
  };

  // Timeline multipliers
  const timelineMultipliers = {
    'Rush (1-2 wks)': 1.4,
    'Standard (3-4 wks)': 1.0,
    'Flexible (6+ wks)': 0.9,
  };

  // Calculate total estimate range
  const calculation = useMemo(() => {
    const base = baseRates[discipline] || 2000;
    const compMult = complexityMultipliers[complexity];
    const timeMult = timelineMultipliers[timeline];
    const rightsMultiplier = commercialRights ? 1.25 : 1.0;

    const singleItemPrice = Math.round(base * compMult * timeMult * rightsMultiplier);
    const totalPrice = singleItemPrice * quantity;

    const minRange = Math.round(totalPrice * 0.9);
    const maxRange = Math.round(totalPrice * 1.15);

    return {
      single: singleItemPrice,
      total: totalPrice,
      minFormatted: `$${minRange.toLocaleString()}`,
      maxFormatted: `$${maxRange.toLocaleString()}`,
      deposit: `$${Math.round(totalPrice * 0.3).toLocaleString()}`
    };
  }, [discipline, complexity, timeline, commercialRights, quantity]);

  const activeSubcategoryName = useMemo(() => {
    const found = availableSubcategories.find((s) => s.id === selectedSubcategory);
    return found ? found.name : availableSubcategories[0]?.name || 'Standard Deliverable';
  }, [availableSubcategories, selectedSubcategory]);

  const generateBriefObject = (): CommissionBrief => {
    return {
      clientName: '',
      email: '',
      discipline: currentCategory.name,
      subcategory: activeSubcategoryName,
      scope: `${quantity} ${quantity === 1 ? 'Asset / Visual' : 'Assets / Deliverables'}`,
      complexity,
      timeline,
      commercialRights,
      budgetRange: `${calculation.minFormatted} - ${calculation.maxFormatted}`,
      briefDescription: `Commission inquiry for ${quantity}x ${activeSubcategoryName} in ${currentCategory.name}. Complexity: ${complexity}. Timeline: ${timeline}. Commercial Rights: ${commercialRights ? 'Yes (Full IP Buyout)' : 'Personal / Non-Commercial'}.`,
    };
  };

  const handleCopySummary = () => {
    const brief = generateBriefObject();
    const text = `CORE ARTWORKS PROJECT ESTIMATE BRIEF:\n• Discipline: ${brief.discipline} (${brief.subcategory})\n• Scope: ${brief.scope}\n• Tier: ${brief.complexity}\n• Timeline: ${brief.timeline}\n• Commercial Rights: ${commercialRights ? 'Full IP Buyout' : 'Non-Commercial'}\n• Estimated Budget: ${brief.budgetRange}\n• 30% Milestone Deposit: ${calculation.deposit}`;
    navigator.clipboard.writeText(text);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <section id="estimator" className="py-24 relative bg-[#08080b] border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Calculator className="w-3.5 h-3.5 text-white" />
            <span>Deterministic Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            PROJECT COMMISSION ESTIMATOR
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Configure your creative scope, timeline urgency, and licensing parameters to obtain an instantaneous, transparent production estimate.
          </p>
        </div>

        {/* Two-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
            
            {/* Step 1: Discipline Category */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center justify-between">
                <span>1. Select Primary Discipline:</span>
                <span className="text-zinc-300 font-bold">{currentCategory.name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ART_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setDiscipline(cat.id);
                      setSelectedSubcategory(cat.subcategories[0]?.id || '');
                    }}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-medium ${
                      discipline === cat.id
                        ? 'bg-zinc-800 text-white border-white/40 shadow-glow-sm'
                        : 'bg-zinc-900/60 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold">{cat.name.split('&')[0]}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{cat.subcategories.length} sub-types</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Subcategory */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                2. Specialized Deliverable Subcategory:
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSubcategories.map((sub) => {
                  const isSelected = selectedSubcategory === sub.id || (!selectedSubcategory && sub.id === availableSubcategories[0].id);
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubcategory(sub.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all border ${
                        isSelected
                          ? 'bg-white text-black border-white shadow-md font-semibold'
                          : 'bg-zinc-900/80 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {sub.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scope / Asset Count */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400">
                <span>3. Asset Quantity / Scope:</span>
                <span className="text-white font-bold text-sm">{quantity} {quantity === 1 ? 'Asset' : 'Assets'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>1 Key Asset</span>
                <span>5 Milestone Batch</span>
                <span>10 Production Suite</span>
              </div>
            </div>

            {/* Step 4: Complexity / Fidelity Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                4. Fidelity &amp; Detail Complexity:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['Standard', 'High Detail', 'Cinematic Masterpiece'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setComplexity(tier)}
                    className={`p-3 rounded-xl text-center border transition-all text-xs ${
                      complexity === tier
                        ? 'bg-zinc-800 text-white border-white/40 shadow-glow-sm'
                        : 'bg-zinc-900/60 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold">{tier}</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">
                      {tier === 'Standard' ? 'Clean production grade' : tier === 'High Detail' ? 'Hero asset & micro-polish' : 'Museum 8K & full VFX'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Timeline & Commercial Rights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Timeline */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Timeline Urgency:
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white/30"
                >
                  <option value="Standard (3-4 wks)">Standard (3-4 weeks)</option>
                  <option value="Rush (1-2 wks)">Rush Sprint (1-2 weeks, +40%)</option>
                  <option value="Flexible (6+ wks)">Flexible Milestone (6+ weeks, -10%)</option>
                </select>
              </div>

              {/* Commercial Rights Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Commercial Rights:
                </label>
                <button
                  onClick={() => setCommercialRights(!commercialRights)}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                    commercialRights
                      ? 'bg-zinc-900 text-white border-white/30'
                      : 'bg-zinc-900/60 text-zinc-400 border-white/5'
                  }`}
                >
                  <span>{commercialRights ? 'Full Exclusive IP Buyout' : 'Personal / Non-Commercial'}</span>
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${commercialRights ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Price Summary & Brief Payload Export */}
          <div className="lg:col-span-5 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 sticky top-28 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Production Estimate
              </span>
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono">
                USD
              </span>
            </div>

            {/* Estimated Price Range Big Display */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight text-gradient-silver">
                {calculation.minFormatted} - {calculation.maxFormatted}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Estimated 30% Milestone Deposit: <span className="text-white font-bold">{calculation.deposit}</span>
              </div>
            </div>

            {/* Structured Scope Breakdown */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>Selected Discipline:</span>
                <span className="text-white font-medium">{currentCategory.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>Deliverable Subcategory:</span>
                <span className="text-white font-medium">{activeSubcategoryName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>Quantity / Deliverables:</span>
                <span className="text-white font-medium">{quantity} Assets</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>Detail Tier:</span>
                <span className="text-white font-medium">{complexity}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>Turnaround Sprint:</span>
                <span className="text-white font-medium">{timeline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900 text-zinc-400">
                <span>IP / Licensing:</span>
                <span className="text-white font-medium">{commercialRights ? 'Exclusive Buyout Included' : 'Portfolio Only'}</span>
              </div>
            </div>

            {/* Guarantees */}
            <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2 text-[11px] text-zinc-400">
              <div className="flex items-center gap-2 text-white font-medium">
                <Shield className="w-3.5 h-3.5 text-zinc-300" />
                <span>Core Artworks Production Guarantees:</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-zinc-400">
                <li>2 Full Iteration Feedback Rounds Per Milestone</li>
                <li>Layered Master PSD / FBX / Engine Project Files</li>
                <li>Strict Mutual Non-Disclosure Agreement (NDA)</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onSendBriefToContact(generateBriefObject())}
                className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <span>Transfer Estimate to Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopySummary}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-xs border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                {copiedBrief ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-semibold">Estimate Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Estimate Summary</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
