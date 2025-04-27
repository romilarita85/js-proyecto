//HERENCIA:
//La herencia permite que una clase hija obtenga las propiedades y métodos 
//de una clase padre.
//Así reutilizamos código y organizamos mejor los objetos.

// Clase base (padre)
class Persona 
{
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre}`);
    }
}
  
  // Clase derivada (hija)
class Estudiante extends Persona {

    constructor(nombre, carrera,edad) {
      super(nombre); // Llama al constructor de Persona. 
      // Al llamar a super(), aseguramos que 'nombre' 
      // se asigne correctamente desde la clase base.
      this.carrera = carrera;
      this.edad = edad;
    }
    //Metodo propio de la clase estudiante:
    presentar() {
      console.log(`Estudio la carrera de ${this.carrera} y tengo ${this.edad} años`);
    }
    
}
  
  // Crear un objeto de la clase estudiante:
  const p1 = new Estudiante("Maria", "Programación",32);
  
  // Métodos heredados y propios:
  p1.saludar();     // Hola, soy Maria
  p1.presentar();   // Estudio la carrera de Programación y tengo 32
//---------------------------------------------------------------------------------------------------------
//Sobrescritura de métodos: 
//Permite que las clases hijas cambien el comportamiento heredado de la clase base.
//Usamos super.metodo() si queremos seguir usando el comportamiento original de la clase base y complementarlo.
//super(nombre): Llama al constructor de la clase base (Animal), pasando el valor nombre para inicializar 
//la propiedad nombre en la clase padre.
//this no se puede usar hasta que se llame a super() porque el objeto de la clase hija 
//aún no está completamente inicializado.
//------------------------------------------------------------------------------------------------------------
//SOBREESCRITURA DE METODOS
//1-Clase base:
class Animal 
{
    constructor(nombre) {
      this.nombre = nombre;
    }
    // Método general para hacer ruido
    hacerRuido() {
        console.log(`${this.nombre} hace un ruido.`);
    }
}
//2-Clase hija Perro sobrescribe el método hacerRuido:
class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre);  // Llama al constructor de Animal(clase padre)
      this.raza = raza;
    }
  
    // Sobrescribimos el método hacerRuido
    hacerRuido() {
      console.log(`${this.nombre}, el ${this.raza}, dice ¡Guau!`);
    }
  }
  
  const miPerro = new Perro("Rex", "Labrador");
  miPerro.hacerRuido();  // "Rex, el Labrador, dice ¡Guau!"

//-Explicación:
//En la clase Animal, el método hacerRuido imprime un mensaje genérico.
//La clase Perro sobrescribe ese método para ofrecer un comportamiento 
// más específico para los perros (en este caso, un "¡Guau!").

//¿Qué pasaría si no sobrescribimos el método?

//Si no sobrescribimos el método hacerRuido en Perro, 
//el perro heredaría el comportamiento genérico de la clase Animal 
//y diría simplemente: "Rex hace un ruido", en lugar de su sonido específico.

//- Si quisiéramos usar el comportamiento original de la clase base (Animal) 
//podemos llamar a super.hacerRuido() dentro de la clase Perro, 
//para no perder el mensaje genérico y luego añadir algo específico.
