/**
 * "iVolumenActual" almacena un valor entero de 0 a 100 que
 * representa el volumen fijado actualmente. Para conocer su
 * valor y modificarlo se deben usar las funciones 
 * "obtenerVolumenActual" y "actualizarVolumenActual" 
 * respectivamente.
 */
let iVolumenActual = 0;

function obtenerVolumenActual() {
    return iVolumenActual;
}

function actualizarVolumenActual(iNuevoVolumen) {
    iVolumenActual = iNuevoVolumen;
}

/**
 * 1. Implementa una función auxiliar que actualice el volumen
 * en texto de la interfaz HTML con el valor de "iNuevoVolumen".
 * [0,5 puntos]
 */
function actualizarVolumenInterfaz(iNuevoVolumen) {
    const oVolumen = document.getElementById("volume");
    oVolumen.textContent = iNuevoVolumen;
}

/**
 * 2. Implementa una función que cree una tabla HTML de una fila 
 * y 100 columnas y la inserte en el div "table". [1,5 puntos]
 */
function insertarTablaHTML() {
    const oTable = document.createElement("table");
    const oTr = document.createElement("tr");
    for (let i = 0; i < 100; i++) {
        const oTd = document.createElement("td");
        oTr.appendChild(oTd);       
    }
    oTable.appendChild(oTr);
    const oDivTable = document.getElementById("table");
    oDivTable.appendChild(oTable);
}

insertarTablaHTML();

/**
 * 3. Añade los manejadores de eventos sobre los elementos "td" 
 * de la tabla para que:
 *  
 *  -Al colocar el ratón sobre el elemento se llame a una función
 *  anónima que actualice el volumen en texto de la interfaz 
 *  utilizando la posición que ocupa el "td". Por ejemplo, al colocar
 *  el ratón en el "td" que ocupa la posición 29, deberá mostrar el 
 *  volumen 30. La posición que ocupa un "td" se puede conocer a través 
 *  de la propiedad "cellIndex" del elemento. Utiliza la función 
 *  auxiliar "actualizarVolumenInterfaz".
 *  
 *  -Al salir con el ratón del elemento se llame a una función 
 *  anónima que actualice el volumen en texto de la interfaz con 
 *  el volumen fijado actualmente. Utiliza la función auxiliar 
 *  "actualizarVolumenInterfaz".
 * 
 *  -Al hacer clic sobre el elemento se llame a la función externa
 *  "cambiarVolumen".
 */

const oTds = document.getElementsByTagName("td");
for (const oTd of oTds) {
    oTd.addEventListener("mouseover", function (ev) {
        const oTd = ev.target;
        const iVolumen = oTd.cellIndex + 1;
        actualizarVolumenInterfaz(iVolumen);
    });

    oTd.addEventListener("mouseout", function () {
        actualizarVolumenInterfaz(obtenerVolumenActual());
    })

    oTd.addEventListener("click", cambiarVolumen);
}

/**
 * Añade un manejador de evento para que al hacer clic sobre la 
 * imagen del volumen se llame a la función externa "cambiarVolumen".
 * [2,5 puntos]
 */

const oImg = document.getElementsByTagName("img")[0];
oImg.addEventListener("click", cambiarVolumen);

/**
 * 4. Implementa una función auxiliar que actualice la imagen del 
 * volumen en función del valor de "iNuevoVolumen".
 *  - Con volumen 0 se mostrará "sound_off.png".
 *  - De 1 a 40 se mostrará "speaker_low.png".
 *  - De 40 a 80 se mostrará "speaker_med.png".
 *  - Con más de 80 de volumen se mostrará "speaker_high.png".
 * [1,5 puntos]
 */
function actualizarImagenInterfaz(iNuevoVolumen) {
    const oImg = document.getElementsByTagName("img")[0];
    if (iNuevoVolumen == 0) {
        oImg.setAttribute("src", "images/sound_off.png");
    } else if (iNuevoVolumen < 40){
        oImg.setAttribute("src", "images/speaker_low.png");
    } else if (iNuevoVolumen > 40 && iNuevoVolumen <= 80){
        oImg.setAttribute("src", "images/speaker_med.png");
    } else {
        oImg.setAttribute("src", "images/speaker_high.png");
    }
}

/**
 * 5. Implementa una función auxiliar que ponga o quite de color
 * verde (clase CSS "verde") los elementos "td" de la tabla en
 * función de "iNuevoVolumen".
 * La función debe poner de color verde los primeros "td" hasta 
 * llegar a "iNuevoVolumen" y quitar el color verde de los 
 * restantes. Por ejemplo, si "iNuevoVolumen" es 30, a los 30
 * primeros "td" se les pondrá el color verde y a los 70
 * restantes se les quitará. [2 puntos]
 */
function actualizarTdsInterfaz(iNuevoVolumen) {
    const oTds = document.getElementsByTagName("td");
    for (let i = 0; i < oTds.length; i++) {
        const oTd = oTds[i];
        if (i < iNuevoVolumen) {
            oTd.classList.add("verde");
        } else {
            oTd.classList.remove("verde");
        }        
    }
}

/**
 * 6. Implementa la función que se llamará cuando se haga clic en 
 * un elemento "td" de la tabla y en la imagen de volumen. La función
 * fija un nuevo volumen actual. 
 * 
 *  -Si se ha hecho clic en la imagen, el nuevo volumen actual será 0.
 *  -Si se ha hecho clic en un "td" de la tabla, el volumen se 
 *  obtendrá en función de la posición que ocupe el "td" en la
 *  tabla. Por ejemplo, para el "td" 29, el nuevo volumen actual 
 *  será 30.
 * 
 * Utiliza las funciones auxiliares "actualizarTdsInterfaz", 
 * "actualizarImagenInterfaz" y "actualizarVolumenInterfaz" para
 * actualizar la interfaz en consecuencia al nuevo valor fijado para 
 * el volumen actual. [2 puntos]
 */
function cambiarVolumen(ev) {
    const oObjeto = ev.target;
    const sTipoNodo = oObjeto.nodeName;
    if (sTipoNodo == "IMG") {
        actualizarVolumenActual(0);
    } else {
        actualizarVolumenActual(oObjeto.cellIndex + 1);
    }
    //Actualizar interfaz.
    actualizarTdsInterfaz(obtenerVolumenActual());
    actualizarImagenInterfaz(obtenerVolumenActual());
    actualizarVolumenInterfaz(obtenerVolumenActual());
}