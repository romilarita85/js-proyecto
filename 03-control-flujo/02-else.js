//Usuario es menor de edad
let edad = 11;
if(edad > 17)
{
    console.log('Usuario mayor de edad');
    if(edad > 13)
    {
        console.log('Usuario necesita estar acompañado por sus padres');
    }
   
}else
{   
    if(edad > 13)
    {
        console.log('Usuario necesita estar acompañado por sus padres');
    }else
    {
        console.log('Usuario menor de edad. No puede ingresar');
    }
}

if(edad > 17){

    console.log('Usuario mayor de edad');
}else if(edad>13){
    console.log('Usuario necesita estar acompañado por sus padres');
}else{
    console.log('Usuario menor de edad. No puede ingresar');
}


