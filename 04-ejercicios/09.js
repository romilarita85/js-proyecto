/**
 * Crear algoritmo que devuelva un array 
 * de objetos en base a pares
 * Vamos a tener un array de pares y tenemos q conseguir crear una funcion que 
 * nos devuelva una array donde cada uno de los elementos sea un objeto
 */
//-Array de pares:
let pairs =[
    [1 , { id: 1, name: "Nicolas" }],
    [2 , { id: 2, name: "Felipe" }],
    [3 , { id: 3, name: "Chanchito" }]
  //[IDENTIFICADOR,{OBJETO COMPLETO}]
];
//-Array de objetos
let array = [
    {id:1,name:'Nicolas'},
    {id:2,name:'Felipe'},
    {id:3,name:'Chanchito'}
];


function toCollection(arr){
  
    let collection = [];
    for( let idx in arr )//Usás for...in para recorrer el array por índice
    {
        let elemento = arr[idx];//Cada elemento es un par [id, objeto]
        //-Accedés a elemento[1] (el objeto) y lo metés en collection
        collection[idx] = elemento[1];//Guardás el objeto completo
        //-Reasegurás que el id del objeto sea igual al primero del par (elemento[0])
        collection[idx].id = elemento[0];//Reasignás el id por si acaso
    }
    return collection;
}   

let resultado = toCollection(pairs);
console.log(resultado);