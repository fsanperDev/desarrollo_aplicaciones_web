//----------------------   ACTIVIDAD 1   ------------------------------------------------------------
// PARA VER LA ACTIVIDAD 2 DEBES DE DESCOMENTARLA.
function obtenerFecha() {
    do {
        //Variables    
        let bDay = false;
        let bMonth = false;
        let bYear = false;

        let iDia = prompt("Escribe el Dia");
        let iMes = prompt("Escribe el Mes");
        let iAnno = prompt("Escribe el Año");

        /* Comprobar que los numeros sean correctos */
        if (iDia.length == 1 || iDia.length == 2) {
            bDay = true;
        } else {
            alert("No has escrito bien el día.");
        }
        if (iMes.length == 1 || iMes.length == 2) {
            bMonth = true;
        } else {
            alert("No has escrito bien el mes.");
        }
        if (iAnno.length >= 1 || iAnno.length <= 4) {
            bYear = true;
        } else {
            alert("No has escrito bien el año.");
        }

    } while (bDay == false || bMonth == false || bYear == false);
    /* Convertir la tipo Date  */
    let sFechaCompleta = iAnno + "-" + iMes + "-" + iDia;
    dFecha = Date.parse(sFechaCompleta);
    var dFechaFinal = new Date(dFecha);
    return (dFechaFinal);
}

let iFecha1 = obtenerFecha();
let iFecha2 = obtenerFecha();

let iTiempoDeDiferencia = iFecha2.getTime() - iFecha1.getTime();
let iDiasDeDiferencia = Math.round(iTiempoDeDiferencia / (1000 * 60 * 60 * 24));

console.log(iDiasDeDiferencia);

//-----------------------   ACTIVIDAD 2   ---------------------------------------------------------
/*
function ventanaGoogle() {
    window.open("http://www.google.es","","height=400,width=800");
}

    document.write("Nos vamos a Google.");
    setTimeout('ventanaGoogle()',5000);
*/
