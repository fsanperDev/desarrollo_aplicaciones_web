/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Ejercicio2;

/**
 *
 * @author ANGELA PEREZ
 */
public interface InterfazEmpleado {

    /**
     * @return the anios_experiencia
     */
    int getAnios_experiencia();

    /**
     * @return the categoria
     */
    String getCategoria();

    /**
     * @return the sueldo
     */
    double getSueldo();

    /**
     * @param anios_experiencia the anios_experiencia to set
     */
    void setAnios_experiencia(int anios_experiencia);

    /**
     * @param categoria the categoria to set
     */
    void setCategoria(String categoria);

    /**
     * @param sueldo the sueldo to set
     */
    void setSueldo(double sueldo);
    
}
