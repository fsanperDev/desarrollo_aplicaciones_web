
document.body.addEventListener("mousemove", moverCartel);

function moverCartel(event) {
    const divCartel = document.getElementById("cartel");
    divCartel.style.left = `${event.clientX}px`;
    divCartel.style.top = `${event.clientY}px`;

    //console.log("Se mueve");
    //var x = event.clientX; //left
    //var y = event.clientY; //top
}