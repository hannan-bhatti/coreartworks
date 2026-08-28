# Project Findings & Discoveries

## Core Requirements (Phase 1 Discovery)
- **Brand**: Core Artworks — premier Digital Arts agency.
- **Tone & Palette**: Monochrome (Black `#000000`/`#09090b`, Grey `#18181b`/`#27272a`/`#71717a`, White `#ffffff`/`#f4f4f5`) with refined ambient lighting, glassmorphism, and high-contrast editorial typography.
- **Social Channels**: Instagram, DeviantArt, ArtStation, Discord, GitHub.
- **Target Deployment**: Clean static/client-ready web application exportable to GitHub & Vercel.
- **Key Modules**:
  1. Header / Navigation with Brand Logo (`Core Artworks LOGO.png`), quick inquiry CTA, and category jump-links.
  2. Hero Section with dynamic agency manifesto, featured reel/spotlight, and quick stats (Artworks Delivered, Global Clients, Art Directors, Awards).
  3. Services & Specializations overview with interactive service cards.
  4. Deep Digital Art Portfolio Matrix (Categorized by Concept Art, 3D Modeling/Sculpting, 2D/Editorial Illustration, VFX & Motion, Brand Identity & UI/UX, each with subcategories and interactive filters).
  5. Experience-enhancing features:
     - **Interactive Before & After Inspector** (Sketch to Final Illustration / Clay 3D Sculpt to Rendered Concept).
     - **High-Res Lightbox Inspector** with artwork specs, color palette swatches, client tags, and tools list.
     - **Interactive Commission & Project Cost Estimator** with instant brief generation.
     - **Interactive Client Testimonials Showcase** with ratings and company tags.
     - **Searchable FAQ Accordion** organized by Licensing, Timelines, NDAs, and Deliverables.
     - **Creative Brief & Contact Form** with payload validation and direct submission feedback.
     - **Rich Footer** with socials (Instagram, DeviantArt, ArtStation, etc.), quick links, newsletter signup, and copyright.

## Technology Stack Recommendation
- **Framework**: React 18 + Vite + Tailwind CSS + TypeScript + Lucide React + Framer Motion (for fluid, modern animations and zero-config instant deployment to Vercel).
- **Architecture**: A.N.T. 3-Layer structure with `architecture/` SOPs, deterministic data/scripts, and modular components.
