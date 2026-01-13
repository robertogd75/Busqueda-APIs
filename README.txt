Proyecto API - Roberto García Delgado

Datos: La API devuelve objetos JSON con nombres, especies y fotos de personajes.

Acceso: No necesita clave ni registro (API pública).

Consulta: Se usa el método GET sobre el endpoint de personajes.

Descripción del trabajo
He desarrollado una página web que carga datos de forma dinámica. El proceso consiste en pedir la información con fetch, esperar la respuesta de forma asíncrona y generar tarjetas de personaje en el HTML usando JavaScript.

El diseño es sencillo y utiliza Flexbox para que las tarjetas se adapten a la pantalla de forma automática sin necesidad de recargar la página.

Problemas encontrados
Al principio los datos no aparecían porque intenté recorrer la respuesta directamente, pero los personajes estaban dentro de una propiedad llamada results. Lo solucioné revisando la estructura del JSON en la consola. También tuve que ajustar el CSS de las imágenes para que todas tuvieran el mismo tamaño.

URL demo: https://robertogd75.github.io/Busqueda-APIs/
URL github: https://github.com/robertogd75/
