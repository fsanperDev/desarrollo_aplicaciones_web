<?php 
$c = <<<SQL
SELECT 
	ID,
	CATEGORIA,
	IMAGEN,
	( SELECT COUNT( FKPOSTEO ) FROM relacion WHERE FKCATEGORIA = ID ) AS CANTIDAD,
	( SELECT MAX(FECHA_ALTA) FROM posteos AS p JOIN relacion ON p.ID = FKPOSTEO ) AS ULTIMO_POSTEO
FROM
	categorias 
ORDER BY
	CATEGORIA
SQL;
$f = mysqli_query($cnx, $c);
echo mysqli_error($cnx);
?>
		<h1>Categorías</h1>
		<section id="categorias">
			<h2>Listado</h2>
			<ul>
			<?php while( $a = mysqli_fetch_assoc($f)) : ?>
				<li>
					<h3><?php echo $a['CATEGORIA'];?></h3>
					<?php 
					/*
					<img src="ver_foto.php?id=<?php echo $a['ID']; ?>" alt="Imagen de la categoría"  />
					*/ 
					$base64 = base64_encode( $a['IMAGEN'] );
					?>
					<img src="data:image/jpeg;base64,<?php echo $base64; ?>" alt="<?php echo $a['CATEGORIA'];?>" />
					<p><?php echo $a['CANTIDAD']; ?> posts, última publicación el <?php echo $a['ULTIMO_POSTEO']; ?></p>
					<p><a href="index.php?seccion=categoria&idc=<?php echo $a['ID'];?>">Ir a la categoría</a></p>
				</li>
			<?php endwhile; ?>
			</ul>
		</section>

