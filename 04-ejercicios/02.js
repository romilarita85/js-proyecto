
//Crear una función llamada nombreResolucion que reciba dos parámetros: ancho y alto.
//La función debe devolver el nombre de la resolución según las siguientes medidas mínimas:
/**
 * Nombre:ancho x alto
 * 8k 7680 x 4320
 * 4k 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 * Si no coincide con ninguna, devolver false.
 */
function nombreResolucion(ancho,alto)
{
    if(ancho>=7680 && alto >= 4320)
    {
        return '8k';
    }
    else
    {
        if (ancho>=3840 && alto >= 2160) {
            
            return '4k';
        } 
        else 
        {
            if (ancho>=2560 && alto >= 1440) {
            
                return 'WQHD';
            } 
            else 
            {
                if (ancho >= 1920 && alto >= 1080) {
            
                    return 'FHD';
                } 
                else 
                {
                    if (ancho>= 1280 && alto >= 720) {
            
                        return 'HD';
                    } 
                }
                
            }
            
        }
    }

}
let nombre = nombreResolucion(1366,768);
console.log(nombre);
//------------------------------------------------------
//otra forma:
function nombreResolucion1(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return '8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return '4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'HD';
    } else {
        return false;
    }
}

let nombre1 = nombreResolucion1(3840, 2160);
console.log(nombre1); // HD
