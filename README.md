# amTest

# Levantar el proyecto:

## Para levantar la aplicación cliente, ejecutar:
```
npm start
```
Abrir http://localhost:3000 en el navegador

## Para levantar el servidor, ejecutar en una nueva terminal:
```
npm run server
```
Esto levantará el servidor de prueba en  http://localhost:5000
# Retrospectiva
## ¿Qué es lo que más te gustó de tu desarrollo?
- Me gustó haber completado la prueba de desarrollar una aplicación hecha con React desde cero. React es una librería que me gusta mucho pero no he tenido muchas oportunidades de trabajar con ella en mis anteriores empleos.
## Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
- Me habría gustado tener un código más limpio, con mayor separación de responsabilidades entre capas, con validaciones parametrizadas en lugar de tener criterios de validación en hardcode.
- Agregar un loader/spinner cada que se realizara una petición AJAX para mejorar la experiencia de usuario.
- Crear algún recurso en la nube para almacenar los archivos y que el formato del campo image, de cada personaje, tuviera el mismo formato de url.
## Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste
- Había nombres de personajes que eran muy largos y tuve que ajustar varias veces los estilos para que el contenido de las tarjetas no se saliera de las mismas y a su vez cumplir con los criterios del look & feel.
- Al no tener un backend real o un recurso para almacenar archivos tuve problema para renderizar las imágenes de los nuevos personajes creados. Tuve que agregar una validación basada en el patrón http para renderizar las imágenes como url o como base 64, según el caso.
