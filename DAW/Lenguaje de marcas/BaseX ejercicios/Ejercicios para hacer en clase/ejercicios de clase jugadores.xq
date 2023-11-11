(:Ejemplo 2: INCOMPLETO:)
<jugadores>
for $b at $i in(for $jug in //jugadores/jugador
where $jug/@cod >= 10 and $jug/@cod <= 20
order by $jug/fecha_nacimiento
return concat($jug/nombre/data(), ' ', $jug/apellido1/data(),' ', $jug/apellido2/data()))
return <jugador num="{$i}", "{$b}"/>
</jugadores>