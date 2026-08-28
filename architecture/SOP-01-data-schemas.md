# SOP-01: Data Taxonomy & Model Specification

## 1. Purpose
Define the standard taxonomy, schemas, and relational invariants for Core Artworks' digital art disciplines, portfolio items, testimonials, and creative brief payloads.

## 2. Core Disciplines (Categories & Subcategories)
1. **Concept Art & Visual Development** (`concept-art`)
   - Environment Design (`env-design`)
   - Character Concept (`char-concept`)
   - Keyframe Illustration (`keyframe-art`)
   - Hard Surface & Vehicles (`vehicles-props`)
   - Creature Design (`creature-design`)
2. **3D Production & Digital Sculpting** (`3d-sculpting`)
   - 3D Character Modeling (`3d-characters`)
   - Game-Ready Hard Surface (`game-assets`)
   - High-Poly Digital Sculpting (`digital-sculpt`)
   - Procedural Environments & Shaders (`procedural-envs`)
3. **2D & Editorial Illustration** (`2d-illustration`)
   - Key Art & Splash Art (`splash-art`)
   - Graphic Novels & Storyboards (`storyboards`)
   - Card Game & TCG Art (`tcg-art`)
   - Book Covers & Promotional Murals (`promotional-art`)
4. **Motion, VFX & Animation** (`vfx-animation`)
   - Cinematic Visual Effects (`cinematic-vfx`)
   - 3D Character Rigging & Animation (`char-animation`)
   - Stylized Motion Graphics (`motion-graphics`)
   - Realtime Unreal Engine 5 VFX (`ue5-realtime`)
5. **Brand Identity & Creative Direction** (`brand-identity`)
   - Studio Branding & Typography (`studio-branding`)
   - Game UI/UX Design (`game-ui-ux`)
   - Worldbuilding & Art Direction Bible (`art-bibles`)
   - Merch & Collector's Edition Packaging (`merch-packaging`)

## 3. Data Integrity & Self-Annealing Rules
- All artwork objects MUST contain valid high-resolution image URLs, categories, subcategories, client credits, tools used, and tags.
- Interactive Before/After artwork MUST provide both primary final artwork and source sketch/clay model asset.
- Commission Estimator calculations must follow deterministic formula multipliers.
