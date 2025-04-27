//Clases en JavaScript (ES6)
//Las clases en JavaScript, introducidas en ES6, 
//facilitan la programación orientada a objetos (POO). 
//Permiten crear plantillas para objetos con propiedades y métodos asociados.

//Sintaxis: 
class NombreDeClase {
    constructor(param1, param2) {
      this.propiedad1 = param1;
      this.propiedad2 = param2;
    }
  
    metodo() {
      // Código del método
    }
}
//Creación de Instancias:
const objeto = new NombreDeClase(valor1, valor2);
//Para crear un objeto de una clase, usamos new
//-------------------------------------------
//Ejemplo:
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
  
const persona1 = new Persona("Juan", 30);
persona1.saludar(); 
//Herencia:
//Las clases pueden heredar de otras usando la palabra clave extends:
class Estudiante extends Persona {
    constructor(nombre, edad, materia) {
      super(nombre, edad);  // Llama al constructor de la clase padre
      this.materia = materia;
    }
  
    estudiar() {
      console.log(`${this.nombre} está estudiando ${this.materia}.`);
    }
  }
  
  const estudiante1 = new Estudiante("Ana", 20, "Matemáticas");
  estudiante1.saludar();  // Output: Hola, soy Ana y tengo 20 años.
  estudiante1.estudiar(); // Output: Ana está estudiando Matemáticas.
  
  /**
   * Características Clave:

    Constructor: Inicializa las propiedades de la clase.

    Métodos: Funciones asociadas a la clase para definir comportamientos.

    Herencia: Permite que una clase herede propiedades y métodos de otra.
   */
  