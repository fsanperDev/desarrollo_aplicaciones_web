/*      
Modifica la aplicación anterior para que al mostrarse la ventana emergente por primera vez se deje
de llamar a la función para mostrar la tecla pulsada.
*/
const campoTexto = document.getElementById("campoTexto");

campoTexto.addEventListener("keypress", abrirVentanaEmergente);

function abrirVentanaEmergente(event) {
    const sLetra = event.key;
    alert(`La tecla pulsada es: ${sLetra} `);
    campoTexto.removeEventListener("keypress", abrirVentanaEmergente);//Aquí la línea agregada.
}

