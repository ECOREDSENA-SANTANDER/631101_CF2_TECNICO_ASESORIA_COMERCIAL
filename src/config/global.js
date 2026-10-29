export default {
  global: {
    Name: 'Prospección de clientes',
    Description:
      'En este componente se abordan las actividades y estrategias que desarrolla una empresa u organización para identificar, seleccionar y captar clientes potenciales. Asimismo, se presentan los tipos de clientes, los mercados en los que participan y las estrategias orientadas a su atracción, retención, fidelización y clasificación de clientes.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptualización sobre el cliente',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Mercado de consumo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Mercados industriales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mercados de revendedores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Mercados de gobierno',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Mercados internacionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Relación entre el mercadeo y los clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Atraer clientes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Retener clientes',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fidelizar clientes',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Prospección de clientes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'persona u organización que adquiere un producto o contrata un servicio para satisfacer una necesidad o resolver una situación específica.',
    },
    {
      termino: 'Fidelizar',
      significado:
        'fortalecer la relación con los clientes para favorecer su permanencia, preferencia, nuevas compras y recomendación de la empresa, mediante experiencias satisfactorias y generación de valor.',
    },
    {
      termino: 'Mercado de consumo',
      significado:
        'conjunto de personas y hogares que adquieren bienes y servicios principalmente para satisfacer necesidades personales o familiares.',
    },
    {
      termino: 'Prospección de clientes',
      significado:
        'proceso planificado mediante el cual una empresa busca, identifica, analiza y selecciona personas u organizaciones que podrían convertirse en clientes.',
    },
    {
      termino: 'Prospecto',
      significado:
        'cliente potencial que presenta características compatibles con el público objetivo y sobre el cual existe información que permite considerar una posible oportunidad de venta.',
    },
    {
      termino: 'Retener',
      significado:
        'mantener activa la relación comercial con quienes ya han adquirido productos o servicios, mediante acciones que favorezcan su continuidad y permanencia con la empresa.',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'grupo de personas u organizaciones que comparten características o necesidades relevantes y que puede ser considerado por la empresa para orientar sus acciones de prospección y venta.',
    },
    {
      termino: 'Cliente potencial',
      significado:
        'persona u organización que aún no ha realizado una compra, pero presenta características, necesidades o condiciones que indican que podría interesarse en la oferta de la empresa.',
    },
    {
      termino: 'Contacto',
      significado:
        'persona u organización de la cual se dispone de información básica, pero aún no se ha determinado si representa una oportunidad comercial.',
    },
    {
      termino: 'Prospecto calificado',
      significado:
        'prospecto que presenta una necesidad relacionada con la oferta y condiciones que justifican continuar con la gestión comercial.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'conjunto de beneficios y atributos que una empresa ofrece para responder a las necesidades del cliente y generar interés en sus productos o servicios.',
    },
    {
      termino: 'CRM',
      significado:
        'sistema de gestión de relaciones con clientes que permite organizar información sobre contactos, compras, preferencias e interacciones para facilitar el seguimiento comercial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agüero Cobo, L. (2014). Estrategia de fidelización de clientes [Trabajo de fin de grado, Universidad de Cantabria].',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2021). Fundamentos de marketing. Pearson.',
    },
    {
      referencia:
        'Lucio Mera, E. (2010). Técnicas de marketing: Identificar, conquistar y fidelizar clientes. Ediciones de la U.',
    },
    {
      referencia:
        'Monferrer Tirado, D. (2013). Fundamentos de marketing. Universitat Jaume I.',
    },
    {
      referencia:
        'Promove Consultoría e Formación SLNE. (2012). Atraer y fidelizar clientes. CEEI Galicia.',
    },
    {
      referencia:
        'Pursell, S. (1 de septiembre de 2021). Clientes potenciales: qué son, qué tipos existen y cómo identificarlos. HubSpot.',
    },
    {
      referencia:
        'Schnarch Kirberg, A. (2013). Marketing para pymes: Un enfoque para Latinoamérica. Alfaomega Colombiana.',
    },
    {
      referencia:
        'Torres Morales, V. (2014). Administración de ventas. Grupo Editorial Patria.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Javier del Carmen Martínez Pérez',
          cargo: 'Instructor técnico',
          centro: 'Centro de Comercio y Servicio - Regional Bolívar',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
