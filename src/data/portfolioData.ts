import { Artwork, ArtCategory } from '../types';

export const ART_CATEGORIES: ArtCategory[] = [
  {
    id: 'book-cover',
    name: 'Book Cover design',
    slug: 'book-cover',
    tagline: 'Bestseller Fantasy, Sci-Fi & Novel Jackets',
    description: 'Eye-catching typography, cinematic illustrations, and print-ready master covers for indie authors, commercial publishers, and web novels.',
    iconName: 'BookOpen',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'fantasy-scifi-books', name: 'Fantasy & Sci-Fi Novels', slug: 'fantasy-scifi-books', itemCount: 14, description: 'Epic fantasy, grimdark & space opera book jackets' },
      { id: 'ebook-typography', name: 'E-Book & Typography Layouts', slug: 'ebook-typography', itemCount: 10, description: 'Amazon KDP, IngramSpark & luxury hardcovers' }
    ]
  },
  {
    id: 'character-design',
    name: 'Character Design',
    slug: 'character-design',
    tagline: 'Hero Archetypes, Villains & Turnaround Model Sheets',
    description: 'Distinct silhouettes, expressive facial sheets, intricate costume designs, and production-ready character sheets for games and animation.',
    iconName: 'User',
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'hero-archetypes', name: 'Hero Archetypes & Turnarounds', slug: 'hero-archetypes', itemCount: 18, description: 'Anatomical model sheets, armor design & turnarounds' },
      { id: 'villains-monsters', name: 'Villains & Cybernetic Operatives', slug: 'villains-monsters', itemCount: 12, description: 'Sci-fi operatives, mecha pilots & anti-heroes' }
    ]
  },
  {
    id: 'album-cover',
    name: 'Album Cover design',
    slug: 'album-cover',
    tagline: 'Vinyl Sleeves, Streaming Artwork & Visual Identities',
    description: 'High-impact aesthetic cover art, gatefold packaging, cassette/vinyl layouts, and animated track visuals for artists and record labels.',
    iconName: 'Disc',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'vinyl-sleeves', name: 'Vinyl Sleeves & Gatefolds', slug: 'vinyl-sleeves', itemCount: 12, description: 'Collector vinyl jackets, foil inserts & disc art' },
      { id: 'streaming-singles', name: 'Digital & Streaming Singles', slug: 'streaming-singles', itemCount: 15, description: 'Spotify / Apple Music high-contrast album key art' }
    ]
  },
  {
    id: 'logo-design',
    name: 'Logo Designs',
    slug: 'logo-design',
    tagline: 'Esports Emblems, Brand Marks & Wordmarks',
    description: 'Dynamic vector insignia, streaming brand marks, studio logomarks, typography crests, and mascot logos with complete vector packages.',
    iconName: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'esports-mascots', name: 'Esports & Gaming Emblems', slug: 'esports-mascots', itemCount: 16, description: 'High-impact vector shields, crests & team logos' },
      { id: 'studio-wordmarks', name: 'Studio Wordmarks & Monograms', slug: 'studio-wordmarks', itemCount: 14, description: 'Luxury typography, minimalist geometric logomarks' }
    ]
  },
  {
    id: 'dnd-fursona',
    name: 'D&D and Fursona Artworks',
    slug: 'dnd-fursona',
    tagline: 'Tabletop Characters, Fursonas & Custom Anthro Art',
    description: 'Custom tabletop RPG portraits, detailed anthro/fursona character references, party splashes, fantasy weapons, and lore-rich OC illustrations.',
    iconName: 'Shield',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'dnd-tabletop', name: 'Tabletop RPG Characters & Parties', slug: 'dnd-tabletop', itemCount: 20, description: 'D&D 5e / Pathfinder character portraits & battle scenes' },
      { id: 'fursona-anthro', name: 'Fursona & Anthro Reference Sheets', slug: 'fursona-anthro', itemCount: 18, description: 'Full-body anthro character sheets, expressions & badges' }
    ]
  },
  {
    id: 'comic-manga',
    name: 'Comic and Manga Projects',
    slug: 'comic-manga',
    tagline: 'Sequential Pages, Webtoon Paneling & Manga Covers',
    description: 'Dynamic storyboards, inked comic pages, webtoon color scrolls, screamers, and action-packed manga spreads designed for serialization.',
    iconName: 'BookMarked',
    coverImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'manga-spreads', name: 'Manga Spreads & Inking', slug: 'manga-spreads', itemCount: 15, description: 'High-octane screentone action panels & dynamic inks' },
      { id: 'webtoon-color', name: 'Webtoon Vertical Color Scrolls', slug: 'webtoon-color', itemCount: 12, description: 'Full-color episodic webtoon chapters & character covers' }
    ]
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    slug: 'wallpapers',
    tagline: 'Ultra-Wide 4K/8K Desktop & Mobile Backgrounds',
    description: 'Immersive panoramic landscapes, sci-fi cityscapes, vibrant anime sceneries, and multi-monitor 4K/8K desktop and mobile wallpapers.',
    iconName: 'Monitor',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'ultrawide-desktop', name: 'Ultra-Wide 4K/8K Desktop', slug: 'ultrawide-desktop', itemCount: 22, description: 'Dual-monitor 32:9 and 21:9 panoramic landscapes' },
      { id: 'mobile-amoled', name: 'Mobile AMOLED & Vertical Sceneries', slug: 'mobile-amoled', itemCount: 16, description: 'Deep-black OLED optimized vertical wallpapers' }
    ]
  },
  {
    id: 'banners-overlays',
    name: 'Banners and Overlays',
    slug: 'banners-overlays',
    tagline: 'Twitch Stream Kits, YouTube Headers & Social Graphics',
    description: 'Engaging streaming overlays, animated intermission screens, social media banners, header graphics, and modular UI packages.',
    iconName: 'Layout',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    subcategories: [
      { id: 'stream-packages', name: 'Twitch & YouTube Stream Packs', slug: 'stream-packages', itemCount: 14, description: 'Animated overlays, webcam frames, alert boxes & stinger transitions' },
      { id: 'social-banners', name: 'Social Headers & Profile Graphics', slug: 'social-banners', itemCount: 18, description: 'Twitter/X, Discord and ArtStation header banners' }
    ]
  }
];

