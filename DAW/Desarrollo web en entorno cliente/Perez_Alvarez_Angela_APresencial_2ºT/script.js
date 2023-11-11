/** Dado el siguiente array de objetos realiza las actividades que se proponen 
 * utilizando las funciones nativas del lenguaje y la notación flecha siempre 
 * que sea posible. **/

const aMilitares = [
    { id: 20, name: 'Primer Capitán', experience: 2, mainskill: 'firearms', pilotingScore: 20, shootingScore: 60 },
    { id: 21, name: 'Segundo Capitán', experience: 1, mainskill: 'bodytobody', pilotingScore: 80, shootingScore: 30 },
    { id: 22, name: 'Tercer Capitán', experience: 2, mainskill: 'firearms', pilotingScore: 34, shootingScore: 87 },
    { id: 24, name: 'Primer General', experience: 4, mainskill: 'bodytobody', pilotingScore: 12, shootingScore: 54 },
    { id: 25, name: 'Segundo General', experience: 5, mainskill: 'bodytobody', pilotingScore: 77, shootingScore: 14 },
    { id: 56, name: 'Primer Almirante', experience: 9, mainskill: 'firearms', pilotingScore: 59, shootingScore: 76 },
    { id: 57, name: 'Segundo Almirante', experience: 8, mainskill: 'bodytobody', pilotingScore: 1, shootingScore: 90 },
    { id: 88, name: 'Primer Comandante', experience: 12, mainskill: 'firearms', pilotingScore: 28, shootingScore: 84 },
    { id: 89, name: 'Segundo Comandante', experience: 10, mainskill: 'bodytobody', pilotingScore: 65, shootingScore: 89 }
];



/** Cada objeto tiene las siguientes propiedades:
 *      -id             (identificador)
 *      -name           (nombre)
 *      -experience     (años de experiencia)
 *      -mainskill      (habilidad principal). Puede ser firearms (armas de fuego) o bodytobody (cuerpo a cuerpo).
 *      -pilotingScore  (puntuación de pilotaje)
 *      -shootingScore  (puntuación de tiro)
 */

/** Actividad 1 **
 * Se necesita obtener un array de los militares con más de 5 años de experiencia y
 * que tengan como habilidad principal las armas de fuego. Para el array aMilitares
 * se necesita obtener un array como este:
 * const aMilitaresArmasExperiencia = [
    { id: 56, name: 'Primer Almirante', experience: 9, mainskill: 'firearms' },
    { id: 88, name: 'Primer Comandante', experience: 12, mainskill: 'firearms' },
    ]; */

/** 1a. Implementa una función que reciba un array como el de aMilitares y devuelva
 * un array como el de aMilitaresArmasExperiencia utilizando estructuras de control
 * de flujo. [2 puntos] */
obtenerMilitaresArmasExperiencia();
function obtenerMilitaresArmasExperiencia(aMilitares) {
    const aMilitaresArmasExperiencia = new Array();
    for (let i = 0; i < aMilitares.length; i++) {
        if(aMilitares.experience > 5 && aMilitares.mainskill == "firearms"){
            aMilitaresArmasExperiencia.push(aMilitares[i]);
        }        
    } 

    console.log(aMilitaresArmasExperiencia);
}

/** 1b. Utiliza la función filter para devolver un array como el de 
 * aMilitaresArmasExperiencia a partir del array aMilitares. [2 puntos] */

const aMilitaresArmasExperiencia = aMilitares.filter(oMilitar => oMilitar.experience > 5 && oMilitar.mainskill == "firearms");

console.log(aMilitaresArmasExperiencia);


/** Actividad 2 **
 * Se necesita obtener un array de arrays con los nombres y la puntuación de pilotaje
 * de cada militar. Para el array aMilitares, el array sería:
 * const aMilitaresNombrePuntuacion = [
    ['Primer Capitán', 20],
    ['Segundo Capitán', 80],
    ['Tercer Capitán', 34],
    ['Primer General', 12],
    ['Segundo General', 77],
    ['Primer Almirante', 59],
    ['Segundo Almirante', 1],
    ['Primer Comandante', 28],
    ['Segundo Comandante', 65]
]; */

/** Utiliza la función map para devolver un array como el de aMilitaresNombrePuntuacion 
 * a partir del array aMilitares. [2 puntos] */

    //Primer intento
    /*const aMilitaresNombrePuntuacion = aMilitares.map(nombreYpuntuacion);

    function nombreYpuntuacion(item) {
        let NP = [item.name, item.pilotingScore].join(", ");
        return NP;
    }*/

    //Segundo intento
    const aMilitaresNombrePuntuacion = [];

    for (let i = 0; i < aMilitares.length; i++) {
        let aSoldado = new Array();        
        aSoldado[i] = `${aMilitares[i].name}, ${aMilitares[i].pilotingScore}`;

        aMilitaresNombrePuntuacion[i] = aSoldado;
    }


    console.log(aMilitaresNombrePuntuacion);

/** Actividad 3 **
 * Se necesita conocer la puntuación total (pilotaje y tiro) de todos los militares
 * con más de 8 años de experiencia. Para el array aMilitares, los militares con más
 * de 8 años de experiencia son 
 *  { id: 56, name: 'Primer Almirante', experience: 9, mainskill: 'firearms', pilotingScore: 59, shootingScore: 76 },
    { id: 88, name: 'Primer Comandante', experience: 12, mainskill: 'firearms', pilotingScore: 28, shootingScore: 84 },
    { id: 89, name: 'Segundo Comandante', experience: 10, mainskill: 'bodytobody', pilotingScore: 65, shootingScore: 89 }
 * por lo que se obtendría una puntuación total de 
 * const iPuntuacionExperiencia8 = 401.
 * 401 es el resultado de (59 + 76) + (28 + 84) + (65 + 89) */

/** Utiliza la función filter y reduce para devolver un entero como iPuntuacionExperiencia8
 * a partir del array aMilitares. [4 puntos] */

 const aMilitares8anho = aMilitares.filter(oMilitar => oMilitar.experience > 8);
 //const iPuntuacionExperiencia8 = aMilitares8anho.reduce((a, b) => ({pilotingScore: a.pilotingScore + b.pilotingScore}));
 const iPuntuacionExperiencia8 = aMilitares8anho.reduce((a, b) => a.pilotingScore + b.pilotingScore);


 console.log(iPuntuacionExperiencia8);