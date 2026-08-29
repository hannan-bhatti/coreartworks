# SOP-01: Data Taxonomy & Model Specification

## 1. Purpose
Define the standard taxonomy, schemas, and relational invariants for Core Artworks' digital art disciplines, portfolio items, testimonials, and creative brief payloads.

## 2. Core Disciplines (8 Key Categories)
1. **Book Cover design** (`book-cover`)
2. **Character Design** (`character-design`)
3. **Album Cover design** (`album-cover`)
4. **Logo Designs** (`logo-design`)
5. **D&D and Fursona Artworks** (`dnd-fursona`)
6. **Comic and Manga Projects** (`comic-manga`)
7. **Wallpapers** (`wallpapers`)
8. **Banners and Overlays** (`banners-overlays`)

*(Subcategories to be populated via forthcoming specialized specification)*

## 3. Data Integrity & Self-Annealing Rules
- All artwork objects MUST contain valid high-resolution image URLs, categories, subcategories, client credits, tools used, and tags.
- Interactive Before/After artwork MUST provide both primary final artwork and source sketch/clay model asset.
- Commission Estimator calculations must follow deterministic formula multipliers.
