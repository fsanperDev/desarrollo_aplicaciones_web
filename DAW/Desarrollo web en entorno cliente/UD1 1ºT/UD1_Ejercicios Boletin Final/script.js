// ACTIVIDAD 1 NIF/NIE   ---------------------------------------------------------------------------
function calculaNIFNIE() {
    var iNif = prompt("Introduce el NIF/NIE ", "Aquí");

    if (iNif.length == 8) {
        let n = parseInt(iNif);
        debugger;
        /**
         * Revisar operacion
         */
        n = n / 23;
        switch (n) {
            case 0:
                iNif = iNif + "T";
                console.log(iNif);
                break;
            case 1:
                iNif = iNif + "R";
                console.log(iNif);
                break;
            case 2:
                iNif = iNif + "W";
                console.log(iNif);
                break;
            case 3:
                iNif = iNif + "A";
                console.log(iNif);
                break;
            case 4:
                iNif = iNif + "G";
                console.log(iNif);
                break;
            case 5:
                iNif = iNif + "M";
                console.log(iNif);
                break;
            case 6:
                iNif = iNif + "Y";
                console.log(iNif);
                break;
            case 7:
                iNif = iNif + "F";
                console.log(iNif);
                break;
            case 8:
                iNif = iNif + "P";
                console.log(iNif);
                break;
            case 9:
                iNif = iNif + "D";
                console.log(iNif);
                break;
            case 10:
                iNif = iNif + "X";
                console.log(iNif);
                break;
            case 11:
                iNif = iNif + "B";
                console.log(iNif);
                break;
            case 12:
                iNif = iNif + "N";
                console.log(iNif);
                break;
            case 13:
                iNif = iNif + "J";
                console.log(iNif);
                break;
            case 14:
                iNif = iNif + "Z";
                console.log(iNif);
                break;
            case 15:
                iNif = iNif + "S";
                console.log(iNif);
                break;
            case 16:
                iNif = iNif + "Q";
                console.log(iNif);
                break;
            case 17:
                iNif = iNif + "V";
                console.log(iNif);
                break;
            case 18:
                iNif = iNif + "H";
                console.log(iNif);
                break;
            case 19:
                iNif = iNif + "L";
                console.log(iNif);
                break;
            case 20:
                iNif = iNif + "C";
                console.log(iNif);
                break;
            case 21:
                iNif = iNif + "K";
                console.log(iNif);
                break;
            case 22:
                iNif = iNif + "E";
                console.log(iNif);
                break;
            default:
                console.log("Error en la operación");
                break;
        }
    } if (iNif.length < 8) {
        console.log("Mínimo son 8 numeros.");
    } if (iNif.length > 8) {
        console.log("Demasiados caracteres.");
    } if (iNif.length == null) {
        console.log("Has cerraso la ventana.");
    }

}
// ACTIVIDAD 4 SUMA20  ------------------------------------------------------------------------
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//iNumeroUsuario = 15,  iAcumulador = 8
function esValido(iNumeroUsuario, iAcumulador) {
    let bValido = false;
    let iDiferencia = iNumeroUsuario - iAcumulador; // 7
    if (iDiferencia <= 5 && iDiferencia >= 1) {
        bValido = true;
    }
    return bValido;
}

// iAcumulador = 15, iNumeroGanador = 20
function obtenerNumero(iAcumulador, iNumeroGanador) {
    let iNumeroMaquina;
    let iDiferencia = iNumeroGanador - iAcumulador;

    if (iDiferencia <= 5) {
        iNumeroMaquina = iNumeroGanador;
    }else{
        let iAleatorio = getRandomInt(1, 6);
        iNumeroMaquina = iAcumulador + iAleatorio;
    }    
    return iNumeroMaquina;
}

function suma20() {
    let iAcumulador = 0;
    const I_NUMERO_GANADOR = 20;

    console.log("¡Juguemos a Suma 20!");
    console.log("Partimos del número: "+ iAcumulador);

    let iNumeroUsuario, sEntrada;
    let iNumeroMaquina;
    let bTurnoUsuario = true;

    while (iAcumulador != I_NUMERO_GANADOR) {
    if (bTurnoUsuario) {   
        //Turno usuario
        do {
            sEntrada = prompt("Suma una cantidad de 1 a 5: "+ iAcumulador);
            iNumeroUsuario = parseInt(sEntrada);
        } while (!esValido(iNumeroUsuario, iAcumulador));   
        iAcumulador = iNumeroUsuario;     
        console.log("Número elegido por el usuario es: "+iNumeroUsuario);
    }else{
        //Turno máquina
        iNumeroMaquina = obtenerNumero(iAcumulador, I_NUMERO_GANADOR);
        iAcumulador = iNumeroMaquina;
        console.log("Número elegido por la máquina es: "+iNumeroMaquina);        
    }
    bTurnoUsuario = !bTurnoUsuario;
    }

}

//ACTIVIDAD 6 ADIVINA 100  --------------------------------------------------------------------

/**
 * Primera forma.
 */
function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

function adivinaElNumero() {
    var iNumeroAdivinar = getRandomInt(1, 101);
    const iN2 = parseInt(iNumeroAdivinar);
    let bSalir = false;

    do {
        var iNumeroUsuario = prompt("Introduce un numero entre 1 y 100","");
        let n = parseInt(iNumeroUsuario);
        console.log("El numero aleatorio es: "+iN2);    
        if (n == iN2) {
            console.log("Has acertado.");
            bSalir = true;
        }if (n > iN2) {
            console.log("El numero aleatorio es menor.");
        }if (n < iN2) {
            console.log("El numero aleatorio es mayor.");
        }
    } while (bSalir != true);    
}

/**
 * Segunda forma [PACO]
 */

/*
const I_NUMERO_GANADOR = getRandomInt(1, 101);

console.log("Numero ganador elegido: "+I_NUMERO_GANADOR);

// min y max incluidos 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let bFallado = true;
let iNumeroUsuario;
let sEntrada;

while (bFallado) {
    sEntrada = prompt("Introduzca un numero de 1 a 100");
    iNumeroUsuario = parseInt(sEntrada);

    if (iNumeroUsuario == I_NUMERO_GANADOR) {
        console.log("Enhorabuena, has ganado.");
        bFallado = false;
    } else if (iNumeroUsuario > I_NUMERO_GANADOR) {
        console.log("Indica un número menor.");
    } else if (iNumeroUsuario > I_NUMERO_GANADOR){
        console.log("Indica un número mayor.");
    } else{
        console.log("ERROR, valores incorrectos");
    }
}
*/