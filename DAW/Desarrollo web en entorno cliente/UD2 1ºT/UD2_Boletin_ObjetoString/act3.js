const S_USER = prompt("Introduce un nombre: ","HOLAESTE2");
const S_PASS = prompt("Introduce una contraseña: ","c0N!raseNHa");



if (S_USER.length <= 10) {
    if (comprobarUsuarioMayuscula() == true) {
        if (comprobarContrasenna() == true) {
            console.log("La contraseña es correcta.");
        } else {
            console.log("ERROR en la contraseña.");
        }
    } else {
        console.log("El nombre de usuario no es correcto.");
    }
} else {
    console.log("Nombre de usuario demasiado largo. max10 ");
}

/**
 * Funcion para comprobar que toda la cadena es mayuscula.
 */
function comprobarUsuarioMayuscula() {
    S_MAYUSCULA_USUARIO = S_USER.toUpperCase();

    if (S_MAYUSCULA_USUARIO == S_USER) {
        return true;
    } else {
        return false;
    }
}

/**
 * Funcion para comprobar la contraseña.
 */
function comprobarContrasenna() {
    S_MAYUSCULA_PASS = S_PASS.toUpperCase();
    S_MINUSCULA_PASS = S_PASS.toLowerCase();
    let iLongitudPASS = S_PASS.length;
    let bLetraMayuscula = false;
    let bLetraMinuscula = false;
    let bNumero = false;
    let bCaracter = false;
    let arrayCaracteresNo = ["¡","!","¿","¿","@","%","ç","$"];

    // Si contiene Mayusculas.
    for (let i = 0; i < iLongitudPASS; i++) {
        if (S_PASS.charAt(i) == S_MAYUSCULA_PASS.charAt(i)) {
            bLetraMayuscula = true;
        }        
    }

    if (bLetraMayuscula = true) {
        // Si contiene Minusculas.
        for (let i = 0; i < iLongitudPASS; i++) {
            if (S_PASS.charAt(i) == S_MINUSCULA_PASS.charAt(i)) {
                bLetraMinuscula = true;
            }        
        } 

        if (bLetraMinuscula = true) {
           //Si contiene numeros.
           for (let i = 0; i < iLongitudPASS; i++) {
               for (let y = 0; y < 10; y++) {
                    if (S_PASS.charAt(i) == y) {
                        bNumero = true;
                    }                    
               }               
           }
           
           if (bNumero == true) {
               //Si inclulle caracter no alfanumerico.
               if (S_PASS.includes(arrayCaracteresNo) == true) {
                    bCaracter = true;
               }
               if (bCaracter = true) {
                   return true;
               } else {
                  return false;
                  console.log("No tiene un caracter no alfanumerico.");
               }
           } else {
               return false;
               console.log("No tiene un numero.");
           }
        } else {
            return false;
            console.log("No tiene minuscula.");
        }
    } else {
        return false;
        console.log("No tiene mayuscula.");
    }
}