import { Artwork, ArtCategory } from '../types';

export const ART_CATEGORIES: ArtCategory[] = [
  {
    id: 'book-cover',
    name: 'Book Cover designs',
    slug: 'book-cover',
    tagline: 'Comic Covers, Manga Editions & Literature Jackets',
    description: 'Eye-catching typography, cinematic illustrations, and print-ready master covers for indie authors, comic creators, manga publishers, and literary novels.',
    iconName: 'BookOpen',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'comic-covers', name: 'Comic cover designs', slug: 'comic-covers', itemCount: 14, description: 'High-impact comic book covers & variant editions' },
      { id: 'manga-covers', name: 'Manga', slug: 'manga', itemCount: 12, description: 'Japanese tankobon format & serialized manga cover art' },
      { id: 'literature-covers', name: 'Literature', slug: 'literature', itemCount: 16, description: 'Classic & contemporary literary hardcover jackets' }
    ]
  },
  {
    id: 'character-design',
    name: 'Character Design',
    slug: 'character-design',
    tagline: 'Full/Half Body, Portraits, Tattoos, B&W, Colored & Mockups',
    description: 'Production-ready character art across full anatomical turnarounds, expressive portraits, detailed tattoo concepts, and presentation mockups.',
    iconName: 'User',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'full-body', name: 'Full body', slug: 'full-body', itemCount: 18, description: 'Head-to-toe turnarounds, anatomy & costume breakdowns' },
      { id: 'half-body', name: 'Half body', slug: 'half-body', itemCount: 14, description: 'Dynamic waist-up character poses & weapon stances' },
      { id: 'portraits', name: 'Portraits', slug: 'portraits', itemCount: 20, description: 'Expressive close-up character portraits & avatar icons' },
      { id: 'tattoo-designs', name: 'Tattoo Designs', slug: 'tattoo-designs', itemCount: 11, description: 'Neo-traditional, cyber-tribal & illustrative tattoo flash' },
      { id: 'colored-characters', name: 'Colored', slug: 'colored', itemCount: 22, description: 'Fully rendered, illuminated & textured color characters' },
      { id: 'black-and-white', name: 'Black and White', slug: 'black-and-white', itemCount: 15, description: 'High-contrast ink silhouettes, line art & crosshatching' },
      { id: 'character-mockups', name: 'Mockups', slug: 'mockups', itemCount: 10, description: 'In-engine 3D poses, card frames & product mockups' }
    ]
  },
  {
    id: 'album-cover',
    name: 'Album Cover Designs',
    slug: 'album-cover',
    tagline: 'Cartoon, Digital & Motion Visual Packaging',
    description: 'Stylized vinyl gatefolds, streaming singles, and animated motion canvases designed to captivate listeners across Spotify, Apple Music, and vinyl presses.',
    iconName: 'Disc',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'cartoon-album', name: 'Cartoon', slug: 'cartoon', itemCount: 12, description: 'Hand-drawn, anime & stylized cartoon album illustrations' },
      { id: 'digital-album', name: 'Digital', slug: 'digital', itemCount: 18, description: 'Photorealistic, 3D surrealist & high-tech digital cover art' },
      { id: 'motion-album', name: 'Motion', slug: 'motion', itemCount: 10, description: 'Animated Spotify Canvas video loops & teaser stings' }
    ]
  },
  {
    id: 'logo-design',
    name: 'Logo Designs',
    slug: 'logo-design',
    tagline: 'Static Monograms, Brand Marks & Esports Emblems',
    description: 'Precision vector brand identities, corporate minimalist wordmarks, dynamic streaming logos, and competitive esports team shields.',
    iconName: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'static-logos', name: 'Static', slug: 'static', itemCount: 16, description: 'Vector logomarks, typography monograms & minimalist crests' },
      { id: 'esports-logos', name: 'Esports', slug: 'esports', itemCount: 15, description: 'Aggressive mascot emblems, gaming team shields & jersey crests' }
    ]
  },
  {
    id: 'dnd-fursona',
    name: 'D&D and Fursona Artworks',
    slug: 'dnd-fursona',
    tagline: 'Tabletop RPG Characters, Fursonas & Custom Anthro Art',
    description: 'Custom tabletop RPG portraits, detailed anthro/fursona character references, party splashes, fantasy weapons, and lore-rich OC illustrations.',
    iconName: 'Shield',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'dnd-art', name: 'D&D', slug: 'dnd', itemCount: 22, description: 'D&D 5e / Pathfinder tabletop hero portraits & spellcaster scenes' },
      { id: 'fursona-art', name: 'Fursona', slug: 'fursona', itemCount: 19, description: 'Custom fursona reference sheets, anthro art & badges' }
    ]
  },
  {
    id: 'comic-manga',
    name: 'Comics and Manga',
    slug: 'comic-manga',
    tagline: 'Sequential Comic Pages, Webtoons & Manga Chapters',
    description: 'Dynamic storyboards, inked comic pages, webtoon color scrolls, screamers, and action-packed manga spreads designed for serialization.',
    iconName: 'BookMarked',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'comic-projects', name: 'Comic', slug: 'comic', itemCount: 15, description: 'Western sequential comic pages, dynamic paneling & inking' },
      { id: 'manga-projects', name: 'Manga', slug: 'manga', itemCount: 18, description: 'Screentoned Japanese-style manga spreads & webtoon scrolls' }
    ]
  },
  {
    id: 'wallpapers',
    name: 'Wallpaper',
    slug: 'wallpapers',
    tagline: 'Illustrated & Digital 4K/8K Backgrounds',
    description: 'Immersive panoramic landscapes, sci-fi cityscapes, vibrant anime sceneries, and multi-monitor 4K/8K desktop and mobile wallpapers.',
    iconName: 'Monitor',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'illustrated-wallpapers', name: 'Illustrated', slug: 'illustrated', itemCount: 20, description: 'Hand-painted landscapes, anime scenery & matte paintings' },
      { id: 'digital-wallpapers', name: 'Digital', slug: 'digital', itemCount: 18, description: '3D ray-traced, procedural & AMOLED digital backgrounds' }
    ]
  },
  {
    id: 'banners-overlays',
    name: 'Banners and Overlays',
    slug: 'banners-overlays',
    tagline: 'Social Media Banners & Twitch Streaming Packages',
    description: 'Engaging streaming overlays, animated intermission screens, social media banners, header graphics, and modular UI packages.',
    iconName: 'Layout',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'banner-designs', name: 'Banner designs', slug: 'banner-designs', itemCount: 16, description: 'Twitter/X headers, YouTube channel banners & Discord graphics' },
      { id: 'twitch-designs', name: 'Twitch designs', slug: 'twitch-designs', itemCount: 14, description: 'Animated overlays, webcam frames, alert boxes & stinger transitions' }
    ]
  }
];

