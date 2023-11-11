const divPaleta = document.getElementById("paleta");
const divLienzo = document.getElementById("lienzo");
const NUM_COLUMNAS_LIENZO = 30;
const NUM_FILAS_LIENZO = 30;

crearPaleta();
crearLienzo();
crearTitulos();

addEventosPaleta();
addEventosLienzo();

function addEventosPaleta() {
    const tdsColores = document.querySelectorAll("#paleta td[class]");
    // td[class] -> Es para indicar todas la etiquetas que tenga la clase dentro del corchete.

    for (const td of tdsColores) {
        td.addEventListener("click", function (ev) {
            /**
            * Buscar la celda que tiene la clase "colorSeleccionado" para quitarsela.
            */
            const tdSeleccionada = document.getElementsByClassName("colorSeleccionado")[0];
            if (tdSeleccionada) {
                tdSeleccionada.classList.remove("colorSeleccionado");
            }
            //Primea forma.
            //Elemento que lanza "click": ev.target
            ev.target.classList.add("colorSeleccionado");
            //Segunda forma.
            //this.classList.add("colorSeleccionado");
        });
    }
    /**
     * Cuando una funcion no tiene nombre (porque se llama inmediatamente), es una funcion anónima.
     * target -> Devuelve el elemento que lanza el evento.[Propiedad de event]
     */

}

function addEventosLienzo() {
    const tdsLienzo = document.querySelectorAll("#lienzo td");

    for (const td of tdsLienzo) {
        td.addEventListener("mouseover", function (ev) {
            const tdColorSeleccionado = document.getElementsByClassName("colorSeleccionado")[0];
            const claseCSSColor = tdColorSeleccionado.classList.item(0);
            ev.target.classList.add(claseCSSColor);            
        });
    }
}






function crearPaleta() {
    // Crear Paleta 
    const Tabla = document.createElement("table");
    divPaleta.appendChild(Tabla);
    //Filas
    const fila1 = document.createElement("tr");
    const fila2 = document.createElement("tr");
    Tabla.appendChild(fila1);
    Tabla.appendChild(fila2);
    //Columnas
    const celda1 = document.createElement("td");
    celda1.classList.add("amarillo");
    const celda2 = document.createElement("td");
    celda2.classList.add("verde");
    const celda3 = document.createElement("td");
    celda3.classList.add("negro");
    const celda4 = document.createElement("td");
    celda4.classList.add("rojo");
    const celda5 = document.createElement("td");
    celda5.classList.add("azul");
    const celda6 = document.createElement("td");
    celda6.classList.add("blanco");
    celda6.classList.add("colorSeleccionado");
    const celda7 = document.createElement("td");
    celda7.setAttribute("colspan", 6);

    fila1.appendChild(celda1);
    fila1.appendChild(celda2);
    fila1.appendChild(celda3);
    fila1.appendChild(celda4);
    fila1.appendChild(celda5);
    fila1.appendChild(celda6);
    fila2.appendChild(celda7);
}

// Crear Lienzo
function crearLienzo() {

    const Lienzo = document.createElement("table");
    divLienzo.appendChild(Lienzo);
    for (let i = 0; i < NUM_FILAS_LIENZO; i++) {
        const tr = document.createElement("tr");
        Lienzo.appendChild(tr);
        for (let j = 0; j < NUM_COLUMNAS_LIENZO; j++) {
            const td = document.createElement("td");
            Lienzo.appendChild(td);
        }
    }
}

// Crear titulos
function crearTitulos() {
    const sTitulo1 = document.createElement("h2");
    sTitulo1.textContent = "Colores para pintar";
    divPaleta.insertBefore(sTitulo1, divPaleta.childNodes[0]);

    const sTitulo2 = document.createElement("h2");
    sTitulo2.textContent = "Lienzo de dibujo";
    divLienzo.insertBefore(sTitulo2, divLienzo.childNodes[0]);
}

