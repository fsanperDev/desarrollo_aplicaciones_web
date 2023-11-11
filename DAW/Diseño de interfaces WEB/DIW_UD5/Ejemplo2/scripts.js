let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.font = "bold 60px sans-serif"; // Para texto

// Linea
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(0,0);
ctx.lineTo(128,128);
ctx.stroke();

// Triangulo
ctx.beginPath();
ctx.fillStyle = "#e44d26";
ctx.moveTo(128,85);
ctx.lineTo(170,170);
ctx.lineTo(85,170);
ctx.lineTo(128,85);
ctx.fill(); // Color
ctx.stroke();

// Cuadrado o rectangulo "sin relleno"
ctx.beginPath();
//ctx.strokeRect();
ctx.strokeStyle = "#FF0000";
ctx.rect(20, 200, 150, 100);
ctx.stroke();
// Cuadrado o rectangulo "con relleno"
ctx.beginPath();
ctx.fillStyle = "#14ff00";
ctx.fillRect(60, 220, 75, 50);

// Rectangulo con degradado
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(20, 300, 150, 100);
