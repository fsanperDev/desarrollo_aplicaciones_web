/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tareapresencial1;

import java.util.Scanner;

/**
 *Clase que implementa el funcionamiento de una caja de dinero en una máquina.
 * En ésta habra 2 monederos: uno propio de la máquina y otro temporal para 
 * interactuar con el usuario.
 * @author JBono
 */
public class CajaDeDinero {
    private Monedero _monederoDeInstertar = new Monedero(); //Monedero temporal con el ususario
    private Monedero _monederoInterno; //Monedero interno de la caja.
    
    //Constantes para el menú
    final int INSERTAR_EURO = 1;
    final int INSERTAR_50_CENTIMOS = 2;
    final int INSERTAR_20_CENTIMOS = 3;
    final int INSERTAR_10_CENTIMOS = 4;
    final int SALIR_DE_MENU_INSERTAR = 5;
    
    //Constantes con el valor del dinero
    final double VALOR_EURO = 1;
    final double VALOR_50_CENTIMOS = 0.5;
    final double VALOR_20_CENTIMOS = 0.2;
    final double VALOR_10_CENTIMOS = 0.1;
    
    //Constructores
    
    /**
     * Contructor: Instanciamos una caja de dinero con los monederos vácios.
     */
    public CajaDeDinero(){
        _monederoInterno = new Monedero();
    }
    
    /**
     * Contructor: Instanciamos una caja de dinero indicando la cantidad de las 
     * dierentes monedas que tendremos incialemente en el monedero Interno. 
     * El temporal siempre se inicializará vacio.
     * @param monedasDeEuro número de monedas de €.
     * @param monedas50Centimos número de monedas de 50 Centimos.
     * @param monedas20Centimos número de monedas de 20 Centimos.
     * @param monedas10Centimos  número de monedas de 10 Centimos.
     */
    public CajaDeDinero(int monedasDeEuro, int monedas50Centimos, int monedas20Centimos, int monedas10Centimos){
        _monederoInterno = new Monedero(monedasDeEuro, monedas50Centimos, monedas20Centimos, monedas10Centimos);
    }
    
    //Métodos
    
    /**
     * Método para conocer el número de monedas de € del monedero Interno.
     * @return las monedas de Euro que hay en el monedero.
     */
    public int monedasDeEuro(){
        return _monederoInterno.monedasDeEuro();
    }
    
    /**
     * Método para conocer el número de monedas de 50 Céntimos del monedero Interno.
     * @return las monedas de 50 Céntimos que hay en el monedero.
     */
    public int monedasDe50Centimos(){
        return _monederoInterno.monedasDe50Centimos();
    }
    
    /**
     * Método para conocer el número de monedas de 20 Céntimos del monedero Interno.
     * @return las monedas de 20 Céntimos que hay en el monedero.
     */
    public int monedasDe20Centimos(){
        return _monederoInterno.monedasDe20Centimos();
    }
    
    /**
     * Método para conocer el número de monedas de 10 Céntimos del monedero Interno.
     * @return las monedas de 10 Céntimos que hay en el monedero.
     */
    public int monedasDe10Centimos(){
        return _monederoInterno.monedasDe10Centimos();
    }
    
