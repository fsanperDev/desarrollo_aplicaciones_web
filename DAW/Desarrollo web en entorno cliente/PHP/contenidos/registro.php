<?php 
if( isset( $_SESSION['rta'] ) ){
	if( $_SESSION['rta'] == 'ok' ){
		$clase = 'ok';
		$mensaje = 'Usuario dado de alta satisfactoriamente, puede loguearse al sistema';
	}else{
		$clase = 'error';
		$mensaje = 'El usuario no se ha dado de alta, posiblemente la cuenta ya exista';
	}
	unset( $_SESSION['rta'] );
}else{
	$clase = 'info';
	$mensaje = 'Completa el siguiente formulario para crear tu cuenta en este blog';
}
?>
		<h1>Registrate</h1>
		<p class="<?php echo $clase; ?>"><?php echo $mensaje; ?></p>
		<form action="forms/registro.php" method="post">
			<div><span>Tu Email </span><input type="email" name="correo" /></div>
			<div><span>Tu Clave </span><input type="password" name="clave" /></div>
			<div><input class="aligned" type="submit" value="Registro" /></div>
		</form>
	</main>
