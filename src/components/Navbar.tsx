import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Palette, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/agencyData';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Disciplines', href: '#disciplines' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Inspector', href: '#inspector' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Estimator', href: '#estimator', onClick: onOpenEstimator },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-black border border-white/20 p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-white shadow-glow-sm">
            <img
              src="/Core Artworks LOGO.png"
              alt="Core Artworks Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              CORE ARTWORKS
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
              Digital Arts & VisDev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Social Badges */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Social Quick Links */}
          <div className="flex items-center gap-2 pr-2 border-r border-zinc-800">
            <a
              href="https://instagram.com/coreartworks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Core Artworks on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://deviantart.com/coreartworks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Core Artworks on DeviantArt"
            >
              <Palette className="w-4 h-4" />
            </a>
            <a
              href="https://discord.gg/coreartworks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Discord Community"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-glow-sm flex items-center gap-1.5"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenContact}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold bg-white text-black rounded-lg"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0d] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-white/10 rounded-lg border border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.slice(0, 3).map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white text-xs flex items-center gap-1 bg-zinc-900 px-3 py-1.5 rounded-md border border-white/5"
                >
                  {s.platform}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-lg"
            >
              Start Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
