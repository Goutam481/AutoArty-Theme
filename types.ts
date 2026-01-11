
export interface SiloCategory {
  id: string;
  title: string;
  emoji: string;
  items: string[];
  ctaText: string;
  link: string;
  color: string;
  heroImage: string;
}

export interface ExpertProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface BlogPost {
  title: string;
  image: string;
  date: string;
  category: string;
  subcategory?: string;
  excerpt?: string;
}

export interface ProductPick {
  title: string;
  image: string;
  price?: string;
  rating: number;
  category?: string;
}

export interface CarBrand {
  id: string;
  name: string;
  logo: string;
  origin: string;
  founded: string;
  focus: string;
  website: string;
  partsUrl: string;
  history: string;
  reliabilityScore: number;
  currentModels: string[];
  warrantyInfo: string;
  partsNote: string;
}
