/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tareapresencial1;

/**
 * Clase que nos ofrecerá un método estático para redondear a 2 cifras decimales.
 * @author JBono
 */
public class Matematica {
    //Math.rint(numero*100)/100 lo utilizo para REDONDEAR la variable double numero a 2 decimales
    /**
     * 
     * @param numero número a redondear a dos decimales.
     * @return Devuelve el número introducido redondeado a dos ceminales.
     */
    static double rendodeaA2Decimales(double numero){
        return Math.rint(numero*100)/100;
    }
}
