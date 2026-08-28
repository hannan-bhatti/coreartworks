import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Palette, Sparkles, MessageSquare, Github, ArrowUp, Send, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/agencyData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Grid: Branding, Newsletter, Social Badges */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black border border-white/20 p-1 flex items-center justify-center shadow-glow-sm">
                <img
                  src="/Core Artworks LOGO.png"
                  alt="Core Artworks Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-wider block">
                  CORE ARTWORKS
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono block">
                  Digital Arts &amp; Visual Production
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Core Artworks is a specialized visual development studio partnering with game developers, film producers, and digital publishers to create world-class concept art, 3D sculpts, and visual experiences.
            </p>

            {/* Social Grid Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-all"
                  title={`${s.platform} - ${s.followers || ''}`}
                >
                  {s.platform === 'Instagram' && <Instagram className="w-3.5 h-3.5" />}
                  {s.platform === 'DeviantArt' && <Palette className="w-3.5 h-3.5" />}
                  {s.platform === 'ArtStation' && <Sparkles className="w-3.5 h-3.5" />}
                  {s.platform === 'Discord' && <MessageSquare className="w-3.5 h-3.5" />}
                  {s.platform === 'GitHub' && <Github className="w-3.5 h-3.5" />}
                  <span>{s.platform}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              Studio Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Portfolio Vault
                </Link>
              </li>
              <li>
                <Link to="/inspector" className="hover:text-white transition-colors">
                  Pipeline Inspector (Sketch vs. Polish)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services &amp; 4-Stage SOP
                </Link>
              </li>
              <li>
                <Link to="/estimator" className="hover:text-white transition-colors">
                  Commission Cost Estimator
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Submit Creative Brief
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Studio Dispatch */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white">
              The Studio Dispatch
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to receive quarterly case studies, pipeline breakdowns, and milestone releases from our art directors.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="artdirector@studio.com"
                  className="w-full bg-zinc-900/90 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-black" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <span className="text-[10px] font-mono text-green-400 block animate-in fade-in">
                  Subscribed to Core Artworks Quarterly Dispatch!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Core Artworks Digital Arts Agency. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Non-Disclosure Compliant</span>
            <span>Commercial IP Transfer</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/5 transition-all flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
