export type CategoryType = 'all' | 'montage' | 'sound' | 'motion';

export interface Project {
  id: string;
  title: string;
  category: 'montage' | 'sound' | 'motion';
  categoryLabel: string;
  platform: 'YouTube' | 'TikTok' | 'Instagram' | 'Reels' | 'Shorts' | 'Brand' | 'Podcast' | string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  metrics?: string;
  description: string;
  client?: string;
  software: string[];
  keyPoints?: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  skills: string[];
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  image?: string;
  description: string;
  idealFor?: string;
  author?: string;
  rating?: number;
  reviewsCount?: number;
  promoTag?: string;
  deliverables: string[];
  turnaround?: string;
  featured?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  channelOrBrand: string;
  avatarText: string;
  rating: number;
  content: string;
  projectType: string;
  date: string;
}

export interface WhatsAppMessage {
  id: string;
  sender: 'client' | 'warren';
  text?: string;
  time: string;
  isAudio?: boolean;
  audioDuration?: string;
  clientName?: string;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
