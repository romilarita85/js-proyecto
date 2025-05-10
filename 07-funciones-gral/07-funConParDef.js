// 6. Función con Parámetros por Defecto
//Podes asignar un valor por defecto a los parámetros, 
// para cuando no se pasen al llamar a la función.
function saludar(nombre = "Invitado") {
    console.log(`¡Hola, ${nombre}!`);
}

saludar();  // "¡Hola, Invitado!"
saludar("Romi");  // "¡Hola, Romi!"