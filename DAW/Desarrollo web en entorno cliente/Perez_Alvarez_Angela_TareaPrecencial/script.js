/*  Utiliza sPassword para almacenar la contraseña introducida 
    por el usuario. Si la contraseña no tiene entre 8 y 16 
    caracteres se le volverá a pedir una nueva contraseña. 
    Utiliza la función prompt.*/

    let sPassword;

    pedirContrasenna();

    function pedirContrasenna() {
        sPassword = prompt("Escribe aquí tu contraseña");

    if (sPassword.length < 8 || sPassword.length > 16 ) {
        console.log("La contraseña no tiene entre 8 y 16 caracteres.");
        pedirContrasenna();
    } else {



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
  
    //Minusculas
    for (let i = 0; i < sPassword.length; i++) {
        for (let y = 0; y < S_MINUSCULAS.length; y++) {
            if (sPassword.charAt(i) == S_MINUSCULAS.charAt(y)) {
                iContadorMinus++;
            }            
        }
    }

    //Mayusculas
    for (let i = 0; i < sPassword.length; i++) {
        if (sPassword.charAt(i) == sPassword.toUpperCase().charAt(i)) {
            if (Number.isInteger(sPassword.charAt(i)) != true) {         
                if (S_MINUSCULAS.toUpperCase().includes(sPassword.charAt(i)) == true) {
                    iContadorMayus++;
                } 
            }            
        }        
    }

    //Numeros
    for (let i = 0; i < sPassword.length; i++) {
        if (S_NUMEROS.includes(sPassword.charAt(i)) == true) {
            iContadorNum++;
        }        
    }

    //Otros
    for (let i = 0; i < sPassword.length; i++) {
        if (S_MINUSCULAS.includes(sPassword.charAt(i)) == false && S_NUMEROS.includes(sPassword.charAt(i)) == false) {
            if (S_MINUSCULAS.toUpperCase().includes(sPassword.charAt(i)) != true) { 
                iContadorOtros++;
            }  
        }          
    }


/*  Una contraseña se considera fuerte si tiene al menos una letra 
    minúscula, al menos 2 letras mayúsculas, al menos un 1 número y 
    al menos 2 caracteres de otro tipo. Indica a través de la consola 
    si la contraseña es fuerte o débil siguiendo el formato de la hoja 
    del enunciado.  */

    if (iContadorMinus >= 1 && iContadorMayus >= 2 && iContadorNum >= 1 && iContadorOtros >= 2) {
        console.log("La contraseña \""+sPassword+"\" es fuerte." );
    } else {
        console.log("La contraseña \""+sPassword+"\" es débil." ); 
    }
    console.log("Hemos encontrado "+iContadorMinus+" minúscula/s, "+iContadorMayus+" mayúscula/s, "+iContadorNum+" número/s y "+iContadorOtros+" caracter/es de otro tipo.");
    }
}
