<?php 
$idc = $_GET['idc'];
$pagina_actual = isset( $_GET['p'] ) ? $_GET['p'] : 1;
//echo "<p>Pagina $pagina_actual</p>";

$cantPorPagina = 9;

$cCat = "SELECT CATEGORIA FROM categorias WHERE ID='$idc'";
$rCat = mysqli_query($cnx, $cCat);
$cat = mysqli_fetch_assoc($rCat);

$cTextos2 = "SELECT COUNT(ID) AS TOTAL FROM listado_posteos JOIN relacion ON ID = FKPOSTEO WHERE FKCATEGORIA = $idc";
$rTextos2 = mysqli_query($cnx, $cTextos2);
$aTextos2 = mysqli_fetch_assoc($rTextos2);
$cantResultados = $aTextos2['TOTAL'];
$cantPaginas = ceil($cantResultados / $cantPorPagina);

if( $pagina_actual > $cantPaginas ){
	$pagina_actual = $cantPaginas;
}
if( $pagina_actual < 1 ){
	$pagina_actual = 1;
}
echo "VIendo $pagina_actual";

$dondeInicio = ($pagina_actual - 1) * $cantPorPagina;

$cTextos = <<<SQL
SELECT 
	*
FROM
	listado_posteos
	JOIN relacion ON ID = FKPOSTEO
WHERE 
	FKCATEGORIA = $idc
LIMIT $dondeInicio, $cantPorPagina
SQL;

$rTextos = mysqli_query( $cnx, $cTextos );

//echo $cTextos;
?>
		<h1>Categoría <?php echo $cat['CATEGORIA'] ;?></h1>
		<section id="posts">
			<h2>Últimos Posts</h2>
			<ul>
<?php 
while( $c = mysqli_fetch_assoc($rTextos) ):
$imagen = ! empty( $c['FOTO'] ) ?
	"<img src='uploads/posts-thumbs/$c[FOTO]' alt='$c[TITULO]'  />":
	"";

echo <<<HTML
				<li>
					<h3>$c[TITULO]</h3>
					$imagen
					<p>$c[PREVIEW] <a href="index.php?seccion=leer&id=$c[ID]">Leer completo</a></p>
					<small>Publicado por $c[AUTOR] el $c[FECHA_SPA] en $c[CATEGORIAS] - $c[CANTIDAD] comentarios</small>
				</li>
HTML;
endwhile;
mysqli_free_result( $rTextos );
?>
			</ul>	
		</section>
		
		<?php 
		if( $cantPaginas > 1 ):
		?>
		<div class="paginador">
			<ul>
			<?php 
			for( $i = 1; $i <= $cantPaginas; $i++ ){
				echo "<li><a ";
				if( $pagina_actual == $i ){
					echo 'class="actual" ';
				}
				echo "href='index.php?seccion=categoria&idc=$idc&p=$i'>pág. $i</a></li>";
			}
?>			
				<!--
				<li><a href="index.php?seccion=categoria&idc=<?php echo $idc; ?>&p=2" class="actual">pág. 2</a></li>
				<li><a href="index.php?seccion=categoria&idc=<?php echo $idc; ?>&p=3">pág. 3</a></li>
				<li><a href="index.php?seccion=categoria&idc=<?php echo $idc; ?>&p=4">pág. 4</a></li>
				-->
			</ul>
		</div>
		<?php 
		endif; 
		?>
