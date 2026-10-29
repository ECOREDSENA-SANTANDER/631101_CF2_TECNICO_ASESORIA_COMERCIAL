<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La prospección de clientes integra el conocimiento del cliente, sus necesidades y comportamiento con la identificación del mercado y la aplicación de estrategias comerciales orientadas a generar oportunidades de venta. Este proceso comprende la atracción, selección y clasificación de clientes potenciales, así como acciones de seguimiento, retención y fidelización que permiten fortalecer la relación comercial y concentrar los esfuerzos de la organización en prospectos con mayores posibilidades de convertirse en clientes. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La prospección de clientes integra el conocimiento del mercado, la clasificación de clientes y las estrategias para fortalecer las relaciones comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
