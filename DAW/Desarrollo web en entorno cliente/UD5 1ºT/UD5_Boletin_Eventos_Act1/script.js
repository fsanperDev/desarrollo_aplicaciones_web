/*      
Implementa una aplicación que abra una ventana emergente (alert) al pulsar sobre un botón.
Añade un manejador del evento click al botón usando:
a) El modelo de eventos en línea/tradicional.
b) El modelo de eventos avanzado.
c) El modelo de eventos avanzado compatible con versiones de Internet Explorer anteriores a la 9.
*/

const boton = document.getElementById("boton");

// a) Modelo tradicional
// boton.onclick = abrirVentanaEmergente; -> Esto es referenciar la funcion.
// abrirVentanaEmergente()  -> Esto es invocar la funcion.
// boton.onclick = null;

// b) Modelo avanzado
boton.addEventListener("click", abrirVentanaEmergente);
boton.removeEventListener("click", abrirVentanaEmergente);



function abrirVentanaEmergente() {
    alert("Nueva ventana abierta.");
}