const ZONA_TITULO = $("#zonaTitulo");
const ZONA_TABLERO = $("#zonaTablero");
const ZONA_BOTONES = $("#zonaBotones");

const NUM_CELDAS = 10;

//******* EJECUCION DE FUNCIONES  ******************
cargartitulo();
crearTablero();
eventosDeLosBotones();

//**************************************************

// Crea el titulo.
function cargartitulo(){
  ZONA_TITULO.html("<h1>Fila de números</h1>");
}
// Crea el tablero con numeros aleatorios.
function crearTablero(){
  let $tabla = $("<table>");
  let $fila = $("<tr>");
  $tabla.append($fila);


  for (let i = 0; i < NUM_CELDAS; i++) {
    let $celda = $("<td>");
    let numAleatorio = Math.round(Math.random()*100);
    $celda.attr('value', numAleatorio);
    $celda.append(numAleatorio);
    $fila.append($celda);
  }

  $tabla.attr("id", "tablero");
  ZONA_TABLERO.append($tabla);
}

//******************  EVENTOS  *************************************************************
function eventosDeLosBotones(){
  let $FondoAzul = $("#Mazul");
  let $FondoVerde = $("#Mverde");
  let $Limpiar = $("#limpiar");
  let $Alternar = $("#azulVerde");
  let $SumaAzules = $("#SumarAzules");
  let $SumaVerdes = $("#SumarVerdes");

  $FondoAzul.on("click", fondoAzul);
  $FondoVerde.on("click", fondoVerde);
  $Limpiar.on("click", limpiar);
  $Alternar.on("click", alternarColores);
  $SumaAzules.on("click", sumarLosAzules);
  $SumaVerdes.on("click", sumarLosVerdes);
}

// Reinicia el tablero.
function limpiar(){

  var $celda = $("td");
  $celda.removeClass("fondoAzul");
  $celda.removeClass("fondoVerde");
  $('h3').remove();
  $celda.off("click" , limpiar);
}

// Pinta el fondo de la celda de color azul.
function fondoAzul(){
  let $Azul = $("td");
  $Azul.on("click", cambiarAzul);
}

function cambiarAzul(e){
  let $celda = $(e.target);

  if($celda.attr("class")=="fondoVerde"){
    $celda.removeClass("fondoVerde");
    $celda.addClass("fondoAzul");
  }else{
    $celda.addClass("fondoAzul");
  }
  $celda.off("click" , cambiarAzul);
}
// Pinta el fondo de la celda de color verde.
function fondoVerde(){
  $("button").click(function(){
  $("td").off("click" , "td");
  });
  let $Verde = $("td");
  $Verde.on("click", cambiarVerde);
}

function cambiarVerde(e){
  let $celda = $(e.target);

  if($celda.attr("class")=="fondoAzul"){
    $celda.removeClass("fondoAzul");
    $celda.addClass("fondoVerde");
  }else{
    $celda.addClass("fondoVerde");
  }

  $celda.off("click" , cambiarVerde);
}
//********************  ALTERNAR COLORES  ******************************************
function alternarColores(){
  $("button").click(function(){
  $("td").off("click" , "td");
    });

  let $celda = $("td");
  limpiar();
  $("td:even").addClass("fondoAzul");
  $("td:odd").addClass("fondoVerde");
}
//*************  SUMA DE CASILLAS  ***********************
function sumarLosAzules(){
  var totalDeAzules=0;
  $(".fondoAzul").each(function(){
  	totalDeAzules+=parseInt($(this).html()) || 0;
  });

  ZONA_BOTONES.after("<h3>El total de la suma de las casillas azules es de: "+totalDeAzules+"</h3>");
}

function sumarLosVerdes(){
  var totalDeVerdes=0;
  $(".fondoVerde").each(function(){
  	totalDeVerdes+=parseInt($(this).html()) || 0;
  });

  ZONA_BOTONES.after("<h3>El total de la suma de las casillas verdes es de: "+totalDeVerdes+" </h3>");
}