export const PORTFOLIO_ARTWORKS: Artwork[] = [
  // ==========================================
  // 1. Book Cover designs
  // ==========================================
  {
    id: 'art-bc-01',
    title: 'Shadows of the Dark Knight: Variant Cover',
    category: 'book-cover',
    categoryLabel: 'Book Cover designs',
    subcategory: 'comic-covers',
    subcategoryLabel: 'Comic cover designs',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Dynamic Action Rough & Logo Placement',
    afterLabel: 'Phase 4: High-Gloss Master Comic Variant Cover',
    aspectRatio: 'portrait',
    description: 'Collector variant comic cover featuring dramatic high-angle perspective, dynamic ink hatching, and striking neon rim lighting.',
    client: 'Dark Horizon Comics',
    year: 2025,
    tools: ['Photoshop', 'Clip Studio Paint', 'InDesign'],
    tags: ['Comic Cover', 'Variant Edition', 'Dark Superhero', 'Inking'],
    featured: true,
    colorPalette: ['#09090b', '#27272a', '#52525b', '#a1a1aa', '#f4f4f5'],
    stats: { views: '21.4k', likes: '2.8k' }
  },
  {
    id: 'art-bc-02',
    title: 'Shinobi Gaiden: Volume 01 Manga Cover',
    category: 'book-cover',
    categoryLabel: 'Book Cover designs',
    subcategory: 'manga-covers',
    subcategoryLabel: 'Manga',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Tankobon volume cover illustration with custom Japanese kanji typography, vibrant character cel-shading, and cherry blossom particulate effects.',
    client: 'Shonen Zenith Press',
    year: 2025,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Manga Cover', 'Shonen', 'Cel Shading', 'Typography'],
    featured: false,
    colorPalette: ['#000000', '#18181b', '#71717a', '#ffffff'],
    stats: { views: '16.8k', likes: '1.9k' }
  },
  {
    id: 'art-bc-03',
    title: 'The Obsidian Throne: Hardcover Literature Edition',
    category: 'book-cover',
    categoryLabel: 'Book Cover designs',
    subcategory: 'literature-covers',
    subcategoryLabel: 'Literature',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Luxury dust jacket designed for an epic dark fantasy novel. Features gold-embossed serif typography, parchment texture, and monolithic world architecture.',
    client: 'Tor & Orbit Fantasy Press',
    year: 2024,
    tools: ['Photoshop', 'InDesign', 'Illustrator'],
    tags: ['Literature', 'Hardcover', 'Gold Foil', 'Dark Fantasy'],
    featured: true,
    colorPalette: ['#050507', '#1c1c21', '#52525b', '#e4e4e7', '#ffffff'],
    stats: { views: '27.9k', likes: '3.6k' }
  },

  // ==========================================
  // 2. Character Design
  // ==========================================
  {
    id: 'art-cd-01',
    title: 'Valkyrie Protocol: Unit 09 Full-Body Turnaround',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'full-body',
    subcategoryLabel: 'Full body',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Anatomical Line & Silhouette',
    afterLabel: 'Phase 3: Material Definition & Specular Pass',
    aspectRatio: 'portrait',
    description: 'Complete full-body character turnaround featuring modular ballistic exo-plating, tactical holographic visor, and carbon-fiber textiles for game animation.',
    client: 'Apex Cyberware Interactive',
    year: 2025,
    tools: ['ZBrush', 'Photoshop', 'Procreate'],
    tags: ['Full Body', 'Cyberpunk', 'Character Design', 'Exosuit'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#3f3f46', '#e4e4e7', '#ffffff'],
    stats: { views: '29.5k', likes: '4.2k' }
  },
  {
    id: 'art-cd-02',
    title: 'Kaelen: The Ashen Spellblade Half-Body Stance',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'half-body',
    subcategoryLabel: 'Half body',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Dynamic waist-up character pose highlighting filigree armor detailing, rune-inscribed gauntlets, and arcane particle swirl effects.',
    client: 'Mythic Forge Studios',
    year: 2025,
    tools: ['Photoshop', 'Clip Studio Paint'],
    tags: ['Half Body', 'Spellblade', 'Dynamic Pose', 'Fantasy Art'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#52525b', '#d4d4d8'],
    stats: { views: '15.2k', likes: '1.8k' }
  },
  {
    id: 'art-cd-03',
    title: 'Archmage Seraphina: High-Res Royal Portrait',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'portraits',
    subcategoryLabel: 'Portraits',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Expressive digital painted character portrait with subtle rim lighting, lifelike micro-skin texture, and atmospheric silver gradients.',
    client: 'Elysium Chronicles',
    year: 2025,
    tools: ['Photoshop', 'Procreate'],
    tags: ['Portraits', 'Character Art', 'Digital Painting', 'Lighting'],
    featured: true,
    colorPalette: ['#000000', '#1c1c21', '#71717a', '#ffffff'],
    stats: { views: '32.1k', likes: '4.9k' }
  },
  {
    id: 'art-cd-04',
    title: 'Ouroboros Dragon: Neo-Tribal Tattoo Concept',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'tattoo-designs',
    subcategoryLabel: 'Tattoo Designs',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Sleeve tattoo design blending dark cybernetics with ancient mythological dragons. Vector-clean linework ready for stencil transfer.',
    client: 'Private Commission',
    year: 2025,
    tools: ['Illustrator', 'Clip Studio Paint'],
    tags: ['Tattoo Designs', 'Neo-Tribal', 'Linework', 'Flash Art'],
    featured: false,
    colorPalette: ['#000000', '#18181b', '#52525b', '#ffffff'],
    stats: { views: '18.3k', likes: '2.1k' }
  },
  {
    id: 'art-cd-05',
    title: 'Solaris Knight: Master Colored Illustration',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'colored-characters',
    subcategoryLabel: 'Colored',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'landscape',
    description: 'Fully colored cinematic character illustration showcasing volumetric sunlight illumination, reflective plate armor, and dramatic backdrop.',
    client: 'Aegis Interactive',
    year: 2024,
    tools: ['Photoshop', 'Blender'],
    tags: ['Colored', 'Full Color', 'Cinematic Lighting', 'Knight'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#71717a', '#ffffff'],
    stats: { views: '14.1k', likes: '1.6k' }
  },
  {
    id: 'art-cd-06',
    title: 'Grim Reaper: Inked Black & White Silhouette',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'black-and-white',
    subcategoryLabel: 'Black and White',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Pencil Thumbnail Composition',
    afterLabel: 'Phase 4: Pure Ink Black & White Crosshatching',
    aspectRatio: 'portrait',
    description: 'Intricate monochrome ink artwork emphasizing deep blacks, delicate crosshatch feathering, and chilling skeletal focal points.',
    client: 'Gothic Noir Studio',
    year: 2025,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Black and White', 'Inking', 'Crosshatching', 'Dark Art'],
    featured: true,
    colorPalette: ['#000000', '#121215', '#71717a', '#ffffff'],
    stats: { views: '22.8k', likes: '3.1k' }
  },
  {
    id: 'art-cd-07',
    title: 'Cyber Assassin: Production 3D Rigging Mockup',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'character-mockups',
    subcategoryLabel: 'Mockups',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Character presentation mockup featuring T-pose and action pose renders framed inside game engine diagnostic sheets.',
    client: 'Vector FPS Studios',
    year: 2025,
    tools: ['ZBrush', 'Blender', 'Substance Painter'],
    tags: ['Mockups', '3D Model', 'Game Ready', 'Rigging'],
    featured: false,
    colorPalette: ['#070709', '#18181b', '#3f3f46', '#a1a1aa', '#ffffff'],
    stats: { views: '11.9k', likes: '1.3k' }
  },

  // ==========================================
  // 3. Album Cover Designs
  // ==========================================
  {
    id: 'art-ac-01',
    title: 'Lofi Midnight Beats: Cartoon Vinyl Sleeve',
    category: 'album-cover',
    categoryLabel: 'Album Cover Designs',
    subcategory: 'cartoon-album',
    subcategoryLabel: 'Cartoon',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Cozy, stylized cartoon album illustration featuring a rainy late-night workstation, ambient desk lamp glow, and retro cassette decks.',
    client: 'Chillhop & Lofi Records',
    year: 2025,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Cartoon', 'Album Cover', 'Lofi Aesthetic', 'Stylized Art'],
    featured: true,
    colorPalette: ['#09090b', '#1c1c21', '#52525b', '#e4e4e7', '#ffffff'],
    stats: { views: '25.6k', likes: '3.7k' }
  },
  {
    id: 'art-ac-02',
    title: 'Celestial Resonance: 3D Digital Synthwave EP',
    category: 'album-cover',
    categoryLabel: 'Album Cover Designs',
    subcategory: 'digital-album',
    subcategoryLabel: 'Digital',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Abstract Color & Frequency Draft',
    afterLabel: 'Phase 4: High-End Raytraced Digital Master',
    aspectRatio: 'square',
    description: 'Surrealist 3D digital cover art with chromatic dispersion prisms, floating geometric monolithic blocks, and Swiss typography.',
    client: 'Astral Wave Records',
    year: 2025,
    tools: ['Cinema 4D', 'Octane Render', 'Photoshop'],
    tags: ['Digital', 'Synthwave', '3D Artwork', 'Album Packaging'],
    featured: true,
    colorPalette: ['#000000', '#1c1c21', '#52525b', '#d4d4d8', '#ffffff'],
    stats: { views: '28.1k', likes: '3.9k' }
  },
  {
    id: 'art-ac-03',
    title: 'Hyperdrive Bass: Animated Spotify Motion Canvas',
    category: 'album-cover',
    categoryLabel: 'Album Cover Designs',
    subcategory: 'motion-album',
    subcategoryLabel: 'Motion',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Dynamic 9:16 vertical motion cover engineered for Spotify Canvas and Apple Music animated album releases with seamless 8-second loops.',
    client: 'Bass Dimension Records',
    year: 2025,
    tools: ['After Effects', 'Cinema 4D', 'Photoshop'],
    tags: ['Motion', 'Spotify Canvas', 'Looping Animation', 'Visualizer'],
    featured: false,
    colorPalette: ['#000000', '#18181b', '#71717a', '#ffffff'],
    stats: { views: '19.4k', likes: '2.5k' }
  },

  // ==========================================
  // 4. Logo Designs
  // ==========================================
  {
    id: 'art-ld-01',
    title: 'Vanguard Audio: Minimalist Static Wordmark & Monogram',
    category: 'logo-design',
    categoryLabel: 'Logo Designs',
    subcategory: 'static-logos',
    subcategoryLabel: 'Static',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Geometric vector monogram with golden-ratio proportions, custom kerning, and negative space soundwave integration.',
    client: 'Vanguard Studios',
    year: 2025,
    tools: ['Illustrator', 'InDesign'],
    tags: ['Static', 'Logo Design', 'Monogram', 'Minimalist'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#71717a', '#f4f4f5'],
    stats: { views: '17.3k', likes: '2.1k' }
  },
  {
    id: 'art-ld-02',
    title: 'Apex Titan Esports: Monochromatic Team Shield Emblem',
    category: 'logo-design',
    categoryLabel: 'Logo Designs',
    subcategory: 'esports-logos',
    subcategoryLabel: 'Esports',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Vector Grid & Silhouette Draft',
    afterLabel: 'Phase 4: Master Vector Identity & Shield Crest',
    aspectRatio: 'square',
    description: 'Aggressive vector mascot emblem engineered for professional tournament jerseys, broadcast overlays, and merchandise embroidery.',
    client: 'Apex Titan Gaming Org',
    year: 2025,
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Esports', 'Gaming Logo', 'Vector Emblem', 'Team Crest'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#3f3f46', '#d4d4d8', '#ffffff'],
    stats: { views: '26.8k', likes: '3.6k' }
  },

  // ==========================================
  // 5. D&D and Fursona Artworks
  // ==========================================
  {
    id: 'art-df-01',
    title: 'Lord Ignatius: Dragonborn Paladin of Vengeance',
    category: 'dnd-fursona',
    categoryLabel: 'D&D and Fursona Artworks',
    subcategory: 'dnd-art',
    subcategoryLabel: 'D&D',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Pencil Anatomy & Plate Armor Sketch',
    afterLabel: 'Phase 4: Full Color & Divine Aura Lighting',
    aspectRatio: 'portrait',
    description: 'Custom commission of an obsidian-scaled Dragonborn Oath of Vengeance Paladin wielding a radiant greatsword with intricate runic engravings.',
    client: 'Private Tabletop Collector',
    year: 2025,
    tools: ['Photoshop', 'Clip Studio Paint'],
    tags: ['D&D', 'Tabletop RPG', 'Dragonborn', 'Paladin', 'Character Art'],
    featured: true,
    colorPalette: ['#09090b', '#1c1c21', '#52525b', '#d4d4d8', '#ffffff'],
    stats: { views: '33.4k', likes: '4.8k' }
  },
  {
    id: 'art-df-02',
    title: 'Zephyr: Cybernetic Snow Leopard Anthro Reference Sheet',
    category: 'dnd-fursona',
    categoryLabel: 'D&D and Fursona Artworks',
    subcategory: 'fursona-art',
    subcategoryLabel: 'Fursona',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'landscape',
    description: 'Comprehensive 3-angle anthro reference sheet featuring paw pads, cybernetic arm articulation, markings map, and color hex swatches.',
    client: 'Private Fursona Collector',
    year: 2025,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Fursona', 'Anthro Art', 'Reference Sheet', 'Cyber Leopard'],
    featured: true,
    colorPalette: ['#070709', '#18181b', '#3f3f46', '#a1a1aa', '#ffffff'],
    stats: { views: '28.8k', likes: '3.9k' }
  },

  // ==========================================
  // 6. Comics and Manga
  // ==========================================
  {
    id: 'art-cm-01',
    title: 'Grim Horizon: Climactic Comic Action Page',
    category: 'comic-manga',
    categoryLabel: 'Comics and Manga',
    subcategory: 'comic-projects',
    subcategoryLabel: 'Comic',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Dynamic sequential comic book page with multi-panel diagonal action flow, deep shadows, and cinematic sound effect lettering.',
    client: 'Dark Horizon Press',
    year: 2025,
    tools: ['Clip Studio Paint EX', 'Photoshop'],
    tags: ['Comic', 'Sequential Art', 'Paneling', 'Action Scene'],
    featured: false,
    colorPalette: ['#050507', '#18181b', '#71717a', '#f4f4f5'],
    stats: { views: '16.4k', likes: '2.2k' }
  },
  {
    id: 'art-cm-02',
    title: 'Shadows of Neo-Tokyo: Inked Manga Double Spread',
    category: 'comic-manga',
    categoryLabel: 'Comics and Manga',
    subcategory: 'manga-projects',
    subcategoryLabel: 'Manga',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Dynamic Storyboard Layout & Perspective',
    afterLabel: 'Phase 4: Screentones, Speedlines & Hand Inking',
    aspectRatio: 'landscape',
    description: 'High-octane double spread rendered in authentic Japanese G-pen inking with optical screentones and kinetic perspective distortion.',
    client: 'Zenith Manga Publishing',
    year: 2025,
    tools: ['Clip Studio Paint EX', 'Photoshop'],
    tags: ['Manga', 'Double Spread', 'G-Pen Inking', 'Screentones'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#71717a', '#ffffff'],
    stats: { views: '36.9k', likes: '5.4k' }
  },

  // ==========================================
  // 7. Wallpaper
  // ==========================================
  {
    id: 'art-wp-01',
    title: 'Monolith in the Mist: 8K Illustrated Panoramic Wallpaper',
    category: 'wallpapers',
    categoryLabel: 'Wallpaper',
    subcategory: 'illustrated-wallpapers',
    subcategoryLabel: 'Illustrated',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Volumetric Value Blockout',
    afterLabel: 'Phase 4: 8K High-DPI Matte Painting Master',
    aspectRatio: 'wide',
    description: 'Ultra-wide 32:9 dual-monitor wallpaper featuring a lone monolithic obsidian tower rising through mountain mist with realistic depth of field.',
    client: 'Core Artworks Vault',
    year: 2025,
    tools: ['Blender', 'Photoshop', 'Octane Render'],
    tags: ['Wallpaper', 'Illustrated', '8K Desktop', 'Ultra-Wide', 'Monochrome'],
    featured: true,
    colorPalette: ['#050507', '#1c1c21', '#3f3f46', '#a1a1aa', '#ffffff'],
    stats: { views: '44.2k', likes: '6.5k' }
  },
  {
    id: 'art-wp-02',
    title: 'Neon Metropolis: 4K Digital AMOLED Mobile Wallpaper',
    category: 'wallpapers',
    categoryLabel: 'Wallpaper',
    subcategory: 'digital-wallpapers',
    subcategoryLabel: 'Digital',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'True #000000 black background wallpaper designed for battery-saving OLED screens with high-contrast glowing raindrop refraction.',
    client: 'Core Artworks Vault',
    year: 2025,
    tools: ['Photoshop', 'Cinema 4D'],
    tags: ['Wallpaper', 'Digital', 'AMOLED', 'Mobile Wallpaper', 'Dark Mode'],
    featured: false,
    colorPalette: ['#000000', '#121215', '#52525b', '#ffffff'],
    stats: { views: '28.1k', likes: '3.8k' }
  },

  // ==========================================
  // 8. Banners and Overlays
  // ==========================================
  {
    id: 'art-bo-01',
    title: 'Vortex Studio: Multi-Platform Social Banner Package',
    category: 'banners-overlays',
    categoryLabel: 'Banners and Overlays',
    subcategory: 'banner-designs',
    subcategoryLabel: 'Banner designs',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'wide',
    description: 'Pixel-perfect responsive header set formatted for Twitter/X headers, YouTube channel banners, Discord server graphics, and ArtStation portfolios.',
    client: 'Vortex Entertainment',
    year: 2025,
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Banner designs', 'Social Header', 'YouTube Banner', 'Twitter Header'],
    featured: false,
    colorPalette: ['#000000', '#1c1c21', '#71717a', '#ffffff'],
    stats: { views: '17.9k', likes: '2.1k' }
  },
  {
    id: 'art-bo-02',
    title: 'Phantom Stream Suite: Modular Twitch Overlay System',
    category: 'banners-overlays',
    categoryLabel: 'Banners and Overlays',
    subcategory: 'twitch-designs',
    subcategoryLabel: 'Twitch designs',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Wireframe HUD Grid & Modular Anchors',
    afterLabel: 'Phase 4: Animated OBS Package & Stinger',
    aspectRatio: 'landscape',
    description: 'Comprehensive streaming suite including starting soon screens, animated webcam borders, custom chatbox CSS, event alert badges, and stinger transitions.',
    client: 'Phantom Esports Creator',
    year: 2025,
    tools: ['After Effects', 'Photoshop', 'OBS Studio'],
    tags: ['Twitch designs', 'Stream Overlay', 'OBS Package', 'Motion Graphics'],
    featured: true,
    colorPalette: ['#070709', '#18181b', '#3f3f46', '#d4d4d8', '#ffffff'],
    stats: { views: '29.2k', likes: '3.8k' }
  }
];
