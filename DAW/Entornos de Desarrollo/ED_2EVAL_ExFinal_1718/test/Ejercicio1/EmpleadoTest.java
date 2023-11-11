/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Ejercicio1;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ANGELA PEREZ
 */
public class EmpleadoTest {
    
    public EmpleadoTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

 /* ---------------------------------------------------------------------------*/
    
    
    
    /**
     * Test de aumentar_sueldoA.
     */
    @Test
    public void Aumentar_sueldoA() throws Exception {
        System.out.println("aumentar_sueldo");
        double cantidad = 3000.0;
        Empleado instance = null;
        instance.aumentar_sueldo(cantidad);        
        
        System.out.println("Correcto");
        if( cantidad > 4000)  
             throw new Exception("Error en el test de comprobar sueldo menor a 4000");      
        else 
             assertEquals(cantidad);       
    }
    
    /**
     * Test de aumentar_sueldoB.
     */
    @Test
    public void Aumentar_sueldoB() throws Exception {
        System.out.println("aumentar_sueldo");
        double cantidad = 5000.0;
        Empleado instance = null;
        instance.aumentar_sueldo(cantidad);       
        if( cantidad > 4000)  
            assertEquals(cantidad);         
        else 
            throw new Exception("Error en el test de comprobar sueldo mayor a 4000");
    }
    
    /**
     * Test de aplicar_bonificacionA.
     */
    @Test
    public void Aplicar_bonificacionA() throws Exception {
        System.out.println("aplicar_bonificacion");
        Empleado instance = null;
        int edad = 22; 
        double expResult = 0.0;
        if (edad < 21){
           throw new Exception("Error en el test, no tiene mas de 21 años");
        }else{ 
           double result = instance.aplicar_bonificacion();
           assertEquals(expResult, result);
        }        
    }
    
    /**
     * Test de aplicar_bonificacionB.
     */
    @Test
    public void Aplicar_bonificacionB() throws Exception {
        System.out.println("aplicar_bonificacion");
        Empleado instance = null;
        int edad = 20; 
        double expResult;
        double result = instance.aplicar_bonificacion();
        if (edad < 21){
           throw new Exception("Fallo correcto");           
           assertEquals(result);
        }else{ 
          throw new Exception("Error");
           
        }        
    }

    
    
 

    private void assertEquals(double cantidad, double result) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    private void assertEquals(double cantidad) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
