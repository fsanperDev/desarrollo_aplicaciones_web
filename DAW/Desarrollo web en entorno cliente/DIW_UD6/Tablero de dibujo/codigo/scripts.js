const $DIV_PALETA = $("div#paleta"); // Variable que referencia a el contenedos paleta.
const $DIV_LIENZO = $("div#lienzo");
const $NUM_COLORES = 6;
const $NUM_FILAS = 30;
const $NUM_COLUMNAS = 30;

//****** Ejecución  de las funciones.  *********
crearPaleta();
crearLienzo();
crearTitulos();

addEventosPaleta();
// *********************************************

// ----------------------------   CREAR PALETA Y LIENZO    -----------------------------------------------
function crearPaleta(){
  // Se utiliza const porque es una constante, su valor no va a cambiar, si cambiara sería let.
    const $TABLE = $("<table>");
    const $TR1 = $("<tr>");
    const $TR2 = $("<tr>");

    $TABLE.append($TR1);
    $TABLE.append($TR2);

// Manera 1 de hacer las celdas de colores. Forma rápida.
    const ARRAY_COLORES = ["amarillo","verde","negro","rojo","azul","blanco"]
    //Los colores estan definidos en el CSS.
    for (let i = 0; i < $NUM_COLORES; i++) {
      const $td = $("<td>");
      const  NOMBRE_COLOR = ARRAY_COLORES[i];
      $td.addClass(NOMBRE_COLOR);
      $TR1.append($td);
    }

/* Manera 2 para hacer las celdas. Forma lenta.
    $TD11 = $("<td>");
    $TD12 = $("<td>");
    $TD13 = $("<td>");
    $TD14 = $("<td>");
    $TD15 = $("<td>");
    $TD16 = $("<td>");

    $TR1.append($TD11);
    $TR1.append($TD12);
    $TR1.append($TD13);
    $TR1.append($TD14);
    $TR1.append($TD15);
    $TR1.append($TD16);
*/
  const $TD21 = $("<td>");
  $TD21.attr("colspan", "6");
  $TD21.html("Pincel desactivado.");
  $TR2.append($TD21);

  $DIV_PALETA.append($TABLE); // Hacemos a TABLE hijo de paleta.
}

function crearLienzo(){
    const $TABLE = $("<table>");
    for (let i = 0; i < $NUM_FILAS; i++) {
      const $TR = $("<tr>");
      for (let j = 0; j < $NUM_COLUMNAS; j++) {
        const $TD = $("<td>");
        $TR.append($TD);
      }
      $TABLE.append($TR);
    }
  $DIV_LIENZO.append($TABLE);
}

function crearTitulos(){
  const TXT1 = $("<h2>"); // No es jquery
  TXT1.html("Colores para pintar.");
  // Constante para seleccionar todas las table dentro de id=paleta
  const TABLA_PALETA = $("div#paleta table").eq(0);
  TXT1.insertBefore(TABLA_PALETA);// Aplica el contenido de TXT1 antes de la primera table.

  const TXT2 = $("<h2>");
  TXT2.html("Lienzo de dibujo.");
  const TABLA_LIENZO = $("div#lienzo table").eq(0);
  TXT2.insertBefore(TABLA_LIENZO);
}

//-----------------------------   COMPORTAMIENTO Y EVENTOS   ---------------------------------------------

function addEventosPaleta(){
  const $TDS_PALETA = $("div#paleta table tr:first-child td");
  $TDS_PALETA.on("click", function(event){
      // En caso de tener una celda ya seleccionada le quitamos la clase.
      let $celdaAnterior = $("td.colorSeleccionado");
      $celdaAnterior.removeClass("colorSeleccionado");
      // Agregamos la clase a la nueva celda.
      let celda = event.target;
      $(celda).addClass("colorSeleccionado");
  })
}
