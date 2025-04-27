//for-in: para iterar las propiedades de un objeto

let user = 
{
    //propiedades id,name,age
    id:1,
    name: 'Chanchito feliz',
    age:25,
};

//Para obtener el nombre de la propiedad y su valor
for (let prop in user) 
{
    console.log(prop, user[prop]);
}

let animales = ['Chanchito feliz','Dragon','Canguro'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}
//Si vas a acceder a los elementos de un array lo ideal es utilizar
//for-of no for-in