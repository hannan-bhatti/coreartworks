import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-7 sm:space-y-8">
        
        {/* 1. Logo & Brand Title */}
        <div className="space-y-3.5">
          <div className="flex justify-center">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <img
                src="/Core Artworks LOGO.png"
                alt="Core Artworks Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </Link>
          </div>

          <div>
            <Link
              to="/"
              className="inline-block font-display font-black text-2xl sm:text-3xl tracking-[0.24em] text-white uppercase hover:text-zinc-200 transition-colors"
            >
              CORE ARTWORKS
            </Link>
          </div>
        </div>

        {/* 2. Hero Tagline */}
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-zinc-400">
          ARCHITECTS OF DIGITAL VISIONS &amp; WORLDS
        </p>

        {/* 3. Primary Pages Navigation */}
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
          <a href="/#testimonials" className="hover:text-white transition-colors">
            TESTIMONIALS
          </a>
        </nav>

        {/* 4. Disciplines / Category Exact Deep-Links */}
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-500">
          <Link to="/portfolio" className="hover:text-zinc-300 transition-colors">
            ALL WORKS
          </Link>
          <Link to="/portfolio?category=book-cover" className="hover:text-zinc-300 transition-colors">
            BOOK COVERS
          </Link>
          <Link to="/portfolio?category=comic-manga" className="hover:text-zinc-300 transition-colors">
            COMIC &amp; MANGA
          </Link>
          <Link to="/portfolio?category=character-design" className="hover:text-zinc-300 transition-colors">
            CHARACTER DESIGN
          </Link>
          <Link to="/portfolio?category=album-cover" className="hover:text-zinc-300 transition-colors">
            ALBUM COVERS
          </Link>
          <Link to="/portfolio?category=logo-design" className="hover:text-zinc-300 transition-colors">
            LOGO &amp; BRANDING
          </Link>
          <Link to="/portfolio?category=dnd-fursona" className="hover:text-zinc-300 transition-colors">
            D&amp;D ARTWORKS
          </Link>
          <Link to="/portfolio?category=wallpapers" className="hover:text-zinc-300 transition-colors">
            WALLPAPERS
          </Link>
          <Link to="/portfolio?category=banners-overlays" className="hover:text-zinc-300 transition-colors">
            BANNERS &amp; OVERLAYS
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
