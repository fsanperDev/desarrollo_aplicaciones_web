(: esto es un comentario:)

for $a in doc("libros.xml")//libro
where $a/@anyo < 2000
return $a/titulo