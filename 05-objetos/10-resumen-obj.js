// 🟨 OBJETOS EN JAVASCRIPT - RESUMEN COMPLETO

// 1️⃣ Creación de objetos
const persona = {
    nombre: 'Romi',
    edad: 30,
    hablar() {
        console.log('Hola!');
    }
};

// 2️⃣ Dinamismo
persona.altura = 1.65;
delete persona.edad;

// 3️⃣ Factory function
function crearPunto(x, y) {
    return {
        x,
        y,
        dibujar() {
            console.log('Dibujando');
        }
    };
}

// 4️⃣ Función constructora
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('Dibujando');
    };
}

// 5️⃣ Atajos: métodos sin 'function'
const auto = {
    marca: 'Toyota',
    arrancar() {
        console.log('Arrancando...');
    }
};

// 6️⃣ Valor vs Referencia
let a = 10;
let b = a; // copia
let obj1 = { valor: 10 };
let obj2 = obj1; // referencia
obj2.valor = 20;
console.log(obj1.valor); // 20

// 7️⃣ Listar propiedades
for (let key in persona) console.log(key, persona[key]);
Object.keys(persona).forEach(k => console.log(k));
Object.entries(persona).forEach(([k, v]) => console.log(k, v));

// 8️⃣ Getters y Setters
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

// 9️⃣ This
const objeto = {
    valor: 100,
    mostrar() {
        console.log(this.valor);
    }
};

// 🔟 Prototipos
Punto.prototype.mover = function() {
    console.log('Moviendo...');
};

// 🔟 Clases (ES6)
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(`${this.nombre} hace ruido.`);
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} ladra.`);
    }
}

// 🔟 Métodos útiles
const obj = {a: 1, b: 2};
Object.freeze(obj);
Object.seal(obj);
const nuevo = Object.assign({}, obj);

// 🔟 JSON
const json = JSON.stringify(persona);
const objParseado = JSON.parse(json);

// 🔟 Desestructuración
const {nombre, hablar} = persona;

// 🔟 Spread operator
const copia = { ...persona, edad: 31 };

// 🔟 Comparar objetos
function sonIguales(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
