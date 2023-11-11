<?php
$id = escape( $_GET['id'] );

$c = "SELECT * FROM posteos WHERE ID='$id'";
$r = mysqli_query($cnx, $c); //le puedo pedir el num_rows (cant filas afectadas)
$d = mysqli_fetch_assoc($r); //le puedo preguntar si tiene contenido

$permisos = explode( ',', $d['PREFERENCIAS'] );
//var_dump($permisos);
// var_dump( mysqli_num_rows($r) );
// var_dump( $d );

if( $d ){ //si da verdadero tengo un array al menos con un índice....

$cComm = <<<SQL
SELECT 
	NOMBRE_USUARIO,
	AVATAR,
	COMENTARIO,
	DATE_FORMAT( c.FECHA_ALTA, '%d-%m-%Y a las %H:%ihs' ) AS FECHA_COMENTARIO
FROM 
	comentarios AS c
	JOIN listado_usuarios AS u ON c.FKUSUARIO = u.ID
WHERE 
	c.FKPOSTEO = '$id'
ORDER BY 
	c.FECHA_ALTA DESC
SQL;

$rComm = mysqli_query($cnx, $cComm);
echo mysqli_error($cnx);


$titulo = $d['TITULO'];
$contenido = $d['TEXTO'];
$foto = ( ! empty( $d['FOTO'] ) )?
	"<img src='uploads/posts-large/$d[FOTO]' width='900' alt='$titulo' />":
	'';
?>

		<article>
			<h1><?php echo $titulo; ?></h1>
		
			<?php echo $foto; ?>
		
			<p><?php echo nl2br($contenido); ?></p>
			
			<?php 
			if( in_array( 'descargar' , $permisos ) ){
				echo "<a href='forms/exportar_word.php?id=$id'>Descargar en Word</a>";
				echo "<a href='forms/exportar_pdf.php?id=$id'>Descargar en PDF</a>";
			}
			?>
		</article>
		
		<section id="comments">
			<h2>Comentarios</h2>
			
			<ul class="row">
<?php 
while( $colComm = mysqli_fetch_assoc($rComm) ):
$comentario = nl2br( $colComm['COMENTARIO'] );
echo <<<HTML
				<li>
					<div>
						<h3>$colComm[NOMBRE_USUARIO]</h3>
						<small>$colComm[FECHA_COMENTARIO]</small>
					</div>
					<img src="uploads/avatar-thumbs/$colComm[AVATAR]" alt="Avatar de $colComm[NOMBRE_USUARIO]" />
					<p>$comentario</p>
				</li>
HTML;
endwhile;
mysqli_free_result( $rComm );
?>
			</ul>
			
			<h2>Deja tu comentario</h2>
			<?php 
			if( ! in_array( 'comentar', $permisos ) ){
				echo "<p class='error'>El autor deshabilitó los comentarios...</p>";
			}else{
			
			if( isset( $_SESSION['ID'] ) ): 
			?>
			<form method="post" action="forms/comentar.php">
				<textarea rows="6" cols="70" name="comentario"></textarea>
				<input type="hidden" name="id" value="<?php echo $id; ?>" />
				<input type="submit" value="Comentar" />
			</form>
			<?php 
			else: 
				echo "<p class='info'>Para comentar, primero tenes que estar logueado</p>";
			endif;
			
			} //cierre de las preferencias de comentar...
			?>
		</section>
<?php 
}else{ //no tengo ningún índice en el array, no hubo resultados
	echo '<h1>Error!</h1>';
	echo "<p class='error'>La publicación solicitada no existe</p>";
}
?>