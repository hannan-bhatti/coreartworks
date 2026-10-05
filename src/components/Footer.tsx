import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../data/agencyData';

export const Footer: React.FC = () => {
  const instagramLink =
    SOCIAL_LINKS.find((s) => s.platform === 'Instagram')?.url || 'https://instagram.com/coreartworks';

  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-7 sm:space-y-8">
        
        {/* 1. Brand Title with Accent Bullet */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-black text-2xl sm:text-3xl tracking-[0.24em] text-white uppercase hover:text-zinc-200 transition-colors"
          >
            <span>CORE</span>
            <span className="text-[#ff3b30] font-bold">•</span>
            <span>ARTWORKS</span>
          </Link>
        </div>

        {/* 2. Studio Tagline / Subtitle */}
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
          DIGITAL ART &amp; PRODUCTION STUDIO &middot; DESIGNED FOR AUTHORS &amp; CREATORS
        </p>

        {/* 3. Primary Navigation Row */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
          <Link to="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link to="/portfolio" className="hover:text-white transition-colors">
            PORTFOLIO
          </Link>
          <a href="/#services" className="hover:text-white transition-colors">
            SERVICES
          </a>
          <Link to="/about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
          <Link to="/contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* 4. Disciplines / Category Quick Links */}
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-500">
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            ALL WORKS
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            BOOK COVERS
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            COMIC &amp; MANGA
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            CHARACTER DESIGN
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            ALBUM COVERS
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            3D &amp; DIGITAL ART
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            LOGO &amp; BRANDING
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            WALLPAPERS
          </Link>
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            D&amp;D ARTWORKS
          </Link>
        </div>

        {/* 5. Copyright Line */}
        <div className="pt-2 text-[11px] sm:text-xs text-zinc-500 font-mono tracking-wider">
          &copy; 2019 &mdash; {new Date().getFullYear()} &middot; CORE ARTWORKS &middot; All rights reserved.
        </div>

      </div>
    </footer>
  );
};
