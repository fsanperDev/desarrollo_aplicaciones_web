// ARRAY 
const aNumerosDeLoteria = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];

//TITULO Y BOTON
const Body = document.getElementsByTagName("body")[0];
const sTitulo = document.createElement("h1");
const sTextoTitulo = document.createTextNode("10 combinaciones aleatorias de loteria primitiva");

const BotonNuevasCombinaciones = document.createElement("input");
BotonNuevasCombinaciones.setAttribute("type", "button");
BotonNuevasCombinaciones.setAttribute("id", "buttonRestart");
BotonNuevasCombinaciones.setAttribute("value", "Generar 10 nuevas combinaciones");
BotonNuevasCombinaciones.setAttribute("class", "square");

sTitulo.appendChild(sTextoTitulo);
sTitulo.appendChild(BotonNuevasCombinaciones);
Body.appendChild(sTitulo);

//-------------------  EVENTOS  --------------------------------------------------------------------------
const boton = document.getElementById("buttonRestart");
boton.addEventListener("click", crearCombinaciones);
//--------------------  FUNCIONES  -----------------------------------------------------------------------

/**
 * Funcion que sirve para crear 10 combinaciones de 6 números.
 * Se divide en 2 partes, la primera comprueba si existe previamente una <table> con la ID 'tablaDeCombinaciones' y
 * en caso afirmativo la elimina. La segunda parte crea un nuevo array a partir de aNumerosDeLoteria desordenado
 * y crea una <table> con las 10 combinaciones y sus seis números cada una.
 */
function crearCombinaciones() {
//Parte 1
    
    if (document.getElementById("tablaDeCombinaciones")) {
        let table = document.getElementById("tablaDeCombinaciones");
        Body.removeChild(table);        
    }   

//Parte 2
    let iNumeroDeCombinacion = 1;
    const oCombinaciones = document.createElement("table");
    oCombinaciones.setAttribute("id", "tablaDeCombinaciones");
    Body.appendChild(oCombinaciones);

    const oTR = document.createElement("tr");
    for (let iNumColumnas = 0; iNumColumnas < 2; iNumColumnas++) {
        const oTD = document.createElement("td");

        for (let iNumFilas = 0; iNumFilas < 5; iNumFilas++) {
            //Parte que mezcla el array.
            let aNumerosDesordenados = shuffle(aNumerosDeLoteria);
            /*********** */
            const sTEXTO = document.createElement("h2");
            sTEXTO.textContent = "Combinacion " + iNumeroDeCombinacion;
            oTD.appendChild(sTEXTO);
            for (let i = 0; i < 6; i++) {
                const iNUM_LOTERIA = document.createElement("p2");
                iNUM_LOTERIA.textContent = aNumerosDesordenados[i];
                iNUM_LOTERIA.setAttribute("class", "circle");
                oTD.appendChild(iNUM_LOTERIA);
            }
            iNumeroDeCombinacion++;
        }
        oTR.appendChild(oTD);
    }
    oCombinaciones.appendChild(oTR);
}

/**
 * Funcion que que sirve para desordenar el contenido de un array.
 * @param {*} arr 
 */
function shuffle(arr) {
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};