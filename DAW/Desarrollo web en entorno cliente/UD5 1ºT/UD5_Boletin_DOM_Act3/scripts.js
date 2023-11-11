/*
Consulta el apartado 1.5. Acceso a los nodos de tipo texto de los contenidos de la plataforma y a
continuación recupera el contenido del párrafo dentro del div identificado como callout2
usando:
a) La propiedad innerHTML.
b) La propiedad textContent.
c) La propiedad nodeValue. Ten en cuenta que el primer hijo de un elemento es el texto que
contiene pero comprueba que no haya espacios en blanco entre el elemento div y p. Puede tomar
el primer hijo de div como un espacio en blanco. */

const primerParrafo = document.querySelector("div#callout2 p");
console.log(`innerHTML: ${primerParrafo.innerHTML}`); //Este me muestra el contenido incluyendo el HTML.
console.log(`textContent: ${primerParrafo.textContent}`); // Me muestra el texto sin el HTML.
console.log(`nodeValue: ${primerParrafo.childNodes[0].nodeValue}`);