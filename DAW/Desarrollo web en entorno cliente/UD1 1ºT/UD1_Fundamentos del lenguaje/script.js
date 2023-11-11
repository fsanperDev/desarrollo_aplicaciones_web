//  Comentario de una sola linea.

/* Comentario de 
    varias lineas */

// var variable1;  --> Variable declarada.
var variable1 = 1; // Variable decalarada e inicializada.
let variable2 = 2;
const variable3 = 3;

{
    let variableBloque = 10; /*LA VARIABLE 'let' SE RESTRINGE SI PERTENECE A UN BLOQUE Y NO 
    PUEDE MOSTRARSE NI UTILIZARZE FUERA DE ESTE. */
}

/* 
  PARA MOSRTAR UN MENSAJE POR LA CONSOLA DE COMANDOS DEL NAVEGADOR.
  console.log("")
*/
console.log("Valor de la variable2: " + variable2);

/*
 PARA UN MAYOR MANTENIMIENTO ES ACONSEJABLE INDICAR EL TIPO DE DATO AL QUE PERTENECE LA VARIABLE.
 PONIENDO LA PRIMERA LETRA INDICANDO EL TIPO DE DATOS. i = Int s = Stream
    var iVariable1 = 1; 
    let sVariable2 = "Cadena";

DIFERENCIARLAS POR UN GUION BAJO.
    const i_variable3 = 3;
O PONIENDO LAS CONSTANTES EN MAYUSCULAS.
    const VARIABLE3 = 3;
*/