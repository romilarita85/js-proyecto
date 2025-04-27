//Do-while: evalua la condicion de corte al final del loop

let i = 2;
while (i < 2) //se evalua primero la condicion, si se cumple se ejecuta
{
    if (i % 2 == 0) {
        console.log("El numero es par", i)
    }
    i++;
}

do
{//ejecuta la porcion de codigo y luego evalua
    if (i % 2 == 0) {
        console.log("El numero es par", i)
    }
    i++;

}while (i < 2) 