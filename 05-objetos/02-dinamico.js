const user = { id: 1, name: 'Nico'};
/**
 * -Aunque creemos un objeto con const, podemos modificar sus propiedades internas.
 * Lo que no se puede hacer es reasignar la variable a otro valor u objeto (por ejemplo: user = 1).
 * 
 * 🔹 const en objetos:
 * - No permite reasignar el objeto entero.
 * - Sí permite modificar sus propiedades internas (agregar, quitar o modificar).
 * 
 * Esto también aplica para arrays: sus elementos se pueden modificar aunque estén declarados con const.
 */
user.name =  'Nicolas';
user.guardar = function(){
    console.log("Guardando", user.name);
}
user.guardar();
delete user.name;
delete user.guardar;
console.log(user);

/**
 * -Si queremos que un objeto no pueda ser modificado en absoluto
 * (ni agregar, quitar o cambiar propiedades), 
 * que no se le cambien las propiedades y no se le pueda cambiar su valor
 * usamos Object.freeze().
 */
// const user1 = Object.freeze({ id: 1 });
// user1.id = 2;      // ❌ No se puede modificar
// user1.name = 'Nico'; // ❌ No se puede agregar

/**
 * -Si queremos evitar que se agreguen o eliminen propiedades,
 * pero sí permitir modificar los valores existentes,
 * usamos Object.seal().
 */

const user1 = Object.seal({ id: 1 });
user1.id = 2;         // ✅ Se puede modificar (cambia el valor de las propiedades q ya tiene)
user1.name = 'Nico';  // ❌ No se puede agregar nueva propiedad
console.log(user1); // Muestra: { id: 2 }

