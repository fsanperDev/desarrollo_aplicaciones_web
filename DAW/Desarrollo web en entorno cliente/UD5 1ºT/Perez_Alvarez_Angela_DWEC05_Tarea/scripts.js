// VARIABLES GLOBALES
const Body = document.getElementsByTagName("body")[0];
const NUM_CELDAS = 3;
const NUM_FILAS = 3;
let iNumeroDeCelda = 1;
let iContadorDeCeldas;
const sABECEDARIO = 'abcdefghijklmnñopqrstuvwxyz';
Body.setAttribute("align", "center");

//Crear un div donde colocar el tablero.
const divTableroDeLetras = document.createElement("div");
divTableroDeLetras.setAttribute("id", "TabLetras");
Body.appendChild(divTableroDeLetras);

// Llamar a la funcion para crear el primer tablero.
crearTableroDeLetras();

//--------------------- FUNCIONES Y EVENTOS  ------------------------------------------------------------------
/**
 * Esta funcion crea el tablero de letras y los botones.
 */
function crearTableroDeLetras() {
  /**
   * Título (h1)
   */
  const sTITULO = document.createElement("h1");
  const sTEXTOTITULO = document.createTextNode("Tablero de letras");
  sTITULO.appendChild(sTEXTOTITULO);
  divTableroDeLetras.appendChild(sTITULO);

  /**
   * Tablero (table)
   */
  const Tabla = document.createElement("table");

  for (let i = 0; i < NUM_FILAS; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < NUM_CELDAS; j++) {
      let celda = document.createElement("td");
      let textoCelda = document.createTextNode(sABECEDARIO.charAt(Math.floor(Math.random() * sABECEDARIO.length)));
      let sNombreAtributoCelda = "td" + iNumeroDeCelda;// Atributo celda
      iNumeroDeCelda++;
      celda.setAttribute("id", sNombreAtributoCelda);// Atributo celda
      celda.classList.add("FondoBlanco");//Añadir una clase a la celda
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }
    Tabla.appendChild(fila);
  }
  iContadorDeCeldas = iNumeroDeCelda;
  divTableroDeLetras.appendChild(Tabla);

  Tabla.setAttribute("border", 2);
  Tabla.setAttribute("cellpadding", 20);
  Tabla.setAttribute("align", "center");
  Tabla.setAttribute("id", "tabla");
  Tabla.setAttribute("class", "Tabla");


  /**
   * Botones.
   */
  const botonNuevasLetras = document.createElement("input");
  botonNuevasLetras.setAttribute("type", "button");
  botonNuevasLetras.setAttribute("id", "botonNuevaLetra");
  botonNuevasLetras.setAttribute("value", "Nuevas Letras");
  botonNuevasLetras.setAttribute("class", "Boton");
  divTableroDeLetras.appendChild(botonNuevasLetras);

  const botonAutomaticamente = document.createElement("input");
  botonAutomaticamente.setAttribute("type", "button");
  botonAutomaticamente.setAttribute("id", "botonAutomaticamente");
  botonAutomaticamente.setAttribute("value", "Elegir automáticamente");
  botonAutomaticamente.setAttribute("class", "Boton");
  divTableroDeLetras.appendChild(botonAutomaticamente);

  const botonManualmente = document.createElement("input");
  botonManualmente.setAttribute("type", "button");
  botonManualmente.setAttribute("id", "botonManualmente");
  botonManualmente.setAttribute("value", "Elegir manualmente");
  botonManualmente.setAttribute("class", "Boton");
  divTableroDeLetras.appendChild(botonManualmente);

  const botonMostrarElegibles = document.createElement("input");
  botonMostrarElegibles.setAttribute("type", "button");
  botonMostrarElegibles.setAttribute("id", "botonMostrarElegibles");
  botonMostrarElegibles.setAttribute("value", "Mostrar elegibles");
  botonMostrarElegibles.setAttribute("class", "Boton");
  divTableroDeLetras.appendChild(botonMostrarElegibles);
}

//**************   FUNCIONES EVENTO DE LOS BOTONES    ***************************************** */  
// Boton Nuevas letras ----------------------------------------------------------
const boton1 = document.getElementById("botonNuevaLetra");
boton1.addEventListener("click", nuevoTableroDeLetras);

function nuevoTableroDeLetras() {
  for (let i = 1; i < iContadorDeCeldas; i++) {
    let td = document.getElementById(`td${i}`);
    td.innerHTML = sABECEDARIO.charAt(Math.floor(Math.random() * sABECEDARIO.length));
  }
}

