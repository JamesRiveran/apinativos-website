import { Business, BusinessType } from "../types";
import logo from '../assets/images/finca-ecologica-don-juan/logo.jpg';
import placeholder from '../assets/images/placeholder.jpg';
import logoApiZaid from '../assets/images/api-zaid/api-zaid-logo.jpg';
import logoCafeLaMarcela from '../assets/images/cafe-la-marcela/cafe_la_marcela_logo.png';
import logoFincaZamora from '../assets/images/finca-zamoraFallas/logo.jpg';
import logoApiG from '../assets/images/api-g/logo.jpg';
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
  image: require("../assets/images/finca-ecologica-don-juan/logo.jpg")
    },
    artesanias: {
      description: "Próximamente contaremos con una sección de artesanías en colaboración con ApiNativos.",
      status: "En desarrollo"
    },
    images: [
      {
        url: require("../assets/images/finca-ecologica-don-juan/bosque.JPG"),
        name: "Bosque"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/dueño.JPG"),
        name: "Dueño de la finca"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/entrada_sendero.JPG"),
        name: "Entrada al sendero"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/entrevista.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/sendero.JPG"),
        name: "Sendero ecológico"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/soda_entrada.jpg"),
        name: "Entrada de la soda"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/soda.JPG"),
        name: "Soda Don Juan"
      },
      {
        url: require("../assets/images/finca-ecologica-don-juan/zonasRecreacion.JPG"),
        name: "Zonas de recreación"
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
    id: "cafe-la-marcela",
    name: "Café La Marcela",
    logo: logoCafeLaMarcela,
    backgroundImage: logoCafeLaMarcela,
    shortDescription:
      "Café La Marcela es una empresa ubicada en Las Mellizas de Sabalito, Coto Brus, dedicada a la producción y comercialización de café de excelencia, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
    longDescription:
      "Inspirada por el legado de su familia cafetalera, doña Mileidy decidió emprender y ampliar la producción, encargándose también del tueste y empaque del café. Café La Marcela ofrece productos que reflejan tradición, excelencia y esfuerzo constante.",
    type: BusinessType.COFFE,
    products: [
      {
        id: "cafe-altura",
        name: "Café 250g",
        description: "Café de excelencia que ha ganado premios de primer lugar café de altura, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
        image: require("../assets/images/cafe-la-marcela/products/cafe.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-altura",
        name: "Café 250g",
        description: "Café de excelencia que ha ganado premios de segundo lugar café de altura, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
        image: require("../assets/images/cafe-la-marcela/products/blanco.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-altura",
        name: "Café 250g",
        description: "Café de excelencia procesado artesanalmente con métodos tradicionales familiares.",
        image: require("../assets/images/cafe-la-marcela/products/negro.jpg"),
        price: "₡3.500"
      },
      {
        id: "cafe-altura",
        name: "Café 160g",
        description: "Café de excelencia que ha ganado premios, cultivado y procesado artesanalmente con métodos tradicionales familiares.",
        image: require("../assets/images/cafe-la-marcela/products/negro_160.jpg"),
        price: "₡2.000"
      },
      {
        id: "cafe-altura",
        name: "Café 250g",
        description: "Café de excelencia procesado artesanalmente con métodos tradicionales familiares, a un precio más accesible para todas las familias.",
        image: require("../assets/images/cafe-la-marcela/products/plateado.jpg"),
        price: "₡2.000"
      },

    ],
    images: [
      {
        url: require("../assets/images/cafe-la-marcela/premio.JPG"),
        name: "Primer Lugar de Feria de Café Zona Alta de Sabalito"
      }
    ],
    contactInfo: {
      email: "mileidyalfaro311@gmail.com",
      phone: "+506 8635-7243",
      address: "Las Mellizas de Sabalito, Coto Brus"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/people/Api-zaid/61561354187176/?mibextid=wwXIfr&rdid=Lwc6R7K6Sac0N9XP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BnaxiykH1%2F%3Fmibextid%3DwwXIfr"
    }
  },
  {
    id: "api-zaid",
    name: "Api-Zaid",
    logo: logoApiZaid,
    backgroundImage: logoApiZaid,
    shortDescription:
      "Api-Zaid es un emprendimiento familiar ubicado en Las Mellizas de Sabalito, Coto Brus, dedicado a la producción y comercialización de miel artesanal de primer nivel producida por abejas mariolas (sin aguijón).",
    longDescription:
      "El proyecto de miel nació con la apicultura de abejas mariolas, una especie sin aguijón, y se ha convertido en una muestra de dedicación, innovación y respeto por la naturaleza. Api-Zaid ofrece miel en diferentes presentaciones para satisfacer las necesidades del cliente.",
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
    images: [
      {
        url: require("../assets/images/api-zaid/entrevistas.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/api-zaid/miel_general.JPG"),
        name: "Produtos de miel en general"
      }
    ],
    contactInfo: {
      email: "mileidyalfaro311@gmail.com",
      phone: "+506 8635-7243",
      address: "Las Mellizas de Sabalito, Coto Brus"
    },
    socialMedia: {
      facebook: "https://www.facebook.com/people/Api-zaid/61561354187176/?mibextid=wwXIfr&rdid=Lwc6R7K6Sac0N9XP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BnaxiykH1%2F%3Fmibextid%3DwwXIfr"
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
        url: require("../assets/images/api-g/apertura_colmena.JPG"),
        name: "Apertura de colmena"
      },
      {
        url: require("../assets/images/api-g/api.JPG"),
        name: "Apiario"
      },
      {
        url: require("../assets/images/api-g/colmenas.JPG"),
        name: "Colmena"
      },
      {
        url: require("../assets/images/api-g/entrevistas.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/api-g/interior_colmera.JPG"),
        name: "Interior de colmena"
      },
      {
        url: require("../assets/images/api-g/miel_comena.JPG"),
        name: "Miel Cruda con Panal"
      },
      {
        url: require("../assets/images/api-g/ponel.JPG"),
        name: "Ponel"
      },
      {
        url: require("../assets/images/api-g/productos_general.JPG"),
        name: "Productos generales"
      },
      {
        url: require("../assets/images/api-g/sendero_api.JPG"),
        name: "Sendero apícola"
      },
      {
        url: require("../assets/images/api-g/sendero_entrada.JPG"),
        name: "Entrada al sendero"
      },
      {
        url: require("../assets/images/api-g/sendero.JPG"),
        name: "Sendero"
      },
      {
        url: require("../assets/images/api-g/tour__explicacion.JPG"),
        name: "Tour explicado"
      },
      {
        url: require("../assets/images/api-g/visita_api.JPG"),
        name: "Visita al apiario"
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
    logo: logoFincaZamora,
    backgroundImage: logoFincaZamora,
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
        url: require("../assets/images/finca-zamoraFallas/finca.JPG"),
        name: "Finca Certificada"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/cafetal.JPG"),
        name: "Plantación de café"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/duenos.JPG"),
        name: "Dueños de la finca"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/sendero.JPG"),
        name: "Sendero principal"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/senderoLaMontana.JPG"),
        name: "Sendero La Montaña"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/cafe_floreado.jpg"),
        name: "Mata de café floreado"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/mata_cafe.jpg"),
        name: "Mata de café en temporada de cosecha"
      },
      {
        url: require("../assets/images/finca-zamoraFallas/recolecta.jpg"),
        name: "Recolecta de café en temporada"
      },
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
        url: require("../assets/images/mieles-santa-lucia/colmena.JPG"),
        name: "Colmena de abejas"
      },
      {
        url: require("../assets/images/mieles-santa-lucia/panal.JPG"),
        name: "Panal de abejas"
      },
    ],
    contactInfo: {
      email: "merardocrack2512@gmail.com",
      phone: "+506 8515-9413",
      address: "500 metros al suroeste del Colegio Jorge Volio Jiménez"
    },
    socialMedia: {
      facebook: ""
    }
  },
  {
    id: "pasteleria-reposteria-jessy",
    name: "Repostería Jessy",
    logo: placeholder,
    shortDescription:
      "Pastelería y Repostería Jessy nació del amor por crear postres únicos. Comenzó vendiendo esporádicamente a los vecinos, motivada por su pareja a emprender con la famosa torta chilena que fue todo un éxito. Hoy cuenta con 25 tipos de postres diferentes.",
    longDescription:
      "Pastelería y Repostería Jessy es un emprendimiento que surgió de la pasión por la repostería y el apoyo familiar. Todo comenzó cuando Jessica vendía esporádicamente postres a los vecinos de su comunidad, hasta que su pareja la motivó a formalizar su talento culinario. Su primer gran éxito fue la torta chilena, que marcó el inicio de un crecimiento constante. Los primeros días fueron desafiantes, especialmente encontrar el punto exacto para satisfacer el gusto de todos los clientes, pero con dedicación y amor por lo que hace, logró perfeccionar sus recetas. Actualmente ofrece 25 tipos de postres diferentes, incluyendo especialidades como carlota, tres leches, torta fría y torta Churchill. Su filosofía se resume en su lema: 'Dulce con amor', reflejando el cariño que pone en cada creación.",
    type: BusinessType.BAKERY,
    products: [
      {
        id: "torta-chilena",
        name: "Torta Chilena",
        description: "La especialidad de la casa que marcó el inicio del emprendimiento. Un clásico que conquistó a los primeros clientes.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "carlota",
        name: "Carlota",
        description: "Deliciosa carlota preparada con ingredientes frescos y la receta tradicional.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "tres-leches",
        name: "Tres Leches",
        description: "Clásico pastel tres leches, suave y cremoso, perfecto para cualquier ocasión.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "torta-fria",
        name: "Torta Fría",
        description: "Refrescante torta fría, ideal para días calurosos y celebraciones especiales.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "torta-churchill",
        name: "Torta Churchill",
        description: "Torta Churchill con todos los sabores tradicionales costarricenses.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "pasteles-eventos",
        name: "Pasteles para Eventos",
        description: "Pasteles personalizados para bodas, cumpleaños y eventos especiales. Diseños únicos hechos con amor.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "bocadillos-dulces",
        name: "Bocadillos Dulces",
        description: "Variedad de bocadillos dulces perfectos para acompañar el café o como merienda.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "bocadillos-salados",
        name: "Bocadillos Salados",
        description: "Bocadillos salados ideales para eventos, reuniones o como aperitivos.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "queques-enteros",
        name: "Queques Enteros",
        description: "Queques completos en diferentes sabores, perfectos para compartir en familia.",
        image: placeholder,
        price: "Consultar precio"
      },
      {
        id: "queques-individuales",
        name: "Queques Individuales",
        description: "Porciones individuales de queque, ideales para meriendas o regalos personales.",
        image: placeholder,
        price: "Consultar precio"
      }
    ],
    images: [
      {
        url: require("../assets/images/reposteria-jessy/entrevistas.JPG"),
        name: "Entrevistas"
      },
      {
        url: require("../assets/images/reposteria-jessy/general.JPG"),
        name: "Pedidos bajo encargo"
      },
      {
        url: require("../assets/images/reposteria-jessy/postre.JPG"),
        name: "Tres Leches"
      },
      {
        url: require("../assets/images/reposteria-jessy/productos_general.JPG"),
        name: "Postres Secos"
      },
      {
        url: require("../assets/images/reposteria-jessy/tortaChilena.JPG"),
        name: "Torta Chilena"
      },
      {
        url: require("../assets/images/reposteria-jessy/tres_leches.JPG"),
        name: "Entregas a domicilio"
      }
    ],
    contactInfo: {
      email: "jessicayoselim@gmail.com",
      phone: "+506 8794-4995",
      address: "50 metros este de Agroservicio La Poderosa y 50 metros sur, La Lucha de Sabalito, Puntarenas", 
    },
    socialMedia: {
      facebook: "",
      whatsapp: "+506 8794-4995"
    }
  }
];

export const getBusinessById = (id: string): Business | undefined => {
  return businessesData.find((business) => business.id === id);
};
