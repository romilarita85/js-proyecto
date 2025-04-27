//Getters y Setters:
//-¿Para qué sirven?
//    •  Leer propiedades calculadas (get)
//    •  Validar o transformar datos al escribir (set)
//    •  Simular campos privados (junto con closures o #propiedades privadas)
//    •  Mejorar la legibilidad y encapsulación

//-Tips clave:
//    • Un get no lleva paréntesis al usarse: se accede como una propiedad.
//    • Un set necesita un solo parámetro.
//    • No se puede tener un set sin get (por convención), pero sí al revés.

class Persona 
{
    constructor(nombre) 
    {
        this._nombre = nombre; // propiedad "privada"
    }
  
    get nombre() 
    {
        return this._nombre; // acceso controlado
    }
  //setter con validacion:
    set nombre(nuevoNombre) 
    {
        if (nuevoNombre.length > 1) 
        {
            this._nombre = nuevoNombre;
        }
        else 
        {
            console.log("Nombre demasiado corto");
        }
    }
}
//Main-------------------------------------

// Creación del objeto
const persona1 = new Persona("Mariano");

// Usamos el getter para imprimir el nombre inicial
console.log(persona1.nombre); // Mariano

// Probamos el setter con un nombre válido
persona1.nombre = "Juan";
console.log(persona1.nombre); // Juan

// Probamos el setter con un nombre inválido
persona1.nombre = "V";
console.log(persona1.nombre); // Juan → se mantiene el anterior

// Probamos con un nombre más largo
persona1.nombre = "Juan JS";
console.log(persona1.nombre); // Juan JS