    /**
     * Método por el que insertamos monedas en el monedero de temporal del ususario
     * Generamos Menú para que el usuario inserte la monedas.
     * @return Devolvemos el valor del total insertaso.
     */
    public double insertarMonedas (){
        //Uso la clase Scanner para la entrada de información por teclado.
        Scanner teclado = new Scanner(System.in);
        
        boolean finInsertarMonedas = false;
        boolean errorDeEntrada = false;
        int opcionElegida = 0;
        double dineroInsertado = 0;
        
        //Comenzamos la aplicación.
        do { //Mostramos el Menu 
            System.out.println("Menu de Insertar Monedas");
            System.out.println(INSERTAR_EURO + ".- Introducir moneda de 1 €uro");
            System.out.println(INSERTAR_50_CENTIMOS + ".- Introducir monedas de 50 centimos");
            System.out.println(INSERTAR_20_CENTIMOS + ".- Introducir monedas de 20 centimos");
            System.out.println(INSERTAR_10_CENTIMOS + ".- Introducir monedas de 10 centimos");
            System.out.println(SALIR_DE_MENU_INSERTAR + ".-Finalizar el insertar monedas");
            System.out.println("Cantidad Actual: " + dineroInsertado + " €uros");
            do {
                /* Codigo relativo a la lectura por teclado
                                    de opcion valida y a prueba de errores */
                try {
                    opcionElegida = teclado.nextInt();
                    if ((opcionElegida > 0) && (opcionElegida <= SALIR_DE_MENU_INSERTAR)) { //opcion dentro del rango.                        
                        errorDeEntrada = false;
                    } else {
                        System.out.println("Opción elegida no valida... Intentelo de nuevo");
                        errorDeEntrada = true;
                    }
                } catch (Exception e) {
                    System.out.println("Error al insertar opcion... Intentelo de nuevo.");
                    errorDeEntrada = true;
                    teclado.nextLine();
                }
            }while (errorDeEntrada);//Hasta que no haya leido un numero entero valido seguiremos intentando.
            
            switch (opcionElegida){//Segun la opcion elegija de insertar monedas                                
                case INSERTAR_EURO: 
                    _monederoDeInstertar.insertarEuro();
                    dineroInsertado += VALOR_EURO;
                    break;
                case INSERTAR_50_CENTIMOS:
                    _monederoDeInstertar.insertar50Centimos();
                    dineroInsertado += VALOR_50_CENTIMOS;
                    break;
                case INSERTAR_20_CENTIMOS:
                    _monederoDeInstertar.insertar20Centimos();
                    dineroInsertado += VALOR_20_CENTIMOS;
                    break;
                case INSERTAR_10_CENTIMOS:
                    _monederoDeInstertar.insertar10Centimos();
                    dineroInsertado += VALOR_10_CENTIMOS;
                    break;
                case SALIR_DE_MENU_INSERTAR:
                    finInsertarMonedas = true;
                    break;                            
            }                            
            dineroInsertado = Matematica.rendodeaA2Decimales(dineroInsertado);
        }while(!finInsertarMonedas);  
        //Una vez terminamos de insertar monedas.
        System.out.println("Valor insertado total: "+dineroInsertado);
        return dineroInsertado;
    }
    
