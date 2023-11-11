(: Ejercicio 1 :)
(: Obtener el nomre de los productos que cuesten más de 350 € :)
"Sustituir por la consulta 1"
for $a in //productos/producto
where $a/precio>350
return $a/nombre/data()
,

(: Ejercicio 2 :)
(: Obtener el teléfono de los clientes que han comprado el "Autolavado" :)
"Sustituir por la consulta 2"
let $prod := //productos/producto[nombre='Autolavado']/@cod
for $compra in //compras/cantidad
for $cliente in //clientes/cliente 
where $compra/@producto = $prod
and $compra/@cliente = $cliente/@cod
return $cliente/telefono

,


(: Ejercicio 3 :)
(: Obtener el nombre y el precio de los productos comprados por el cliente con código "U300111" ordenados por precio de menor a mayor :)
"Sustituir por la consulta 3"
,

(: Ejercicio 4 :)
(: Obtener las fechas ordenadas descendentemente en las que se ha comprado el "Control Remoto" y la cantidad:)
"Sustituir por la consulta 4"
,


(: Ejercicio 5 :)
(: Obtener el nombre de los productos y el número total de veces que ha sido comprado cada uno de ellos, así como su valor en € :)
"Sustituir por la consulta 5"
for $p in //productos/producto
return concat($p/nombre/data(),' - ' ,count(//compras/cantidad[@producto=$p/@cod]))
,


(: Ejercicio 6 :)
(: Obtener el nombre de todos los empleados que viven en Sevilla e indicar la localidad. En el mismo elemento que la localidad añadir la provincia: <ubicacion>Localidad (Provincia)</ubicacion> :)
"Sustituir por la consulta 6"
let $emp := //empleados/empleado[provincia='Sevilla']
return ($emp/nombre, $emp/localidad)
,
"-<-<-<-<-<-<-<-<-<-<-<-<",
for $a in //empleados/empleado
where $a/provincia = 'Sevilla'
return ($a/nombre, $a/localidad)

,


(: Ejercicio 7 :)
(: Obtener para cada una de las categorías su nombre y el tipo al que pertenece, sin duplicados. Ordenar desde el nombre de categoría más corto hasta el más largo :)
"Sustituir por la consulta 7"
,


(: Ejercicio 8 :)
(: Obtener los nombres de las categorias que empiezan por “Pico”, sin duplicados:)
"Sustituir por la consulta 8"
,


(: Ejercicio 9 :)
(: Devolver una lista de los años de descubrimiento como atributo de una etiqueta departamento junto con el nivel al que pertenece :)
"Sustituir por la consulta 9"
,


(: Ejercicio 10 :)
(: Devolver la suma de horas de los salarios de los empleados que viven en la provincia de Jaén y tienen código B excepto los que viven en la capital :)
"Sustituir por la consulta 10"