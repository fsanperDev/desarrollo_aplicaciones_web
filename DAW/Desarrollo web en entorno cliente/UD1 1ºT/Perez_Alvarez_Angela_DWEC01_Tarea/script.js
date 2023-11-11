//-------------------   ACTIVIDAD 1   -----------------------------------------------

function notasIfElse() {   
var iNota = prompt("Introduce la nota. "); 
let inumero = parseInt(iNota);
    if (inumero == 0 || inumero == 1 || inumero == 2 || inumero == 3 || inumero == 4) {
        console.log("Insuficiente");
    } else {
        if (inumero == 5) {
            console.log("Suficiente");
        } else {
            if (inumero == 6) {
                console.log("Bien");
            } else {
                if (inumero == 7 || inumero == 8) {
                    console.log("Notable");
                } else {
                    if (inumero == 9 || inumero == 10) {
                        console.log("Sobresaliente");
                    } else {
                        console.log("ERROR, Debes de introducir un numemro entre el 0 - 10");
                    }   
                }
            }
        }
    }

}

function notasSwitch() {
    var iNota = prompt("Introduce la nota ", "Introduce aquí el numero"); 
    let inumero = parseInt(iNota);
    if (inumero != null) {
            switch (inumero) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    console.log("Insuficiente");
                    break;
                case 5:
                    console.log("Suficiente");
                    break;
                case 6:
                    console.log("Bien");
                    break;
                case 7:
                case 8:
                    console.log("Notable");
                    break;
                case 9:
                case 10:
                    console.log("Sobresaliente");
                    break;    
                default:
                    console.log("ERROR, Debes de introducir un numemro entre el 0 - 10");
                    break;
            }    
          
    }
}

//--------------------------   ACTIVIDAD 2   -----------------------------------------------------

function multiplo(valor, multiplo){
    resto = valor % multiplo;
    if(resto==0)
        return true;
    else
        return false;
}

function multiplosFor() {
    for (let iNumero = 0; iNumero < 101; iNumero++) {
        let sMensaje = iNumero+" - ";

        if (multiplo(iNumero,2) && multiplo(iNumero,3)) {
            sMensaje = sMensaje + "Es multiplo de 2 y 3";
        } else {
            if(multiplo(iNumero,2))
            sMensaje = sMensaje + "Es multiplo de 2";

            if(multiplo(iNumero,3))
            sMensaje = sMensaje + "Es multiplo de 3";              
        }
        console.log(sMensaje);
    }
}

function multiplosWhile() {
    var iNumero = 1;

    while (iNumero <= 100){
        let sMensaje = iNumero+" - ";

        if (multiplo(iNumero,2) && multiplo(iNumero,3)) {
            sMensaje = sMensaje + "Es multiplo de 2 y 3";
        } else {
            if(multiplo(iNumero,2))
            sMensaje = sMensaje + "Es multiplo de 2";

            if(multiplo(iNumero,3))
            sMensaje = sMensaje + "Es multiplo de 3";              
        }
        console.log(sMensaje);
        sMensaje = "";
        iNumero++;
   }
}