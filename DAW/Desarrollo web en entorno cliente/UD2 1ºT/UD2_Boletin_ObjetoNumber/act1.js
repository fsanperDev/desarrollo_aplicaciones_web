let x = 12;
let y = 3.146497;
let z = "No";

//1. Comprueba si es un número.
console.log("No es un numero x: "+ isNaN(x));
console.log("No es un numero y: "+ isNaN(y));
console.log("No es un numero Z: "+ isNaN(z));

//2. Comprueba si el número es un entero.
console.log("Es un numero entero x: "+ Number.isInteger(x));
console.log("Es un numero entero y: "+ Number.isInteger(y));
//3. Convierte el número a una cadena.
let cadena = y.toString();
console.log("Numero convertido a cadena: "+cadena);

//4. Formatea el número para que solo tenga un número decimal.
let soloUnDecimal = y.toFixed(1);
console.log("Numero solo muestra un decimal: "+soloUnDecimal);