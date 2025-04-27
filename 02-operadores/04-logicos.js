//Operdadores logicos: son 3 -> AND,OR,NOT

//-AND &&: Si alguno es false el resultado es false

let mayor = false;
let subscripto = true;
//console.log(true & true);
//console.log(false && true);
console.log('operador and', mayor && subscripto);

//-OR ||: devuelve true si almenos uno es true
console.log('operador or', mayor || subscripto);

//-NOT !-negacion:
console.log( 'operador not', !mayor);
let soloCatalogoInfantil = !mayor; //si la persona q tiene acceso al catalogo infantil