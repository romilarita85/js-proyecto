//Atajos constructores:

//1-Podemos crear objetos : 
// 🔹 Atajo con objeto literal (forma recomendada)
//Con atajo de js para llamar al constructor de objetos
let obj = {}; 
// 🔹 Usando el constructor de Object
let obj1 = new Object();

/**
 * 2-Otros constructores:
 * 
 * new Array(); []  ->crea un array
 * new String(); ""  '' ` ` ->crea un string
 * new Number(); 12 ->crea numeros
 * new Boolean(); true, false
 * 
 * ⚠️ Los valores literales (como "", true, 123) se comportan 
 * diferente a los creados con los constructores (new String(), etc.)
 */
// 💡 Ejemplo:
const s1 = "1 + 1";// String literal
const s2 = new String("1 + 1")// String como objeto

// console.log(s1, s2);
// console.log(eval(s1), eval(s2));
//*USAMOS VALUEOF POR SI QUEREMOS SABER LOS VALORES PRIMITIVOS DEL STRING COMO OBJETO
console.log(s2.valueOf());// "1 + 1"
/**
 * ✅ RECOMENDACIONES:
 * - Siempre conviene usar literales ("", 123, true, etc.).
 * - Solo usar new String(), new Number(), etc., si es estrictamente necesario.
 * - En ese caso, usar .valueOf() para obtener el valor primitivo.
 */

 //3-¿Qué constructor tiene un objeto creado con una función constructora?
function Usuario(){
    this.name = "Chanchito feliz"
}
let user = new Usuario();
console.log(user.constructor);// 👉 [Function: Usuario]

/**
 * 🧠 El typeof en JavaScript
Cuando usás typeof, estás preguntando qué tipo primitivo o referenciado tiene un valor.
*Primitivos vs Objetos
-Primitivos: string, number, boolean, null, undefined, symbol, bigint
-Objetos: todo lo que se crea con new, arrays, funciones, objetos literales...
 
typeof ""               // "string" ✅ tipo primitivo
typeof new String("")   // "object" ✅ objeto envoltorio
typeof typeof new String("") // "string" 😄 porque typeof SIEMPRE devuelve un string
-----------------------------------------------------------------------

typeof new String("")  // 👉 esto devuelve: "object"
// 🧠 typeof con valores primitivos:
console.log(typeof "hola");    // 👉 "string"
console.log(typeof 42);        // 👉 "number"
console.log(typeof true);      // 👉 "boolean"
console.log(typeof undefined); // 👉 "undefined"
console.log(typeof null);      // 👉 "object" ← (¡ojo con esto! es un bug histórico)

// 🎁 typeof con objetos envoltorios
console.log(typeof new String("hola")); // 👉 "object"
console.log(typeof new Number(42));     // 👉 "object"
console.log(typeof new Boolean(true));  // 👉 "object"

// 📦 ¿Qué son los objetos envoltorios?
// Son objetos que "envuelven" valores primitivos. No se recomiendan para uso común.

let primitivo = "texto";
let objeto = new String("texto");

console.log(primitivo == objeto);  // 👉 true  (compara contenido)
console.log(primitivo === objeto); // 👉 false (compara tipo + contenido)

// 🚨 typeof siempre devuelve un string
console.log(typeof typeof new String("hola")); // 👉 "string"

// 💡 Recomendación:
/// ✅ Usar valores primitivos ("" / 42 / true)
/// ❌ Evitar new String(), new Number(), new Boolean()


*/
