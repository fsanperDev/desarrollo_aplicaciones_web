/*function decirHola() {
    //Aquí empieza el cuerpo de la función.
    console.log("Hello world!");
    console.log("¡Hola mundo!");
    //Aquí acaba el cuerpo de la función.
}
//decirHola();*/

// VALORES DE RETORNO  -------------------------------------------------------------------------------------
function obtenerSaludo() {
    return "Hello world!";
}
//obtenerSaludo();

//Invocar versus referenciar  -----------------------------------------------------------------------------------
/**
 *   obtenerSaludo(); //”Hello world!”
 *   obtenerSaludo; //function obtenerSaludo()
 * 
 *  Cuando se referencia [llamar a una funcion sin las '()'] esta no tiene porque ejecutarse, en cambio
 *  si la invocamos si se ejecuta siempre.
 */

//Nuevas posibilidades en ES6.  --------------------------------------------------------------------------------
function f(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}
/**
 * Los valores por defecto hay que ponerlos al final, el ejemplo anterior está mal.
 */
f(5, 6, 7);
f(5, 6);
f(5);
f();

function anadirPrefijo(prefijo, ...palabras) { // Los [...] se llama operador de propagacion.
    const palabrasConPrefijo = [];
    for (let i = 0; i < palabras.length; i++) {
        palabrasConPrefijo[i] = prefijo + palabras[i];
    }
    return palabrasConPrefijo;
}
anadirPrefijo("con", "verso", "vexo");

/**
 * Al utilizar un operador con propagacion puedes pasar varias variable a una misma funcion sin nececidad 
 * de indicarlas todas, en el ejemplo anterior la primera palabra "con" tiene su referencia como 'prefijo'
 * y las otras como 'palabras'.
 */

//Funciones anónimas.   ---------------------------------------------------------------------------------------
/**
 * Las funciones anónimas son aquellas que no tienen nombre. Se puede declarar como una variable.
 */
/*function() {
    return "Hello world!";
}*/

const decirHola = function () {
    return "Hello world!";
}

//Anotacion Flecha
//const decirHola = () => {"Hello world!"};


/**
 *  a) const f1 = function() { return “¡Hola!”; }
    b) const f2 = function(nombre) { return `Hola ${nombre}`; }
    c) const f3 = function(a, b) { return a + b; }
 */
const f1 = () => "¡Hola!";
const f2 = nombre => `Hola ${nombre}`;
const f3 = (a, b) => a + b;

// Funciones: prácticas recomendadas. ---------------------------------------------------------------------------
//Act1
const par = x => (x % 2 == 0) ? "par" : "impar";  // Los dos puntos es un operador ternario.

//Act2

function getTabla(iNumeroDeFilas, iNumeroDeColumna) {
    const oTable = document.createElement("table");
    for (let i = 0; i < iNumeroDeFilas; i++) {
        const oTr = document.createElement("tr");
        for (let j = 0; j < iNumeroDeColumna; j++) {
            const oTd = document.createElement("td");
            oTr.appendChild(oTd);
        }
        oTable.appendChild(oTr);
    }
    return oTable;
}

document.body.appendChild(getTabla(2, 3));

// Funciones puras. -------------------------------------------------------------------------------------------
//Act 1

function isCurrentYearLeapYear(year) {
    //const year = new Date().getFullYear();
    if (year % 4 !== 0) return false;
    else if (year % 100 != 0) return true;
    else if (year % 400 != 0) return false;
    else return true;
}
isCurrentYearLeapYear(new Date().getFullYear());