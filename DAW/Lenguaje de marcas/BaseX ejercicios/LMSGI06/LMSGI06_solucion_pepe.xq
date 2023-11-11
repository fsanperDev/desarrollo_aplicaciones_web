"Ejercicio 1",
(: Obtener el nomre de los productos que cuesten más de 350 € :)
for $a in //productos/producto
where $a/precio>350
return $a/nombre/data()
,
"Ejercicio 2 ",
(: Obtener el teléfono de los clientes que han comprado el "Autolavado" :)
for $c in //clientes/cliente
for $p in //productos/producto
for $com in //compras/cantidad
where $p/nombre="Autolavado"
and $com/@producto = $p/@cod
and $com/@cliente = $c/@cod
return $c/telefono/data()
,"otra forma:",
for $cli in //clientes/cliente
for $can in //compras/cantidad
let $pro:= //productos/producto[nombre = "Autolavado"]
where $cli/@cod = $can/@cliente
and $can/@producto = $pro/@cod
return $cli/telefono
,"otra forma:",
let $prod := //productos/producto[nombre='Autolavado']/@cod
for $compra in //compras/cantidad
let  $cliente := //clientes/cliente[@cod=$compra/@cliente]
where $compra/@producto = $prod
return $cliente/telefono,
"Ejercicio 3",
(: Obtener el nombre y el precio de los productos comprados por el cliente con código "U300111" ordenados por precio de menor a mayor :)
for $p in //productos/producto, $com in //compras/cantidad
where  $com/@cliente="U300111"
and $com/@producto = $p/@cod
order by $p/precio descending
return <producto>{($p/precio,$p/nombre)}</producto>, 
"-----------",
for $p in (let $prod := //compras/cantidad[@cliente= 'U300111']/@producto
return $prod/data())
for $a in //productos/producto
where $a/@cod = $p
order by $a/precio descending
return ($a/nombre, $a/precio),
" Ejercicio 4 ",
(: Obtener las fechas ordenadas descendentemente en las que se ha comprado el "Control Remoto" y la cantidad:)
let $pcr := //productos/producto[nombre="Control Remoto"]/@cod
for $c in //compras/cantidad
where $c/@producto = $pcr
order by $c/@fechacompra
return <venta><fecha>{$c/@fechacompra/data()}</fecha><cantidad>{$c/data()}</cantidad></venta>
,
"------------------",
let $pcr := //productos/producto[nombre="Control Remoto"]/@cod
return <datos>{for $c in //compras/cantidad
where $c/@producto = $pcr
order by $c/@fechacompra
return <compra>
                <fecha>{$c/@fechacompra/data()}</fecha>
                <cantidad>{$c/data()}</cantidad>
          </compra>}</datos>,
(: con xpath sacamos resultados sin ordenar:)
//compras/cantidad[@producto=//productos/producto[nombre="Control Remoto"]/@cod]/(@fechacompra|./text()),
(: Ejercicio 5 :)
(: Obtener el nombre de los productos y el número total de veces que ha sido comprado cada uno de ellos, así como su valor en € :)
"Ejercicio 5",
for $p in //productos/producto
(:where $p/precio/@unidad = 'Euros':)
return <producto precio="{$p/precio/data()}" num_compras="{count(//compras/cantidad[@producto=$p/@cod])}">{$p/nombre/data()}</producto>
,"----<-<-<-<-<-<<-",
for $p in //productos/producto
let $num := count(//compras/cantidad[@producto=$p/@cod])
(:where $p/precio/@unidad = 'Euros':)
return <producto precio="{$p/precio/data()}" num_compras="{$num}">{$p/nombre/data()}</producto>,
"lllllllllllllllllllllllllllll",
for $p in //productos/producto
return concat($p/nombre/data(),"-",count(//compras/cantidad[@producto=$p/@cod])),
"---",
for $p in //productos/producto
return concat($p/nombre/data(),"-",count(
  (://compras/cantidad[@producto=$p/@cod]:)
  for $c in //compras/cantidad
  where $c/@producto=$p/@cod
  return $c)),
(: Ejercicio 6 :)
(: Obtener el nombre de todos los empleados que viven en Sevilla e indicar la localidad. En el mismo elemento que la localidad añadir la provincia: <ubicacion>Localidad (Provincia)</ubicacion> :)
"Ejercicio 6",
for $e in //empleados/empleado
where $e/provincia = 'Sevilla'
return <empleado>{$e/nombre}<ubicacion>{$e/localidad/data()} ({$e/provincia/data()})</ubicacion></empleado>
,
"Ejercicio 7",
(: Ejercicio 7 :)
(: Obtener para cada una de las categorías su nombre y el tipo al que pertenece, sin duplicados. Ordenar desde el nombre de categoría más corto hasta el más largo :)
distinct-values(for $c  in //departamentos//categorias/categoria
order by string-length($c/nombre)
return concat('Nombre: ', $c/nombre, ' - Tipo: ',$c/nombre/@tipo))
,

(: Ejercicio 8 :)
(: Obtener los nombres de las categorias que empiezan por “Pico”, sin duplicados:)
"Ejercicio 8",
distinct-values(for $cat in //categorias/categoria
where starts-with($cat/nombre,'Pico')
return $cat/nombre)
,
(: Ejercicio 9 :)
(: Devolver una lista de los años de descubrimiento como atributo de una etiqueta departamento junto con el nivel al que pertenece :)
"Ejercicio 9",
for $dep in //departamentos/departamento
return <departamento anyo_descubrimiento="{$dep/descubrimiento}" nivel="{$dep/nivel/data()}"/>
,
" Ejercicio 10 ",
(: Devolver la suma de los salarios de los empleados que viven en la provincia de Jaén y tienen código B excepto los que viven en la capital :)
sum(for $emp in //empleados/empleado
where $emp/provincia='Jaén' and $emp/@cod='B'
and $emp/localidad !='Jaén'
return $emp/salario)