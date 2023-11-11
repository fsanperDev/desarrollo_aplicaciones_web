//------- ACTIVIDAD 1  -----------------------------------
// A)
let i_nota1 = 50;
let i_nota2 = 70;

debugger; // ES UNA PALABRA RESERVADA PARA DEPURAR EL CODIGO.
if (i_nota1 === i_nota2) {
    console.log("Son iguales");
} else {
    console.log("Son distintos");
}

/*
// CONDICIONAL TERNARIO (ES LO MISMO QUE EL CODIGO DE ARRIVA)
(i_nota1 === i_nota2) ? console.log("Son iguales") : console.log("Son distintos"); */

// B)
if (i_nota1 >= 100 && i_nota2 >= 100) {
    //Nota
} else {
    //Nota
}

// C)
if (i_nota1 < 50 || i_nota2 < 50) {
    //Nota
} else {
    //Nota
}

//------- ACTIVIDAD 2  -----------------------------------
let s_nivel_usuario = "B2";

if(s_nivel_usuario == "A2"){
    console.log("Elementary");
} else if (s_nivel_usuario == "B1") {
    console.log("Lower Intermediate");
} else if (s_nivel_usuario == "B2") {
    console.log("Intermediate");
} else if (s_nivel_usuario == "C1") {
    console.log("Upper Intermediate");
} else if (s_nivel_usuario == "C2") {
    console.log("Advanced");
}