<?php 
include( '../setup/configuracion.php' );
$email = $_POST['email'];
$c = "SELECT ID, IFNULL( NOMBRE, 'usuario' ) as NOMBRE FROM usuarios WHERE EMAIL='$email' LIMIT 1";
$f = mysqli_query( $cnx , $c );
$a = mysqli_fetch_assoc($f);
if( ! $a ){
	$_SESSION['error'] = 'Usuario inexistente';
	header( "Location: ../index.php?seccion=contrasenia" );
	die( );
}
//generar una clave aleatoria y el token

$token = md5( $a['ID'] . time( ) . rand( 1000, 9999 ) );
$clave_nueva = rand( 10000000, 99999999 );
$idusuario = $a['ID'];

$c2 = "INSERT INTO recuperar SET EMAIL='$email', TOKEN='$token', FECHA_ALTA=NOW( ), CLAVE_NUEVA='$clave_nueva' ON DUPLICATE KEY UPDATE TOKEN='$token', CLAVE_NUEVA='$clave_nueva'";
mysqli_query($cnx, $c2);

$link = "http://localhost/forms/recuperar_clave_confirmar.php?e=$email&t=$token";

//envío de mail
$mensaje = <<<EMAIL
<p>Hola $a[NOMBRE]</p>
<p>Has solicitado recuperar tu contraseña, el sistema te ha generado una nueva clave que es: <code style='background: lightyellow; color: darkred; padding: 1px 2px;'>$clave_nueva</code></p>
<p>Pero antes de poder usarla, deberás hacer <a href='$link'>click en este vínculo</a> o copiar este código en la URL de tu navegador</p>
<code style='background: black; color: white; padding: 4px;'>$link</code>
<p>Si tu no has hecho esta solicitud, ingora el presente mensaje</p>
EMAIL;

echo $mensaje;

//enviar ese mail 

$encabezados = 'MIME-Version: 1.0' . "\r\n";
$encabezados.= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$encabezados.= 'From: correo@bitblog.com' . "\r\n";
$encabezados.= 'To: ' . $email . "\r\n";
//mail( $email, 'Recupero de contraseña' , $mensaje , $encabezados );
//header( "Location: ../index.php" );

//redireccionar al formulario....
?>