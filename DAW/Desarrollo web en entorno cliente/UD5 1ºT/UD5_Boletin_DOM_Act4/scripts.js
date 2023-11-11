/*
Consulta los apartados 1.6. Creación y borrado de nodos, 1.5. Acceso a los nodos de tipo texto
(enlace Alternativas al uso de innerHTML) y 1.7. Propiedades y métodos de los objetos nodo.
A continuación realiza las siguientes tareas: */

// a) Crea un nuevo párrafo con el texto Me cuelo en primera posición y añádelo antes del
//    primer hijo del elemento identificado como content.

/*const sNuevoParrafo = document.createElement("p");
const sTextoParrafo = document.createTextNode("Me cuelo en primera posición");
sNuevoParrafo.appendChild(sTextoParrafo);

const oDivContent = document.getElementById("content");
oDivContent.insertBefore(sNuevoParrafo, oDivContent.childNodes[0]);*/

/* PACO */
    const p1 = document.createElement("p");
    //1º Opcion
    p1.innerHTML = `Me cuelo en primera posicion`;
    //2º Opcion
    //  p1.textContent = `Me cuelo en primera posicion`;
    //3º Opcion
    //  const text1 = document.createTextNode(`Me cuelo en primera posicion`);
    const divContent = document.getElementById("content");
    divContent.insertBefore(p1, divContent.firstChild);
    
// b) Crea un nuevo párrafo con el texto Me coloco en última posición y añádelo como
//    último hijo del elemento identificado como content.
const p2 = document.createElement("p");
p2.innerHTML = `Me coloco en la última posicion`;

divContent.appendChild(p2);

// c) Crea la siguiente estructura y añádela a continuación del elemento h1:
//     <p title="Página sencilla" id="descripcion">Esto es un ejemplo de <em>página HTML</em> sencilla.</p>

// d) Elimina la estructura anterior.
divContent.removeChild(p2);

// e) Crea una estructura igual a la del elemento HTML con clase callout y añádela justo después de éste.

