//function:
// Las funciones en JavaScript son objetos de primera clase.
// ✅ Esto significa que pueden:
// - Ser asignadas a variables
// - Ser pasadas como argumentos a otras funciones
// - Ser retornadas por otras funciones
// - Tener propiedades y métodos propios

// También existe un constructor especial llamado `Function` (no recomendado).
// Además, funciones como objetos pueden utilizar métodos útiles como `call`, `apply` y `bind`.
//Existen otras propiedades q tienen las funciones 
//q nos puede servir para poder reutilizar codigo

//1- DEFINICIÓN CLÁSICA DE FUNCIONES CONSTRUCTORA
//-Es mejor definir las funciones de esta manera:
function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){console.log('Dibujando... ');}
}
let p = new Punto(3, 5);
p.dibujar(); // 👉 Dibujando...

//2-REUTILIZAR CÓDIGO USANDO .call() y .apply()-extender objetos
// Estos métodos permiten llamar funciones usando un contexto (this) distinto
// - .call() → recibe argumentos separados
// - .apply() → recibe un array de argumentos
// 🎯 Sintaxis:
// funcion.call(contexto, arg1, arg2, ...);
// funcion.apply(contexto, [arg1, arg2, ...]);
let punto = { z: 7 }; //  Este objeto será el nuevo `this` para la función->va a pasar a ser un argumento

// Usando .call():argumentos se pasan uno a uno-------------------------------
//nombreDeLaFuncion.call({},argumentos de la funcion)
//{} = contexto de this
// Punto.call(punto, 1, 2); // ← así le paso los valores a x e y separados

//call permite llamar funciones a las cuales les puedo pasar el contexto de this
// y poder aumentar los valores q le estoy pasando

// Usando .apply():-----------------------------------------------------------
Punto.apply(punto, [1, 2]); // ← le paso un array de argumentos-argumento se pasan como array
console.log(punto); // 👉 { z: 7, x: 1, y: 2, dibujar: [Function (anonymous)] }

/**
 *3-Se pueden crear funciones usando el constructor de function:
 *!!No es recomendable usarlo !!
 const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {
      console.log('Dibujando...');
    };
  `);

const p = new Point(1,2);
console.log(p);
 */


