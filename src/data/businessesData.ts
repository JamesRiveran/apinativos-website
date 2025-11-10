import { Business, BusinessType } from "../types";
import logo from '../assets/images/finca-ecologica-don-juan/logo.jpg';
import placeholder from '../assets/images/placeholder.jpg';
import logoApiZaid from '../assets/images/api-zaid/api-zaid-logo.jpeg';
import logoCafeLaMarcela from '../assets/images/cafe-la-marcela/cafe_la_marcela_logo.png';
import logoFincaZamora from '../assets/images/finca-zamoraFallas/logo.jpg';
import logoApiG from '../assets/images/api-g/logo.jpg';
import logoJessy from '../assets/images/reposteria-jessy/logo_jessy.png';

import videoApiZaid from '../assets/images/api-zaid/videos/api-zaid.mp4';
import videoApiG from '../assets/images/api-g/videos/api-g.mp4';
import videoApiG1 from '../assets/images/api-g/videos/apig1.mp4';
import videoCafeLaMarcela from '../assets/images/cafe-la-marcela/videos/cafe-la-marcela.mp4';
import videoFincaEcologicaDonJuan from '../assets/images/finca-ecologica-don-juan/videos/finca-ecologica-don-juan.mp4';
import videoFincaZamoraFallas from '../assets/images/finca-zamoraFallas/videos/finca-zamoraFallas.mp4';
import videoReposteriaJessy from '../assets/images/reposteria-jessy/videos/reposteria-jessy.mp4';
export const businessesData: Business[] = [
  {
    id: "lacteos-don-juan",
    name: "Finca Ecológica Don Juan",
    logo: logo,
    shortDescription:
      "Nacimos en 1998 como respuesta a la necesidad de reinventarnos ante la caída del precio del café. Transformamos cafetales en potreros, iniciando con solo dos vacas y una visión clara: trabajar en armonía con la naturaleza. Así comenzó el camino hacia lo que hoy es una finca ecológica comprometida con la sostenibilidad, la reforestación y el respeto por el medio ambiente.",
    longDescription:
      "La necesidad de obtener ingresos económicos fue lo que impulsó el desarrollo del proyecto. Ante la caída en el precio del café, decidió cambiar su enfoque productivo y comenzó a trabajar con ganado; así fue como en 1998 surgió la idea de crear una finca ecológica. Transformó los cafetales en potreros y comenzó un proceso de reforestación, iniciando con solo dos vacas. A lo largo del tiempo, fue tomando mayor conciencia sobre la importancia de trabajar en armonía con la naturaleza, manteniendo siempre el respeto y el cuidado del medio ambiente como una prioridad.",
    type: BusinessType.MILK,
    products: [
      {
        id: "queso-semiduro",
        name: "Queso Semiduro",
        description: "Queso con textura firme y sabor suave, ideal para acompañar comidas o disfrutar solo.",
        image: "images/queso-semiduro.jpg",
        price: "₡4.000/kg"
      },
      {
        id: "queso-pasteurizado",
        name: "Queso Pasteurizado",
        description: "Queso suave pasteurizado, de sabor tradicional y versátil para todo tipo de platillos.",
        image: "images/queso-pasteurizado.jpg",
        price: "₡4.600/kg"
      },
      {
        id: "queso-mozzarella",
        name: "Queso Tipo Mozzarella",
        description: "Queso tipo mozzarella, excelente para pizzas, lasañas y platillos gratinados.",
        image: "images/queso-mozzarella.jpg",
        price: "₡5.500/kg"
      },
      {
        id: "queso-parmesano",
        name: "Queso Tipo Parmesano",
        description: "Queso curado, perfecto para rallar sobre pastas, sopas y ensaladas.",
        image: "images/queso-parmesano.jpg",
        price: "₡5.000/kg"
      },
      {
        id: "queso-palmito",
        name: "Queso Palmito",
        description: "Queso artesanal en espiral, de textura elástica y sabor delicado.",
        image: "images/queso-palmito.jpg",
        price: "₡5.000/kg"
      },
      {
        id: "queso-ricotta",
        name: "Queso Ricotta",
        description: "Queso ricotta fresco, ideal para rellenos, pastas o postres.",
        image: "images/queso-ricotta.jpg",
        price: "₡8.000/kg"
      },
      {
        id: "natilla-casera",
        name: "Natilla Casera",
        description: "Natilla cremosa tradicional costarricense. Presentaciones: 400g ₡1.400, 250g ₡750.",
        image: "images/natilla-casera.jpg",
        price: "₡1.400/400g, ₡750/250g"
      },
      {
        id: "yogurt-artesanal",
        name: "Yogurt Artesanal",
        description: "Yogurt natural de sabores: fresa, mora, kiwi y piña. Sin conservantes.",
        image: "images/yogurt.jpg",
        price: "₡1.400/litro"
      },
      {
        id: "miel-artesanal",
        name: "Miel Artesanal",
        description:
          "Miel pura producida en la finca y por productores aliados. Presentaciones: 1L ₡6.000, 750g ₡5.000, 500g ₡3.750, 250g ₡1.600, 100g ₡3.000.",
        image: require("../assets/images/finca-ecologica-don-juan/logo.jpg"),
        price: "Desde ₡1.600"
      }
    ],
    tours: [
      {
        id: "tour-vacas",
        name: "Tour de las Vacas",
        description:
          "Conoce el proceso de elaboración del queso artesanal, ordeña vacas y aprende sobre el sistema Voisin de pastoreo regenerativo. Incluye degustación. Máximo 6 personas por grupo para no estresar a los animales.",
        image: "images/tour-vacas.jpg",
        price: "$12 / 2 personas",
        duration: "3-4 horas"
      },
      {
        id: "tour-mariposa",
        name: "Tour de la Mariposa",
        description:
          "Recorrido educativo sobre la mariposa Morpho. Actualmente pausado por temporada de descanso. Se reanuda en julio.",
        image: "images/tour-mariposa.jpg",
        price: "$9.99 / 2 personas",
        status: "No disponible temporalmente"
      },
      {
        id: "tour-agua",
        name: "Tour del Agua",
        description: "Explora el ecosistema hídrico de la finca y aprende sobre el manejo sostenible del recurso agua.",
        image: "images/tour-agua.jpg",
        price: "$6.55 / 2 personas"
      },
      {
        id: "tour-senderos",
        name: "Senderos Ecológicos",
        description:
          "Recorre senderos naturales rodeados de biodiversidad, ideal para caminatas tranquilas y observación.",
        image: "images/senderos.jpg",
        price: "$6.99 / 2 personas"
      },
      {
        id: "tour-miel",
        name: "Tour de la Miel",
        description:
          "Conoce el proceso de producción de miel natural, visita las colmenas y degusta diferentes variedades.",
        image: "images/tour-miel.jpg",
        price: "$12 / 2 personas"
      }
    ],
    soda: {
      description:
        "La alimentación se ofrece durante los tours, pero no está incluida en el precio. Desayunos entre ₡2.000 y ₡2.500, almuerzos tipo casado entre ₡3.000 y ₡3.500. Se utiliza queso, natilla y ocasionalmente carne de cerdo producida en la finca.",
      image: require("../assets/images/finca-ecologica-don-juan/photos/soda.JPG")
    },
    artesanias: {
      description: "Próximamente contaremos con una sección de artesanías en colaboración con ApiNativos.",
      status: "En desarrollo"
    },
    videos: [
      {
        id: "lacteos-don-juan-presentacion",
        name: "Finca Ecológica Don Juan",
        description: "Conoce nuestro proceso de producción láctea y tours ecológicos",
        url: videoFincaEcologicaDonJuan,
        thumbnail: logo
      }
    ],
    images: [
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/bosque.JPG"),
        name: "Bosque"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/dueño.JPG"),
        name: "Dueño de la finca"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/entrada_sendero.JPG"),
        name: "Entrada al sendero"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/entrevista.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/sendero.JPG"),
        name: "Sendero ecológico"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/soda_entrada.jpg"),
        name: "Entrada de la soda"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/soda.JPG"),
        name: "Soda Don Juan"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/zonasRecreacion.JPG"),
        name: "Zonas de recreación"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/senderos.JPG"),
        name: "Senderos Ecológicos"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/photos/tour.JPG"),
        name: "Tour en la finca"
      },
    ],
    location: { lat: 8.843077314715543, lng: -83.02542138927491 },
    contactInfo: {
      email: "contacto@lacteosdonjuan.com",
      phone: "+506 8810-6090",
      address: "Finca Don Juan, 1km norte de la plaza de deportes"
    },
    socialMedia: {
      whatsapp: "+506 8810-6090",
    }
  },
  {
    id: "cafe-la-marcela",
    name: "Café La Marcela",
    logo: logoCafeLaMarcela,
    backgroundImage: logoCafeLaMarcela,
    shortDescription:
      "Café La Marcela es una empresa ubicada en Las Mellizas de Sabalito, Coto Brus, dedicada a la producción y comercialización de café de excelencia, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
    longDescription:
      "Inspirada por el legado de su familia cafetalera, doña Mileidy decidió emprender y ampliar la producción y secado artesanal. Café La Marcela ofrece productos que reflejan tradición, excelencia y esfuerzo constante.",
    type: BusinessType.COFFE,
    products: [
      {
        id: "cafe-la-marcela-250g-premio-primero",
        name: "Café Caturra Catuaí 250g",
        description: "Café de excelencia que ha ganado premios de primer lugar café de altura, cultivado y procesado artesanalmente con métodos tradicionales familiares. Es un café Caturra y Catuaí, cultivado en las montañas de Sabalito a más de 1.500 metros sobre el nivel del mar.",
        image: require("../assets/images/cafe-la-marcela/products/cafe.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-la-marcela-250g-blanco",
        name: "Café Obata 250g",
        description: "Café de excelencia que ha ganado premios de segundo lugar café de altura, cultivado y procesado artesanalmente con métodos tradicionales familiares. Se trata de un café Obata, cultivado en las montañas de Sabalito a más de 1.300 metros sobre el nivel del mar.",
        image: require("../assets/images/cafe-la-marcela/products/blanco.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-la-marcela-250g-negro",
        name: "Café Catiguá 250g",
        description: "Café de excelencia procesado artesanalmente con métodos tradicionales familiares. Es un café Catiguá, calidad de exportación, cultivado en las montañas de Sabalito a más de 1.500 metros sobre el nivel del mar.",
        image: require("../assets/images/cafe-la-marcela/products/negro.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-la-marcela-160g-negro",
        name: "Café 160g",
        description: "Café de excelencia que ha ganado premios, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
        image: require("../assets/images/cafe-la-marcela/products/negro_160.jpg"),
        price: "₡2.000"
      },
      {
        id: "cafe-la-marcela-250g-plateado",
        name: "Café 250g",
        description: "Café de excelencia procesado artesanalmente con métodos tradicionales familiares, a un precio más accesible para todas las familias.",
        image: require("../assets/images/cafe-la-marcela/products/plateado.jpg"),
        price: "₡2.000"
      },

    ],
    videos: [
      {
        id: "cafe-la-marcela-presentacion",
        name: "Café La Marcela",
        description: "Descubre nuestro proceso de cultivo y tueste artesanal de café de altura",
        url: videoCafeLaMarcela,
        thumbnail: logoCafeLaMarcela
      }
    ],
    images: [
      {
        url: require("../assets/images/cafe-la-marcela/photos/premio.JPG"),
        name: "Primer Lugar de Feria de Café Zona Alta de Sabalito"
      },
      {
        url: require("../assets/images/cafe-la-marcela/photos/entrevista.JPG"),
        name: "Entrevista para video publicitario"
      },
      {
        url: require("../assets/images/cafe-la-marcela/photos/entrevistas.JPG"),
        name: "Entrevista con encargada"
      },
    ],
    location: { lat: 8.89036245776725, lng: -82.77323665040109 },
    contactInfo: {
      email: "mileidyalfaro311@gmail.com",
      phone: "+506 8635-7243",
      address: "Las Mellizas de Sabalito, Coto Brus. 300 metros norte de la iglesia católica. A mano derecha, casa color crema."
    },
    socialMedia: {
      whatsapp: "+506 8635 7243"
    }
  },
  {
    id: "api-zaid",
    name: "Api-Zaid",
    logo: logoApiZaid,
    backgroundImage: logoApiZaid,
    shortDescription:
      "Api-Zaid es un emprendimiento familiar ubicado en Las Mellizas de Sabalito, Coto Brus, dedicado a la producción y comercialización de miel artesanal de primer nivel producida por abejas con aguijón.",
    longDescription:
      "El proyecto de miel nació con la apicultura, y se ha convertido en una muestra de dedicación, innovación y respeto por la naturaleza. Api-Zaid ofrece miel en diferentes presentaciones para satisfacer las necesidades del cliente.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "miel-700g",
        name: "Miel 700g",
        description: "Miel artesanal, producida artesanalmente con métodos tradicionales.",
        image: require("../assets/images/api-zaid/products/700g_miel.jpg"),
        price: "₡5.000"
      },
      {
        id: "miel-panal",
        name: "Miel con panal",
        description: "Miel artesanal, producida artesanalmente con métodos tradicionales. Dentro contiene panal natural",
        image: [
          require("../assets/images/api-zaid/products/miel_panal.jpg")
        ],
        price: "₡5.800"
      },
      {
        id: "miel-1000g-botella",
        name: "Miel 1000g en botella",
        description: "Miel artesanal, producida artesanalmente con métodos tradicionales.",
        image: require("../assets/images/api-zaid/products/botella_1000g.jpg"),
        price: "₡5.000"
      },
      {
        id: "miel-215g-botella",
        name: "Miel 215g en botella",
        description: "Miel artesanal, producida artesanalmente con métodos tradicionales.",
        image: require("../assets/images/api-zaid/products/botella_215g.jpg"),
        price: "₡2.000"
      },
    ],
    videos: [
      {
        id: "api-zaid-presentacion",
        name: "Presentación Api-Zaid",
        description: "Video promocional mostrando el proceso de producción de miel artesanal",
        url: videoApiZaid,
        thumbnail: logoApiZaid
      }
    ],
    images: [
      {
        url: require("../assets/images/api-zaid/photos/entrevistas.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/api-zaid/photos/miel_general.JPG"),
        name: "Produtos de miel en general"
      },
      {
        url: require("../assets/images/api-zaid/photos/entrevista.JPG"),
        name: "Entrevista con encargada"
      },
      {
        url: require("../assets/images/api-zaid/photos/miel.JPG"),
        name: "Presentación de producto"
      },
    ],
    location: { lat: 8.89036245776725, lng: -82.77323665040109 },
    contactInfo: {
      email: "mileidyalfaro311@gmail.com",
      phone: "+506 8635-7243",
      address: "Las Mellizas de Sabalito, Coto Brus. 300 metros norte de la iglesia católica. A mano derecha, casa color crema."
    },
    socialMedia: {
      whatsapp: "+506 8635 7243",
      instagram: "https://www.instagram.com/mielapi_zaid/?igsh=MTlmYmh2MThoanJ0ZA%3D%3D#",
    }
  },
  {
    id: "api-g-apiarios-gil",
    name: "Api G",
    logo: logoApiG,
    backgroundImage: logoApiG,
    shortDescription:
      "Api G es una empresa ubicada en La lucha de Sabalito en Puntarenas, Costa Rica, que se dedica a la producción y venta de productos a base de miel y la miel misma, además de ofrecer el servicio de tours y charlas sobre las abejas.",
    longDescription:
      "Api G es una empresa ubicada en La Lucha de Sabalito, Puntarenas, dedicada a la producción y comercialización de miel y productos derivados, además de ofrecer tours educativos y charlas sobre apicultura sostenible. Nació en 2012 con un fuerte compromiso ambiental, cuando su fundador descubrió su pasión por las abejas tras construir colmenas para un apicultor local. Desde entonces, ha desarrollado un proyecto apícola que integra conocimiento, respeto por la naturaleza y formación continua. Hoy, Api G no solo mantiene colmenas saludables, sino que también promueve la conservación mediante la educación y el manejo responsable de abejas.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "goteros-mariolita-40g",
        name: "Goteros Mariolita 40g",
        description: "Goteros de mariolita, presentación 40 g.",
        image: require("../assets/images/api-g/products/Goteros_mariolita.jpeg"),
        price: "₡7.000"
      },
      {
        id: "goteros-mariolita-20g",
        name: "Goteros Mariolita 20g",
        description: "Goteros de mariolita, presentación 20 g.",
        image: require("../assets/images/api-g/products/Goteros_mariolita.jpeg"),
        price: "₡3.500"
      },
      {
        id: "goteros-propoleo-35g",
        name: "Goteros de Propóleo 35g",
        description: "Goteros de propóleo, presentación 35 g.",
        image: require("../assets/images/api-g/products/Goteros-de-propóleo.jpeg"),
        price: "₡6.500"
      },
      {
        id: "goteros-propoleo-15g",
        name: "Goteros de Propóleo 15g",
        description: "Goteros de propóleo, presentación 15 g.",
        image: require("../assets/images/api-g/products/Goteros-de-propóleo.jpeg"),
        price: "₡3.500"
      },
      {
        id: "miel-liquida-275g",
        name: "Miel Líquida 275g",
        description: "Miel líquida en presentación 275 g.",
        image: require("../assets/images/api-g/products/Miel-líquida-275g.jpeg"),
        price: "₡3.000"
      },
      {
        id: "miel-liquida-1400g",
        name: "Miel Líquida 1400g",
        description: "Miel líquida en presentación 1400 g.",
        image: require("../assets/images/api-g/products/Miel-líquida-1400g.jpeg"),
        price: "₡9.000"
      },
      {
        id: "miel-liquida-1000g",
        name: "Miel Líquida 1000g",
        description: "Miel líquida en presentación 1000 g.",
        image: require("../assets/images/api-g/products/Miel-líquida-1000g.jpeg"),
        price: "₡7.000"
      },
      {
        id: "miel-cremada-250g",
        name: "Miel Cremada 250g",
        description: "Miel cremada en presentación 250 g.",
        image: require("../assets/images/api-g/products/Miel-cremada-250g.jpeg"),
        price: "₡4.000"
      },
      {
        id: "saquito-empaque-miel",
        name: "Saquito de Empaque para Miel",
        description: "Saquito de empaque para la miel.",
        image: require("../assets/images/api-g/products/Saquito-miel.jpeg"),
        price: "₡500"
      },
      {
        id: "reinas-cordovan-alveolo",
        name: "Reinas Cordovan en Alvéolo",
        description: "Reinas cordovan en alveolo.",
        image: require("../assets/images/api-g/products/Reinas-cordovan.jpeg"),
        price: "₡3.000"
      },
      {
        id: "cajas-estandar-langstroth",
        name: "Cajas Estándar Langstroth",
        description: "Cajas estándar Langstroth.",
        image: require("../assets/images/api-g/products/Cajas-langstroth.jpeg"),
        price: "₡10.000"
      },
      {
        id: "cajas-abejas-sin-aguijon",
        name: "Cajas para Abejas sin Aguijón",
        description: "Cajas para abejas sin aguijón — precios desde ₡30.000 según diseño.",
        image: require("../assets/images/api-g/products/Cajas-para-abejas.jpeg"),
        price: "Desde ₡30.000"
      },
      {
        id: "atrayente-abejas-sin-aguijon",
        name: "Atrayente para Abejas sin Aguijón",
        description: "Atrayente para atraer abejas sin aguijón.",
        image: require("../assets/images/api-g/products/Atrayente-para-abejas.jpeg"),
        price: "₡10.000"
      }
    ],
    tours: [
      {
        id: "tour-apiario",
        name: "Tour en el Apiario",
        description: "Experiencia informativa sobre la importancia de las abejas en el ambiente, cómo encender el ahumador, cómo ponerse el traje, definir qué es un apiario, muestra cómo se forma una colmena, las partes, qué es la reina, cómo hacer una reina.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "charlas-apicultura",
        name: "Charlas de Apicultura",
        description: "Capacitación para trabajar con abejas con y sin aguijón, cómo reproducir abejas, cómo hacer material muerto. Duración de 3 a 10 horas según necesidades.",
        image: placeholder,
        price: "$8 por hora",
        duration: "1-4 horas"
      }
    ],
    images: [
      {
        url: require("../assets/images/api-g/photos/apertura_colmena.JPG"),
        name: "Apertura de colmena"
      },
      {
        url: require("../assets/images/api-g/photos/api.JPG"),
        name: "Apiario"
      },
      {
        url: require("../assets/images/api-g/photos/colmenas.JPG"),
        name: "Colmena"
      },
      {
        url: require("../assets/images/api-g/photos/entrevistas.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/api-g/photos/interior_colmera.JPG"),
        name: "Interior de colmena"
      },
      {
        url: require("../assets/images/api-g/photos/miel_comena.JPG"),
        name: "Miel Cruda con Panal"
      },
      {
        url: require("../assets/images/api-g/photos/ponel.JPG"),
        name: "Ponel"
      },
      {
        url: require("../assets/images/api-g/photos/productos_general.JPG"),
        name: "Productos generales"
      },
      {
        url: require("../assets/images/api-g/photos/sendero_api.JPG"),
        name: "Sendero apícola"
      },
      {
        url: require("../assets/images/api-g/photos/sendero_entrada.JPG"),
        name: "Entrada al sendero"
      },
      {
        url: require("../assets/images/api-g/photos/sendero.JPG"),
        name: "Sendero"
      },
      {
        url: require("../assets/images/api-g/photos/tour__explicacion.JPG"),
        name: "Tour explicado"
      },
      {
        url: require("../assets/images/api-g/photos/visita_api.JPG"),
        name: "Visita al apiario"
      }
      ,
      {
        url: require("../assets/images/api-g/photos/colmena_explicacion.JPG"),
        name: "Explicación del funcionamiento de una colmena"
      },
      {
        url: require("../assets/images/api-g/photos/abejas_reina.JPG"),
        name: "Explicación sobre la abeja reina"
      }
    ],
    videos: [
      {
        id: "api-g-presentacion",
        name: "Api G - Apiarios Gil",
        description: "Conoce nuestro apiario y el proceso de producción de miel cruda",
        url: videoApiG,
        thumbnail: logoApiG
      },
      {
        id: "api-g-presentacion-2",
        name: "Api G - Proceso Apícola",
        description: "Descubre más sobre nuestras técnicas apícolas y manejo sostenible de colmenas",
        url: videoApiG1,
        thumbnail: logoApiG
      }
    ],
    location: { lat: 8.891351189758629, lng: -82.7945733260498 },
    contactInfo: {
      email: "gilberdeljesus@gmail.com",
      phone: "+506 8794-4945",
      address: "50 metros este de Agroservicio La Poderosa y 50 metros sur, La Lucha de Sabalito, Puntarenas"
    },
    socialMedia: {
      whatsapp: "+506 8794-4945",
      facebook: "https://www.facebook.com/people/Api-G/100094106944689/?rdid=KDaw4iwqpSBc1g97&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FGjCgjQkx%2F",
      instagram: "https://www.instagram.com/api_.g?igsh=cmI5cG0zZnBzbmpt",
    }
  },
  {
    id: "finca-zamora-fallas",
    name: "Finca Zamora y Fallas",
    logo: logoFincaZamora,
    backgroundImage: logoFincaZamora,
    shortDescription:
      "Finca cafetalera familiar con más de 60 años de tradición, ubicada en San Miguel de Sabalito a 1090 msnm. Café Abuelo Víctor representa la herencia de don Víctor Zamora Fonseca, uno de los forjadores de la región, dedicada al cultivo sostenible de café de altura con certificaciones ambientales.",
    longDescription:
      "Finca Zamora y Fallas es una empresa familiar con más de 60 años de historia, ubicada en San Miguel de Sabalito, a 1.090 msnm. Fundada en 1952 por don Víctor Zamora Fonseca, la finca ha sido símbolo de esfuerzo, tradición cafetalera y agricultura sostenible. Actualmente, es administrada por sus herederos, quienes continúan el legado con un fuerte compromiso ambiental. La finca cuenta con certificaciones como Rainforest Alliance, Coffee Practices y Bandera Azul Ecológica, y ha participado en iniciativas como NAMA Café a través de prácticas agroforestales y reforestación. El vínculo familiar y el amor por el café definen esta finca que une generaciones y culturas en torno a la tierra.",
    type: BusinessType.COFFE,
    products: [
      {
        id: "finca-zamora-cafe-altura",
        name: "Café de Altura",
        description: "Café cultivado a 1090 msnm con certificación Rain Forest Alliance y Coffee Practices. Actualmente se vende en el Beneficio Río Negro, con planes de ofrecer café tostado directamente en el futuro.",
        image: placeholder,
        price: "Consultar precio"
      }
    ],
    tours: [
      {
        id: "tour-completo",
        name: "Tour de Café y Experiencias Locales",
        description: "Tour de café, avistamiento de aves, senderismo, historia del proyecto de café y de cómo se formó la comunidad de San Miguel. Se ofrecerá un café producido en la finca y un plato típico de la zona (Ejemplo: Picadillo de arracache, picadillo de plátano verde o de papaya).",
        image: require("../assets/images/finca-zamoraFallas/photos/senderoLaMontana.JPG"),
        price: "$50 por persona",
        duration: "3-4 horas",
      }
    ],
    images: [
      { url: require("../assets/images/finca-zamoraFallas/photos/finca.JPG"), name: "Finca Certificada" },
      { url: require("../assets/images/finca-zamoraFallas/photos/cafetal.JPG"), name: "Plantación de café" },
      { url: require("../assets/images/finca-zamoraFallas/photos/cafe_floreado.jpg"), name: "Café floreado" },
      { url: require("../assets/images/finca-zamoraFallas/photos/cafeParaRecoger.jpeg"), name: "Café para recoger" },
      { url: require("../assets/images/finca-zamoraFallas/photos/duenos.JPG"), name: "Dueños de la finca" },
      { url: require("../assets/images/finca-zamoraFallas/photos/estudiantesUNA.jpeg"), name: "Estudiantes de la Universidad Nacional de visita por la finca" },
      { url: require("../assets/images/finca-zamoraFallas/photos/indigenas.jpeg"), name: "Comunidades indígenas trasladadas a la finca en temporada de cosecha" },
      { url: require("../assets/images/finca-zamoraFallas/photos/indigenasCosecha.jpeg"), name: "Comunidades indígenas en recolecta de café" },
      { url: require("../assets/images/finca-zamoraFallas/photos/inicioCosella.jpeg"), name: "Inicio de la cosecha" },
      { url: require("../assets/images/finca-zamoraFallas/logo.jpg"), name: "Logo de la finca" },
      { url: require("../assets/images/finca-zamoraFallas/photos/mataCafeCosecha.jpeg"), name: "Mata de café en cosecha" },
      { url: require("../assets/images/finca-zamoraFallas/photos/mata_cafe.jpg"), name: "Mata de café" },
      { url: require("../assets/images/finca-zamoraFallas/photos/plantacionSemillaCafe.jpeg"), name: "Plantación - semillas" },
      { url: require("../assets/images/finca-zamoraFallas/photos/produccion.jpeg"), name: "Proceso de producción" },
      { url: require("../assets/images/finca-zamoraFallas/photos/productorCafe.jpeg"), name: "Productor de café" },
      { url: require("../assets/images/finca-zamoraFallas/photos/recolecta.jpg"), name: "Recolecta de café" },
      { url: require("../assets/images/finca-zamoraFallas/photos/sendero.JPG"), name: "Sendero principal" },
      { url: require("../assets/images/finca-zamoraFallas/photos/senderoLaMontana.JPG"), name: "Sendero La Montaña" },
      { url: require("../assets/images/finca-zamoraFallas/photos/senderoPasillo.JPG"), name: "Pasillo del sendero" },
      { url: require("../assets/images/finca-zamoraFallas/photos/banderaAzulEcologica.jpeg"), name: "Bandera Azul Ecológica" },
    ],
    videos: [],
    location: { lat: 8.865747908947986, lng: -82.88051262725706 },
    contactInfo: {
      email: "fincazamorayfallas@gmail.com",
      phone: "+506 8825-8659",
      address: "San Miguel de Sabalito, Coto Brus, Puntarenas"
    },
    socialMedia: {
      whatsapp: "+506 8825 8659"
    }
  },
  {
    id: "mieles-santa-lucia",
    name: "Mieles Santa Lucía",
    logo: placeholder,
    backgroundImage: placeholder,
    shortDescription:
      "Mieles Santa Lucía es un emprendimiento apícola que comenzó en 2016, especializado en la producción artesanal de miel de diferentes especies de abejas nativas y productos derivados como propóleo y propomiel, ubicado en una tradicional zona cafetalera.",
    longDescription:
      "Mieles Santa Lucía nació en 2016 cuando doña Lucía, motivada por un curso en ADEPAS, descubrió su pasión por la apicultura y comenzó con apenas 5 colmenas. Sin conocimientos previos, inició un proceso de aprendizaje constante asistiendo a capacitaciones y enfrentando los desafíos típicos de la apicultura, como el robo de colmenas y la pérdida de enjambres. Su dedicación y perseverancia la llevaron a dominar el arte de trabajar con diferentes especies de abejas nativas. Ubicada en una zona tradicionalmente cafetalera, Mieles Santa Lucía combina la tradición agrícola de la región con la innovación apícola, produciendo miel de alta calidad de jicota (apis), mariola y barcino, además de productos especializados como propóleo y propomiel. La empresa representa el espíritu emprendedor y la capacidad de adaptación de los productores locales, quienes han diversificado sus actividades manteniendo el respeto por las tradiciones y el medio ambiente.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "mieles-santa-lucia-botella-350ml",
        name: "Botella 350ml",
        description: "Miel en botella - presentación 350 ml.",
        image: placeholder,
        price: "₡2.700"
      },
      {
        id: "mieles-santa-lucia-botella-750ml",
        name: "Botella 750ml",
        description: "Miel en botella - presentación 750 ml.",
        image: placeholder,
        price: "₡5.500"
      },
      {
        id: "propoleo-25ml",
        name: "Propóleo 25ml",
        description: "Propóleo puro en presentación de 25 ml.",
        image: placeholder,
        price: "₡5.000"
      }
    ],
    images: [
      {
        url: require("../assets/images/mieles-santa-lucia/photos/colmena.JPG"),
        name: "Colmena de abejas"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/photos/entrevista-publicidad.JPG"),
        name: "Entrevista brindada para video publicitario"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/photos/mieles-santaLucia-logo.jpeg"),
        name: "Logo de la empresa"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/photos/mieles.JPG"),
        name: "Envasado de la miel para su posterior venta"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/photos/panal-mariola.JPG"),
        name: "Colmenas de abejas mariola"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/photos/panal.JPG"),
        name: "Entrada de la colmena de abejas mariola"
      }
    ],
    videos: [
      {
        id: "mieles-santa-lucia-presentacion",
        name: "Mieles Santa Lucía",
        description: "Conoce nuestro proceso apícola con abejas nativas jicota, mariola y barcino",
        url: placeholder,
        thumbnail: placeholder
      }
    ],
    location: { lat: 8.884404134646255, lng: -82.81861105198229 },
    contactInfo: {
      email: "luciafallas2004@gmail.com",
      phone: "+506 8515-9413",
      address: "500 metros al suroeste del Colegio Jorge Volio Jiménez"
    },
    socialMedia: {
      whatsapp: "+506 8515 9413"
    }
  },
  {
    id: "pasteleria-reposteria-jessy",
    name: "Repostería Jessy",
    logo: logoJessy,
    backgroundImage: logoJessy,
    shortDescription:
      "Pastelería y Repostería Jessy nació del amor por crear postres únicos. Comenzó vendiendo esporádicamente a los vecinos, motivada por su pareja a emprender con la famosa torta chilena que fue todo un éxito. Hoy cuenta con 25 tipos de postres diferentes.",
    longDescription:
      "Pastelería y Repostería Jessy es un emprendimiento que surgió de la pasión por la repostería y el apoyo familiar. Todo comenzó cuando Jessica vendía esporádicamente postres a los vecinos de su comunidad, hasta que su pareja la motivó a formalizar su talento culinario. Su primer gran éxito fue la torta chilena, que marcó el inicio de un crecimiento constante. Los primeros días fueron desafiantes, especialmente encontrar el punto exacto para satisfacer el gusto de todos los clientes, pero con dedicación y amor por lo que hace, logró perfeccionar sus recetas. Actualmente ofrece 25 tipos de postres diferentes, incluyendo especialidades como carlota, tres leches, torta fría y torta Churchill. Su filosofía se resume en su lema: 'Dulce con amor', reflejando el cariño que pone en cada creación.",
    type: BusinessType.BAKERY,
    products: [
      {
        id: "queque-normal",
        name: "Queque Normal",
        description: "Vainilla relleno de dulce de leche.",
        image: require("../assets/images/reposteria-jessy/products/quequeNormal.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queque-humedo",
        name: "Queque Húmedo",
        description: "Vainilla relleno de dulce de leche. Húmedo en las tres leches.",
        image: require("../assets/images/reposteria-jessy/products/quequeHumedo.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queque-zanahoria",
        name: "Queque Zanahoria",
        description: "Pan de zanahoria con relleno de crema de queso crema.",
        image: require("../assets/images/reposteria-jessy/products/quequeZanahoria.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queque-borracho",
        name: "Queque Borracho",
        description: "Vainilla relleno de dulce de leche, húmedo en tres leches y cargado de licor.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "queque-chocolate",
        name: "Queque Chocolate",
        description: "Chocolate con relleno de chocolate y mermelada de mora o fresa.",
        image: require("../assets/images/reposteria-jessy/products/quequeChocolate.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queque-chocolate-con-chocolate",
        name: "Queque de Chocolate con Chocolate",
        description: "Chocolate con relleno de chocolate y cobertura de chocolate.",
        image: require("../assets/images/reposteria-jessy/products/chocolateConChocolate.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queque-chocolate-humedo",
        name: "Queque de Chocolate Húmedo",
        description: "Chocolate con relleno de chocolate húmedo en chocolate líquido.",
        image: require("../assets/images/reposteria-jessy/products/chocolateHumedo.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "carlota-melocoton",
        name: "Carlota de Melocotón",
        description: "2 bizcochos delgados húmedos en tres leches, relleno grueso de crema de melocotón con trocitos de melocotón y galleta.",
        image: require("../assets/images/reposteria-jessy/products/carlota.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "carlota-fresa",
        name: "Carlota de Fresa",
        description: "2 bizcochos delgados húmedos en tres leches, relleno grueso de crema de fresa con trocitos de fresa y galleta.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "carlota-frutas",
        name: "Carlota de Frutas",
        description: "2 bizcochos delgados húmedos en tres leches, relleno grueso de crema de frutas con trocitos de frutas combinadas y galleta.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "torta-fria",
        name: "Torta Fría",
        description: "Queque húmedo con relleno fino y frutas combinadas.",
        image: require("../assets/images/reposteria-jessy/products/tortaFria.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-napolitana",
        name: "Torta Napolitana",
        description: "Panes húmedos en chocolate, vainilla y fresa. Crema de fresa, chocolate y vainilla.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "tiramisu",
        name: "Tiramisú",
        description: "Postre clásico cuyo ingrediente principal es el café.",
        image: require("../assets/images/reposteria-jessy/products/tiramisu.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-chilena",
        name: "Torta Chilena",
        description: "15 capas de pasta original y 15 rellenos de dulce de leche.",
        image: require("../assets/images/reposteria-jessy/products/tortaChilena.JPG"),
        price: "Varía según decoración"
      },
      {
        id: "tres-leches",
        name: "Tres Leches",
        description: "Bizcocho esponja con chantilly, flotando en tres leches con un toque de licor.",
        image: require("../assets/images/reposteria-jessy/products/tresLeches.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-churchill",
        name: "Torta Churchill",
        description: "Tres bizcochos húmedos en sirope y tres leches. Dos rellenos de crema de helado a tu gusto con barquillos, leche condensada y leche en polvo.",
        image: require("../assets/images/reposteria-jessy/products/tortaChurchill.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-baileys",
        name: "Torta Baileys",
        description: "Pan lustre con relleno a base de Baileys.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "torta-whisky",
        name: "Torta Whisky",
        description: "Base delgada de pan con crema tipo irlandesa.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "torta-chilena-cereal",
        name: "Torta Chilena con Cereal",
        description: "15 capas de pasta original y 15 rellenos de dulce de leche con cobertura de leche condensada y cereal.",
        image: require("../assets/images/reposteria-jessy/products/tortaChilenaCereal.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "explosion-de-chocolate",
        name: "Explosión de Chocolate",
        description: "Pan de chocolate con relleno de chocolate líquido que se desborda al partir; cobertura de chocolate.",
        image: require("../assets/images/reposteria-jessy/products/explosionChocolate.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        description: "Base de galleta con crema de cheesecake y cobertura de gelatina sabor a tu gusto.",
        image: require("../assets/images/reposteria-jessy/products/cheesecake.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "selva-negra",
        name: "Selva Negra",
        description: "Tres bizcochos de chocolate con dos rellenos de crema y cereza; toque de chocolate y fresa, bañado en chocolate.",
        image: require("../assets/images/reposteria-jessy/products/selvaNegra.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-opera",
        name: "Torta Ópera",
        description: "Tres bizcochos con rellenos de café, moka y chocolate. Húmedo con vainilla, licor de café y chocolate.",
        image: placeholder,
        price: "Varía según decoración"
      },
      {
        id: "tres-leches-pina-colada",
        name: "Tres Leches Piña Colada",
        description: "Bizcocho esponja con chantilly, coco, piña y cerezas. Flotando en tres leches con Malibu, leche de coco y jugo de piña.",
        image: require("../assets/images/reposteria-jessy/products/tresLechesPiñaColada.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "tronco",
        name: "Tronco",
        description: "Arrollado húmedo relleno de crema, cubierto de chocolate y frutas.",
        image: require("../assets/images/reposteria-jessy/products/tronco.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "torta-rossana",
        name: "Torta Rossana",
        description: "Queque húmedo con sabor a Rossana, doble relleno y cobertura de Rossana.",
        image: require("../assets/images/reposteria-jessy/products/tortaRossana.jpeg"),
        price: "Varía según decoración"
      },
      {
        id: "queques-navidenos",
        name: "Queques Navideños (marinado 2 meses)",
        description: "Queques especiales con marinado de 2 meses. Disponibles en varias presentaciones/tamaños.",
        image: require("../assets/images/reposteria-jessy/products/quequeNavidad.jpeg"),
        price: "Desde ₡7.500 — ₡30.000 según tamaño (Pequeño: ₡7.500, Mediano: ₡11.000, Grande: ₡16.500, Extra grande: ₡21.500, Especial: ₡30.000)"
      }
      ,
      {
        id: "bocadillos-para-eventos",
        name: "Bocadillos para Eventos",
        description: "Elaboramos bocadillos y catering para eventos y festividades. Opciones dulces y saladas; montajes personalizados y entregas según pedido.",
        image: require("../assets/images/reposteria-jessy/products/bocadillosEventos.jpeg"),
        price: "Consultar precio"
      }
    ],
    images: [
      { url: require("../assets/images/reposteria-jessy/photos/abejaqueque.jpeg"), name: "Queque de abeja" },
      { url: require("../assets/images/reposteria-jessy/photos/cupcake.jpeg"), name: "Cupcakes" },
      { url: require("../assets/images/reposteria-jessy/photos/entrevistas.JPG"), name: "Entrevistas" },
      { url: require("../assets/images/reposteria-jessy/photos/general.JPG"), name: "Tres leches" },
      { url: require("../assets/images/reposteria-jessy/photos/postre.JPG"), name: "Postre" },
      { url: require("../assets/images/reposteria-jessy/photos/productos_general.JPG"), name: "Torta Chilena" },
      { url: require("../assets/images/reposteria-jessy/photos/queque.jpeg"), name: "Queque para eventos" },
      { url: require("../assets/images/reposteria-jessy/photos/queque1.jpeg"), name: "Queque para aniversario" },
      { url: require("../assets/images/reposteria-jessy/photos/queque15años.jpeg"), name: "Queque para 15 años" },
      { url: require("../assets/images/reposteria-jessy/photos/queque2.jpeg"), name: "Queque de tres pisos" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeBoda.jpeg"), name: "Queque para Boda" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeBoda1.jpeg"), name: "Queque para Boda" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeCumpleaños.jpeg"), name: "Queque para Cumpleaños" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeNavida.jpeg"), name: "Queque Navideño Pequeño" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeNavida1.jpeg"), name: "Queque Navideño Grande" },
      { url: require("../assets/images/reposteria-jessy/photos/quequeNavideño.jpeg"), name: "Queque Navideño Mediano" },
      { url: require("../assets/images/reposteria-jessy/photos/queques.jpeg"), name: "Queques" },
      { url: require("../assets/images/reposteria-jessy/photos/QuequesEventos.jpeg"), name: "Mesas para eventos" },
      { url: require("../assets/images/reposteria-jessy/photos/tortaChilena.JPG"), name: "Torta Chilena" },
      { url: require("../assets/images/reposteria-jessy/photos/tres_leches.JPG"), name: "Tres Leches" }
    ],
    videos: [
      {
        id: "reposteria-jessy-presentacion",
        name: "Repostería Jessy",
        description: "Descubre nuestros 25 tipos de postres hechos con dulce amor",
        url: videoReposteriaJessy,
        thumbnail: placeholder
      }
    ],
    location: { lat: 8.891351189758629, lng: -82.7945733260498 },
    contactInfo: {
      email: "jychinchilla88@gmail.com",
      phone: "+506 8794-4995",
      address: "50 metros este de Agroservicio La Poderosa y 50 metros sur, La Lucha de Sabalito, Puntarenas",
    },
    socialMedia: {
      facebook: "https://www.facebook.com/share/1FwCHxNMAe/",
      whatsapp: "+506 8794-4995"
    }
  }
];

export const getBusinessById = (id: string): Business | undefined => {
  return businessesData.find((business) => business.id === id);
};
