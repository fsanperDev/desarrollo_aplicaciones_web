package Ejercicio2;

/**
 *  <p style="font-size:40px; color:red">ED_EXAMEN_2EVAL </p>
 * @author <b>ANGELA PEREZ ALVAREZ</b>
 * @version ExEv2_1718 07/03/2018
 * 
 */
public class Empleado extends Persona implements InterfazEmpleado {

//-------------------------  ATRIBUTOS  ------------------------------------------------------------------    
    
    /* Atributo privado: anios_experiencia*/
    private int anios_experiencia;
    /* Atributo privado: sueldo*/
    private double sueldo;
    /* Atributo privado: categoria*/
    private String categoria;
    
//--------------------  CONSTRUCTORES  --------------------------------------------------------------------

    /**
     * 
     * @param nombre atributo
     * @param apellidos atributo
     * @param edad atributo
     */

    public Empleado(String nombre, String apellidos, int edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    /**
     *
     * @param anios_experiencia
     * @param sueldo
     * @param categoria
     * 
     */
    public Empleado(int anios_experiencia, double sueldo, String categoria) {
        this.anios_experiencia = anios_experiencia;
        this.sueldo = sueldo;
        this.categoria = categoria;
    }

    /**
     *
     * @param nombre
     * @param apellidos
     * @param edad
     * @param anios_experiencia
     * @param sueldo
     * @param categoria
     */
    public Empleado(String nombre, String apellidos, int edad, int anios_experiencia, double sueldo, String categoria) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.anios_experiencia = anios_experiencia;
        this.sueldo = sueldo;
        this.categoria = categoria;
    }

//------------------------  GETTERS  -------------------------------------------------------    
    
    /**
     * @return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @return the apellidos
     */
    public String getApellidos() {
        return apellidos;
    }

    /**
     * @return the edad
     */
    public int getEdad() {
        return edad;
    }

    /**
     * @return the anios_experiencia
     */
    @Override
    public int getAnios_experiencia() {
        return anios_experiencia;
    }

    /**
     * @return the sueldo
     */
    @Override
    public double getSueldo() {
        return sueldo;
    }

    /**
     * @return the categoria
     */
    @Override
    public String getCategoria() {
        return categoria;
    }

//---------------------------------  SETTERS  -------------------------------------------------
    
    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @param apellidos the apellidos to set
     */
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    /**
     * @param edad the edad to set
     */
    public void setEdad(int edad) {
        this.edad = edad;
    }

    /**
     * @param anios_experiencia the anios_experiencia to set
     */
    @Override
    public void setAnios_experiencia(int anios_experiencia) {
        this.anios_experiencia = anios_experiencia;
    }

    /**
     * @param sueldo the sueldo to set
     */
    @Override
    public void setSueldo(double sueldo) {
        this.sueldo = sueldo;
    }

    /**
     * @param categoria the categoria to set
     */
    @Override
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

}
