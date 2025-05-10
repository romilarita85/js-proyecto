// --------------------------------------------------------
// Funciones Flecha (Arrow Functions)
//Las funciones flecha son una forma más compacta de escribir 
// funciones anónimas, y además tienen la particularidad 
// de no tener su propio contexto de this (que es útil en algunas situaciones). 
// Usan una sintaxis más corta.
//------------------------------------------------------------------
// Más concisas, no tienen su propio this, ni argumentos

const saludarFlecha = () => {
    console.log("¡Hola desde una función flecha!");
};
saludarFlecha();  // Llama a la función

// Función flecha simplificada (una sola línea)
const saludarFlechaSimplificada = () => console.log("¡Hola desde una función flecha simplificada!");
saludarFlechaSimplificada();  // Llama a la función
//------------------------------------------------------
//-Funcion clasica:
function sumar(a,b){
    return a + b;
}
//-Funcion flecha:
const sumar = (a,b) => a + b;

//* (a, b): Son los parámetros que la función espera recibir. 
//En este caso, a y b son los valores que pasas cuando llamas a la función.

//* =>: Es la flecha que define que estamos usando una función flecha.

//* a + b: Es la expresión que se evalúa y se devuelve automáticamente 
//sin necesidad de usar return, ya que solo hay una línea de código.

//Comparación con función común:

// Función tradicional
function saludar(nombre) {
    return "Hola " + nombre;
}
  
  // Función flecha (es igual pero más corta)
const saludar = (nombre) => {return "Hola " + nombre;};
  
  // Aún más corta si es una sola línea (retorno implícito)
const saludar = (nombre) => "Hola " + nombre;
  

// 1. Sintaxis básica:
const saludar = () => console.log("Hola mundo");
saludar();

// 2. Con un parámetro (sin paréntesis)
//Si solo hay un parámetro, puedes omitir los paréntesis:
const cuadrado = x => x * x;
console.log(cuadrado(5)); // 👉 25

// 3. Con múltiples parámetros (con paréntesis)
//Si la función tiene varios parámetros, se usan los paréntesis:
const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // 👉 5

// 4. Con múltiples líneas (usar llaves y return)
//Si la función tiene más de una línea, se deben usar llaves {} y return explícito:
const resta = (a, b) => {
    let resultado = a - b;
    return resultado;
};
console.log(resta(10, 3)); // 👉 7
//5. Comportamiento del this en Funciones Flecha------------------------------------------
//Las funciones flecha no tienen su propio this. 
//El valor de this se hereda del contexto donde fue creada la función:

//creamos objeto literal-persona(no uso new)
const persona = {
    nombre: "Romi",
    saludar: function() {
        setTimeout(() => {
            console.log("Hola, soy " + this.nombre); // 'this' apunta a persona
        }, 1000);
    }
};
persona.saludar();

// Recordá:
// - Arrow functions son ideales para callbacks y funciones cortas.
// - No se deben usar como métodos de objetos si necesitás `this` propio.
// - Siempre evalúa si la concisión justifica su uso frente a una función clásica.
