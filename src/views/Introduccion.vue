<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5.bg-fondo-1.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/intro/1.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/intro/2.svg')
          p.mb-3 La prospección de clientes es un proceso fundamental de la gestión comercial que permite identificar, caracterizar y seleccionar clientes potenciales de acuerdo con los segmentos objetivo, las características del producto o servicio y la estrategia de ventas de la organización. Su importancia radica en facilitar el reconocimiento de las necesidades y características de los clientes, orientando las acciones comerciales hacia oportunidades con mayor potencial.
          p.mb-0 En este componente se abordarán los tipos y la clasificación de clientes, los mercados en los que participan y las principales estrategias de prospección, atracción, retención y fidelización. Estos temas se desarrollarán mediante conceptos y situaciones propias del contexto comercial, con el propósito de fortalecer la identificación y gestión efectiva de clientes potenciales.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
