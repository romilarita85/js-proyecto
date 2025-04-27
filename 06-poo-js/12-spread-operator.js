//SPREAD OPERATOR:
// El spread operator (...) en JavaScript permite expandir elementos 
// de un objeto o un array -> desglosarlos de manera más sencilla.
// Se utiliza para:
// 1. Copiar o fusionar arrays u objetos.
// 2. Descomponer o "expandir" los elementos de un array u objeto 
//   en elementos individuales.

// Cómo funciona:
// 1. Con Arrays: Al usar el spread operator con arrays, 
//    podemos copiar un array, fusionar varios arrays o acceder a elementos 
//    individuales de forma más sencilla.
// 2. Con Objetos: Al usarlo con objetos, podemos copiar 
//    las propiedades de un objeto a otro, o combinar varios objetos.
//********************************************************************/
// Ejemplos:
// 1. Spread Operator con Arrays:
// • Copiar un Array:
const frutas = ['manzana', 'naranja', 'banana'];
const copiaFrutas = [...frutas];
console.log(copiaFrutas); // ['manzana', 'naranja', 'banana']
//----------------------
// • Fusionar Arrays:
const frutas1 = ['manzana', 'naranja'];
const verduras = ['lechuga', 'tomate'];

const comida = [...frutas1, ...verduras];
console.log(comida); // ['manzana', 'naranja', 'lechuga', 'tomate']
//----------------------
// • Agregar elementos a un Array:
const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // [1, 2, 3, 4, 5]
//**********************************************************************/
// 2. Spread Operator con Objetos:
// • Copiar un objeto:
const persona = { nombre: "Juan", edad: 30 };
const copiaPersona = { ...persona };
console.log(copiaPersona); // { nombre: "Juan", edad: 30 }

// • Fusionar Objetos:
const persona1 = { nombre: "Juan", edad: 30 };
const trabajo = { profesion: "Ingeniero", empresa: "TechCorp" };

const personaCompleta = { ...persona1, ...trabajo };
console.log(personaCompleta); 
// { nombre: "Juan", edad: 30, profesion: "Ingeniero", empresa: "TechCorp" }

// • Modificar propiedades de un objeto mientras se copia:
const persona2 = { nombre: "Juan", edad: 30 };
const personaModificada = { ...persona2, edad: 31 };
console.log(personaModificada); // { nombre: "Juan", edad: 31 }

// 3. Uso con parámetros en funciones:
// El spread operator también se puede usar para pasar elementos 
// de un array como parámetros de una función.
const numeros1 = [1, 2, 3];

function suma(a, b, c) {
  return a + b + c;
}
console.log(suma(...numeros1)); // 6

// Resumen:
// • El spread operator (...) te ayuda a expandir elementos de arrays 
//   u objetos.
// • Es muy útil para copiar, fusionar o modificar arrays y objetos de manera sencilla.
// • Se utiliza con arrays para desglosar sus elementos y con objetos 
//   para desglosar sus propiedades. 
//   También es útil para pasar elementos de un array como parámetros en funciones.