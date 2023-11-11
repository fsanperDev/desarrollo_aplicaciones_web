// Actividad 2. Cifrado.
/* mi modo, sin acabar*/
/*
let sMensaje = "Este es el mensaje";
let iClave = 12345;
let iLongitud = sMensaje.length;
let iLetra = 0;
let sMensajeCifrado = "";

console.log(iLongitud);

do{
if ( sMensaje.charAt(iLetra) == "E") {
    console.log("Ha entrado");
}

    let n = sMensaje.charCodeAt(iLetra);    

    console.log(n);
    iLetra++;
}while(iLetra < iLongitud);*/


/**
 * Para convertir el numero de un caracte en caracter utilizamos [String.fromCharCode()]
 */

// Hecho por PACO
const S_MENSAJE = prompt("Introduce un mensaje: ");//Este es el mensaje
const S_CLAVE = prompt("Introduce una clave númerica: ");//12345

let iIndexClave = 0;
for (let i = 0; i < S_MENSAJE.length; i++) {
    const S_CODIGO_CARACTER = S_MENSAJE.charCodeAt(i);
    const S_DESPLAZAMIENTO = S_CLAVE.charAt(iIndexClave);
    const I_NUEVO_CODIGO = S_CODIGO_CARACTER + parseInt(S_DESPLAZAMIENTO);
    const S_NUEVO_CARACTER = String.fromCharCode(I_NUEVO_CODIGO);
    console.log(S_NUEVO_CARACTER);

    iIndexClave++;
    if (iIndexClave == S_CLAVE.length) {
        iIndexClave = 0;
    }
}