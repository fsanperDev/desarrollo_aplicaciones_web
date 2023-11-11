// Actividad 4. Temporizadores.
// a)
/* function abrirVentana() {
    window.open("index2.html","nueva","height=800,width=600");
}
setTimeout(abrirVentana, 5000);*/

// b)
let iIDVentana = window.open("index2.html","prueba","height=800,width=600");

let iContador = 10;
let iIDIntervalo = setInterval(decrementarContador, 1000);


function decrementarContador() {
    console.log(iContador);
    iContador--;
    if (iContador == 0) {
        clearInterval(iIDIntervalo);
        iIDVentana.close();
    }
}