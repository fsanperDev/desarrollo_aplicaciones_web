<h1>Homepage</h1>
<section id="posts">
	<?php 
$cTextos = "SELECT * FROM listado_posteos ORDER BY FECHA_ALTA DESC LIMIT 6";
$rTextos = mysqli_query( $cnx, $cTextos );
	?>
	
	<h2>Últimos Posts</h2>

	
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

endwhile;
mysqli_free_result( $rTextos );
?>
	</ul>
	
</section>
<section id="comments">
	<h2>Últimos comentarios</h2>
	
	<ul>
<?php 
$cC = <<<SQL
SELECT 
	c.COMENTARIO,
	u.NOMBRE_USUARIO,
	u.AVATAR,
	c.FKPOSTEO
FROM 
	comentarios AS c 
	JOIN listado_usuarios AS u ON u.ID = c.FKUSUARIO
ORDER BY 
	c.FECHA_ALTA DESC 
LIMIT 6
SQL;

$fC = mysqli_query( $cnx, $cC );
echo mysqli_error($cnx);
while( $aC = mysqli_fetch_assoc($fC) ):
echo <<<HTML
		<li>
			<h3>$aC[NOMBRE_USUARIO]</h3>
			<img src="uploads/avatar-thumbs/$aC[AVATAR]" alt="$aC[NOMBRE_USUARIO]" />
			<p>$aC[COMENTARIO] <a href="index.php?seccion=leer&id=$aC[FKPOSTEO]">Leer completo</a></p>
		</li>
HTML;
endwhile;
mysqli_free_result( $fC );
?>
	

	</ul>
</section>