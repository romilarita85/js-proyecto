//Constructor:
//Las funciones constructoras necesitan usar UpperCamerCase
//{id:1, recuperarClave:()}

function Usuario(params) 
{
    this.id = 1;//le asigno a this la propiedad id
    //si asigno una funcion
    this.recuperarClave= function(){//->Metodo: Es una funcion q fue asignada a una propiedad de un objeto
        console.log("Recuperando clave...");
    }
}
//*Metodos-> cuando tenemos una propiedad en js y a esta le 
//asignamos una funcion(constructora o factory function) no son funciones

//*Si queremos crer un objeto de usuario usamos palabra 
//reservada new -> 
//1-se crea un objeto literal del aire {}

//2-se vincula el prototipo de la funcion de Usuario con el objeto q se acaba de crear

//3-a this se le asigna {} (objeto vacio q se creo) -> this = {}

//4-si la funcion de usuario no retorna nada ->retorna automaticamente  this 

let usuario = new Usuario();
console.log(usuario);



