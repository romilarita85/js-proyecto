// Función Declarada (Función Nombrada)
//Estas funciones son las clásicas, donde les das un nombre 
// y luego las puedes invocar por ese nombre.

//-Tiene nombre.
//-Se puede invocar antes de ser definida (hoisting).

function saludar() {
    console.log("¡Hola!");
}
saludar();  // Llama a la función

function saludar(nombre) {
    return `Hola, ${nombre}`;
}
  


