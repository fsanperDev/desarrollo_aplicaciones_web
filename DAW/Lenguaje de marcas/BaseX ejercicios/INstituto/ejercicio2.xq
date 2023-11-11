<datos>{
let $v := ('A','B','C','D','E')
let $n := (1 to 3)
for $a in $v
return <nombre valor="{$a}">{
  for $b in $n
  return <num>{$b}</num>
}</nombre>
}</datos>