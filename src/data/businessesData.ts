import { Business, BusinessType } from "../types";
import logo from '../assets/images/Quesos/logo.jpg';
import miel from '../assets/images/Quesos/miel.jpg';
import soda from '../assets/images/Quesos/soda.jpg';
import finca from '../assets/images/Quesos/finca.jpg';
import queso from '../assets/images/Quesos/quesos.jpg';
import placeholder from '../assets/images/placeholder.jpg';

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
        image: miel,
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
      image: soda
    },
    artesanias: {
      description: "Próximamente contaremos con una sección de artesanías en colaboración con ApiNativos.",
      status: "En desarrollo"
    },
    images: [
      {
        url: finca,
        name: "Finca Ecológica Don Juan"
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
  {
    id: "api-zaid-cafe-marcela",
    name: "Café La Marcela",
    logo: placeholder,
    shortDescription:
      "Api-Zaid y Café La Marcela es una empresa ubicada en Las Mellizas de Sabalito, Coto Brus, que se dedica a la producción y comercialización de miel en diferentes presentaciones y de café de varios tipos, adaptándose a los diversos gustos.",
    longDescription:
      "Api-Zaid y Café La Marcela es un emprendimiento familiar ubicado en Las Mellizas de Sabalito, Coto Brus, dedicado a la producción y comercialización de miel artesanal y café de alta calidad. Inspirada por el legado de su familia cafetalera, doña Mileidy decidió emprender y ampliar la producción, encargándose también del tueste y empaque del café. El proyecto de miel nació con la apicultura de abejas mariolas, una especie sin aguijón, y se ha convertido en una muestra de dedicación, innovación y respeto por la naturaleza. Hoy, ofrecen productos que reflejan tradición, excelencia y esfuerzo constante.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "cafe-varios-tipos",
        name: "Café de varios tipos",
        description: "Café de excelencia que ha ganado premios, cultivado y procesado artesanalmente con métodos tradicionales familiares. Disponible en diferentes tipos para adaptarse a diversos gustos.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "miel-diversas-presentaciones",
        name: "Miel en diversas presentaciones",
        description: "Miel artesanal de primer nivel producida por abejas mariolas (sin aguijón). Disponible en diferentes presentaciones para satisfacer las necesidades del cliente.",
        image: placeholder,
        price: "Consultar precio"
      }
    ],
    images: [
      {
        url: placeholder,
        name: "Api-Zaid y Café La Marcela"
      },
      {
        url: placeholder,
        name: "Café artesanal"
      },
      {
        url: placeholder,
        name: "Miel de mariolas"
      },
      {
        url: placeholder,
        name: "Proceso de producción"
      }
    ],
    contactInfo: {
      email: "mileidyalfaro311@gmail.com",
      phone: "+506 8635-7243",
      address: "Las Mellizas de Sabalito, Coto Brus"
    },
    socialMedia: {
      facebook: ""
    }
  },
  {
    id: "api-g-apiarios-gil",
    name: "Api G",
    logo: placeholder,
    shortDescription:
      "Api G es una empresa ubicada en La lucha de Sabalito en Puntarenas, Costa Rica, que se dedica a la producción y venta de productos a base de miel y la miel misma, además de ofrecer el servicio de tours y charlas sobre las abejas.",
    longDescription:
      "Api G es una empresa ubicada en La Lucha de Sabalito, Puntarenas, dedicada a la producción y comercialización de miel y productos derivados, además de ofrecer tours educativos y charlas sobre apicultura sostenible. Nació en 2012 con un fuerte compromiso ambiental, cuando su fundador descubrió su pasión por las abejas tras construir colmenas para un apicultor local. Desde entonces, ha desarrollado un proyecto apícola que integra conocimiento, respeto por la naturaleza y formación continua. Hoy, Api G no solo mantiene colmenas saludables, sino que también promueve la conservación mediante la educación y el manejo responsable de abejas.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "miel-cruda-650g",
        name: "Miel Cruda 650g",
        description: "Miel que no ha sido calentada, conservando todas sus propiedades naturales. Presentación de 650g.",
        image: placeholder,
        price: "₡5.300"
      },
      {
        id: "miel-cruda-1000g",
        name: "Miel Cruda 1000g",
        description: "Miel que no ha sido calentada, conservando todas sus propiedades naturales. Presentación de 1000g.",
        image: placeholder,
        price: "₡6.500"
      },
      {
        id: "miel-cruda-panal-550g",
        name: "Miel Cruda con Panal 550g",
        description: "Miel que no ha sido calentada con panal incluido. Presentación de 550g.",
        image: placeholder,
        price: "₡5.500"
      },
      {
        id: "miel-cruda-350g",
        name: "Miel Cruda 350g",
        description: "Miel que no ha sido calentada, conservando todas sus propiedades naturales. Presentación de 350g.",
        image: placeholder,
        price: "₡3.500"
      },
      {
        id: "miel-cruda-panal-1000g",
        name: "Miel Cruda con Panal 1000g",
        description: "Miel que no ha sido calentada con panal incluido. Presentación de 1000g.",
        image: placeholder,
        price: "₡8.500"
      },
      {
        id: "nucleos-abejas",
        name: "Núcleos de Abejas",
        description: "Núcleos con 5 panales de abeja y con 5 marcos alambrados para desarrollarla.",
        image: placeholder,
        price: "₡80.000"
      },
      {
        id: "reinas-apareadas",
        name: "Reinas Apareadas",
        description: "Reinas apareadas listas para establecer nuevas colonias.",
        image: placeholder,
        price: "₡10.000"
      },
      {
        id: "reinas-virgenes",
        name: "Reinas Vírgenes",
        description: "Reinas vírgenes para establecimiento de colonias.",
        image: placeholder,
        price: "₡4.000"
      },
      {
        id: "alveolos",
        name: "Alvéolos",
        description: "Alvéolos para el desarrollo de las colmenas.",
        image: placeholder,
        price: "₡3.000"
      },
      {
        id: "propoleo-30ml",
        name: "Propóleo 30ml",
        description: "Propóleo natural en presentación de 30ml con todas sus propiedades medicinales.",
        image: placeholder,
        price: "₡6.500"
      },
      {
        id: "miel-mariolita-35g",
        name: "Miel de Mariolita 35g",
        description: "Miel de abejas sin aguijón (mariolitas) en presentación de 35g.",
        image: placeholder,
        price: "₡7.000"
      },
      {
        id: "cajas-colmenas",
        name: "Cajas para Colmenas",
        description: "Cajas con 10 marcos alambrados y tapa piso para colmenas.",
        image: placeholder,
        price: "₡35.000"
      },
      {
        id: "marcos-colmenas",
        name: "Marcos para Colmenas",
        description: "Marcos individuales alambrados para colmenas.",
        image: placeholder,
        price: "₡1.500"
      },
      {
        id: "tapas-colmenas",
        name: "Tapas para Colmenas",
        description: "Tapas individuales para colmenas.",
        image: placeholder,
        price: "₡5.000"
      },
      {
        id: "burras-colmenas",
        name: "Burras para Colmenas",
        description: "Burras para el soporte de colmenas.",
        image: placeholder,
        price: "₡12.000"
      },
      {
        id: "techos-colmenas",
        name: "Techos para Colmenas",
        description: "Techos para protección de colmenas.",
        image: placeholder,
        price: "₡15.000"
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
        url: placeholder,
        name: "Api G Apiarios"
      },
      {
        url: placeholder,
        name: "Colmenas"
      },
      {
        url: placeholder,
        name: "Miel cruda"
      },
      {
        url: placeholder,
        name: "Tours apícolas"
      }
    ],
    contactInfo: {
      email: "gilberdeljesus@gmail.com",
      phone: "+506 8794-4945",
      address: "50 metros este de Agroservicio La Poderosa y 50 metros sur, La Lucha de Sabalito, Puntarenas"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/ApiG"
    }
  },
  {
    id: "finca-zamora-fallas",
    name: "Finca Zamora y Fallas",
    logo: placeholder,
    shortDescription:
      "Finca cafetalera familiar con más de 60 años de tradición, ubicada en San Miguel de Sabalito a 1090 msnm. Café Abuelo Víctor representa la herencia de don Víctor Zamora Fonseca, uno de los forjadores de la región, dedicada al cultivo sostenible de café de altura con certificaciones ambientales.",
    longDescription:
      "Finca Zamora y Fallas es una empresa familiar con más de 60 años de historia, ubicada en San Miguel de Sabalito, a 1.090 msnm. Fundada en 1952 por don Víctor Zamora Fonseca, la finca ha sido símbolo de esfuerzo, tradición cafetalera y agricultura sostenible. Actualmente, es administrada por sus herederos, quienes continúan el legado con un fuerte compromiso ambiental. La finca cuenta con certificaciones como Rainforest Alliance, Coffee Practices y Bandera Azul Ecológica, y ha participado en iniciativas como NAMA Café a través de prácticas agroforestales y reforestación. El vínculo familiar y el amor por el café definen esta finca que une generaciones y culturas en torno a la tierra.",
    type: BusinessType.COFFE,
    products: [
      {
        id: "cafe-altura",
        name: "Café de Altura",
        description: "Café cultivado a 1090 msnm con certificación Rain Forest Alliance y Coffee Practices. Actualmente se vende en el Beneficio Río Negro, con planes de ofrecer café tostado directamente en el futuro.",
        image: placeholder,
        price: "Consultar precio"
      }
    ],
    tours: [
      {
        id: "tour-cafe-futuro",
        name: "Tour de Café (En desarrollo)",
        description: "Tour planificado que incluirá un recorrido por la finca cafetalera y una degustación de café acompañada de un desayuno típico costarricense.",
        image: placeholder,
        price: "En desarrollo",
        status: "Próximamente disponible"
      }
    ],
    images: [
      {
        url: placeholder,
        name: "Finca Zamora y Fallas"
      },
      {
        url: placeholder,
        name: "Plantación de café"
      },
      {
        url: placeholder,
        name: "Café Abuelo Víctor"
      },
      {
        url: placeholder,
        name: "Vista de la finca"
      }
    ],
    contactInfo: {
      email: "fincazamorayfallas@gmail.com",
      phone: "+506 8825-8659",
      address: "San Miguel de Sabalito, Coto Brus"
    },
    socialMedia: {
      facebook: ""
    }
  },
  {
    id: "mieles-santa-lucia",
    name: "Mieles Santa Lucía",
    logo: placeholder,
    shortDescription:
      "Mieles Santa Lucía es un emprendimiento apícola que comenzó en 2016, especializado en la producción artesanal de miel de diferentes especies de abejas nativas y productos derivados como propóleo y propomiel, ubicado en una tradicional zona cafetalera.",
    longDescription:
      "Mieles Santa Lucía nació en 2016 cuando doña Lucía, motivada por un curso en ADEPAS, descubrió su pasión por la apicultura y comenzó con apenas 5 colmenas. Sin conocimientos previos, inició un proceso de aprendizaje constante asistiendo a capacitaciones y enfrentando los desafíos típicos de la apicultura, como el robo de colmenas y la pérdida de enjambres. Su dedicación y perseverancia la llevaron a dominar el arte de trabajar con diferentes especies de abejas nativas. Ubicada en una zona tradicionalmente cafetalera, Mieles Santa Lucía combina la tradición agrícola de la región con la innovación apícola, produciendo miel de alta calidad de jicota (apis), mariola y barcino, además de productos especializados como propóleo y propomiel. La empresa representa el espíritu emprendedor y la capacidad de adaptación de los productores locales, quienes han diversificado sus actividades manteniendo el respeto por las tradiciones y el medio ambiente.",
    type: BusinessType.HONEY,
    products: [
      {
        id: "miel-jicota",
        name: "Miel de Jicota (Apis)",
        description: "Miel producida por abejas jicota (Apis mellifera), de excelente calidad y sabor tradicional.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "miel-mariola",
        name: "Miel de Mariola",
        description: "Miel artesanal producida por abejas mariolas (sin aguijón), con propiedades únicas y sabor distintivo.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "miel-barcino",
        name: "Miel de Barcino",
        description: "Miel especializada producida por abejas barcino, especie nativa con características particulares.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "propoleo-puro",
        name: "Propóleo",
        description: "Propóleo puro con todas sus propiedades medicinales y terapéuticas naturales.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "propomiel",
        name: "Propomiel",
        description: "Miel enriquecida con 2oz de propóleo puro, combinando los beneficios de ambos productos naturales.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "cafe-beneficio",
        name: "Café",
        description: "Café de la zona cafetalera, vendido al beneficio local. Tradición familiar en cultivo de café.",
        image: placeholder,
        price: "Consultar precio"
      }
    ],
    images: [
      {
        url: placeholder,
        name: "Mieles Santa Lucía"
      },
      {
        url: placeholder,
        name: "Colmenas de diferentes especies"
      },
      {
        url: placeholder,
        name: "Productos apícolas"
      },
      {
        url: placeholder,
        name: "Proceso de producción"
      }
    ],
    contactInfo: {
      email: "merardocrack2512@gmail.com",
      phone: "+506 8515-9413",
      address: "500 metros al suroeste del Colegio Jorge Volio Jiménez"
    },
    socialMedia: {
      facebook: ""
    }
  }
];

export const getBusinessById = (id: string): Business | undefined => {
  return businessesData.find((business) => business.id === id);
};
