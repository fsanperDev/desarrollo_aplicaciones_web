<h1>Homepage</h1>
<section id="posts">
<?php 
$pagina_actual = isset( $_GET['p'] ) ? $_GET['p'] : 1;
$cantidad = 12;
	$filtroWhere = '';
	if( isset( $_GET['buscar'] ) ){
		$item = $_GET['buscar'];
		$item = trim( $item );
		if( strlen($item) < 4 ){
			echo "<p class='error'>La cantidad mínima de caracteres debe ser 4, intentelo nuevamente</p>";
		}else{
			$titulo = "Resultados para $item";
			$filtroWhere = " WHERE TITULO LIKE '%$item%' OR TEXTO LIKE '%$item%' ";
		}
	}

$cCant = "SELECT COUNT( ID ) AS CANTIDAD FROM listado_posteos $filtroWhere";
$fCant = mysqli_query($cnx, $cCant );
$aCant = mysqli_fetch_assoc( $fCant );
$cant_registros = $aCant['CANTIDAD'];
$cant_paginas = ceil( $cant_registros / $cantidad );
//echo $cant_paginas;

if( $pagina_actual > $cant_paginas ){
	$pagina_actual = $cant_paginas;
}
if( $pagina_actual < 1 ){
	$pagina_actual = 1;
}
	
$inicio = ( $pagina_actual - 1 ) * 	$cantidad;
$cTextos = "SELECT * FROM listado_posteos $filtroWhere ORDER BY FECHA_ALTA DESC LIMIT $inicio, $cantidad";

//echo "<p>$cTextos</p>";
$rTextos = mysqli_query( $cnx, $cTextos );
echo mysqli_error( $cnx );
	?>
	
	<h2><?php echo $titulo; ?></h2>

	<?php 
	if( $cant_registros == 0 ):
		echo "<p class='error'>No se han obtenido resultados, quizás le pueda interesar las siguientes publicaciones</p>";
		$cTextos = "SELECT * FROM listado_posteos ORDER BY RAND( ) DESC LIMIT 6";
		$rTextos = mysqli_query( $cnx, $cTextos );
	endif;
	?>
	
	<ul>
	
	<?php 	
while( $c = mysqli_fetch_assoc( $rTextos ) ):
$imagen = !empty( $c['FOTO'] ) ? 
	"<img src='uploads/posts-thumbs/$c[FOTO]' alt='Imagen de $c[TITULO]' style='border: 1px solid red' />":
	'';
	
echo <<<HTML
<li>
	<h3>$c[TITULO]</h3>
	$imagen
	<p>$c[PREVIEW] <a href="index.php?seccion=leer&id=$c[ID]">Leer completo</a></p>
	<small>Publicado el $c[FECHA_SPA] en $c[CATEGORIAS] - $c[CANTIDAD] comentarios</small>
</li>
HTML;

//var_dump($c);
endwhile;
mysqli_free_result( $rTextos );
?>
	</ul>
<?php 
if( $cant_paginas > 1 ):
?>
	<div class="paginador">
			<ul>
			<?php 
			for( $i = 1; $i <= $cant_paginas; $i++ ){
				echo "<li><a ";
				if( $i == $pagina_actual ){
					echo ' class="actual" ';
				}
				echo "href='index.php?buscar=$item&p=$i'>pág. $i</a></li>";
			}
?>			
			</ul>
		</div>
<?php 
endif; 
?>
</section>