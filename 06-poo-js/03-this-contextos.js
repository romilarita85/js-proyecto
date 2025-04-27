//this en diferentes contextos:

// Contexto 1: En un método de un objeto
//Comportamiento: Dentro de un método de un objeto, 
//this hace referencia al propio objeto que contiene el método.
const persona1 = {
    nombre: "Romina",
    saludar: function() 
    {
      console.log(`Hola, soy ${this.nombre}`);
    }
};
persona1.saludar();  // Hola, soy Romina
//---------------------------------------------------
// Contexto 2: En una función normal
//Comportamiento: En una función regular (fuera de un objeto), 
//this hace referencia al objeto global (window en navegadores, global en Node.js). 
//En modo estricto ('use strict'), this será undefined.
function saludar() 
{
    console.log(this);  // `this` es el objeto global
}
saludar();

//------------------------------------------------
// Contexto 3: En modo estricto
//Comportamiento: En el modo estricto ('use strict'), el valor de this 
//será undefined en funciones normales, en lugar de referirse al objeto global.

function saludarStrict() 
{
    console.log(this);  // `this` es undefined en modo estricto
}
saludarStrict();
//--------------------------------------------------
// Contexto 4: En un callback ((sin usar .bind(), .call(), .apply())
//Comportamiento: En callbacks, como los pasados a setTimeout o eventos, 
//this normalmente hace referencia al objeto global (window en navegadores), 
// no al objeto donde se declaró el método.
const persona2 = 
{
    nombre: "Romina",
    saludar: function() 
    {
        setTimeout(function(){
            console.log(`Hola, soy ${this.nombre}`);  // `this` es el objeto global
        }, 1000);
    }
};
persona2.saludar();
//------------------------------------------
// Contexto 5: Usando `bind()`
//Comportamiento: Usar .bind() permite especificar explícitamente 
//el valor de this, incluso si la función es llamada en un contexto diferente. 
//Es útil para mantener el valor de this en callbacks.
const persona3 = {
    nombre: "Romina",
    saludar: function() 
    {
        setTimeout(function() {
        console.log(`Hola, soy ${this.nombre}`);  // `this` es el objeto persona
      }.bind(this), 1000);  // Usamos bind para mantener el contexto
    }
};
persona3.saludar();
//----------------------------------------------
// Contexto 6: Usando `call()` y `apply()`
//Comportamiento: .call() y .apply() permiten invocar una función con un this explícito, 
// pasando los argumentos como parámetros o como un array (en el caso de .apply()).
function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}
const persona4 = { nombre: "Romina" };
saludar.call(persona4);  // Hola, soy Romina
saludar.apply(persona4); // Hola, soy Romina

//--------------------------------------------------------
// Contexto 7: En una clase (ES6)
//Comportamiento: En una clase, this hace referencia a la instancia 
//de la clase, es decir, el objeto creado a partir de la clase.
class Persona 
{
    constructor(nombre) 
    {
        this.nombre = nombre;
    }
  
    saludar() 
    {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
const persona5 = new Persona("Romina");
persona5.saludar();  // Hola, soy Romina
/**
 * Resumen clave:

    -Método de objeto: this es el objeto que contiene el método.

    -Función normal: this se refiere al objeto global o undefined en modo estricto.

    -Modo estricto: this es undefined dentro de funciones.

    -Callbacks: this normalmente hace referencia al objeto global, pero se puede corregir usando .bind(), .call() o .apply().

    -.bind(), .call(), .apply(): Cambian el valor de this explícitamente.

    -Clases (ES6): this hace referencia a la instancia de la clase (el objeto creado con new).
 */