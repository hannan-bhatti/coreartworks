import React from 'react';
import { CommissionEstimator } from '../components/CommissionEstimator';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommissionBrief } from '../types';
import { Calculator, ShieldCheck, DollarSign, Clock } from 'lucide-react';

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
    <div className="pt-28 pb-20 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Calculator className="w-3.5 h-3.5 text-white" />
            <span>Deterministic Pricing Calculator</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            COMMISSION &amp; PRODUCTION <br />
            <span className="text-gradient-silver">COST ESTIMATOR</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Configure your asset quantities, complexity tiers, turnaround urgency, and commercial licensing options. Generate an instant brief and calculate deterministic project pricing.
          </p>
        </div>
      </div>

      {/* Estimator Engine */}
      <CommissionEstimator
        initialDiscipline={initialDiscipline}
        onSendBriefToContact={handleTransfer}
      />

      {/* Pricing Transparency & Payment Terms Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-zinc-950 border border-white/10">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <DollarSign className="w-4 h-4 text-zinc-300" />
              <span>3-Stage Milestone Billing</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard payments split across 30% brief approval, 40% halfway clay/value lock, and 30% master delivery. Escrow support available.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Clock className="w-4 h-4 text-zinc-300" />
              <span>Predictable Delivery Milestones</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Strict delivery timelines backed by dedicated art squads. Rush sprint options available for publisher pitch and convention deadlines.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Full IP &amp; Commercial Transfer</span>
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
