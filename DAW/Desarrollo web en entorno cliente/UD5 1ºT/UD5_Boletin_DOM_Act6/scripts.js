/*
Los atributos data permiten añadir atributos personalizados a los elementos de una página. Por
ejemplo podría utilizar atributos data-sexo para añadir información sobre el sexo en una lista de
superhéroes:

    <li id="marvel-1" data-sexo="M">Capitán América</li>
    <li id="marvel-2" data-sexo="F">Capitana Marvel</li>

Desde JavaScript se puede acceder a estos atributos con la propiedad dataset. En el ejemplo
anterior:

    let capitanAmerica = document.getElementById("marvel-1");
    let sexoCapitanAmerica = capitanAmerica.dataset.sexo;

Un uso práctico de estos atributos puede ser marcar botones con una determinada acción para luego
identificarlos desde javascript. Para probar su funcionamiento añade al documento el siguiente
código HTML:

    <button data-accion=”destacar” data-contenido=”único”>
      Destacar los párrafos que contengan la palabra “único”
    </button>

    <button data-accion=”eliminarDestacados”>
      Eliminar párrafos destacados
    </button>

A continuación implementa estas funciones:
a) Al hacer clic sobre cualquier elemento marcado con el atributo accion valor destacar, se
aplique la clase CSS destacado a todos los párrafos que contengan la palabra definida por el
atributo contenido. Utiliza la función destacar implementada en la actividad anterior.

b) Al hacer clic sobre cualquier elemento marcado con el atributo accion valor
eliminarDestacados, se elimine la clase destacado de todos los párrafos que la tengan.
Utiliza la función eliminarDestacados implementada en la actividad anterior.
*/

const botonDestacar = document.querySelector("[data-accion='destacar']");
botonDestacar.addEventListener("click", function() {
    const sPalabra = this.dataset.contenido;
    destacar(sPalabra);
})

function destacar(sPalabra) {
    const oParrafos = document.getElementsByTagName("p");
    for (const parrafo of oParrafos) {
        const sTexto = parrafo.textContent;
        if(sTexto.indexOf(sPalabra) != -1){
            parrafo.classList.add("destacado");
        }
    }
}


