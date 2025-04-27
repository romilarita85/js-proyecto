// HERENCIA PROTOTÍPICA
//Es un mecanismos de JS, que permite a los objetos heredar
//propiedades y metodos de otros objetos
//En js no se utiliza clases. 
//La herencia se maneja con prototipos
//Cada objeto tiene una propiedad interna -> prototype- es una referencia a 
//otro objeto -> PROTOTIPO DEL OBJETO

// Definimos un objeto base (padre)
const persona = 
{
    nombre: "Juan",
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
};
  
// Creamos un objeto hijo que hereda del objeto persona
const estudiante = Object.create(persona);  // 'estudiante' hereda de 'persona'
  
// Podemos agregar nuevas propiedades o métodos en el objeto hijo
estudiante.carrera = "Ingeniería";
  
// Ahora, el objeto 'estudiante' tiene acceso al método 'saludar' de 'persona'
estudiante.saludar();  // "Hola, soy Juan"
  
// Y también tiene su propia propiedad:
console.log(estudiante.carrera);  // "Ingeniería"
  
// Si intentamos acceder a algo que no existe en 'estudiante', buscará en 'persona'
//---------------------------------------------------------------
//Explicación del código:
//Object.create(persona): Este método crea un nuevo objeto que hereda del objeto persona. 
// Esto establece el objeto persona como el prototipo del objeto estudiante.

//Acceso a propiedades: Cuando accedes a estudiante.saludar(), JavaScript 
//no encuentra el método saludar directamente en estudiante, 
//por lo que lo busca en el prototipo (es decir, en persona).

//Agregar nuevas propiedades: A pesar de que estudiante hereda de persona, 
//también puede tener sus propias propiedades (en este caso, carrera).
//-------------------------------------------------------------------------------
//Ejemplo de Sobrescritura en Herencia Prototípica:

//En este caso, puedes sobrescribir un método heredado para cambiar su comportamiento:  
// Definimos un objeto base (padre)
const persona1 = {
    nombre: "Juan",
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
};
  
// Creamos un objeto hijo que hereda de persona
const estudiante1 = Object.create(persona1);
estudiante.nombre = "Maria";  // Cambiamos el nombre en el objeto hijo
  
// Sobrescribimos el método 'saludar' en el objeto hijo
estudiante.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y soy estudiante`);
};
  
estudiante.saludar();  // "Hola, soy Maria y soy estudiante"
  
//En este caso, el objeto estudiante sobrescribe el método saludar que heredó de persona. 
//Ahora, cuando llamas a estudiante.saludar(), se ejecuta la versión sobrescrita.
//---------------------------------------------------

function Usuario(nombre, email){  
  this.nombre = nombre;//propiedades
  this.email = email;
}
Usuario.prototype.informacion = function(){//creamos un metodo:informacion
  return `Nombre: ${this.nombre}, Email: ${this.email}`;
}

//Creamos constructores
function Administrador(nombre,email) {
  Usuario.call(this,nombre,email);//llamamos al Usuario con call
}//el this se refiere al nuevo objeto que estamos creando: Administrador o Moderador.
//-Usuario es el constructor "padre" (el original).
//-call sirve para llamar a Usuario y hacer que sus propiedades 
//se copien en Administrador o Moderador.
//-Le pasamos this como primer parámetro para decirle:
//➔ “Asigná las propiedades (nombre, email) al objeto que 
// se está creando ahora (o sea, el Administrador o Moderador)”.

Administrador.prototype = Object.create(Usuario.prototype);
//le decimos q el metodo constructor sea el administrador
Administrador.prototype.constructor = Administrador;
//Creamos un metodo propio del administrador:metodo accesoTotal
Administrador.prototype.accesoTotal = function(){
  return `El usuario ${this.nombre} tiene acceso total al sistema`;
} 

//Creamos el constructor de moderador:
function Moderador(nombre,email) {
  Usuario.call(this,nombre,email);//llama a la clase-padre Usuario
}
Moderador.prototype = Object.create(Usuario.prototype);
Moderador.prototype.constructor = Moderador;

//metodo propio de moderador
Moderador.prototype.moderarContenido =function()
{
  return `El usuario ${this.nombre} puede moderar contenido`;
}
//Creamos objetos
let admin = new Administrador("Alice","alice@example.com");
let mod = new Moderador("Bob", "bob23@example.com");

console.log(admin.informacion());
console.log(mod.informacion());

console.log(admin.accesoTotal());
console.log(mod.moderarContenido());

let user= new Usuario("Carlos","carlos@example.com");
console.log(user.informacion());