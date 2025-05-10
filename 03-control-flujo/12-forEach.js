// forEach:

// El método forEach() en JavaScript permite ejecutar una función en 
// cada elemento de un array. Es una forma de iterar sobre los elementos 
// sin necesidad de usar un bucle clásico.

array.forEach(function(elemento, indice, array) {
    // Código que se ejecutará en cada iteración
});

// > elemento: El valor del elemento actual que estamos iterando.
// > indice (opcional): El índice del elemento en el array.
// > array (opcional): El array que está siendo iterado.

const frutas = ["manzana", "banana", "uva"];

frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Usando una función de flecha:
frutas.forEach(fruta => console.log(fruta));

// Ejemplo con índice:
frutas.forEach((fruta, indice) => {
    console.log(`El índice es ${indice} y la fruta es ${fruta}`);
});

/**
 * ¿Cómo se diferencia de un for tradicional?
 * - El forEach se ejecuta automáticamente sobre cada elemento del array, 
 *   no necesitamos gestionar el índice o la condición de salida manualmente.
 * - No devuelve nada: A diferencia de un map(), forEach() no genera un nuevo array, 
 *   solo ejecuta una acción para cada elemento del array.
 * - No podemos usar break ni continue: Si necesitas salir de un bucle 
 *   antes de tiempo, deberías usar un bucle for tradicional.
 */

// Ejemplo práctico: Sumar los elementos de un array
const numeros = [10, 20, 30, 40];
let suma = 0;

numeros.forEach(num => { suma  +=  num; });

console.log(suma); // 100

// Extra: Ejemplo con objetos
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 }
];

personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});

// Extra: Comparación con map()
const resultado1 = frutas.forEach(fruta => fruta.toUpperCase()); // undefined

const resultado2 = frutas.map(fruta => fruta.toUpperCase());     // ['MANZANA', 'BANANA', 'UVA']