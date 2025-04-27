
//Listar las propiedades de un objeto que prodrian haber sido 
//creadas de manera dinamica
const punto = {
    x:10,
    y:15,
    dibujar: function(){
        console.log('dibujando');
    }
};
//Los metodos se pueden definir tambien:
//eliminando la palabra reservada function 

//dibujar(){
//    console.log('dibujando');
//}

// ❌ Eliminar una propiedad
//delete punto.dibujar;

// ✅ Verificar si una propiedad existe dentro del objeto
//Con in verificamos si existe la propiedad en un objeto:
if ('dibujar' in punto) {//si existe una propiedad de nombre dibujar dentro del objeto punto
    punto.dibujar();//si existe ejecutar
}
// ✅ Obtener las claves del objeto (propiedades propias)
//-Para acceder a listar los valores de todas las propiedades de este objeto:
//let keys = Object.keys(punto);
//console.log(Object.keys(punto));

// ✅ Iterar usando Object.keys()
//-Usando la palabra reservada de of para iterar 
//acccedemos a la llave junto con el valor
for(let llave of Object.keys(punto)){
    console.log(llave,punto[llave]);
}

// ✅ Usar Object.entries() para obtener pares [clave, valor]
//-Otra forma:
for(let entry of Object.entries(punto)){
    console.log(entry);
}
//obtemos un valor con su array con la propiedad y su valor
//Sirve para poder acceder a las propiedades de un objeto cuando no 
//conocemos sus propiedades

// ✅ Forma clásica: for...in (muestra todas las propiedades enumerables, incluidas heredadas)

for(let llave in punto){
    console.log(llave,punto[llave]);
}
//en js los constructores que tienen metodos -> de clase
//keys y entries son metodos estaticos