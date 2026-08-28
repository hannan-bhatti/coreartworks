import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useLocation } from 'react-router-dom';
import { CommissionBrief } from '../types';
import { Mail, MapPin } from 'lucide-react';

interface ContactPageProps {
  initialBrief?: CommissionBrief | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialBrief }) => {
  const location = useLocation();
  const briefFromState = location.state?.prefilledBrief || initialBrief;

  return (
    <div className="pt-28 pb-20 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <Mail className="w-3.5 h-3.5 text-white" />
            <span>Studio Inquiries &amp; Production Intake</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            COMMISSION A PROJECT / <br />
            <span className="text-gradient-silver">SUBMIT CREATIVE BRIEF</span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Fill out the creative brief parameters below. Our art directors will analyze your requirements, review timeline alignment, and respond within 12 business hours.
          </p>
        </div>
      </div>

      {/* Contact Section Form */}
      <ContactSection initialBrief={briefFromState} />

      {/* Global Studio Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-zinc-950 border border-white/10">
          
          <div className="space-y-2 p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <MapPin className="w-4 h-4 text-zinc-300" />
              <span>Americas Hub</span>
            </div>
            <p className="text-xs text-zinc-400">
              Los Angeles, California<br />
              <span className="font-mono text-zinc-500">PST / EST Synchronization</span>
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <MapPin className="w-4 h-4 text-zinc-300" />
              <span>Europe Hub</span>
            </div>
            <p className="text-xs text-zinc-400">
              London, United Kingdom<br />
              <span className="font-mono text-zinc-500">GMT / CET Synchronization</span>
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <MapPin className="w-4 h-4 text-zinc-300" />
              <span>Asia-Pacific Hub</span>
            </div>
            <p className="text-xs text-zinc-400">
              Tokyo, Japan<br />
              <span className="font-mono text-zinc-500">JST / KST Synchronization</span>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
