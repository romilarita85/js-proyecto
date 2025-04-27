//PROGRAMACION ORIENTADA A OBJETOS:POO
//Variables-datos de un usuario
/**
 * let email = 'nico@holamundo.io'
let name = 'Nicolas';

let direccion = 
{//objeto
    calle:  'Queen st',
    numero:15
};
 */

//-Podemos utilizar los objetos para poder agrupar los datos(variables)
//dentro de un objeto

//-Creamos un objeto:
let user = 
{
    email : 'nico@holamundo.io',//PROPIEDAD
    name : 'Nicolas', //PROPIEDAD
    direccion : //OBJETO DENTRO DE OTRO OBJETO(DIRECCION)
    { 
        calle:  'Queen st', //propiedad de direccion
        numero:15 //propiedad de direccion
    },
    activo: true,//Propiedad
    
    recuperarClave: function()// Método: función dentro del objeto
    {
        console.log('Recuperando clave...');
    },
};
//Encapsular datos que son comunes entre si pero dentro de un objeto(User)
