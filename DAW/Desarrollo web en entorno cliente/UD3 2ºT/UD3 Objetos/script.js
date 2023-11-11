/*
class Coche {
    constructor(fabricanteC, modeloC){
        this.fabricante = fabricanteC;
        this.modelo = modeloC;
        this.marchas = ["P","1","2","3","4","5","R"];
        this.marchaActual = this.marchas[0];
    }

    cambiarMarcha(nuevaMarcha){
        if (!this.marchas.includes(nuevaMarcha)) {
            throw new Error(`Marcha no valida: ${nuevaMarcha}`);
        }
        this.marchaActual = nuevaMarcha;
    }
}

const oCoche1 = new Coche("Tesla", "ModelS");
oCoche1.cambiarMarcha("1");//Esta línea hara saltar la exepcion.
console.log(`Fabricante: ${oCoche1.fabricante}, Modelo: ${oCoche1.modelo}, Marcha actual: ${oCoche1.marchaActual}`);

const oCoche2 = new Coche("Mazda", "3i");
oCoche2.cambiarMarcha("R");
console.log(`Fabricante: ${oCoche2.fabricante}, Modelo: ${oCoche2.modelo}, Marcha actual: ${oCoche2.marchaActual}`);
*/


/**-------  Con Getters y Setters ------------*/
/*
class Coche {
    constructor(fabricanteC, modeloC){
        this._fabricante = fabricanteC;
        this._modelo = modeloC;
        this._marchas = ["P","1","2","3","4","5","R"];
        this._marchaActual = this._marchas[0];
    }

    get fabricante(){return this._fabricante;}
    set fabricante(nuevoFabricante){this._fabricante = nuevoFabricante;}

    get modelo(){return this._modelo;}
    set modelo(nuevoModelo){this._modelo = nuevoModelo;}

    get marchaActual(){return this._marchaActual;}
    set marchaActual(nuevaMarcha){
        if (!this._marchas.includes(nuevaMarcha)) {
            throw new Error(`Marcha no valida: ${nuevaMarcha}`);
        }
        this._marchaActual = nuevaMarcha;
    }
}


const oCoche1 = new Coche("Tesla", "ModelS");
oCoche1.marchaActual = "5";
console.log(`Fabricante: ${oCoche1.fabricante}, Modelo: ${oCoche1.modelo}, Marcha actual: ${oCoche1.marchaActual}`);

const oCoche2 = new Coche("Mazda", "3i");
oCoche2.marchaActual = "R";
console.log(`Fabricante: ${oCoche2.fabricante}, Modelo: ${oCoche2.modelo}, Marcha actual: ${oCoche2.marchaActual}`);
*/

/******************  METODOS ESTATICOS  *********************************************************/
/*
class Coche {
    constructor(fabricanteC, modeloC){
        this._fabricante = fabricanteC;
        this._modelo = modeloC;
        this._marchas = ["P","1","2","3","4","5","R"];
        this._marchaActual = this._marchas[0];
    }

    get fabricante(){return this._fabricante;}
    set fabricante(nuevoFabricante){this._fabricante = nuevoFabricante;}

    get modelo(){return this._modelo;}
    set modelo(nuevoModelo){this._modelo = nuevoModelo;}

    get marchaActual(){return this._marchaActual;}
    set marchaActual(nuevaMarcha){
        if (!this._marchas.includes(nuevaMarcha)) {
            throw new Error(`Marcha no valida: ${nuevaMarcha}`);
        }
        this._marchaActual = nuevaMarcha;
    }

    static sonIguales(oCoche1, oCoche2){
        return oCoche1.fabricante == oCoche2.fabricante && oCoche1.modelo == oCoche2.modelo;
    }
}

const oCoche1 = new Coche("Tesla", "ModelS");
oCoche1.marchaActual = "5";
console.log(`Fabricante: ${oCoche1.fabricante}, Modelo: ${oCoche1.modelo}, Marcha actual: ${oCoche1.marchaActual}`);

const oCoche2 = new Coche("Tesla", "ModelS");
oCoche2.marchaActual = "R";
console.log(`Fabricante: ${oCoche2.fabricante}, Modelo: ${oCoche2.modelo}, Marcha actual: ${oCoche2.marchaActual}`);

console.log(`Son iguales: ${Coche.sonIguales(oCoche1, oCoche2)}`);
*/

