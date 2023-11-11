/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tareapresencial1;

/**
 * Clase que implementa la gestion de depostios (consumibles) de una máquina de café.
 * Con esta clase manejaremos el número de depositos de café, leche y vasos.
 * @author JBono
 */
public class Deposito {
    private int _depositosDeCafe = 0;
    private int _depositosDeLeche = 0;
    private int _depositosDeVasos = 0;
    
    /**
     * Constructor: por defecto el monedero comienza sin depostios de café, leche ni vasos.
     */
    public Deposito(){}

    /**
     * Constructor: Indicamos cuantas depositos de consumibles hay al instanciarlo.
     * @param depositosDeCafe múmero de depositos de café.
     * @param depositosDeLeche múmero de depositos de leche.
     * @param depositosDeVasos múmero de depositos de Vasos.
     */
    public Deposito(int depositosDeCafe, int depositosDeLeche, int depositosDeVasos){
        _depositosDeCafe = depositosDeCafe;
        _depositosDeLeche = depositosDeLeche;
        _depositosDeVasos = depositosDeVasos;
    }

    /**
     * Método para conocer el número de depositos de café restantes.
     * @return número de depositos de cafe restantes.
     */
    public int depositosDeCafe (){
        return _depositosDeCafe;
    }

    /**
     * Método para conocer el número de depositos de leche restantes.
     * @return número de depositos de leche restantes.
     */
    public int depositosDeLeche(){
        return _depositosDeLeche;
    }

     /**
     * Método para conocer el número de depositos de vasos restantes.
     * @return número de depositos de vasos restantes.
     */
    public int depositosDeVasos(){
        return _depositosDeVasos;
    }
    
    /**
     * Método por el que indicamos que se ha consumido una dosis de café.
     */
    public void sacarCafe() {
        _depositosDeCafe--;
    }
    
    /**
     * Método por el que indicamos que se ha consumido una dosis de leche.
     */
    public void sacarLeche() {
        _depositosDeLeche--;
    }
    
    /**
     * Método por el que indicamos que se ha consumido una vaso.
     */
    public void sacarVaso() {
        _depositosDeVasos--;
    }
}


