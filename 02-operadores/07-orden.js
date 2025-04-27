//El orden en que se van a ejecutar los operadores tienen su 
//propio orden de ejecucion
let resultado = 8/(2*(2+2));
console.log(resultado);

//-sin parentesis:
let edad = 20;
let tieneDNI = false;

if (edad > 18 && tieneDNI || edad >= 21) 
{
  console.log("Puede entrar");
}
//-con parentesis: 
if (edad > 18 && (tieneDNI || edad >= 21))
{
  console.log("Puede entrar");
}

let usuario = "";
let nombre = usuario || "Invitado";
console.log(nombre); // 👉 "Invitado"

  
