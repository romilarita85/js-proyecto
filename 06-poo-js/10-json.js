//JSON (JavaScript Object Notation):

//JSON es un formato de texto ligero y fácil de leer 
//que se utiliza para almacenar y transferir datos. 
//Es similar a un objeto de JavaScript, pero en formato de texto, 
//y se usa comúnmente para enviar datos entre servidores y aplicaciones web.

//-JSON usa pares de clave-valor, y sus claves están entre comillas dobles.
//-Se puede convertir a un objeto de JavaScript con JSON.parse(), 
// y un objeto de JavaScript a JSON con JSON.stringify().

//{
//    "nombre": "Juan",
//    "edad": 30,
//    "activo": true
//}
//1-Definicion de un objeto JSON
const persona = {
    "nombre": "Juan",
    "edad": 30,
    "activo": true
};

console.log(persona);
//Es ampliamente usado en APIs y bases de datos por su simplicidad 
//y compatibilidad entre diferentes lenguajes de programación.

//2-Simulación de obtener datos JSON desde una API
const jsonResponse = '{"nombre": "Juan", "edad": 30, "activo": true}';

//3-Convertir JSON a objeto JavaScript
const persona1 = JSON.parse(jsonResponse);

//4-Acceder a los datos
console.log(persona1.nombre);  // "Juan"
console.log(persona1.edad);    // 30
console.log(persona1.activo);  // true

//5-Modificar datos
persona1.edad = 31;

console.log(persona1);  // { nombre: 'Juan', edad: 31, activo: true }

//6-Convertir objeto de nuevo a JSON
const jsonString = JSON.stringify(persona1);
console.log(jsonString); // '{"nombre":"Juan","edad":31,"activo":true}'

//Usas JSON.stringify() para convertir el objeto de JavaScript 
//nuevamente en una cadena JSON. 
//Esta cadena es la que podrías enviar a un servidor o almacenar en un archivo.
/**
 * Qué tener en cuenta:

    -El formato JSON no permite comentarios (aunque en JavaScript sí).

    -Las claves siempre deben ir entre comillas dobles.

    -Los objetos se definen con {} y las listas o arrays con [].
 */
//------------------------------------------------------------------------------
//1. Uso de fetch (para navegador)
//El método fetch() se utiliza en el navegador para 
// hacer solicitudes HTTP (como obtener un archivo JSON). 
// Esto solo funcionará en el navegador, ya que no es una API disponible en Node.js.
/* fetch('datos.json')
  .then(response => response.json())  
  .then(data => {
    console.log(data);  
    console.log(data.nombre);  
    console.log(data.dirección.ciudad);  
  })
  .catch(error => console.log('Error al cargar el archivo JSON: ', error));

  const fs = require('fs'); */
//-------------------------------------------------------
//2-Uso de fs (para Node.js)
//El módulo fs (File System) se usa en Node.js para leer y 
// escribir archivos en el sistema. Si estás trabajando 
// en un entorno de Node.js (fuera del navegador), este código funcionará:

// Importar el módulo fs de Node.js
const fs = require('fs');

//Leer el archivo JSON de manera sincrónica
const data = fs.readFileSync('06-poo-js/10-1-ejemplojson.json', 'utf8');

// Convertir el archivo JSON a un objeto JavaScript
const jsonData = JSON.parse(data);

// Mostrar los datos en la consola
console.log(jsonData);
console.log(jsonData.nombre);  // "Marge"
console.log(jsonData.dirección.ciudad);  // "Springfield"