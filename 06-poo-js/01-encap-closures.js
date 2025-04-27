//-Encapsulamiento con closures
//En programación orientada a objetos, **encapsular** significa ocultar los detalles internos 
//de un objeto y exponer solo lo necesario.
//JavaScript no tiene modificadores de acceso como 
// `private` o `protected` (como Java o C#), pero se puede lograr 
// el mismo objetivo con **closures**.

//Un **closure** ocurre cuando una función interna **recuerda el entorno** (scope) 
//donde fue creada, **incluso después de que la función externa se haya ejecutado**.
//Esto permite proteger datos del acceso externo, garantizando 
//que solo se pueda interactuar con ellos mediante métodos definidos.



function crearContador() 
{
    let contador = 0;//variable privada
    return {
        incrementar:function()
        {
            contador++;
            console.log(contador);
        },
        decrementar:function()
        {
            contador--;
            console.log(contador);
        },
        obtenerValor:function()
        {
            return contador;
        }
    };
}

const miContador = crearContador();
miContador.incrementar();//1
miContador.incrementar();//2
miContador.decrementar();//1
console.log(miContador.obtenerValor());
// miContador.contador = 100; // ❌ No se puede acceder directamente
//✅ Explicación:

//-contador está protegido dentro de crearContador.
//-Solo es accesible mediante los métodos públicos: incrementar, decrementar, obtenerValor.
//-Los métodos tienen acceso al entorno donde fueron creados → closure.
//----------------------------------------------------------------------
// 🎯 Ventajas del encapsulamiento con closures:
// ✔ Protección de datos: impide acceso o modificación directa desde fuera.
// ✔ Control de acceso: solo mediante métodos definidos.
// ✔ Organización y modularidad del código.

// -Tips para recordar:
// - Si una función accede a una variable externa y la "recuerda", tenés un closure.
// - Se usan mucho para crear datos privados, módulos y funciones seguras.

function crearSaludo(nombre){
    return function(){
        console.log(`Buenos dias, ${nombre}!`);
    };
}
const saludoParaMi = crearSaludo("Romi");
saludoParaMi(); // Hola, Romi!

//'nombre' está encapsulado, no se puede cambiar desde fuera.
//Pero se recuerda gracias al closure.