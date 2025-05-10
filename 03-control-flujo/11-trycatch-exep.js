//Excepciones:
try {
    // Código que puede causar un error
    let resultado = 10 / 0; // Esto no causará un error, pero simula un cálculo
    console.log(resultado);
} catch (error) {
    // Este bloque se ejecuta si ocurre un error en el bloque try
    console.log("Hubo un error:", error.message);
} finally {
    // Este bloque siempre se ejecuta, ocurra o no un error
    console.log("Este bloque siempre se ejecuta");
}
/**
 * Explicación de los bloques:

    -try: Aquí pones el código que crees que puede generar un error. Si todo va bien, 
    el bloque catch no se ejecutará.

    -catch: Si ocurre un error dentro del bloque try, JavaScript saltará al bloque catch 
    y ejecutará el código dentro de él. El parámetro que recibe 
    el bloque catch (en este caso error) es el objeto de error generado, 
    y puedes usarlo para acceder a detalles sobre el error, como error.message.

    -finally: Es opcional, pero si lo usas, este bloque siempre se ejecutará, 
    independientemente de si hubo un error o no. Es útil para realizar tareas de limpieza, 
    como cerrar conexiones o liberar recursos.
 */
    try {
        let x = 10;
        let y = e;// Error porque 'e' no está definido
        console.log(x / y);
    } catch (error) {
        console.log('Error capturado: ' + error.message);
    } finally {
        console.log('Este bloque siempre se ejecuta');
    }
//Ejemplo 1: Usando alert() para mostrar el error
//alert(): Muestra un cuadro emergente con el error.
try {
    let a = 10;
    let b = 0;
    let resultado = a / b; // Esto no causará un error, pero muestra una operación inválida
    console.log(resultado);
} catch (error) {
    // Mostrar el error en un cuadro de alerta
    alert('Error: ' + error.message);
} finally {
    console.log('Este bloque siempre se ejecuta');
}

//Ejemplo 2: Usando console.error() para mostrar el error en la consola
//console.error(): Muestra un error con estilo en la consola del navegador.
try {
    let x = 5;
    let y = 0;
    let resultado = x / y; // Esto no causará un error de ejecución, pero puede generar 
    // una advertencia de operación inválida
    console.log(resultado);
} catch (error) {
    // Mostrar el error en la consola con un formato de error
    console.error('Error capturado:', error.message);
} finally {
    console.log('Este bloque siempre se ejecuta');
}

//Ejemplo 3: Mostrar el error en el HTML con un mensaje estilizado
//Manipulación del DOM: Crea elementos HTML dinámicamente para mostrar mensajes de error en la página.
try {
    let user = { name: "Carlos", age: 30 };
    let nombre = user.name;
    console.log(nombre);
    let apellido = user.lastName; // Esto genera un error porque "lastName" no existe
} catch (error) {
    // Crear un elemento para mostrar el mensaje de error
    let errorMessage = document.createElement("div");
    errorMessage.style.color = "blue";
    errorMessage.style.fontWeight = "bold";
    errorMessage.textContent = "¡Oops! Ha ocurrido un error: " + error.message;

    // Insertar el mensaje en el cuerpo del documento
    document.body.appendChild(errorMessage);
} finally {
    console.log('Este bloque siempre se ejecuta');
}
//-------------------------------------------------------------------
//Ejemplo 4: Mostrar error con un modal o cuadro de diálogo personalizado en el HTML
try {
    let value = JSON.parse('{ nombre: "Juan" }'); // Error de sintaxis en JSON
} catch (error) {
    // Crear un cuadro modal para mostrar el error
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#f8d7da";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #f5c6cb";
    modal.style.color = "#721c24";
    modal.style.fontFamily = "Arial, sans-serif";

    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Error de sintaxis: " + error.message;

    let closeButton = document.createElement("button");
    closeButton.textContent = "Cerrar";
    closeButton.onclick = function() {
        modal.style.display = "none"; // Cerrar el modal
    };

    modal.appendChild(errorMessage);
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
} finally {
    console.log('Este bloque siempre se ejecuta');
}
//Ejemplo 5: Usando un console.warn() para advertir sobre un posible error
//console.warn(): Muestra un mensaje de advertencia en la consola para que 
//el desarrollador esté al tanto de un posible problema.
try {
    let price = 100;
    let discount = 0.25;
    let discountedPrice = price - (price * discount); // Correcto
    console.log("Precio con descuento: " + discountedPrice);
    let invalidPrice = price - (price * "invalid discount"); // Esto generará un error
} catch (error) {
    // Mostrar una advertencia en la consola
    console.warn('Advertencia: hubo un error con los datos de entrada - ' + error.message);
} finally {
    console.log('Este bloque siempre se ejecuta');
}

//Ejemplo 6: Uso de throw para lanzar errores personalizados
//throw: Permite lanzar un error personalizado que luego puede ser capturado en el bloque catch.
function dividir(a, b) {
    if (b === 0) 
    {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
    console.log(resultado);
} catch (error) {
    alert("Error personalizado: " + error.message);
}
//-----------------------------------------------------------
function procesarUsuario(usuario) {
    try {
        if (!usuario.nombre) {
            throw new Error("El usuario no tiene nombre");
        }

        console.log("Procesando a:", usuario.nombre.toUpperCase());
        // otras operaciones...

    } catch (error) {
        console.error("Error al procesar usuario:", error.message);
    }
}

procesarUsuario({ edad: 30 });  // Falla por falta de 'nombre'

    