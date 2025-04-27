/**
 * Crear un array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N.
 */
let longitud = 7;

function crearArray(n){
    
    //-Verificar q "n" no sea menor q cero
    if (n <= 0) {
        return[];// Si n es 0 o negativo, devuelve un array vacío.
    }

    let arr = [];//Inicializa un array vacío y lo llena con los números del 1 al n.
    for (let i = 0; i < n; i++) {
        
        arr[i] = i + 1;
    }
 
    return arr;
}
let resultado = crearArray(longitud);
console.log(resultado);