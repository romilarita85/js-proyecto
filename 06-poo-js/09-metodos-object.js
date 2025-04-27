// MÉTODOS ÚTILES EN OBJECT:

// En JavaScript, los objetos son una de las estructuras de datos 
// más importantes y versátiles. Existen varios métodos útiles para trabajar con objetos.
//--------------------------------------------------------------------------------
// 1- Object.keys(obj): Devuelve un array con las claves (propiedades) 
// enumerables de un objeto.
const persona = { nombre: 'Juan', edad: 30 };
const claves = Object.keys(persona); // ['nombre', 'edad']
console.log("Ejemplo de Object.keys(obj)): ")
console.log(claves);
//---------------------------------------------------------------------------------
// 2- Object.values(obj): Devuelve un array con los valores de las propiedades 
// enumerables de un objeto.
const valores = Object.values(persona); // ['Juan', 30]
console.log("Ejemplo de Object.values(obj): ")
console.log(valores);
//---------------------------------------------------------------------------------
// 3- Object.entries(obj): Devuelve un array de pares [clave, valor] 
// de las propiedades enumerables de un objeto.
const entradas = Object.entries(persona); // [['nombre', 'Juan'], ['edad', 30]]
console.log("Ejemplo de Object.entries(obj): ")
console.log(entradas);

//---------------------------------------------------------------------------------
// 4- Object.assign(target, ...sources): Copia las propiedades 
//de uno o más objetos fuente a un objeto destino. 
//Este método se utiliza para combinar objetos.
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const combinado = Object.assign({}, objeto1, objeto2); // { a: 1, b: 3, c: 4 }
console.log("Ejemplo de Object.assign(objetivo,...fuentes): ")
console.log(combinado);
//---------------------------------------------------------------------------------
// 5-Object.freeze(obj): Congela un objeto, impidiendo que 
// se puedan agregar, eliminar o modificar propiedades.
const objetoCongelado = Object.freeze({ a: 1 });
objetoCongelado.a = 2; // No tendrá efecto
console.log("Ejemplo de Object.freeze(obj): ")
console.log(objetoCongelado);
//---------------------------------------------------------------------------------
// 6- Object.seal(obj): Sella un objeto, lo que impide que se puedan 
// agregar o eliminar propiedades, pero permite modificar 
// las propiedades existentes.
const objetoSellado = Object.seal({ a: 1 });
objetoSellado.a = 2; // Se puede modificar
console.log("Ejemplo de Object.seal(obj): ")
console.log(objetoSellado);
//---------------------------------------------------------------------------------
// 7- Object.create(proto, propertiesObject): Crea un nuevo objeto, 
// utilizando un objeto existente como prototipo.
const prototipo = { saludar: function() { console.log('Hola'); } };
const nuevoObjeto = Object.create(prototipo);
console.log("Ejemplo de Object.create(proto,propertiesObject): ")
nuevoObjeto.saludar(); // 'Hola'
//---------------------------------------------------------------------------------
// 8- Object.prototype.hasOwnProperty(prop): Devuelve un booleano que indica 
// si el objeto tiene la propiedad especificada como propia (no heredada).
const objeto = { a: 1 };
console.log("Ejemplo de Object.prototype.hasOwnProperty(prop): ")
console.log(objeto.hasOwnProperty('a')); // true

//---------------------------------------------------------------------------------
// 9- Object.is(value1, value2): Compara dos valores y determina si son idénticos 
// (más confiable que === en ciertos casos, como NaN y -0).
console.log("Ejemplo de Object is(value1,value2): ")
console.log(Object.is(25, 25));  // true
console.log(Object.is(25, "25")); // false
console.log(Object.is(NaN, NaN)); // true

/**
 * Object es un objeto global que se utiliza para trabajar con otros objetos. 
 * También se puede usar como un constructor para crear instancias de objetos.

Puedes acceder a varias propiedades y métodos de Object, como Object.keys(), 
Object.values(), Object.entries(), Object.assign(), entre otros.

Los objetos en JavaScript son una colección de pares clave-valor 
y no tienen un tipo específico de clase como en C#.
 */
