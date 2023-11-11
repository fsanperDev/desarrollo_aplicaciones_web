// FUNCIONES javascript
// const ZONA_TITULO = document.getElementById("zonaTitulo");
// const ZONA_TIEMPO = document.getElementById("zonaTiempo");
// const ZONA_TABLERO = document.getElementById("zonaTablero");
// const ZONA_MENSAJES = document.getElementById("zonaMensajes");

// FUNCIONES jquery
const ZONA_TITULO = $("#zonaTitulo");
const ZONA_TIEMPO = $("#zonaTiempo");
const ZONA_TABLERO = $("#zonaTablero");
const ZONA_MENSAJES = $("#zonaMensajes");


const NUM_CELDAS = 15;
const NUM_ROCAS = 2;

let segundosRestantes = 15;

/******************************/
/*** Secuencia de ejecución ***/
/******************************/
cargarMensajes();
generarTablero();
cargarImagenes();
cargarEventos();
let idIntervalo = setInterval(actualizarSegundosRestantes, 1000);


/*****************/
/*** Funciones ***/
/*****************/

/*  1. Añade el título "Ayuda al topo a salir del túnel" en la ZONA_TITULO y los segundos restantes iniciales en la ZONA_TIEMPO.
  [0,5 puntos]*/
function cargarMensajes() {
  ZONA_TITULO.html("<h1>Ayuda al topo a salir del túnel</h1>");
  ZONA_TIEMPO.html("Te quedan "+segundosRestantes+" segundos.");
}

/*	2. Genera un túnel (tabla con una fila) de NUM_CELDAS celdas en la ZONA_TABLERO.
		La tabla debe tener el identificador "tablero".
		[1,5 puntos]	*/
function generarTablero() {
  // Las variables que se declaran son locales.
  let $tabla = $("<table>");  //Crea el objeto tabla.
  let $fila = $("<tr>");      // Crea el objeto tr.
  $tabla.append($fila);       // Hace que el objeto fila sea hijo de tabla.

  for (var i = 0; i < NUM_CELDAS; i++) {
    let $celda = $("<td>");
    $fila.append($celda);
  }
  $tabla.attr("id", "tablero");
  ZONA_TABLERO.append($tabla);  // Lo agregamos al elemento ZONA_TABLERO.
}

/*	3. Añade el topo en la primera celda, la salida en la última y NUM_ROCAS rocas en las celdas intermedias de forma aleatoria. Las imágenes se colocan asignando la clase CSS "topo", "salida" o "roca" a la celda que corresponda.
	[1,5 puntos]	*/
function cargarImagenes() {
  let $celdas = $("td"); //Volvemos a llamar las variables td creadas anteriormente.
  let $primeraCelda = $celdas.first(); //Seleccionamos la primera celda.
  let $ultimaCelda = $celdas.last(); //Seleccionamos la ultima celda.

  $primeraCelda.addClass("topo"); // Agregamos la clase .topo del CSS a la variable para que muestre la imagen.
  $ultimaCelda.addClass("salida");

  for (var i = 0; i < NUM_ROCAS; i++) {
    let indiceAleatorio = getRandomInt(1, NUM_CELDAS); // Llamamos a la funcion que genera el numero aleatorio.
    let $celdaAleatoria = $celdas.eq(indiceAleatorio);
    // Si la celda ya contiene la clase roca, se le resta una posicion, sino, se pone la clase.
    if ($celdaAleatoria.attr("class") == "roca"){
      i--;
    }else{
      $celdaAleatoria.addClass("roca");
    }
  }
}

// Funcion para generar numeros aleatorios.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/*	4. Añade un manejador para el evento clic a la celda del topo y para el evento doble clic a cada celda de una roca.
 		Al hacer clic en la celda del topo se llama a la función avanzar y al hacer doble clic en la celda de una roca se llama a la función picarRoca.
		[1,5 punto]	*/
function cargarEventos() {
  let $celdaTopo = $("td.topo");
  let $celdaRoca = $("td.roca");

  $celdaTopo.on("click", avanzar);  // variable.on("evento", funcio que le aplicamos)
  $celdaRoca.on("dblclick", picarRoca);
}

/*	5. Función que se llama cuando el usuario hace clic en la celda del topo.

		Ten en cuenta que:
		* Cuando se hace clic en la celda del topo éste avanzará a la siguiente celda. Se debe eliminar el manejador del evento clic de la celda actual y añadir a la siguiente.
		* Si la celda siguiente es una roca el topo no avanzará y se informará al usuario para que pique la roca a través de ZONA_MENSAJES.
		* Si la celda siguiente es la salida el topo desaparecerá del tablero, se informará al usuario de que ha ganado la partida a través de ZONA_MENSAJES, se parará el contador de tiempo y se eliminará el manejador del evento clic de la celda del topo.
    [2 puntos] */
function avanzar(e) {
  let $celdaTopo = $(e.target); // La celda que provoca el evento.
  let $siguienteCelda = $celdaTopo.next(); // Seleccionamos la siguiente celda a la del topo.

// Comprobamos si la siguiente celda es el final.
  if($siguienteCelda.attr("class") == "salida"){
    $celdaTopo.removeClass("topo");
    $celdaTopo.off("click", avanzar);
    ZONA_MENSAJES.html("Has ganado la partida.");
    clearInterval(idIntervalo);
  // Comprobamos si la siguiente cleda es contiene la clase roca.
  }else if($siguienteCelda.attr("class") == "roca"){
    ZONA_MENSAJES.html("Pica la roca para avanzar.");
  }else{
    $celdaTopo.removeClass("topo"); // Se elimina al topo de la celda actual.
    $celdaTopo.off("click", avanzar); // Eliminamos el evento de la celda actual.

    $siguienteCelda.addClass("topo"); // Se añade la clase topo a la siguiente celda.
    $siguienteCelda.on("click", avanzar); //Volvemos a añadir el event ahora en la nueva celda.
  }
}

/*	6. Función que se llama cuando el usuario hace doble clic en la celda de una roca.

 		Ten en cuenta que:
    * Cuando se hace doble clic en la celda de la roca y el topo está en la celda anterior, la roca desaparecerá.
    * Si el topo no está en la celda anterior se informará al usuario para que avance con el topo hasta la roca a través de ZONA_MENSAJES.
    [2 puntos] */

function picarRoca(e) {
  let $celdaRoca = $(e.target); // celda que provoca el evento.
  let $celdaAnterior = $celdaRoca.prev();
  if ($celdaAnterior.attr("class") != "topo"){
    ZONA_MENSAJES.html("Avanza con el topo hasta la roca.");
  }else{
    $celdaRoca.removeClass("roca");
    $celdaRoca.off("dblclick", avanzar);
  }
}

/*  7. Función que se llama a intervalos de 1 segundo para actualizar el contador de tiempo restante.

    Actualiza el contador de tiempo restante a través de ZONA_TIEMPO. Si llega a 0 se informará al usuario de que ha perdido la partida a través de ZONA_MENSAJES, se parará el contador de tiempo y se eliminarán todos los manejadores de eventos.
    [1 punto] */
function actualizarSegundosRestantes() {
  segundosRestantes--;
  ZONA_TIEMPO.html("Te quedan "+segundosRestantes+" segundos.");

  if (segundosRestantes == 0) {
    ZONA_MENSAJES.html("Has perdido la partida.");
    clearInterval(idIntervalo);
    $("td.topo").off("click", avanzar);
    $("tf.roca").off("dblclick", picarRoca);
  }
}
