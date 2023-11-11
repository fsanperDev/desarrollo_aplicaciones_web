(: queremos mostrar los diferentes ciclos, y las distintas asignaturas de cada uno, agrupadas por curso. El formato que queremos de salida es el siguiente:

<ciclos>
  <ciclo nombre="Administración de sistemas informáticos en red">
    <curso num="1º">
      <asignatura>Lenguajes de marcas</asignatura>
      <asignatura>Planificación y administración de redes</asignatura>
    </curso>
    <curso num="2º">
      <asignatura>Servicios de red e Internet</asignatura>
    </curso>
  </ciclo>
  <ciclo> 
      ....... 
  </ciclo>
</ciclos> :)

<ciclos>{
  for $c in doc("instituto.xml")//ciclos/ciclo
  return <ciclo nombre="{$c/nombre}">
  {let $num := ('1º', '2º')
  for $num_curso in $num
  return <curso num="{$num_curso}">
      {for $a in doc("instituto.xml")//asignaturas/asignatura
    where $c/@cod_ciclo = $a/@cod_ciclo and $a/curso = $num_curso
    return <asignatura>{$a/nombre/data()}</asignatura>}</curso>
}
  </ciclo>
}</ciclos>
,
"<-<-<-<-<-<--<-<-<-<-<-<-<-<-<-<-<-<-<-"
(: Nombre de alumno junto al nº de asignaturas matriculadas :),
for $a in //alumnos/alumno
let $x := $a//asignatura
return concat($a/nombre/data(),' ',$a/apellido1/data(),' ',$a/apellido1/data(),', ','nº de asignaturas: ',count($x))
,
"<-<-<-<-<-<--<-<-<-<-<-<-<-<-<-<-<-<-<-"
(:  :),
for $a in //alumnos/alumno, $c in //ciclos/ciclo
where $a/estudios/ciclo/@cod_ciclo = $c/@cod_ciclo
return ($a/nombre/data(),'-', $c/nombre/data())