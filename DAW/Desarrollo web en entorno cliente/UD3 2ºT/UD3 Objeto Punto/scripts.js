class Punto{
    constructor(coordeandaX, coordeandaY){
        if(isNaN(coordeandaX) || isNaN(coordeandaY)){
            this._x = 0;
            this._y = 0;            
        }else{
            this._x = coordeandaX;
            this._y = coordeandaY;
        }
    }

// Métodos set y get para la X y la Y.
    get x() {return this._x;}
    set x(nuevaX) {
        if (isNaN(nuevaX)) {
            this._x = 0;
        }else{
        this._x = nuevaX;
        }
    }

    get y() {return this._y;}
    set y(nuevaY) {
        if (isNaN(nuevaY)) {
            this._y = 0;
        }else{
        this._y = nuevaY;
        }
    }

    cambiar(coordeandaX, coordeandaY){
        this._x = coordeandaX;
        this._y = coordeandaY;
    }

    copiar(){
        /**Las 2 opciones hacen lo mismo */
        //JSON.parse(JSON.stringify(oObjetoOriginal));
        return new Punto(this._x, this._y);
    }

    iguales(oPunto){
        //Ambas formas son equivalentes.
        /*let sonIguales = false;
        if (this._x === oPunto.x && this._y === oPunto.y) {
            sonIguales = true;
        }
        return sonIguales;*/

        return this._x === oPunto.x && this._y === oPunto.y;        
    }

    suma(oPunto){
        return new Punto(this.x + oPunto.x, this.y + oPunto.y);
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }
}

const oPunto1 = new Punto(2, 3);
const oPunto2 = new Punto(5, 6);

const oPunto4 = oPunto1.suma(oPunto2);
console.log(`${oPunto4}`);

/*// Connotacion literal.
const oPunto3 = {_x:2, _y:3};*/