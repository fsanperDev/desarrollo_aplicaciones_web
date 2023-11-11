
/**
 * Esta funcion sirve para mostrar por pantalla las cadenas o arrays que se le pases. (Para mostrar
 * la respuesta a los ejercicios)
 * @param {*} sCadena 
 */
function mostrarSalidaInterfaz(sCadena) {
    const oSalida = document.getElementById("salida");
    oSalida.textContent = sCadena;
}

/*****************  ACTIVIDAD 1  *******************************************************************/

//piramideDeNumeros();   /*  <-- Tienes que descomentar para que funcione */

/**
 * Funcion que genera una piramide de numeros.
 */
function piramideDeNumeros() {
    const tamanoPiramide = 30;
    let aCadenaNumeros = '';
    for (let i = 1; i <= tamanoPiramide; i++) {
        for (let j = 1; j <= i; j++) {
            aCadenaNumeros += i + '  ';
        }
        console.log(aCadenaNumeros);
        aCadenaNumeros = '';
    }
}


/********************************** ACTIVIDAD 2  **************************************************************/

//generarNumerosAleatorios();   /*  <-- Tienes que descomentar para que funcione */

/**
 * Funcion que genera 100 numeros aleatorios entre 1 y 1000.
 */
function generarNumerosAleatorios() {
    const aNuemrosAleatorio = [];//Array donde se guardan los nuemros aleatorios.

    for (let i = 0; i < 100; i++) {
        let iNumAleatorio = Math.floor(Math.random() * 1000 + 1);//Numero aleatorio

        /* Si el numero no existe ya en el array, lo incluye. */
        if (aNuemrosAleatorio.includes(iNumAleatorio) == false) {
            aNuemrosAleatorio.push(`${iNumAleatorio}`);
        } else {
            // Si ya existe el numero se vuelve a repetir el proceso como si no contara esta vuelta.
            i--;
        }
    }
    mostrarSalidaInterfaz(aNuemrosAleatorio);//Llamamos a la funcion para mostrar por pantalla la respuesta. 
}

/************************   ACTIVIDAD 3  ***************************************************************/

const aArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/** El ejercicio esta hecho cvon métodos nativos. */

console.log(`a) -> ${aArray}`);
console.log(`b) -> ${aArray.reverse()}`); // A partir de aquí el array estará en reverso.
const aArrayMultiplicado = aArray.map(iNumero => iNumero * iNumero);
console.log(`c) Entre si mismo -> ${aArrayMultiplicado}`);
const iNumMultiplicados = aArrayMultiplicado.reduce((iNumPrimero, iNumSegundo) => iNumPrimero * iNumSegundo);
console.log(`c) Multiplicado entre todos -> ${iNumMultiplicados}`);
console.log(`d) Elemento eliminado -> ${aArray.pop()}`);
console.log(`d) Como queda el array -> ${aArray}`);/*El elemento eliminado es el 1 debido a que el array está en reverso y 
el ejercicio no indica que lo vuelva a ordenar. */


