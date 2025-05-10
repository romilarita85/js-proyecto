//Función Callback

//Es una función que se pasa como argumento a otra.
//Puede ser anónima o con nombre.

function ejecutar(callback) 
{
    callback();
}
ejecutar(() => console.log("Soy un callback"));
  
//funcion que se ejecuta cuando termina el archivo anterior
//----------------------------------------------------------------
//Ejemplo 1: Lectura de un archivo usando fs.readFile (asíncrono)

const fs = require('fs');

// La función callback se ejecuta una vez que se ha leído el archivo.
fs.readFile('archivo.txt', 'utf8', function (err, data) {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data);
});
// Explicación: readFile lee un archivo de manera asíncrona. 
// La función callback se ejecuta una vez que el archivo ha sido leído. 
// Si ocurre un error, se pasa a la variable err.

// Ejemplo 2: Escribir en un archivo con fs.writeFile (asíncrono)
// La función callback se ejecuta después de 2 segundos.

setTimeout(function () {
    console.log('Han pasado 2 segundos');
}, 2000);
function filtrarNumeros(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numeros = [1, 2, 3, 4, 5, 6];

// Usamos una función callback para filtrar los números pares
const numerosPares = filtrarNumeros(numeros, function (num) {
    return num % 2 === 0;
});

console.log('Números pares:', numerosPares);

//Ejemplo 3: Temporizador con setTimeoutExplicación: setTimeout espera 
// un tiempo determinado (en milisegundos) y luego ejecuta la función callback.
// La función callback se ejecuta después de 2 segundos.
setTimeout(function () {
    console.log('Han pasado 2 segundos');
}, 2000);
//Explicación: setTimeout espera un tiempo determinado (en milisegundos) 
// y luego ejecuta la función callback.

//Ejemplo 4: Filtrar un array (sincrónico) usando un callback
function filtrarNumeros(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numeros1 = [1, 2, 3, 4, 5, 6];

// Usamos una función callback para filtrar los números pares
const numerosPares1 = filtrarNumeros(numeros1, function (num) {
    return num % 2 === 0;
});

console.log('Números pares:', numerosPares1);

// Explicación: Aquí, la función filtrarNumeros toma un array y un callback. 
// El callback es responsable de definir la condición para filtrar los elementos.

// Ejemplo 5: Callback con setInterval
let contador = 0;

const interval = setInterval(function () {
    contador++;
    console.log('Contador:', contador);
    if (contador >= 5) {
        clearInterval(interval);
        console.log('Intervalo detenido.');
    }
}, 1000);

// Explicación: setInterval ejecuta el callback repetidamente cada cierto intervalo de tiempo. 
// En este caso, se imprime el contador cada segundo hasta que alcanza 5 y luego se detiene.

// Ejemplo 6: Callback en una operación de base de datos simulada (simulada con setTimeout)
function obtenerDatosDeBaseDeDatos(callback) {
    setTimeout(() => {
        const datos = { id: 1, nombre: 'Juan' };
        callback(datos); // Ejecuta la función callback con los datos
    }, 2000); // Simula una consulta a la base de datos de 2 segundos
}

obtenerDatosDeBaseDeDatos(function (datos) {
    console.log('Datos obtenidos:', datos);
});
// Explicación: En este ejemplo, obtenerDatosDeBaseDeDatos simula una operación 
// de base de datos asíncrona usando setTimeout. Una vez que los "datos" están listos, 
// se pasa a la función callback para su uso.

// Ejemplo 7: Manejo de múltiples callbacks (función de orden superior)
function realizarOperacion(num1, num2, callback) {
    const resultado = num1 + num2;
    callback(resultado);  // Pasamos el resultado a la función callback
}

realizarOperacion(5, 10, function (resultado) {
    console.log('El resultado de la suma es:', resultado);
});
// Explicación: realizarOperacion realiza una operación de suma y luego 
// pasa el resultado a la función callback para ser utilizado.

// Conclusión
// Los callbacks son esenciales en Node.js para trabajar con operaciones asíncronas, 
// ya que permiten que el programa no se bloquee mientras espera 
// que una tarea (como leer un archivo, hacer una solicitud de red, etc.) termine. 
// Además, son la base para trabajar con promesas y async/await.

