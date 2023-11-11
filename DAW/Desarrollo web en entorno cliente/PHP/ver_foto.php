<?php 
include( 'setup/configuracion.php' );
$id = isset( $_GET['id'] ) ? $_GET['id'] : 0;
$c = "SELECT IMAGEN FROM categorias WHERE ID='$id' LIMIT 1";
$f = mysqli_query($cnx, $c);
$a = mysqli_fetch_assoc($f);
echo $a['IMAGEN'];
?>