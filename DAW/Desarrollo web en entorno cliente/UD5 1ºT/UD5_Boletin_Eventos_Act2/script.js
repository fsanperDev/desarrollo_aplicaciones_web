/*      
Implementa una aplicación que abra una ventana emergente (alert) al pulsar una tecla sobre un
campo de texto. La ventana debe mostrar la tecla que se ha pulsado.
Consulta el artículo KeyboardEvent key Property de W3Schools.
*/
const campoTexto = document.getElementById("campoTexto");

campoTexto.addEventListener("keypress", abrirVentanaEmergente);

function abrirVentanaEmergente(event) {
    const sLetra = event.key;
    alert(`La tecla pulsada es: ${sLetra} `);
}