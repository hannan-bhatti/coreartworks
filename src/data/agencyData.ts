import { ServiceOffering, Testimonial, FAQItem, SocialLink } from '../types';

export const AGENCY_METRICS = [
  { label: 'Artworks Delivered', value: '1,450+', subtext: 'Across AAA games & films' },
  { label: 'Global Studio Clients', value: '120+', subtext: 'US, EU, JP, KR & UK' },
  { label: 'Client Satisfaction', value: '99.4%', subtext: 'Verified 5-star rating' },
  { label: 'Specialist Artists', value: '28', subtext: 'Art directors & senior leads' },
];

export const AGENCY_SERVICES: ServiceOffering[] = [
  {
    id: 'srv-01',
    title: 'Book Cover design',
    category: 'book-cover',
    tagline: 'Bestseller Fantasy, Sci-Fi & Novel Jackets.',
    description: 'We craft high-impact typography, cinematic illustrations, and print-ready master covers for indie authors, commercial publishers, and serialized web novels.',
    deliverables: ['Full Dust Jackets', 'E-Book Formats (Amazon KDP)', 'Layered Master PSDs', 'Foil & Spot UV Print Masks'],
    software: ['Photoshop', 'InDesign', 'Procreate', 'Illustrator'],
    turnaround: '1.5 - 3 Weeks',
    startingPrice: '$1,200',
    icon: 'BookOpen'
  },
  {
    id: 'srv-02',
    title: 'Character Design',
    category: 'character-design',
    tagline: 'Hero Archetypes, Villains & Turnaround Model Sheets.',
    description: 'Distinct silhouettes, expressive facial sheets, intricate costume designs, and production-ready character sheets for games, novels, and animation.',
    deliverables: ['3-Angle Model Sheets', 'Expression Sheets', 'Costume & Armor Callouts', 'Layered PSD Files'],
    software: ['Photoshop', 'Clip Studio Paint', 'ZBrush'],
    turnaround: '2 - 4 Weeks',
    startingPrice: '$1,500',
    icon: 'User'
  },
  {
    id: 'srv-03',
    title: 'Album Cover design',
    category: 'album-cover',
    tagline: 'Vinyl Sleeves, Streaming Artwork & Visual Identities.',
    description: 'High-impact aesthetic cover art, gatefold packaging, cassette/vinyl layouts, and animated track visuals for artists and record labels.',
    deliverables: ['Gatefold 12" Vinyl Layouts', 'Spotify Canvas Animations', 'Digital Streaming Masters (3000x3000px)', 'Promo Banners'],
    software: ['Photoshop', 'Cinema 4D', 'Illustrator', 'After Effects'],
    turnaround: '1.5 - 3 Weeks',
    startingPrice: '$1,100',
    icon: 'Disc'
  },
  {
    id: 'srv-04',
    title: 'Logo Designs',
    category: 'logo-design',
    tagline: 'Esports Emblems, Brand Marks & Wordmarks.',
    description: 'Dynamic vector insignia, streaming brand marks, studio logomarks, typography crests, and mascot logos with complete vector packages.',
    deliverables: ['Vector Master Files (.AI, .EPS, .SVG)', 'Brand Style Guide', 'Monogram & Icon Variations', 'High-Res Transparencies'],
    software: ['Illustrator', 'InDesign', 'Photoshop'],
    turnaround: '1 - 2 Weeks',
    startingPrice: '$800',
    icon: 'Sparkles'
  },
  {
    id: 'srv-05',
    title: 'D&D and Fursona Artworks',
    category: 'dnd-fursona',
    tagline: 'Tabletop Characters, Fursonas & Custom Anthro Art.',
    description: 'Custom tabletop RPG portraits, detailed anthro/fursona character references, party splashes, fantasy weapons, and lore-rich OC illustrations.',
    deliverables: ['High-DPI Character Portraits', 'Full-Body Reference Sheets', 'VTT Virtual Tabletop Tokens', 'Battle Scene Splashes'],
    software: ['Photoshop', 'Clip Studio Paint', 'Procreate'],
    turnaround: '2 - 3 Weeks',
    startingPrice: '$950',
    icon: 'Shield'
  },
  {
    id: 'srv-06',
    title: 'Comic and Manga Projects',
    category: 'comic-manga',
    tagline: 'Sequential Pages, Webtoon Paneling & Manga Covers.',
    description: 'Dynamic storyboards, inked comic pages, webtoon color scrolls, screamers, and action-packed manga spreads designed for serialization.',
    deliverables: ['Inked & Screentoned Pages', 'Vertical Webtoon Scroll Files', 'High-Res Print Spreads', 'Cover Art & Lettering'],
    software: ['Clip Studio Paint EX', 'Photoshop'],
    turnaround: '2 - 5 Weeks',
    startingPrice: '$1,400',
    icon: 'BookMarked'
  },
  {
    id: 'srv-07',
    title: 'Wallpapers',
    category: 'wallpapers',
    tagline: 'Ultra-Wide 4K/8K Desktop & Mobile Backgrounds.',
    description: 'Immersive panoramic landscapes, sci-fi cityscapes, vibrant anime sceneries, and multi-monitor 4K/8K desktop and mobile wallpapers.',
    deliverables: ['Ultra-Wide 32:9 & 21:9 Masters (8K)', '16:9 4K Desktop Formats', 'AMOLED Vertical Mobile Wallpapers', 'Live Wallpaper Loops'],
    software: ['Blender', 'Photoshop', 'Octane Render'],
    turnaround: '1 - 2 Weeks',
    startingPrice: '$650',
    icon: 'Monitor'
  },
  {
    id: 'srv-08',
    title: 'Banners and Overlays',
    category: 'banners-overlays',
    tagline: 'Twitch Stream Kits, YouTube Headers & Social Graphics.',
    description: 'Engaging streaming overlays, animated intermission screens, social media banners, header graphics, and modular UI packages.',
    deliverables: ['Complete Stream Overlay Packages', 'Animated Intermission Screens (.WebM)', 'Header Graphics for X / YouTube / Discord', 'Custom Twitch Badges & Emotes'],
    software: ['Photoshop', 'After Effects', 'Illustrator', 'OBS Studio'],
    turnaround: '1 - 2 Weeks',
    startingPrice: '$750',
    icon: 'Layout'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-01',
    clientName: 'Julian Vance',
    role: 'Art Director',
    company: 'Apex Cyberware Interactive',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Core Artworks transformed our hazy worldbuilding ideas into iconic key art that secured our Series A game publishing deal. Their mastery of lighting, materials, and iterative communication is unmatched in the industry.',
    projectType: 'Concept Art & Character Turnarounds',
    rating: 5,
    highlightTag: 'AAA Game Production'
  },
  {
    id: 't-02',
    clientName: 'Elena Rostova',
    role: 'Creative Producer',
    company: 'Mythic Forge Studios',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote: 'From ZBrush clay sculpts to final PBR engine integration, the Core Artworks team delivered 14 hero character models ahead of schedule. Their mesh topology is spotless and drops into Unreal Engine effortlessly.',
    projectType: '3D Character Sculpting & PBR Assets',
    rating: 5,
    highlightTag: 'On-Time Milestones'
  },
  {
    id: 't-03',
    clientName: 'Marcus Sterling',
    role: 'Lead Game Designer',
    company: 'Astral TCG Publishing',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'We commissioned Core Artworks for 30 mythic foil cards for our premiere expansion. Every single piece is museum-grade digital craftsmanship. The community response has been electric.',
    projectType: '2D Card Game & Foil Key Art',
    rating: 5,
    highlightTag: 'Flagship Expansion'
  },
  {
    id: 't-04',
    clientName: 'Seraphina Chen',
    role: 'Head of Brand & Marketing',
    company: 'Nexus Interactive',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'The monochromatic identity, kinetic logo reveal, and diegetic HUD elements created by Core Artworks elevated our studio brand into a high-end luxury creative powerhouse.',
    projectType: 'Studio Identity & UI/UX Systems',
    rating: 5,
    highlightTag: 'Rebranding & UI'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Licensing & IP',
    question: 'How do commercial rights and intellectual property transfer work?',
    answer: 'Upon final milestone payment, full exclusive commercial rights, copyright transfer, and master file ownership are released to your studio. We retain only the right to display the finalized work in our portfolio (subject to your NDA and release timeline embargoes).'
  },
  {
    id: 'faq-02',
    category: 'Process & Pipeline',
    question: 'Can you work under strict Non-Disclosure Agreements (NDAs)?',
    answer: 'Yes, 85% of our production occurs under strict mutual NDAs. We adhere to enterprise security protocols, air-gapped local repositories, and synchronized embargo dates for public announcements.'
  },
  {
    id: 'faq-03',
    category: 'Process & Pipeline',
    question: 'What is the standard revision and approval cycle?',
    answer: 'Every project follows a structured 4-stage pipeline: (1) Rough Silhouette & Composition Thumbnails, (2) Detailed Value/Clay Pass, (3) Color & Material Polish, and (4) Final Render Pass. Each stage includes 2 rounds of client feedback to ensure zero surprises.'
  },
  {
    id: 'faq-04',
    category: 'Pricing & Turnaround',
    question: 'How fast can you deliver rush milestones or sprint deadlines?',
    answer: 'We maintain dedicated sprint squads for critical deadlines (e.g., publisher pitches, game awards trailers, or convention key art). Fast-track delivery is available with a 25% - 50% rush allocation.'
  },
  {
    id: 'faq-05',
    category: 'Deliverables & Specs',
    question: 'What source files and engine formats are provided upon completion?',
    answer: 'We provide layered high-res source files (PSD with organized adjustment groups, ZPR/ZTL sculpts, FBX/OBJ meshes, 4K/8K PBR Substance textures, and Unreal Engine .uasset packages) ready for immediate integration.'
  },
  {
    id: 'faq-06',
    category: 'Pricing & Turnaround',
    question: 'Do you accept milestone-based payments and escrow?',
    answer: 'Yes. Most studio engagements are structured across 3 milestones: 30% initial deposit on brief lock, 40% midway value/clay approval, and 30% final source delivery.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/coreartworks',
    handle: '@coreartworks',
    iconName: 'Instagram',
    followers: '148k Followers'
  },
  {
    platform: 'DeviantArt',
    url: 'https://deviantart.com/coreartworks',
    handle: 'CoreArtworks.deviantart.com',
    iconName: 'Palette',
    followers: '92k Watchers'
  },
  {
    platform: 'ArtStation',
    url: 'https://artstation.com/coreartworks',
    handle: 'artstation.com/coreartworks',
    iconName: 'Sparkles',
    followers: '210k Pro Followers'
  },
  {
    platform: 'Discord',
    url: 'https://discord.gg/coreartworks',
    handle: 'Core Artworks Community',
    iconName: 'MessageSquare',
    followers: '35k Creative Members'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/coreartworks',
    handle: 'github.com/coreartworks',
    iconName: 'Github',
    followers: 'Open Source UI Tools'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Creative Brief & Discovery',
    description: 'We align on aesthetic direction, target lore, technical polygon/texture limits, visual benchmarks, and strict timeline milestones.'
  },
  {
    step: '02',
    title: 'Silhouette & Concept Pass',
    description: 'Rapid thumbnail generation, composition tests, and line drafts to lock down the strongest visual silhouette before investing into high-poly details.'
  },
  {
    step: '03',
    title: 'Sculpting, Lighting & Detailing',
    description: 'Master-level anatomy definition, PBR shader pass, micro-surface imperfections, and atmospheric volumetric lighting.'
  },
  {
    step: '04',
    title: 'Master Delivery & Engine Integration',
    description: 'Final 8K render pass, layered PSD and Unreal Engine asset package delivery, plus commercial copyright sign-off.'
  }
];
