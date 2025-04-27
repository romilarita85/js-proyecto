//while:
//cuales son los numeros pares
//creamos una variable i (por convencion) y una condicion
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