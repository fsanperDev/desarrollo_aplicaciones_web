const $DIV_TABLERO = $("#div_tablero");

const NUM_CELDAS = 15;

generarTitulo();
generarTablero();
anadirControladoresEventos();

/*  Crea un título h1 con el contenido "Fila interactiva" antes de DIV_TABLERO
    [1 punto] */
function generarTitulo() {
  $DIV_TABLERO.before("<h1>Fila interactiva</h1>");
}

/*  Crea una tabla de una fila y 15 celdas en DIV_TABLERO. Cada celda contendrá
    un número aleatorio de 0 a 10 ambos incluidos. La tabla tendrá el identificador "tablero".
    [2 puntos] */
function generarTablero() {
  let $tablero = $("<table>");
  let $fila = $("<tr>");
  $tablero.append($fila);

  for (let i = 0; i < 15; i++) {
    let $celda = $("<td>");
    let numAleatorio = Math.round(Math.random()*10);
    $celda.append(numAleatorio);
    $fila.append($celda);
  }

  $tablero.attr("id", "tablero");
  $DIV_TABLERO.append($tablero);
}

/*  1. Añade un controlador del evento clic al botón "Aumentar" para ejecutar la
    función "aumentarFuente" cuando ocurra.
    2. Añade un controlador del evento clic al botón "Ocultar" para ejecutar la
    función "ocultarTabla" cuando ocurra.
    3. Añade un controlador del evento mouseover a todas las celdas del tablero
    para ejecutar la función "resaltarCelda" cuando ocurra.
    [1 punto]*/
function anadirControladoresEventos() {
  let $Aumentar = $("#aumentar");
  let $Ocultar = $("#ocultar");
  let $resaltarCelda = $("td");

  $Aumentar.on("click", aumentarFuente);
  $Ocultar.on("click", ocultarTabla);
  $resaltarCelda.on("mouseover", resaltarCelda);
}

/*  Aumenta la fuente de las celdas del tablero (propiedad CSS font-size). El
    tamaño inicial es 16px. Si la fuente es 16px se aumentará a 18px, si es 18 a
    20, si es 20 a 22 y si es 22 aumentará a 24px.
    [2 puntos] */
function aumentarFuente() {
  var tamActual = $("td").css("font-size");
  var tamActualNum = parseFloat(tamActual, 16);
  var nuevaFuente = tamActualNum*1.2;
  $("td").css("font-size", nuevaFuente);
}

/*  Si la tabla está visible, la oculta (función "faceTo")y cambia el texto del
    botón a "Mostrar". Si la tabla está oculta, la muestra (función "faceTo") y
    cambia el texto del botón a "Ocultar"
    [2 puntos] */
function ocultarTabla() {
  let valor = $("#ocultar").val();

  if(valor == "Ocultar"){
    $("#ocultar").attr('value', 'Mostrar');
    $DIV_TABLERO.fadeTo("slow", 0);
  }
  if(valor == "Mostrar"){
    $("#ocultar").attr('value',"Ocultar");
    $DIV_TABLERO.fadeTo("slow", 1);
  }
}

/*  Añade la clase CSS "resalte" a la celda que lanza el evento. Si la celda ya
    tiene la clase "resalte" la devuelve a su apariencia original.
    [2 puntos] */
function resaltarCelda() {
  let $celda = $("<td>");
  $celda.addClass(".resalte");
}
