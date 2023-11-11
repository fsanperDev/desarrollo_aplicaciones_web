// Esta primera forma es sin eliminar los elementos.
/*const botonesArriva = document.getElementsByClassName("arriba");

for (const botonArriva of botonesArriva) {
    botonArriva.addEventListener("click", function (ev) {
        const elementoDiv = ev.target.parentElement;
        const listaElementosDiv = elementoDiv.parentElement;

        listaElementosDiv.insertBefore(elementoDiv, elementoDiv.previousElementSibling);
    });
}

const botonesAbajo = document.getElementsByClassName("abajo");

for (const botonAbajo of botonesAbajo) {
    botonAbajo.addEventListener("click", function (ev) {
        const elementoDiv = ev.target.parentElement;
        const listaElementosDiv = elementoDiv.parentElement;

        listaElementosDiv.insertBefore(elementoDiv, elementoDiv.nextElementSibling.nextElementSibling);
    });
}*/

//Esta segunda forma es eliminadolo (desvincularlo de la estructura) e insertandolo.
const botonesArriva = document.getElementsByClassName("arriba");
for (const botonArriva of botonesArriva) {
    botonArriva.addEventListener("click", function (ev) {
        const elementoDiv = ev.target.parentElement;
        const listaElementosDiv = elementoDiv.parentElement;
        const elementoDivAnterior = elementoDiv.previousElementSibling;

        if (elementoDivAnterior) {
            listaElementosDiv.removeChild(elementoDiv);
            listaElementosDiv.insertBefore(elementoDiv, elementoDivAnterior);
        } else {
            listaElementosDiv.removeChild(elementoDiv);
            listaElementosDiv.appendChild(elementoDiv);
        }
    });
}

const botonesAbajo = document.getElementsByClassName("abajo");

for (const botonAbajo of botonesAbajo) {
    botonAbajo.addEventListener("click", function (ev) {
        const elementoDiv = ev.target.parentElement;
        const listaElementosDiv = elementoDiv.parentElement;
        const primerElemento = document.getElementById("lista").firstChild;

        if (elementoDiv.nextElementSibling) {
            const elementoSiguienteDelSiguiente = elementoDiv.nextElementSibling.nextElementSibling;
            listaElementosDiv.removeChild(elementoDiv);
            listaElementosDiv.insertBefore(elementoDiv, elementoSiguienteDelSiguiente);
        } else {
            listaElementosDiv.removeChild(elementoDiv);
            listaElementosDiv.insertBefore(elementoDiv, primerElemento);
        }
    });
}





