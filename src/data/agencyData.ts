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
    role: 'Editorial Director',
    company: 'Tor & Orbit Fantasy Press',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Core Artworks designed the dust jacket for our flagship dark fantasy trilogy. The gold-foil typography and atmospheric cover illustration drove a 300% increase in hardcover pre-orders.',
    projectType: 'Book Cover Design & Typography',
    rating: 5,
    highlightTag: 'Bestseller Release'
  },
  {
    id: 't-02',
    clientName: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Astral Wave Records',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote: 'From vinyl gatefold sleeves to animated Spotify Canvas loops, the Core Artworks team delivered a mesmerizing visual identity for our electronic album launch ahead of schedule.',
    projectType: 'Album Cover & Motion Canvas',
    rating: 5,
    highlightTag: 'Vinyl & Digital Masters'
  },
  {
    id: 't-03',
    clientName: 'Marcus Sterling',
    role: 'Founder & GM',
    company: 'Apex Titan Esports',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'We commissioned Core Artworks for our esports franchise rebrand and Twitch broadcast overlay package. The vector emblem and stinger animations are absolute perfection.',
    projectType: 'Esports Logo & Stream Package',
    rating: 5,
    highlightTag: 'Tournament Broadcast'
  },
  {
    id: 't-04',
    clientName: 'Seraphina Chen',
    role: 'Senior Manga Editor',
    company: 'Zenith Manga Publishing',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'The inked spreads, action screentones, and tankobon volume covers created by Core Artworks brought our serialized dark fantasy series to life with breathtaking craftsmanship.',
    projectType: 'Manga Inking & Webtoon Art',
    rating: 5,
    highlightTag: 'Serialized Serialization'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-01',
    category: 'Licensing & IP',
    question: 'How do commercial rights and intellectual property transfer work?',
    answer: 'Upon final milestone payment, full exclusive commercial rights, copyright transfer, and master file ownership are released to you. We retain only the right to display the finalized work in our portfolio (subject to your release timeline embargoes).'
  },
  {
    id: 'faq-02',
    category: 'Process & Pipeline',
    question: 'Can you work under strict Non-Disclosure Agreements (NDAs)?',
    answer: 'Yes, the majority of our commercial commissions occur under strict mutual NDAs. We maintain encrypted local storage and synchronized embargo dates for album drops, book launches, and game announcements.'
  },
  {
    id: 'faq-03',
    category: 'Process & Pipeline',
    question: 'What is the standard revision and approval cycle?',
    answer: 'Every project follows a structured 4-stage pipeline: (1) Rough Thumbnail & Composition Passes, (2) Clean Line Art & Anatomy Lock, (3) Color & Shading Render, and (4) Master Polish & Print Export. Each stage includes 2 rounds of feedback.'
  },
  {
    id: 'faq-04',
    category: 'Pricing & Turnaround',
    question: 'How fast can you deliver rush milestones or sprint deadlines?',
    answer: 'We maintain dedicated sprint squads for critical deadlines (e.g. convention launches, tour announcements, book release dates, or tournament streams). Fast-track delivery is available.'
  },
  {
    id: 'faq-05',
    category: 'Deliverables & Specs',
    question: 'What source files and formats are provided upon completion?',
    answer: 'We provide layered high-res source files (300/600 DPI Master PSDs with organized layers, vector .AI / .SVG files, animated .WebM stream packages, print-ready PDF covers, and 4K/8K wallpaper exports).'
  },
  {
    id: 'faq-06',
    category: 'Pricing & Turnaround',
    question: 'Do you accept milestone-based payments and escrow?',
    answer: 'Yes. Most client commissions are structured across 3 milestones: 30% initial deposit on brief lock, 40% midway line/color approval, and 30% final master delivery.'
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
    description: 'We align on narrative lore, aesthetic direction, dimensions, typography rules, visual benchmarks, and strict milestone timelines.'
  },
  {
    step: '02',
    title: 'Thumbnail & Value Composition',
    description: 'Rapid sketch thumbnail passes, silhouette framing, and typographic drafts to lock down composition before high-detail rendering.'
  },
  {
    step: '03',
    title: 'Line Art, Shading & Detailing',
    description: 'Master-level anatomical inking, multi-layer shading, vector refinement, and atmospheric lighting passes.'
  },
  {
    step: '04',
    title: 'Master Delivery & Print Export',
    description: 'Final 300/600 DPI print-ready files, layered master PSDs, vector packages, stream assets, and commercial copyright sign-off.'
  }
];
