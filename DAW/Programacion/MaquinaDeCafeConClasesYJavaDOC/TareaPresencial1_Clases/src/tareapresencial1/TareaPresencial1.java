/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tareapresencial1;

import java.util.Scanner;

/**
 * Clase en la que controlamos el comportamiento de una máquina de Cafe.
 * Por tanto contiene en método Main.
 * @author JBono
 */
public class TareaPresencial1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        //Definimos las constantes para los Menus.
        final int SELECCION_CAFE = 1;
        final int SELECCION_LECHE = 2;
        final int SELECCION_CAFE_CON_LECHE = 3;
        final int SELECCION_ESTADO_DE_MAQUINA = 4;
        final int SELECCION_APAGAR_MAQUINA = 5;
                
        //Definimos las constantes para la aplicación        
        final int DEPOSITOS_INICIAL_DE_CAFE = 10;
        final int DEPOSITOS_INICIAL_LECHE = 10;
        final int DEPOSITOS_INICIAL_DE_VASOS = 16;
        
        final int MONEDERO_INICIAL_MONEDAS_EURO = 0;
        final int MONEDERO_INICIAL_MONEDAS_50_CENTIMOS = 5;
        final int MONEDERO_INICIAL_MONEDAS_20_CENTIMOS = 5;
        final int MONEDERO_INICIAL_MONEDAS_10_CENTIMOS = 5;
        
        final double PRECIO_CAFE = 1;
        final double PRECIO_LECHE = 0.8;
        final double PRECIO_CAFE_CON_LECHE = 1.5;
     
        //Definimos variables auxiliares que necesitare para hacer calculos.
        double dineroInsertado = 0;
        double cantidadADevolver = 0;
        int opcionMenuPrincipal = 0;
        
        //Defino variables que necesitare para controlar la aplicacion.
        boolean salir = false;        
        boolean transaccion = false;
        boolean dineroSuficiente = true;
        boolean depositoSuficiente = true;
        boolean descontarProducto = false;
        boolean opcionElegidaQueDispensaProducto = false;      
        
        
        //Creo objeto para controlar el deposito de elementos a dispensar.
        Deposito consumibles = new Deposito(DEPOSITOS_INICIAL_DE_CAFE, DEPOSITOS_INICIAL_LECHE, DEPOSITOS_INICIAL_DE_VASOS);
        
        //Creo objeto para controlar la caja de los dineros.
        CajaDeDinero cajaDeDinero = new CajaDeDinero(MONEDERO_INICIAL_MONEDAS_EURO, MONEDERO_INICIAL_MONEDAS_50_CENTIMOS, 
                                                     MONEDERO_INICIAL_MONEDAS_20_CENTIMOS, MONEDERO_INICIAL_MONEDAS_10_CENTIMOS);
        
        //Comienza la aplicación
        do{
            //Establecemos a false el valor booleano de si se ha elegido una opcion que conlleve dispensar producto
            opcionElegidaQueDispensaProducto = false;
            opcionMenuPrincipal = TareaPresencial1.menuPrincipal(SELECCION_CAFE, SELECCION_LECHE, SELECCION_CAFE_CON_LECHE,
                                                                 SELECCION_ESTADO_DE_MAQUINA, SELECCION_APAGAR_MAQUINA);
            
            //verificamos si hemos eleguido una opcion de dispensar producto            
            opcionElegidaQueDispensaProducto = ((opcionMenuPrincipal == SELECCION_CAFE) || 
                                                (opcionMenuPrincipal == SELECCION_LECHE) ||
                                                (opcionMenuPrincipal == SELECCION_CAFE_CON_LECHE));
            
            //Preparo el valor de deposito suficiente antes de verificar si hay suficientes depositos.
            depositoSuficiente = true;
            
            //Compruebo que hay depositos suficientes para servir el producto.           
            switch(opcionMenuPrincipal){
                case SELECCION_CAFE: 
                   depositoSuficiente = ((consumibles.depositosDeCafe() > 0) && (consumibles.depositosDeVasos() > 0));
                   break;
                case SELECCION_LECHE: 
                   depositoSuficiente = ((consumibles.depositosDeLeche() > 0) && (consumibles.depositosDeVasos() > 0));
                   break;
                case SELECCION_CAFE_CON_LECHE: 
                   depositoSuficiente = ((consumibles.depositosDeCafe() > 0) && (consumibles.depositosDeLeche() > 0) && (consumibles.depositosDeVasos() > 0));
                   break;
            }            
            // si no hay depositos  sufucientes y se habia seleccionado un menú de dispensar: lo muestro por pantalla y vuelvo al Menu.
            if ((!depositoSuficiente) && opcionElegidaQueDispensaProducto){
                System.out.println("No hay existencias de su elección.");
            }
            else {//Comprobado que tengo depositos suficientes para la elección continuamos con la ejecución
                switch (opcionMenuPrincipal){ // Segun la opcion elegida del menu....
                    case SELECCION_CAFE:                                        
                    case SELECCION_LECHE:                
                    case SELECCION_CAFE_CON_LECHE:
                        //Codigo comun para los casos de cafe, leche o cafe con leche.                        
                        //Lo primero será insertar monedas.                         
                        dineroInsertado = cajaDeDinero.insertarMonedas();                           

                        //Comprobamos que el dinero introducido es suficiente.
                        switch(opcionMenuPrincipal){
                            case SELECCION_CAFE: 
                               dineroSuficiente = dineroInsertado >= PRECIO_CAFE;
                               break;
                            case SELECCION_LECHE: 
                               dineroSuficiente = dineroInsertado >= PRECIO_LECHE;
                               break;
                            case SELECCION_CAFE_CON_LECHE: 
                               dineroSuficiente = dineroInsertado >= PRECIO_CAFE_CON_LECHE;
                               break;
                        }
                        // si no hay dinero sufuciente mostrlo por pantalla y volvemos al menu
                        if (!dineroSuficiente){
                            System.out.println("Dinero introducido insuficiente.");
                        }
                        else {/* Ya sabemos que han introducido dinero suficiente.
                              Comprobaremos que hay cambio suficiente. */  
                            
                            switch(opcionMenuPrincipal){
                                case SELECCION_CAFE: 
                                   cantidadADevolver = dineroInsertado - PRECIO_CAFE;
                                   break;
                                case SELECCION_LECHE: 
                                   cantidadADevolver = dineroInsertado - PRECIO_LECHE;
                                   break;
                                case SELECCION_CAFE_CON_LECHE: 
                                   cantidadADevolver = dineroInsertado - PRECIO_CAFE_CON_LECHE;
                                   break;
                            }
                            
                            /*En el caso de que si
                              cargaremos en el monedero lo insertado, descontaremos el cambio
                              y restaremos los productos servidos. Empezamos redondeando cantidadADevolver*/     
                            
                            cantidadADevolver = Matematica.rendodeaA2Decimales(cantidadADevolver);
                            
                            descontarProducto = false; // La usamos para marcar si habrá que descontar consumibles.
                            
                            if (cantidadADevolver == 0){ //cambio exacto
                                System.out.println("Importe exacto, no necesita cambio");
                                cajaDeDinero.aceptarTransaccion(cantidadADevolver);
                                descontarProducto = true;
                            }
                            else{
                                //Muestro por consola el valor a devolver.
                                System.out.println("Cantidad a devolver: " + cantidadADevolver);
                                //Intento realizar la transaccion. Entre otras comprueba si hay cambio
                                transaccion = cajaDeDinero.aceptarTransaccion(cantidadADevolver);
                                if (transaccion) { //Si la transaccion ha sido correcta, descontaré los productos.
                                    descontarProducto = true;
                                } 
                            } 
                               
                            // if no hay cambio suficiente System.out.println("No hay cambio suficiente en la maquina");
                            if (descontarProducto == true){//Restamos los producto/s consumido/s de la maquina.      
                                System.out.println("Sirviendo su bebida...");
                                switch(opcionMenuPrincipal){
                                    case SELECCION_CAFE: 
                                       consumibles.sacarCafe();
                                       consumibles.sacarVaso();
                                       break;
                                    case SELECCION_LECHE: 
                                       consumibles.sacarLeche();
                                       consumibles.sacarVaso();
                                       break;
                                    case SELECCION_CAFE_CON_LECHE: 
                                       consumibles.sacarCafe();
                                       consumibles.sacarLeche();
                                       consumibles.sacarVaso();
                                       break;
                                }
                            }
                        }                        
                        break;

                    case SELECCION_ESTADO_DE_MAQUINA:
                        System.out.println("Estado de la Maquina");
                        System.out.println("Monedero - Monedas de Euro: " + cajaDeDinero.monedasDeEuro());
                        System.out.println("Monedero - Monedas de 50 Centimos: " + cajaDeDinero.monedasDe50Centimos());
                        System.out.println("Monedero - Monedas de 20 Centimos: " + cajaDeDinero.monedasDe20Centimos());
                        System.out.println("Monedero - Monedas de 10 Centimos: " + cajaDeDinero.monedasDe10Centimos());
                        System.out.println("Deposito - Depositos de cafe: " + consumibles.depositosDeCafe());
                        System.out.println("Deposito - Depositos de Leche: " + consumibles.depositosDeLeche());
                        System.out.println("Deposito - Depositos de Vasos: " + consumibles.depositosDeVasos() + "\n");
                        break;

                    case SELECCION_APAGAR_MAQUINA:
                        salir = true;
                        System.out.println("Maquina apagandose... Hasta luego...");
                        break;
                }                
            }
        }while (!salir);        
    }  
    
    /**
     * Método estatico que te generá un menú de maquina de cafe.
     * @param SELECCION_CAFE
     * @param SELECCION_LECHE
     * @param SELECCION_CAFE_CON_LECHE
     * @param SELECCION_ESTADO_DE_MAQUINA
     * @param SELECCION_APAGAR_MAQUINA
     * @return devuelve la opción eleguida.
     */
    static int menuPrincipal(int SELECCION_CAFE, int SELECCION_LECHE, int SELECCION_CAFE_CON_LECHE,
                             int SELECCION_ESTADO_DE_MAQUINA,int SELECCION_APAGAR_MAQUINA){
        //Uso la clase Scanner para la entrada de información por teclado.
        Scanner teclado = new Scanner(System.in);
        int opcionMenuPrincipal = 0;
        boolean errorDeEntrada = false;
        
        //Mostramos el menu
        System.out.println("\nMenu de Maquina de cafe.");
        System.out.println(SELECCION_CAFE + ". Servir café solo ( 1 euro)");
        System.out.println(SELECCION_LECHE + ". Servir leche (0.8 euros)");
        System.out.println(SELECCION_CAFE_CON_LECHE + ". Servir café con leche (1,5 euros)");
        System.out.println(SELECCION_ESTADO_DE_MAQUINA + ". Consultar el estado de la maquina");
        System.out.println(SELECCION_APAGAR_MAQUINA + ". Apagar máquina y salir");
        System.out.println("\nSeleccione una opcion de " + SELECCION_CAFE + " a " + SELECCION_APAGAR_MAQUINA);
        do {
            /* Codigo relativo a la lectura por teclado
                     de opcion valida y a prueba de errores */
            try {
                opcionMenuPrincipal = teclado.nextInt();
                if ((opcionMenuPrincipal > 0) && (opcionMenuPrincipal <= SELECCION_APAGAR_MAQUINA)) { //opcion dentro del rango.                       
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
        } while (errorDeEntrada);//Hasta que no haya leido un numero entero valido seguiremos intentando.
        return opcionMenuPrincipal;
    }
}
