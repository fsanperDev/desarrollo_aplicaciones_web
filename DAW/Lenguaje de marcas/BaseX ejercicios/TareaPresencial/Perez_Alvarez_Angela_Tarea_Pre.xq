(:----- ACTIVIDAD 1 ------- :)
for $b in //bailes/baile
where $b/sala=2
order by $b ascending
return $b/nombre/data()

(:----- ACTIVIDAD 2 ------- :),
<bailes>{
for $b in //bailes/baile
where $b/sala=1 and $b/precio>=30 and $b/precio/@moneda="euro"
order by $b/precio
return <baile precio="{$b/precio}">{$b/nombre/data()}</baile> 
}</bailes>

(:----- ACTIVIDAD 3 ------- :),
<ul>{
let $c := (for $pro in //bailes/baile where $pro/precio/@cuota="trimestral" return $pro/profesor)
for $p in //profesores/profesor
where $p/@codigo=$c
order by $p/apellidos
return <li>{$p/apellidos/data()}{", "}{$p/nombre/data()} </li>
}</ul>

(:----- ACTIVIDAD 4 ------- :),
<profesores>{
for $p in //profesores/profesor
order by $p/apellidos
return <profesor><nombre>{$p/apellidos/data()}{", "}{$p/nombre/data()}</nombre>{for $b in //bailes/baile where $b/profesor=$p/@codigo order by $b return <baile>{$b/nombre/data()}</baile>} </profesor>
}</profesores>

,
(:----- ACTIVIDAD 5 ------- :)
for $s in distinct-values(//bailes/baile/sala)
return concat("sala ", $s," - número de bailes: ", count(for $b in //bailes/baile
where $b/sala = $s return $b/nombre) )
