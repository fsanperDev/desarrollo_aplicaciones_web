// ACT.3 - Mover y redimensionar.
/**
 *  moveBy -> El método moveBy () mueve una ventana un número específico 
 *            de píxeles en relación con sus coordenadas actuales.
 * 
 *  moveTo -> El método moveTo () mueve el borde izquierdo y superior de una ventana a las
 *            coordenadas especificadas.
 * 
 *  resizeBy -> El método resizeBy () cambia el tamaño de una ventana en la cantidad especificada,
 *               en relación con su tamaño actual.
 *              Nota: Este método mueve la esquina inferior derecha de la ventana por el número especificado
 *                    de píxeles definidos. La esquina superior izquierda no se moverá (permanece en sus
 *                    coordenadas originales).
 *  resizeTo -> El método resizeTo () cambia el tamaño de una ventana al ancho y alto especificados.
 * 
 */

let myWindows;

function abrirVentana() {
   myWindows = window.open("", "myWindow", "width=200, height=100");
}

 function moverDerecha() {
    myWindows.moveBy(50, 0);
    myWindows.focus();
 }

 function moverCoordenadas() {
    myWindows.moveTo(50, 50);
    myWindows.focus(); 
 }

 function aumentarAncho() {
    myWindows.resizeBy(50, 0);
    myWindows.focus();
 }

 function establezerTamaño() {
    myWindows.resizeTo(600, 450); 
    myWindows.focus(); 
 }