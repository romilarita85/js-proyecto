// 🟨 OBJETOS EN JAVASCRIPT - RESUMEN COMPLETO

//1- Creación de objetos
const persona = {
    nombre: 'Romi',
    edad: 30,
    hablar() {
        console.log('Hola!');
    }
};

//2- Dinamismo:agregar y eliminar propiedades
persona.altura = 1.65;
delete persona.edad;

//3- Factory function (función que devuelve objetos)
function crearPunto(x, y) {
    return {
        x,
        y,
        dibujar() {
            console.log('Dibujando');
        }
    };
}

//4-Función constructora
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando');
    };
}

//5- Atajos: métodos sin 'function'(Metodos cortos)
const auto = {
    marca: 'Toyota',
    arrancar() {
        console.log('Arrancando...');
    }
};

//6- Valor vs Referencia
let a = 10;
let b = a; // copia
let obj1 = { valor: 10 };
let obj2 = obj1; // referencia
obj2.valor = 20;
console.log(obj1.valor); // 20

//7- Listar propiedades de un objeto
for (let key in persona) console.log(key, persona[key]);

Object.keys(persona).forEach(k => console.log(k));

Object.entries(persona).forEach(([k, v]) => console.log(k, v));

//8- Getters y Setters
const usuario = {
    nombre: 'Romi',
    apellido: 'Luna',
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(valor) {
        const partes = valor.split(' ');
        this.nombre = partes[0];
        this.apellido = partes[1];
    }
};

//9- This
const objeto = {
    valor: 100,
    mostrar() {
        console.log(this.valor);
    }
};

//10- Prototipos
Punto.prototype.mover = function () {
    console.log('Moviendo...');
};

//11- Clases (ES6)
class Animal {
    constructor(nombre) 
    {
        this.nombre = nombre;
    }
    hablar() 
    {
        console.log(`${this.nombre} hace ruido.`);
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} ladra.`);
    }
}

// 12- Métodos útiles de objetos
const obj = { a: 1, b: 2 };
Object.freeze(obj);//no se puede modificar ni agregar propiedades
Object.seal(obj);//no se puede agregar/eliminar, pero si modificar
const nuevo = Object.assign({}, obj);//clona el objeto

// 13. Comparar objetos (superficialmente)
function sonIguales(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

//14-JSON(convertir entre objetos y texto)
const json = JSON.stringify(persona);//objeto -> texto
const objParseado = JSON.parse(json);//texto -> objeto 

//15- Desestructuración
const { nombre, hablar } = persona;

//16- Spread operator(clonar o fusionar objetos)
const copia = { ...persona, edad: 31 };

//17- hasOwnProperty()
console.log(persona.hasOwnProperty("nombre")); // true

//18- Object.values()
console.log(Object.values(persona)); // muestra solo los valores

//19- Object.defineProperty() (definir propiedades con control) 
Object.defineProperty(persona, 'dni', {
    value: '12345678',
    writable: false,
    enumerable: true
  });
//20- Object.create() (crear a partir de otro) 
const humano = {
    saludar() {
      console.log("Hola soy un humano");
    }
  };
  
  const juan = Object.create(humano);
  juan.saludar();
  

//21- Propiedades privadas con # (clases modernas)
class Cuenta {
    #saldo = 0;
  
    constructor(titular) {
      this.titular = titular;
    }
  
    verSaldo() {
      return this.#saldo;
    }
  }
  
//22- structuredClone() (clon profundo de objetos)
const copiaProfunda = structuredClone(persona);

//23- Función flecha y this
const obje = {
    valor: 42,
    normal: function () {
      console.log(this.valor);
    },
    flecha: () => {
      console.log(this.valor); // undefined, no tiene su propio this
    }
  };
  
// 24 Comparar objetos
function sonIguales(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
//--------------------------------------------------------
//Objetos anidados: 
const persona = {
    nombre: "Lucía",
    edad: 30,
    direccion: {
      calle: "Belgrano",
      ciudad: "Rosario",
      pais: "Argentina"
    },
    idiomas: ["español", "inglés", "italiano"],
    hobbies: ["leer", "pintar", "tocar el piano"]
  };

console.log(persona.nombre); // Lucía
console.log(persona.direccion.ciudad); // Rosario
console.log(persona.idiomas[1]); // inglés
console.log(persona.hobbies.join(", ")); // leer, pintar, tocar el piano
