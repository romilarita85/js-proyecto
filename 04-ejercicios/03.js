/**
 * Construir una funcion que nos permita obtener un elemento por su indice
 * Indice: validar que no sea menor a cero y que el elemento exista en el array
 */
function getbyIdx(arr,idx){

    if (idx < 0 || arr.length <= idx) {// Se valida que el índice no sea negativo y que esté dentro del rango
        
        return "Elemento no existe";
    }
    // Retorna el elemento en el índice especificado
    return arr[idx];//pasamos el indice para q retorne el elemento

}
let resultado = getbyIdx([1,2],0);
console.log(resultado);