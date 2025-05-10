//Factory fuction: 
//nos permiten poder crear objetos de una forma sencilla y no repetitiva

//objeto de usuario:
//creamos multiples usuarios con una estructura similar

// let user = 
// {
//     id: 1,
//     email : 'nico@holamundo.io',
//     name : 'Nicolas', 
//     activo: true,
//     recuperarClave: function()
//     {
//         console.log('Recuperando clave...');
//     },
// };

//-Si queremos crear otros usuarios-Usamos factory function 
// (por lo general empiezan con crear o create)
//por convencion en camelCase
function crearUsuario(name,email)
{
    return{
        email,//o email:email -> nombre es igual q la propiedad
        name ,
        activo: true,
        recuperarClave: function()
        {
            console.log('Recuperando clave...');
        },
    };
}

let user1= crearUsuario('Nicolas', 'nico@holamundo.io');
let user2= crearUsuario('Chanchito', 'chanchito@holamundo.io');
let user3= crearUsuario('Romi', 'roro@holamundo.io');
console.log(user1,user2,user3);