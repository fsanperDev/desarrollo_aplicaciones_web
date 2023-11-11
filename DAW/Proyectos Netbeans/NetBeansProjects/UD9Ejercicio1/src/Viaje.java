/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author FENRIR
 */
public class Viaje {
    private String _nombre;
    private String _destino;
    private int _categoria;
    private double _precio;
    private int _numeroDeNoches;
    
    public Viaje(){
       limpiar();
    }
    
    public void insertar(String nombre, String destino, int categoria, double precio, int numeroDeNoches){
        _nombre = nombre;
        _destino = destino;
        _categoria = categoria;
        _precio = precio;
        _numeroDeNoches = numeroDeNoches;
    }
    
    public void limpiar(){
        _nombre = "";
        _destino = "";
        _categoria = 0;
        _precio = 0;
        _numeroDeNoches = 0;
    }
    
    @Override
    public String toString(){
        return (_nombre+" viaje a "+ _destino+"\n"
                +_numeroDeNoches+" noches, hotel de "+_categoria+" estrellas\nPrecio Total: "
                +(_numeroDeNoches*_precio)+" €");
    }
}
