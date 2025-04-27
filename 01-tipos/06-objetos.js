//Los objetos en javasCript son tipo de referencia
//cuando son almacenados en la memoria ram de la computadora
//se guarda una direccion a donde eventualmente 
//se va a encontrar guardado el objeto. 
//*no es un tipo de dato de referencia

//Personaje de tv
let nombre = "Lufy";
let anime = "One piece";
let edad = 15;

//objeto:
let personaje = {
    nombre: "Lufy",
    anime: "One piece",
    edad: 15,
}; //objeto literal
console.log(personaje);
//-Si quiero ver solo en nombre de una propiedad:
console.log(personaje.nombre);
//-Otra forma de acceder a las propiedades: 
console.log(personaje["anime"]);

//-Si necesito cambiar una propiedad:
personaje.edad = 13;//la mas usada
//personaje['edad']= 16;//si no conoces la propiedad o vas a iterar todas las propiedades de un objeto
//*Funciona igual q:
let llave = 'edad';
personaje[llave] =16;

//-Si quiero eliminar una propiedad: Si ya no quiero usar la palabra anime : 
delete personaje.anime;
console.log(personaje);
//console.log(JSON.stringify(personaje)); 
