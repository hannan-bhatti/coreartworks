import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { useLocation } from 'react-router-dom';
import { CommissionBrief } from '../types';
import { MapPin } from 'lucide-react';

interface ContactPageProps {
  initialBrief?: CommissionBrief | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialBrief }) => {
  const location = useLocation();
  const briefFromState = location.state?.prefilledBrief || initialBrief;

  return (
    <div className="pt-32 pb-24 space-y-16 bg-[#0a0a0b]">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-white/[0.08] pb-16">
        <div className="space-y-4 max-w-3xl">
          <div>
            <span className="eyebrow-accent text-zinc-400">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight uppercase leading-[1.02]">
            Let's Start <br />
            <span className="is-outline">Your Project</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed pt-2">
            Have a design or project in mind? Reach out and tell us about it — we'd love to help bring it to life.
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
