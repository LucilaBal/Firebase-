const products = [
    {
      id: 1,
      name: "Samsung Galaxy a20",
      stock: 100,
      cost: 40000,
      description: "El Samsung Galaxy A20 cuenta con un diseño bastante estándar, similar al que nos tiene acostumbrados Samsung con su gama media Galaxy A. Encontramos este modelo en los colores negro, coral, blanco y azul cielo. El lector de huellas se encuentra todavía en la parte trasera, una carcasa de cristal brillante. El Samsung Galaxy A20  tiene un tamaño de pantalla de 6,4 , con una resolución de 1.560 x 720. La pantalla es de tipo Super AMOLED. Además es tipo Infinity-U donde la marca ha intentado ocupar la mayor parte del frontal, para lo cual ha elegido un notch de tipo lágrima, aunque la barilla de la parte inferior es algo gruesa.",
      capacity: 1500,
      image: [
        "https://images.samsung.com/is/image/samsung/es-galaxy-a20-sm-a202-sm-a202fzkdphe-frontblack-thumb-159424313",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Samsung Galaxy A21",
      stock: 100,
      cost: 50000,
      description :"Samsung Galaxy A21 cuenta con sistemas GSM , HSPA , LTE. La fecha de presentación es Abril 8 2020. Tiene el sistema operativo Android 10.0; One UI 2.0. El dispositivo Samsung Galaxy A21 tiene 32GB 3GB RAM de memoria incorporada. El tamaño de la pantalla principal es de 6.5 pulgadas, 102.0 cm2 con la resolución 720 x 1600 píxeles, 20:9 ratio . El número de píxeles por una pulgada (ppi) es de aproximadamente 270 ppi density). Preliminary specifications",
      capacity: 1500,
      image: [
        "https://images.samsung.com/is/image/samsung/es-galaxy-a21s-sm-a217fzwoeub-thumb-330x330-262755627?$480_480_PNG$"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: [
        {
          "comment": ".",
          "rating": "4"
        }
      ]
    },
    {
      id: 3,
      name: "Samsung Galaxy A30",
      stock: 92,
      cost: 60000,
      description: "El Galaxy A30 es un smartphone para disfrutar por completo del buen entretenimiento, no exageramos al decirlo, ya que, Samsung lo ha lanzado como un celular que “está rediseñando el entretenimiento para darte más de lo que te encanta. Otra prueba de esto es su cámara dual trasera que ofrece un sensor de 16 MP y un segundo de 5 MP para captar imágenes con profundidad y alta calidad en el color, entre sus novedades está el efecto bokeh y la inteligencia artificial que usa para tomar fotos con el mejor ángulo y luz sin mayor esfuerzo. La salidas en familia y la toma de fotografías ya no va a ser un problema para tu papá con esta cámara que hace todo por él. En cuanto al diseño, Galaxy optó por un acabado brillante, un sensor de huellas dactilares ubicado en la parte trasera casi imperceptible, desbloqueo facial y una batería de larga duración y carga rápida. Detalles que tu papá apreciará pues es un smartphone liviano y resistente, el desbloqueo dactilar y facial será muy útil si tiene nietos traviesos con ansias de descargar juegos, y la duración de la batería será un plus pues ellos generalmente no les gusta estar cargando de forma continua su smartphone.",
      capacity: 750,
      image: [
        "data:image/jpeg;base64,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"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 3,
      brandId: 10,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "samsung"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Motorola g7 Plus",
      stock: 100,
      cost: 40000,
      description: "Motorola Moto G7 Plus es un smartphone de 2019. Su tamaño es 157 x 75.3 x 8.3 mm y su peso es 176 pulgadas. Tiene una pantalla LTPS IPS LCD de 6.2. La resolución es de 1080 x 2270 y una densidad de los píxeles de 405 ppi . La cámara frontera singular de 12 MP. La cámara trasera doble de 16 MP. Su procesador es Octa-core 1.8 GHz Kryo 260 y memoria 64 GB, 4 GB RAM. Su batería es de 3000 mAh. Más detalles usted va a encontrar más abajo.",
      capacity: 1500,
      image: [
        "https://tse4.mm.bing.net/th?id=OIP.4YUxj94zYf84G0Kz6jymdQHaHa&pid=Api&P=0&w=172&h=172",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 5,
      name: "Motorola g8 Plus",
      stock: 100,
      cost: 60000,
      description: "El Motorola Moto G8 Plus es el smartphone más poderoso de la octava generación de la serie Moto G de Motorola. Con una pantalla Full HD+ de 6.3 pulgadas, el Moto G8 Plus está potenciado por un procesador Snapdragon 665, acompañado de 4GB de memoria RAM y 64GB de almacenamiento interno expandible. La cámara trasera del Moto G8 Plus es triple, de 48 MP + 16 MP + 5 MP, mientras que su cámara frontal para selfies es de 25 MP. El Moto G8 Plus completa sus características con una batería de 4000 mAh con carga rápida, lector de huellas y corre Android 9.0 Pie.",
      capacity: 1500,
      image: [
        "http://imagenes.cordobavende.com/medianas/390426d63f96f3cd5eb4393f02af1bbe.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 6,
      name: "Motorola g9 Plus",
      stock: 100,
      cost: 70000,
      description: "El Motorola Moto G9 Plus es una nueva variante de la novena generación de la serie Moto G. En este caso, el Moto G9 Plus trae consigo una pantalla Full HD+ de 6.81 pulgadas y está potenciado por un procesador Snapdragon 730G acompañado de 4GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible vía microSD. La cámara principal del Moto G9 Plus es cuádruple, con lentes de 64 MP, 8 MP, 2 MP y 2 MP, mientras que su cámara selfie es de 16 megapixels. Con la energía provista con una generosa batería de 5000 mAh de carga rápida, el Moto G9 Plus completa sus características con lector de huellas montado en un lado del teléfono, y corre Android 10.",
      capacity: 1500,
      image: [
        "hhttps://moviles.info/wp-content/uploads/2020/09/Motorola-Moto-G9-Plus.png",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
    {
      id: 7,
      name: "Iphone X",
      stock: 100,
      cost: 140000,
      description: "El Apple iPhone X es una demostración de fuerza de Apple, mostrando lo que es capaz de hacer y para celebrar los 10 años del iPhone. El iPhone X cuenta con una pantalla de 5.8 pulgadas que abarca todo el frente del teléfono, dejando un espacio arriba para acomodar todos los sensores que contribuyen a Face ID, el nuevo método de desbloqueo por rostro, ya que el botón Touch ID desaparece. Con una atípica resolución de 2436 x 1125 pixels, acomoda 458ppi. Por dentro, el iPhone X tiene el nuevo procesador A11 Bionic. La cámara es dual de 12 MP similar a la del iPhone 8, es resistente al agua y corre iOS 11",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_712930-MLA49627596511_042022-V.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {
      id: 8,
      name: "Iphone 11",
      stock: 100,
      cost: 180000,
      description: "El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.",
      capacity: 1500,
      image: [
        "http://www.vicionet.com/Vel/418-large_default/apple-iphone-11-128gb-.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 9,
      name: "Iphone 12",
      stock: 100,
      cost: 200000,
      description: "El Apple iPhone 12 es parte de la serie 12 del iPhone de Apple, llegando en el 2020 con un diseño que recuerda al iPhone 4 y conectividad 5G. El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.",
      capacity: 1500,
      image: [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fes%2Fshop%2Fbuy-iphone%2Fiphone-12&psig=AOvVaw1fN6Zrge8ifZytT-PIG6Wk&ust=1650071207105000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCyosLwlPcCFQAAAAAdAAAAABAD",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 10,
      name: "Xiaomi Redmi Note9",
      stock: 100,
      cost: 125000,
      description: "El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento. La cámara trasera del Redmi Note 9 es cuádruple, de 48 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara frontal es de 13 MP. El Redmi Note 9 completa sus características con una batería de 5020 mAh de carga rápida, lector de huellas posterior, y MIUI 11 basado en Android 10.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_921099-MLA42643772302_072020-O.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    {  
      id: 11,
      name: "Xiaomi Redmi Note 10",
      stock: 100,
      cost: 130000,
      description: "El Xiaomi Redmi Note 10 es el líder de la décima reencarnación de la serie Redmi Note. Con una pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10 está potenciado por un procesador Snapdragon 678 con 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior del Redmi Note 10 es cuádruple, en configuración 48MP+ 8MP + 2MP + 2MP, mientras que la cámara selfie es de 13 megapixels. Entre el resto de las características se destacan unos parlantes stereo, batería de 5000 mAh de carga rápida, resistencia al agua IP53 y corre MIUI 12 basado en Android 11.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_815921-MLA46490094279_062021-O.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
   ]
 export default products;