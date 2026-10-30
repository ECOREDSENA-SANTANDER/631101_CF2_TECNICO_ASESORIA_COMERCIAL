<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Clasificación de clientes

      .bloque-texto-g.bg-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-5.d-flex.flex-column
          p.mb-4 Para desarrollar una gestión comercial efectiva es necesario reconocer que no todos los clientes se encuentran en el mismo momento de su relación con la empresa. Una clasificación básica permite diferenciarlos entre clientes actuales y clientes potenciales, facilitando la selección de acciones comerciales acordes con cada grupo.
          p.mb-0 Los clientes actuales son personas u organizaciones que ya han adquirido productos o servicios de la empresa. Su comportamiento puede analizarse a partir de aspectos como frecuencia de compra, productos adquiridos, valor de las compras, nivel de actividad y permanencia. Esta información ayuda a identificar oportunidades de atención, retención y fidelización.

      .cajon.color-secundario.p-4.p-md-5.mb-5(data-aos='fade-right')
        p.mb-0 Los clientes potenciales son personas u organizaciones que todavía no han realizado una compra, pero presentan características, necesidades o condiciones que indican que podrían interesarse en la oferta de la empresa. No todos tienen la misma posibilidad de convertirse en clientes; por ello, es necesario recopilar información y determinar cuáles representan una oportunidad comercial.

      p.mb-5(data-aos='fade-right') Dentro de este proceso es útil diferenciar tres conceptos:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/2.svg')
            .tarjeta.bg-color-6
              .p-4
                h4.text-center.mb-3 Contacto
                p.text-center.mb-0 Persona u organización de la cual se dispone de información básica, pero todavía no se ha determinado si existe una oportunidad comercial.

        .col-sm-12.col-md-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/3.svg')
            .tarjeta.bg-color-6
              .p-4
                h4.text-center.mb-3 Prospecto
                p.text-center.mb-0 Cliente potencial que presenta características compatibles con el público objetivo y sobre el cual existe información que permite considerar una posible oportunidad de venta.

        .col-sm-12.col-md-6.col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t4/4.svg')
            .tarjeta.bg-color-6
              .p-4
                h4.text-center.mb-3 Prospecto calificado
                p.text-center.mb-0 Prospecto que, después de ser analizado, presenta una necesidad relacionada con la oferta y condiciones que justifican continuar con la gestión comercial.

      p.mb-0(data-aos='fade-right') Esta diferenciación permite que el asesor comercial concentre sus esfuerzos en aquellos contactos con mayores posibilidades de avanzar en el proceso de compra.
</template>

<script>
export default {
  name: 'Tema4',
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
