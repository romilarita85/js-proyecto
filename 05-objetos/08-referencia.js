
// VALOR vs REFERENCIA en JavaScript

// Tipos primitivos (por valor):-------------------------------
//- "Se copian" cuando se asignan a otra variable o se pasan como argumentos.
// - Incluyen: Number, String, Boolean, undefined, null, Symbol, BigInt.
// - Se copia el **contenido**, NO afectan al original al modificarse.
//-Cuando los asignás o pasás a una función, se copia el valor. 

 // Ejemplo:
//Con numeros:

 let a1 = 1;
 let b1 = a1;
 b1++;
 console.log(a1,b1);//1,2 (a no fue modificado)


//  Tipos de referencia:-----------------------------------------
// -"Se referencian"(objetos,arrays,funciones)
// -Object, Array, Function
// -Cuando los asignás o pasás a una función, se copia la referencia 
// (el puntero a la ubicación en memoria), NO el valor en sí.
// -Se copia la dirección de memoria (referencia al objeto).
// -Si lo modificás, modificás el original también.
// *Usado con objetos, arrays, funciones, clases, etc.
 
//-Con un objeto
let a = {};
let b = a;

b.prop = 1;
console.log(a,b);


/**
 * FUNCIONES con valores primitivos(por valor):
 * - Al pasar un primitivo, se pasa por valor. No se modifica el original.
 */
//-Con funciones:

let num = 1;
function suma(n){
    n++;
}
suma(num);
console.log(num);// 1 (no se modifica el original)
//no aumenta el valor de 1
//para js a y n son dos variables distintas

/**
 *  FUNCIONES con objetos (por referencia):
 * - El objeto puede modificarse desde dentro de la función.
 */
//-Con objetos:
let obj = {prop: 1};

function suma(n){
    n.prop++;
}

suma(obj);
console.log(obj);//{ prop: 2 }


