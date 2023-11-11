<?php 
$archivo = $_GET['cual'];
$ruta = "extras/textos/institucional/$archivo.txt";

if( file_exists( $ruta ) ){
	$contenido = file_get_contents( $ruta );
	$contenido = htmlspecialchars( $contenido );
	$contenido = nl2br( $contenido );
}else{
	$contenido = '<span class="error" style="display: block">Error! el archivo solicitado, no existe</span>';
}

?>
<article>
	<h1><?php echo $archivo; ?></h1>
	<p><?php echo $contenido; ?></p>
</article>