/*      
La función addEventListener cuenta con un tercer parámetro booleano que indica si la función
asociada al evento debería llamarse en la fase de captura o de burbujeo.
a) ¿Qué es la fase de captura y de burbujeo al producirse un evento?
b) ¿Qué utilidad tiene la función stopPropagation?
*/

/*
a)
Cuando haces un evento a un elemento dentro de uno o varios DIV tambien afecta el evento a todo aquel que esté
por encima de este si dejamos la configuración por defecto.

b)
Esta función sirve para evitar que se propague el event en los elementos superiores, por ejemplo,
si tenemos un DIV2 dentor de DIV1 para que no se active el event dentro de este último utilizamos
stopPropagation.

*/