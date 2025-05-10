//Función Anónima:
//Son funciones sin nombre. 
//Se pueden asignar a variables, 
//y se pueden ejecutar de inmediato o más tarde.

//No tiene nombre.
//Se suele usar como argumento de otra función (callback).

const saludarAnonymo = function() {
    console.log("¡Hola desde una función anónima!");
};
saludarAnonymo();  // Llama a la función


setTimeout(function() {
    console.log("Esto es anónimo");
}, 1000);
  