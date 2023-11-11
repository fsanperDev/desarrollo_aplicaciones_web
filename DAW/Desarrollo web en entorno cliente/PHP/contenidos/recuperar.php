<?php 
if( isset( $_SESSION['error'] ) ){
	$class = 'error';
	$mensaje = $_SESSION['error'];
	unset( $_SESSION['error'] );
}else if( isset( $_SESSION['rta'] ) ){
	$class = 'ok';
	$mensaje = $_SESSION['rta'];
}else{
	$class = 'info';
	$mensaje = 'Ingresa tu correo y te haremos recuperar la clave de acceso al blog';
}
?>
		<h1>Recuperar contraseña</h1>
		<p class="<?php echo $class; ?>"><?php echo $mensaje; ?></p>
		<form method="post" action="forms/recuperar_clave.php">
			<div><span>Tu Email </span><input type="email" name="email"/></div>
			<div><input class="aligned" type="submit" value="Recuperar" /></div>
		</form>
