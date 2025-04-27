// Comparación de objetos:
// ------------------------------------------------------------------------
// 1. Comparación de objetos por referencia:
// verifica si dos objetos apuntan a la misma dirección en memoria.
// ------------------------------------------------------------------------
// Cuando comparamos objetos con ===, JavaScript 
// verifica si ambos apuntan a la misma ubicación en memoria.
// *persona1 === persona2 devuelve false porque son objetos 
// diferentes aunque tengan las mismas propiedades y valores.
// *persona1 === persona3 devuelve true porque persona3 apunta 
// al mismo objeto que persona1.
//-------------------------------------
// Creación de objetos

const persona1 = { nombre: "Juan", edad: 30 };
const persona2 = { nombre: "Juan", edad: 30 };
const persona3 = persona1; // Persona3 apunta al mismo objeto que persona1

// Comparación con "===" verifica si son el mismo objeto en memoria
console.log(persona1 === persona2);  // false: son objetos diferentes en memoria
console.log(persona1 === persona3);  // true: persona3 es el mismo objeto que persona1

// ------------------------------------------------------------------------------------
// 2. Comparación de objetos por propiedades (superficial):
//utilizando JSON.stringify(), que convierte los objetos en cadenas y los compara.
// ------------------------------------------------------------------------------------
// Para comparar propiedades y valores de objetos de manera más sencilla, 
// utilizamos JSON.stringify(). Esta función convierte el objeto 
// en una cadena de texto, lo que nos permite comparar dos objetos de manera superficial.
// Si las propiedades y los valores son iguales, la comparación 
// devuelve true, de lo contrario, false.

// Comparación superficial utilizando JSON.stringify
function compararObjetos(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const personaA = { nombre: "Juan", edad: 30 };
const personaB = { nombre: "Juan", edad: 30 };

console.log(compararObjetos(personaA, personaB));//true: son iguales en propiedades y valores
// ----------------------------------------------------------------------------------
// 3. Comparación profunda de objetos:realiza una comparación recursiva 
// de todas las propiedades de los objetos, incluidas las propiedades anidadas.
// ------------------------------------------------------------------------------------
// Para comparar objetos que contienen otros objetos (anidados), 
// necesitamos realizar una comparación recursiva.
// En la función compararObjetosProfundos, primero verificamos 
// si los valores son primitivos o nulos, y luego comparamos 
// las claves de los objetos. Si todos los valores de 
// las propiedades coinciden, la comparación devuelve true.

// Si los objetos son más complejos, podemos hacer una comparación recursiva
function compararObjetosProfundos(obj1, obj2) 
{
  // Si son valores primitivos o nulos, compara directamente
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // Compara las claves de los objetos
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Si el número de claves es diferente, los objetos son distintos
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compara recursivamente todas las propiedades
  for (let key of keys1) {
    if (!compararObjetosProfundos(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true; // Si todas las propiedades coinciden
}

const persona4 = { nombre: "Juan", direccion: { ciudad: "Buenos Aires", pais: "Argentina" } };
const persona5 = { nombre: "Juan", direccion: { ciudad: "Buenos Aires", pais: "Argentina" } };

console.log(compararObjetosProfundos(persona4, persona5));  // true: son iguales en todas las propiedades
