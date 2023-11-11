(:-------------  Actividad 1 -----------------:)
for $p in distinct-values(doc("peliculas.xml")//titulo)
order by $p
return $p
,
(:------------   Actividad 2  ----------------:)
<socios>{
for $s in doc("socios.xml")/socios/socio
where $s/poblacion = 'Aguadulce' or $s/year-from-date(fecha_nacimiento) < 1981
return  <socio num="{$s/@num}"> {$s/nombre/data()} {" "}  {$s/apellido/data()} </socio>}
</socios>
,

(:------------   Actividad 3  ----------------:)
for $p in //peliculas/pelicula
order by $p
return concat( " - ", $p/titulo/data(),
" (", count(//peliculas/copias/copia_pelicula[cod_pelicula=$p/@cod]),
" copias)") 

(:------------   Actividad 4  ---------------:),
<ul>{
for $codp in (
for $idcp in (for $a in //alquileres/alquiler
where $a/socio = '1001'
return $a/copia_pelicula/data())
for $cp in doc("peliculas.xml")//peliculas/copias/copia_pelicula
where $idcp = $cp/@id_copia
return $cp/cod_pelicula/data())
for $p in doc("peliculas.xml")//peliculas/pelicula 
where $codp = $p/@cod
return <li>{$p/titulo/data()}</li>
}</ul>

(:---------   Actividad 5 -------------------:)

(:for $codp in distinct-values(//peliculas/copias/copia_pelicula/cod_pelicula)
for $soc in //alquileres/alquiler
return <alquileres><pelicula ref="{$codp}"></pelicula></alquileres>:)
,
"<-<-<-<-<-<-<-<-<-<-<--<-<-<",

let $codp := distinct-values(//peliculas/copias/copia_pelicula/cod_pelicula)
for $soc in //alquileres/alquiler/socio

return ($soc, $soc/../copia_pelicula )