const aArray1 = [1, 2, 3];
/*const aArray2 = new Array(50); Este método es propenso a errores, no lo usamos */

const aArray2 = ["uno", 2, "tres"];

const aArray3 = [[1, 2, 3], ["uno", 2, "tres"]];

aArray1[0];//1
aArray2[2];//"tres"
aArray3[1];//["uno", 2, "tres"]

aArray1.length;//3  /** Devuelve un elemento */
aArray3.length;//2  /** Devuelve dos elemento */