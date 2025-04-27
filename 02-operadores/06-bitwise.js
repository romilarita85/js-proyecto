//bit: un digito en binario, puede tomar el valor de 0 o 1
//Byte: es la combinacion de 8 bits. En un byte se pueden almacenar
//caracteres,numeros, simbolos o valores numericos.
//El operador logico de bitwise va a utilizar la base binaria de los
//numeros para poder operar. Tenemos OR,AND 

//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binario: 0,1
//bit: 0 1
//Byte: 8 bits
//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000101 -> 4
//Byte: 00000110 -> 5

console.log(1 | 3);// 00000011 -crea un nuevo byte en base
console.log(1 | 4);// 00000101
console.log(3 | 5);// 00000111

console.log(1 & 3);// 00000001 
console.log(1 & 4);// 00000000
console.log(3 & 5);// 00000001
