let animales = ['chanchito', 'caballo']; //->Array literal
//Podemos definir un array literal completamente vacio [] o
//o podemos agregarle contenido al momento de la creacion ["chanchito","caballo"]
//Los elementos de una array empiezan con el indice 0
console.log(animales);
console.log(animales[0]);//para ver el string de chanchito
//-Agregar elementos a los arreglos:
animales[2] =  'dragon'; //agregar indice con un nuevo valor
console.log(animales);
//-x-Cuidado al pasar elementos a los arreglos:
animales[10] = 'Pez';
console.log(animales[7]);

//Ver de que tipo de dato es el array:
console.log(typeof animales); 
//-Los array dentro de js funcionan como objetos
//por ende vamos a poder acceder a sus metodos
console.log(animales.length); //cantidad de animales

animales.push('perro');
console.log(animales);
animales.pop('caballo');
console.log(animales);
