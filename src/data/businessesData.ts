import { Business, BusinessType } from "../types";
import logo from '../assets/images/Quesos/logo.jpg';
import miel from '../assets/images/Quesos/miel.jpg';
import soda from '../assets/images/Quesos/soda.jpg';
import finca from '../assets/images/Quesos/finca.jpg';
import queso from '../assets/images/Quesos/quesos.jpg';

export const businessesData: Business[] = [
  {
    id: "lacteos-don-juan",
    name: "Lácteos Don Juan",
    logo: logo,
    shortDescription: "Productos lácteos naturales directamente de nuestra finca.",
    longDescription: "Ofrecemos servicios de restaurante y senderos alrededor de nuestra finca, además de la elaboración de uno de los mejores quesos de la zona.",
    type: BusinessType.MILK,
    products: [
      {
        id: "queso-fresco-artesanal",
        name: "Queso Fresco Artesanal",
        description: "Queso fresco tradicional, suave y ligeramente salado, perfecto para acompañar tus comidas.",
        image: logo,
        price: "₡3.500/kg"
      },
      {
        id: "yogurt-natural",
        name: "Yogurt Natural",
        description: "Yogurt natural cremoso sin azúcar añadida, fermentado lentamente.",
        image: logo,
        price: "₡2.000/litro"
      },
      {
        id: "natilla-casera",
        name: "Natilla Casera",
        description: "Natilla espesa y cremosa, perfecta para acompañar tus platillos costarricenses.",
        image: logo,
        price: "₡1.800/500g"
      },
      {
        id: "leche-entera",
        name: "Leche Entera Pasteurizada",
        description: "Leche fresca pasteurizada directamente de la finca.",
        image: logo,
        price: "₡1.200/litro"
      }
    ],
    images: [
      {
        url: finca,
        name: "Finca Ecológica Don Juan "
      },
      {
        url: miel,
        name: "Api G"
      },
      {
        url: soda,
        name: "Soda Don Juan"
      },
      {
        url: queso,
        name: "Quesos Don Juan"
      }
    ],
    contactInfo: {
      email: "contacto@lacteosdonjuan.com",
      phone: "+506 6000-1111",
      address: "Finca Don Juan, 1km norte de la plaza de deportes"
    },
    socialMedia: {
      facebook: "https://facebook.com/lacteosdonjuan",
      instagram: "https://instagram.com/lacteosdonjuan"
    }
  },
];

export const getBusinessById = (id: string): Business | undefined => {
  return businessesData.find(business => business.id === id);
};
