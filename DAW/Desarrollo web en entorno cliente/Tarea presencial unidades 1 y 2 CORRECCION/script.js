/*  Utiliza sPassword para almacenar la contraseña introducida 
    por el usuario. Si la contraseña no tiene entre 8 y 16 
    caracteres se le volverá a pedir una nueva contraseña. 
    Utiliza la función prompt.*/
let sPassword;

do {
    sPassword = prompt("Escribe aquí tu contraseña");
} while (sPassword.length < 8 || sPassword.length > 16);

/*  Actualiza las variables iContadorX que almacenan la cantidad 
    de letras de cada tipo que tiene la contraseña. Para averiguar 
    si una letra es de un tipo se deben usar las constantes
    S_MINUSCULAS y S_NUMEROS. Utiliza las funciones del objeto
    nativo String siempre que sea posible. */
let iContadorMinus = 0;
let iContadorMayus = 0;
let iContadorNum = 0;
let iContadorOtros = 0;

const S_MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const S_NUMEROS = "0123456789";

for (let i = 0; i < sPassword.length; i++) {
    const sLetra = sPassword.charAt(i);

    if (S_MINUSCULAS.indexOf(sLetra) != -1) {
        iContadorMinus++;
    } else  if (S_MINUSCULAS.toUpperCase().indexOf(sLetra) != -1) {
        iContadorMayus++;
    } else  if (S_NUMEROS.indexOf(sLetra) != -1) {
        iContadorNum++;
    } else {
        iContadorOtros++;
    }    
}

/*  Una contraseña se considera fuerte si tiene al menos una letra 
    minúscula, al menos 2 letras mayúsculas, al menos un 1 número y 
    al menos 2 caracteres de otro tipo. Indica a través de la consola 
    si la contraseña es fuerte o débil siguiendo el formato de la hoja 
    del enunciado.  */

    if (iContadorMayus >= 2 && iContadorMinus >= 1 && iContadorNum >= 1 && iContadorOtros >= 2) {
        console.log("La contraseña "+sPassword+" es fuerte.");
    } else {
        console.log("La contraseña "+sPassword+" es debil.");
    }