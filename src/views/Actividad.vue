<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> fortalecer la apropiación de conocimientos sobre prospección de clientes, tipos de mercado, clasificación de clientes, estrategias de atracción, retención y fidelización, así como etapas y herramientas del proceso comercial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa desea ampliar su cartera comercial. ¿Qué acción corresponde a una prospección efectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar personas o empresas con características afines al cliente objetivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Contactar únicamente a clientes que ya compran con frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el portafolio antes de analizar el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar a que los compradores contacten espontáneamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo Prospección de clientes.',
        },
        {
          id: 2,
          texto:
            '¿Qué criterio ayuda a priorizar un prospecto antes de iniciar el contacto comercial?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de publicaciones que realiza en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su necesidad, capacidad de compra y posibilidad de decisión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de competidores existentes en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La antigüedad de la empresa que realiza la venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una familia compra alimentos para su consumo en el hogar. ¿A qué tipo de mercado pertenece esta compra?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mercado industrial.', esCorrecta: false },
            { id: 'b', texto: 'Mercado de revendedores.', esCorrecta: false },
            { id: 'c', texto: 'Mercado de consumo.', esCorrecta: true },
            { id: 'd', texto: 'Mercado gubernamental.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una empresa adquiere materias primas para fabricar muebles. ¿En qué mercado participa como compradora?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mercado industrial.', esCorrecta: true },
            { id: 'b', texto: 'Mercado de consumo.', esCorrecta: false },
            { id: 'c', texto: 'Mercado de revendedores.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mercado internacional exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Un distribuidor compra productos terminados para venderlos posteriormente a comercios minoristas. ¿Qué función cumple?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Consumidor final.', esCorrecta: false },
            { id: 'b', texto: 'Revendedor.', esCorrecta: true },
            { id: 'c', texto: 'Organismo gubernamental.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Productor de materias primas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Una alcaldía adquiere equipos para prestar un servicio público. ¿A qué tipo de mercado corresponde esta operación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mercado de consumo.', esCorrecta: false },
            { id: 'b', texto: 'Mercado industrial.', esCorrecta: false },
            { id: 'c', texto: 'Mercado de gobierno.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Mercado de clientes inactivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué situación representa una oportunidad de prospección en un mercado internacional?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una empresa identifica compradores potenciales en otro país.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un cliente devuelve un producto en el mismo establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un empleado solicita materiales para uso interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una empresa realiza únicamente ventas entre sus sucursales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué acción favorece la atracción de nuevos clientes?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los canales digitales de contacto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comunicar una propuesta de valor dirigida al público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suspender las actividades promocionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ofrecer la misma información sin considerar el perfil del prospecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Después de una primera compra, ¿qué acción contribuye a la retención del cliente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar toda comunicación con el comprador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar los tiempos de atención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar seguimiento y ofrecer atención posventa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar los beneficios asociados a futuras compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué práctica fortalece la fidelización de clientes?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener experiencias satisfactorias y relaciones de valor en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Concentrarse únicamente en conseguir compradores nuevos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir los canales de atención disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el seguimiento después de la venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Una persona solicita información y cotización, pero aún no compra. ¿Cómo se clasifica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cliente leal.', esCorrecta: false },
            { id: 'b', texto: 'Cliente inactivo.', esCorrecta: false },
            { id: 'c', texto: 'Cliente potencial.', esCorrecta: true },
            { id: 'd', texto: 'Cliente actual recurrente.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál situación corresponde a un cliente actual?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nunca ha tenido contacto con la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ha comprado recientemente y mantiene relación comercial con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dejó de comprar hace varios años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo pertenece al público general del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué comportamiento permite reconocer a un cliente leal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cambia constantemente de proveedor sin expresar preferencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Compra una vez y no vuelve a relacionarse con la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantiene compras recurrentes y una relación favorable con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solicita información, pero nunca ha realizado una compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué acción puede ser adecuada para recuperar un cliente inactivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Excluirlo de toda comunicación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Contactarlo con una propuesta pertinente según su historial y necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clasificarlo automáticamente como cliente leal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar sus antecedentes de compra antes de analizarlo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Antes de contactar a posibles compradores, ¿qué debe hacer la empresa en la etapa de identificación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir y localizar prospectos acordes con el perfil buscado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cerrar la venta sin realizar contacto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Emitir la factura del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar únicamente acciones de posventa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Para qué se realiza la calificación de prospectos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para asignar el mismo nivel de prioridad a todos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para determinar cuáles presentan mejores condiciones para avanzar comercialmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para reemplazar el contacto inicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar la necesidad de seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 17,
          texto: 'Durante el contacto inicial, ¿qué actuación es más adecuada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar una propuesta sin indagar necesidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Escuchar al prospecto y relacionar sus necesidades con la oferta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solicitar el cierre inmediato de la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar registrar la información obtenida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Un prospecto manifestó interés, pero aún no decide comprar. ¿Qué acción corresponde al seguimiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Descartar inmediatamente al prospecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Enviar información pertinente y mantener un contacto oportuno.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suspender toda comunicación hasta que compre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Clasificarlo como cliente inactivo sin analizar su interés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué herramienta facilita organizar datos, interacciones y avances de los prospectos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un sistema CRM.', esCorrecta: true },
            { id: 'b', texto: 'Una nómina de empleados.', esCorrecta: false },
            { id: 'c', texto: 'Un balance contable.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Un inventario de activos fijos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué técnica de prospección permite acercarse a potenciales clientes mediante contenido e interacción en plataformas digitales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control de inventarios.', esCorrecta: false },
            { id: 'b', texto: 'Redes sociales.', esCorrecta: true },
            { id: 'c', texto: 'Facturación electrónica.', esCorrecta: false },
            { id: 'd', texto: 'Auditoría financiera.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada aplicación de los conceptos y estrategias asociados a la prospección de clientes.',
          mensaje_incorrecto:
            'Le recomendamos revisar nuevamente los contenidos del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra una adecuada apropiación de los contenidos sobre prospección de clientes.',
      mensaje_final_reprobado:
        'Aún no ha superado la actividad. Le recomendamos revisar nuevamente el componente formativo e intentar otra vez la actividad didáctica.',
    },
  }),
}
</script>
