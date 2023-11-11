<?php 
$cPaises = "SELECT * FROM paises ORDER BY PAIS";
$cGeneros = "SELECT * FROM generos ORDER BY GENERO";

$fPaises = mysqli_query($cnx, $cPaises);
$fGeneros = mysqli_query($cnx, $cGeneros);

$cDatos = "SELECT *, IFNULL( AVATAR, IF( FKGENERO = 1, '000_masculino.jpg', IF( FKGENERO = 2 , '000_femenino.jpg' , '000_default.jpg' ) ) ) AS AVATAR FROM usuarios WHERE ID='$_SESSION[ID]' LIMIT 1";
$fDatos = mysqli_query($cnx, $cDatos );
$a = mysqli_fetch_assoc($fDatos);

?>
		<h1>Modificar tus datos</h1>
		<form id="datos" method="post" action="forms/editar_perfil.php" enctype="multipart/form-data">
			<div>
				<div><span>Tu Nombre </span><input type="text" value="<?php echo $a['NOMBRE']; ?>" name="nombre" /></div>
				<div><span>Tu Apellido </span><input type="text" value="<?php echo $a['APELLIDO']; ?>" name="apellido" /></div>
				<div><span>Tu Email </span><input type="email" name="email" value="<?php echo $a['EMAIL']; ?>" required /></div>
				<div class="profile">
					<span>Tu Avatar actual</span>
					<div><img src="uploads/avatar-thumbs/<?php echo $a['AVATAR']; ?>" width="160" alt="Avatar actual" /></div>
					<div class="image_actions">
						<input type="file" id="new_image" name="foto" />
						<label for="new_image">Usar imagen nueva</label>

						<input type="checkbox" id="del_image" name="foto_eliminar" /> 
						<label for="del_image">Eliminar actual</label>
					</div>
				</div>

				<div><span>Tu Género </span>
					 <div class="option_group">
					 <?php 
					 while( $aGeneros = mysqli_fetch_assoc($fGeneros)):
						$checked = $a['FKGENERO'] == $aGeneros['IDGENERO'] ? 'checked' : '';

						echo "<label><input type='radio' $checked name='genero' value='$aGeneros[IDGENERO]' /> ". ucfirst( $aGeneros['GENERO'] )."</label>";
					endwhile;
					?>
						<label><input type="radio" name="genero" <?php if( empty( $a['FKGENERO'] ) ) echo "checked"; ?> value="0" /> No especificar</label>
					 </div>
				</div>
				<div><span>Tu Nacionalidad </span><select name="pais">
				<?php 
				while( $aPaises = mysqli_fetch_assoc($fPaises) ):
				$selected = $a['FKPAIS'] == $aPaises['ID'] ? 'selected' : '';
				echo "<option $selected value='$aPaises[ID]'>$aPaises[PAIS]</option>";
				endwhile;
				?>
				</select></div>
				<div><span>Tu Clave </span><input type="password" name="clave" /></div>
			</div>
			<div><input class="aligned" type="submit" value="Guardar cambios" /></div>
		</form>
