(:for $codp in distinct-values(//peliculas/copias/copia_pelicula/cod_pelicula)
for $soc in //alquileres/alquiler
return <alquileres><pelicula ref="{$codp}"></pelicula></alquileres>:)

"<-<-<-<-<-<-<-<-<-<-<--<-<-<",

let $codp := distinct-values(//peliculas/copias/copia_pelicula/cod_pelicula)
for $soc in //alquileres/alquiler/socio

return ($soc, $soc/../copia_pelicula )