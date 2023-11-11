crearPaleta();

/*crearPaleta: Crea una tabla HTML para representar la paleta de colores. A cada celda
se le aplicará una clase CSS que definirá su color. Las clases están incluidas en la hoja de
estilos.*/

function crearPaleta() {

    const table = document.createElement("table");
    //Filas
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");

    //columnas

    const td21 = document.createElement("td");

    const td11 = document.createElement("td");
    const td12 = document.createElement("td");
    const td13 = document.createElement("td");
    const td14 = document.createElement("td");
    const td15 = document.createElement("td");
    const td16 = document.createElement("td");

    td21.setAttribute("colspan", 6);
    td11.classList.add("amarillo");
    td12.classList.add("verde");
    td13.classList.add("negro");
    td14.classList.add("rojo");
    td15.classList.add("azul");
    td16.classList.add("blanco", "colorSeleccionado");//añadimos dos clases a la vez

    tr1.appendChild(td11);
    tr1.appendChild(td12);
    tr1.appendChild(td13);
    tr1.appendChild(td14);
    tr1.appendChild(td15);
    tr1.appendChild(td16);

    tr2.appendChild(td21);

    table.appendChild(tr1);
    table.appendChild(tr2);

    oContenedor = document.getElementById("paleta");
    oContenedor.appendChild(table);

}

crearLienzo();
/*crearLienzo: Crea una tabla HTML de 30 x 30 celdas para representar el lienzo sobre el
que pintar. Las dimensiones del lienzo se deben poder variar con facilidad*/

function crearLienzo() {

    const table = document.createElement("table");

    for (let i = 0; i < 30; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < 30; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);

        }

    }
    document.getElementById("lienzo").appendChild(table);
}

crearTitulos();

/*crearTitulos: crea los títulos h2 Colores para pintar y Lienzo de dibujo.*/

function crearTitulos() {

    const h2Paleta = document.createElement("h2");
    h2Paleta.textContent = "colores para pintar";

    const h2Lienzo = document.createElement("h2");
    h2Lienzo.textContent = "Lienzo de dibujo";

/*El título Colores para pintar se ubicarán en el div paleta.*/
    const divPaleta = document.getElementById("paleta");
    divPaleta.insertBefore(h2Paleta, divPaleta.firstChild);

    //El título Lienzo de dibujo  se ubicarán en el div lienzo
    const divLienzo = document.getElementById("lienzo");
    divLienzo.insertBefore(h2Lienzo, divLienzo.firstChild);

}
addEventosPaleta();

function addEventosPaleta() {

    const tdsColores = document.querySelectorAll("#paleta td[class]");
    //todos los td que tengan atributo class// class='amarillo' serian la clase amarillo
    
    const divLienzo = document.getElementById("lienzo");

    const parrafoAQuitar=document.querySelector("#lienzo p");    
    if (parrafoAQuitar) {
        divLienzo.removeChild(parrafoAQuitar);
    }      
    
    const textoPincel=document.createTextNode("Pincel activado")
    const pincel=document.createElement("p");
    pincel.appendChild(textoPincel);
    divLienzo.appendChild(pincel); 


    for (const td of tdsColores) {
        
        td.addEventListener("click", function (ev) {

            
            const tdSeleccionada = document.getElementsByClassName("colorSeleccionado")[0];

            if (tdSeleccionada) {//esto evita usar____ si es niullo has esto o no
                tdSeleccionada.classList.remove("colorSeleccionado");//se quita la clase para coger otra celda
            }
            //elemento que lanza el click
            /*Cuando el usuario haga clic en alguno de los colores de la paleta se le asignará la clase
            seleccionado a la celda con dicho color.*/
            ev.target.classList.add("colorSeleccionado");
            //o  this.classList.add("colorSeleccionado"); mejor el event

        })
    }
    
}
addEventosLienzo();

/*Cuando el usuario hace clic en una celda del lienzo el pincel se activa quedando pintada la
celda del color seleccionado. Desde ese momento todas las celdas por las que el usuario pase
el ratón por encima también se pintarán de dicho color.*/

function addEventosLienzo() {


    const tdsLienzo = document.querySelectorAll("#lienzo td"); 
    


    for (const td of tdsLienzo) {

        td.addEventListener("mouseover", coloreando );
            
        /*Cuando el usuario haga clic en cualquier celda, el pincel se desactivará y dejará de pintar. */ 
        td.addEventListener("click",quitarEventos); 
                                            
    }   
    
}   

function coloreando(ev) {
           
    // const tdsLienzo = document.querySelectorAll("#lienzo td");
            
    const tdColorSeleccionado = document.getElementsByClassName("colorSeleccionado")[0];

    const claseCSSColor = tdColorSeleccionado.classList.item(0);//primera cadena. devolverá la primera clase
    ev.target.classList.add(claseCSSColor); /*Con el item tenemos la clase(color) y se lo añadimos
                                                        a todas las celdas por las que vamos apuntando*/

}
  
function quitarEventos(ev) {

    const tdColorSeleccionado = document.getElementsByClassName("colorSeleccionado")[0];

    const claseCSSColor = tdColorSeleccionado.classList.item(0);//primera cadena. devolverá la primera clase
    ev.target.classList.remove(claseCSSColor);
    
    const tdsLienzo = document.querySelectorAll("#lienzo td");
            
    for (const td of tdsLienzo) {
        ev.target.classList.remove(claseCSSColor);
        
        //Con esto podremos seguir seleccionando celdas y pintanado
        td.removeEventListener("mouseover", coloreando );
        

    } 
    const parrafoAQuitar=document.querySelector("#lienzo p");    
    const divLienzo = document.getElementById("lienzo");
    divLienzo.removeChild(parrafoAQuitar);
    const textoPincel=document.createTextNode("Pincel desactivado");
    const pincel=document.createElement("p");
    pincel.appendChild(textoPincel);
    divLienzo.appendChild(pincel); 

    const tdsColores = document.querySelectorAll("#paleta td[class]");

    for (const td of tdsColores) {
    td.addEventListener("click",function() {

        addEventosPaleta();
        addEventosLienzo();
    }) 
}

}
        
    



