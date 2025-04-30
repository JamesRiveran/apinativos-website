import { Business, BusinessType } from "../types";

export const businessesData: Business[] = [
  {
    id: "miel-pura",
    name: "Miel Pura",
    logo: "/assets/images/placeholder.jpg",
    shortDescription: "Miel 100% natural producida en las montañas de nuestra región.",
    longDescription: "Nuestra empresa apícola se especializa en la producción de miel orgánica de la más alta calidad. Nuestras colmenas están ubicadas en zonas libres de pesticidas, lo que garantiza un producto puro y saludable. Trabajamos con técnicas sostenibles que respetan el ciclo natural de las abejas y contribuyen a la polinización de la flora local.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "miel-multifloral",
        name: "Miel Multifloral",
        description: "Miel de diferentes flores silvestres con un sabor equilibrado y propiedades medicinales.",
        image: "/assets/images/placeholder.jpg",
        price: "₡5.000"
      },
      {
        id: "miel-cafe",
        name: "Miel de Café",
        description: "Miel especial recolectada durante la floración del café, con notas aromáticas únicas.",
        image: "/assets/images/placeholder.jpg",
        price: "₡6.500"
      }
    ],
    images: [
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg"
    ],
    contactInfo: {
      email: "info@mielpura.com",
      phone: "+506 8765-4321",
      address: "Ruta de la Montaña, km 5"
    },
    socialMedia: {
      facebook: "https://facebook.com/mielpura",
      instagram: "https://instagram.com/miel_pura"
    }
  },
  {
    id: "lacteos-frescos",
    name: "Lácteos Frescos",
    logo: "/assets/images/placeholder.jpg",
    shortDescription: "Productos lácteos artesanales elaborados con leche de vacas alimentadas con pasto.",
    longDescription: "Somos una empresa familiar dedicada a la producción de lácteos artesanales de alta calidad. Nuestras vacas se alimentan exclusivamente de pastos naturales, sin uso de hormonas ni antibióticos. Procesamos la leche en nuestra planta certificada, manteniendo los más altos estándares de higiene y calidad para ofrecer productos frescos, nutritivos y deliciosos.",
    type: BusinessType.MILK,
    products: [
      {
        id: "queso-fresco",
        name: "Queso Fresco Artesanal",
        description: "Queso fresco tradicional, suave y ligeramente salado, perfecto para acompañar desayunos y cenas.",
        image: "/assets/images/placeholder.jpg",
        price: "₡3.500/kg"
      },
      {
        id: "yogurt-natural",
        name: "Yogurt Natural",
        description: "Yogurt natural cremoso sin azúcares añadidos, elaborado mediante fermentación lenta.",
        image: "/assets/images/placeholder.jpg",
        price: "₡2.000/litro"
      }
    ],
    images: [
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg"
    ],
    contactInfo: {
      email: "pedidos@lacteosfrescos.com",
      phone: "+506 7654-3210",
      address: "Valle Verde, 300m norte de la escuela"
    },
    socialMedia: {
      facebook: "https://facebook.com/lacteosfrescos",
      whatsapp: "+506 7654-3210"
    }
  },
  {
    id: "ecoturismo-senderos",
    name: "Senderos Naturales",
    logo: "/assets/images/placeholder.jpg",
    shortDescription: "Experiencias ecoturísticas en senderos bien mantenidos con guías locales.",
    longDescription: "Ofrecemos experiencias ecoturísticas inolvidables en nuestros senderos naturales. Contamos con rutas para todos los niveles, desde caminatas suaves para familias hasta recorridos más exigentes para aventureros experimentados. Nuestros guías locales están altamente capacitados y comparten conocimientos sobre la flora, fauna y cultura de la región, promoviendo la conservación y el respeto por la naturaleza.",
    type: BusinessType.TRAILS,
    products: [
      {
        id: "tour-bosque-nuboso",
        name: "Tour Bosque Nuboso",
        description: "Recorrido de 3 horas por senderos de bosque nuboso con observación de aves y plantas medicinales.",
        image: "/assets/images/placeholder.jpg",
        price: "₡15.000/persona"
      },
      {
        id: "caminata-cascadas",
        name: "Caminata a las Tres Cascadas",
        description: "Aventura de medio día visitando tres impresionantes cascadas con oportunidad de nadar en aguas cristalinas.",
        image: "/assets/images/placeholder.jpg",
        price: "₡25.000/persona"
      }
    ],
    images: [
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg"
    ],
    contactInfo: {
      email: "reservas@senderonaturales.com",
      phone: "+506 6543-2109",
      address: "Entrada principal a Las Montañas"
    },
    socialMedia: {
      facebook: "https://facebook.com/senderonaturales",
      instagram: "https://instagram.com/senderos_cr",
      website: "https://senderonaturales.com"
    }
  },
  {
    id: "soda-tradicional",
    name: "Soda La Tradicional",
    logo: "/assets/images/placeholder.jpg",
    shortDescription: "Gastronomía típica costarricense con ingredientes frescos de nuestra región.",
    longDescription: "En Soda La Tradicional mantenemos viva la auténtica gastronomía costarricense. Nuestros platillos están elaborados con ingredientes frescos, muchos de ellos cultivados por productores locales. Ofrecemos un ambiente acogedor donde se puede disfrutar de sabores tradicionales con un toque casero único. Nuestro menú varía según la temporada para aprovechar los mejores productos de cada época.",
    type: BusinessType.SODA,
    products: [
      {
        id: "casado-tradicional",
        name: "Casado Tradicional",
        description: "El clásico plato costarricense con arroz, frijoles, picadillo, ensalada y proteína a elección.",
        image: "/assets/images/placeholder.jpg",
        price: "₡4.500"
      },
      {
        id: "olla-carne",
        name: "Olla de Carne",
        description: "Sopa tradicional con carne de res y vegetales de temporada, acompañada de tortillas caseras.",
        image: "/assets/images/placeholder.jpg",
        price: "₡5.500"
      }
    ],
    images: [
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg"
    ],
    contactInfo: {
      email: "info@sodatradicional.com",
      phone: "+506 5432-1098",
      address: "Calle Central, 50m oeste del parque"
    },
    socialMedia: {
      facebook: "https://facebook.com/sodatradicionalcr",
      instagram: "https://instagram.com/la_tradicional",
      whatsapp: "+506 5432-1098"
    }
  },
  {
    id: "tobogan-barro",
    name: "Tobogán de Barro",
    logo: "/assets/images/placeholder.jpg",
    shortDescription: "Una experiencia única de ecoturismo y aventura natural.",
    longDescription: "Disfruta de un emocionante recorrido por nuestro tobogán natural formado en barro. Este atractivo ecológico es una opción divertida y segura para toda la familia, rodeado de paisajes impresionantes y manejado por la comunidad local. Promovemos el ecoturismo con responsabilidad ambiental y recreación saludable.",
    type: BusinessType.TRAILS,
    products: [
      {
        id: "entrada-tobogan",
        name: "Entrada General",
        description: "Acceso al tobogán natural con guía y equipo básico.",
        image: "/assets/images/placeholder.jpg",
        price: "₡2.000"
      },
      {
        id: "paquete-familiar",
        name: "Paquete Familiar",
        description: "Incluye entrada para 4 personas + almuerzo típico.",
        image: "/assets/images/placeholder.jpg",
        price: "₡8.000"
      }
    ],
    images: [
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg",
      "/assets/images/placeholder.jpg"
    ],
    contactInfo: {
      email: "aventura@toboganbarro.com",
      phone: "+506 6123-4567",
      address: "Finca El Descanso, camino a la quebrada"
    },
    socialMedia: {
      facebook: "https://facebook.com/toboganbarro",
      instagram: "https://instagram.com/tobogan_de_barro"
    }
  },
];

export const getBusinessById = (id: string): Business | undefined => {
  return businessesData.find(business => business.id === id);
};