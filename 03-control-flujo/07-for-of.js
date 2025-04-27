
//For-of
//loop while, do while y for-> nos permiten calcular como vamos a realizar una iteracion
//Si tenemos q iterar un listado de elementos-como un array es recomendable
//usar for of

let animales = ['Chanchito feliz','Dragon','Perrito'];

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i< animales.length) {
    console.log(animales[i]);
    i++;
}