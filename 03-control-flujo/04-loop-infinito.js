//Es una porcion de codigo q se ejecuta de manera infinita

let i = 0;
//while(condicion)//si se cumple se ejecuta el codigo
//{
//   algo q ocurra para salir del loop
//}
while (i<10) 
{
    if (i % 2 == 0) {
        console.log("El numero es par", i)
    }
    i++;
}
console.log("Fuera del while");