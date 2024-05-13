import React from 'react'

export const VehicleDetail = () => {
    const vehicles = [
        {
          id: 1,
          imageUrl: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg',
          description: 'Honda Civic, 2024',
          price: 25000,
          detail: 'Tecnologías de seguridad y asistencia al conductor Honda Sensing'+
          'Compatibilidad con Apple CarPlay®* y Android Auto'+ 
          'La 11ª generación de Honda Civic llega completamente renovada y una vez más, reafirma el porqué se ha convertido en un icónico sedán para todos.El nuevo Honda Civic no es para cualquier conductor. Muestra un diseño aerodinámico y sin saturaciones, un diseño que da de qué hablar. Sus nuevas dimensiones como su frente ahora más alargado, le suman presencia consiguiendo una silueta más robusta y deportiva. Cuenta con luces de marcha diurna (DRL) LED, faros de niebla LED*, rines de aluminio de 18"** y tapa de cajuela con apertura completa*. Con solo verlo, vas a querer vivirlo Disponible en versión Touring. Disponible en versión Sport y Touring'
        },
        {
          id: 2,
          imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg',
          description: 'Ford F150 raptor',
          price: 30000,
          detail: 'La Ford F-150® Raptor ofrece un conjunto de tecnologías inteligentes de asistencia al conductor diseñadas para tu confianza y seguridad al conducir.2.Asistente Anti-Colisión con detector de peatones. Sistema de Monitoreo de Punto Ciego BLIS® con Alerta de Tráfico Cruzado con Cobertura de Trailer.Sistema de Permanencia en el carril.Detector de fatiga. Luces Altas Automáticas.Cámara de visión trasera con asistencia dinámica de enganche. Asistente de frenado en reversa. Sistema de frenado post-colisión'
        },
        {
          id: 3,
          imageUrl: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
          description: '2020 Ford Mustang',
          price: 40000,
          detail: 'El Ford Mustang 2020 es un gran ejemplo de cómo una empresa puede mantener un automóvil icónico funcionando bien y haciéndose un nombre en la era moderna. Durante décadas, el Mustang ha sido un muscle car popular que ha mostrado un gran estilo y, hoy en día, todavía está a punto de ser un líder en la industria de los autos deportivos. Viene con muchas opciones de motor y algunas versiones diferentes, y no hay duda de que es divertido de conducir.'
        },
        {
           id: 4,
           imageUrl: 'https://www.motor.com.co/__export/1647271164438/sites/motor/img/2022/03/14/subaru_wrx_sti_2022_render_x-tomi_design_1.jpg_172596871.jpg',
           description: '2024 Subaru WRX',
           price: 50000,
           detail: 'En parte deportivo, en parte corredor de rally, el WRX 2024 es una potencia de rendimiento que comparte simplemente un parecido familiar con el automóvil compacto Impreza de Subaru. El WRX es su propio animal, propulsado por un motor turboalimentado de cuatro cilindros y 2.4 litros de 271 caballos de fuerza que impulsa las cuatro ruedas a través de una transmisión manual de seis velocidades o una transmisión automática continuamente variable (CVT). Nos guste o no, el coche CVT es más rápido, alcanzando las 60 mph en 5,4 segundos en nuestra pista de pruebas. El coche manual es más divertido de conducir y no se queda atrás, con un tiempo de 60 mph de 5,5 segundos. El manejo es ágil y el WRX ataca las curvas con entusiasmo, pero en la transición a esta última generación, Subaru marcó más refinamiento y salió parte de la encantadora inmadurez del WRX.'
        },
        {
           id: 5,
           imageUrl: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1674651825572.jpg',
           description: 'BMW M3',
           price: 70000,
           detail: 'El BMW M3 tiene una locura en su interior. Su tren motriz estándar acumula 473 caballos de fuerza de un motor de seis cilindros en línea biturbo, lo dispara a través de una transmisión manual de seis velocidades y no pierde el tiempo entregándolo a los neumáticos traseros. Y eso es solo el comienzo. El M3 Competition, que solo se ofrece con una transmisión automática de ocho velocidades, aumenta la potencia a 503 y se ofrece con su elección de tracción trasera o total. Con toda esa potencia, uno pensaría que el M3 sería incapaz de ir despacio, pero incluso cuando se conduce a velocidades respetuosas de la ley, es bastante agradable.'
        },
        {
           id: 6,
           imageUrl: 'https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_2de2899df4574f85b8904966a5db387f.jpg',
           description: 'Audi RS 7',
           price: 80000,
           detail: 'el Audi RS7 Sportback 2024 cumple. Cumple tan bien su misión que lo honramos con un premio Editors Choice 2024. La potencia proviene de un motor V-8 biturbo de 591 hp que está atornillado a una transmisión automática de ocho velocidades que envía potencia a las cuatro ruedas. Es un cachorro alegre, y un nuevo acabado Performance agrega un ladrido aún más fuerte, con 621 caballos de fuerza y 627 libras-pie de torque. Incluso cuando las fauces abiertas del RS7 no se tragan insectos a altas velocidades, sirve como un sedán de rendimiento de lujo cómodo y fácil de pilotar, entre los gustos del Cadillac CT5-V Blackwing y el BMW M5. Errando por el lado de la comodidad, el RS7 ataca la carretera con delicadeza en lugar de furia violenta. Su dirección en el eje trasero hace que se sienta más liviano de conducir de lo que sugiere su gran peso en vacío, pero si se lanza el martillo, su velocidad máxima de 190 mph (desbloqueada con opciones de rendimiento) no decepcionará.'
        },
      ];
     
      return <VehicleList vehicles={vehicles} />;
    };
     
    export default VehicleDetail;
