/*
Consulta el apartado 1.3. Acceso a los nodos de los contenidos de la plataforma y realiza las
siguientes tareas:
a) Recupera el div identificado como content.
b) Recupera todos los nodos que tengan asignada la clase callout.
c) Recupera todos los nodos que sean párrafos.
d) Recupera el primer div dentro del elemento identificado como content.
*/

// Poner la o delante de la variante significa 'nodo' como s significa 'string'
// a)
const oDivContent = document.getElementById("content");
// b) 
const oColeccionClaseCallaut = document.getElementsByClassName("callaut");
// c)
const oColeccionParrafos = document.getElementsByTagName("p");
// d)
// Opcion 1
const oPrimerParrafoContent = document.querySelector("div#content > p");
// Opcion 2
const oParrafoContent = oDivContent.getElementsByTagName("p");
const oPrimerParrafoContent = oParrafoContent[0];