export const PORTFOLIO_ARTWORKS: Artwork[] = [
  // 1. Book Cover Design
  {
    id: 'art-bc-01',
    title: 'The Obsidian Throne: Dark Fantasy Hardcover',
    category: 'book-cover',
    categoryLabel: 'Book Cover design',
    subcategory: 'fantasy-scifi-books',
    subcategoryLabel: 'Fantasy & Sci-Fi Novels',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Thumbnail & Typographic Layout',
    afterLabel: 'Phase 4: Foil-Embossed Master Print Jacket',
    aspectRatio: 'portrait',
    description: 'Full dust-jacket design for a bestselling grimdark fantasy epic. Features custom metallic gold serif typography, textured parchment shading, and high-impact focal character art.',
    client: 'Tor & Orbit Fantasy Press',
    year: 2025,
    tools: ['Photoshop', 'InDesign', 'Procreate'],
    tags: ['Book Cover', 'Dark Fantasy', 'Typography', 'Foil Emboss'],
    featured: true,
    colorPalette: ['#09090b', '#27272a', '#52525b', '#a1a1aa', '#f4f4f5'],
    stats: { views: '18.4k', likes: '2.3k' }
  },
  {
    id: 'art-bc-02',
    title: 'Echoes of Sector 9: Sci-Fi E-Book Jacket',
    category: 'book-cover',
    categoryLabel: 'Book Cover design',
    subcategory: 'ebook-typography',
    subcategoryLabel: 'E-Book & Typography Layouts',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'High-contrast e-book cover optimized for thumbnail clarity on Amazon KDP and Goodreads. Showcases neon atmospheric lighting and clean bold typography.',
    client: 'Apex Publishing',
    year: 2024,
    tools: ['Photoshop', 'Illustrator'],
    tags: ['E-Book', 'Sci-Fi', 'Typography', 'Cyberpunk'],
    featured: false,
    colorPalette: ['#000000', '#18181b', '#71717a', '#ffffff'],
    stats: { views: '12.1k', likes: '1.4k' }
  },

  // 2. Character Design
  {
    id: 'art-cd-01',
    title: 'Valkyrie Protocol: Unit 09 Recon Operative',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'hero-archetypes',
    subcategoryLabel: 'Hero Archetypes & Turnarounds',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Anatomical Line & Silhouette',
    afterLabel: 'Phase 3: Material Definition & Specular Pass',
    aspectRatio: 'portrait',
    description: 'Cybernetic operative character turnaround featuring modular ballistic exo-plating, tactical holographic HUD visor, and carbon-fiber textiles.',
    client: 'Apex Cyberware Interactive',
    year: 2025,
    tools: ['ZBrush', 'Photoshop', 'Procreate'],
    tags: ['Cyberpunk', 'Character Design', 'Exosuit', 'Tactical'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#3f3f46', '#e4e4e7', '#ffffff'],
    stats: { views: '24.5k', likes: '3.4k' }
  },
  {
    id: 'art-cd-02',
    title: 'Kaelen: The Ashen Spellblade Turnaround',
    category: 'character-design',
    categoryLabel: 'Character Design',
    subcategory: 'villains-monsters',
    subcategoryLabel: 'Villains & Cybernetic Operatives',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Production-ready character sheet featuring 3-angle turnaround, weapon callouts, expression matrix, and layered armor breakdown for 3D sculptors.',
    client: 'Mythic Forge Studios',
    year: 2025,
    tools: ['Photoshop', 'Clip Studio Paint'],
    tags: ['Turnaround', 'Fantasy', 'Spellblade', 'Model Sheet'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#52525b', '#d4d4d8'],
    stats: { views: '14.7k', likes: '1.9k' }
  },

  // 3. Album Cover Design
  {
    id: 'art-ac-01',
    title: 'Celestial Resonance: Ambient / Electronic Vinyl',
    category: 'album-cover',
    categoryLabel: 'Album Cover design',
    subcategory: 'vinyl-sleeves',
    subcategoryLabel: 'Vinyl Sleeves & Gatefolds',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Abstract Color & Frequency Draft',
    afterLabel: 'Phase 4: Gatefold 300DPI Print Master',
    aspectRatio: 'square',
    description: 'Gatefold 12-inch vinyl cover artwork featuring surreal geometric prisms, chromatic dispersion, and minimalist Swiss typographic treatment.',
    client: 'Astral Wave Records',
    year: 2025,
    tools: ['Photoshop', 'Cinema 4D', 'Illustrator'],
    tags: ['Album Art', 'Vinyl Cover', 'Electronic Music', 'Minimalist'],
    featured: true,
    colorPalette: ['#050507', '#1c1c21', '#52525b', '#e4e4e7', '#ffffff'],
    stats: { views: '21.3k', likes: '2.9k' }
  },
  {
    id: 'art-ac-02',
    title: 'Voidrunner: Synthwave Single Artwork',
    category: 'album-cover',
    categoryLabel: 'Album Cover design',
    subcategory: 'streaming-singles',
    subcategoryLabel: 'Digital & Streaming Singles',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Digital single cover art tailored for Spotify Canvas animation and Apple Music Lossless banners. Features retro-futuristic grid perspective.',
    client: 'Hyperdrive Records',
    year: 2024,
    tools: ['Photoshop', 'Blender'],
    tags: ['Single Artwork', 'Synthwave', 'Digital Release'],
    featured: false,
    colorPalette: ['#000000', '#27272a', '#71717a', '#ffffff'],
    stats: { views: '11.5k', likes: '1.2k' }
  },

  // 4. Logo Designs
  {
    id: 'art-ld-01',
    title: 'Apex Titan Esports: Monochromatic Emblem',
    category: 'logo-design',
    categoryLabel: 'Logo Designs',
    subcategory: 'esports-mascots',
    subcategoryLabel: 'Esports & Gaming Emblems',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Vector Grid & Geometry Draft',
    afterLabel: 'Phase 4: Master Vector Identity Suite',
    aspectRatio: 'square',
    description: 'Precision vector mascot crest and monogram logo system engineered for jersey embroidery, streaming overlays, and digital branding.',
    client: 'Apex Titan Gaming Org',
    year: 2025,
    tools: ['Illustrator', 'Photoshop'],
    tags: ['Logo Design', 'Esports Emblem', 'Vector Art', 'Branding'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#3f3f46', '#d4d4d8', '#ffffff'],
    stats: { views: '19.8k', likes: '2.6k' }
  },
  {
    id: 'art-ld-02',
    title: 'Vanguard Interactive: Luxury Studio Monogram',
    category: 'logo-design',
    categoryLabel: 'Logo Designs',
    subcategory: 'studio-wordmarks',
    subcategoryLabel: 'Studio Wordmarks & Monograms',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'square',
    description: 'Modern geometric mark and custom typographic wordmark with complete vector brand guidelines and negative space balance.',
    client: 'Vanguard Studios',
    year: 2025,
    tools: ['Illustrator', 'InDesign'],
    tags: ['Monogram', 'Wordmark', 'Studio Branding'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#71717a', '#f4f4f5'],
    stats: { views: '13.2k', likes: '1.7k' }
  },

  // 5. D&D and Fursona Artworks
  {
    id: 'art-df-01',
    title: 'Lord Ignatius: Dragonborn Paladin of Vengeance',
    category: 'dnd-fursona',
    categoryLabel: 'D&D and Fursona Artworks',
    subcategory: 'dnd-tabletop',
    subcategoryLabel: 'Tabletop RPG Characters & Parties',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Pencil Anatomy & Plate Armor Sketch',
    afterLabel: 'Phase 4: Full Color & Divine Aura Lighting',
    aspectRatio: 'portrait',
    description: 'Custom commission of an obsidian-scaled Dragonborn Oath of Vengeance Paladin wielding a radiant greatsword with intricate runic engravings.',
    client: 'Private Tabletop Collector',
    year: 2025,
    tools: ['Photoshop', 'Clip Studio Paint'],
    tags: ['DnD', 'Tabletop RPG', 'Dragonborn', 'Paladin', 'Character Art'],
    featured: true,
    colorPalette: ['#09090b', '#1c1c21', '#52525b', '#d4d4d8', '#ffffff'],
    stats: { views: '26.4k', likes: '3.8k' }
  },
  {
    id: 'art-df-02',
    title: 'Zephyr: Cybernetic Snow Leopard Reference Sheet',
    category: 'dnd-fursona',
    categoryLabel: 'D&D and Fursona Artworks',
    subcategory: 'fursona-anthro',
    subcategoryLabel: 'Fursona & Anthro Reference Sheets',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'landscape',
    description: 'Detailed 3-view reference sheet for an anthro snow leopard featuring cybernetic limb schematics, tail tuft guides, and color hex swatches.',
    client: 'Private Commission',
    year: 2025,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Fursona', 'Anthro Art', 'Ref Sheet', 'Cybernetic'],
    featured: false,
    colorPalette: ['#070709', '#18181b', '#3f3f46', '#a1a1aa', '#ffffff'],
    stats: { views: '17.8k', likes: '2.4k' }
  },

  // 6. Comic and Manga Projects
  {
    id: 'art-cm-01',
    title: 'Shadows of Neo-Tokyo: Inked Action Spread',
    category: 'comic-manga',
    categoryLabel: 'Comic and Manga Projects',
    subcategory: 'manga-spreads',
    subcategoryLabel: 'Manga Spreads & Inking',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Dynamic Storyboard Layout & Perspective',
    afterLabel: 'Phase 4: Screentones, Speedlines & Hand Inking',
    aspectRatio: 'landscape',
    description: 'Double-page climactic action sequence rendered in high-density G-pen inking with authentic screentones, dramatic sound effects, and kinetic speed lines.',
    client: 'Dark Horizon Press',
    year: 2025,
    tools: ['Clip Studio Paint EX', 'Photoshop'],
    tags: ['Manga', 'Comic Page', 'Inking', 'Action Sequence', 'Screentones'],
    featured: true,
    colorPalette: ['#000000', '#18181b', '#71717a', '#ffffff'],
    stats: { views: '28.9k', likes: '4.1k' }
  },
  {
    id: 'art-cm-02',
    title: 'The Reincarnated Alchemist: Webtoon Cover Key',
    category: 'comic-manga',
    categoryLabel: 'Comic and Manga Projects',
    subcategory: 'webtoon-color',
    subcategoryLabel: 'Webtoon Vertical Color Scrolls',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'Vibrant promotional webtoon key visual featuring layered potion glass transparency, glowing particle magic, and vertical mobile framing.',
    client: 'Tapas & Webtoon Publishing',
    year: 2024,
    tools: ['Clip Studio Paint', 'Photoshop'],
    tags: ['Webtoon', 'Manhwa Style', 'Color Scroll', 'Fantasy'],
    featured: false,
    colorPalette: ['#09090b', '#27272a', '#52525b', '#d4d4d8', '#ffffff'],
    stats: { views: '15.6k', likes: '2.1k' }
  },

  // 7. Wallpapers
  {
    id: 'art-wp-01',
    title: 'Monolith in the Mist: 8K Panoramic Wallpaper',
    category: 'wallpapers',
    categoryLabel: 'Wallpapers',
    subcategory: 'ultrawide-desktop',
    subcategoryLabel: 'Ultra-Wide 4K/8K Desktop',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Volumetric Value Blockout',
    afterLabel: 'Phase 4: 8K High-DPI Matte Render',
    aspectRatio: 'wide',
    description: 'Ultra-wide 32:9 dual-monitor wallpaper featuring a lone monolithic obsidian tower rising through mountain mist with realistic depth of field.',
    client: 'Core Artworks Vault',
    year: 2025,
    tools: ['Blender', 'Photoshop', 'Octane'],
    tags: ['Wallpaper', '8K Desktop', 'Ultra-Wide', 'Monochrome', 'Atmospheric'],
    featured: true,
    colorPalette: ['#050507', '#1c1c21', '#3f3f46', '#a1a1aa', '#ffffff'],
    stats: { views: '35.4k', likes: '5.2k' }
  },
  {
    id: 'art-wp-02',
    title: 'Midnight Rain: AMOLED Mobile Wallpaper',
    category: 'wallpapers',
    categoryLabel: 'Wallpapers',
    subcategory: 'mobile-amoled',
    subcategoryLabel: 'Mobile AMOLED & Vertical Sceneries',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'portrait',
    description: 'True #000000 black background wallpaper designed for battery-saving OLED screens with high-contrast glowing raindrop refraction.',
    client: 'Core Artworks Vault',
    year: 2025,
    tools: ['Photoshop', 'Procreate'],
    tags: ['Mobile Wallpaper', 'AMOLED', 'Rain', 'Dark Mode'],
    featured: false,
    colorPalette: ['#000000', '#121215', '#52525b', '#ffffff'],
    stats: { views: '22.1k', likes: '3.1k' }
  },

  // 8. Banners and Overlays
  {
    id: 'art-bo-01',
    title: 'Phantom Stream Suite: Modular Twitch Overlay System',
    category: 'banners-overlays',
    categoryLabel: 'Banners and Overlays',
    subcategory: 'stream-packages',
    subcategoryLabel: 'Twitch & YouTube Stream Packs',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85',
    beforeImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=85',
    beforeLabel: 'Phase 1: Wireframe HUD Grid & Modular Anchors',
    afterLabel: 'Phase 4: Animated OBS Package & Stinger',
    aspectRatio: 'landscape',
    description: 'Comprehensive streaming suite including starting soon screens, animated webcam borders, custom chatbox CSS, event alert badges, and stinger transitions.',
    client: 'Phantom Esports Creator',
    year: 2025,
    tools: ['After Effects', 'Photoshop', 'OBS Studio'],
    tags: ['Stream Overlay', 'Twitch Pack', 'Motion Graphics', 'HUD'],
    featured: true,
    colorPalette: ['#070709', '#18181b', '#3f3f46', '#d4d4d8', '#ffffff'],
    stats: { views: '19.2k', likes: '2.7k' }
  },
  {
    id: 'art-bo-02',
    title: 'Vortex Studio: Multi-Platform Header Package',
    category: 'banners-overlays',
    categoryLabel: 'Banners and Overlays',
    subcategory: 'social-banners',
    subcategoryLabel: 'Social Headers & Profile Graphics',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85',
    aspectRatio: 'wide',
    description: 'Pixel-perfect responsive banner set synchronized for Twitter/X headers, YouTube channel banners, Discord server invites, and ArtStation profiles.',
    client: 'Vortex Entertainment',
    year: 2025,
    tools: ['Photoshop', 'Illustrator'],
    tags: ['Social Banner', 'YouTube Header', 'Twitter Header', 'Branding'],
    featured: false,
    colorPalette: ['#000000', '#1c1c21', '#71717a', '#ffffff'],
    stats: { views: '11.9k', likes: '1.3k' }
  }
];
