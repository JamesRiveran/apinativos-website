export enum BusinessType {
    HONEY = 'Miel',
    MILK = 'Lácteos',
    TRAILS = 'Senderos',
    SODA = 'Soda',
    COFFE = 'Cafe',
    TOUR = 'Tour',
    BAKERY = "Panadería"
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
    backgroundImage?: string;
    shortDescription: string;
    longDescription: string;
    type: BusinessType;
    products: Product[];
    tours?: Tour[];
    soda?: {
      description: string;
      image?: string;
    };
    artesanias?: {
      description: string;
      status?: string;
    };
    images: Array<{
      url: string;
      name: string; // Añade esta propiedad
    }>;
    contactInfo: ContactInfo;
    socialMedia: SocialMedia;
  }
  
  export interface Tour {
    id: string;
    name: string;
    description: string;
    duration?: string;
    price: string;
    image: string;
    status?: string;
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
  