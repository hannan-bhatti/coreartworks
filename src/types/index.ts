export interface Artwork {
  id: string;
  title: string;
  category:
    | 'book-cover'
    | 'character-design'
    | 'album-cover'
    | 'logo-design'
    | 'dnd-fursona'
    | 'comic-manga'
    | 'wallpapers'
    | 'banners-overlays'
    | string;
  categoryLabel: string;
  subcategory: string;
  subcategoryLabel: string;
  image: string;
  beforeImage?: string; // For sketch vs final or clay vs render comparison
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  description: string;
  client: string;
  year: number;
  tools: string[];
  tags: string[];
  featured?: boolean;
  colorPalette?: string[];
  stats?: {
    views: string;
    likes: string;
  };
}

export interface ArtCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  iconName: string;
  coverImage: string;
  subcategories: {
    id: string;
    name: string;
    slug: string;
    itemCount: number;
    description: string;
  }[];
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  software: string[];
  turnaround: string;
  startingPrice: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  projectType: string;
  rating: number;
  highlightTag: string;
}

export interface FAQItem {
  id: string;
  category: 'Licensing & IP' | 'Process & Pipeline' | 'Pricing & Turnaround' | 'Deliverables & Specs';
  question: string;
  answer: string;
}

export interface CommissionBrief {
  clientName: string;
  email: string;
  company?: string;
  discipline: string;
  subcategory: string;
  scope: string;
  complexity: 'Standard' | 'High Detail' | 'Cinematic Masterpiece';
  timeline: 'Rush (1-2 wks)' | 'Standard (3-4 wks)' | 'Flexible (6+ wks)';
  commercialRights: boolean;
  budgetRange: string;
  briefDescription: string;
  referenceLinks?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  iconName: string;
  followers?: string;
}
