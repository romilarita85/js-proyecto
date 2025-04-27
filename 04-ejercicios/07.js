/**
 * Crear algoritmo que devuelva 
 * el precio del producto
 * mas impuesto(el precio completo)
 */

function precioCompleto(precio, impuesto) {
    let p = 0;
    p = precio + precio * impuesto;
    
    return p;
}
let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
//-------------------------------------------
//-Forma corta:

function precioCompleto1(precio, impuesto) 
{
    return precio + precio * impuesto;;
}

let resultado1 = precioCompleto(19.90, 0.15);
console.log(resultado1);