// Boton Elegir automáticamente  -----------------------------------------------------------
const boton2 = document.getElementById("botonAutomaticamente");
boton2.addEventListener("click", elegirAutomaticamenteUnaCelda);

function elegirAutomaticamenteUnaCelda() {
  /**
   * Primero busca entre todos los 'td' y cambia aquel que tenga la clase 'FondoRojo' por 'FondoBlanco' para 
   * eliminar la seleccion anterior, luego escoge un 'td' de manera aleatoria y reemplaza su clase por la nueva.
   */
  const tds = document.querySelectorAll("td");
  for (const td of tds) {
    if (td.classList == "FondoRojo") {
      td.classList.remove("FondoRojo");
      td.classList.add("FondoBlanco");
    }
  }

  let n = Math.floor((Math.random() * 10) + 1);//Generamos un numero aleatorio entre 1 y 10.
  if (n == 10) { n--; }// En caso de que el número se 10 le restamos uno.
  let tdSeleccionado = document.getElementById(`td${n}`);
  tdSeleccionado.classList.replace("FondoBlanco", "FondoRojo");
}

// Boton Elegir manualmente  -----------------------------------------------------------
const boton3 = document.getElementById("botonManualmente");
boton3.addEventListener("click", elegirManualamenteUnaCelda);

/**
 * Funcion para elegir la celda manualmente. Priemro seleccionamos todas las celdas y le agregamos el evento
 * 'click', luego comprueba si existe ya una casilla con el fondo rojo, en caso de no ser así se lo agrega 
 * a la casilla selecionada, si ya existe una casilla con el fondo rojo comprueba su valor y si es el mismo
 * que el de la celda seleccionada esta última no cambia su clase. 
 */
function elegirManualamenteUnaCelda() {
  const tds = document.querySelectorAll("td");
  for (const td of tds) {
    td.addEventListener("click", function (ev) {
      const tdFondoRojo = document.getElementsByClassName("FondoRojo")[0];//Variable que contiene la celda con fondo rojo.
      if (tdFondoRojo) {
        //Existe una celda con el fondo rojo, entra en el IF.
        let celdaAnterior = tdFondoRojo.textContent;//Variable que contiene le valor de la celda con el fondo rojo.
        let celdaNueva = this.textContent;//Variable que contiene el valor de la celda seleccinada.
        if (celdaAnterior != celdaNueva) {
          tdFondoRojo.classList.replace("FondoRojo", "FondoBlanco");
          ev.target.classList.replace("FondoBlanco", "FondoRojo");
        }
      } else {
        //No existe ninguna celda con el fondo rojo, se le agrega a la seleccionada.
        ev.target.classList.replace("FondoBlanco", "FondoRojo");
      }
    });
  }
}

// Boton Mostrar elegibles  ------------------------------------------------------------------------------
const boton4 = document.getElementById("botonMostrarElegibles");
boton4.addEventListener("click", mostrarLetrasElegibles);

/**
 * Funcion que sirve para mostrar las letras elegibles del tablero.
 */
function mostrarLetrasElegibles() {
  //Se comprueba si existe un '<p>' con el ID 'p1', en caso de ser así lo elimina.
  let oParrafo = document.getElementById("p1");
  if(oParrafo){
    oParrafo.remove();
  }

  let sLetrasNoElegibles = "";//Variable donde se guarda las letras no elegibles (y repetidas).
  let sLetrasElegibles = "";//Variable donde se guarda las letras elegibles.
  let oParrafoTextoLetrasElegibles = document.createElement("p");
  oParrafoTextoLetrasElegibles.setAttribute("id", "p1");//Agregamos el identificador.

  //Seleccionamos la celda con el fondo rojo y la agregamos a la variable 'sLetrasNoElegibles' para que no se muestre.
  const tdConFondoRojo = document.getElementsByClassName("FondoRojo")[0];
  if (tdConFondoRojo) {
    sLetrasNoElegibles += tdConFondoRojo.textContent;
  }
  //Recorremos las celdas agregando las letras que sean elegibles.
  for (let i = 1; i < iContadorDeCeldas; i++) {
    const celda = document.getElementById(`td${i}`).textContent;
    if (sLetrasNoElegibles.includes(celda) == false) {
      sLetrasElegibles += celda + ", ";
      sLetrasNoElegibles += celda;//Guardamos las letras para que no se puedan repetir.
    }
  }
  oParrafoTextoLetrasElegibles.innerHTML = `Las letras elegibles son : <strong> ${sLetrasElegibles} </strong>`;
  Body.appendChild(oParrafoTextoLetrasElegibles);
}

