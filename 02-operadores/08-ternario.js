//Operador ternario: cumple una funcion similar al if
//expresion ?  'si es true' : 'si es false'

//condición ? valorSiEsVerdadero : valorSiEsFalso;

let edad = 26;
//asignamos a una variable "acceso"
let acceso = edad > 17 ? 'Permitir ingreso' : 'No puede ingresar';
console.log(acceso);

//-Ternario con multiples condiciones: 
let nota = 8;
let resultado = nota >= 9 ? "Excelente" : nota >= 7 ? "Aprobado" : "Desaprobado";
console.log(resultado); //"Aprobado"

// Condición anidada
var edad1 = 18;
var resultado1 = edad > 18 ? "Mayor de edad" : edad < 18 ? "Menor de edad" : "Exactamente 18 años";
