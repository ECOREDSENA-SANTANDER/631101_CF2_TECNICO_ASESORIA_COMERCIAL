<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Conceptualización sobre el cliente

      .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-4 El cliente puede ser una persona, empresa u organización que adquiere un producto o contrata un servicio para satisfacer una necesidad o resolver una situación específica.
          p.mb-0 En la actividad comercial, conocer al cliente permite identificar qué necesita, qué valora, cómo toma sus decisiones de compra y qué factores pueden influir para que elija una determinada oferta.

      p.mb-3(data-aos='fade-right') Es importante diferenciar los roles que pueden presentarse durante una compra. El comprador es quien realiza la adquisición; el consumidor es quien consume el producto, y el usuario es quien utiliza el producto o servicio.
      p.mb-5(data-aos='fade-right') En algunas situaciones, una misma persona desempeña todos estos roles, mientras que en otras corresponden a personas diferentes.

      .row.justify-content-center.align-items-center.bg-color-2.p-4.p-md-5.mb-5.br-1(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.png')
        .col-sm-12.col-lg-6
          p.text-white.mb-4 Por ejemplo, una madre compra un computador para que su hija estudie. En este caso, la madre desempeña el rol de compradora o cliente, mientras que la hija es la usuaria del producto.
          p.text-white.mb-0 Reconocer estas diferencias ayuda al asesor comercial a comprender quién participa en la decisión de compra y hacia quién debe orientar la información y la asesoría.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-3.p-4.p-md-5.br-2
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 1.] Roles relacionados con el cliente
            figure.mb-0
              img.mb-0(src='@/assets/curso/temas/t1/3.svg', alt='Relación progresiva entre los roles de cliente, comprador, consumidor y usuario en el proceso de adquisición y uso de productos o servicios.')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre cliente y usuario

      p.mb-5(data-aos='fade-right') La diferencia principal radica en la relación que cada uno establece con el producto o servicio; el cliente participa en la adquisición o contratación, mientras que el usuario es quien efectivamente lo utiliza. Esta distinción es especialmente importante en servicios, productos empresariales y compras destinadas a terceros.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0 #[b Tabla 1.] Diferencias entre cliente y usuario
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .tabla-a.t-cus.mb-0
            table
              thead
                tr
                  th #[b Cliente]
                  th #[b Usuario]
              tbody
                tr
                  td Adquiere o contrata el producto o servicio.
                  td Utiliza el producto o servicio.
                tr
                  td Puede realizar o autorizar el pago.
                  td No necesariamente realiza el pago.
                tr
                  td Participa en la decisión de compra.
                  td Puede influir en la decisión de compra.
                tr
                  td Puede ser una persona o una organización.
                  td Es quien hace uso del producto o servicio.
                tr
                  td Puede ser también el usuario.
                  td Puede ser diferente del cliente.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El cliente y el mercado

      img.mb-4(src='@/assets/curso/temas/t1/5.png', data-aos='fade-right')

      p.mb-3(data-aos='fade-right') El cliente ocupa un lugar central en la actividad comercial, debido a que las empresas diseñan sus productos, servicios y estrategias de venta buscando responder a las necesidades de determinados grupos de personas u organizaciones. Por esta razón, no todas las empresas se dirigen a los mismos clientes: cada organización identifica los segmentos del mercado que tienen mayor posibilidad de interesarse en su oferta.
      p.mb-3(data-aos='fade-right') Para realizar una adecuada prospección, el asesor comercial necesita reconocer el mercado en el que participa la organización y diferenciar entre quienes podrían convertirse en clientes y quienes ya tienen las condiciones para adquirir el producto o servicio.
      p.mb-5(data-aos='fade-right') Algunos conceptos útiles son:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/6.svg')
              .tarjeta.bg-color-4
                .p-4
                  h4.text-center.mb-3 Mercado potencial
                  p.text-center.mb-0 Conjunto de personas u organizaciones que podrían tener interés en una determinada oferta.

        .col-sm-12.col-md-6.col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/7.svg')
              .tarjeta.bg-color-4
                .p-4
                  h4.text-center.mb-3 Mercado total
                  p.text-center.mb-0 Conjunto de compradores actuales y potenciales que pueden conformar el mercado de un producto o servicio.

        .col-sm-12.col-md-6.col-lg-4.mb-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/8.svg')
              .tarjeta.bg-color-4
                .p-4
                  h4.text-center.mb-3 Mercado disponible
                  p.text-center.mb-0 Consumidores que, además de tener interés, cuentan con condiciones de acceso y capacidad para adquirir la oferta.

        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/9.svg')
              .tarjeta.bg-color-4
                .p-4
                  h4.text-center.mb-3 Mercado disponible calificado
                  p.text-center.mb-0 Consumidores que cumplen las características o requisitos definidos para acceder a una determinada oferta.

        .col-sm-12.col-md-6.col-lg-4
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t1/10.svg')
              .tarjeta.bg-color-4
                .p-4
                  h4.text-center.mb-3 Tamaño del mercado
                  p.text-center.mb-0 Cantidad estimada de compradores que podrían existir para un producto o servicio.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 El proceso de compra del cliente

      p.mb-5(data-aos='fade-right') Conocer al cliente también implica comprender cómo toma sus decisiones de compra.

      .bloque-texto-g.bg-color-5.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/11.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-0 Este proceso puede comenzar cuando la persona identifica una necesidad o problema y continúa con la búsqueda de información, la comparación de alternativas, la elección de una opción y la compra. Posteriormente, el cliente evalúa su experiencia con el producto o servicio.

      .row.justify-content-center.align-items-stretch.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-5.mb-4.mb-lg-0
          .bg-color-3.p-4.p-md-5.br-1.h-100
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 2.] Aspectos relacionados con el mercado
            img.mb-0(src='@/assets/curso/temas/t1/12.svg', alt='Proceso de compra: necesidad, búsqueda de información, evaluación de alternativas, decisión de compra y experiencia posventa.')
        .col-sm-12.col-lg-7.d-flex.flex-column
          p.mb-4 En asesoría comercial, identificar la etapa en la que se encuentra un cliente potencial facilita la selección de una estrategia adecuada.
          .bg-color-6.p-4.p-md-5.pb-0.br-1.flex-grow-1.d-flex.flex-column.justify-content-between
            p.mb-4 Por ejemplo, una persona que apenas busca información requiere orientación sobre las alternativas disponibles; en cambio, quien ya comparó varias opciones puede necesitar información específica sobre precio, beneficios, condiciones de compra o servicio posventa.
            img.wcus-2.m-auto.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t1/13.svg')
</template>

<script>
export default {
  name: 'Tema1',
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
