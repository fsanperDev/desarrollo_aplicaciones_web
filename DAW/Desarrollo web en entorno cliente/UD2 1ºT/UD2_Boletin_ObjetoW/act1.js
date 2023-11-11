// ACT 1 - CONSULTAR PROPIEDADES
console.log(window.screenX);
window.screenLeft;// Esta propiedad no existe en un navegador Internet Explorer que tenga una version mas baja que la 9.

let iLeftSpace = window.screenX || window.screenLeft; //Solucion a la incompatibilidad del navegador.
let iTopSpace = window.screenY || window.screenTop;

// Asi que mostraria por consola en la version 5 de JS.
console.log("Espacio a la izquierda: "+iLeftSpace+"px");
console.log("Espacio arriva: "+iTopSpace+"px");

// Así seria a partir de la version 6.
//ES6 Temple Strings (Es necesario la comilla oblicuas [Tecla a la derecha de la P, luego pulsa espacio]) 
console.log(`Espacio a la izquierda: ${iLeftSpace} px`);
console.log(`Espacio arriva: ${iTopSpace} px`);


