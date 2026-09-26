import React from 'react';
import { CommissionEstimator } from '../components/CommissionEstimator';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommissionBrief } from '../types';
import { ShieldCheck, DollarSign, Clock } from 'lucide-react';

interface EstimatorPageProps {
  onSendBriefToContact: (brief: CommissionBrief) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onSendBriefToContact }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialDiscipline = location.state?.disciplineId || 'book-cover';

  const handleTransfer = (brief: CommissionBrief) => {
    onSendBriefToContact(brief);
    navigate('/contact', { state: { prefilledBrief: brief } });
  };

  return (
    <div className="pt-32 pb-24 space-y-16 bg-[#0a0a0b]">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <div className="space-y-4 max-w-3xl">
          <div>
            <span className="eyebrow-accent text-zinc-400">Deterministic Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
            Calculate Your <br />
            <span className="is-outline">Project Cost</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Configure asset requirements, complexity tiers, turnaround urgency, and commercial licensing options to generate instant deterministic pricing.
          </p>
        </div>
      </div>

      {/* Estimator Engine */}
      <CommissionEstimator
        initialDiscipline={initialDiscipline}
        onSendBriefToContact={handleTransfer}
      />

      {/* Pricing Transparency & Payment Terms Strip */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-[#121214] border border-white/[0.08]">
          
          <div className="space-y-2 p-6 rounded-2xl bg-[#0a0a0b] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-white font-bold text-sm font-display uppercase tracking-tight">
              <DollarSign className="w-4 h-4 text-zinc-300" />
              <span>3-Stage Milestone Billing</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard payments split across 30% brief approval, 40% halfway clay/value lock, and 30% master delivery.
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-2xl bg-[#0a0a0b] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-white font-bold text-sm font-display uppercase tracking-tight">
              <Clock className="w-4 h-4 text-zinc-300" />
              <span>Predictable Milestones</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Strict delivery timelines backed by dedicated art squads. Rush sprint options available for publisher deadlines.
            </p>
          </div>

          <div className="space-y-2 p-6 rounded-2xl bg-[#0a0a0b] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-white font-bold text-sm font-display uppercase tracking-tight">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Full IP Transfer</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Worldwide copyright ownership transferred upon final milestone payment. We retain zero ongoing royalties.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
