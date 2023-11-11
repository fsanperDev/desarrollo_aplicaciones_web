/*
El atributo class permite marcar un conjunto de elementos del documento HTML. Mediante la
propiedad classList se pueden consultar las clases asignadas a un determinado elemento y
usando los métodos add y remove se pueden añadir o eliminar clases sobre un elemento.
Implementa las siguientes funciones:
a) function destacar(palabra) { ... }
Esta función aplica la clase CSS destacado a todos los párrafos del documento que contengan la
palabra recibida como parámetro.
b) function eliminarDestacados() { ... }
Esta función elimina la clase CSS destacado de todos los párrafos del documento que la tengan.
Clase CSS destacado:
.destacado {
background: #ff0;
font-style: italic;
} */

destacar("trozo");
eliminarDestacados();
// a)
function destacar(sPalabra) {
    const oParrafos = document.getElementsByTagName("p");
    for (const parrafo of oParrafos) {
        const sTexto = parrafo.textContent;
        if(sTexto.indexOf(sPalabra) != -1){
            parrafo.classList.add("destacado");
        }
    }
}

// b)
function eliminarDestacados() {
    const oParrafos = document.getElementsByTagName("p");
    for (const parrafo of oParrafos) {
        parrafo.classList.remove("destacado");
    }
}


