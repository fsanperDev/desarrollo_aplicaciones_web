<?php 
include( '../setup/configuracion.php' );

$categoria = isset( $_GET['categoria'] ) ? $_GET['categoria'] : 'dashboard';
if( !isset($_SESSION['NIVEL'] ) ){ $categoria = 'login'; }
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="recursos/estilos.css" />
	<title>Panel de control</title>
</head>
<body>
	<header>
		<h1>Panel de control</h1>
		<?php if( isset( $_SESSION['NIVEL'] ) ): ?>
		<nav>
			<ul id="menu">
				<?php if( $_SESSION['NIVEL'] == 'administrador' ): ?>
				<li><a href="index.php?categoria=categorias">Categorias</a></li>
				<li><a href="index.php?categoria=textos">Textos</a></li>
				<li><a href="index.php?categoria=usuarios">Usuarios</a></li>
				<?php endif; ?>
				<li><a href='acciones/logout.php'>Salir (<?php echo $_SESSION['NOMBRE_USUARIO']; ?>)</a></li>
			</ul>
		</nav>
		<?php endif; ?>
	</header>
	<main>
		<h2><?php echo $categoria; ?></h2>
		<?php 
		if( isset( $_SESSION['NIVEL'] ) ): 
		
			if( $_SESSION['NIVEL'] == 'administrador' ){
				switch( $categoria ){
					case 'categorias': include( 'categorias/principal.php' ); break;
					case 'textos': include( 'textos/principal.php' ); break;
					case 'usuarios': include( 'usuarios/principal.php' ); break;
					default: include( 'dashboard/principal.php' ); break;
				}
			}else{
				echo "<p class='error'>Su nivel de usuario ( $_SESSION[NIVEL] ), no posee privilegios para acceder a estar seccion</p>";
			}
		else:
			include( 'login/principal.php' );
		endif;
		?>
	</main>
</body>
</html>