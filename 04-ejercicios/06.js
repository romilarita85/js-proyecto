/**
 * Crear algoritmo  que devuelva cantidad
 * de numeros positivos de un array
 */
let array = [2 , 5 , 7 , 15 , -5 , -100 , 55];
//Necesitamos una variable q nos permita contar cuantos positivos tiene este array
function cuantosPositivos(arr) {
    
    let cantidad = 0;
    
    for (let elemento of arr) 
    {
        if (elemento > 0) 
        {
            cantidad++;    
        }
    }
    return cantidad;
}

let resultado = cuantosPositivos(array);
console.log(resultado);