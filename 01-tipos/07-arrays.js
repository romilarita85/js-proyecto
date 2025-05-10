//Arrays:
//Un array es una colección ordenada de elementos (pueden ser números, strings, objetos, etc.). 
// Los elementos se acceden por su índice (empieza en 0).
//-Declaración de arrays:
let frutas = ["manzana", "banana", "uva"];
let numeros = [1, 2, 3, 4];
let mezcla = ["texto", 20, true];

//-Creación de array con const (recomendado):
const autos1 = ["Saab", "Volvo", "BMW"];
//*Es una práctica común declarar los arrays con la const palabra clave. 
//-Otra forma:se puede crear un array, y luego proporcionar los elementos:
const autos2 = [];
autos2[0] = "Saab";
autos2[1] = "Volvo";
autos2[2] = "BMW";

// Con new (no tan común):Se puede crear un array usando la palabra reservada new:
const autos3 = new Array("Saab", "Volvo", "BMW");

//---------------------------------------------------------------
//Array literal:
let animales = ['chanchito', 'caballo']; //->Array literal
//Podemos definir un array literal completamente vacio [] o
//o podemos agregarle contenido al momento de la creacion ["chanchito","caballo"]
//Los elementos de una array empiezan con el indice 0
console.log(animales);
console.log(animales[0]);//para ver el string de chanchito

//📌 Agregar elementos a los arreglos:
animales[2] = 'dragon'; //agregar indice con un nuevo valor
console.log(animales);

//📌 Cuidado con índices vacíos -Cuidado al pasar elementos a los arreglos:
animales[10] = 'Pez';
console.log(animales[7]);// undefined

//📌 Tipo de dato:-Ver de que tipo de dato es el array:
console.log(typeof animales);//object
//------------------------------------------------
// 📌 Métodos útiles de arrays:
//-Los array dentro de js funcionan como objetos asi que podemos acceder a sus metodos

//1-Largo del array:
console.log(animales.length);//cantidad de animales

//2-Agregar al final:
animales.push('perro');
console.log(animales);

//3-Quitar del final:
animales.pop();
console.log(animales);

//4-Agregar al principio:
animales.unshift("conejo");
console.log(animales);

//5-Quitar del principio:
animales.shift();
console.log(animales);

//6-Ver si incluye un valor:
console.log(animales.includes("perro"));

//7-Encontrar índice:
console.log(animales.indexOf("dragon"));

//8-Copiar parte del array:
let algunos = animales.slice(1, 3);
console.log(algunos);

//9-Modificar/eliminar parte del array:
animales.splice(1, 2);
console.log(animales);

//10-Concatenar arrays:
let masAnimales = animales.concat(["gato", "tigre"]);
console.log(masAnimales);

//11-Recorrer con forEach:
masAnimales.forEach((animal, index) => {
    console.log(index + ": " + animal);
});

//12-Transformar con map:
let nombresMayus = masAnimales.map(animal => animal.toUpperCase());
console.log(nombresMayus);

//13-Filtrar:
let largos = masAnimales.filter(animal => animal.length > 5);
console.log(largos);

//14-Buscar uno:
let tigre = masAnimales.find(animal => animal === "tigre");
console.log(tigre);

//15-Ordenar:
let ordenados = [...masAnimales].sort();
console.log(ordenados);

//16-Invertir orden:
ordenados.reverse();
console.log(ordenados);

// Verificar si todos cumplen condición:
let todosSonStrings = masAnimales.every(animal => typeof animal === "string");
console.log(todosSonStrings);

// Verificar si alguno cumple:
let hayDragon = masAnimales.some(animal => animal === "dragon");
console.log(hayDragon);
//--------------------------------------------
//Formas de iterar array:
// ARRAY BASE
const frutas3 = ["manzana", "banana", "uva"];

// 1. FOR CLÁSICO
console.log("FOR clásico:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 2. FOR...OF
console.log("FOR...OF:");
for (let fruta of frutas) {
    console.log(fruta);
}

// 3. forEach (con función clásica)
console.log("forEach - función clásica:");
frutas.forEach(function (fruta) {
    console.log(fruta);
});

// 4. forEach (con función flecha)
console.log("forEach - arrow function:");
frutas.forEach(fruta => console.log(fruta));

// 5. map (crea nuevo array)
console.log("MAP:");
const frutasMayus = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMayus);  // ["MANZANA", "BANANA", "UVA"]

// 6. BONUS - for...in (menos común, para índices)
console.log("FOR...IN (índices):");
for (let i in frutas) {
    console.log(`${i}: ${frutas[i]}`);
}
//--------------------------------------------------------
//Desestructuracion de arrays: Extraés elementos por posición
const misNumeros = [10, 20, 30];
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20