    /**
     * Método que acepta la transacción. Consiste en comprobar las monedas necesarias
     * para darle cambio al ususario y pasar las monedas del monedero temporal de 
     * interactuación con el usuario al monedero interno de la caja.
     * @param cantidadADevolver cantidad a devolver en monedas.
     * @return devuelve si ha sito exitosa o no la transacción.
     */
    public boolean aceptarTransaccion(double cantidadADevolver){
        //Inicializo las cantidades a devolver.
        int monedaDeEuroADevovler = 0;
        int monedaDe50CentimosADevovler = 0;
        int monedaDe20CentimosADevovler = 0;
        int monedaDe10CentimosADevovler = 0;
        double centimosADevolver = 0;
        boolean cambioSuficiente = true;

        //Calculemos las monedas necesarias NO ES UN ALGORITMO PERFECTO!!
        monedaDeEuroADevovler = (int) (cantidadADevolver / VALOR_EURO);
        centimosADevolver = (cantidadADevolver % VALOR_EURO);
        centimosADevolver = Matematica.rendodeaA2Decimales(centimosADevolver);
        if (centimosADevolver > 0) {//Quedán centimos por devolver
            monedaDe50CentimosADevovler = (int) (centimosADevolver / VALOR_50_CENTIMOS);
            if ((centimosADevolver % VALOR_50_CENTIMOS) != 0) {//Siguen quedando centimos por devolver                                        
                centimosADevolver = (cantidadADevolver % VALOR_50_CENTIMOS);
                centimosADevolver = Matematica.rendodeaA2Decimales(centimosADevolver);
                monedaDe20CentimosADevovler = (int) (centimosADevolver / VALOR_20_CENTIMOS);
                if (centimosADevolver % VALOR_20_CENTIMOS > 0) {
                    centimosADevolver = (centimosADevolver % VALOR_20_CENTIMOS);
                    centimosADevolver = Matematica.rendodeaA2Decimales(centimosADevolver);
                    monedaDe10CentimosADevovler = (int) (centimosADevolver / VALOR_10_CENTIMOS);
                }
            }
        }

        //Compruebo si tendré suficientes monedas en el monedero para dar el cambio al ususario.
        if ((monedaDe50CentimosADevovler <= (_monederoInterno.monedasDe50Centimos() + _monederoDeInstertar.monedasDe50Centimos()))
                && (monedaDe20CentimosADevovler <= (_monederoInterno.monedasDe20Centimos() + _monederoDeInstertar.monedasDe20Centimos()))
                && (monedaDe10CentimosADevovler <= (_monederoInterno.monedasDe10Centimos() + _monederoDeInstertar.monedasDe10Centimos()))) {//Tenemos cambio
            //En este punto ya sabemos que SI vamos a tener cambio para devolver al usuario.
            //Movemos las monedas insertadas al monedero interno.
            for (int i = _monederoDeInstertar.monedasDeEuro(); i>0 ; i--){ //Inserto definitivamente las monedas de Euro
                _monederoDeInstertar.sacarEuro();
                _monederoInterno.insertarEuro();
            }
            for (int i = _monederoDeInstertar.monedasDe50Centimos(); i>0 ; i--){ //Inserto definitivamente las monedas de 50
                _monederoDeInstertar.sacar50Centimos();
                _monederoInterno.insertar50Centimos();
            }
            
            for (int i = _monederoDeInstertar.monedasDe20Centimos(); i>0 ; i--){ //Inserto definitivamente las monedas de 20
                _monederoDeInstertar.sacar20Centimos();
                _monederoInterno.insertar20Centimos();
            }
            
            for (int i = _monederoDeInstertar.monedasDe10Centimos(); i>0 ; i--){ //Inserto definitivamente las monedas de 10
                _monederoDeInstertar.sacar10Centimos();
                _monederoInterno.insertar10Centimos();
            }
            
            //Sacamos del monedero para devolver al usuario la vuelta.
            for (int i = monedaDeEuroADevovler; i>0 ; i--){ //Descuento las monedas de Euro a devolver
                _monederoInterno.sacarEuro();
            }
            
            for (int i = monedaDe50CentimosADevovler; i>0 ; i--){ //Descuento las monedas de 50 Centimos a devolver
                _monederoInterno.sacar50Centimos();
            }
            
            for (int i = monedaDe20CentimosADevovler; i>0 ; i--){ //Descuento las monedas de 50 Centimos a devolver
                _monederoInterno.sacar20Centimos();
            }
            
            for (int i = monedaDe10CentimosADevovler; i>0 ; i--){ //Descuento las monedas de 50 Centimos a devolver
                _monederoInterno.sacar10Centimos();
            }
            
            //Mostramos por pantalla la devolución.
            System.out.println("Su devolucion: " + monedaDeEuroADevovler + " monedas de Euro, "
                    + monedaDe50CentimosADevovler + " monedas de 50 Centimos, "
                    + monedaDe20CentimosADevovler + " monedas de 20 Centimos y "
                    + monedaDe10CentimosADevovler + " monedas de 10 Centimos");
            
        } else {//Este es el caso de no tener suficiente cambio para el usuario.
            System.out.println("No hay cambio suficiente en la maquina");
            cambioSuficiente = false;
        }
        return cambioSuficiente;
    }
    
}
