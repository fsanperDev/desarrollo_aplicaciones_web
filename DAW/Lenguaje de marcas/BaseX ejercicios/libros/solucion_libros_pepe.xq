"1 - Listar el título de todos los libros.
",
/bib//titulo
, "----otra forma----",
for $i in /bib/libro
return $i/titulo
,
"
2-Listar año y título de todos los libros, ordenados por el año.
",
(: vamos a hacerlo paso a paso
listar año y titulo de los libros:)
for $a in doc("libros.xml")/bib/libro
return ($a/titulo,<a>($a/@anyo)</a>,<a>{$a/@anyo}</a>,<a>{data($a/@anyo)}</a>),
"------------------",
for $a in doc("libros.xml")/bib/libro
order by $a/@anyo
return <libro><anyo>{data($a/@anyo)}</anyo>{$a/titulo}</libro>
,"
3- Listar los libros cuyo precio sea 65.95
",
for $a in doc("libros.xml")/bib/libro
where $a/precio=65.95
return $a,
"
4-Listar los libros publicados antes del año 2000",
for $a in doc("libros.xml")/bib/libro
where $a/@anyo<2000
return $a,
"
5-Listar año y título de los libros publicados por Addison-Wesley después del año 1992.",
for $a in doc("libros.xml")/bib/libro
where $a/editorial = "Addison-Wesley" and $a/@anyo>1992
return <libro><anyo>{data($a/@anyo)}</anyo>{$a/titulo}</libro>
,
"
-----------------------------------
Vamos a ver la diferencia entre for y let",
for $d in doc("libros.xml")/bib/libro 
return <libro>{$d/titulo}</libro>
,
"------",
let $d := doc("libros.xml")/bib/libro 
return <libro>{$d/titulo}</libro>
,
"-----",
for $b in doc("libros.xml")//libro
let $c := $b/autor
return
<libro>{ $b/titulo, <autores>{ count($c) }</autores>}</libro>,
let $pepe := ('hola', 'adios', 'hasta luego que me voy para clase')
return <a>{count($pepe)}</a>,
"
6-Listar año y título de los libros que tienen más de un autor.",
for $a in doc("libros.xml")/bib/libro
where count($a/autor)>1
return <libro><anyo>{data($a/@anyo)}</anyo>{$a/titulo}</libro>
,
"
Si en la consulta aparece más de una clausula for, el resultado es el producto cartesiano"
,
for $t in doc("libros.xml")//titulo,
$e in doc("comentarios.xml")//entrada
where $t = $e/titulo
return <comentario>{ $t, $e/comentario }</comentario>,
"otro ejemplo :
",
for $b in doc("libros.xml")//libro
return
<libro>
{ $b/titulo }
{
for $a at $i in $b/autor
where $i <= 2
return <autor>{($a/apellido/text()), ", " , $a/nombre/text()}</autor>
} 
{
if (count($b/autor) > 2)
then <autor>etc...</autor>
else () (: es obligatorio poner else :)
}
</libro>,
"
7-Listar año y título de los libros que tienen no tienen autor."
,for $a in doc("libros.xml")/bib/libro
where count($a/autor)=0
return <libro><anyo>{data($a/@anyo)}</anyo>{$a/titulo}</libro>
,
"8-Mostrar los apellidos de los autores que aparecen en el documento, sin repeticiones, ordenados alfabéticamente.",
for $a in distinct-values(doc("libros.xml")/bib/libro/autor/apellido)
order by $a
return $a
,
"9-Por cada libro, listar agrupado en un elemento <result> su titulo y autores",
for $a in doc("libros.xml")/bib/libro
return <result>{$a/titulo}{$a/autor}</result>
,
"10-Por cada libro, obtener su título y el número de autores, agrupados en un elemento <libro>",
for $a in doc("libros.xml")/bib/libro
return <libro titulo="{$a/titulo}" num_autores="{count($a/autor)}"/>
,
"
11 - mostrar los apellidos de todos los autores o editores",
for $l in distinct-values(doc("libros.xml")
//(autor | editor)/apellido)
order by $l
return <apellidos>{ $l }</apellidos>
,
"
12-  mostrar todos los nodos del árbol del libro de título “TCP/IP Illustrated” menos el precio.
",
for $b in doc("libros.xml")//libro
where $b/titulo = "TCP/IP Illustrated"
return
<libro>
{ $b/@* }
{ $b/* except $b/precio }
</libro>