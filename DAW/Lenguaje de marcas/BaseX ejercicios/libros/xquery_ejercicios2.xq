(:Ejemplo 1:)
(:
for $lib in doc("libros.xml")//libro
return ($lib/titulo , "<autor>"$lib/autor/nombre/data()
$lib/autor/apellido/data()"</autor>" ) :)

(:Ejemplo 2

for $lib in //libro
return <result> {$lib/titulo} <autor> {concat('123','456')} </autor></result> :)

(: Ejemplo 3 :)
for $lib in //libro
return <libro titulo="{$lib/titulo}" num_autores="{count($lib/autor)}"/>