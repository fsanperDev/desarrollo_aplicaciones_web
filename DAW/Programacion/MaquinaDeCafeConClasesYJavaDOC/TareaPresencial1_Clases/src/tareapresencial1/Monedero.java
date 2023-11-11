/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tareapresencial1;

/**
 * Clase que implementa el funcionamiento de un monedero de una máquina.
 * Con esta clase manejaremos las diferentes monerdas y la gestión de las mismas.
 * @author JBono
 */
public class Monedero {
    private int _monedasDeEuro = 0;
    private int _monedas50Centimos = 0;
    private int _monedas20Centimos = 0;
    private int _monedas10Centimos = 0;
    
    /**
     * Constructor: por defecto el monedero comienza con el numero de monedas a 0.
     */
    public Monedero(){}
    
    /**
     * Constructor: Indicamos cuantas monedas hay en el monedero al instanciarlo.
     * @param monedasDeEuro Número de monedas de €
     * @param monedas50Centimos Número de monedas de 50 Céntimos
     * @param monedas20Centimos Número de monedas de 20 Céntimos
     * @param monedas10Centimos Número de monedas de 10 Céntimos
     */
    public Monedero(int monedasDeEuro, int monedas50Centimos, int monedas20Centimos, int monedas10Centimos){
        _monedasDeEuro = monedasDeEuro;
        _monedas50Centimos = monedas50Centimos;
        _monedas20Centimos = monedas20Centimos;
        _monedas10Centimos = monedas20Centimos;
    }
    
    /**
     * Método para conocer el número de monedas que € que hay en el monedero.
     * @return número de monedas.
     */
    public int monedasDeEuro(){
        return _monedasDeEuro;
    }
    
    /**
     * Método para conocer el número de monedas que 50 Céntimos que hay en el monedero.
     * @return número de monedas.
     */
    public int monedasDe50Centimos(){
        return _monedas50Centimos;
    }
    
    /**
     * Método para conocer el número de monedas que 20 Céntimos que hay en el monedero.
     * @return número de monedas.
     */
    public int monedasDe20Centimos(){
        return _monedas20Centimos;
    }
    
    /**
     * Método para conocer el número de monedas que 10 Céntimos que hay en el monedero.
     * @return número de monedas.
     */
    public int monedasDe10Centimos(){
        return _monedas10Centimos;
    }
    
    /**
     * Método por el que indicamos que se ha insertado una moneda de €.
     */
    public void insertarEuro(){
        _monedasDeEuro++;
    }
    
    /**
     * Método por el que indicamos que se ha insertado una moneda de 50 Céntimos.
     */
    public void insertar50Centimos(){
        _monedas50Centimos++;
    }
    
    /**
     * Método por el que indicamos que se ha insertado una moneda de 20 Céntimos.
     */
    public void insertar20Centimos(){
        _monedas20Centimos++;
    }
    
    /**
     * Método por el que indicamos que se ha insertado una moneda de 10 Céntimos.
     */
    public void insertar10Centimos(){
        _monedas10Centimos++;
    }
    
    /**
     * Método por el que indicamos que se ha sacado una moneda de €.
     */
    public void sacarEuro(){
        _monedasDeEuro--;
    }
    
    /**
     * Método por el que indicamos que se ha sacado una moneda de 50 Céntimos.
     */
    public void sacar50Centimos(){
        _monedas50Centimos--;
    }
    
    /**
     * Método por el que indicamos que se ha sacado una moneda de 20 Céntimos.
     */
    public void sacar20Centimos(){
        _monedas20Centimos--;
    }
    
    /**
     * Método por el que indicamos que se ha sacado una moneda de 10 Céntimos.
     */
    public void sacar10Centimos(){
        _monedas10Centimos--;
    }
    
}
