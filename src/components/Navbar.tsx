import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/agencyData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Disciplines', target: 'disciplines', page: '/', isAnchor: true },
    { label: 'Portfolio', target: 'portfolio', page: '/', isAnchor: true },
    { label: 'Inspector', path: '/inspector' },
    { label: 'Services', path: '/services' },
    { label: 'Process', target: 'process', page: '/services', isAnchor: true },
    { label: 'Estimator', path: '/estimator' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', target: 'faq', page: '/', isAnchor: true },
  ];

  const handleNavClick = (link: (typeof navLinks)[0], e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.isAnchor) {
      if (location.pathname === link.page) {
        const el = document.getElementById(link.target!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(link.page!);
        setTimeout(() => {
          const el = document.getElementById(link.target!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    } else {
      navigate(link.path!);
    }
  };

  const isLinkActive = (link: (typeof navLinks)[0]) => {
    if (!link.isAnchor && link.path) {
      return location.pathname === link.path;
    }
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0b]/85 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-2xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none ring-0 border-none select-none"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
            <img
              src="/Core Artworks LOGO.png"
              alt="Core Artworks Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-bold text-base tracking-[0.05em] uppercase text-white">
            Core Artworks
          </span>
        </Link>

        {/* Desktop Navigation matching Core Artworks minimal links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isLinkActive(link);
            return (
              <a
                key={link.label}
                href={link.path || `#${link.target}`}
                onClick={(e) => handleNavClick(link, e)}
                className={`nav-link text-xs tracking-wider uppercase ${active ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="btn-ghost !py-2.5 !px-5 text-xs uppercase tracking-wider"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => navigate('/contact')}
            className="sm:hidden px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-white text-black rounded-full"
          >
            Start
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
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
                href={link.path || `#${link.target}`}
                onClick={(e) => handleNavClick(link, e)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg border transition-all ${
                  isLinkActive(link)
                    ? 'bg-white text-black font-semibold border-white'
                    : 'text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-white/10 border-white/5'
                }`}
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
                navigate('/contact');
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
