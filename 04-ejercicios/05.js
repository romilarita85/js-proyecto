/**
 *Crear algoritmo que devuelva numero 
 *menor y mayor de un array. 
 */
//Crear dos variables y comparar las dos variables con cada uno de 
//los elementos que se encuetran dentro del array

//Obtener el elemento menor y el elemento mayor de una arreglo pero sin ordenarlo y sin iterarlo mas de una vez
let array = [2,5,7,15,-5,-100, 55];

function getMenorMayor(arr){
    let menor = arr[0];//le pasamos el primer elemento del arreglo como valor inicial
    let mayor = arr[0];

    //iterar el array
    for (let numero of arr) 
    {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor,mayor];
   
}
let numeros = getMenorMayor(array)
console.log(numeros);