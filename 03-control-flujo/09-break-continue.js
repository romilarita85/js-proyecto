//Instrucciones de break y continue:
//Para detener la ejecucion de algun loop
//break: corta 
//continue salta una linea

let i = 0;
while (i<6) {
    
    i++;
    if(i === 2)
    {
        continue; //continua el loop y vuelve al comienzo
    }
    if (i === 4) {
        break;//
    }
    console.log(i);
}
//se pueden usar para for, forin,dowhile,while