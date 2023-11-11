document.body.addEventListener("keydown", cambiarVelocidad);

function cambiarVelocidad(ev) {
    ev.preventDefault();//Para evitar el comportamiento por defecto. (scroll)
    const span = document.getElementsByTagName("span")[0];
    const iNumeroSpan = parseInt(span.textContent);
    if (ev.key == "ArrowUp" && iNumeroSpan < 120) {        
        span.textContent = iNumeroSpan + 1;
    } else if (ev.key == "ArrowDown" && iNumeroSpan > 0) {       
        span.textContent = iNumeroSpan - 1;
    } else {
        console.log(`Se ha pulsado la tecla ${ev.key}`);
    }
}