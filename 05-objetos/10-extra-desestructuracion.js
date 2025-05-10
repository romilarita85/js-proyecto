// DESESTRUCTURACION DE OBJETOS:

// La desestructuración de objetos es una característica de JavaScript que 
// te permite extraer valores de un objeto 
// y asignarlos a variables de forma más concisa y clara. 
// Es una forma más práctica de trabajar con los datos dentro de un objeto, 
// especialmente cuando solo necesitas algunas propiedades de él.

//1- Sintaxis básica de desestructuración
// Supongamos que tenemos un objeto como este:
const persona1 = {
  nombre: "Carlos",
  edad: 35,
  profesion1: "Ingeniero"
};

// Puedes desestructurar el objeto de la siguiente manera:
const { nombre, edad, profesion1 } = persona1;

console.log(nombre); // Carlos
console.log(edad); // 35
console.log(profesion1); // Ingeniero

// 🔑 Explicación:
// • { nombre, edad, profesion }: Aquí estamos creando nuevas variables (nombre, edad, profesion) 
// y asignándoles los valores 
//   correspondientes del objeto persona1.
// • persona1: Es el objeto del cual estamos extrayendo los valores.
//--------------------------------------------------------------------------------------
//2- Desestructuración con alias (renombrando)
// Si quieres usar nombres diferentes para las variables, puedes hacerlo de esta manera:
const { nombre: nombrePersona, edad: edadPersona } = persona1;

console.log(nombrePersona); // Carlos
console.log(edadPersona); // 35

// En este caso, 'nombrePersona' y 'edadPersona' son los nuevos nombres 
// que tomaron los valores del objeto persona1.
//---------------------------------------------------------------------------------------
//3- Desestructuración dentro de funciones:
// La desestructuración también es muy útil cuando pasas un objeto como argumento a una función. 
// Así puedes extraer solo las propiedades que necesitas directamente:
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostrarPersona(persona1); // Nombre: Carlos, Edad: 35

//4-🧩 Desestructuración con objetos anidados
// Cuando tienes objetos anidados, puedes desestructurarlos también:
const persona2 = {
  nombre: "Carlos",
  edad: 35,
  direccion: {
    calle: "San Martín",
    ciudad: "Mendoza"
  }
};

//-Desestructuración de objetos anidados
const { nombre: nombrePersona2, direccion: { calle, ciudad } } = persona2;

console.log(calle); // San Martín
console.log(ciudad); // Mendoza

// En este ejemplo, 'direccion: { calle, ciudad }' nos permite acceder 
// a las propiedades de 'direccion' directamente.

//5-Desestructuración con valores por defecto
// Si una propiedad no existe en el objeto, puedes asignarle un valor por defecto:
const persona3 = {
  nombre: "Carlos",
  edad: 35
};

const { nombre: nombre3, profesion = "Desconocida" } = persona3;

console.log(profesion); // Desconocida

// Si 'profesion' no está presente en el objeto persona3, se asigna automáticamente el valor "Desconocida".
