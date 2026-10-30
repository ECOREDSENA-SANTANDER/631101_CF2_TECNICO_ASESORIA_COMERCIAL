<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Tipos de mercado

      .bloque-texto-g.bg-color-5.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-0 Los mercados pueden clasificarse según #[b quién realiza la compra y el propósito para el cual adquiere los bienes o servicios.] Reconocer estas diferencias permite identificar las características y necesidades de los clientes y orientar las estrategias de prospección y venta de acuerdo con cada mercado.

      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Mercado de consumo

      p.mb-3(data-aos='fade-right') El mercado de consumo está conformado por personas y hogares que adquieren bienes y servicios principalmente para satisfacer necesidades personales o familiares.
      p.mb-5(data-aos='fade-right') Algunos ejemplos son:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Compra de alimentos.
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Compra de ropa.
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-md-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Compra de dispositivos tecnológicos.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Compra de servicios de telefonía, transporte o entretenimiento.

      p.mb-5(data-aos='fade-right') Las decisiones de estos consumidores pueden estar relacionadas con preguntas como las que describe la siguiente figura:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bg-color-3.p-4.p-md-5.br-2
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 3.] Comportamiento de compra del consumidor
            figure.mb-0
              img.mb-0(src='@/assets/curso/temas/t2/2.svg', alt='Aspectos que permiten conocer qué, por qué, dónde, cuándo, con qué frecuencia y en qué cantidad compran los consumidores.')

      p.mb-5(data-aos='fade-right') Conocer estas características permite a las empresas comprender mejor el comportamiento de sus clientes y diseñar ofertas acordes con sus necesidades.

      .cajon.color-adicional.p-4.p-md-5.mb-5(data-aos='fade-right')
        p.mb-0 Por ejemplo, una empresa puede identificar clientes que compran ocasionalmente, clientes frecuentes y clientes que adquieren mayores cantidades. Esta información facilita la segmentación del mercado y permite desarrollar estrategias diferenciadas de prospección, comunicación, venta y fidelización.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/4.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Por tanto, conocer los tipos de clientes y comprender su comportamiento constituye una base para realizar una prospección más efectiva, identificar oportunidades comerciales y brindar una asesoría coherente con las necesidades del cliente y los objetivos de la organización.
          p.mb-0 El #[b mercado de consumo] es el espacio en el que se realizan transacciones de bienes y servicios destinados principalmente a satisfacer las necesidades personales o familiares del consumidor. En este mercado, las personas adquieren productos finales, es decir, aquellos que están listos para ser utilizados o consumidos y que, por lo general, no se compran para transformarlos, producir otros bienes o comercializarlos nuevamente.

      p.mb-5(data-aos='fade-right') Algunos ejemplos son:

      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Alimentos.
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Prendas de vestir.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Electrodomésticos.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.mb-4.mb-md-0
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Productos de aseo.
        .col-sm-12.col-md-6.col-lg-3
          .tarjeta--boton.color-acento-contenido.p-4.h-100.d-flex.align-items-center.justify-content-center
            p.mb-0.text-center Servicios de entretenimiento.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.svg')
        .col-sm-12.col-lg-6
          .bg-color-6.p-4.p-md-5
            p.mb-0 Los productos de consumo pueden clasificarse según la frecuencia de compra, el esfuerzo que realiza el cliente para elegirlos y el nivel de comparación entre las alternativas disponibles. Esta clasificación permite comprender mejor cómo actúa el consumidor y qué tipo de estrategia puede utilizar durante el proceso de venta.

      .tarjeta.bg-fondo-2.pcus-4.pcus-3.mb-5(data-aos='fade-right')
        SlyderA.pcus-2.pcus-1(tipo="b")
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Productos de conveniencia
              p.mb-0 Son aquellos que el consumidor adquiere con frecuencia, de manera rápida y realizando poco esfuerzo para comparar alternativas. Generalmente son productos de uso cotidiano, de fácil acceso y disponibles en numerosos puntos de venta. Algunos ejemplos son alimentos básicos, bebidas, productos de aseo personal y artículos de limpieza. En estos casos, aspectos como la disponibilidad, el precio y la facilidad de compra pueden influir significativamente en la decisión.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/6.png')

          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Productos de comparación
              p.mb-0 Son aquellos para los cuales el consumidor dedica más tiempo a buscar información y comparar diferentes opciones antes de tomar una decisión. Puede analizar características como precio, calidad, diseño, funcionalidad, garantía o condiciones de pago. Algunos ejemplos son prendas de vestir, electrodomésticos, muebles, computadores y teléfonos celulares. En este tipo de compra, la asesoría comercial cumple un papel importante al facilitar información que permita comparar alternativas.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/7.png')

          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-6.mb-4.mb-lg-0
              h4.mb-4 Productos de especialidad
              p.mb-0 Son productos que poseen características particulares, reconocimiento o atributos específicos por los cuales el consumidor está dispuesto a realizar un mayor esfuerzo de búsqueda y compra. La decisión puede estar relacionada con la marca, exclusividad, desempeño, diseño o características especializadas. Por ejemplo, determinados vehículos, equipos tecnológicos especializados, artículos de lujo o servicios profesionales específicos.
            .col-sm-12.col-lg-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/8.png')

      p.mb-0(data-aos='fade-right') Reconocer estas categorías ayuda al asesor comercial a adaptar su estrategia de atención y venta. Un cliente que compra un producto de conveniencia suele requerir un proceso más ágil, mientras que quien busca un producto de comparación o especialidad puede necesitar más información, orientación y acompañamiento antes de tomar su decisión.

      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Mercados industriales

      p.mb-5(data-aos='fade-right') Los mercados industriales están conformados por empresas y organizaciones que adquieren bienes o servicios para utilizarlos en sus procesos productivos, operativos o comerciales. A diferencia del mercado de consumo, donde generalmente se compra para satisfacer una necesidad personal o familiar, en el mercado industrial la compra está relacionada con las actividades y objetivos de una organización.

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/9.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-0 Por ejemplo, una panadería que compra harina para elaborar sus productos, una fábrica que adquiere maquinaria para su proceso de producción o una empresa que contrata un servicio de mantenimiento están participando en un mercado industrial. En estos casos, el producto o servicio adquirido contribuye al funcionamiento de la organización, a la elaboración de otros productos o a la prestación de sus servicios.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/10.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Las compras industriales suelen requerir un proceso de decisión más estructurado. Antes de comprar, las empresas pueden comparar proveedores, precios, calidad, cantidades disponibles, tiempos de entrega, garantías, condiciones de pago y servicio posventa. Además, en una misma decisión pueden participar diferentes personas, como responsables de compras, administradores, técnicos, supervisores o gerentes.
          p.mb-0 De acuerdo con el propósito de la compra, pueden reconocerse tres tipos principales de compradores industriales:
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/11.png')

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.p-md-5.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t2/12.svg')
            h4.text-center.mb-3 Productores
            p.text-center.mb-0 Adquieren materias primas, equipos, insumos o servicios necesarios para elaborar otros bienes o prestar servicios. Por ejemplo, una fábrica de muebles compra madera, pinturas y herramientas.

        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.color-acento-contenido.p-4.p-md-5.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t2/13.svg')
            h4.text-center.mb-3 Empresas u organizaciones usuarias
            p.text-center.mb-0 Compran productos y servicios necesarios para desarrollar sus actividades, aunque estos no formen parte directamente del producto final. Por ejemplo, una empresa adquiere computadores, mobiliario o servicios de vigilancia para su funcionamiento.

        .col-sm-12.col-md-6.col-lg-4
          .tarjeta--boton.color-acento-contenido.p-4.p-md-5.h-100
            .row.justify-content-center.mb-4
              .col-5
                img(src='@/assets/curso/temas/t2/14.svg')
            h4.text-center.mb-3 Intermediarios industriales
            p.text-center.mb-0 Adquieren productos para distribuirlos o comercializarlos posteriormente entre otras empresas u organizaciones.

      .cajon.color-adicional.p-4.p-md-5.mb-0(data-aos='fade-right')
        p.mb-4 Según la naturaleza de los bienes y servicios comercializados, los mercados industriales también pueden comprender productos agropecuarios y procedentes del mar, materias primas, productos técnicos o industriales, productos manufacturados y servicios.
        p.mb-0 Conocer las características de este mercado es importante porque la venta a una organización requiere identificar no solamente qué necesita, sino también quién participa en la decisión de compra, cuáles son los requisitos técnicos y comerciales y qué beneficios espera obtener la empresa.

      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Mercados de revendedores

      p.mb-5(data-aos='fade-right') Este mercado está conformado por personas o empresas que adquieren bienes o servicios principalmente para venderlos o comercializarlos nuevamente y obtener una utilidad. A diferencia de un productor industrial, el revendedor normalmente no compra el producto para transformarlo, sino para facilitar que llegue a otros compradores o consumidores.

      .bloque-texto-g.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/15.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-0 Un ejemplo son los supermercados, que adquieren alimentos, bebidas, productos de aseo y otros artículos de diferentes proveedores para posteriormente ofrecerlos a sus clientes. También participan en este mercado distribuidores, mayoristas, minoristas y otros intermediarios comerciales.

      .row.justify-content-center.align-items-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/16.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Entre los principales tipos de revendedores se encuentran los #[b mayoristas], que generalmente compran grandes cantidades para venderlas a otros negocios; los #[b minoristas], que comercializan productos principalmente al consumidor final; y los #[b distribuidores], que facilitan la comercialización y disponibilidad de los productos en determinados territorios o canales.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/17.png')

      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Mercados de gobierno

      p.mb-5(data-aos='fade-right') Están conformados por entidades del sector público que adquieren bienes y servicios necesarios para desarrollar sus funciones y atender necesidades de la población. Estas adquisiciones pueden incluir desde equipos de oficina y tecnología hasta medicamentos, alimentos, vehículos, infraestructura, mantenimiento, consultoría y diferentes servicios especializados.

      .row.justify-content-center.align-items-center.bg-fondo-1.mb-5.g-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/18.png')
        .col-sm-12.col-lg-7.p-4.p-md-5
          p.mb-4 Por ejemplo, una entidad pública puede contratar una empresa para realizar mantenimiento de instalaciones, adquirir computadores para sus funcionarios o comprar materiales destinados al desarrollo de programas institucionales. En estos casos, la entidad pública actúa como cliente, mientras que las empresas interesadas participan como posibles proveedores.
          p.mb-0 Las compras realizadas por entidades públicas están sujetas a procedimientos, requisitos y condiciones establecidos para la contratación pública. Por ello, las empresas interesadas en este mercado deben conocer las condiciones de participación, especificaciones técnicas, documentación requerida, tiempos y demás criterios establecidos en cada proceso de contratación.

      p.mb-0(data-aos='fade-right') Desde la perspectiva comercial, este mercado representa oportunidades para empresas capaces de ofrecer productos o servicios que respondan a las necesidades del sector público y que cumplan las condiciones establecidas para su adquisición.

      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.5 Mercados internacionales

      p.mb-5(data-aos='fade-right') Los mercados internacionales comprenden las operaciones comerciales que se realizan entre personas, empresas u organizaciones ubicadas en diferentes países. Estas operaciones permiten que productos y servicios sean comercializados más allá del mercado nacional mediante actividades como la exportación y la importación.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bg-color-3.p-4.p-md-5.br-2
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 4.] Importación y exportación en los mercados internacionales
            figure.mb-0
              img.mb-0(src='@/assets/curso/temas/t2/19.svg', alt='Diferencia entre exportar productos o servicios hacia otros países e importar bienes o servicios provenientes del exterior.')

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/20.svg')
            .col-sm-12.col-lg-10
              p.mb-0 En los mercados internacionales pueden participar consumidores, empresas productoras, distribuidores, revendedores y entidades públicas. Por esta razón, las organizaciones deben conocer las características del país y del mercado al que desean llegar, incluyendo las necesidades de sus clientes, requisitos comerciales, condiciones de distribución, aspectos culturales, regulaciones aplicables y características de la competencia.
          p.mb-0 Participar en estos mercados también puede permitir que una empresa aproveche una #[b ventaja competitiva], entendida como una característica o capacidad que le permite diferenciarse de sus competidores y generar mayor valor para sus clientes.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/21.png')

      .cajon.color-adicional.p-4.mb-4(data-aos='fade-right')
        p.mb-0.text-center Por ejemplo, con la calidad, el precio, la innovación, el servicio, la experiencia, la tecnología o alguna característica particular de sus productos.
      p.mb-0 Reconocer los diferentes mercados permite comprender que no todos los clientes compran por las mismas razones ni siguen el mismo proceso de decisión. Un consumidor final, una empresa industrial, un supermercado, una entidad pública y un comprador internacional tienen necesidades y condiciones diferentes; por ello, la prospección y la estrategia comercial deben adaptarse al tipo de cliente y al mercado en el que participa.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
