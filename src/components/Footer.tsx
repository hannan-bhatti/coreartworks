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
    <footer className="bg-[#0a0a0b] border-t border-white/[0.08] pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Top Grid: Branding, Links, Studio & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none ring-0 border-none select-none"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                <img
                  src="/Core Artworks LOGO.png"
                  alt="Core Artworks Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-[0.05em] uppercase">
                Core Artworks
              </span>
            </Link>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              A digital art and design studio crafting brand identities, concept art, serialized comics, and immersive digital worlds with obsessive craft.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-zinc-500 block mb-2 font-mono">
                Direct Contact
              </span>
              <a
                href="mailto:coreartworks@gmail.com"
                className="text-sm text-white hover:text-zinc-300 underline underline-offset-4 transition-colors"
              >
                coreartworks@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-zinc-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#portfolio" className="hover:text-white transition-colors">
                  Portfolio Archive
                </a>
              </li>
              <li>
                <a href="/#disciplines" className="hover:text-white transition-colors">
                  Core Disciplines
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <a href="/services#process" className="hover:text-white transition-colors">
                  Production Pipeline
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Dispatch */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Studio Dispatch
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to receive quarterly case studies, pipeline breakdowns, and milestone releases directly from our creative directors.
            </p>

            <form onSubmit={handleNewsletter} className="space-y-3 pt-2">
              <div className="relative max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="artdirector@studio.com"
                  className="w-full bg-[#121214] border border-white/[0.08] rounded-full pl-5 pr-28 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Joined</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send className="w-3 h-3 text-black" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Social Follow Links */}
            <div className="pt-4">
              <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3 font-mono">
                Follow Along
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#121214] hover:bg-white text-zinc-400 hover:text-black border border-white/[0.08] transition-all duration-300"
                    title={s.platform}
                  >
                    {s.platform === 'Instagram' && <Instagram className="w-4 h-4" />}
                    {s.platform === 'DeviantArt' && <Palette className="w-4 h-4" />}
                    {s.platform === 'ArtStation' && <Sparkles className="w-4 h-4" />}
                    {s.platform === 'Discord' && <MessageSquare className="w-4 h-4" />}
                    {s.platform === 'GitHub' && <Github className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Core Artworks. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Obsessive Craft &amp; High Fidelity</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1.5"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
