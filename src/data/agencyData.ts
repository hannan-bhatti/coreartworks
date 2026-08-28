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
    title: 'Concept Art & VisDev',
    category: 'concept-art',
    tagline: 'From blank canvas to cinematic universe.',
    description: 'We establish tone, mood, and architectural language for games, films, and virtual worlds. Rapid ideation sketches through high-fidelity hero keyframes.',
    deliverables: ['Environment Sheets', 'Character Turnarounds', 'Keyframe Moments', 'Prop/Mech Callouts', 'Color Scripts'],
    software: ['Photoshop', 'Blender', 'Unreal Engine 5', 'Procreate'],
    turnaround: '2 - 4 Weeks per Milestone',
    startingPrice: '$2,500',
    icon: 'Sparkles'
  },
  {
    id: 'srv-02',
    title: '3D Production & Sculpting',
    category: '3d-sculpting',
    tagline: 'Precision topology, organic anatomy & real-time readiness.',
    description: 'AAA-grade 3D character modeling, hard-surface vehicles, weapons, and modular environment kits optimized for Unreal Engine 5 Nanite and Unity.',
    deliverables: ['High/Low Poly Meshes', 'PBR 4K/8K Texture Sets', 'LOD Packages', 'Rigging Ready Clean Topology', 'Engine Imports'],
    software: ['ZBrush', 'Maya', 'Substance 3D Painter', 'Marmoset', 'Houdini'],
    turnaround: '3 - 6 Weeks per Asset Tier',
    startingPrice: '$3,800',
    icon: 'Box'
  },
  {
    id: 'srv-03',
    title: '2D & Editorial Illustration',
    category: '2d-illustration',
    tagline: 'Iconic splash art and trading card masterpieces.',
    description: 'High-impact key visuals designed to dominate store fronts, packaging, collectible card games, and marketing campaigns with magnetic focal points.',
    deliverables: ['High-DPI Master Artwork (8K+)', 'Layered PSD Files', 'Foil & Spot UV Print Masks', 'Promo Aspect Ratios'],
    software: ['Photoshop', 'Clip Studio Paint', 'Corel Painter'],
    turnaround: '1.5 - 3 Weeks',
    startingPrice: '$2,200',
    icon: 'Palette'
  },
  {
    id: 'srv-04',
    title: 'Motion, VFX & 3D Animation',
    category: 'vfx-animation',
    tagline: 'Kinetic energy, particle magic & cinematic motion.',
    description: 'Dynamic VFX simulations, real-time Unreal Niagara particle systems, logo stings, UI motion, and character combat animation suites.',
    deliverables: ['Pre-rendered ProRes Alpha Plates', 'Unreal Niagara Emitter Assets', 'Animated Spine/FBX Sequences', 'Trailer Cuts'],
    software: ['After Effects', 'Houdini', 'Cinema 4D', 'Unreal Engine 5', 'Nuke'],
    turnaround: '3 - 5 Weeks',
    startingPrice: '$4,200',
    icon: 'Zap'
  },
  {
    id: 'srv-05',
    title: 'Brand Identity & Game UI/UX',
    category: 'brand-identity',
    tagline: 'Cohesive worldbuilding, logomarks & immersive HUDs.',
    description: 'End-to-end creative direction, franchise visual bibles, typographic systems, and diegetic in-game interface design.',
    deliverables: ['Complete UI Vector Component Kits', 'Design System Token Bible', 'Vector Logo Master Assets', 'Iconography Sets'],
    software: ['Figma', 'Illustrator', 'Unreal UMG', 'Photoshop'],
    turnaround: '2 - 5 Weeks',
    startingPrice: '$3,000',
    icon: 'Layers'
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
