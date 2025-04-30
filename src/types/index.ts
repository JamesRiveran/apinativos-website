export enum BusinessType {
    HONEY = 'Miel',
    MILK = 'Lácteos',
    TRAILS = 'Senderos',
    SODA = 'Soda',
    MUSHROOMS = 'Hongos',
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
  }
  
  export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
  }
  
  export interface SocialMedia {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    whatsapp?: string;
    website?: string;
  }
  
  export interface Business {
    id: string;
    name: string;
    logo: string;
    shortDescription: string;
    longDescription: string;
    type: BusinessType;
    products: Product[];
    images: string[];
    contactInfo: ContactInfo;
    socialMedia: SocialMedia;
  }
  
  export interface Association {
    name: string;
    logo: string;
    slogan: string;
    description: string;
    history: string;
    mission: string;
    vision: string;
    contactInfo: ContactInfo;
    socialMedia: SocialMedia;
    galleryImages: string[];
  }
  