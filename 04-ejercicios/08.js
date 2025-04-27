/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva una array de pares
 */
let array = [{id:1,name:'Nicolas'},{id:2,name:'Felipe'},{id:3,name:'Chanchito'}];

//pares-son un array de arrays
let pares =[
    [1 , { id: 1, name: "Nicolas" }],
    [2 , { id: 2, name: "Felipe" }],
    [3 , { id: 3, name: "Chanchito" }]
  //[IDENTIFICADOR,{OBJETO COMPLETO}]
];

function toPairs(arr){
   //-Definir una variable q va a contener esos pares.
    let pairs = [];//Creás un nuevo array vacío donde vas a ir metiendo los pares.

    //-Iterar elementos de un arreglo.Necesitamos el indice para crear otro arreglo
   //idx: se usa para referenciar al indice
    for(let idx in arr)
    {   
        let elemento = arr[idx];//accedés al objeto actual.
        pairs[idx] = [elemento.id,elemento];//-armás un array [id, objeto] y lo guardás en la posición idx.
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);