/*******************************  HERENCIA  **************************************************/
/*
class Vehiculo {
    constructor(pasajeros){
        this._pasajeros = pasajeros;
    }

    get pasajeros(){return this._pasajeros;}
    set pasajeros(nuevosPasajeros){ this._pasajeros = nuevosPasajeros;}
}

class Coche extends Vehiculo {
    constructor(fabricanteC, modeloC){
        super("0");
        this._fabricante = fabricanteC;
        this._modelo = modeloC;
        this._marchas = ["P","1","2","3","4","5","R"];
        this._marchaActual = this._marchas[0];
    }

    get fabricante(){return this._fabricante;}
    set fabricante(nuevoFabricante){this._fabricante = nuevoFabricante;}

    get modelo(){return this._modelo;}
    set modelo(nuevoModelo){this._modelo = nuevoModelo;}

    get marchaActual(){return this._marchaActual;}
    set marchaActual(nuevaMarcha){
        if (!this._marchas.includes(nuevaMarcha)) {
            throw new Error(`Marcha no valida: ${nuevaMarcha}`);
        }
        this._marchaActual = nuevaMarcha;
    }

    static sonIguales(oCoche1, oCoche2){
        return oCoche1.fabricante == oCoche2.fabricante && oCoche1.modelo == oCoche2.modelo;
    }
}

const oCoche1 = new Coche("Tesla", "ModelS");
oCoche1.marchaActual = "5";
oCoche1.pasajeros = "3";
console.log(`Fabricante: ${oCoche1.fabricante}, Modelo: ${oCoche1.modelo}, Marcha actual: ${oCoche1.marchaActual}, 
Pasajeros: ${oCoche1.pasajeros}`);

const oCoche2 = new Coche("Tesla", "ModelS");
oCoche2.marchaActual = "R";
console.log(`Fabricante: ${oCoche2.fabricante}, Modelo: ${oCoche2.modelo}, Marcha actual: ${oCoche2.marchaActual}`);

console.log(`Son iguales: ${Coche.sonIguales(oCoche1, oCoche2)}`);
*/

/***********************  toString  ******************************************************** */
class Vehiculo {
    constructor(pasajeros){
        this._pasajeros = pasajeros;
    }

    get pasajeros(){return this._pasajeros;}
    set pasajeros(nuevosPasajeros){ this._pasajeros = nuevosPasajeros;}
}

class Coche extends Vehiculo {
    constructor(fabricanteC, modeloC){
        super("0");
        this._fabricante = fabricanteC;
        this._modelo = modeloC;
        this._marchas = ["P","1","2","3","4","5","R"];
        this._marchaActual = this._marchas[0];
    }

    get fabricante(){return this._fabricante;}
    set fabricante(nuevoFabricante){this._fabricante = nuevoFabricante;}

    get modelo(){return this._modelo;}
    set modelo(nuevoModelo){this._modelo = nuevoModelo;}

    get marchaActual(){return this._marchaActual;}
    set marchaActual(nuevaMarcha){
        if (!this._marchas.includes(nuevaMarcha)) {
            throw new Error(`Marcha no valida: ${nuevaMarcha}`);
        }
        this._marchaActual = nuevaMarcha;
    }

    static sonIguales(oCoche1, oCoche2){
        return oCoche1.fabricante == oCoche2.fabricante && oCoche1.modelo == oCoche2.modelo;
    }

    toString(){
        return `${this._fabricante} => ${this._modelo}`
    }
}

const oCoche1 = new Coche("Tesla", "ModelS");
oCoche1.marchaActual = "5";
oCoche1.pasajeros = "3";

console.log(`${oCoche1}`);



