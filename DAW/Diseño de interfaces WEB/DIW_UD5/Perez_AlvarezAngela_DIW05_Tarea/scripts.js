let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.font = "900 120px Arial";

/*  Funcion para rebotar el 3 del logo */
let offsetx= 0, offsety= 0, setx = 0, sety = 0;
dibujarLogo(offsetx, offsety, setx, sety);
animarLogo();
/*
offsetx ==> Coordenada que representa el movimiento de derecha a izquierda.
offsety ==> Coordenada que representa el movimiento de arriva a abajo.
setx ==> Mientras el valor sea 0 la figura puede seguir moviendose a la derecha.
setx ==> Mientras el valor sea 1 la figura puede seguir moviendose a la izquierda.
sety ==> Mientras el valor sea 0 la figura puede seguir moviendose hacia abajo.
sety ==> Mientras el valor sea 1 la figura puede seguir moviendose hacia arriva.
*/

function animarLogo() {
  ctx.clearRect(0, 0, 500, 700); //Limpia la figura.
  // Movimiento que debe de seguir la figura. ----------------------------------------------------
  // Comprueba si la figura debe de moverse a la izquierda.
  if (offsetx >= 110) {
    setx = 1;
  }
  // Comprueba si la figura debe de moverse a la derecha.
  if (offsetx <= -100) {
    setx = 0;
  }
  // Comprueba si la figura debe de moverse hacia arriva.
  if (offsety >= 160) {
    sety = 1;
  }
  // Comprueba si la figura debe de moverse hacia abajo.
  if (offsety <= -260) {
    sety = 0;
  }
  /*
    Una vez comprobado hacia donde debe de moverse la figura se aplica el movimiento.
  */
  // Aplicar movimiento a la figura. --------------------------------------------------------------
  if (setx == 0) {
    offsetx++;
  }
  if (sety == 0) {
    offsety++;
  }
  if (setx == 1) {
    offsetx--;
  }
  if (sety == 1) {
    offsety--;
  }
// Llamar infinitamente a la funcion.
 dibujarLogo(offsetx, offsety, setx, sety);
 IDAnimacion = requestAnimationFrame(animarLogo);
}

/* Logo CSS3 */
function dibujarLogo(offsetx, offsety, setx, sety) {
// Texto "CSS3"
ctx.fillStyle = "black";
ctx.fillText("CSS", 121 , 131 );
// Escudo ---------------------------------------------------------------------------------------
ctx.fillStyle = "#0170ba";
ctx.beginPath();
ctx.moveTo(36,165);
ctx.lineTo(462,165);
ctx.lineTo(424,600);
ctx.lineTo(249,649);
ctx.lineTo(75,600);
ctx.closePath(36,165);
ctx.fill();

// Luz del escudo -------------------------------------------------------------------------------
ctx.fillStyle = "#29a9df";
ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(424,200);
ctx.lineTo(390,573);
ctx.lineTo(250,611);
ctx.closePath(250,200);
ctx.fill();

// 3 con sombra ---------------------------------------------------------------------------------
// Parte de arriba
ctx.fillStyle = "#cfcfcf";
ctx.beginPath();
ctx.moveTo(103 + offsetx,251 + offsety);
ctx.lineTo(250 + offsetx,251 + offsety);
ctx.lineTo(250 + offsetx,412 + offsety);
ctx.lineTo(119 + offsetx,412 + offsety);
ctx.lineTo(115 + offsetx,359 + offsety);
ctx.lineTo(244 + offsetx,300 + offsety);
ctx.lineTo(108 + offsetx,300 + offsety);
ctx.closePath(103 ,251 );
ctx.fill();

// Parte de abajo
ctx.fillStyle = "#cfcfcf";
ctx.beginPath();
ctx.moveTo(123 + offsetx,445 + offsety);
ctx.lineTo(176 + offsetx,445 + offsety);
ctx.lineTo(179 + offsetx,489 + offsety);
ctx.lineTo(250 + offsetx,502 + offsety);
ctx.lineTo(250 + offsetx,556 + offsety);
ctx.lineTo(131 + offsetx,527 + offsety);
ctx.closePath(123,445);
ctx.fill();

// 3 sin sombra -----------------------------------------------------------------------------------
ctx.fillStyle = "#ffffff";
ctx.beginPath();
ctx.moveTo(250 + offsetx,251 + offsety);
ctx.lineTo(390 + offsetx,251 + offsety);
ctx.lineTo(386 + offsetx,306 + offsety);
ctx.lineTo(269 + offsetx,359 + offsety);
ctx.lineTo(381 + offsetx,359 + offsety);
ctx.lineTo(368 + offsetx,526 + offsety);
ctx.lineTo(250 + offsetx,556 + offsety);
ctx.lineTo(250 + offsetx,502 + offsety);
ctx.lineTo(313 + offsetx,482 + offsety);
ctx.lineTo(317 + offsetx,412 + offsety);
ctx.lineTo(250 + offsetx,412 + offsety);
ctx.closePath(250,251);
ctx.fill();
}
//-----------------------------------------------------------------------------------------------
