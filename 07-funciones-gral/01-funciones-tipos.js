
//Funciones: las funciones en js tambien son objetos

//*son objetos de primera clase.
//-Pueden ser:
//*asignadas a otras variables
//*pasadas como argumentos a otras funciones
//*retornadas de otras funciones
//*Tener propiedades y metodos

//Funcion constructora Usuario:
function Usuario(nombre){
    this.nombre = nombre;
}

//*Tener propiedades y metodos
console.log(Usuario.name);
console.log(Usuario.length);
//name: es el nombre que tiene la función.
//length: cantidad de parámetros que acepta la función (en este caso, 1 → nombre).

//*Tener una funcion y asignarla a otras variables o constantes
const U = Usuario;
let user = new U('Nicolas');

console.log(user);

//*Pasar funciones como argumentos a otras funciones:
//Fn:funcion constructora
//arg:argumentos
function of(Fn,arg){
    return new Fn(arg);//retorna la funcion en conjunto con el argumento
}
let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//*Podemos retornar funciones dentro de otras funciones:

function returned(){
    return function(){
        console.log('Hola mundo');
    }
}
let saludo = returned(); //llamamos a la funcion
saludo();
//----------------------------------------------------
//-Funciones Flecha (Arrow Functions)
const flecha = () => {
    console.log("Soy una función flecha");
};
flecha();
//No tienen su propio this
//No tienen arguments
//Son más concisas
//--------------------------------------------------------
//-Funciones Anónimas:
setTimeout(function() {
    console.log("Esto es una función anónima");
}, 1000);
//-Closures (Cierres):
function saludar(nombre) {
    return function() {
      console.log("Hola " + nombre);
    };
  }
  
  const saludoRomi = saludar("Romi");
  saludoRomi();  // 👉 Hola Romi

//-Funciones como objetos (con propiedades)
function saludo() {}
saludo.mensaje = "Hola desde una propiedad";
console.log(saludo.mensaje);  // 👉 Hola desde una propiedad

/**
 * //Resumen final:
    Las funciones en JS son objetos especiales que:
//- Pueden ser manipuladas como valores.
//- Se comportan como clases cuando se usan con 'new'.
//- Tienen propiedades internas (name, length, prototype).
//- Permiten programación funcional gracias a que pueden ser pasadas, retornadas y combinadas.

 */
//usamos const para funciones:
//Porque:
//• Generalmente no reasignás funciones una vez que las declarás.
//• Evitás errores accidentales al tratar de sobrescribir la función por error.
//• Da un código más claro y seguro.

// Tipos de funciones:

//     1-Declaradas: function nombre() { }

//     2-Anónimas: const func = function() { }

//     3-Flecha (Arrow): const func = (parametros) => { }

//     4-Autoejecutables (IIFE): (() => { })()

//     5-Recursivas: Se llaman a sí mismas.

//     6-Con parámetros por defecto: function nombre(param = valorDefecto) { }

