//Construir una funcion q recibe 2 parametros
/**
 * Crea una función llamada cualEsMayor que reciba dos números como parámetros.

La función debe comparar los dos números y devolver el número mayor.

Si el primer número (a) es mayor que el segundo número (b), la función debe devolver a.
Si el segundo número (b) es mayor que el primero (a), la función debe devolver b.

Entrada: Dos números a y b.

Salida: El número mayor entre los dos.
**/

//function cualEsMayor(a,b){
//    if (a > b) {
//        return a;
//    }
//    else
//    {
//        return b;
//    }
//}
//let mayor = cualEsMayor(10,7);

//console.log(mayor);
//------------------------------------------------
//-otra forma: utilizando operador ternario
function cualEsMayor(a,b)
{
   return (a > b) ? a : b;
}
let mayor = cualEsMayor(10,7);

console.log(mayor);
