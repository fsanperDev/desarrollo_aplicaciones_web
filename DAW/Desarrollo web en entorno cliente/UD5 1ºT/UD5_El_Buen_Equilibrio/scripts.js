const NUM_COLUMNAS_TABLERO = 30;
const NUM_FILAS_TABLERO = 30;
const divTablero = document.getElementById("zonaTablero");

crearTablero();
cuadradosAleatorios();

function crearTablero() {
    const oTabla = document.createElement("table");
    divTablero.appendChild(oTabla);
    for (let i = 0; i < NUM_FILAS_TABLERO; i++) {
        const tr = document.createElement("tr");
        oTabla.appendChild(tr);
        for (let j = 0; j < NUM_COLUMNAS_TABLERO; j++) {
            const td = document.createElement("td");
            if (i > 16) {
                td.setAttribute("class", "blanco");
                td.setAttribute("id", "td" + i + j);
            } else {
                td.setAttribute("class", "negro");
                td.setAttribute("id", "td" + i + j);
            }
            oTabla.appendChild(td);
        }
    }
}


function cuadradosAleatorios() {
    //Zona negra
    let f = [Math.floor(Math.random() * 12)];
    let c = [Math.floor(Math.random() * 25)];
    let tdSeleccionado = document.getElementById("td" + f + c);
    tdSeleccionado.classList.replace("negro", "blanco");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tdSeleccionado = document.getElementById("td" + f + c);
            tdSeleccionado.classList.replace("negro", "blanco");
            f++;
        }
        c++;
        f -= 4;
    }
    //Zona blanca
    let f2 = [Math.floor(Math.random() * 12)];
    let c2 = [Math.floor(Math.random() * 25)];
    f2 =+ 16;
    c += 29;
    let tdSeleccionado2 = document.getElementById("td" + f2 + c2);
    tdSeleccionado2.classList.replace("blanco", "negro");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let tdSeleccionado2 = document.getElementById("td" + f2 + c2);
            tdSeleccionado2.classList.replace("blanco", "negro");
            f2++;
        }
        c2++;
        f2 -= 4;
    }
}
