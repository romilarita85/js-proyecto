//Desestructuración de objetos en JavaScript:

//Permite extraer propiedades de un objeto y asignarlas a variables 
//de forma rápida y sencilla.
//----------------------------------------------------------------
// 1. Desestructuración básica:
//Cuando desestructuramos un objeto, JavaScript asigna automáticamente 
// los valores de las propiedades a las variables correspondientes.
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

{
    const { nombre, edad, profesion } = persona;
    console.log(nombre);    // "Juan"
    console.log(edad);        // 30
    console.log(profesion); // "Ingeniero"
}
//----------------------------------------------------
// 2. Renombrar las variables al desestructurar
// Si quieres que la variable tenga un nombre diferente al de 
// la propiedad del objeto, puedes usar un alias.
const persona2 = {
    nombre: "Juan",
    edad: 30
};

const { nombre: nombrePersona, edad: edadPersona } = persona2;
console.log('Nombre persona:', nombrePersona);  // "Juan"
console.log('Edad persona:', edadPersona);    // 30

//----------------------------------------------------
// 3. Desestructuración con valores predeterminados:
//Si alguna propiedad no existe en el objeto, puedes asignarle un valor por defecto.
const persona3 = {
    nombre: "Juan",
    edad: 30
};

const { nombre, edad, profesion = "Desarrollador" } = persona3;
console.log('Profesion:', profesion); // "Desarrollador" (valor por defecto)
//---------------------------------------------------
// 4. Desestructuración de objetos dentro de objetos
//Si tienes un objeto dentro de otro objeto, puedes desestructurarlos al mismo tiempo.
const persona4 = {
    nombre: "Juan",
    edad: 35,
    direccion: {
        ciudad: "Buenos Aires",
        pais: "Argentina"
    }
};

const { nombre: nombrePersona4, edad: edadPersona4, direccion: { ciudad, pais } } = persona4;
console.log('Ciudad:', ciudad);  // "Buenos Aires"
console.log('Pais:', pais);    // "Argentina"
//---------------------------------------------
// 5. Desestructuración con rest operator (propiedades restantes)
//Si quieres obtener las propiedades que no desestructuraste, 
// puedes usar el rest operator (...).
const persona5 = {
    nombre: "Mario",
    edad: 30,
    profesion: "Ingeniero"
};

const { nombre: nombrePersona5, ...resto } = persona5;
console.log('Resto de las propiedades:', resto);   // { edad: 30, profesion: "Ingeniero" }
/**
 * Resumiendo:
  -La desestructuración te permite extraer propiedades de un objeto 
  de forma directa y asignarlas a variables.
  -Puedes renombrar las propiedades al asignarlas.
  -También puedes asignar valores predeterminados y manejar objetos dentro de objetos.
 */