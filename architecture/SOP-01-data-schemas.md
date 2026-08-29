# SOP-01: Data Taxonomy & Model Specification

## 1. Purpose
Define the standard taxonomy, schemas, and relational invariants for Core Artworks' digital art disciplines, portfolio items, testimonials, and creative brief payloads.

## 2. Core Disciplines & Subcategory Taxonomy
1. **Book Cover designs** (`book-cover`)
   - Comic cover designs (`comic-covers`)
   - Manga (`manga-covers`)
   - Literature (`literature-covers`)

2. **Character Design** (`character-design`)
   - Full body (`full-body`)
   - Half body (`half-body`)
   - Portraits (`portraits`)
   - Tattoo Designs (`tattoo-designs`)
   - Colored (`colored-characters`)
   - Black and White (`black-and-white`)
   - Mockups (`character-mockups`)

3. **Album Cover Designs** (`album-cover`)
   - Cartoon (`cartoon-album`)
   - Digital (`digital-album`)
   - Motion (`motion-album`)

4. **Logo Designs** (`logo-design`)
   - Static (`static-logos`)
   - Esports (`esports-logos`)

5. **D&D and Fursona Artworks** (`dnd-fursona`)
   - D&D (`dnd-art`)
   - Fursona (`fursona-art`)

6. **Comics and Manga** (`comic-manga`)
   - Comic (`comic-projects`)
   - Manga (`manga-projects`)

7. **Wallpaper** (`wallpapers`)
   - Illustrated (`illustrated-wallpapers`)
   - Digital (`digital-wallpapers`)

8. **Banners and Overlays** (`banners-overlays`)
   - Banner designs (`banner-designs`)
   - Twitch designs (`twitch-designs`)

## 3. Data Integrity & Invariants
- Every artwork in `PORTFOLIO_ARTWORKS` belongs to a valid category and subcategory slug.
- The interactive Before/After inspector references artworks providing both primary image and `beforeImage`.
- Real-time pricing calculations in `CommissionEstimator` dynamically load the subcategories of the active discipline.
