/*
Consulta el apartado 1.4. Acceso a los nodos de tipo atributo de los contenidos de la plataforma y
realiza las siguientes tareas:*/
// a) Muestra por consola el nombre y el valor de todos los atributos del elemento div identificado como callout2.
const oDivCallout2 = document.getElementById("callout2");
for( var x = 0; x < document.getElementById("callout2").attributes.length; x++ )
{
     var atributo = document.getElementById("callout2").attributes[x];
     console.log(atributo.nodeName+ " -> "+atributo.nodeValue+"<br/>");
}
// b) Añade el atributo title con el valor Información sobre identificadores al tercer párrafo del elemento identificado como content.
const oDivContent = document.getElementById("content");
const oParrafoContent = oDivContent.getElementsByTagName("p");
const oTercerParrafoContent = oParrafoContent[2];
oTercerParrafoContent.setAttribute("title", "Informacion sobre identificadores")
// c) Añade el atributo title con el valor Información sobre clases al cuarto párrafo del elemento identificado como content.

// d) Obtén el nombre de la hoja de estilo del documento HTML.
const oHrefStyle = document.getElementsByTagName("link")[0];
const sHref = oHrefStyle.getAttribute("href");
console.log(sHref);
// e) Obtén la codificación de caracteres del documento HTML.
const oMetaCharset = document.getElementsByTagName("meta")[0];
const sCodificacion = oMetaCharset.getAttribute("charset");
console.log(sCodificacion);
// f) Elimina los atributos title añadidos anteriormente a los párrafos.

