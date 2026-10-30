<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Prospección de clientes

      .bloque-texto-g.bloque-texto-g--inverso.bg-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-4 La prospección de clientes es el proceso planificado mediante el cual una empresa busca, identifica, analiza y selecciona personas u organizaciones que podrían convertirse en clientes. Constituye una etapa fundamental de la gestión comercial porque permite generar nuevas oportunidades de venta y mantener una base de clientes potenciales que pueda ser gestionada y actualizada.
          p.mb-0 Prospectar no consiste solamente en obtener nombres, teléfonos o correos electrónicos. Requiere determinar previamente qué tipo de cliente busca la empresa, qué necesidad puede atender, qué características debe cumplir y por qué podría estar interesado en la oferta. De esta manera, el asesor comercial evita realizar contactos indiscriminados y concentra sus esfuerzos en oportunidades con mayor afinidad.

      p.mb-5(data-aos='fade-right') La búsqueda de clientes potenciales puede realizarse mediante diferentes fuentes y canales, como bases de datos autorizadas, referencias de clientes, redes sociales y profesionales, directorios empresariales, eventos y ferias, formularios de contacto, visitas comerciales, alianzas y canales digitales de la organización.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 2.] Canales para atraer clientes potenciales
          .tabla-a.t-cus.mb-0
            table
              thead
                tr
                  th #[b Canal]
                  th #[b Ejemplos]
              tbody
                tr
                  td #[b Canales digitales]
                  td Sitio web, redes sociales, correo electrónico.
                tr
                  td #[b Contacto directo]
                  td Llamadas, mensajes, visitas comerciales.
                tr
                  td #[b Referidos]
                  td Recomendaciones de clientes y contactos.
                tr
                  td #[b Eventos]
                  td Ferias, exposiciones y encuentros comerciales.
                tr
                  td #[b Alianzas]
                  td Convenios con empresas y organizaciones.
                tr
                  td #[b Publicidad]
                  td Anuncios digitales, impresos y material promocional.

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/2.png')
        .col-sm-12.col-lg-7
          .row.justify-content-center.align-items-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/3.svg')
            .col-sm-12.col-lg-10
              p.mb-0 Durante este proceso es fundamental mantener organizada y actualizada la información obtenida. Una base de datos o un sistema CRM puede facilitar el registro de datos de contacto, necesidades identificadas, interacciones realizadas, estado del prospecto y próximas acciones comerciales.
          p.mb-0 Para complementar los conocimientos desarrollados, se invita a visitar el pódcast, un recurso que permitirá fortalecer la comprensión de las estrategias para identificar, seleccionar y establecer contacto con clientes potenciales, mediante acciones orientadas a generar oportunidades comerciales y construir relaciones duraderas.
      
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t5/4.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast. Prospección de clientes: el primer paso hacia nuevas oportunidades comerciales"
              :audio="require_src('@/assets/curso/temas/audio/podcast.mp3')"
          )
      p.mb-3 La prospección también requiere calificar los prospectos. Esto significa analizar si realmente existe una oportunidad que justifique continuar con la gestión comercial. Para ello pueden considerarse aspectos como la necesidad del cliente, su correspondencia con el segmento objetivo, interés en la oferta, capacidad de compra y posibilidad de avanzar en la decisión.

      p.mb-0 De esta forma, la prospección no termina cuando se encuentra un posible cliente. Su propósito es lograr que los prospectos adecuados avancen de manera organizada hacia las siguientes etapas del proceso comercial, mediante contacto, asesoría y seguimiento pertinentes.

</template>

<script>
export default {
  name: 'Tema5',
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
